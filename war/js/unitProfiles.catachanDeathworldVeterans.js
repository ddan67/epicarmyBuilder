// Source: war/source-json/catachan-deathworld-veterans.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeCatachanDeathworldVeteransName = ArmyforgeUnitProfiles.normalizeCatachanDeathworldVeteransName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/\barmor\b/g, 'armour')
		.replace(/\bfighter[\s-]*bombers?\b/g, 'fighter bomber')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/\b(add|up to|plus|may|have|choose|one|two|six|nine|five)\b/g, ' ')
		.replace(/\b(catachan deathworld veterans|imperial guard|ig)\b/g, ' ')
		.replace(/\b(unit|units|company|companies|platoon|platoons|formation|formations|squadron|squadrons|support)\b/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.catachanDeathworldVeterans = {
	armyIds: ['IG_catachan_NETEA'],
	profiles: {
		commissar: {
			name: 'Commissar',
			type: 'CH',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Power Weapon', range: '(base contact)', firepower: 'Assault Weapons', notes: ['MW', 'EA(+1)']}
			],
			abilities: ['Leader', 'Fearless', 'Inspiring']
		},
		catachan_devils: {
			name: 'Catachan Devils',
			type: 'INF',
			speed: '15cm',
			armour: '5+',
			cc: '4+',
			ff: '4+',
			weapons: [
				{name: 'Catachan Knives', range: '(base contact)', firepower: 'Assault Weapons', notes: []},
				{name: 'Meltaguns', range: '15cm', firepower: 'MW5+', notes: []},
				{name: 'Meltaguns', range: '(15cm)', firepower: 'Small Arms', notes: ['MW']}
			],
			abilities: ['Scout', 'Teleport', 'Infiltrator', 'Booby Traps']
		},
		deathworld_veterans: {
			name: 'Deathworld Veterans',
			type: 'INF',
			speed: '15cm',
			armour: '6+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Demolition Charges', range: '(base contact)', firepower: 'Assault Weapons', notes: ['MW', 'EA(+1)', 'One-Shot']},
				{name: 'Heavy Flamer', range: '15cm', firepower: 'AP4+', notes: ['Ignore Cover']},
				{name: 'Heavy Flamer', range: '(15cm)', firepower: 'Small Arms', notes: ['Ignore Cover']}
			],
			abilities: ['Scout', 'Infiltrator', 'Booby Traps']
		},
		imperial_guard_commander: {
			name: 'Imperial Guard Commander',
			type: 'INF',
			speed: '15cm',
			armour: '6+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Chainswords', range: '(base contact)', firepower: 'Assault Weapons', notes: []},
				{name: 'Lasguns', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: ['Commander', 'Booby Traps']
		},
		imperial_guard_supreme_commander: {
			name: 'Imperial Guard Supreme Commander',
			type: 'INF',
			speed: '15cm',
			armour: '5+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Power Weapon', range: '(base contact)', firepower: 'Assault Weapon', notes: ['MW', 'EA(+1)']},
				{name: 'Lasguns', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: ['Supreme Commander', 'Booby Traps']
		},
		catachan_infantry: {
			name: 'Catachan Infantry',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Lasguns', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Catachan Knives', range: '(base contact)', firepower: 'Assault Weapons', notes: []},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['Booby Traps', 'Heavy Bolters (One in two has a Heavy Bolter - count the non-suppressed Catachan Infantry units in the formation and divide by two, rounding up, to find the number of Heavy Bolter shots)']
		},
		catachan_mortar_squad: {
			name: 'Catachan Mortar Squad',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '6+',
			weapons: [
				{name: 'Lasguns', range: '(15cm)', firepower: 'Small Arms', notes: []},
				{name: 'Mortars', range: '30cm', firepower: '1 BP per two bases (rounding up)', notes: ['Indirect Fire']}
			],
			abilities: ['Mortars (Count the non-suppressed Catachan Mortar Squads in the formation and divide by two, rounding up, to find the number of Barrage Points)']
		},
		catachan_missile_team: {
			name: 'Catachan Missile Team',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '6+',
			weapons: [
				{name: 'Missile Launcher', range: '45cm', firepower: 'AP5+/AT6+/AA5+', notes: []}
			],
			abilities: ['Scout']
		},
		support_squad: {
			name: 'Support Squad',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '4+',
			weapons: [
				{name: '2x Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
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
				{name: 'Sniper Rifles', range: '30cm', firepower: 'AP5+', notes: ['Sniper']}
			],
			abilities: ['Scout']
		},
		ogryns: {
			name: 'Ogryns',
			type: 'INF',
			speed: '15cm',
			armour: '3+',
			cc: '4+',
			ff: '5+',
			weapons: [
				{name: 'Ogryn Weapons', range: '(base contact)', firepower: 'Assault Weapon', notes: ['MW', 'EA(+1)']},
				{name: 'Ripper Guns', range: '(15cm)', firepower: 'Small Arms', notes: []}
			],
			abilities: []
		},
		catachan_sentinel: {
			name: 'Catachan Sentinel',
			type: 'LV',
			speed: '20cm',
			armour: '6+',
			cc: '5+',
			ff: '5+',
			weapons: [
				{name: 'Chainsaw', range: '(base contact)', firepower: 'Assault Weapon', notes: []},
				{name: 'Heavy Flamer', range: '15cm', firepower: 'AP4+', notes: ['Ignore Cover']},
				{name: 'Heavy Flamer', range: '(15cm)', firepower: 'Small Arms', notes: ['Ignore Cover']}
			],
			abilities: ['Scout', 'Walker']
		},
		earthshaker_platform: {
			name: 'Earthshaker Platform',
			type: 'LV',
			speed: 'Immobile',
			armour: '6+',
			cc: '6+',
			ff: '6+',
			weapons: [
				{name: 'Earthshaker', range: '120cm', firepower: 'AP4+/AT4+', notes: []},
				{name: 'Earthshaker', range: '120cm', firepower: '1BP', notes: ['Indirect Fire']}
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
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: 'Inferno Cannon', range: '30cm', firepower: 'AP3+', notes: ['Ignore Cover']}
			],
			abilities: []
		},
		leman_russ_demolisher: {
			name: 'Leman Russ Demolisher',
			type: 'AV',
			speed: '20cm',
			armour: '4+',
			cc: '6+',
			ff: '3+',
			weapons: [
				{name: '2x Plasma Cannon', range: '30cm', firepower: 'AP4+/AT4+', notes: ['Slow Firing']},
				{name: 'Demolisher Cannon', range: '30cm', firepower: 'AP3+/AT4+', notes: ['Ignore Cover']},
				{name: 'Lascannon', range: '45cm', firepower: 'AT5+', notes: []}
			],
			abilities: ['Reinforced Armor']
		},
		hydra: {
			name: 'Hydra',
			type: 'AV',
			speed: '30cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: '2x Twin Autocannon', range: '45cm', firepower: 'AP4+/AT5+/AA5+', notes: []}
			],
			abilities: []
		},
		catachan_valkyrie: {
			name: 'Catachan Valkyrie',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: '2x Rocket Pod', range: '30cm', firepower: '1BP', notes: ['Disrupt', 'One-Shot']},
				{name: '2x Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: 'Multilaser', range: '30cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: ['Skimmer', 'Scout', 'Transport', 'May carry 2 of the following units: Deathworld Veterans, Imperial Guard Commander, Catachan Infantry, Catachan Missile Team, Catachan Mortar Squad, Support Squad, Sniper; Or 1 Ogryn']
		},
		vulture: {
			name: 'Vulture',
			type: 'AV',
			speed: '35cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: 'Twin Autocannon', range: '45cm', firepower: 'AP4+/AT5+', notes: []},
				{name: '2x Hellstrike', range: '120cm', firepower: 'AT2+', notes: ['One-Shot']}
			],
			abilities: ['Skimmer', 'Scout']
		},
		traitors_bane_hellhammer: {
			name: 'Traitor\'s Bane Hellhammer',
			type: 'SH',
			speed: '15cm',
			armour: '4+',
			cc: '4+',
			ff: '2+',
			weapons: [
				{name: 'Hellhammer Cannon', range: '45cm', firepower: 'AP3+/AT3+', notes: ['Ignore Cover']},
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []},
				{name: '4x Lascannons', range: '45cm', firepower: 'AT5+', notes: []},
				{name: 'Demolisher Cannon', range: '30cm', firepower: 'AP3+/AT4+', notes: ['Ignore Cover', 'FxF']},
				{name: 'Twin Heavy Bolter', range: '30cm', firepower: 'AP4+', notes: ['FxF']},
				{name: '4x Heavy Flamers', range: '15cm', firepower: 'AP4+', notes: ['Ignore Cover']},
				{name: '4x Heavy Flamers', range: '(15cm)', firepower: 'Small Arms', notes: ['Ignore Cover']}
			],
			abilities: ['Damage Capacity 3', 'Reinforced Armor', 'Leader', 'Inspiring', 'Fearless', 'Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of a 6+.']
		},
		thunderbolt_fighter_bomber: {
			name: 'Thunderbolt Fighter-Bomber',
			type: 'AC',
			speed: 'Fighter-Bomber',
			armour: '6+',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Quad Heavy Bolters', range: '15cm', firepower: 'AP4+/AA5+', notes: ['FxF']},
				{name: 'Twin Autocannons', range: '30cm', firepower: 'AP5+/AT6+/AA5+', notes: ['FxF']},
				{name: 'Underwing Rockets', range: '30cm', firepower: 'AT4+', notes: ['FxF']}
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
				{name: '2x Twin Heavy Bolter', range: '15cm', firepower: 'AA5+', notes: []},
				{name: 'Bomb Racks', range: '15cm', firepower: '3BP', notes: ['FxF']},
				{name: 'Twin Lascannon', range: '45cm', firepower: 'AT4+/AA4+', notes: ['FxF']}
			],
			abilities: []
		},
		lunar_class_cruiser: {
			name: 'Lunar Class Cruiser',
			type: 'SC',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Orbital Bombardment', range: '-', firepower: '3BP', notes: ['MW']},
				{name: 'Pin-point Attack', range: '-', firepower: 'MW2+', notes: ['TK(D3)']}
			],
			abilities: []
		},
		emperor_class_battleship: {
			name: 'Emperor Class Battleship',
			type: 'SC',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Orbital Bombardment', range: '-', firepower: '8BP', notes: ['MW']}
			],
			abilities: ['Slow and Steady', 'May not be used on turns 1 & 2 unless scenario states']
		}
	},
	nameToKey: {}
};

