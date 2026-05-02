// Source: war/source-json/mirali-skyraiders.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeMiraliSkyraidersName = ArmyforgeUnitProfiles.normalizeMiraliSkyraidersName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/\bmirali vendettas\b/g, 'mirali vendetta')
		.replace(/\bvultures\b/g, 'vulture')
		.replace(/\bvulture punishers\b/g, 'vulture punisher')
		.replace(/\bvulture slicks\b/g, 'vulture slick')
		.replace(/\bthunderbolt fighters\b/g, 'thunderbolt fighter')
		.replace(/\blightning strike fighters\b/g, 'lightning strike fighter')
		.replace(/\bhowitzer weapons platforms\b/g, 'howitzer weapon platform')
		.replace(/\bblitzen weapons platforms\b/g, 'blitzen aa platform')
		.replace(/\bgun emplacements\b/g, 'gun emplacement')
		.replace(/\bbunkers\b/g, 'bunker')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/\b(add|replace|with|for|points?|point|each|up|to|the|a|an|of|one|two|three|four|five|six|eight|formation|formations|company|companies|platoon|battery|flight|squadron|units|unit|plus|taken|upgrade|upgrades|may)\b/g, ' ')
		.replace(/\b(mirali skyraiders|mirali|imperial guard)\b/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.miraliSkyraiders = {
	armyIds: ['IG_miraliSkyraiders_NETEA'],
	profiles: {
		mirali_trackers: {"name":"Mirali Trackers","type":"INF","speed":"15cm","armour":"6+","cc":"4+","ff":"5+","weapons":[{"name":"Sniper Rifles","range":"30cm","firepower":"AP5+","notes":["Sniper"]},{"name":"Booby Traps","range":"(15cm)","firepower":"Small Arms","notes":[]},{"name":"Mirali Combat Blades","range":"(base)","firepower":"Assault Weapons","notes":[]}],"abilities":["Infiltrator","Scout","Teleport"]},
		mirali_vendetta: {"name":"Mirali Vendetta","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"3x Twin Lascannon","range":"45cm","firepower":"AT4+","notes":[]},{"name":"2x Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]}],"abilities":["Skimmer","Scout","Transport","May transport two infantry units."]},
		vulture_punisher: {"name":"Vulture Punisher","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]},{"name":"Twin Punisher Cannon","range":"30cm","firepower":"4x AP4+","notes":[]}],"abilities":["Skimmer","Scout"]},
		vulture_slick: {"name":"Vulture Slick","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]}],"abilities":["Skimmer","Scout"]},
		howitzer_weapon_platform: {"name":"Howitzer Weapon Platform","type":"LV","speed":"0cm","armour":"-","cc":"-","ff":"6+","weapons":[{"name":"Howitzer","range":"90cm","firepower":"1BP","notes":["Indirect Fire"]}],"abilities":[]},
		blitzen_aa_platform: {"name":"Blitzen AA Platform","type":"LV","speed":"0cm","armour":"-","cc":"-","ff":"6+","weapons":[{"name":"Blitzen","range":"60cm","firepower":"AP6+/AT5+/AA5+","notes":[]}],"abilities":[]},
		lightning_strike_fighter: {"name":"Lightning Strike Fighter","type":"AC","speed":"Fighter","armour":"6+","cc":"-","ff":"-","weapons":[{"name":"2x Underwing Rockets","range":"30cm","firepower":"AT4+","notes":["FxF"]},{"name":"Wingtip Lascannon","range":"30cm","firepower":"AT5+/AA5+","notes":["FxF"]}],"abilities":[]},
		heavy_marauder_bomber: {"name":"Heavy Marauder Bomber","type":"AC/WE","speed":"Bomber","armour":"5+","cc":"-","ff":"-","weapons":[{"name":"2x Twin Heavy Bolters","range":"15cm","firepower":"AA5+","notes":[]},{"name":"Bomb Racks","range":"15cm","firepower":"3BP","notes":["FxF"]},{"name":"Twin Lascannon","range":"45cm","firepower":"AT4+","notes":["FxF"]}],"abilities":["Damage Capacity 2","Critical Hit Effect: Destroyed"]},
		mirali_heavy_marauder_destroyer: {"name":"Mirali Heavy Marauder Destroyer","type":"AC/WE","speed":"Bomber","armour":"5+","cc":"-","ff":"-","weapons":[{"name":"3x Twin Autocannon","range":"30cm","firepower":"AP4+/AT5+","notes":["FxF"]},{"name":"Twin Heavy Bolters","range":"15cm","firepower":"AA5+","notes":[]},{"name":"2x Assault Cannon","range":"15cm","firepower":"AA5+","notes":["Rear Arc"]},{"name":"4x Underwing Rockets","range":"30cm","firepower":"AT4+","notes":["FxF"]}],"abilities":["Damage Capacity 2","Critical Hit Effect: Destroyed"]},
		gun_emplacement: {"name":"Gun Emplacement","type":"Terrain","speed":"n/a","armour":"n/a","cc":"n/a","ff":"n/a","weapons":[],"abilities":["Infantry: 4+ cover save","Vehicles: 5+ cover save","War Engines: no effect","Can hold one unit"]},
		bunker: {"name":"Bunker","type":"Terrain","speed":"n/a","armour":"n/a","cc":"n/a","ff":"n/a","weapons":[],"abilities":["Fortification","Infantry: 3+ cover save","Vehicles: dangerous","War Engines: impassable","Can hold three units"]},
		imperial_guard_supreme_commander: {"name":"Imperial Guard Supreme Commander","type":"INF","speed":"15cm","armour":"5+","cc":"4+","ff":"5+","weapons":[{"name":"Autocannon","range":"45cm","firepower":"AP5+/AT6+","notes":[]},{"name":"Power Weapon","range":"(bc)","firepower":"Assault Weapons","notes":["EA(+1)","MW"]}],"abilities":["Supreme Commander"]},
		imperial_guard_commander: {"name":"Imperial Guard Commander","type":"INF","speed":"15cm","armour":"6+","cc":"5+","ff":"5+","weapons":[{"name":"Autocannon","range":"45cm","firepower":"AP5+/AT6+","notes":[]}],"abilities":["Commander"]},
		imperial_guard_infantry: {"name":"Imperial Guard Infantry","type":"INF","speed":"15cm","armour":"-","cc":"6+","ff":"5+","weapons":[{"name":"Autocannon","range":"45cm","firepower":"AP5+/AT6+","notes":[]},{"name":"Lasguns","range":"(15cm)","firepower":"Small Arms","notes":[]}],"abilities":["One unit in every two has an Autocannon."]},
		valkyrie: {"name":"Valkyrie","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"Multilaser","range":"30cm","firepower":"AP5+/AT6+","notes":[]},{"name":"2x Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]},{"name":"2x Rocket Pod","range":"30cm","firepower":"1BP","notes":["Disrupt","Single Shot"]}],"abilities":["Scout","Skimmer","Transport","May transport two infantry units without Jump Packs or Mounted."]},
		fire_support: {"name":"Fire Support","type":"INF","speed":"15cm","armour":"-","cc":"5+","ff":"4+","weapons":[{"name":"Twin Heavy Stubber","range":"30cm","firepower":"AP5+","notes":[]},{"name":"Autocannon","range":"45cm","firepower":"AP5+/AT6+","notes":[]}],"abilities":[]},
		sniper: {"name":"Sniper","type":"INF","speed":"15cm","armour":"-","cc":"6+","ff":"5+","weapons":[{"name":"Sniper Rifles","range":"30cm","firepower":"AP5+","notes":[]}],"abilities":["Scout","Sniper"]},
		vulture: {"name":"Vulture","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]},{"name":"Twin Autocannon","range":"45cm","firepower":"AP4+/AT5+","notes":[]},{"name":"2x Hellstrike Missiles","range":"120cm","firepower":"AT2+","notes":["Single Shot"]}],"abilities":["Scout","Skimmer"]},
		thunderbolt_fighter: {"name":"Thunderbolt Fighter","type":"AC","speed":"Fighter-Bomber","armour":"6+","cc":"n/a","ff":"n/a","weapons":[{"name":"Multilaser","range":"30cm","firepower":"AP5+/AT6+/AA5+","notes":["FxF"]},{"name":"Underwing Rockets","range":"30cm","firepower":"AT4+","notes":["FxF"]},{"name":"Storm Bolters","range":"15cm","firepower":"AP4+/AA5+","notes":["FxF"]}],"abilities":[]}
	},
	nameToKey: {}
};

