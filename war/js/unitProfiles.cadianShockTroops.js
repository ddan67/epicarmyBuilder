// Source: war/source-json/cadian-shock-troops.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeCadianShockTroopsName = ArmyforgeUnitProfiles.normalizeCadianShockTroopsName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/\bcentre\b/g, 'center')
		.replace(/\blehman\b/g, 'leman')
		.replace(/\bthunderbolts\b/g, 'thunderbolt fighters')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/\b(add|up to|any|one|of|the|following)\b/g, ' ')
		.replace(/\b(cadian shock troops|imperial guard|ig)\b/g, ' ')
		.replace(/\b(unit|units|company|companies|platoon|platoons|formation|formations|squadron|squadrons|headquarters)\b/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.cadianShockTroops = {
	armyIds: ['IG_cadian_NETEA'],
	profiles: {
		commissar: {
			name: 'Commissar',
			type: 'CH',
			speed: 'n/a',
			armour: 'n/a',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Power Weapon', range: '(bc)', firepower: 'Assault Weapons', notes: ['EA(+1)', 'MW']}
			],
			abilities: ['Fearless', 'Inspiring', 'Leader']
		},
		battle_psykers: {
			name: 'Battle Psykers',
			type: 'INF',
			speed: '15cm',
			armour: '-',
			cc: '6+',
			ff: '4+',
			weapons: [
				{name: 'Psychic Powers', range: '(15cm)', firepower: 'Small Arms', notes: ['MW']}
			],
			abilities: ['Invulnerable Save']
		},
		commander: {
			name: 'Commander',
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
		infantry: {
			name: 'Infantry',
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
		kasrkin: {
			name: 'Kasrkin',
			type: 'INF',
			speed: '15cm',
			armour: '5+',
			cc: '5+',
			ff: '4+',
			weapons: [
				{name: 'Plasma Guns', range: '15cm', firepower: 'AP5+/AT5+', notes: []}
			],
			abilities: []
		},
		sabre_platform: {
			name: 'Sabre Platform',
			type: 'INF',
			speed: '10cm',
			armour: '-',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Twin Flak Autocannon', range: '30cm', firepower: 'AP4+/AT5+/AA5+', notes: []}
			],
			abilities: ['Mounted']
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
			abilities: ['Scout', 'Sniper']
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
		supreme_commander: {
			name: 'Supreme Commander',
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
		cadian_sentinel: {
			name: 'Cadian Sentinel',
			type: 'LV',
			speed: '20cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []}
			],
			abilities: ['Walker']
		},
		basilisk: {
			name: 'Basilisk',
			type: 'AV',
			speed: '20cm',
			armour: '5+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Earthshaker', range: '120cm', firepower: 'AP4+/AT4+', notes: []},
				{name: 'Earthshaker', range: '120cm', firepower: '1BP', notes: ['Indirect Fire']},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: []
		},
		bombard: {
			name: 'Bombard',
			type: 'AV',
			speed: '20cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Siege Mortar', range: '45cm', firepower: '2BP', notes: ['Ignore Cover', 'Indirect Fire', 'Slow Firing']},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: []
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
			abilities: ['Transport', 'May transport two infantry units without Jump Packs or Mounted.']
		},
		deathstrike: {
			name: 'Deathstrike',
			type: 'AV',
			speed: '20cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Deathstrike Missile', range: 'Unlimited', firepower: 'MW2+', notes: ['Indirect Fire', 'Single Shot', 'TK(D6)']},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
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
				{name: 'Heavy Mortar', range: '30cm', firepower: '1BP', notes: ['Indirect Fire']},
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
				{name: 'Inferno Cannon', range: '30cm', firepower: 'AP3+', notes: ['Ignore Cover']},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: []
		},
		hydra: {
			name: 'Hydra',
			type: 'AV',
			speed: '30cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: '2x Twin Hydra Autocannon', range: '45cm', firepower: 'AP4+/AT5+/AA5+', notes: []},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: []
		},
		leman_russ: {
			name: 'Leman Russ',
			type: 'AV',
			speed: '20cm',
			armour: '4+',
			cc: '6+',
			ff: '4+',
			weapons: [
				{name: 'Battle Cannon', range: '75cm', firepower: 'AP4+/AT4+', notes: []},
				{name: 'Lascannon', range: '45cm', firepower: 'AT5+', notes: []},
				{name: '2x Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['Reinforced Armour']
		},
		leman_russ_demolisher: {
			name: 'Leman Russ Demolisher',
			type: 'AV',
			speed: '20cm',
			armour: '4+',
			cc: '6+',
			ff: '3+',
			weapons: [
				{name: 'Demolisher', range: '30cm', firepower: 'AP3+/AT4+', notes: ['Ignore Cover']},
				{name: 'Lascannon', range: '45cm', firepower: 'AT5+', notes: []},
				{name: '2x Plasma Cannon', range: '30cm', firepower: 'AP4+/AT4+', notes: ['Slow Firing']}
			],
			abilities: ['Reinforced Armour']
		},
		manticore: {
			name: 'Manticore',
			type: 'AV',
			speed: '20cm',
			armour: '6+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Rocket Launcher', range: '150cm', firepower: '2BP', notes: ['Disrupt', 'Indirect Fire', 'Slow Firing']},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: []
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
				{name: '2x Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: '2x Rocket Pod', range: '30cm', firepower: '1BP', notes: ['Disrupt', 'Single Shot']}
			],
			abilities: ['Scout', 'Skimmer', 'Transport', 'May transport two infantry units without Jump Packs or Mounted.']
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
				{name: '2x Hellstrike Missiles', range: '120cm', firepower: 'AT2+', notes: ['Single Shot']}
			],
			abilities: ['Scout', 'Skimmer']
		},
		baneblade: {
			name: 'Baneblade',
			type: 'WE',
			speed: '15cm',
			armour: '4+',
			cc: '6+',
			ff: '4+',
			weapons: [
				{name: 'Baneblade Battle Cannon', range: '75cm', firepower: 'AP3+/AT3+', notes: []},
				{name: 'Autocannon', range: '45cm', firepower: 'AP5+/AT6+', notes: []},
				{name: 'Demolisher', range: '30cm', firepower: 'AP3+/AT4+', notes: ['FxF', 'Ignore Cover']},
				{name: '2x Lascannon', range: '45cm', firepower: 'AT5+', notes: []},
				{name: '3x Twin Heavy Bolters', range: '30cm', firepower: 'AP4+', notes: []}
			],
			abilities: ['DC 3', 'Reinforced Armour', 'Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 6+.']
		},
		leviathan_mobile_command_center: {
			name: 'Leviathan Mobile Command Center',
			type: 'WE',
			speed: '15cm',
			armour: '4+',
			cc: '5+',
			ff: '4+',
			weapons: [
				{name: 'Doomsday Cannon', range: '90cm', firepower: '3BP', notes: ['MW', 'FxF']},
				{name: 'Battlecannon', range: '75cm', firepower: 'AP4+/AT4+', notes: []},
				{name: '3x Twin Lascannon', range: '45cm', firepower: 'AT4+', notes: ['Left Arc']},
				{name: '3x Twin Lascannon', range: '45cm', firepower: 'AT4+', notes: ['Right Arc']}
			],
			abilities: ['DC 4', '2 Void Shields', 'Fearless', 'Reinforced Armour', 'Thick Rear Armour', 'Transport (16 infantry units)', 'Up to six units may Fire and FF from the fighting platform.', 'Critical Hit Effect: 1st hit immobilizes, subsequent critical hits do 1 extra point of damage.']
		},
		ordinatus_cadia: {
			name: 'Ordinatus Cadia',
			type: 'WE',
			speed: '10cm',
			armour: '5+',
			cc: '6+',
			ff: '4+',
			weapons: [
				{name: 'Behemoth Blaster', range: '75cm', firepower: '6x MW3+', notes: ['FxF']},
				{name: '2x Lascannon', range: '45cm', firepower: 'AT5+', notes: []},
				{name: '2x Heavy Bolter', range: '30cm', firepower: 'AP5+/AA6+', notes: []}
			],
			abilities: ['DC 4', '4 Void Shields', 'Reinforced Armour', 'Inspiring', 'Critical Hit Effect: Destroyed, units within 15cm are hit on a 4+. All friendly formations within LOS takes a BM.']
		},
		reaver_class_titan: {
			name: 'Reaver Class Titan',
			type: 'WE',
			speed: '20cm',
			armour: '4+',
			cc: '3+',
			ff: '3+',
			weapons: [
				{name: '2x Turbo-Laser Destructor', range: '60cm', firepower: '4x AP5+/AT3+', notes: ['FwA']},
				{name: 'Rocket Launcher', range: '60cm', firepower: '3BP', notes: ['FwA']}
			],
			abilities: ['DC 6', 'Fearless', 'Reinforced Armour', '4 Void Shields', 'Walker', 'May step over units and pieces of terrain that are lower than the unit\'s knees and less than 2cm wide.', 'Critical Hit Effect: The unit\'s plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 5+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage.']
		},
		shadowsword: {
			name: 'Shadowsword',
			type: 'WE',
			speed: '15cm',
			armour: '4+',
			cc: '6+',
			ff: '5+',
			weapons: [
				{name: 'Volcano Cannon', range: '90cm', firepower: 'MW2+', notes: ['FxF', 'TK(D3)']},
				{name: '2x Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []}
			],
			abilities: ['DC 3', 'Reinforced Armour', 'Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 6+.']
		},
		stormlord: {
			name: 'Stormlord',
			type: 'WE',
			speed: '15cm',
			armour: '4+',
			cc: '6+',
			ff: '3+',
			weapons: [
				{name: 'Vulcan Mega-bolter', range: '45cm', firepower: '4x AP3+/AT5+', notes: ['FxF']},
				{name: '3x Twin Heavy Bolters', range: '30cm', firepower: 'AP4+', notes: []},
				{name: '2x Heavy Flamers', range: '15cm', firepower: 'AP4+', notes: ['Ignore Cover']},
				{name: '2x Heavy Flamers', range: '(15cm)', firepower: 'Small Arms', notes: ['Ignore Cover']}
			],
			abilities: ['DC 3', 'Reinforced Armour', 'Transport (8 infantry units)', '4 units may Fire and FF from the fighting platform.', 'Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 6+.']
		},
		stormsword: {
			name: 'Stormsword',
			type: 'WE',
			speed: '15cm',
			armour: '4+',
			cc: '6+',
			ff: '4+',
			weapons: [
				{name: 'Siege Cannon', range: '45cm', firepower: '3BP', notes: ['Disrupt', 'Ignore Cover', 'FxF']},
				{name: '2x Twin Heavy Bolters', range: '30cm', firepower: 'AP4+', notes: []},
				{name: 'Heavy Bolter', range: '30cm', firepower: 'AP5+', notes: []},
				{name: '2x Heavy Flamers', range: '15cm', firepower: 'AP4+', notes: ['Ignore Cover']},
				{name: '2x Heavy Flamers', range: '(15cm)', firepower: 'Small Arms', notes: ['Ignore Cover']}
			],
			abilities: ['DC 3', 'Reinforced Armour', 'Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 6+.']
		},
		warlord_class_titan: {
			name: 'Warlord Class Titan',
			type: 'WE',
			speed: '15cm',
			armour: '4+',
			cc: '2+',
			ff: '3+',
			weapons: [
				{name: 'Volcano Cannon', range: '90cm', firepower: 'MW2+', notes: ['FwA', 'TK(D3)']},
				{name: 'Gatlin Blaster', range: '60cm', firepower: '4x AP4+/AT4+', notes: ['FwA']},
				{name: '2x Turbo Destructor', range: '60cm', firepower: '4x AP5+/AT3+', notes: ['FxF']}
			],
			abilities: ['DC 8', 'Fearless', 'Reinforced Armour', 'Thick Rear Armour', '6 Void Shields', 'Walker', 'May step over units and pieces of terrain that are lower than the unit\'s knees and less than 2cm wide.', 'Critical Hit Effect: The unit\'s plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 4+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage.']
		},
		marauder_bomber: {
			name: 'Marauder Bomber',
			type: 'AC',
			speed: 'Bomber',
			armour: '4+',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Twin Lascannon', range: '45cm', firepower: 'AT4+/AA4+', notes: ['FxF']},
				{name: 'Bomb Racks', range: '15cm', firepower: '3BP', notes: ['FxF']},
				{name: '2x Twin Heavy Bolter', range: '15cm', firepower: 'AA5+', notes: []}
			],
			abilities: []
		},
		marauder_colossus: {
			name: 'Marauder Colossus',
			type: 'AC/WE',
			speed: 'Bomber',
			armour: '4+',
			cc: 'n/a',
			ff: 'n/a',
			weapons: [
				{name: 'Twin Heavy Bolter turret', range: '15cm', firepower: 'AP4+/AA5+', notes: []},
				{name: 'Colossus Bomb', range: '15cm', firepower: '3BP', notes: ['MW']}
			],
			abilities: ['DC 2', 'Critical Hit Effect: Destroyed.']
		},
		thunderbolt_fighter: {
			name: 'Thunderbolt Fighter',
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
		var normalized = ArmyforgeUnitProfiles.normalizeCadianShockTroopsName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.cadianShockTroops.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.cadianShockTroops.nameToKey[compact] = key;
		}
	}

	for (var key in ArmyforgeUnitProfiles.cadianShockTroops.profiles) {
		if (ArmyforgeUnitProfiles.cadianShockTroops.profiles.hasOwnProperty(key)) {
			registerAlias(ArmyforgeUnitProfiles.cadianShockTroops.profiles[key].name, key);
		}
	}

	var aliases = {
		'0-1 Cadian Regimental HQ':'supreme_commander',
		'Cadian Regimental HQ':'supreme_commander',
		'Cadian Regimental Headquarters':'supreme_commander',
		'Imperial Guard Supreme Commander':'supreme_commander',
		'Supreme Commander':'supreme_commander',
		'Leviathan Mobile Command Center':'leviathan_mobile_command_center',
		'Leviathan Mobile Command Centre':'leviathan_mobile_command_center',
		'Leviathan':'leviathan_mobile_command_center',
		'Kasrkin Infantry Company':'commander',
		'Cadian Infantry Company':'commander',
		'0-1 Whiteshield Company':'commander',
		'Whiteshield Company':'commander',
		'Cadian Whiteshield Company':'commander',
		'Imperial Guard Commander':'commander',
		'IG Commander':'commander',
		'Commander unit':'commander',
		'Infantry units':'infantry',
		'Imperial Guard units':'infantry',
		'Imperial Guard unit':'infantry',
		'Kasrkin units':'kasrkin',
		'Fire Support Platoon':'support_squad',
		'Fire Support Platoon (4 support Squad units)':'support_squad',
		'Support Squad units':'support_squad',
		'support Squad units':'support_squad',
		'Infantry Platoon':'infantry',
		'Infantry Platoon (6 Imperial Guard Infantry units)':'infantry',
		'Kasrkin Platoon':'kasrkin',
		'Kasrkin Platoon (4 Kasrkin units)':'kasrkin',
		'Sanctioned Psykers':'battle_psykers',
		'Sanctioned Psykers (1 Sanctioned Psyker unit)':'battle_psykers',
		'Sanctioned Psykers (2 Sanctioned Psyker units)':'battle_psykers',
		'Battle Psyker units':'battle_psykers',
		'Battle Psyker unit':'battle_psykers',
		'Battle Psykers':'battle_psykers',
		'Sabre Platforms':'sabre_platform',
		'Sabre Platforms (3 Sabre Platforms)':'sabre_platform',
		'Sabre Platform':'sabre_platform',
		'Snipers':'snipers',
		'Snipers (1 Sniper unit)':'snipers',
		'Snipers (2 Sniper units)':'snipers',
		'Sniper':'snipers',
		'Sniper unit':'snipers',
		'Sniper units':'snipers',
		'Assault Transport':'stormlord',
		'Assault Transport (1 Stormlord)':'stormlord',
		'Assault Transport (2 Stormlords)':'stormlord',
		'Stormlords':'stormlord',
		'Stormlord':'stormlord',
		'Basilisks':'basilisk',
		'Basilisk':'basilisk',
		'3 Basilisks':'basilisk',
		'Bombards':'bombard',
		'Bombard':'bombard',
		'3 Bombards':'bombard',
		'Manticores':'manticore',
		'Manticore':'manticore',
		'3 Manticores':'manticore',
		'Flak Battery':'hydra',
		'Hydras':'hydra',
		'Hydra':'hydra',
		'3 Hydras':'hydra',
		'Griffon Platoon':'griffon',
		'Griffons':'griffon',
		'Griffon':'griffon',
		'Hellhound Platoon':'hellhound',
		'Hellhounds':'hellhound',
		'Hellhound':'hellhound',
		'Mechanized Kasrkin - Valkyries':'commander',
		'Mechanized Kasrkin - Chimeras':'commander',
		'Mechanized Kasrkin':'commander',
		'Valkyries':'valkyrie',
		'Valkyrie':'valkyrie',
		'4 Valkyries':'valkyrie',
		'Chimeras':'chimera',
		'Chimera':'chimera',
		'4 Chimeras':'chimera',
		'Sentinel Squadron':'cadian_sentinel',
		'Cadian Sentinels':'cadian_sentinel',
		'Baneblade':'baneblade',
		'Shadowsword':'shadowsword',
		'Stormsword':'stormsword',
		'Leman Russ':'leman_russ',
		'Leman Russ Demolisher':'leman_russ_demolisher',
		'6 Leman Russ Tanks':'leman_russ',
		'6 Lehman Russ Tanks':'leman_russ',
		'6 Leman Russ Demolisher Tanks':'leman_russ_demolisher',
		'6 Lehman Russ Demolisher Tanks':'leman_russ_demolisher',
		'Vulture Squadron':'vulture',
		'Vultures':'vulture',
		'Vulture':'vulture',
		'0-1 Deathstrike Battery':'deathstrike',
		'Deathstrike Battery':'deathstrike',
		'Deathstrikes':'deathstrike',
		'Deathstrike':'deathstrike',
		'Deathstrike Missile Launchers':'deathstrike',
		'Marauder Colossus':'marauder_colossus',
		'Colossus Squadron':'marauder_colossus',
		'Marauder Squadron':'marauder_bomber',
		'Marauder Bombers':'marauder_bomber',
		'Marauder Bomber':'marauder_bomber',
		'Thunderbolt Squadron':'thunderbolt_fighter',
		'Thunderbolt Fighters':'thunderbolt_fighter',
		'Thunderbolt Fighter':'thunderbolt_fighter',
		'Thunderbolts':'thunderbolt_fighter',
		'0-1 Ordinatus':'ordinatus_cadia',
		'Ordinatus':'ordinatus_cadia',
		'Ordinatus Cadia':'ordinatus_cadia',
		'Reaver':'reaver_class_titan',
		'Reaver Class Titan':'reaver_class_titan',
		'Warlord':'warlord_class_titan',
		'Warlord Class Titan':'warlord_class_titan',
		'Commissar':'commissar'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, aliases[alias]);
		}
	}
})();

ArmyforgeUnitProfiles.findCadianShockTroopsProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.cadianShockTroops.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeCadianShockTroopsName(displayName);
	var key = ArmyforgeUnitProfiles.cadianShockTroops.nameToKey[normalized] || ArmyforgeUnitProfiles.cadianShockTroops.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.cadianShockTroops.profiles[key] || null;
};
