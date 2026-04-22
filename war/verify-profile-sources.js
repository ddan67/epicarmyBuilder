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

function parseTables(html) {
	const cleaned = html
		.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
		.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
	const tables = [];
	const tableRegex = /<table\b[^>]*>([\s\S]*?)<\/table>/gi;
	let tableMatch;
	while ((tableMatch = tableRegex.exec(cleaned))) {
		const rows = [];
		const rowRegex = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
		let rowMatch;
		while ((rowMatch = rowRegex.exec(tableMatch[1]))) {
			const cells = [];
			const cellRegex = /<(td|th)\b[^>]*>([\s\S]*?)<\/\1>/gi;
			let cellMatch;
			while ((cellMatch = cellRegex.exec(rowMatch[1]))) {
				cells.push(stripTags(cellMatch[2]));
			}
			if (cells.length) {
				rows.push(cells);
			}
		}
		if (rows.length) {
			tables.push(rows);
		}
	}
	return tables;
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

function extractCandidateRows(html) {
	return parseTables(html).reduce(function(allRows, table) {
		return allRows.concat(table.filter(rowLooksStatLike));
	}, []);
}

function inferSourceProfileFromRow(profileName, row) {
	if (!row || row.length < 6) {
		return null;
	}
	const inferred = {
		name: row[0],
		type: row[1],
		speed: row[2],
		armour: row[3],
		cc: row[4],
		ff: row[5],
		weapons: [],
		abilities: []
	};
	if (row[6]) {
		inferred.weapons = [normalizeBasic(row[6])];
	}
	if (row[7]) {
		inferred.abilities = row.slice(7).join(' | ').split(/\s*\|\s*/).map(normalizeBasic).filter(Boolean);
	}
	if (normalizeLabel(inferred.name) !== normalizeLabel(profileName)) {
		return null;
	}
	return inferred;
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

function compareProfile(profileKey, profile, sourceRows) {
	const local = buildLocalComparable(profile);
	const row = sourceRows.find(function(candidate) {
		return normalizeLabel(candidate[0]) === normalizeLabel(profile.name);
	});
	if (!row) {
		return {
			status: 'unverifiable',
			reason: 'no_confident_source_row'
		};
	}
	const source = inferSourceProfileFromRow(profile.name, row);
	if (!source) {
		return {
			status: 'unverifiable',
			reason: 'row_parse_not_confident'
		};
	}

	const sourceComparable = {
		name: normalizeBasic(source.name),
		type: normalizeBasic(source.type),
		speed: normalizeBasic(source.speed),
		armour: normalizeBasic(source.armour),
		cc: normalizeBasic(source.cc),
		ff: normalizeBasic(source.ff),
		weapons: source.weapons,
		abilities: normalizeAbilityList(source.abilities)
	};

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
	const html = await getUrl(url, 0);
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
