// Source: war/source-json/dark-angels.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.darkAngels = {
	armyIds: ['SM_DarkAngels_NETEA'],
	profiles: {
		grand_master:{name:'Grand Master',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Supreme Commander','Invulnerable Save']},
		dark_angels_captain:{name:'Dark Angels Captain',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Commander','Leader','Invulnerable Save','Teleport Homer']},
		interrogator_chaplain:{name:'Interrogator Chaplain',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Inspiring','Leader','Invulnerable Save']},
		librarian:{name:'Librarian',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Smite',range:'(15cm)',firepower:'Small Arms',notes:['EA(+1)','MW']},{name:'Power Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Leader','Invulnerable Save']},
		tactical_marines:{name:'Tactical Marines',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Missile Launcher',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		sniper_scouts:{name:'Sniper Scouts',type:'INF',speed:'15cm',armour:'5+',cc:'4+',ff:'5+',weapons:[{name:'Sniper Rifles',range:'30cm',firepower:'AP5+',notes:['Sniper']}],abilities:['Scout','Infiltrators']},
		dark_angels_assault_marines:{name:'Dark Angels Assault Marines',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Plasma Pistols',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Jump Packs']},
		dark_angels_devastators:{name:'Dark Angels Devastators',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'2 x Plasma Cannons',range:'30cm',firepower:'AP5+/AT5+',notes:[]}],abilities:[]},
		deathwing_terminators:{name:'Deathwing Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'2 x Plasma Cannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]},{name:'Power Fists',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Deathwing','Teleport','Reinforced Armour','Thick Rear Armour']},
		deathwing_cyclone_terminators:{name:'Deathwing Cyclone Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'3+',weapons:[{name:'Cyclone Missile Launchers',range:'45cm',firepower:'3 x AP5+/AT6+',notes:[]},{name:'Power Fists',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Deathwing','Teleport','Reinforced Armour','Thick Rear Armour']},
		deathwing_knights:{name:'Deathwing Knights',type:'INF',speed:'15cm',armour:'4+',cc:'2+',ff:'-',weapons:[{name:'Maces, Thunderhammers & Storm Shields',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Deathwing','Teleport','Reinforced Armour','Thick Rear Armour','Invulnerable Save']},
		ravenwing_black_knights:{name:'Ravenwing Black Knights',type:'INF',speed:'35cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Plasma Talons',range:'15cm',firepower:'AP5+/AT5+',notes:[]},{name:'Corvus Hammers',range:'(base contact)',firepower:'Assault Weapons',notes:['MW']}],abilities:['Invulnerable Save','Mounted','Scout','Commander']},
		ravenwing_assault_bikes:{name:'Ravenwing Assault Bikes',type:'INF',speed:'35cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Twin Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Invulnerable Save','Mounted']},
		ravenwing_attack_bike:{name:'Ravenwing Attack Bike',type:'LV',speed:'35cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Invulnerable Save','Teleport Homer']},
		ravenwing_land_speeder:{name:'Ravenwing Land Speeder',type:'LV',speed:'35cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Multi-Melta',range:'15cm',firepower:'MW5+',notes:['MW']},{name:'Multi-Melta',range:'(15cm)',firepower:'Small Arms',notes:['MW']}],abilities:['Invulnerable Save','Scout','Teleport Homer']},
		ravenwing_land_speeder_tornado:{name:'Ravenwing Land Speeder Tornado',type:'LV',speed:'35cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Invulnerable Save','Scout','Teleport Homer']},
		ravenwing_land_speeder_venegance:{name:'Ravenwing Land Speeder Venegance',type:'LV',speed:'30cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Plasma Storm Battery',range:'30cm',firepower:'2 x AP5+/AT5+',notes:[]},{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Invulnerable Save','Scout','Teleport Homer']},
		mortis_dreadnought:{name:'Mortis Dreadnought',type:'AV',speed:'15cm',armour:'3+',cc:'5+',ff:'4+',weapons:[{name:'2 x Mortis Twin Autocannons',range:'45cm',firepower:'AP4+/AT5+/AA6+',notes:[]}],abilities:[]},
		deathwing_dreadnought:{name:'Deathwing Dreadnought',type:'AV',speed:'15cm',armour:'3+',cc:'4+',ff:'4+',weapons:[{name:'Plasma Cannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]},{name:'Power Fist',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Deathwing']},
		rhino:{name:'Rhino',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Storm Bolter',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Transport','May transport 2 Tacticals or Devastators.']},
		dark_angels_razorback:{name:'Dark Angels Razorback',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Lascannon',range:'45cm',firepower:'AT5+',notes:[]},{name:'Twin Plasma Gun',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Transport','May transport 1 Tacticals, Devastators, or Scouts.']},
		predator_destructor:{name:'Predator Destructor',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'Autocannon',range:'45cm',firepower:'AP5+/AT6+',notes:[]},{name:'2 x Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:[]},
		whirlwind:{name:'Whirlwind',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Whirlwind Missile Launcher',range:'45cm',firepower:'1BP',notes:[]}],abilities:['Indirect Fire']},
		hunter:{name:'Hunter',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Hunter-Killer',range:'60cm',firepower:'AT4+/AA4+',notes:[]}],abilities:[]},
		dark_angels_stalker:{name:'Dark Angels Stalker',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Dual Icarus Stormcannons',range:'45cm',firepower:'2 x AP5+/AT5+/AA5+',notes:[]}],abilities:[]},
		vindicator:{name:'Vindicator',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Demolisher Cannon',range:'30cm',firepower:'AP3+/AT4+',notes:['IC']}],abilities:['Walker']},
		land_raider:{name:'Land Raider',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]},{name:'2 x Twin Lascannons',range:'45cm',firepower:'AT4+',notes:[]}],abilities:['Reinforced Armour','Thick Rear Armour','Transport','May transport 2 Tacticals.']},
		deathwing_land_raider:{name:'Deathwing Land Raider',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]},{name:'2 x Twin Lascannons',range:'45cm',firepower:'AT4+',notes:[]}],abilities:['Deathwing','Invulnerable Save','Reinforced Armour','Thick Rear Armour','Transport','May transport 1 Deathwing Terminator.']},
		land_raider_ares:{name:'Land Raider Ares',type:'AV',speed:'25cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Demolisher Cannon',range:'30cm',firepower:'AP3+/AT4+',notes:['IC']},{name:'Twin Assault Cannon',range:'30cm',firepower:'AP4+/AT4+',notes:[]},{name:'2 x Heavy Flamers',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'2 x Heavy Flamers',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Reinforced Armour','Thick Rear Armour','Walker']},
		deimos_predator_executioner:{name:'Deimos Predator Executioner',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Plasma Destroyer',range:'60cm',firepower:'MW4+',notes:['MW']},{name:'2 x Lascannon',range:'45cm',firepower:'AT5+',notes:[]}],abilities:[]},
		deimos_vindicator_laser_destroyer:{name:'Deimos Vindicator Laser Destroyer',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Laser Destroyer',range:'60cm',firepower:'AT4+',notes:['Lance']}],abilities:[]},
		glaive:{name:'Glaive',type:'WE',speed:'15cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'Volkite Carronade',range:'45cm',firepower:'4 x AP3+/AT4+',notes:['IC','D']},{name:'Quad Lascannon',range:'45cm',firepower:'2 x AT4+',notes:['Left Arc']},{name:'Quad Lascannon',range:'45cm',firepower:'2 x AT4+',notes:['Right Arc']},{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP4+',notes:['FxF']}],abilities:['Damage Capacity 4','Reinforced Armour','Critical Hit Effect: The Glaive is destroyed. All units within 5cm suffer a hit on a 6+.']},
		ravenwing_nephilim_interceptor:{name:'Ravenwing Nephilim Interceptor',type:'AC',speed:'Fighter',armour:'6+',cc:'n/a',ff:'n/a',weapons:[{name:'Twin Heavy Bolters',range:'15cm',firepower:'AP4+/AA5+',notes:['FxF']},{name:'Twin Lascannon',range:'30cm',firepower:'AT4+/AA4+',notes:['FxF']},{name:'Blacksword Missiles',range:'45cm',firepower:'AP5+/AA5+',notes:['FxF']}],abilities:['Invulnerable Save']},
		ravenwing_dark_talon:{name:'Ravenwing Dark Talon',type:'AC',speed:'Fighter-Bomber',armour:'6+',cc:'n/a',ff:'n/a',weapons:[{name:'Rift Cannon',range:'15cm',firepower:'MW4+',notes:['MW','FxF']},{name:'Hurricane Bolters',range:'15cm',firepower:'AP5+/AA5+',notes:['FxF']},{name:'Stasis Bomb',range:'15cm',firepower:'1BP',notes:['IC','D','FxF']}],abilities:['Invulnerable Save']},
		dark_angels_thunderhawk_transporter:{name:'Dark Angels Thunderhawk Transporter',type:'AC/WE',speed:'Bomber',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'2 x Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Left Arc']},{name:'2 x Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Right Arc']}],abilities:['Damage Capacity 2','Planetfall','Reinforced Armour','Transport','May carry up to two of the following: Hunters, Stalkers, Predators, Razorbacks, Rhinos and Vindicators, or one Land Raider of any type. In addition it may transport infantry equal to the transport capacity of the vehicle(s) it carries.','The entire Thunderhawk Transporter formation is counted as one War Engine for both the War Engine transport rule (e.g. one transported formation can be split between multiple aircraft within one Thunderhawk Transporter formation) and for the allocation of hits.','Critical Hit Effect: The Thunderhawk Transporter\'s control surfaces are damaged. The Thunderhawk Transporter crashes to the ground, killing all on board.']},
		hunter_class_destroyer:{name:'Hunter Class Destroyer',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'1BP',notes:[]}],abilities:['Transport: May transport 4 Terminators and one Thunderhawk Transporter along with its cargo.']},
		strike_cruiser:{name:'Strike Cruiser',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'5BP',notes:['MW']}],abilities:['Transport: May transport 20 infantry units or Dreadnoughts; plus 20 armoured vehicle units (except Dreadnoughts); plus six Thunderhawk Transporters and enough Drop Pods to transport any other units being carried.']},
		drop_pods:{name:'Drop Pods',type:'Special',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Deathwind',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Planetfall','Transport: May transport one formation of only the following units: Tacticals, Devastators, Dreadnoughts.','After the Drop Pod lands, it attacks all enemy units within 15cm. Then any troops carried in the drop pod must disembark within 5cm of the drop pod or within 5cm of another unit from the same formation that has already landed, so long as all units are placed within 15cm of the drop pod.','Drop pod models should be removed from the board once the formation they transport has disembarked.']}
	},
	nameToKey: {
		'grand master':'grand_master',
		'dark angels captain':'dark_angels_captain',
		'captain':'dark_angels_captain',
		'interrogator chaplain':'interrogator_chaplain',
		'interrogator':'interrogator_chaplain',
		'librarian':'librarian',
		'tacticals':'tactical_marines',
		'tactical marines':'tactical_marines',
		'tacticals plus transport':'tactical_marines',
		'6 tacticals':'tactical_marines',
		'scouts':'sniper_scouts',
		'scout infiltrators':'sniper_scouts',
		'sniper scouts':'sniper_scouts',
		'space marine sniper scouts':'sniper_scouts',
		'assaults':'dark_angels_assault_marines',
		'dark angels assault marines':'dark_angels_assault_marines',
		'devastators':'dark_angels_devastators',
		'dark angels devastators':'dark_angels_devastators',
		'predators':'predator_destructor',
		'predator destructor':'predator_destructor',
		'predator destructors':'predator_destructor',
		'siege breachers':'land_raider_ares',
		'land raider ares':'land_raider_ares',
		'whirlwinds':'whirlwind',
		'whirlwind':'whirlwind',
		'deathwing terminators':'deathwing_terminators',
		'deathwing overwatch':'deathwing_cyclone_terminators',
		'deathwing cyclone terminators':'deathwing_cyclone_terminators',
		'deathwing knights':'deathwing_knights',
		'deathwing dreadnoughts':'deathwing_dreadnought',
		'deathwing dreadnought':'deathwing_dreadnought',
		'deathwing land raiders':'deathwing_land_raider',
		'deathwing land raider':'deathwing_land_raider',
		'ravenwing attack':'ravenwing_black_knights',
		'ravenwing black knights':'ravenwing_black_knights',
		'ravenwing assault bikes':'ravenwing_assault_bikes',
		'ravenwing attack bike':'ravenwing_attack_bike',
		'ravenwing land speeders':'ravenwing_land_speeder',
		'ravenwing land speeder':'ravenwing_land_speeder',
		'ravenwing support':'ravenwing_land_speeder_tornado',
		'ravenwing land speeder tornado':'ravenwing_land_speeder_tornado',
		'5 ravenwing tornado':'ravenwing_land_speeder_tornado',
		'ravenwing land speeder venegance':'ravenwing_land_speeder_venegance',
		'ravenwing land speeder vengeance':'ravenwing_land_speeder_venegance',
		'5 ravenwing venegance':'ravenwing_land_speeder_venegance',
		'5 ravenwing vengeance':'ravenwing_land_speeder_venegance',
		'relic deimos':'deimos_predator_executioner',
		'deimos predator executioner':'deimos_predator_executioner',
		'deimos predator executioners':'deimos_predator_executioner',
		'predator executioners':'deimos_predator_executioner',
		'deimos vindicator laser destroyer':'deimos_vindicator_laser_destroyer',
		'deimos vindicator laser destroyers':'deimos_vindicator_laser_destroyer',
		'relic glaive':'glaive',
		'glaive':'glaive',
		'glaives':'glaive',
		'ravenwing nephilim':'ravenwing_nephilim_interceptor',
		'ravenwing nephilim interceptors':'ravenwing_nephilim_interceptor',
		'ravenwing nephilim interceptor':'ravenwing_nephilim_interceptor',
		'ravenwing dark talon':'ravenwing_dark_talon',
		'ravenwing dark talons':'ravenwing_dark_talon',
		'thunderhawk transporter':'dark_angels_thunderhawk_transporter',
		'dark angels thunderhawk transporter':'dark_angels_thunderhawk_transporter',
		'0 1 swordwing':'hunter_class_destroyer',
		'swordwing':'hunter_class_destroyer',
		'hunter class destroyer':'hunter_class_destroyer',
		'strike cruiser':'strike_cruiser',
		'drop pods':'drop_pods',
		'drop pod':'drop_pods',
		'razorbacks':'dark_angels_razorback',
		'razorback':'dark_angels_razorback',
		'dark angels razorback':'dark_angels_razorback',
		'mortis':'mortis_dreadnought',
		'2 mortis dreadnoughts':'mortis_dreadnought',
		'mortis dreadnoughts':'mortis_dreadnought',
		'vindicators':'vindicator',
		'3 vindicators':'vindicator',
		'vindicator':'vindicator',
		'stalker':'dark_angels_stalker',
		'stalkers':'dark_angels_stalker',
		'2 dark angels stalkers':'dark_angels_stalker',
		'dark angels stalkers':'dark_angels_stalker',
		'hunter':'hunter',
		'hunters':'hunter',
		'2 hunters':'hunter',
		'deathwing transport':'deathwing_land_raider',
		'4 deathwing land raiders':'deathwing_land_raider',
		'attack bikes':'ravenwing_attack_bike',
		'venegance':'ravenwing_land_speeder_venegance',
		'vengeance':'ravenwing_land_speeder_venegance',
		'transporter':'dark_angels_thunderhawk_transporter',
		'rhino':'rhino',
		'rhinos':'rhino',
		'land raiders':'land_raider',
		'land raider':'land_raider'
	}
};

ArmyforgeUnitProfiles.normalizeDarkAngelsName = function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.replace(/[’']/g, '')
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\b(one|two|three|four|five|six)\b/g, '')
		.replace(/\bplus transport\b/g, '')
		.replace(/\b(units|unit|detachment|detachments|formation|formations|character|characters|interceptors)\b/g, '')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.findDarkAngelsProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.darkAngels.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeDarkAngelsName(displayName);
	var key = ArmyforgeUnitProfiles.darkAngels.nameToKey[normalized];
	if (key && ArmyforgeUnitProfiles.darkAngels.profiles[key]) {
		return ArmyforgeUnitProfiles.darkAngels.profiles[key];
	}
	if (ArmyforgeUnitProfiles.findSmCodexAstartesProfileByName) {
		return ArmyforgeUnitProfiles.findSmCodexAstartesProfileByName(displayName, 'SM_codex_NETEA');
	}
	return null;
};
