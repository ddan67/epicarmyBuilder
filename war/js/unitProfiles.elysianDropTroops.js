// Source: war/source-json/elysian-drop-troops.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeElysianDropTroopsName = ArmyforgeUnitProfiles.normalizeElysianDropTroopsName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/\btauros\b/g, 'taurus')
		.replace(/\bvenators\b/g, 'venator')
		.replace(/\bvultures\b/g, 'vulture')
		.replace(/\bvalkyries\b/g, 'valkyrie')
		.replace(/\bvendettas\b/g, 'vendetta')
		.replace(/\bsky talons\b/g, 'sky talon')
		.replace(/\blightning interceptors\b/g, 'lightning fighters')
		.replace(/\bstrike squadron\b/g, 'lightning strike')
		.replace(/\bdestroyer squadron\b/g, 'marauder destroyer')
		.replace(/\bspacecraft\b/g, 'space ship')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/\b(add|may|have|take|replace|with|for|points?|each|only|one|of|the|any|formation|formations|unit|units|company|companies|platoon|platoons|squadron|squadrons)\b/g, ' ')
		.replace(/\b(elysian drop troop regiment|elysian drop troop|elysian|imperial guard|ig)\b/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.elysianDropTroops = {
	armyIds: ['IG_Elysian_NETEA'],
	profiles: {
		elysian_supreme_commander: {name:'Elysian Supreme Commander', type:'INF', speed:'15cm', armour:'5+', cc:'4+', ff:'4+', weapons:[{name:'Lasguns', range:'(15cm)', firepower:'Small Arms', notes:[]},{name:'Plasma Cannon', range:'30cm', firepower:'AP5+/AT5+', notes:[]},{name:'Power Weapons', range:'(bc)', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Supreme Commander','Drop Troops','Infiltrate']},
		elysian_commander: {name:'Elysian Commander', type:'INF', speed:'15cm', armour:'5+', cc:'5+', ff:'4+', weapons:[{name:'Lasguns', range:'(15cm)', firepower:'Small Arms', notes:[]},{name:'Plasma Cannon', range:'30cm', firepower:'AP5+/AT5+', notes:[]},{name:'Power Weapons', range:'(bc)', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Commander','Leader','Drop Troops','Infiltrate']},
		commissar: {name:'Commissar', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Power Sword', range:'(bc)', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Leader','Fearless','Inspiring']},
		elysian_drop_troop_infantry: {name:'Elysian Drop Troop Infantry', type:'INF', speed:'15cm', armour:'-', cc:'5+', ff:'4+', weapons:[{name:'Lasguns', range:'(15cm)', firepower:'Small Arms', notes:[]},{name:'Plasma Cannon', range:'30cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Drop Troops','Infiltrate','Plasma Cannon every 2nd unit']},
		elysian_drop_hardened_veterans: {name:'Elysian Drop Hardened Veterans', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'4+', weapons:[{name:'Las Carbines', range:'(15cm)', firepower:'Small Arms', notes:[]},{name:'Machetes', range:'(bc)', firepower:'Assault Weapons', notes:[]},{name:'Plasma Cannon', range:'30cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Drop Troops','Infiltrate']},
		grey_ghosts: {name:'Grey Ghosts', type:'INF', speed:'15cm', armour:'-', cc:'4+', ff:'4+', weapons:[{name:'Las Carbines', range:'(15cm)', firepower:'Small Arms', notes:['First Strike']},{name:'Machetes', range:'(bc)', firepower:'Assault Weapons', notes:['First Strike']},{name:'Sniper Rifle', range:'30cm', firepower:'AP5+', notes:[]},{name:'Called in artillery', range:'45cm', firepower:'3BP', notes:['Indirect','Disrupt']}], abilities:['Masters of Stealth (+1 to their cover save)','Sniper','Scout']},
		storm_troopers: {name:'Storm Troopers', type:'INF', speed:'15cm', armour:'5+', cc:'4+', ff:'4+', weapons:[{name:'Hellguns', range:'(15cm)', firepower:'Small Arms', notes:[]},{name:'Plasma Cannon', range:'30cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Teleport']},
		elysian_support_squad: {name:'Elysian Support Squad', type:'INF', speed:'15cm', armour:'-', cc:'6+', ff:'3+', weapons:[{name:'2x Missile Launchers', range:'45cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Drop Troops']},
		elysian_mortar_squad: {name:'Elysian Mortar Squad', type:'INF', speed:'15cm', armour:'-', cc:'6+', ff:'4+', weapons:[{name:'Lasguns', range:'(15cm)', firepower:'Small Arms', notes:[]},{name:'Paired Mortars', range:'60cm', firepower:'2x AP4+/AT5+', notes:['Indirect']}], abilities:['Drop Troops','No minimum or double range for Indirect']},
		elysian_cyclops: {name:'Elysian Cyclops', type:'LV', speed:'25cm', armour:'6+', cc:'3+', ff:'-', weapons:[{name:'Demo Charges', range:'(bc)', firepower:'Assault Weapons', notes:['MW','One Shot']}], abilities:['Infiltrate','Drop Troops','Removed from play after it attacks','Expendable']},
		taurus: {name:'Taurus', type:'LV', speed:'35cm', armour:'6+', cc:'6+', ff:'4+', weapons:[{name:'Grenade Launcher', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Walker','Scout']},
		taurus_venator: {name:'Taurus Venator', type:'LV', speed:'35cm', armour:'6+', cc:'6+', ff:'5+', weapons:[{name:'Multi-Laser', range:'30cm', firepower:'AP4+/AT5+', notes:['alternative weapon option']},{name:'TL Lascannon', range:'45cm', firepower:'AT4+', notes:['alternative weapon option']}], abilities:['Walker','Scout']},
		elysian_drop_rocket_sentinel: {name:'Elysian Drop Rocket Sentinel', type:'LV', speed:'20cm', armour:'6+', cc:'6+', ff:'5+', weapons:[{name:'Support Rocket Launcher', range:'45cm', firepower:'AP4+/AT5+', notes:['Disrupt','Indirect']}], abilities:['No minimum or double range for Indirect','Walker','Drop Troops']},
		elysian_drop_sentinel: {name:'Elysian Drop Sentinel', type:'LV', speed:'20cm', armour:'6+', cc:'6+', ff:'4+', weapons:[{name:'Small Arms', range:'(15cm)', firepower:'Small Arms', notes:['MW']},{name:'Multi-Melta', range:'15cm', firepower:'MW5+', notes:[]}], abilities:['Drop Troops','Walker']},
		elysian_sabre_platform: {name:'Elysian Sabre Platform', type:'INF', speed:'10cm', armour:'-', cc:'6+', ff:'5+', weapons:[{name:'Twin Flak AC 30mm', range:'30cm', firepower:'AP4+/AT5+/AA5+', notes:[]}], abilities:['Mounted','Drop Troops','Walker']},
		elysian_valkyrie_transport: {name:'Elysian Valkyrie Transport', type:'AV', speed:'35cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'Multi-laser', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'2x Heavy Bolter', range:'30cm', firepower:'AP5+', notes:[]},{name:'2x Rocket Pods', range:'30cm', firepower:'1BP', notes:['Disrupt','One Shot']}], abilities:['Skimmer','Scout','Transport','May transport 2 Infantry only.']},
		vulture_gunship: {name:'Vulture Gunship', type:'AV', speed:'35cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'Heavy Bolter', range:'30cm', firepower:'AP5+', notes:[]},{name:'TL Autocannon', range:'45cm', firepower:'AP4+/AT5+', notes:['alternative weapon package']},{name:'2x Hellstrike Missiles', range:'120cm', firepower:'AT2+', notes:['One Shot','alternative weapon package']},{name:'TL Punisher Cannon', range:'30cm', firepower:'4x AP4+', notes:['alternative weapon package']}], abilities:['Skimmer','Scout']},
		chimera: {name:'Chimera', type:'AV', speed:'35cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'Multilaser', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'Heavy Bolter', range:'30cm', firepower:'AP5+', notes:[]}], abilities:['Transport','Transports 2 IG Infantry Units']},
		leman_russ_conqueror: {name:'Leman Russ Conqueror', type:'AV', speed:'30cm', armour:'4+', cc:'6+', ff:'5+', weapons:[{name:'Conqueror Cannon', range:'45cm', firepower:'AP5+/AT5+', notes:[]},{name:'Lascannon', range:'45cm', firepower:'AT5+', notes:[]}], abilities:['Reinforced Armour']},
		ig_infantry_unit: {name:'IG Infantry unit', type:'INF', speed:'15cm', armour:'-', cc:'6+', ff:'5+', weapons:[{name:'Lasguns', range:'(15cm)', firepower:'Small Arms', notes:[]},{name:'Autocannon', range:'45cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Every second unit has an Autocannon']},
		lunar_class_cruiser: {name:'Lunar Class Cruiser', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'3BP', notes:['MW']},{name:'Pin Point Attack', range:'n/a', firepower:'MW2+', notes:['TK(D3)']}], abilities:[]},
		emperor_class_battleship: {name:'Emperor Class Battleship', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'8BP', notes:['MW']}], abilities:['Slow and Steady']},
		lightning_fighter: {name:'Lightning Fighter', type:'AC', speed:'Fighter', armour:'6+', cc:'n/a', ff:'n/a', weapons:[{name:'Long Barrelled A/C', range:'30cm', firepower:'AP5+/AT6+/AA5+', notes:['FxF']},{name:'Wingtip Lascannon', range:'30cm', firepower:'AT5+/AA5+', notes:['FxF']}], abilities:[]},
		lightning_strike_fighter: {name:'Lightning Strike Fighter', type:'AC', speed:'Fighter', armour:'6+', cc:'n/a', ff:'n/a', weapons:[{name:'Wingtip Lascannon', range:'30cm', firepower:'AT5+/AA5+', notes:['FxF']},{name:'2x Underwing Rockets', range:'30cm', firepower:'AT5+/AA5+', notes:['FxF']}], abilities:[]},
		marauder_bomber: {name:'Marauder Bomber', type:'AC/WE', speed:'Bomber', armour:'5+', cc:'n/a', ff:'n/a', weapons:[{name:'Long Barrelled AC', range:'15cm', firepower:'3BP', notes:['FxF']},{name:'TL Lascannon', range:'45cm', firepower:'AT4+', notes:['FxF']},{name:'2x TL Heavy Bolter', range:'15cm', firepower:'AA5+', notes:[]}], abilities:['Damage Capacity 2','Critical Hit: Bomber Destroyed']},
		marauder_destroyer: {name:'Marauder Destroyer', type:'AC/WE', speed:'Bomber', armour:'5+', cc:'n/a', ff:'n/a', weapons:[{name:'3x TL Autocannon', range:'30cm', firepower:'AT4+/AP5+', notes:['FxF']},{name:'TL Heavy Bolter', range:'15cm', firepower:'AA5+', notes:[]},{name:'TL Assault Cannon', range:'15cm', firepower:'AA4+', notes:['Right Arc']},{name:'2x Underwing Rockets', range:'30cm', firepower:'AT4+', notes:['FxR']}], abilities:['Damage Capacity 2','Critical Hit: Bomber Destroyed']},
		vendetta: {name:'Vendetta', type:'AV', speed:'35cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'3x Twin Lascannon', range:'45cm', firepower:'AT4+', notes:[]},{name:'2x Heavy Bolters', range:'30cm', firepower:'AP5+', notes:[]}], abilities:['Scout','Skimmer','Transport','May transport two Infantry units (Ogryns count as two units) or one Sentinel of any type.']},
		valkyrie_sky_talon: {name:'Valkyrie Sky Talon', type:'AV', speed:'35cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'Heavy Bolter', range:'30cm', firepower:'AP5+', notes:[]}], abilities:['Scout','Skimmer','Transport','May transport two Sentinels of any type.']}
	},
	nameToKey: {}
};

(function() {
	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeElysianDropTroopsName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.elysianDropTroops.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.elysianDropTroops.nameToKey[compact] = key;
		}
	}

	for (var key in ArmyforgeUnitProfiles.elysianDropTroops.profiles) {
		if (ArmyforgeUnitProfiles.elysianDropTroops.profiles.hasOwnProperty(key)) {
			registerAlias(ArmyforgeUnitProfiles.elysianDropTroops.profiles[key].name, key);
		}
	}

	var aliases = {
		'0-1 Elysian Regimental HQ':'elysian_supreme_commander',
		'Elysian Regimental HQ':'elysian_supreme_commander',
		'Regimental HQ':'elysian_supreme_commander',
		'Elysian Supreme Commander':'elysian_supreme_commander',
		'Drop Troops':'elysian_drop_troop_infantry',
		'Elysian Drop Troops':'elysian_drop_troop_infantry',
		'Elysian Drop Troop':'elysian_drop_troop_infantry',
		'Elysian Drop Troop Infantry':'elysian_drop_troop_infantry',
		'Elysian Drop Troop Company':'elysian_commander',
		'Drop Troop Company':'elysian_commander',
		'Elysian Commander':'elysian_commander',
		'Elysian Drop Mortar Company':'elysian_mortar_squad',
		'Elysian Mortar units':'elysian_mortar_squad',
		'Elysian Mortar Squad':'elysian_mortar_squad',
		'Mortar Squad unit':'elysian_mortar_squad',
		'Mortar Squad units':'elysian_mortar_squad',
		'Mortar platoon':'elysian_mortar_squad',
		'Valkyries':'elysian_valkyrie_transport',
		'Valkyrie':'elysian_valkyrie_transport',
		'Elysian Valkyrie Transport':'elysian_valkyrie_transport',
		'Vendettas':'vendetta',
		'Vendetta':'vendetta',
		'Elysian Anti-tank Platoon':'elysian_commander',
		'Elysian Special Weapons Troops':'elysian_drop_troop_infantry',
		'Special Weapons Troops':'elysian_drop_troop_infantry',
		'Elysian droppable Sabre Battery':'elysian_sabre_platform',
		'Elysian Droppable Sabre Battery':'elysian_sabre_platform',
		'droppable Sabre AA Platforms':'elysian_sabre_platform',
		'Sabre AA Platforms':'elysian_sabre_platform',
		'Elysian Sabre Platform':'elysian_sabre_platform',
		'Vulture Squadron':'vulture_gunship',
		'Vultures':'vulture_gunship',
		'Vulture':'vulture_gunship',
		'Vulture Gunship':'vulture_gunship',
		'Elysian Drop Sentinel Squadron':'elysian_drop_sentinel',
		'Drop Sentinel Squadron':'elysian_drop_sentinel',
		'Drop Sentinels':'elysian_drop_sentinel',
		'Elysian Drop Sentinel':'elysian_drop_sentinel',
		'Drop Sentinel Platoon':'elysian_drop_sentinel',
		'4 Drop Sentinels':'elysian_drop_sentinel',
		'Elysian Drop Rocket Sentinels':'elysian_drop_rocket_sentinel',
		'Elysian Drop Rocket Sentinel':'elysian_drop_rocket_sentinel',
		'Tauros':'taurus',
		'Taurus':'taurus',
		'Venator':'taurus_venator',
		'Tauros Venator':'taurus_venator',
		'Taurus Venator':'taurus_venator',
		'Storm Trooper Company':'storm_troopers',
		'Storm Trooper Platoon':'storm_troopers',
		'Storm Trooper Commander':'storm_troopers',
		'Storm Troopers':'storm_troopers',
		'Elysian Storm Trooper Units':'storm_troopers',
		'Grey Ghosts Platoon':'grey_ghosts',
		'Grey Ghost':'grey_ghosts',
		'Grey Ghosts':'grey_ghosts',
		'Drop Hardened Veterans':'elysian_drop_hardened_veterans',
		'Drop Hardened Veteran':'elysian_drop_hardened_veterans',
		'Elysian Drop Hardened Veterans':'elysian_drop_hardened_veterans',
		'Hardened Veterans':'elysian_drop_hardened_veterans',
		'Hardened Veteran unit':'elysian_drop_hardened_veterans',
		'Hardened Veteran units':'elysian_drop_hardened_veterans',
		'Drop Fire Support':'elysian_support_squad',
		'Drop Fire Support units':'elysian_support_squad',
		'Elysian Support Squad':'elysian_support_squad',
		'Fire Support Platoon':'elysian_support_squad',
		'2 Elysian Support Squad units':'elysian_support_squad',
		'Elysian Cyclops':'elysian_cyclops',
		'Elysian Cyclops Units':'elysian_cyclops',
		'Lunar Cruiser':'lunar_class_cruiser',
		'Lunar Class Cruiser':'lunar_class_cruiser',
		'Emperor Class Battleship':'emperor_class_battleship',
		'Lightning Wing':'lightning_fighter',
		'Lightning Squadron':'lightning_fighter',
		'Lightning Fighters':'lightning_fighter',
		'Lightning Fighter':'lightning_fighter',
		'Lightning Strike':'lightning_strike_fighter',
		'Strike Squadron':'lightning_strike_fighter',
		'Lightning Strike Fighters':'lightning_strike_fighter',
		'Marauder Destroyer':'marauder_destroyer',
		'Destroyer Squadron':'marauder_destroyer',
		'Marauder Bomber':'marauder_bomber',
		'Line Breaker Column':'ig_infantry_unit',
		'Imperial infantry units':'ig_infantry_unit',
		'IG Infantry unit':'ig_infantry_unit',
		'Chimeras':'chimera',
		'Chimera':'chimera',
		'Conquerors':'leman_russ_conqueror',
		'Leman Russ Conqueror':'leman_russ_conqueror',
		'Sky Talons':'valkyrie_sky_talon',
		'Sky Talon':'valkyrie_sky_talon',
		'Valkyrie Sky Talon':'valkyrie_sky_talon',
		'Commissar':'commissar',
		'4 Valkyries or Vendettas':'elysian_valkyrie_transport',
		'4 Valkyrie Sky Talons':'valkyrie_sky_talon',
		'4 Vultures':'vulture_gunship',
		'2 Vultures, 2 Vulture Punishers':'vulture_gunship'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, aliases[alias]);
		}
	}
})();

ArmyforgeUnitProfiles.findElysianDropTroopsProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.elysianDropTroops.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeElysianDropTroopsName(displayName);
	var key = ArmyforgeUnitProfiles.elysianDropTroops.nameToKey[normalized] || ArmyforgeUnitProfiles.elysianDropTroops.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.elysianDropTroops.profiles[key] || null;
};
