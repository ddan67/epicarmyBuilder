// Source: https://tp.net-armageddon.org/army-lists/adeptus-mechanicus-knight-world.html
// Values extracted from that page; manually verify against the source if any ambiguity remains.

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.knightWorld = {
	armyId: 'AMTL_knight_world_NETEA',
	profiles: {
		aspirant: {
			name: 'Aspirant',
			type: 'CH',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Power Weapon', range: 'base contact', firepower: 'Assault Weapons', notes: ['EA(+1)', 'MW']}
			],
			abilities: [
				'Fearless',
				'Inspiring',
				'Leader'
			]
		},
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
		seneschal: {
			name: 'Seneschal',
			type: 'CH',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [],
			abilities: [
				'Commander',
				'Leader'
			]
		},
		infantry_levy: {
			name: 'Infantry Levy',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: 'Lasguns', range: '15cm', firepower: 'Small Arms', notes: []}
			],
			abilities: [
				'One unit in every two has a Heavy Bolter.'
			]
		},
		levy_command: {
			name: 'Levy Command',
			type: 'INF',
			speed: '15cm',
			armour: '6+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: [
				'Commander'
			]
		},
		rapier: {
			name: 'Rapier',
			type: 'INF',
			speed: '10cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Laser Destroyer', range: '45cm', firepower: 'AP6+/AT4+', notes: []}
			],
			abilities: []
		},
		rough_riders: {
			name: 'Rough Riders',
			type: 'INF',
			speed: '20cm',
			armour: '6+',
			cc: '4+',
			ff: '6+',
			weapons: [
				{name: 'Laspistols', range: '15cm', firepower: 'Small Arms', notes: []},
				{name: 'Power Lances', range: 'base contact', firepower: 'Assault Weapons', notes: ['EA(+1)', 'FS']}
			],
			abilities: [
				'Infiltrator',
				'Mounted',
				'Scout'
			]
		},
		snipers: {
			name: 'Snipers',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Sniper Rifles', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: [
				'Scout',
				'Sniper'
			]
		},
		thudd_gun: {
			name: 'Thudd Gun',
			type: 'INF',
			speed: '10cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Thudd Gun', range: '45cm', firepower: 'AP4+/AT6+', notes: ['Ind']}
			],
			abilities: []
		},
		aa_gun: {
			name: 'AA Gun',
			type: 'LV',
			speed: '0cm',
			armour: '-',
			cc: '6+',
			ff: '6+',
			weapons: [
				{name: 'AA Gun', range: '60cm', firepower: 'AP6+/AT5+/AA5+', notes: []}
			],
			abilities: []
		},
		gun_transporter: {
			name: 'Gun Transporter',
			type: 'LV',
			speed: '15cm',
			armour: '6+',
			cc: '6+',
			ff: '6+',
			weapons: [
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: [
				'Transport',
				'May transport one of the following units: AA Gun, Howitzer, Rapier, Thudd Gun.'
			]
		},
		gun_emplacement: {
			name: 'Gun Emplacement',
			type: 'Fortified Position',
			// TODO(source): The Knight World source describes this as a fortified position (not a normal unit statline).
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [],
			abilities: [
				'Provides vehicles with a Cover Save that works in the same manner as an infantry cover save.',
				'Can hold one unit.',
				'Units in a gun emplacement may not be barged by a war engine.'
			]
		},
		trench_and_razor_wire: {
			name: 'Trench and Razor Wire',
			type: 'Battlefield Works',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [],
			abilities: [
				'Represents 52cm of trench and 52cm of razor wire.',
				'Reference card only; this is a battlefield fortification upgrade rather than a unit profile.'
			]
		},
		howitzer: {
			name: 'Howitzer',
			type: 'LV',
			speed: '0cm',
			armour: '-',
			cc: '6+',
			ff: '6+',
			weapons: [
				{name: 'Howitzer', range: '90cm', firepower: '1BP', notes: ['Ind']}
			],
			abilities: []
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
			name: 'Warden',
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
		emperor_class_battleship: {
			name: 'Emperor Class Battleship',
			type: 'SC',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Orbital Bombardment', range: 'n/a', firepower: '8BP', notes: ['MW']}
			],
			abilities: [
				'Slow and Steady'
			]
		},
		lunar_class_cruiser: {
			name: 'Lunar Class Cruiser',
			type: 'SC',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Orbital Bombardment', range: 'n/a', firepower: '3BP', notes: ['MW']},
				{name: 'Pin-Point Attack', range: 'n/a', firepower: 'MW2+', notes: ['TK(D3)']}
			],
			abilities: []
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
		},
		knight_errant: {
			name: 'Knight Errant',
			type: 'WE',
			speed: '25cm',
			armour: '5+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Thermal Cannon', range: '30cm', firepower: 'MW4+', notes: ['FwA']},
				{name: 'Thermal Cannon (close range)', range: '15cm', firepower: 'Small Arms', notes: ['MW']},
				{name: 'Power Gauntlet', range: 'base contact', firepower: 'Assault Weapons', notes: ['EA(+1)', 'TK']},
				{name: 'Shock Lance', range: '15cm', firepower: 'Small Arms', notes: ['EA(+1)', 'FS']}
			],
			abilities: [
				'Damage Capacity 2',
				'Knight Shield',
				'Reinforced Armour',
				'Walker'
			]
		},
		knight_lancer: {
			name: 'Knight Lancer',
			type: 'WE',
			speed: '30cm',
			armour: '5+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Battle Cannon', range: '75cm', firepower: 'AP4+/AT4+', notes: ['FwA']},
				{name: 'Power Lance', range: '15cm', firepower: 'Small Arms', notes: ['EA(+1)', 'FS', 'MW']}
			],
			abilities: [
				'Damage Capacity 2',
				'Knight Shield',
				'Reinforced Armour',
				'Scout',
				'Walker'
			]
		},
		marauder_bomber: {
			name: 'Marauder Bomber',
			type: 'AC Bomber',
			speed: 'n/a',
			armour: '4+',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Twin Lascannon', range: '45cm', firepower: 'AT4+/AA4+', notes: ['FxF']},
				{name: 'Bomb Racks', range: '15cm', firepower: '3BP', notes: ['FxF']},
				{name: '2× Twin Heavy Bolter', range: '15cm', firepower: 'AA5+', notes: []}
			],
			abilities: []
		},
		thunderbolt_fighter: {
			name: 'Thunderbolt Fighter',
			type: 'AC Fighter-Bomber',
			speed: 'n/a',
			armour: '6+',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Multilaser', range: '30cm', firepower: 'AP5+/AT6+/AA5+', notes: ['FxF']},
				{name: 'Underwing Rockets', range: '30cm', firepower: 'AT4+', notes: ['FxF']},
				{name: 'Storm Bolters', range: '15cm', firepower: 'AP4+/AA5+', notes: ['FxF']}
			],
			abilities: []
		}
	},
	nameToKey: {
		'aspirant': 'aspirant',
		'baron': 'baron',
		'seneschal': 'seneschal',
		'infantry levy': 'infantry_levy',
		'infantry levies': 'infantry_levy',
		'levy': 'infantry_levy',
		'levy command': 'levy_command',
		'rapier': 'rapier',
		'rough rider': 'rough_riders',
		'rough riders': 'rough_riders',
		'sniper': 'snipers',
		'snipers': 'snipers',
		'thudd gun': 'thudd_gun',
		'thudd guns': 'thudd_gun',
		'aa gun': 'aa_gun',
		'aa guns': 'aa_gun',
		'gun transporter': 'gun_transporter',
		'gun transporters': 'gun_transporter',
		'gun emplacement': 'gun_emplacement',
		'gun emplacements': 'gun_emplacement',
		'howitzer': 'howitzer',
		'howitzers': 'howitzer',
		'knight paladin': 'knight_paladin',
		'paladin': 'knight_paladin',
		'knight crusader': 'knight_crusader',
		'crusader': 'knight_crusader',
		'knight warden': 'knight_warden',
		'wardens': 'knight_warden',
		'warden': 'knight_warden',
		'emperor class battleship': 'emperor_class_battleship',
		'lunar class cruiser': 'lunar_class_cruiser',
		'knight castellan': 'knight_castellan',
		'castellan': 'knight_castellan',
		'knight errant': 'knight_errant',
		'errant': 'knight_errant',
		'knight lancer': 'knight_lancer',
		'lancer': 'knight_lancer',
		'marauder bomber': 'marauder_bomber',
		'marauder bombers': 'marauder_bomber',
		'marauder': 'marauder_bomber',
		'thunderbolt fighter': 'thunderbolt_fighter',
		'thunderbolt fighters': 'thunderbolt_fighter',
		'thunderbolt': 'thunderbolt_fighter',
		'aa gun battery': 'aa_gun',
		'howitzer battery': 'howitzer',
		'infantry platoon': 'infantry_levy',
		'rough rider platoon': 'rough_riders',
		'marauder squadron': 'marauder_bomber',
		'thunderbolt squadron': 'thunderbolt_fighter',
		'52cm of trench and 52cm of razor wire': 'trench_and_razor_wire'
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
