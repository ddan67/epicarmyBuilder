// Source: https://tp.net-armageddon.org/army-lists/adeptus-mechanicus-knight-world.html
// Values extracted from that page; manually verify against the source if any ambiguity remains.

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.knightWorld = {
	armyId: 'AMTL_knight_world_NETEA',
	profiles: {
		baron: {
			name: 'Baron',
			type: 'WE',
			speed: '30cm',
			armour: '4+',
			cc: '4+',
			ff: '4+',
			weapons: [
				{name: 'Rapid Fire Battle Cannon', range: '75cm', firepower: '2× AP4+/AT4+', notes: ['FwA']},
				{name: 'Power Lance', range: '15cm', firepower: 'Small Arms', notes: ['EA(+1)', 'FS', 'MW', '0–1× option']},
				{name: 'Power Gauntlet', range: 'base contact', firepower: 'Assault Weapons', notes: ['EA(+1)', 'TK', '0–1× option']},
				{name: 'Shock Lance', range: '15cm', firepower: 'Small Arms', notes: ['EA(+1)', 'FS', '0–1× option']}
			],
			abilities: [
				'Damage Capacity 2',
				'Fearless',
				'Inspiring',
				'Knight Shield',
				'Reinforced Armour',
				'Supreme Commander',
				'Walker',
				'Armed with either a Power Gauntlet and Shock Lance, or a Power Lance.'
			]
		},
		knight_paladin: {
			name: 'Knight Paladin',
			type: 'WE',
			speed: '25cm',
			armour: '5+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Battle Cannon', range: '75cm', firepower: 'AP4+/AT4+', notes: ['FwA']},
				{name: 'Chainsword', range: 'base contact', firepower: 'Assault Weapons', notes: ['EA(+1)', 'MW']},
				{name: 'Shock Lance', range: '15cm', firepower: 'Small Arms', notes: ['EA(+1)', 'FS']}
			],
			abilities: [
				'Damage Capacity 2',
				'Knight Shield',
				'Reinforced Armour',
				'Walker'
			]
		},
		knight_crusader: {
			name: 'Knight Crusader',
			type: 'WE',
			speed: '20cm',
			armour: '4+',
			cc: '5+',
			ff: '4+',
			weapons: [
				{name: 'Knight Quake Cannon', range: '90cm', firepower: 'MW3+', notes: ['FwA']},
				{name: 'Knight Quake Cannon', range: '90cm', firepower: '1BP', notes: ['FwA', 'alternate fire mode']},
				{name: '2× Lascannon', range: '45cm', firepower: 'AT5+', notes: ['FwA']}
			],
			abilities: [
				'Damage Capacity 2',
				'Knight Shield',
				'Reinforced Armour',
				'Walker'
			]
		},
		knight_warden: {
			name: 'Knight Warden',
			type: 'WE',
			speed: '20cm',
			armour: '4+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Demolisher', range: '30cm', firepower: 'AP3+/AT4+', notes: ['FxF', 'IC', '0–1× option']},
				{name: 'Heavy Bolters', range: '30cm', firepower: '2× AP5+', notes: ['FwA', '0–1× option']},
				{name: 'AA Missile Launcher', range: '45cm', firepower: '2× AP5+/AT6+/AA5+', notes: ['0–1× option']},
				{name: 'Multilasers', range: '30cm', firepower: '2× AP5+/AT6+', notes: ['FwA', '0–1× option']},
				{name: 'Vanquisher', range: '75cm', firepower: 'AP4+/AT2+', notes: ['FxF', '0–1× option']}
			],
			abilities: [
				'Damage Capacity 2',
				'Knight Shield',
				'Reinforced Armour',
				'Walker',
				'Armed with either a Demolisher and Heavy Bolters; an AA Missile Launcher and Multilasers; or a Vanquisher.'
			]
		},
		knight_castellan: {
			name: 'Knight Castellan',
			type: 'WE',
			speed: '20cm',
			armour: '4+',
			cc: '5+',
			ff: '4+',
			weapons: [
				{name: 'Knight Quake Cannon', range: '90cm', firepower: 'MW3+', notes: ['FwA']},
				{name: 'Knight Quake Cannon', range: '90cm', firepower: '1BP', notes: ['FwA', 'alternate fire mode']},
				{name: 'Multi-barrelled Autocannon', range: '45cm', firepower: '3× AP5+/AT6+', notes: ['FwA']}
			],
			abilities: [
				'Damage Capacity 2',
				'Knight Shield',
				'Reinforced Armour',
				'Walker'
			]
		}
	},
	nameToKey: {
		'baron': 'baron',
		'knight paladin': 'knight_paladin',
		'paladin': 'knight_paladin',
		'knight crusader': 'knight_crusader',
		'crusader': 'knight_crusader',
		'knight warden': 'knight_warden',
		'warden': 'knight_warden',
		'knight castellan': 'knight_castellan',
		'castellan': 'knight_castellan'
	}
};

ArmyforgeUnitProfiles.findKnightWorldProfileByName = function(displayName) {
	if (!displayName) {
		return null;
	}
	var normalized = displayName.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').strip();
	var key = ArmyforgeUnitProfiles.knightWorld.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.knightWorld.profiles[key] || null;
};
