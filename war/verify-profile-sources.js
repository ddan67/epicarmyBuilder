#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');
const http = require('http');

const WAR_DIR = __dirname;

const DATASETS = [
	{
		id: 'knightWorld',
		file: path.join(WAR_DIR, 'js', 'unitProfiles.knightWorld.js'),
		profilesPath: ['ArmyforgeUnitProfiles', 'knightWorld', 'profiles'],
		sources: [
			'https://tp.net-armageddon.org/army-lists/adeptus-mechanicus-knight-world.html'
		]
	},
	{
		id: 'orkWarHorde',
		file: path.join(WAR_DIR, 'js', 'unitProfiles.orkWarHorde.js'),
		profilesPath: ['ArmyforgeUnitProfiles', 'orkWarHorde', 'profiles'],
		sources: [
			'https://tp.net-armageddon.org/army-lists/ork-war-horde.html'
		]
	},
	{
		id: 'orkFeralOrks',
		file: path.join(WAR_DIR, 'js', 'unitProfiles.orkFeralOrks.js'),
		profilesPath: ['ArmyforgeUnitProfiles', 'orkFeralOrks', 'profiles'],
		sources: [
			'https://tp.net-armageddon.org/army-lists/ork-feral-orks.html'
		]
	},
	{
		id: 'orkGargantMob',
		file: path.join(WAR_DIR, 'js', 'unitProfiles.orkGargantMob.js'),
		profilesPath: ['ArmyforgeUnitProfiles', 'orkGargantMob', 'profiles'],
		sources: [
			'https://tp.net-armageddon.org/army-lists/ork-gargant-mob.html'
		]
	},
	{
		id: 'spaceMarineFamily',
		file: path.join(WAR_DIR, 'js', 'unitProfiles.spaceMarineFamily.js'),
		profilesPath: ['ArmyforgeUnitProfiles', 'spaceMarineFamily', 'profiles'],
		sources: [
			'https://tp.net-armageddon.org/army-lists/space-marine-codex-astartes.html',
			'https://tp.net-armageddon.org/army-lists/space-marine-imperial-fists.html',
			'https://tp.net-armageddon.org/army-lists/space-marine-raven-guard.html',
			'https://tp.net-armageddon.org/army-lists/space-marine-salamanders.html',
			'https://tp.net-armageddon.org/army-lists/space-marine-scions-of-iron.html',
			'https://tp.net-armageddon.org/army-lists/space-marine-space-wolves.html',
			'https://tp.net-armageddon.org/army-lists/space-marine-white-scars.html'
		]
	}
];

function createSandbox() {
	const sandbox = {
		ArmyforgeUnitProfiles: {},
		console: console
	};
	vm.createContext(sandbox);
	vm.runInContext(
		"String.prototype.strip = function(){ return this.trim(); }; " +
		"Array.prototype.member = function(x){ return this.indexOf(x) !== -1; };",
		sandbox
	);
	return sandbox;
}

function loadProfiles(dataset) {
	const sandbox = createSandbox();
	const source = fs.readFileSync(dataset.file, 'utf8');
	vm.runInContext(source, sandbox, { filename: dataset.file });
	let current = sandbox;
	for (const key of dataset.profilesPath) {
		current = current && current[key];
	}
	if (!current || typeof current !== 'object') {
		throw new Error(`Could not load profiles from ${dataset.file}`);
	}
	return current;
}

function getUrl(url, redirectCount) {
	return new Promise((resolve, reject) => {
		const client = url.startsWith('https:') ? https : http;
		client.get(url, function(response) {
			const status = response.statusCode || 0;
			if (status >= 300 && status < 400 && response.headers.location) {
				response.resume();
				if (redirectCount > 5) {
					reject(new Error(`Too many redirects for ${url}`));
					return;
				}
				const nextUrl = new URL(response.headers.location, url).toString();
				resolve(getUrl(nextUrl, redirectCount + 1));
				return;
			}
			if (status < 200 || status >= 300) {
				reject(new Error(`HTTP ${status} for ${url}`));
				return;
			}
			response.setEncoding('utf8');
			let body = '';
			response.on('data', function(chunk) { body += chunk; });
			response.on('end', function() { resolve(body); });
		}).on('error', reject);
	});
}

async function getUrlWithRetry(url, attempts) {
	let lastError = null;
	for (let i = 0; i < attempts; i += 1) {
		try {
			return await getUrl(url, 0);
		}
		catch (error) {
			lastError = error;
		}
	}
	throw lastError;
}

