// Source: war/source-json/mobile-catachans.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeMobileCatachansName = ArmyforgeUnitProfiles.normalizeMobileCatachansName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/\bfxf\b/g, 'fxf')
		.replace(/\bmobile forces of catachan\b/g, ' ')
		.replace(/\bimperial guard\b/g, ' ')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/\b(add|up to|any one of the following|formation|formations|unit|units|company|companies|platoon|platoons|squadron|squadrons)\b/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.mobileCatachans = {
	armyIds: ['IG_MobileCatachans_NETEA'],
	profiles: {
		commissar: {
			name: 'Commissar',
			type: 'CH',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Power Weapon', range: '(bc)', firepower: 'Assault Weapons', notes: ['MW', 'EA(+1)']}
			],
			abilities: ['Fearless', 'Leader', 'Inspiring']
		},
		fire_support_squad: {
			name: 'Fire Support Squad',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: '2x Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: []
		},
		imperial_guard_infantry: {
			name: 'Imperial Guard Infantry',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: ['One unit in every two has an Autocannon.']
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
				{name: 'Power Weapon', range: '(bc)', firepower: 'Assault Weapons', notes: ['MW', 'EA(+1)']}
			],
			abilities: ['Supreme Commander']
		},
		mortar_team: {
			name: 'Mortar Team',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '6+',
			weapons: [
				{name: '2x Mortar', range: '30cm', firepower: 'AP5+/AT6+', notes: ['Indirect Fire']}
			],
			abilities: []
		},
		ogryns: {
			name: 'Ogryns',
			type: 'INF',
			speed: '15cm',
			armour: '3+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Ripper Guns', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Ogryn Combat Weapons', range: '(bc)', firepower: 'Assault Weapons', notes: ['EA(+1)', 'MW']}
			],
			abilities: []
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
			abilities: ['Scouts', 'Sniper']
		},
		stormtroopers: {
			name: 'Stormtroopers',
			type: 'INF',
			speed: '15cm',
			armour: '5+',
			cc: '5+',
			ff: '4+',
			weapons: [
				{name: 'Plasma Blastguns', range: '15cm', firepower: 'AP5+/AT5+', notes: []}
			],
			abilities: ['Scouts']
		},
		veterans: {
			name: 'Veterans',
			type: 'INF',
			speed: '15cm',
			armour: '6+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Sniper Rifles', range: '30cm', firepower: 'AP5+', notes: ['Sniper']},
				{name: 'Demolition Charges', range: '15cm', firepower: 'MW5+', notes: []},
				{name: 'Demolition Charges', range: '(15cm)', firepower: 'Small Arms', notes: ['MW']}
			],
			abilities: ['Scouts', 'Teleport']
		},
		catachan_sentinel: {
			name: 'Catachan Sentinel',
			type: 'LV',
			speed: '20cm',
			armour: '6+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Flamer', range: '15cm', firepower: 'AP4+', notes: []},
				{name: 'Heavy Flamer', range: '(15cm)', firepower: 'Small Arms', notes: ['IC']}
			],
			abilities: ['Scout', 'Walker']
		},
		support_sentinel: {
			name: 'Support Sentinel',
			type: 'LV',
			speed: '20cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Multi-Rocket System', range: '45cm', firepower: '2x AP5+/AT6+', notes: ['Indirect Fire']}
			],
			abilities: ['Scout', 'Walker', 'The range is not doubled when the Multi-Rocket System is fired indirectly, nor is there a minimum range.']
		},
		drop_sentinel: {
			name: 'Drop Sentinel',
			type: 'LV',
			speed: '20cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Multi-Melta', range: '15cm', firepower: 'MW5+', notes: []},
				{name: 'Multi-Melta', range: '(15cm)', firepower: 'Small Arms', notes: ['MW']}
			],
			abilities: ['Scout', 'Walker']
		},
		valkyrie: {
			name: 'Valkyrie',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Multilaser', range: '30cm', firepower: 'AP5+/AT6+', notes: []},
				{name: '2x Heavy Bolters', range: '30cm', firepower: 'AP5+', notes: []},
				{name: '2x Rocket Pods', range: '30cm', firepower: '1BP', notes: ['Disrupt', 'Single Shot']}
			],
			abilities: ['Scout', 'Skimmer', 'Transport', 'May transport two Infantry units (Ogryns count as two units) or one Sentinel of any type.']
		},
		valkyrie_sky_talon: {
			name: 'Valkyrie Sky Talon',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['Scout', 'Skimmer', 'Transport', 'May transport two Sentinels of any type.']
		},
		vendetta: {
			name: 'Vendetta',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: '3x Twin Lascannon', range: '45cm', firepower: 'AT4+', notes: []},
				{name: '2x Heavy Bolters', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['Scout', 'Skimmer', 'Transport', 'May transport two Infantry units (Ogryns count as two units) or one Sentinel of any type.']
		},
		vulture: {
			name: 'Vulture',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Bolters', range: '30cm', firepower: 'AP5+', notes: []},
				{name: '2x Autocannons', range: '45cm', firepower: 'AP5+/AT6+', notes: []},
				{name: '2x Hellfire', range: '120cm', firepower: 'AT2+', notes: ['Single Shot']}
			],
			abilities: ['Scout', 'Skimmer']
		},
		vulture_tornado: {
			name: 'Vulture Tornado',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: '2x Multi-Melta', range: '15cm', firepower: 'MW5+', notes: []},
				{name: '2x Multi-Melta', range: '(15cm)', firepower: 'Small Arms', notes: ['MW']},
				{name: 'Heavy Bolters', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['Scout', 'Skimmer']
		},
		vulture_punisher: {
			name: 'Vulture Punisher',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '4+',
			weapons: [
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: '2x Punisher Gatling', range: '45cm', firepower: 'AP3+', notes: []}
			],
			abilities: ['Scout', 'Skimmer']
		},
		lightning_strike_fighter: {
			name: 'Lightning Strike Fighter',
			type: 'AC',
			speed: 'Fighter',
			armour: '6+',
			cc: '-',
			ff: '-',
			weapons: [
				{name: 'Lascannon', range: '45cm', firepower: 'AT5+/AA5+', notes: ['FF']},
				{name: '2x Underwing Rockets', range: '30cm', firepower: 'AT4+', notes: ['FF']}
			],
			abilities: []
		},
		marauder_bomber: {
			name: 'Marauder Bomber',
			type: 'AC',
			speed: 'Bomber',
			armour: '4+',
			cc: '-',
			ff: '-',
			weapons: [
				{name: 'Twin Lascannon', range: '45cm', firepower: 'AT4+/AA4+', notes: ['FxF']},
				{name: 'Bomb Racks', range: '15cm', firepower: '3BP', notes: ['FxF']},
				{name: '2x Twin Heavy Bolter', range: '15cm', firepower: 'AA5+', notes: []}
			],
			abilities: []
		},
		thunderbolt_fighter: {
			name: 'Thunderbolt Fighter',
			type: 'AC',
			speed: 'Fighter',
			armour: '6+',
			cc: '-',
			ff: '-',
			weapons: [
				{name: 'Storm Bolters', range: '15cm', firepower: 'AP4+/AA5+', notes: ['FF']},
				{name: 'Multi Laser', range: '30cm', firepower: 'AP5+/AT6+/AA5+', notes: ['FF']},
				{name: 'Underwing Rockets', range: '30cm', firepower: 'AT4+', notes: ['FF']}
			],
			abilities: []
		},
		lunar_class_cruiser: {
			name: 'Lunar Class Cruiser',
			type: 'SC',
			speed: '-',
			armour: '-',
			cc: '-',
			ff: '-',
			weapons: [
				{name: 'Orbital Bombardment', range: '-', firepower: '3BP', notes: ['MW']},
				{name: 'Pin-point Attack', range: '-', firepower: 'MW2+', notes: ['TK(D3)']}
			],
			abilities: []
		},
		emperor_class_battleship: {
			name: 'Emperor Class Battleship',
			type: 'SC',
			speed: '-',
			armour: '-',
			cc: '-',
			ff: '-',
			weapons: [
				{name: 'Orbital Bombardment', range: '-', firepower: '8BP', notes: ['MW']}
			],
			abilities: ['Slow and Steady']
		}
	},
	nameToKey: {}
};

