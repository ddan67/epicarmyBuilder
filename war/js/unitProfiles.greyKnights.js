// Source: war/source-json/grey-knights.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.greyKnights = {
	armyIds: ['INQ_gk2018_NETEA'],
	profiles: {
		brother_captain:{name:'Brother Captain',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Anointed Blade',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Commander','Invulnerable Save','Leader']},
		grand_master:{name:'Grand Master',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Nemesis Force Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Invulnerable Save','Supreme Commander','Leader']},
		grey_knight_librarian:{name:'Grey Knight Librarian',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Smite',range:'(15cm)',firepower:'Small Arms',notes:['EA(+1)','TK(1)']},{name:'Power Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Invulnerable Save','Leader','Inspiring']},
		inquisitor:{name:'Inquisitor',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Invulnerable Save','Leader']},
		paladin_escort:{name:'Paladin Escort',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Anointed Blade',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','FS']}],abilities:['Reinforced Armour']},
		death_cult_assassin:{name:'Death Cult Assassin',type:'INF',speed:'15cm',armour:'5+',cc:'3+',ff:'-',weapons:[{name:'Power Weapons',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','S','FS']}],abilities:['Infiltrators','Invulnerable Save']},
		grey_knight_terminators:{name:'Grey Knight Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Nemesis Force Weapons',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']},{name:'2x Psycannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Reinforced Armour','Teleport','Thick Rear Armour','Invulnerable Save']},
		inquisitorial_storm_troopers:{name:'Inquisitorial Storm Troopers',type:'INF',speed:'15cm',armour:'5+',cc:'5+',ff:'4+',weapons:[{name:'Plasma Guns',range:'15cm',firepower:'AP5+/AT5+',notes:[]},{name:'Hot Shot Lasguns',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:[]},
		inquisitorial_warrior_acolytes:{name:'Inquisitorial Warrior Acolytes',type:'INF',speed:'15cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Hot Shot Lasguns',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Autocannon',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:['Scouts']},
		interceptors:{name:'Interceptors',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Nemesis Force Weapons',range:'(base contact)',firepower:'Assault Weapons',notes:[]},{name:'Incinerator',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'Incinerator',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Jump Packs','Teleport','Invulnerable Save']},
		purgation_squad:{name:'Purgation Squad',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Storm Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'2x Psycannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Invulnerable Save']},
		purifier_squad:{name:'Purifier Squad',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Nemesis Force Weapons',range:'(base contact)',firepower:'Assault Weapons',notes:[]},{name:'2x Heavy Incinerator',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'2x Heavy Incinerator',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Fearless','Invulnerable Save']},
		strike_squad:{name:'Strike Squad',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'3+',weapons:[{name:'Storm Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Psycannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Invulnerable Save']},
		chimera:{name:'Chimera',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Multilaser',range:'30cm',firepower:'AP5+/AT6+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Transport: May carry 2 Inquisitorial Warrior Acolytes and/or Death Cult Assassin units.']},
		grey_knight_razorback:{name:'Grey Knight Razorback',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Heavy Psycannon',range:'30cm',firepower:'AP4+/AT5+',notes:[]}],abilities:['Transport: May carry 1 of the following Grey Knights units: Purgation Squad, Strike Squad, Purifier Squad.']},
		grey_knight_dreadnought:{name:'Grey Knight Dreadnought',type:'AV',speed:'15cm',armour:'3+',cc:'4+',ff:'4+',weapons:[{name:'2x TL Auto Cannon',range:'45cm',firepower:'AP4+/AT5+',notes:[]},{name:'Doom Fist',range:'(base contact)',firepower:'Assault Weapons',notes:['MW']},{name:'Heavy Psycannon',range:'30cm',firepower:'AP4+/AT4+',notes:[]}],abilities:['Walker','Counts as Dreadnought for transport purposes.','May be armed with either 2x TL Auto Cannon or Doom Fist and Heavy Psycannon.']},
		hunter:{name:'Hunter',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Hunter-Killer',range:'60cm',firepower:'AT4+/AA4+',notes:[]}],abilities:[]},
		inquisitorial_hellhound:{name:'Inquisitorial Hellhound',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'Inferno Cannon',range:'30cm',firepower:'AP3+',notes:['IC']},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:[]},
		inquisitorial_leman_russ_tank:{name:'Inquisitorial Leman Russ Tank',type:'AV',speed:'20cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Battle Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:[]},{name:'Lascannon',range:'45cm',firepower:'AT5+',notes:[]},{name:'2x Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Reinforced Armour']},
		land_raider:{name:'Land Raider',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'2x TL Lascannon',range:'45cm',firepower:'AT4+',notes:[]},{name:'TL Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]}],abilities:['Reinforced Armour','Thick Rear Armour','Transport: May transport one Terminator unit or two infantry units without Jump Packs or Mounted.','Counts as Land Raider for transport purposes.']},
		land_raider_crusader:{name:'Land Raider Crusader',type:'AV',speed:'25cm',armour:'4+',cc:'5+',ff:'5+',weapons:[{name:'2x Hurricane Bolters',range:'(15cm)',firepower:'Small Arms',notes:['EA(+1)']},{name:'TL Psycannon',range:'30cm',firepower:'AP4+/AT4+',notes:[]},{name:'Frag Launchers',range:'(base contact)',firepower:'Assault Weapons',notes:[]}],abilities:['Reinforced Armour','Thick Rear Armour','Transport: May transport two Terminator units or three infantry units without Jump Packs or Mounted.','Counts as Land Raider for transport purposes.']},
		land_raider_redeemer:{name:'Land Raider Redeemer',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'2x Flamestorm Cannons',range:'15cm',firepower:'AP3+',notes:['IC']},{name:'TL Psycannon',range:'30cm',firepower:'AP4+/AT4+',notes:[]},{name:'Frag Launchers',range:'(base contact)',firepower:'Assault Weapons',notes:[]}],abilities:['Reinforced Armour','Thick Rear Armour','Transport: May transport one Terminator unit or two infantry units without Jump Packs or Mounted.','Counts as Land Raider for transport purposes.']},
		nemesis_dreadknight:{name:'Nemesis Dreadknight',type:'AV',speed:'25cm',armour:'3+',cc:'3+',ff:'4+',weapons:[{name:'Nemesis Daemon Weapon',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)','MW']},{name:'Heavy Psycannon',range:'30cm',firepower:'AP4+/AT5+',notes:[]},{name:'Heavy Incinerator',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'Heavy Incinerator',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Jump Packs','Invulnerable Save','Teleport','Walker','Counts as Dreadnought for transport purposes.']},
		rhino:{name:'Rhino',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Storm Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Transport: May carry 2 of the following: Purgation Squad, Strike Squad, Purifier Squad, Inquisitorial Storm Trooper.']},
		stormraven_gunship:{name:'Stormraven Gunship',type:'AV',speed:'35cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'TL Psycannon',range:'30cm',firepower:'AP4+/AT4+',notes:[]},{name:'TL Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]},{name:'TL Missiles',range:'45cm',firepower:'AT5+',notes:[]},{name:'2x Hurricane Bolters',range:'(15cm)',firepower:'Small Arms',notes:['EA(+1)']}],abilities:['Reinforced Armour','Planetfall','Skimmer','Transport: May carry 1 Grey Knights Dreadnought or 2 of the following: Interceptor, Purgation Squad, Strike Squad, Purifier Squad.']},
		valkyrie:{name:'Valkyrie',type:'AV',speed:'35cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Multilaser',range:'30cm',firepower:'AP5+/AT6+',notes:[]},{name:'2x Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]},{name:'2x Rocket Pod',range:'30cm',firepower:'1BP',notes:['D','SS']}],abilities:['Skimmer','Transport: May transport two infantry units without Jump Packs or Mounted.']},
		stormtalon_fighter_bomber:{name:'Stormtalon Fighter-Bomber',type:'AC',speed:'Fighter-Bomber',armour:'5+',cc:'n/a',ff:'n/a',weapons:[{name:'Twin Assault Cannon',range:'30cm',firepower:'AP4+/AT4+/AA5+',notes:['FwA']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['FxF']}],abilities:[]},
		thunderhawk_gunship:{name:'Thunderhawk Gunship',type:'AC/WE',speed:'Bomber',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Battle Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:['FxF']},{name:'2x Twin Heavy Bolter',range:'30cm',firepower:'AP4+/AA5+',notes:['FxF']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Left Arc']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Right Arc']}],abilities:['Damage Capacity 2','Planetfall','Reinforced Armour','Transport: May transport eight infantry units, Attack Bikes or Dreadnoughts; Terminator units and Dreadnoughts count as two units each.','Critical Hit Effect: The unit and all units being carried are destroyed.']},
		landing_craft:{name:'Landing Craft',type:'AC/WE',speed:'Bomber',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'2x TL Lascannons',range:'45cm',firepower:'AT4+',notes:['FxF']},{name:'3x TL Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:[]}],abilities:['Damage Capacity 4','Fearless','Planetfall','Reinforced Armour','Transport: May transport twelve infantry units or Dreadnoughts; Terminator units and Dreadnoughts count as two units each; plus any six armoured vehicle units (except Dreadnoughts); Land Raiders count as one and a half units each, rounding up.','Critical Hit Effect: The unit and all units being carried are destroyed. All units within 5cm suffer a hit.']},
		thunderhawk_transporter:{name:'Thunderhawk Transporter',type:'AC/WE',speed:'Bomber',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'2x Twin Psycannon',range:'15cm',firepower:'AP4+/AA5+',notes:[]}],abilities:['Damage Capacity 2','Planetfall','Reinforced Armour','Transport: May carry 1 Land Raider or 2 of the following units: Hunter, Nemesis Dreadknight, Razorback, Rhino, plus any infantry units carried in the transported vehicles.','Critical Hit Effect: The unit and all units being carried are destroyed.']},
		grey_knights_drop_pod:{name:'Grey Knights Drop Pod',type:'Special',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Deathwind',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Planetfall','Transport: May transport one formation of only the following units: Purgation Squad, Strike Squad, Purifier Squad, Dreadnought or Nemesis Dreadknight.','After the Drop Pod lands, its Deathwind attacks all enemy units within 15cm. Each enemy formation attacked receives a Blast marker for coming under fire, and an extra Blast marker for each casualty.','Then any troops carried in the Drop Pod must disembark within 5cm of the Drop Pod or within 5cm of another unit from the same formation that has already landed, so long as all units are placed within 15cm of the Drop Pod.','Drop Pod models should be removed from the board once the formation they transport has disembarked.']},
		strike_cruiser:{name:'Strike Cruiser',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'5BP',notes:['MW']}],abilities:['Transport: May transport 20 infantry units, Attack Bikes, or Dreadnoughts; plus 20 light vehicles or armoured vehicle units (except Attack Bikes and Dreadnoughts); plus six Thunderhawk Gunships and enough Drop Pods, or Landing Craft to transport any other units being carried.']},
		battle_barge:{name:'Battle Barge',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'14BP',notes:['MW']}],abilities:['Slow and Steady','Transport: May transport 60 infantry units, Attack Bikes, or Dreadnoughts; plus 60 armoured vehicle units (except Dreadnoughts); plus nine Thunderhawk Gunships and enough Drop Pods or Landing Craft to transport any other units being carried.']},
		eternal_warrior_formation:{name:'Eternal Warrior Formation',type:'Formation',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card: this formation has two alternatives in the source list, Grey Knight Dreadnoughts or Nemesis Dreadknights, with different printed costs.']}
	},
	nameToKey: {
		'strike squad':'strike_squad',
		'grey knights strike team':'strike_squad',
		'grey knights strike units':'strike_squad',
		'grey knight strike units':'strike_squad',
		'grey knights':'strike_squad',
		'captain':'brother_captain',
		'brother captain':'brother_captain',
		'inquisitorial warband':'inquisitorial_warrior_acolytes',
		'warrior acolyte':'inquisitorial_warrior_acolytes',
		'warrior acolytes':'inquisitorial_warrior_acolytes',
		'inquisitorial warrior acolytes':'inquisitorial_warrior_acolytes',
		'inquisitor':'inquisitor',
		'inqusitor':'inquisitor',
		'chimeras':'chimera',
		'3 chimeras':'chimera',
		'chimera':'chimera',
		'terminators':'grey_knight_terminators',
		'grey knights terminators':'grey_knight_terminators',
		'grey knight terminators':'grey_knight_terminators',
		'grey knight terminator units':'grey_knight_terminators',
		'0 1 purifier squad':'purifier_squad',
		'grey knight purifiers':'purifier_squad',
		'purifier squad':'purifier_squad',
		'grey knight purifier units':'purifier_squad',
		'eternal warrior formation':'eternal_warrior_formation',
		'eternal warrior formation grey knight dreadnoughts':'grey_knight_dreadnought',
		'eternal warrior formation nemesis dreadknights':'nemesis_dreadknight',
		'grey knights dreadnoughts':'grey_knight_dreadnought',
		'grey knight dreadnoughts':'grey_knight_dreadnought',
		'grey knights dreadnought':'grey_knight_dreadnought',
		'grey knight dreadnought':'grey_knight_dreadnought',
		'grey knight nemesis dreadknights':'nemesis_dreadknight',
		'nemesis dreadknights':'nemesis_dreadknight',
		'nemesis dreadknight':'nemesis_dreadknight',
		'interceptor squad':'interceptors',
		'grey knights interceptor squad':'interceptors',
		'grey knights interceptor units':'interceptors',
		'grey knights interceptor':'interceptors',
		'interceptors':'interceptors',
		'purgation squad':'purgation_squad',
		'grey knights purgation squad':'purgation_squad',
		'grey knight purgation units':'purgation_squad',
		'grey knights purgation plus transports':'purgation_squad',
		'land raiders':'land_raider',
		'grey knights land raider':'land_raider',
		'grey knights land raiders':'land_raider',
		'land raider':'land_raider',
		'grey knights land raider crusaders':'land_raider_crusader',
		'land raider crusaders':'land_raider_crusader',
		'land raider crusader':'land_raider_crusader',
		'grey knights land raider redeemers':'land_raider_redeemer',
		'land raider redeemers':'land_raider_redeemer',
		'land raider redeemer':'land_raider_redeemer',
		'0 1 strike cruisers':'strike_cruiser',
		'grey knights space craft':'strike_cruiser',
		'grey knights strike cruiser':'strike_cruiser',
		'strike cruiser':'strike_cruiser',
		'battlebarge':'battle_barge',
		'battle barge':'battle_barge',
		'storm raven flight':'stormraven_gunship',
		'storm raven':'stormraven_gunship',
		'storm ravens':'stormraven_gunship',
		'stormraven':'stormraven_gunship',
		'stormraven flight':'stormraven_gunship',
		'stormraven gunship':'stormraven_gunship',
		'grey knights stormraven gunships':'stormraven_gunship',
		'grey knights storm ravens':'stormraven_gunship',
		'inquisitorial storm troopers':'inquisitorial_storm_troopers',
		'inquisitorial stormtroopers':'inquisitorial_storm_troopers',
		'storm troopers':'inquisitorial_storm_troopers',
		'stormtroopers':'inquisitorial_storm_troopers',
		'inquisitorial hellhound platoon':'inquisitorial_hellhound',
		'inquisitorial hellhound':'inquisitorial_hellhound',
		'inquisitorial hellhound tanks':'inquisitorial_hellhound',
		'inquisitorial tank company':'inquisitorial_leman_russ_tank',
		'leman russ tanks':'inquisitorial_leman_russ_tank',
		'leman russ':'inquisitorial_leman_russ_tank',
		'thunderhawk gunship':'thunderhawk_gunship',
		'landing craft':'landing_craft',
		'landing craft aircraft':'landing_craft',
		'thunderhawk transporter':'thunderhawk_transporter',
		'thunderhawk transporters':'thunderhawk_transporter',
		'grey knight thunderhawk transporter':'thunderhawk_transporter',
		'grey knights thunderhawk transport':'thunderhawk_transporter',
		'stormtalon gunship':'stormtalon_fighter_bomber',
		'stormtalon gunships':'stormtalon_fighter_bomber',
		'stormtalons':'stormtalon_fighter_bomber',
		'stormtalon fighter bomber':'stormtalon_fighter_bomber',
		'grey knights drop pod':'grey_knights_drop_pod',
		'drop pod':'grey_knights_drop_pod',
		'drop pods':'grey_knights_drop_pod',
		'command':'grey_knight_librarian',
		'grey knight librarian':'grey_knight_librarian',
		'librarian':'grey_knight_librarian',
		'death cult assassins':'death_cult_assassin',
		'death cult assassin':'death_cult_assassin',
		'eternal warriors':'grey_knight_dreadnought',
		'grand master':'grand_master',
		'grand master with paladin escort':'grand_master',
		'grey knight paladin escort':'paladin_escort',
		'paladin escort':'paladin_escort',
		'hunter':'hunter',
		'hunters':'hunter',
		'razorbacks':'grey_knight_razorback',
		'razorback':'grey_knight_razorback',
		'grey knight razorback':'grey_knight_razorback',
		'rhinos':'rhino',
		'4 rhinos':'rhino',
		'rhino':'rhino',
		'valkyries':'valkyrie',
		'4 valkyries':'valkyrie',
		'valkyrie':'valkyrie',
		'transport':'rhino'
	}
};

ArmyforgeUnitProfiles.normalizeGreyKnightsName = function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.replace(/[’']/g, '')
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\b(one|two|three|four|five|six|seven|eight)\b/g, '')
		.replace(/\bplus transports?\b/g, '')
		.replace(/\b(units|unit|stands|stand|formation|formations|aircraft|tanks)\b/g, '')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.findGreyKnightsProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.greyKnights.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeGreyKnightsName(displayName);
	var key = ArmyforgeUnitProfiles.greyKnights.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.greyKnights.profiles[key] || null;
};
