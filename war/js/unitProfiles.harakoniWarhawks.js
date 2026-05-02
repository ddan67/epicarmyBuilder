// Source: war/source-json/harakoni-warhawks.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeHarakoniWarhawksName = ArmyforgeUnitProfiles.normalizeHarakoniWarhawksName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/\bstormtroopers\b/g, 'storm troopers')
		.replace(/\btech-priest\b/g, 'tech priest')
		.replace(/\bgrav glider\b/g, 'grav glider')
		.replace(/\blinebreaker relief coloumn\b/g, 'linebreaker relief column')
		.replace(/\bmaurader\b/g, 'marauder')
		.replace(/\blunar cruiser\b/g, 'lunar class cruiser')
		.replace(/\bemperor battleship\b/g, 'emperor class battleship')
		.replace(/\blightning strikes\b/g, 'lightning strike fighters')
		.replace(/\bthunderbolts\b/g, 'thunderbolt fighter')
		.replace(/\bvendettas\b/g, 'vendetta')
		.replace(/\bvultures\b/g, 'vulture')
		.replace(/\bpunishers\b/g, 'vulture punisher')
		.replace(/\bconquerors\b/g, 'conqueror')
		.replace(/\bchimera transports\b/g, 'chimera')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/\b(add|replace|with|for|free|points?|point|each|must|minimum|required|up|to|the|a|an|of|one|two|three|four|six|seven|formation|formations|company|companies|squadron|battery|teams|team|units|unit|additional|more|per|army|may|have|take|then|or|and)\b/g, ' ')
		.replace(/\b(harakoni warhawks imperial guard army list|harakoni warhawks|harakoni|imperial guard)\b/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.harakoniWarhawks = {
	armyIds: ['IG_harakoni_NETEA_fixed'],
	profiles: {
		warhawks: {"name":"Warhawks","type":"INF","speed":"15cm","armour":"5+","cc":"5+","ff":"5+","weapons":[{"name":"Lascarbines","range":"(15cm)","firepower":"Small Arms","notes":[]},{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]}],"abilities":["Planetfall","Skyborne: uses the Skitarii Hypaspists profile"]},
		harakoni_commander: {"name":"Harakoni Commander","type":"INF","speed":"15cm","armour":"5+","cc":"5+","ff":"5+","weapons":[{"name":"Lascarbines","range":"(15cm)","firepower":"Small Arms","notes":[]},{"name":"Autocannon","range":"45cm","firepower":"AP5+/AT6+","notes":[]}],"abilities":["Commander","Planetfall","Skyborne 5+ Armour Save"]},
		tech_priest: {"name":"Tech Priest","type":"INF","speed":"15cm","armour":"3+","cc":"4+","ff":"5+","weapons":[{"name":"Augmentations","range":"(contact)","firepower":"Assault Weapons","notes":["EA(+1)"]},{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]}],"abilities":["Leader","Commander","Invulnerable Save","Planetfall"]},
		sappers: {"name":"Sappers","type":"INF","speed":"15cm","armour":"5+","cc":"5+","ff":"5+","weapons":[{"name":"Melta Bombs","range":"(contact)","firepower":"Assault Weapons","notes":["EA(+1)","MW"]},{"name":"Heavy Flamer","range":"(15cm)","firepower":"Small Arms","notes":["Ignore Cover"]},{"name":"Heavy Flamer","range":"15cm","firepower":"AP4+","notes":["Ignore Cover"]}],"abilities":["Walker","Planetfall","Skyborne 5+ Armour Save"]},
		harakoni_supreme_commander: {"name":"Harakoni Supreme Commander","type":"INF","speed":"15cm","armour":"5+","cc":"4+","ff":"5+","weapons":[{"name":"Lascarbines","range":"(15cm)","firepower":"Small Arms","notes":[]},{"name":"Autocannon","range":"45cm","firepower":"AP5+/AT6+","notes":[]},{"name":"Power Weapon","range":"(contact)","firepower":"Assault Weapons","notes":["EA(+1)","MW"]}],"abilities":["Supreme Commander","Planetfall","Skyborne 5+ Armour Save"]},
		harakoni_fire_support: {"name":"Harakoni Fire Support","type":"INF","speed":"15cm","armour":"5+","cc":"6+","ff":"4+","weapons":[{"name":"2x Lascannons","range":"45cm","firepower":"AP5+","notes":[]}],"abilities":["Planetfall","Skyborne 5+ Armour Save","Skyborne replaces both Autocannons with Lascannons"]},
		storm_troopers: {"name":"Storm Troopers","type":"INF","speed":"15cm","armour":"5+","cc":"5+","ff":"4+","weapons":[{"name":"Hellguns","range":"(15cm)","firepower":"Small Arms","notes":[]},{"name":"Plasma Guns","range":"15cm","firepower":"AP5+/AT5+","notes":[]}],"abilities":["Scout","Planetfall"]},
		forward_observer: {"name":"Forward Observer","type":"CH","speed":"n/a","armour":"n/a","cc":"n/a","ff":"n/a","weapons":[{"name":"Basilisk Company Vox-Link","range":"60cm","firepower":"6BP","notes":["Slow Firing"]}],"abilities":[]},
		sentinel: {"name":"Sentinel","type":"LV","speed":"20cm","armour":"6+","cc":"6+","ff":"5+","weapons":[{"name":"Multilaser","range":"30cm","firepower":"AP5+/AT6+","notes":[]}],"abilities":["Scout","Walker","Planetfall"]},
		support_sentinel: {"name":"Support Sentinel","type":"LV","speed":"20cm","armour":"6+","cc":"6+","ff":"5+","weapons":[{"name":"Support Rocket Launcher","range":"30cm","firepower":"1BP","notes":["Disrupt","Indirect Fire"]}],"abilities":["Scout","Walker","Planetfall"]},
		valkyrie: {"name":"Valkyrie","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"2x Rocket Pod","range":"30cm","firepower":"1BP","notes":["Disrupt","One-Shot"]},{"name":"2x Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]},{"name":"Multilaser","range":"30cm","firepower":"AP5+/AT6+","notes":[]}],"abilities":["Skimmer","Scout","Self-Planetfall","Transport","May carry 2 Infantry, or 1 Light Vehicle"]},
		vulture: {"name":"Vulture","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]},{"name":"Twin Autocannon","range":"45cm","firepower":"AP4+/AT5+","notes":[]},{"name":"2x Hellstrike Missiles","range":"120cm","firepower":"AT2+","notes":["One-Shot"]}],"abilities":["Skimmer","Scout","Self-Planetfall"]},
		vulture_punisher: {"name":"Vulture Punisher","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]},{"name":"Twin Punisher Cannons","range":"30cm","firepower":"4x AP4+","notes":[]}],"abilities":["Skimmer","Scout","Self-Planetfall"]},
		vendetta: {"name":"Vendetta","type":"AV","speed":"35cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"3x Twin Lascannons","range":"45cm","firepower":"AT4+","notes":[]}],"abilities":["Skimmer","Scout","Self-Planetfall","Transport","May transport two infantry units"]},
		grav_glider: {"name":"Grav-Glider","type":"WE/AC","speed":"Bomber","armour":"4+","cc":"-","ff":"6+","weapons":[{"name":"2x Rocket Pod","range":"30cm","firepower":"1BP","notes":["Disrupt","One-Shot"]}],"abilities":["Damage Capacity 1","Reinforced Armor","Expendable","Transport","May carry 12 of the following units: Warhawks, Commanders, Supreme Commanders, Stormtroopers, Forward Observer, Fire Support, Tech-Priest, Sappers, all Sentinels. All Light Vehicles take up 2 spaces each."]},
		imperial_guard_infantry: {"name":"Imperial Guard Infantry","type":"INF","speed":"15cm","armour":"n/a","cc":"6+","ff":"5+","weapons":[{"name":"Lasguns","range":"(15cm)","firepower":"Small Arms","notes":[]},{"name":"Autocannon","range":"45cm","firepower":"AP5+/AT6+","notes":[]}],"abilities":[]},
		chimera: {"name":"Chimera","type":"AV","speed":"30cm","armour":"5+","cc":"6+","ff":"5+","weapons":[{"name":"Heavy Bolter","range":"30cm","firepower":"AP5+","notes":[]},{"name":"Multilaser","range":"30cm","firepower":"AP5+/AT6+","notes":[]}],"abilities":["Transport","May carry up to 2 Imperial Guard Infantry"]},
		lightning_interceptor: {"name":"Lightning Interceptor","type":"AC","speed":"Fighter","armour":"6+","cc":"n/a","ff":"n/a","weapons":[{"name":"Lightning Autocannon","range":"30cm","firepower":"AA5+","notes":["FxF"]},{"name":"Wingtip Lascannons","range":"30cm","firepower":"AT6+/AA5+","notes":["FxF"]}],"abilities":[]},
		lightning_strike_fighter: {"name":"Lightning Strike Fighter","type":"AC","speed":"Fighter","armour":"6+","cc":"n/a","ff":"n/a","weapons":[{"name":"Wingtip Lascannons","range":"30cm","firepower":"AT6+/AA5+","notes":["FxF"]},{"name":"2x Underwing Rockets","range":"30cm","firepower":"AT4+","notes":["FxF"]}],"abilities":[]},
		thunderbolt_fighter: {"name":"Thunderbolt Fighter","type":"AC","speed":"Fighter / Bomber","armour":"6+","cc":"n/a","ff":"n/a","weapons":[{"name":"Stormbolters","range":"15cm","firepower":"AP4+/AA5+","notes":["FxF"]},{"name":"Multilaser","range":"30cm","firepower":"AP5+/AT6+/AA5+","notes":["FxF"]},{"name":"Underwing Rockets","range":"30cm","firepower":"AT4+","notes":["FxF"]}],"abilities":[]},
		marauder_heavy_bomber: {"name":"Marauder Heavy Bomber","type":"WE/AC","speed":"Bomber","armour":"5+","cc":"n/a","ff":"n/a","weapons":[{"name":"Bomb Racks","range":"15cm","firepower":"3BP","notes":["FxF"]},{"name":"Twin Lascannon","range":"45cm","firepower":"AT4+","notes":["FxF"]},{"name":"2x Twin Heavy Bolter","range":"15cm","firepower":"AA5+","notes":[]}],"abilities":["Damage Capacity 2","Critical Hit Effect: Engines seriously damaged, aircraft crashes","Transport (1 formation consisting only of Infantry or Light Vehicles) while using the Marauder Drop playtest rule","While transporting units, Bomb Racks may not be used"]},
		marauder_destroyer: {"name":"Marauder Destroyer","type":"WE/AC","speed":"Bomber","armour":"5+","cc":"n/a","ff":"n/a","weapons":[{"name":"3x Twin Autocannons","range":"30cm","firepower":"AP4+/AT5+","notes":["FxF"]},{"name":"Twin Heavy Bolters","range":"15cm","firepower":"AA5+","notes":[]},{"name":"2x Assault Cannons","range":"15cm","firepower":"AA5+","notes":["Rear Arc"]},{"name":"4x Hellstrike Missiles","range":"45cm","firepower":"AT4+","notes":["FxF"]}],"abilities":["Damage Capacity 2","Critical Hit Effect: Engines seriously damaged, aircraft crashes"]},
		marauder_spectre: {"name":"Marauder Spectre","type":"AC/WE","speed":"Bomber","armour":"5+","cc":"n/a","ff":"n/a","weapons":[{"name":"Spinal Volcano Cannon","range":"45cm","firepower":"AT2+","notes":["TK(D3)"]},{"name":"2x Twin Heavy Bolter","range":"15cm","firepower":"AA5+","notes":[]}],"abilities":["Damage Capacity 2","Critical Hit Effect: Engines seriously damaged, aircraft crashes"]},
		lunar_class_cruiser: {"name":"Lunar Class Cruiser","type":"Spacecraft","speed":"n/a","armour":"n/a","cc":"n/a","ff":"n/a","weapons":[{"name":"Orbital Bombardment","range":"n/a","firepower":"3BP","notes":["MW"]},{"name":"Pin-Point Attack","range":"n/a","firepower":"MW2+","notes":["TK(D3)"]}],"abilities":[]},
		emperor_class_battleship: {"name":"Emperor Class Battleship","type":"Spacecraft","speed":"n/a","armour":"n/a","cc":"n/a","ff":"n/a","weapons":[{"name":"Orbital Bombardment","range":"n/a","firepower":"8BP","notes":["MW"]}],"abilities":["Slow and Steady-ish (may not be used on turn one of a battle unless the scenario specifically says otherwise)"]},
		onero_overflight: {"name":"Onero Overflight","type":"Spacecraft","speed":"n/a","armour":"n/a","cc":"n/a","ff":"n/a","weapons":[{"name":"2x Pin-Point Attack","range":"n/a","firepower":"4x AT4+","notes":[]}],"abilities":["Transport","May carry up to 20 Skimmers and any troops transported on them, as well as any number of units with GravChutes"]},
		leman_russ_conqueror: {"name":"Leman Russ Conqueror","type":"AV","speed":"30cm","armour":"4+","cc":"6+","ff":"5+","weapons":[{"name":"Conqueror Cannon","range":"45cm","firepower":"AP5+/AT5+","notes":[]},{"name":"Lascannon","range":"45cm","firepower":"AT5+","notes":[]}],"abilities":["Reinforced Armour"]}
	},
	nameToKey: {}
};

(function() {
	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeHarakoniWarhawksName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.harakoniWarhawks.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.harakoniWarhawks.nameToKey[compact] = key;
		}
	}

	for (var key in ArmyforgeUnitProfiles.harakoniWarhawks.profiles) {
		if (ArmyforgeUnitProfiles.harakoniWarhawks.profiles.hasOwnProperty(key)) {
			registerAlias(ArmyforgeUnitProfiles.harakoniWarhawks.profiles[key].name, key);
		}
	}

	var aliases = {
		'Harakoni Strike Company':'harakoni_commander',
		'Strike Company':'harakoni_commander',
		'Airmobile Company':'harakoni_commander',
		'Storm Company':'harakoni_commander',
		'Commander':'harakoni_commander',
		'Harakoni Commander':'harakoni_commander',
		'Warhawks':'warhawks',
		'Stormtroopers':'storm_troopers',
		'Storm Troopers':'storm_troopers',
		'Valkyries':'valkyrie',
		'Valkyrie':'valkyrie',
		'Valkyrie Transports':'valkyrie',
		'0-1 Regimental Command':'harakoni_supreme_commander',
		'Regimental Command':'harakoni_supreme_commander',
		'Regimental Commander':'harakoni_supreme_commander',
		'Supreme Commander':'harakoni_supreme_commander',
		'Harakoni Supreme Commander':'harakoni_supreme_commander',
		'Fire Support':'harakoni_fire_support',
		'Fire Support teams':'harakoni_fire_support',
		'4 Fire Support Teams':'harakoni_fire_support',
		'Harakoni Fire Support':'harakoni_fire_support',
		'Warhawk Infantry':'warhawks',
		'4 Warhawks':'warhawks',
		'Harakoni Veterans':'storm_troopers',
		'2 Stormtroopers':'storm_troopers',
		'Artillery Liaison Officer':'forward_observer',
		'Forward Observer':'forward_observer',
		'Grav-Glider':'grav_glider',
		'Grav Glider':'grav_glider',
		'2 Vultures':'vulture',
		'Vultures':'vulture',
		'Vulture':'vulture',
		'Vulture Gunship':'vulture',
		'Punishers':'vulture_punisher',
		'2 Vulture Punishers':'vulture_punisher',
		'Vulture Punishers':'vulture_punisher',
		'Vulture Punisher':'vulture_punisher',
		'Reconnaissance Squadron':'sentinel',
		'6 Sentinels':'sentinel',
		'9 Sentinels':'sentinel',
		'Sentinels':'sentinel',
		'Sentinel':'sentinel',
		'Demolition Specialists':'sappers',
		'Sappers':'sappers',
		'Tech Priest':'tech_priest',
		'Tech-Priest':'tech_priest',
		'4 Vendetta Gunships':'vendetta',
		'Vendettas':'vendetta',
		'Vendetta':'vendetta',
		'Vendetta Gunship':'vendetta',
		'Harakoni Light Artillery Squadron':'support_sentinel',
		'Light Artillery Battery':'support_sentinel',
		'Support Sentinels':'support_sentinel',
		'Support Sentinel':'support_sentinel',
		'0-1 Spacecraft - Onero Overflight':'onero_overflight',
		'Onero Overflight':'onero_overflight',
		'0-1 Spacecraft - Lunar Cruiser':'lunar_class_cruiser',
		'Lunar Cruiser':'lunar_class_cruiser',
		'Lunar cruiser':'lunar_class_cruiser',
		'Lunar Class Cruiser':'lunar_class_cruiser',
		'0-1 Spacecraft - Emperor Battleship':'emperor_class_battleship',
		'Emperor Battleship':'emperor_class_battleship',
		'Emperor Class Battleship':'emperor_class_battleship',
		'Lightning Interceptors':'lightning_interceptor',
		'Lightning Interceptor':'lightning_interceptor',
		'Thunderbolts':'thunderbolt_fighter',
		'Thunderbolt Fighter':'thunderbolt_fighter',
		'Lightning Strike Fighters':'lightning_strike_fighter',
		'Lightning Strike Fighter':'lightning_strike_fighter',
		'Marauder Heavy Bomber':'marauder_heavy_bomber',
		'Heavy Bomber':'marauder_heavy_bomber',
		'Marauder Destroyer':'marauder_destroyer',
		'Marauder Spectre':'marauder_spectre',
		'Maurader Spectre':'marauder_spectre',
		'Linebreaker Relief Column':'imperial_guard_infantry',
		'Linebreaker Relief Coloumn':'imperial_guard_infantry',
		'Linebreaker Formation':'imperial_guard_infantry',
		'Imperial Infantry':'imperial_guard_infantry',
		'Imperial Guard Infantry':'imperial_guard_infantry',
		'Chimera transports':'chimera',
		'Chimeras':'chimera',
		'Chimera':'chimera',
		'Conquerors':'leman_russ_conqueror',
		'Conqueror':'leman_russ_conqueror',
		'Leman Russ Conqueror':'leman_russ_conqueror'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, aliases[alias]);
		}
	}
})();

ArmyforgeUnitProfiles.findHarakoniWarhawksProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.harakoniWarhawks.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeHarakoniWarhawksName(displayName);
	var key = ArmyforgeUnitProfiles.harakoniWarhawks.nameToKey[normalized] || ArmyforgeUnitProfiles.harakoniWarhawks.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.harakoniWarhawks.profiles[key] || null;
};