function decodeEntities(text) {
	return text
		.replace(/&nbsp;/gi, ' ')
		.replace(/&amp;/gi, '&')
		.replace(/&quot;/gi, '"')
		.replace(/&#39;/gi, "'")
		.replace(/&rsquo;/gi, "'")
		.replace(/&ndash;/gi, '-')
		.replace(/&mdash;/gi, '-')
		.replace(/&times;/gi, 'x')
		.replace(/&lt;/gi, '<')
		.replace(/&gt;/gi, '>')
		.replace(/&#(\d+);/g, function(_, code) {
			return String.fromCharCode(parseInt(code, 10));
		});
}

function stripTags(html) {
	return decodeEntities(
		html
			.replace(/<br\s*\/?>/gi, '\n')
			.replace(/<li\b[^>]*>/gi, '\n- ')
			.replace(/<\/(p|div|tr|table|ul|ol|h\d)>/gi, '\n')
			.replace(/<[^>]+>/g, ' ')
	)
		.replace(/\s+/g, ' ')
		.trim();
}

function htmlToLines(html) {
	const cleaned = html
		.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
		.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
		.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '')
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<li\b[^>]*>/gi, '\n* ')
		.replace(/<\/li>/gi, '\n')
		.replace(/<h[1-6]\b[^>]*>/gi, '\n## ')
		.replace(/<\/h[1-6]>/gi, '\n')
		.replace(/<(?:p|div|section|article|table|tr|ul|ol|blockquote|main|header|footer)\b[^>]*>/gi, '\n')
		.replace(/<\/(?:p|div|section|article|table|tr|ul|ol|blockquote|main|header|footer)>/gi, '\n')
		.replace(/<[^>]+>/g, ' ');
	return decodeEntities(cleaned)
		.replace(/\r/g, '')
		.split('\n')
		.map(function(line) {
			return line.replace(/\s+/g, ' ').trim();
		})
		.filter(Boolean);
}

