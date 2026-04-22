#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const WAR_DIR = __dirname;
const OUTPUT_DIR = path.join(WAR_DIR, 'source-json');

const PAGE_CONFIGS = [
	{
		id: 'space-marine-codex-astartes',
		url: 'https://tp.net-armageddon.org/army-lists/space-marine-codex-astartes.html'
	},
	{
		id: 'adeptus-mechanicus-knight-world',
		url: 'https://tp.net-armageddon.org/army-lists/adeptus-mechanicus-knight-world.html'
	},
	{
		id: 'adeptus-mechanicus-skitarii-legion',
		url: 'https://tp.net-armageddon.org/army-lists/adeptus-mechanicus-skitarii-legion.html'
	},
	{
		id: 'adeptus-mechanicus-titan-legion',
		url: 'https://tp.net-armageddon.org/army-lists/adeptus-mechanicus-titan-legion.html'
	},
	{
		id: 'ork-war-horde',
		url: 'https://tp.net-armageddon.org/army-lists/ork-war-horde.html'
	},
	{
		id: 'ork-feral-orks',
		url: 'https://tp.net-armageddon.org/army-lists/ork-feral-orks.html'
	},
	{
		id: 'ork-speed-freeks',
		url: 'https://tp.net-armageddon.org/army-lists/ork-speed-freeks.html'
	},
	{
		id: 'ork-gargant-mob',
		url: 'https://tp.net-armageddon.org/army-lists/ork-gargant-mob.html'
	},
	{
		id: 'imperial-guard-steel-legion',
		url: 'https://tp.net-armageddon.org/army-lists/imperial-guard-steel-legion.html'
	},
	{
		id: 'imperial-guard-baran-siegemasters',
		url: 'https://tp.net-armageddon.org/army-lists/imperial-guard-baran-siegemasters.html'
	},
	{
		id: 'imperial-guard-death-korps-of-krieg',
		url: 'https://tp.net-armageddon.org/army-lists/imperial-guard-death-korps-of-krieg.html'
	},
	{
		id: 'imperial-guard-minervan-tank-legion',
		url: 'https://tp.net-armageddon.org/army-lists/imperial-guard-minervan-tank-legion.html'
	},
	{
		id: 'chaos-cultist-slaves-to-darkness',
		url: 'https://tp.net-armageddon.org/army-lists/chaos-cultist-slaves-to-darkness.html'
	},
	{
		id: 'chaos-cultist-stigmatus-covenant',
		url: 'https://tp.net-armageddon.org/army-lists/chaos-cultist-stigmatus-covenant.html'
	},
	{
		id: 'chaos-space-marine-black-legion',
		url: 'https://tp.net-armageddon.org/army-lists/chaos-space-marine-black-legion.html'
	},
	{
		id: 'chaos-space-marine-emperors-children',
		url: 'https://tp.net-armageddon.org/army-lists/chaos-space-marine-emperors-children.html'
	},
	{
		id: 'chaos-space-marine-iron-warriors',
		url: 'https://tp.net-armageddon.org/army-lists/chaos-space-marine-iron-warriors.html'
	},
	{
		id: 'chaos-space-marine-red-corsairs',
		url: 'https://tp.net-armageddon.org/army-lists/chaos-space-marine-red-corsairs.html'
	},
	{
		id: 'space-marine-imperial-fists',
		url: 'https://tp.net-armageddon.org/army-lists/space-marine-imperial-fists.html'
	},
	{
		id: 'space-marine-raven-guard',
		url: 'https://tp.net-armageddon.org/army-lists/space-marine-raven-guard.html'
	},
	{
		id: 'space-marine-salamanders',
		url: 'https://tp.net-armageddon.org/army-lists/space-marine-salamanders.html'
	},
	{
		id: 'space-marine-scions-of-iron',
		url: 'https://tp.net-armageddon.org/army-lists/space-marine-scions-of-iron.html'
	},
	{
		id: 'space-marine-space-wolves',
		url: 'https://tp.net-armageddon.org/army-lists/space-marine-space-wolves.html'
	},
	{
		id: 'space-marine-white-scars',
		url: 'https://tp.net-armageddon.org/army-lists/space-marine-white-scars.html'
	}
];

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
				resolve(getUrl(new URL(response.headers.location, url).toString(), redirectCount + 1));
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
		.replace(/&lsquo;/gi, "'")
		.replace(/&ndash;/gi, '-')
		.replace(/&mdash;/gi, '-')
		.replace(/&times;/gi, 'x')
		.replace(/&lt;/gi, '<')
		.replace(/&gt;/gi, '>')
		.replace(/&#(\d+);/g, function(_, code) {
			return String.fromCharCode(parseInt(code, 10));
		});
}