(function() {
	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeMiraliSkyraidersName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.miraliSkyraiders.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.miraliSkyraiders.nameToKey[compact] = key;
		}
	}

	for (var key in ArmyforgeUnitProfiles.miraliSkyraiders.profiles) {
		if (ArmyforgeUnitProfiles.miraliSkyraiders.profiles.hasOwnProperty(key)) {
			registerAlias(ArmyforgeUnitProfiles.miraliSkyraiders.profiles[key].name, key);
		}
	}

	var aliases = {
		'0-1 Air Cavalry RHQ':'imperial_guard_supreme_commander',
		'Air Cavalry RHQ':'imperial_guard_supreme_commander',
		'Mirali HQ Company':'imperial_guard_supreme_commander',
		'Air Cavalry Company':'imperial_guard_commander',
		'Supreme Commander':'imperial_guard_supreme_commander',
		'Imperial Guard Supreme Commander':'imperial_guard_supreme_commander',
		'Commander':'imperial_guard_commander',
		'Imperial Guard Commander':'imperial_guard_commander',
		'Infantry Units':'imperial_guard_infantry',
		'Imperial Guard Infantry units':'imperial_guard_infantry',
		'Imperial Guard Infantry':'imperial_guard_infantry',
		'Valkyries':'valkyrie',
		'Valkyrie':'valkyrie',
		'Fire Support Platoon':'fire_support',
		'2 Fire Support Units, 1 Valkyrie':'fire_support',
		'2 Fire Support Units, 1 Mirali Vendetta':'fire_support',
		'3 Fire Support Units, 1 Bunker':'fire_support',
		'Fire Support units':'fire_support',
		'Fire Support':'fire_support',
		'Infantry Platoon':'imperial_guard_infantry',
		'2 Infantry Units, 1 Valkyrie':'imperial_guard_infantry',
		'2 Infantry Units, 1 Mirali Vendetta':'imperial_guard_infantry',
		'3 Infantry Units, 1 Bunker':'imperial_guard_infantry',
		'Snipers':'sniper',
		'2 Sniper Units, 1 Valkyrie':'sniper',
		'2 Sniper Units, 1 Mirali Vendetta':'sniper',
		'3 Sniper Units, 1 Bunker':'sniper',
		'Sniper units':'sniper',
		'Sniper':'sniper',
		'Attached Vulture':'vulture',
		'Attached Vulture (Vulture)':'vulture',
		'Attached Vulture (Vulture Punisher)':'vulture_punisher',
		'1 Vulture':'vulture',
		'Vulture':'vulture',
		'Vultures':'vulture',
		'1 Vulture Punisher':'vulture_punisher',
		'Vulture Punisher':'vulture_punisher',
		'Vulture Punishers':'vulture_punisher',
		'Vendettas':'mirali_vendetta',
		'Mirali Vendettas':'mirali_vendetta',
		'Mirali Vendetta':'mirali_vendetta',
		'Mirali Vendetta Upgrade taken':'mirali_vendetta',
		'Vulture Squadron':'vulture',
		'Vulture Punisher Squadron':'vulture_punisher',
		'Regimental Artillery Battery':'howitzer_weapon_platform',
		'Howitzer Weapons Platforms':'howitzer_weapon_platform',
		'Howitzer Weapon Platform':'howitzer_weapon_platform',
		'Gun Emplacements':'gun_emplacement',
		'Gun Emplacement':'gun_emplacement',
		'Regimental Anti-Air Battery':'blitzen_aa_platform',
		'Blitzen Weapons Platforms':'blitzen_aa_platform',
		'Blitzen AA Platform':'blitzen_aa_platform',
		'Firebase Defense Company':'imperial_guard_commander',
		'Bunkers':'bunker',
		'Bunker':'bunker',
		'Mirali Trackers Company':'mirali_trackers',
		'Mirali Trackers units':'mirali_trackers',
		'Mirali Trackers':'mirali_trackers',
		'Vulture Slick Squadron':'vulture_slick',
		'Vulture Slicks':'vulture_slick',
		'Vulture Slick':'vulture_slick',
		'Thunderbolt Flight':'thunderbolt_fighter',
		'Thunderbolt Fighters':'thunderbolt_fighter',
		'Thunderbolt Fighter':'thunderbolt_fighter',
		'Lightning Strike Flight':'lightning_strike_fighter',
		'Lightning Strike Fighters':'lightning_strike_fighter',
		'Lightning Strike Fighter':'lightning_strike_fighter',
		'Marauder':'heavy_marauder_bomber',
		'Marauder Heavy Bomber':'heavy_marauder_bomber',
		'Heavy Marauder Bomber':'heavy_marauder_bomber',
		'Marauder Destroyer':'mirali_heavy_marauder_destroyer',
		'Mirali Heavy Marauder Destroyer':'mirali_heavy_marauder_destroyer'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, aliases[alias]);
		}
	}
})();

ArmyforgeUnitProfiles.findMiraliSkyraidersProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.miraliSkyraiders.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeMiraliSkyraidersName(displayName);
	var key = ArmyforgeUnitProfiles.miraliSkyraiders.nameToKey[normalized] || ArmyforgeUnitProfiles.miraliSkyraiders.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.miraliSkyraiders.profiles[key] || null;
};