(function() {
	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeMobileCatachansName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.mobileCatachans.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.mobileCatachans.nameToKey[compact] = key;
		}
	}

	for (var key in ArmyforgeUnitProfiles.mobileCatachans.profiles) {
		if (ArmyforgeUnitProfiles.mobileCatachans.profiles.hasOwnProperty(key)) {
			registerAlias(ArmyforgeUnitProfiles.mobileCatachans.profiles[key].name, key);
		}
	}

	var aliases = {
		'Airborne Regimental HQ':'imperial_guard_supreme_commander',
		'Airborne Infantry Company':'imperial_guard_commander',
		'Airborne Ogryn Company':'ogryns',
		'Imperial Guard Infantry Units':'imperial_guard_infantry',
		'Imperial Guard Infantry units':'imperial_guard_infantry',
		'Imperial Guard Infantry Unit':'imperial_guard_infantry',
		'Imperial Guard Commander':'imperial_guard_commander',
		'Imperial Guard Supreme Commander':'imperial_guard_supreme_commander',
		'Ogryn':'ogryns',
		'Ogryns':'ogryns',
		'Valkyries':'valkyrie',
		'Valkyrie':'valkyrie',
		'Catachan Sentinels':'catachan_sentinel',
		'Catachan Sentinel':'catachan_sentinel',
		'Support Sentinel':'support_sentinel',
		'Support Sentinels':'support_sentinel',
		'Drop Sentinel':'drop_sentinel',
		'Drop Sentinels':'drop_sentinel',
		'Imperial Guard Fire Support Units':'fire_support_squad',
		'Fire Support Units':'fire_support_squad',
		'Fire Support Squad units':'fire_support_squad',
		'Fire Support Squad':'fire_support_squad',
		'Imperial Guard Mortar Units':'mortar_team',
		'Mortar Units':'mortar_team',
		'Mortar units':'mortar_team',
		'Mortar Team':'mortar_team',
		'0-1 Veterans':'veterans',
		'Veteran Units':'veterans',
		'Veterans':'veterans',
		'Airborne Stormtroopers':'stormtroopers',
		'Airborne Storm Trooper Platoon':'stormtroopers',
		'Stormtrooper Units':'stormtroopers',
		'Storm Trooper Units':'stormtroopers',
		'Stormtroopers':'stormtroopers',
		'Vulture Punishers':'vulture_punisher',
		'Vulture Punisher':'vulture_punisher',
		'Vulture':'vulture',
		'Vulture Tornado':'vulture_tornado',
		'Vulture Tornados':'vulture_tornado',
		'Lightning Squadron':'lightning_strike_fighter',
		'Lightning Strike Fighter':'lightning_strike_fighter',
		'Marauder Squadron':'marauder_bomber',
		'Marauder Bombers':'marauder_bomber',
		'Marauder Bomber':'marauder_bomber',
		'Thunderbolt Squadron - Two Thunderbolt Fighters':'thunderbolt_fighter',
		'Thunderbolt Squadron - Three Thunderbolt Fighters':'thunderbolt_fighter',
		'Thunderbolt Squadron':'thunderbolt_fighter',
		'Thunderbolt Fighters':'thunderbolt_fighter',
		'Thunderbolt Fighter':'thunderbolt_fighter',
		'0-1 Orbital Support - Lunar Class Cruiser':'lunar_class_cruiser',
		'Orbital Support - Lunar Class Cruiser':'lunar_class_cruiser',
		'Lunar Class Cruiser':'lunar_class_cruiser',
		'0-1 Orbital Support - Emperor Class Battleship':'emperor_class_battleship',
		'Orbital Support - Emperor Class Battleship':'emperor_class_battleship',
		'Emperor Class Battleship':'emperor_class_battleship',
		'Fire Support':'fire_support_squad',
		'Mortar Support':'mortar_team',
		'Infantry Platoon':'imperial_guard_infantry',
		'Snipers':'sniper',
		'Sniper':'sniper',
		'Sky Talons':'valkyrie_sky_talon',
		'Sky Talon':'valkyrie_sky_talon',
		'Valkyrie Sky Talon':'valkyrie_sky_talon',
		'Vendettas':'vendetta',
		'Vendetta':'vendetta',
		'Commissar':'commissar',
		'Add two Fire Support Squad units and a Valkyrie':'fire_support_squad',
		'Add two Mortar units and a Valkyrie':'mortar_team',
		'Add six Imperial Guard Infantry units and 3 Valkyries':'imperial_guard_infantry',
		'Add one Ogryn and a Valkyrie':'ogryns',
		'Add two Ogryns and two Valkyries':'ogryns',
		'1 Ogryn and 1 Valkyrie':'ogryns',
		'2 Ogryns and 2 Valkyries':'ogryns',
		'Add one Sniper and a Valkyrie':'sniper',
		'Add two Snipers and a Valkyrie':'sniper',
		'1 Sniper and 1 Valkyrie':'sniper',
		'2 Snipers and 1 Valkyrie':'sniper',
		'Add enough Sky Talons to transport the whole formation':'valkyrie_sky_talon',
		'Up to two Valkyries may be exchanged for Vendettas':'vendetta',
		'Add two Vulture Punishers':'vulture_punisher',
		'Add two Vultures':'vulture',
		'Add 2 Vulture Punishers':'vulture_punisher',
		'Add 2 Vultures':'vulture',
		'Add 1 Vulture, 1 Vulture Tornado':'vulture_tornado',
		'Add 2 Vulture Tornados':'vulture_tornado',
		'4 Imperial Guard Fire Support Units':'fire_support_squad',
		'4 Imperial Guard Mortar Units':'mortar_team',
		'2 Thunderbolt Fighters':'thunderbolt_fighter',
		'3 Thunderbolt Fighters':'thunderbolt_fighter'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, aliases[alias]);
		}
	}
})();

ArmyforgeUnitProfiles.findMobileCatachansProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.mobileCatachans.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeMobileCatachansName(displayName);
	var key = ArmyforgeUnitProfiles.mobileCatachans.nameToKey[normalized] || ArmyforgeUnitProfiles.mobileCatachans.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.mobileCatachans.profiles[key] || null;
};