function normalizeBasic(value) {
	return String(value || '')
		.toLowerCase()
		.replace(/[’']/g, "'")
		.replace(/[–—]/g, '-')
		.replace(/×/g, 'x')
		.replace(/\s+/g, ' ')
		.trim();
}

function normalizeLabel(value) {
	return normalizeBasic(value)
		.replace(/[^a-z0-9+'\/\-\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function normalizeAbilityList(list) {
	return (list || [])
		.map(normalizeBasic)
		.filter(Boolean)
		.sort();
}

function flattenWeapons(weapons) {
	return (weapons || []).map(function(weapon) {
		return [
			normalizeBasic(weapon.name),
			normalizeBasic(weapon.range),
			normalizeBasic(weapon.firepower),
			normalizeAbilityList(weapon.notes).join('|')
		].join(' :: ');
	}).sort();
}

function buildLocalComparable(profile) {
	return {
		name: normalizeBasic(profile.name),
		type: normalizeBasic(profile.type),
		speed: normalizeBasic(profile.speed),
		armour: normalizeBasic(profile.armour),
		cc: normalizeBasic(profile.cc),
		ff: normalizeBasic(profile.ff),
		weapons: flattenWeapons(profile.weapons),
		abilities: normalizeAbilityList(profile.abilities)
	};
}

function rowLooksStatLike(cells) {
	if (cells.length < 6) {
		return false;
	}
	const sample = cells.slice(1, 6).map(normalizeBasic);
	const statHits = sample.filter(function(value) {
		return /^(inf|av|we|lv|ac|sc|ch|fort|fortification|fortified position)/.test(value) ||
			/\d+\+/.test(value) ||
			/\d+cm/.test(value) ||
			value === '-' ||
			value === 'n/a';
	});
	return statHits.length >= 4;
}

function isDatasheetSection(line) {
	return /^##\s+.+(forces|positions)$/i.test(line);
}

function isTypeToken(value) {
	return /^(INF|AV|WE|LV|AC|SC|CH|FORT)$/i.test(value);
}

function isSpeedToken(value) {
	return /^(?:\d+cm|0cm|-|n\/a|Bomber|Fighter-Bomber|Fighter|Spacecraft)$/i.test(value);
}

function isStatToken(value) {
	return /^(?:\d+\+|-|n\/a)$/i.test(value);
}

function parseProfileHeaderAt(lines, index) {
	if (index + 5 >= lines.length) {
		return null;
	}
	if (!isTypeToken(lines[index + 1])) {
		return null;
	}
	if (!isSpeedToken(lines[index + 2])) {
		return null;
	}
	if (!isStatToken(lines[index + 3]) || !isStatToken(lines[index + 4]) || !isStatToken(lines[index + 5])) {
		return null;
	}
	return {
		name: lines[index],
		type: lines[index + 1],
		speed: lines[index + 2],
		armour: lines[index + 3],
		cc: lines[index + 4],
		ff: lines[index + 5]
	};
}

function isWeaponLine(line) {
	return /(?:\d+cm|\(\d+cm\)|\(bc\)|\bbc\b|n\/a)$/i.test(line) && !/^critical hit effect:/i.test(line);
}

function normalizeBullet(line) {
	return line.replace(/^[*-]\s*/, '').trim();
}

function parseProfileBlock(header, blockLines, section) {
	const profile = {
		name: header.name,
		type: header.type,
		speed: header.speed,
		armour: header.armour,
		cc: header.cc,
		ff: header.ff,
		weapons: [],
		abilities: [],
		sourceSection: section
	};

	for (let i = 0; i < blockLines.length; i += 1) {
		const line = blockLines[i];
		if (/^[*-]\s+/.test(line)) {
			profile.abilities.push(normalizeBullet(line));
			continue;
		}
		if (isWeaponLine(line)) {
			const weapon = {
				name: line,
				range: '',
				firepower: '',
				notes: []
			};
			const weaponMatch = line.match(/^(.*?)\s+(\d+cm|\(\d+cm\)|\(bc\)|bc|n\/a)$/i);
			if (weaponMatch) {
				weapon.name = weaponMatch[1];
				weapon.range = weaponMatch[2];
			}
			if (i + 1 < blockLines.length && !/^[*-]\s+/.test(blockLines[i + 1]) && !isWeaponLine(blockLines[i + 1]) && !parseProfileHeaderAt(blockLines, i + 1)) {
				weapon.firepower = blockLines[i + 1];
				i += 1;
			}
			while (i + 1 < blockLines.length && /^[*-]\s+/.test(blockLines[i + 1])) {
				weapon.notes.push(normalizeBullet(blockLines[i + 1]));
				i += 1;
			}
			while (i + 1 < blockLines.length && /^or\b/i.test(blockLines[i + 1])) {
				weapon.notes.push(blockLines[i + 1]);
				i += 1;
				if (i + 1 < blockLines.length && !/^[*-]\s+/.test(blockLines[i + 1]) && !isWeaponLine(blockLines[i + 1]) && !parseProfileHeaderAt(blockLines, i + 1)) {
					weapon.notes.push(blockLines[i + 1]);
					i += 1;
				}
				while (i + 1 < blockLines.length && /^[*-]\s+/.test(blockLines[i + 1])) {
					weapon.notes.push(normalizeBullet(blockLines[i + 1]));
					i += 1;
				}
			}
			profile.weapons.push(weapon);
			continue;
		}
		profile.abilities.push(line);
	}

	return profile;
}

function extractProfilesFromSection(lines, section) {
	const profiles = [];
	for (let i = 0; i < lines.length; i += 1) {
		const header = parseProfileHeaderAt(lines, i);
		if (!header) {
			continue;
		}
		let nextIndex = i + 6;
		while (nextIndex < lines.length && !parseProfileHeaderAt(lines, nextIndex)) {
			nextIndex += 1;
		}
		profiles.push(parseProfileBlock(header, lines.slice(i + 6, nextIndex), section));
		i = nextIndex - 1;
	}
	return profiles;
}

function extractCandidateRows(html) {
	const lines = htmlToLines(html);
	const profiles = [];
	let currentSection = '';
	let currentSectionLines = [];

	function flushSection() {
		if (currentSection && isDatasheetSection(`## ${currentSection}`)) {
			profiles.push.apply(profiles, extractProfilesFromSection(currentSectionLines, currentSection));
		}
		currentSectionLines = [];
	}

	lines.forEach(function(line) {
		if (/^##\s+/.test(line)) {
			flushSection();
			currentSection = line.replace(/^##\s+/, '');
			return;
		}
		if (currentSection) {
			currentSectionLines.push(line);
		}
	});
	flushSection();
	return profiles;
}

function compareArrays(localArray, sourceArray) {
	if (localArray.length !== sourceArray.length) {
		return false;
	}
	for (let i = 0; i < localArray.length; i += 1) {
		if (localArray[i] !== sourceArray[i]) {
			return false;
		}
	}
	return true;
}

function buildSourceComparable(profile) {
	return {
		name: normalizeBasic(profile.name),
		type: normalizeBasic(profile.type),
		speed: normalizeBasic(profile.speed),
		armour: normalizeBasic(profile.armour),
		cc: normalizeBasic(profile.cc),
		ff: normalizeBasic(profile.ff),
		weapons: flattenWeapons(profile.weapons),
		abilities: normalizeAbilityList(profile.abilities)
	};
}

function compareProfile(profileKey, profile, sourceRows) {
	const local = buildLocalComparable(profile);
	const candidates = sourceRows.filter(function(candidate) {
		return normalizeLabel(candidate.name) === normalizeLabel(profile.name);
	});
	if (!candidates.length) {
		return {
			status: 'unverifiable',
			reason: 'no_confident_source_row'
		};
	}
	let source = candidates[0];
	let sourceComparable = buildSourceComparable(source);
	if (candidates.length > 1) {
		let bestScore = Infinity;
		candidates.forEach(function(candidate) {
			const comparable = buildSourceComparable(candidate);
			const score = ['type', 'speed', 'armour', 'cc', 'ff'].reduce(function(total, field) {
				return total + (local[field] === comparable[field] ? 0 : 1);
			}, 0);
			if (score < bestScore) {
				bestScore = score;
				source = candidate;
				sourceComparable = comparable;
			}
		});
	}

	const mismatches = [];
	['name', 'type', 'speed', 'armour', 'cc', 'ff'].forEach(function(field) {
		if (local[field] !== sourceComparable[field]) {
			mismatches.push({
				field: field,
				local: profile[field],
				source: source[field]
			});
		}
	});

	if (sourceComparable.weapons.length) {
		const localWeaponText = local.weapons.join(' || ');
		const sourceWeaponText = sourceComparable.weapons.join(' || ');
		if (localWeaponText !== normalizeBasic(sourceWeaponText)) {
			mismatches.push({
				field: 'weapons',
				local: profile.weapons,
				source: source.weapons
			});
		}
	}

	if (sourceComparable.abilities.length && !compareArrays(local.abilities, sourceComparable.abilities)) {
		mismatches.push({
			field: 'abilities',
			local: profile.abilities,
			source: source.abilities
		});
	}

	return mismatches.length ? {
		status: 'mismatch',
		mismatches: mismatches
	} : {
		status: 'ok'
	};
}

async function fetchSourceRows(url) {
	const html = await getUrlWithRetry(url, 3);
	return extractCandidateRows(html);
}

async function runDataset(dataset) {
	const profiles = loadProfiles(dataset);
	const allRows = [];
	const fetchErrors = [];
	for (const url of dataset.sources) {
		try {
			const rows = await fetchSourceRows(url);
			allRows.push.apply(allRows, rows);
		}
		catch (error) {
			fetchErrors.push({ url: url, error: error.message });
		}
	}

	if (!allRows.length) {
		return {
			dataset: dataset.id,
			status: 'unverifiable',
			reason: fetchErrors.length ? 'source_fetch_failed' : 'no_parseable_source_rows',
			errors: fetchErrors
		};
	}

	const results = [];
	Object.keys(profiles).sort().forEach(function(profileKey) {
		results.push({
			profileKey: profileKey,
			profileName: profiles[profileKey].name,
			result: compareProfile(profileKey, profiles[profileKey], allRows)
		});
	});

	return {
		dataset: dataset.id,
		status: 'ok',
		fetchErrors: fetchErrors,
		results: results
	};
}

function printDatasetReport(report) {
	console.log(`\n[dataset] ${report.dataset}`);
	if (report.status !== 'ok') {
		console.log(`status: ${report.status}`);
		console.log(`reason: ${report.reason}`);
		(report.errors || []).forEach(function(error) {
			console.log(`source_error: ${error.url} :: ${error.error}`);
		});
		return;
	}

	(report.fetchErrors || []).forEach(function(error) {
		console.log(`source_warning: ${error.url} :: ${error.error}`);
	});

	let mismatchCount = 0;
	let unverifiableCount = 0;
	report.results.forEach(function(entry) {
		if (entry.result.status === 'mismatch') {
			mismatchCount += 1;
			console.log(`profile: ${entry.profileKey} :: ${entry.profileName}`);
			entry.result.mismatches.forEach(function(mismatch) {
				console.log(`  mismatch.${mismatch.field}`);
				console.log(`    local : ${JSON.stringify(mismatch.local)}`);
				console.log(`    source: ${JSON.stringify(mismatch.source)}`);
			});
		}
		if (entry.result.status === 'unverifiable') {
			unverifiableCount += 1;
			console.log(`profile: ${entry.profileKey} :: ${entry.profileName}`);
			console.log(`  unverifiable: ${entry.result.reason}`);
		}
	});

	console.log(`summary: mismatches=${mismatchCount} unverifiable=${unverifiableCount} total=${report.results.length}`);
}

async function main() {
	for (const dataset of DATASETS) {
		const report = await runDataset(dataset);
		printDatasetReport(report);
	}
}

main().catch(function(error) {
	console.error(error && error.stack ? error.stack : String(error));
	process.exit(1);
});