(function() {
	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeCatachanDeathworldVeteransName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.catachanDeathworldVeterans.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.catachanDeathworldVeterans.nameToKey[compact] = key;
		}
	}

	for (var key in ArmyforgeUnitProfiles.catachanDeathworldVeterans.profiles) {
		if (ArmyforgeUnitProfiles.catachanDeathworldVeterans.profiles.hasOwnProperty(key)) {
			registerAlias(ArmyforgeUnitProfiles.catachanDeathworldVeterans.profiles[key].name, key);
		}
	}

	var aliases = {
		'0-1 Deathworld Air Cavalry Company':'imperial_guard_commander',
		'Deathworld Air Cavalry Company':'imperial_guard_commander',
		'Deathworld Infantry Company':'imperial_guard_commander',
		'0-1 Deathworld Regimental HQ':'imperial_guard_supreme_commander',
		'Deathworld Regimental HQ':'imperial_guard_supreme_commander',
		'Supreme Commander':'imperial_guard_supreme_commander',
		'Imperial Guard Supreme Commander':'imperial_guard_supreme_commander',
		'Imperial Guard Commander':'imperial_guard_commander',
		'Catachan Infantry units':'catachan_infantry',
		'Imperial Guard Infantry units':'catachan_infantry',
		'Imperial Guard Infantry':'catachan_infantry',
		'Catachan Infantry':'catachan_infantry',
		'Catachan Valkyries':'catachan_valkyrie',
		'Catachan Valkyrie':'catachan_valkyrie',
		'Infantry Platoon':'catachan_infantry',
		'6 Catachan Infantry units':'catachan_infantry',
		'Fire Support Platoon':'support_squad',
		'4 Support Squad units':'support_squad',
		'Support Squad units':'support_squad',
		'Missile Team':'catachan_missile_team',
		'1 Catachan Missile Team unit':'catachan_missile_team',
		'Catachan Missile Team unit':'catachan_missile_team',
		'Mortar Section':'catachan_mortar_squad',
		'2 Catachan Mortar Squad units':'catachan_mortar_squad',
		'Catachan Mortar Squad units':'catachan_mortar_squad',
		'Catachan Mortar Team units':'catachan_mortar_squad',
		'Snipers':'sniper',
		'2 Sniper units':'sniper',
		'Sniper units':'sniper',
		'Ogryns':'ogryns',
		'2 Ogryn units':'ogryns',
		'2 Ogryn Units':'ogryns',
		'Ogryn units':'ogryns',
		'Ogryn Units':'ogryns',
		'Vulture Support':'vulture',
		'2 Vultures':'vulture',
		'Vultures':'vulture',
		'Vulture':'vulture',
		'Armor Support':'leman_russ_demolisher',
		'Armour Support':'leman_russ_demolisher',
		'Leman Russ Demolishers':'leman_russ_demolisher',
		'Hellhounds':'hellhound',
		'Hellhound':'hellhound',
		'Hydra':'hydra',
		'1 Hydra Flak Tank':'hydra',
		'Hydra Flak Tank':'hydra',
		'Catachan Devils':'catachan_devils',
		'Catachan Devil units':'catachan_devils',
		'Deathworld Mortar Platoon':'catachan_mortar_squad',
		'Ogryn Platoon':'ogryns',
		'Deathworld Sentinel Squadron':'catachan_sentinel',
		'Catachan Sentinels':'catachan_sentinel',
		'Deathworld Veterans Platoon':'deathworld_veterans',
		'Deathworld Veterans units':'deathworld_veterans',
		'Deathworld Veteran units':'deathworld_veterans',
		'Hellhound Platoon':'hellhound',
		'Support Tank Squadron':'leman_russ_demolisher',
		'Artillery Firebase':'earthshaker_platform',
		'Earthshaker platforms':'earthshaker_platform',
		'Traitors Bane':'traitors_bane_hellhammer',
		'Traitor\'s Bane':'traitors_bane_hellhammer',
		'Traitor\'s Bane Hellhammer':'traitors_bane_hellhammer',
		'Marauder Squadron':'marauder_bomber',
		'Marauder Bombers':'marauder_bomber',
		'Thunderbolt Squadron':'thunderbolt_fighter_bomber',
		'Thunderbolt Fighters':'thunderbolt_fighter_bomber',
		'Thunderbolt Fighter-Bomber':'thunderbolt_fighter_bomber',
		'Orbital Support - Lunar Class Cruiser':'lunar_class_cruiser',
		'Lunar Class Cruiser':'lunar_class_cruiser',
		'Orbital Support - Emperor Class Battleship':'emperor_class_battleship',
		'Emperor Class Battleship':'emperor_class_battleship',
		'Commissar':'commissar'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, aliases[alias]);
		}
	}
})();

ArmyforgeUnitProfiles.findCatachanDeathworldVeteransProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.catachanDeathworldVeterans.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeCatachanDeathworldVeteransName(displayName);
	var key = ArmyforgeUnitProfiles.catachanDeathworldVeterans.nameToKey[normalized] || ArmyforgeUnitProfiles.catachanDeathworldVeterans.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.catachanDeathworldVeterans.profiles[key] || null;
};