function htmlToLinesWithHeadings(html) {
	const cleaned = html
		.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
		.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
		.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '')
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<li\b[^>]*>/gi, '\n* ')
		.replace(/<\/li>/gi, '\n')
		.replace(/<h1\b[^>]*>/gi, '\n# ')
		.replace(/<\/h1>/gi, '\n')
		.replace(/<h2\b[^>]*>/gi, '\n## ')
		.replace(/<\/h2>/gi, '\n')
		.replace(/<h3\b[^>]*>/gi, '\n### ')
		.replace(/<\/h3>/gi, '\n')
		.replace(/<h4\b[^>]*>/gi, '\n#### ')
		.replace(/<\/h4>/gi, '\n')
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
		.replace(/[’']/g, "'")
		.replace(/[–—]/g, '-')
		.replace(/×/g, 'x')
		.replace(/\s+/g, ' ')
		.trim();
}

function escapeRegex(value) {
	return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function classAttributePattern(className) {
	return `class\\s*=\\s*(?:"(?:[^"<>]*\\s)?${escapeRegex(className)}(?:\\s[^"<>]*)?"|'(?:[^'<>]*\\s)?${escapeRegex(className)}(?:\\s[^'<>]*)?')`;
}

function stripHtml(fragment) {
	return normalizeBasic(
		decodeEntities(
			String(fragment || '')
				.replace(/<br\s*\/?>/gi, '\n')
				.replace(/<\/(?:p|div|li|ul|ol|section|article|blockquote|h\d)>/gi, '\n')
				.replace(/<[^>]+>/g, ' ')
		)
	);
}

function htmlFragmentToLines(fragment) {
	return decodeEntities(
		String(fragment || '')
			.replace(/<br\s*\/?>/gi, '\n')
			.replace(/<\/(?:p|div|li|ul|ol|section|article|blockquote|h\d)>/gi, '\n')
			.replace(/<[^>]+>/g, ' ')
	)
		.replace(/\r/g, '')
		.split('\n')
		.map(function(line) {
			return normalizeBasic(line);
		})
		.filter(Boolean);
}

function extractBalancedElement(html, startIndex, tagName) {
	const tagRegex = new RegExp(`<\\/?${tagName}\\b[^>]*>`, 'gi');
	tagRegex.lastIndex = startIndex;
	let depth = 0;
	let started = false;
	let match = null;

	while ((match = tagRegex.exec(html))) {
		if (!started) {
			if (match.index !== startIndex) {
				return null;
			}
			started = true;
			depth = 1;
			continue;
		}
		if (/^<\//.test(match[0])) {
			depth -= 1;
			if (depth === 0) {
				return html.slice(startIndex, tagRegex.lastIndex);
			}
		}
		else if (!/\/>$/.test(match[0])) {
			depth += 1;
		}
	}

	return null;
}

function extractBlocksByClass(html, tagName, className) {
	const blocks = [];
	const pattern = new RegExp(`<${tagName}\\b[^>]*${classAttributePattern(className)}[^>]*>`, 'gi');
	let match = null;

	while ((match = pattern.exec(html))) {
		const block = extractBalancedElement(html, match.index, tagName);
		if (block) {
			blocks.push(block);
			pattern.lastIndex = match.index + block.length;
		}
	}

	return blocks;
}

function firstBlockByClass(html, tagName, className) {
	const blocks = extractBlocksByClass(html, tagName, className);
	return blocks.length ? blocks[0] : null;
}

function extractTagTextByClass(html, tagName, className) {
	const pattern = new RegExp(`<${tagName}\\b[^>]*${classAttributePattern(className)}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
	const match = String(html || '').match(pattern);
	return match ? stripHtml(match[1]) : null;
}

function extractListItems(html) {
	const items = [];
	const itemRegex = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
	let match = null;
	while ((match = itemRegex.exec(String(html || '')))) {
		const text = stripHtml(match[1]);
		if (text) {
			items.push(text);
		}
	}
	return items;
}

function extractParagraphs(html) {
	const paragraphs = [];
	const paragraphRegex = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
	let match = null;
	while ((match = paragraphRegex.exec(String(html || '')))) {
		const text = stripHtml(match[1]);
		if (text) {
			paragraphs.push(text);
		}
	}
	return paragraphs;
}

function extractForceSectionsFromHtml(html) {
	const sections = [];
	const sectionRegex = /<section\b[^>]*>/gi;
	let match = null;

	while ((match = sectionRegex.exec(html))) {
		const block = extractBalancedElement(html, match.index, 'section');
		if (!block) {
			continue;
		}
		const titleMatch = block.match(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/i);
		const title = titleMatch ? stripHtml(titleMatch[1]) : null;
		if (title && isDatasheetSection(title)) {
			sections.push({
				title: title,
				html: block
			});
		}
		sectionRegex.lastIndex = match.index + block.length;
	}

	return sections;
}

function normalizeOptionPrefix(value) {
	return normalizeBasic(value).replace(/^0[–-]1x?\s+/i, '0-1x ').replace(/^\d+[–-]\d+x?\s+/i, function(match) {
		return normalizeBasic(match).toLowerCase() + ' ';
	});
}

function headingLevel(line) {
	const match = line.match(/^(#+)\s+/);
	return match ? match[1].length : 0;
}

function headingTitle(line) {
	return line.replace(/^#+\s+/, '').trim();
}

function buildSections(lines) {
	const sections = [];
	let current = null;

	lines.forEach(function(line) {
		if (/^#+\s+/.test(line)) {
			current = {
				level: headingLevel(line),
				title: headingTitle(line),
				lines: []
			};
			sections.push(current);
			return;
		}
		if (current) {
			current.lines.push(line);
		}
	});

	return sections;
}

function firstSectionByTitle(sections, pattern) {
	return sections.find(function(section) {
		return pattern.test(section.title);
	}) || null;
}

function extractPageTitle(sections, warnings) {
	const h2 = sections.find(function(section) {
		return section.level === 2;
	});
	if (!h2) {
		warnings.push('No H2 page title found.');
		return null;
	}
	return h2.title;
}

function extractArmyName(pageTitle) {
	if (!pageTitle) {
		return null;
	}
	return pageTitle.replace(/\s+Army List$/i, '').trim();
}

function sectionText(section) {
	return (section.lines || []).join('\n').trim();
}

function extractArmyStats(sections, warnings) {
	const text = sections.map(sectionText).join('\n');
	const strategyMatch = text.match(/strategy rating of\s+(\d+)/i);
	const initiativeMatches = [];
	const initiativeRegex = /([A-Z][^.]*?) have an initiative rating of\s+(\d+\+)/gi;
	let initiativeMatch = null;
	while ((initiativeMatch = initiativeRegex.exec(text))) {
		initiativeMatches.push({
			scope: normalizeBasic(initiativeMatch[1]),
			value: initiativeMatch[2]
		});
	}
	if (!strategyMatch) {
		warnings.push('Strategy rating not confidently parsed.');
	}
	if (!initiativeMatches.length) {
		warnings.push('Initiative rating not confidently parsed.');
	}
	return {
		strategy_rating: strategyMatch ? strategyMatch[1] : null,
		initiative_rating: initiativeMatches.length ? {
			entries: initiativeMatches
		} : null
	};
}

function extractArmyNotes(sections) {
	return sections
		.filter(function(section) {
			return /using the army list|transports/i.test(section.title);
		})
		.map(function(section) {
			return {
				name: section.title,
				text: sectionText(section)
			};
		})
		filter(function(note) {
			return !!note.text;
		});
}

function extractSpecialRules(sections) {
	const rules = [];
	const seen = {};

	sections.forEach(function(section, index) {
		if (/^special rules$/i.test(section.title)) {
			const text = sectionText(section);
			if (text) {
				rules.push({ name: section.title, text: text });
			}
			for (let i = index + 1; i < sections.length; i += 1) {
				const child = sections[i];
				if (child.level <= section.level) {
					break;
				}
				const childText = sectionText(child);
				if (childText && !seen[child.title]) {
					seen[child.title] = true;
					rules.push({ name: child.title, text: childText });
				}
			}
		}
		else if (/they shall know no fear/i.test(section.title) && !seen[section.title]) {
			const text = sectionText(section);
			if (text) {
				seen[section.title] = true;
				rules.push({ name: section.title, text: text });
			}
		}
	});

	return rules;
}

function parseCostFromLine(line) {
	const match = line.match(/(.+?)\s+((?:\+\d+|\d+)\s+points(?:\s+(?:each|per pair))?)$/i);
	if (!match) {
		return null;
	}
	return {
		content: match[1].trim(),
		cost: match[2].trim()
	};
}

function lineLooksLikeCost(line) {
	return /^(?:\+\d+|\d+)\s+points(?:\s+(?:each|per pair))?$/i.test(line) ||
		/^(?:\d+|n\/a)$/i.test(line);
}

function splitEntryNameAndBody(content, isUpgradeRow) {
	const rowLeadRegex = isUpgradeRow
		? /^(.*?)\s+(?=(?:Add|Replace|Give|Choose|May|None|One|Two|Three|Four|Five|Six|Up to|0[–-]1|\+\d))/i
		: /^(.*?)\s+(?=(?:Any|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Up to|0[–-]1|0-1|\d))/i;
	const match = content.match(rowLeadRegex);
	if (!match) {
		return {
			name: content,
			body: ''
		};
	}
	return {
		name: match[1].trim(),
		body: content.slice(match[0].length - match[1].length).trim()
	};
}

function splitFormationBody(body) {
	if (!body) {
		return {
			units_text: null,
			upgrades_or_options_text: null
		};
	}
	if (/^none$/i.test(body)) {
		return {
			units_text: null,
			upgrades_or_options_text: 'None'
		};
	}
	const noneMatch = body.match(/^(.*?)\s+(None)$/i);
	if (noneMatch) {
		return {
			units_text: noneMatch[1].trim(),
			upgrades_or_options_text: noneMatch[2]
		};
	}
	const splitMatch = body.match(/^(.*?)(\s+(?:Commander|Battle Barge|Bikes|Dreadnoughts|Hunter|Land Raiders|Razorbacks|Snipers|Typhoons|Vindicators|Supreme Commander|Tarantulas?|Hyperios Platforms?|Storm Talons?|Thunderhawk|Marauder|Thunderbolt).*)$/i);
	if (splitMatch) {
		return {
			units_text: splitMatch[1].trim(),
			upgrades_or_options_text: splitMatch[2].trim()
		};
	}
	return {
		units_text: body,
		upgrades_or_options_text: null
	};
}

function extractFormationData(sections, warnings) {
	const armyListSection = sections.find(function(section) {
		return section.level === 3 && /army list$/i.test(section.title);
	});
	if (!armyListSection) {
		warnings.push('Main army list section not found.');
		return [];
	}

	const formations = [];
	let currentCategory = 'army_list';
	let columnMode = null;
	let expectedColumns = 0;
	let i = 0;

	while (i < armyListSection.lines.length) {
		const line = armyListSection.lines[i];

		if (/strategy rating/i.test(line)) {
			i += 1;
			continue;
		}
		if (/^space marine upgrades/i.test(line)) {
			currentCategory = 'upgrades';
			columnMode = null;
			expectedColumns = 0;
			i += 1;
			continue;
		}
		if (/^imperial ally and space marine aircraft formations/i.test(line)) {
			currentCategory = 'allied_formations';
			columnMode = null;
			expectedColumns = 0;
			i += 1;
			continue;
		}
		if (/^imperial navy aircraft formation$/i.test(line) || /^imperial navy aircraft formation units cost$/i.test(line)) {
			currentCategory = 'imperial_navy_aircraft';
			columnMode = 'formation_3col';
			expectedColumns = 3;
			i += /^imperial navy aircraft formation units cost$/i.test(line) ? 1 : 1;
			i += (armyListSection.lines[i] === 'Formation' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Units' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Cost' ? 1 : 0);
			continue;
		}
		if (/^titan legion battlegroups$/i.test(line) || /^titan legion battlegroups formation units cost$/i.test(line)) {
			currentCategory = 'titan_legion_battlegroups';
			columnMode = 'formation_3col';
			expectedColumns = 3;
			i += /^titan legion battlegroups formation units cost$/i.test(line) ? 1 : 1;
			i += (armyListSection.lines[i] === 'Formation' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Units' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Cost' ? 1 : 0);
			continue;
		}
		if (/^space marine aircraft formation$/i.test(line) || /^space marine aircraft formation units cost$/i.test(line)) {
			currentCategory = 'space_marine_aircraft';
			columnMode = 'formation_3col';
			expectedColumns = 3;
			i += /^space marine aircraft formation units cost$/i.test(line) ? 1 : 1;
			i += (armyListSection.lines[i] === 'Formation' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Units' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Cost' ? 1 : 0);
			continue;
		}
		if (/^space marine detachments$/i.test(line)) {
			currentCategory = 'army_list';
			columnMode = 'formation_4col';
			expectedColumns = 4;
			i += 1;
			i += (armyListSection.lines[i] === 'Formation' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Units' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Upgrades' ? 1 : 0);
			i += (armyListSection.lines[i] === 'Cost' ? 1 : 0);
			continue;
		}
		if (/^Ork Formations$/i.test(line) ||
			/^Ork Aircraft(?: and Gargant)? Formations\b/i.test(line) ||
			/^Gargant Mob Gargant Formations$/i.test(line) ||
			/^Gargant Mob Support(?: and Aircraft Formations)?\b/i.test(line) ||
			/^Gargant Mob Aircraft\b/i.test(line)) {
			currentCategory = 'army_list';
			columnMode = 'formation_5col';
			expectedColumns = 5;
			i += 1;
			while (i < armyListSection.lines.length && /^\(/.test(armyListSection.lines[i])) {
				i += 1;
			}
			while (i < armyListSection.lines.length && /^(?:Cost|Type|Core Units|Normal|Big|['’‘]Uge|Extra Units|Upgrades)$/i.test(armyListSection.lines[i])) {
				i += 1;
			}
			continue;
		}
		if (/^(?:Gargant Mob Weapons and Upgrades|Support Upgrades|Kustom Upgrades \(Each upgrade may be added to a Great Gargant, Gargant or Supa-Stompa once\.\)|Gargant Weapons \(Each weapon mount in the formation must be mounted with a weapon\.\)|Supa-Stompa Weapons \(Each weapon mount in the formation must be mounted with a weapon\.\))$/i.test(line)) {
			currentCategory = 'upgrades';
			columnMode = null;
			expectedColumns = 0;
			continue;
		}
		if (/^[*-]\s+/.test(line) || /^(?:n\/a|none|add|replace|note|may|up to|for|and|or|all|then|use)\b/i.test(line)) {
			if (formations.length) {
				const last = formations[formations.length - 1];
				const note = normalizeBullet ? normalizeBullet(line) : line;
				last.restrictions_or_notes = last.restrictions_or_notes ? `${last.restrictions_or_notes}\n${note}` : note;
			}
			i += 1;
			continue;
		}
		if (/^upgrade$/i.test(line) && armyListSection.lines[i + 1] === 'Units' && armyListSection.lines[i + 2] === 'Cost') {
			currentCategory = 'upgrades';
			columnMode = 'upgrade_3col';
			expectedColumns = 3;
			i += 3;
			continue;
		}
		if (/^formation$/i.test(line) && armyListSection.lines[i + 1] === 'Units' && armyListSection.lines[i + 2] === 'Upgrades' && armyListSection.lines[i + 3] === 'Cost') {
			columnMode = 'formation_4col';
			expectedColumns = 4;
			i += 4;
			continue;
		}
		if (/^formation$/i.test(line) && armyListSection.lines[i + 1] === 'Units' && armyListSection.lines[i + 2] === 'Cost') {
			columnMode = 'formation_3col';
			expectedColumns = 3;
			i += 3;
			continue;
		}

		if (expectedColumns && i + expectedColumns - 1 < armyListSection.lines.length) {
			const cells = armyListSection.lines.slice(i, i + expectedColumns);
			if (lineLooksLikeCost(cells[expectedColumns - 1])) {
				const costText = expectedColumns === 5 ? cells.slice(2, 5).join(' ') : cells[expectedColumns - 1];
				const record = {
					category: currentCategory,
					entry_type: columnMode === 'upgrade_3col' ? 'upgrade' : 'formation',
					name: cells[0] || null,
					cost: costText,
					units_text: cells[1] || null,
					upgrades_or_options_text: expectedColumns === 4 ? (cells[2] || null) : null,
					restrictions_or_notes: null,
					raw_text: cells.join(' | '),
					parse_warnings: []
				};
				formations.push(record);
				i += expectedColumns;
				continue;
			}
		}

		if (formations.length && !/^#+\s+/.test(line)) {
			const last = formations[formations.length - 1];
			last.restrictions_or_notes = last.restrictions_or_notes ? `${last.restrictions_or_notes}\n${line}` : line;
		}
		i += 1;
	}

	if (!formations.length) {
		warnings.push('No formation or upgrade rows parsed from army list section.');
	}
	return formations;
}

function isDatasheetSection(title) {
	return /(forces|positions)$/i.test(title);
}

function isTypeToken(value) {
	return /^(INF|AV|WE|LV|AC|SC|CH|FORT|SPECIAL)$/i.test(value);
}

function isSpeedToken(value) {
	return /^(?:\d+cm|0cm|-|n\/a|Bomber|Fighter-Bomber|Fighter|Spacecraft|Walker|Immobile|Special)$/i.test(value);
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
	return /(?:\d+cm|\(\d+cm\)|\bbc\b|\(bc\)|n\/a)$/i.test(line) && !/^critical hit effect:/i.test(line.toLowerCase());
}

function looksLikeRulesText(line) {
	const normalized = normalizeBasic(line).toLowerCase();
	return /^critical hit effect:/.test(normalized) ||
		/^armed with /.test(normalized) ||
		/^may transport /.test(normalized) ||
		/^counts as /.test(normalized) ||
		/^replace /.test(normalized) ||
		/^after the /.test(normalized) ||
		/^formations that include /.test(normalized) ||
		/^then any /.test(normalized);
}

function looksLikeOptionText(line) {
	const normalized = normalizeBasic(line).toLowerCase();
	return /^0[–-]1x /.test(normalized) ||
		/^\d+[–-]\d+x /.test(normalized) ||
		/^and$/.test(normalized) ||
		/^or$/.test(normalized) ||
		/^armed with either /.test(normalized);
}

function normalizeBullet(line) {
	return line.replace(/^[*-]\s*/, '').trim();
}

function isReferenceOrAmbiguousProfile(profile) {
	return profile.parse_confidence !== 'high' ||
		profile.ambiguity_reasons.length > 0 ||
		(profile.abilities_or_notes || []).some(function(entry) {
			return /reference card/i.test(entry);
		});
}

function isBooleanWeaponName(value) {
	return /^(?:and|or)$/i.test(normalizeBasic(value));
}

function isOptionWeaponName(value) {
	return /^0[–-]1x /i.test(normalizeOptionPrefix(value)) || /^\d+[–-]\d+x /i.test(normalizeOptionPrefix(value));
}

function parseWeaponLineFromHtml(lineHtml, previousWeaponName) {
	const rawName = extractTagTextByClass(lineHtml, 'span', 'name');
	const name = isBooleanWeaponName(rawName) && previousWeaponName ? previousWeaponName : rawName;
	const range = extractTagTextByClass(lineHtml, 'span', 'range');
	const firepowerHtml = firstBlockByClass(lineHtml, 'div', 'firepower');
	const firepowerMatch = firepowerHtml ? firepowerHtml.match(/<span\b[^>]*>([\s\S]*?)<\/span>/i) : null;
	const firepower = firepowerMatch ? stripHtml(firepowerMatch[1]) : (firepowerHtml ? stripHtml(firepowerHtml.replace(new RegExp(`<ul\\b[^>]*${classAttributePattern('special_rules')}[^>]*>[\\s\\S]*?<\\/ul>`, 'gi'), '')) : null);
	const notes = firepowerHtml ? extractListItems(firepowerHtml) : [];

	return {
		name: name,
		range: range,
		firepower: firepower,
		notes: notes,
		raw_name: rawName
	};
}

function parseProfileFromUnitBlock(unitHtml, sectionTitle) {
	const statsHtml = firstBlockByClass(unitHtml, 'div', 'stats');
	if (!statsHtml) {
		return null;
	}

	const profile = {
		name: extractTagTextByClass(statsHtml, 'span', 'name'),
		type: extractTagTextByClass(statsHtml, 'span', 'type'),
		speed: extractTagTextByClass(statsHtml, 'span', 'speed'),
		armour: extractTagTextByClass(statsHtml, 'span', 'armour'),
		cc: extractTagTextByClass(statsHtml, 'span', 'cc'),
		ff: extractTagTextByClass(statsHtml, 'span', 'ff'),
		weapons: [],
		abilities_or_notes: [],
		source_section: sectionTitle,
		parse_confidence: 'high',
		parse_warnings: [],
		ambiguity_reasons: [],
		is_reference_or_ambiguous: false
	};

	if (!profile.name || !profile.type || !profile.speed || !profile.armour || !profile.cc || !profile.ff) {
		return null;
	}

	const weaponsHtml = firstBlockByClass(unitHtml, 'div', 'weapons');
	if (weaponsHtml) {
		const weaponBlocks = extractBlocksByClass(weaponsHtml, 'div', 'weapon');
		weaponBlocks.forEach(function(weaponHtml) {
			const lineBlocks = extractBlocksByClass(weaponHtml, 'div', 'weapon_line');
			let previousWeaponName = null;
			lineBlocks.forEach(function(lineHtml) {
				const weapon = parseWeaponLineFromHtml(lineHtml, previousWeaponName);
				if (!weapon.name || !weapon.range || !weapon.firepower) {
					profile.parse_confidence = 'low';
					profile.parse_warnings.push(`Incomplete weapon line in ${profile.name}.`);
					return;
				}
				if (isBooleanWeaponName(weapon.raw_name || '')) {
					profile.parse_warnings.push(`Boolean weapon line folded into previous weapon for ${profile.name}.`);
				}
				delete weapon.raw_name;
				profile.weapons.push(weapon);
				previousWeaponName = weapon.name;
			});
		});
	}

	const notesHtml = firstBlockByClass(unitHtml, 'div', 'notes');
	if (notesHtml) {
		extractListItems(notesHtml).forEach(function(item) {
			profile.abilities_or_notes.push(item);
		});
		extractParagraphs(notesHtml).forEach(function(paragraph) {
			profile.abilities_or_notes.push(paragraph);
		});
	}

	if (/^(?:and|or)$/i.test(normalizeBasic(profile.name))) {
		profile.parse_confidence = 'low';
		profile.ambiguity_reasons.push('Boolean connector parsed as profile name.');
	}

	if (profile.type === 'CH' && profile.weapons.length === 0) {
		profile.parse_confidence = 'high';
		profile.parse_warnings = [];
		profile.ambiguity_reasons = [];
	}

	profile.is_reference_or_ambiguous = isReferenceOrAmbiguousProfile(profile);
	return profile;
}

function extractProfilesFromHtml(html, warnings) {
	const profiles = [];
	const forceSections = extractForceSectionsFromHtml(html);

	forceSections.forEach(function(section) {
		const datasheetHtml = firstBlockByClass(section.html, 'div', 'datasheet') || section.html;
		const unitBlocks = extractBlocksByClass(datasheetHtml, 'div', 'unit');
		unitBlocks.forEach(function(unitHtml) {
			const profile = parseProfileFromUnitBlock(unitHtml, section.title);
			if (profile) {
				profiles.push(profile);
			}
		});
	});

	if (!profiles.length) {
		warnings.push('DOM profile parser found no unit blocks in datasheet sections.');
	}

	return profiles;
}

function parseProfileBlock(header, blockLines, sectionTitle) {
	const profile = {
		name: header.name,
		type: header.type,
		speed: header.speed,
		armour: header.armour,
		cc: header.cc,
		ff: header.ff,
		weapons: [],
		abilities_or_notes: [],
		source_section: sectionTitle,
		parse_confidence: 'high',
		parse_warnings: [],
		ambiguity_reasons: [],
		is_reference_or_ambiguous: false
	};

	for (let i = 0; i < blockLines.length; i += 1) {
		const line = blockLines[i];
		if (/^[*-]\s+/.test(line)) {
			profile.abilities_or_notes.push(normalizeBullet(line));
			continue;
		}
		if (looksLikeOptionText(line)) {
			profile.abilities_or_notes.push(line);
			continue;
		}
		if (i + 2 < blockLines.length && !/^[*-]\s+/.test(line) && isWeaponLine(blockLines[i + 1]) && !parseProfileHeaderAt(blockLines, i + 1) && !parseProfileHeaderAt(blockLines, i + 2)) {
			const weapon = {
				name: line,
				range: blockLines[i + 1],
				firepower: blockLines[i + 2],
				notes: []
			};
			i += 2;
			while (i + 1 < blockLines.length && /^[*-]\s+/.test(blockLines[i + 1])) {
				weapon.notes.push(normalizeBullet(blockLines[i + 1]));
				i += 1;
			}
			profile.weapons.push(weapon);
			continue;
		}
		if (isWeaponLine(line)) {
			const weapon = {
				name: line,
				range: null,
				firepower: null,
				notes: []
			};
			const match = line.match(/^(.*?)\s+(\d+cm|\(\d+cm\)|\(bc\)|bc|n\/a)$/i);
			if (match) {
				weapon.name = match[1];
				weapon.range = match[2];
			}
			if (i + 1 < blockLines.length && !/^[*-]\s+/.test(blockLines[i + 1]) && !isWeaponLine(blockLines[i + 1]) && !parseProfileHeaderAt(blockLines, i + 1)) {
				weapon.firepower = blockLines[i + 1];
				i += 1;
			}
			while (i + 1 < blockLines.length && /^[*-]\s+/.test(blockLines[i + 1])) {
				weapon.notes.push(normalizeBullet(blockLines[i + 1]));
				i += 1;
			}
			profile.weapons.push(weapon);
			continue;
		}
		if (looksLikeRulesText(line)) {
			profile.abilities_or_notes.push(line);
			continue;
		}
		profile.abilities_or_notes.push(line);
	}

	profile.is_reference_or_ambiguous = isReferenceOrAmbiguousProfile(profile);
	return profile;
}

function extractProfilesFromSection(lines, sectionTitle) {
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
		profiles.push(parseProfileBlock(header, lines.slice(i + 6, nextIndex), sectionTitle));
		i = nextIndex - 1;
	}
	return profiles;
}

function extractProfiles(sections, html, warnings) {
	const domProfiles = extractProfilesFromHtml(html, warnings);
	if (domProfiles.length) {
		return domProfiles;
	}

	const profiles = [];
	sections.forEach(function(section) {
		if (section.level >= 2 && isDatasheetSection(section.title)) {
			profiles.push.apply(profiles, extractProfilesFromSection(section.lines, section.title));
		}
	});
	if (!profiles.length) {
		warnings.push('No profile blocks parsed from datasheet sections.');
	}
	return profiles;
}

function buildArchiveForPage(config, html) {
	const extractionWarnings = [];
	const lines = htmlToLinesWithHeadings(html);
	const sections = buildSections(lines);
	const pageTitle = extractPageTitle(sections, extractionWarnings);
	const armyName = extractArmyName(pageTitle);
	const armyStats = extractArmyStats(sections, extractionWarnings);
	const specialRules = extractSpecialRules(sections);
	const formations = extractFormationData(sections, extractionWarnings);
	const profiles = extractProfiles(sections, html, extractionWarnings);
	const armyNotes = extractArmyNotes(sections);

	return {
		metadata: {
			army_name: armyName,
			source_url: config.url,
			page_title: pageTitle
		},
		army_stats: armyStats,
		special_rules: specialRules,
		formations: formations,
		profiles: profiles,
		army_notes: armyNotes,
		extraction_warnings: extractionWarnings
	};
}

async function main() {
	fs.mkdirSync(OUTPUT_DIR, { recursive: true });

	const requestedPageIds = process.env.PAGE_IDS ? process.env.PAGE_IDS.split(',').map(function(id) {
		return id.trim();
	}).filter(Boolean) : null;
	const pageConfigs = requestedPageIds ? PAGE_CONFIGS.filter(function(config) {
		return requestedPageIds.indexOf(config.id) !== -1;
	}) : PAGE_CONFIGS;

	let created = 0;
	const failed = [];

	for (const config of pageConfigs) {
		try {
			const html = await getUrlWithRetry(config.url, 3);
			const archive = buildArchiveForPage(config, html);
			const outputFile = path.join(OUTPUT_DIR, `${config.id}.json`);
			fs.writeFileSync(outputFile, JSON.stringify(archive, null, 2) + '\n', 'utf8');
			created += 1;
			console.log(`created ${path.relative(WAR_DIR, outputFile)}`);
		}
		catch (error) {
			failed.push({ url: config.url, error: error.message });
			console.error(`failed ${config.url}: ${error.message}`);
		}
	}

	console.log(`summary created=${created} failed=${failed.length}`);
	if (failed.length) {
		process.exitCode = 1;
	}
}

main().catch(function(error) {
	console.error(error.stack || error.message);
	process.exit(1);
});
