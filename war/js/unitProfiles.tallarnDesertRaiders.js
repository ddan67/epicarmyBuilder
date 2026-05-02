// Source: war/source-json/tallarn-desert-raiders.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeTallarnDesertRaidersName = ArmyforgeUnitProfiles.normalizeTallarnDesertRaidersName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/\bcalvary\b/g, 'cavalry')
		.replace(/\bconqueor\b/g, 'conqueror')
		.replace(/\bsaber\b/g, 'sabre')
		.replace(/\bfighter[\s-]*bombers?\b/g, 'fighter bomber')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/\b(add|replace|additional|transport)\b/g, ' ')
		.replace(/\b(tallarn desert raiders|imperial guard)\b/g, ' ')
		.replace(/\b(unit|units|character|characters|company|companies|platoon|platoons|formation|formations|squadron|squadrons|banner)\b/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.tallarnDesertRaiders = {
	armyIds: ['IG_Tallarn_NETEA'],
	profiles: {
		mukaali_cavalry: {
			name: 'Mukaali Cavalry',
			type: 'LV',
			speed: '20cm',
			armour: '3+',
			cc: '4+',
			ff: '6+',
			weapons: [
				{name: 'Las Pistols', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Shock Lance', range: '(base contact)', firepower: 'Assault Weapons', notes: ['First Strike', 'EA(+1)']}
			],
			abilities: ['Infiltrator', 'Walker', 'Mounted', 'May not march']
		},
		mukaali_support_cavalry: {
			name: 'Mukaali Support Cavalry',
			type: 'LV',
			speed: '20cm',
			armour: '3+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: '2x Plasma Gun', range: '15cm', firepower: 'AP5+/AT5+', notes: []}
			],
			abilities: ['Infiltrator', 'Walker', 'Mounted', 'May not march']
		},
		tallarn_sentinel: {
			name: 'Tallarn Sentinel',
			type: 'LV',
			speed: '20cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Support Pod', range: '45cm', firepower: 'AT6+/AP6+', notes: ['Disrupt']}
			],
			abilities: ['Walker']
		},
		cavalry_supreme_commander: {
			name: 'Cavalry Supreme Commander',
			type: 'CH',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Power Weapon', range: '(base contact)', firepower: 'Assault Weapons', notes: ['MW', 'EA(+1)']}
			],
			abilities: ['Supreme Commander']
		},
		cavalry_commander: {
			name: 'Cavalry Commander',
			type: 'CH',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Cavalry Sword', range: '(base contact)', firepower: 'Assault Weapons', notes: ['EA(+1)']}
			],
			abilities: ['Commander']
		},
		sabre_platform: {
			name: 'Sabre Platform',
			type: 'INF',
			speed: '10cm',
			armour: 'n/a',
			cc: 'n/a',
			ff: '5+',
			weapons: [
				{name: 'Twin Flak Autocannon', range: '30cm', firepower: 'AP4+/AT5+/AA5+', notes: []}
			],
			abilities: ['Mounted']
		},
		thudd_gun: {
			name: 'Thudd Gun',
			type: 'INF',
			speed: '10cm',
			armour: 'n/a',
			cc: 'n/a',
			ff: '5+',
			weapons: [
				{name: 'Quad Launcher', range: '45cm', firepower: 'AP4+/AT6+', notes: ['Indirect Fire']}
			],
			abilities: ['Indirect Fire']
		},
		tauros: {
			name: 'Tauros',
			type: 'LV',
			speed: '35cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Grenade Launcher', range: '30cm', firepower: 'AP4+/AT6+', notes: []}
			],
			abilities: ['Walker']
		},
		tauros_venator: {
			name: 'Tauros Venator',
			type: 'LV',
			speed: '35cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Twin Lascannon', range: '45cm', firepower: 'AT4+', notes: []}
			],
			abilities: ['Walker']
		},
		leman_russ_conqueror: {
			name: 'Leman Russ Conqueror',
			type: 'AV',
			speed: '30cm',
			armour: '4+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Conqueror Cannon', range: '40cm', firepower: 'AP5+/AT5+', notes: []},
				{name: 'Lascannon', range: '45cm', firepower: 'AT5+', notes: []}
			],
			abilities: ['Reinforced Armour']
		},
		questoris_knight: {
			name: 'Questoris Knight',
			type: 'WE',
			speed: '25cm',
			armour: '5+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Knight Chainsword', range: '(base contact)', firepower: 'Assault Weapons', notes: ['EA(+1)', 'MW']},
				{name: 'Shock Field', range: '(15cm)', firepower: 'Small Arms', notes: ['EA(+1)']},
				{name: 'Heavy Stubber', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Rapid Battlecannon', range: '60cm', firepower: '2x AP4+/AT4+', notes: ['pick-one main gun option']},
				{name: 'Gatling Cannon', range: '60cm', firepower: '6x AP6+/AT6+', notes: ['pick-one main gun option']},
				{name: 'Thermal Cannon', range: '30cm', firepower: 'MW3+', notes: ['pick-one main gun option']}
			],
			abilities: ['Damage Capacity 2', 'Critical Effect: Destroyed', 'Reinforced Armour', 'Knight Shield', 'Walker']
		},
		marauder_destroyer: {
			name: 'Marauder Destroyer',
			type: 'AC',
			speed: 'Bomber',
			armour: '5+',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: '3x Twin Autocannons', range: '30cm', firepower: 'AP4+/AT5+', notes: ['FxF']},
				{name: 'Twin Heavy Bolters', range: '15cm', firepower: 'AA5+', notes: []},
				{name: 'Twin Assault Cannons', range: '15cm', firepower: 'AA4+', notes: ['Rear']},
				{name: '2x Underwing Rockets', range: '30cm', firepower: 'AT4+', notes: ['FxF']}
			],
			abilities: []
		},
		imperial_guard_commander: {
			name: 'Imperial Guard Commander',
			type: 'INF',
			speed: '15cm',
			armour: '6+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: ['Commander']
		},
		imperial_guard_supreme_commander: {
			name: 'Imperial Guard Supreme Commander',
			type: 'INF',
			speed: '15cm',
			armour: '5+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []},
				{name: 'Power Weapon', range: '(bc)', firepower: 'Assault Weapons', notes: ['EA(+1)', 'MW']}
			],
			abilities: ['Supreme Commander']
		},
		imperial_guard_infantry: {
			name: 'Imperial Guard Infantry',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []},
				{name: 'Lasguns', range: '(15cm)', firepower: 'Small Arms', notes: []}
			],
			abilities: ['One unit in every two has an Autocannon.']
		},
		sniper: {
			name: 'Sniper',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Sniper Rifles', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['Scout', 'Sniper']
		},
		chimera: {
			name: 'Chimera',
			type: 'AV',
			speed: '30cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Multilaser', range: '30cm', firepower: 'AP5+/AT6+', notes: []},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['Transport', 'May transport two infantry units without Jump Packs or Mounted .']
		},
		fire_support: {
			name: 'Fire Support',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '5+',
			ff: '4+',
			weapons: [
				{name: 'Twin Heavy Stubber', range: '30cm', firepower: 'AP5+', notes: []},
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: []
		},
		griffon: {
			name: 'Griffon',
			type: 'AV',
			speed: '30cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Mortar', range: '30cm', firepower: '1BP', notes: ['Ind']},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: []
		},
		hellhound: {
			name: 'Hellhound',
			type: 'AV',
			speed: '30cm',
			armour: '4+',
			cc: '6+',
			ff: '3+',
			weapons: [
				{name: 'Inferno Cannon', range: '30cm', firepower: 'AP3+', notes: ['IC']},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: []
		},
		stormtrooper: {
			name: 'Stormtrooper',
			type: 'INF',
			speed: '15cm',
			armour: '5+',
			cc: '5+',
			ff: '4+',
			weapons: [
				{name: 'Plasma Guns', range: '15cm', firepower: 'AP5+/AT5+', notes: []}
			],
			abilities: ['Scout']
		},
		rough_rider: {
			name: 'Rough Rider',
			type: 'INF',
			speed: '20cm',
			armour: '6+',
			cc: '4+',
			ff: '6+',
			weapons: [
				{name: 'Laspistols', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Power Lances', range: '(bc)', firepower: 'Assault Weapons', notes: ['EA(+1)', 'FS']}
			],
			abilities: ['Infiltrator', 'Mounted', 'Scout']
		},
		thunderbolt_fighter_bomber: {
			name: 'Thunderbolt Fighter-Bomber',
			type: 'AC',
			speed: 'Fighter-Bomber',
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
	nameToKey: {}
};

(function() {
	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeTallarnDesertRaidersName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.tallarnDesertRaiders.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.tallarnDesertRaiders.nameToKey[compact] = key;
		}
	}

	for (var key in ArmyforgeUnitProfiles.tallarnDesertRaiders.profiles) {
		if (ArmyforgeUnitProfiles.tallarnDesertRaiders.profiles.hasOwnProperty(key)) {
			registerAlias(ArmyforgeUnitProfiles.tallarnDesertRaiders.profiles[key].name, key);
		}
	}

	var aliases = {
		'Infantry Company':'imperial_guard_commander',
		'Mechanized Infantry Company':'imperial_guard_commander',
		'Mukaali Assault Company':'cavalry_commander',
		'Mukaali Cavalry':'mukaali_cavalry',
		'Mukaali Calvary':'mukaali_cavalry',
		'Mukaali Support Cavalry':'mukaali_support_cavalry',
		'Mukaali Support Calvary':'mukaali_support_cavalry',
		'Cavalry Commander':'cavalry_commander',
		'Calvary Commander':'cavalry_commander',
		'Cavalry Supreme Commander':'cavalry_supreme_commander',
		'Calvary Supreme Commander':'cavalry_supreme_commander',
		'Sentinel Platoon':'tallarn_sentinel',
		'Tallarn Sentinels':'tallarn_sentinel',
		'Fire Support Platoon':'fire_support',
		'Fire support Units':'fire_support',
		'Fire Support units':'fire_support',
		'Add 4 Fire Support units':'fire_support',
		'Light Artillery Platoon':'thudd_gun',
		'4 Chimeras and 4 Thudd Gun units':'thudd_gun',
		'4 Chimeras, and 4 Thudd Gun units':'thudd_gun',
		'Thudd Gun units':'thudd_gun',
		'Desert Raiders Platoon':'stormtrooper',
		'4 Stormtrooper units and 4 Sniper units':'stormtrooper',
		'4 Stormtrooper units, and 4 Sniper units':'stormtrooper',
		'Stormtrooper units':'stormtrooper',
		'Stormtroopers':'stormtrooper',
		'Hellhound Squadron':'hellhound',
		'Hellhounds':'hellhound',
		'Add 3 Hellhounds':'hellhound',
		'3 Hellhounds':'hellhound',
		'6 Hellhounds':'hellhound',
		'Griffon Squadron':'griffon',
		'Griffons':'griffon',
		'Add 3 Griffons':'griffon',
		'3 Griffons':'griffon',
		'6 Griffons':'griffon',
		'Anti-Aircraft Platoon':'sabre_platform',
		'4 Sabre Platforms and 4 Chimeras':'sabre_platform',
		'Sabre Platforms':'sabre_platform',
		'Saber Platform':'sabre_platform',
		'Saber Platforms':'sabre_platform',
		'Add 1 Sabre Platform':'sabre_platform',
		'Add 1 Saber Platform':'sabre_platform',
		'Add 1 Saber Platform and 1 Chimera':'sabre_platform',
		'Rough Rider Platoon':'rough_rider',
		'Rough Rider units':'rough_rider',
		'Rough Riders':'rough_rider',
		'Tauros Platoon':'tauros',
		'Tauros Venator':'tauros_venator',
		'Conqueror Platoon':'leman_russ_conqueror',
		'Leman Russ Conquerors':'leman_russ_conqueror',
		'Leman Russ Conqueor':'leman_russ_conqueror',
		'Thunderbolt Squadron':'thunderbolt_fighter_bomber',
		'Thunderbolt Fighter-Bombers':'thunderbolt_fighter_bomber',
		'Thunderbolt Fighter Bomber':'thunderbolt_fighter_bomber',
		'Thunderbolts':'thunderbolt_fighter_bomber',
		'Destroyer Squadron':'marauder_destroyer',
		'Marauder Destroyers':'marauder_destroyer',
		'Knight House Banner':'questoris_knight',
		'Questoris Knight':'questoris_knight',
		'Questoris Knights':'questoris_knight',
		'Snipers':'sniper',
		'Sniper Units':'sniper',
		'Sniper units':'sniper',
		'Flak':'sabre_platform',
		'0-1 Supreme Commander':'imperial_guard_supreme_commander',
		'Supreme Commander':'imperial_guard_supreme_commander',
		'Commander':'imperial_guard_commander',
		'Fire Support':'fire_support',
		'Imperial Guard Commander':'imperial_guard_commander',
		'Imperial Guard Supreme Commander':'imperial_guard_supreme_commander',
		'Imperial Guard Infantry':'imperial_guard_infantry',
		'Imperial Guard Infantry units':'imperial_guard_infantry',
		'Sniper':'sniper',
		'Chimera':'chimera',
		'Chimeras':'chimera',
		'Add 2 Chimeras':'chimera',
		'Add 4 Chimeras':'chimera'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, aliases[alias]);
		}
	}
})();

ArmyforgeUnitProfiles.findTallarnDesertRaidersProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.tallarnDesertRaiders.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeTallarnDesertRaidersName(displayName);
	var key = ArmyforgeUnitProfiles.tallarnDesertRaiders.nameToKey[normalized] || ArmyforgeUnitProfiles.tallarnDesertRaiders.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.tallarnDesertRaiders.profiles[key] || null;
};
