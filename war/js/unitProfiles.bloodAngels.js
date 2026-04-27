// Source: war/source-json/blood-angels.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.bloodAngels = {
	armyIds: ['SM_bloodAngels_NETEA'],
	profiles: {
		supreme_commander:{name:'Supreme Commander',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Character','Supreme Commander','Invulnerable Save']},
		captain:{name:'Captain',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Character','Commander','Leader','Invulnerable Save']},
		chaplain:{name:'Chaplain',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Character','Inspiring','Leader','Invulnerable Save']},
		librarian:{name:'Librarian',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']},{name:'Smite',range:'(15cm)',firepower:'Small Arms',notes:['EA(+1)','MW']}],abilities:['Character','Leader','Invulnerable Save']},
		blood_angels_terminators:{name:'Blood Angels Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Storm Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Power Weapons',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']},{name:'2x Assault Cannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Reinforced Armour','Teleport','Thick Rear Armour']},
		death_company:{name:'Death Company',type:'INF',speed:'15cm (30cm)',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Rending Weapons',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Fearless','Invulnerable Save','Jump Packs increase move to 30cm']},
		blood_angels_devastators:{name:'Blood Angels Devastators',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'2x Missile Launcher',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		blood_angels_assault_marines:{name:'Blood Angels Assault Marines',type:'INF',speed:'30cm',armour:'4+',cc:'4+',ff:'5+',weapons:[{name:'Bolt Pistols',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Chainswords',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Jump Packs']},
		blood_angels_tacticals:{name:'Blood Angels Tacticals',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Missile Launchers',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		blood_angels_scouts:{name:'Blood Angels Scouts',type:'INF',speed:'15cm',armour:'5+',cc:'4+',ff:'5+',weapons:[{name:'Shotguns',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Infiltrator','Scout']},
		blood_angels_attack_bike:{name:'Blood Angels Attack Bike',type:'LV',speed:'35cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:[]},
		blood_angels_bikes:{name:'Blood Angels Bikes',type:'INF',speed:'35cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Chainswords',range:'(bc)',firepower:'Assault Weapons',notes:[]}],abilities:['Mounted']},
		land_speeder:{name:'Land Speeder',type:'LV',speed:'35cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Multi Melta',range:'15cm',firepower:'MW5+',notes:['MW']},{name:'Multi Melta',range:'(15cm)',firepower:'Small Arms',notes:['MW']}],abilities:['Skimmer','Scout']},
		land_speeder_tornado:{name:'Land Speeder Tornado',type:'LV',speed:'35cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Skimmer','Scout']},
		land_speeder_typhoon:{name:'Land Speeder Typhoon',type:'LV',speed:'35cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Typhoon Missile Launcher',range:'45cm',firepower:'AP3+/AT5+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Skimmer','Scout']},
		death_company_dreadnought:{name:'Death Company Dreadnought',type:'AV',speed:'15cm',armour:'3+',cc:'3+',ff:'5+',weapons:[{name:'2x Power Fist',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Fearless','Walker','Invulnerable Save']},
		rhino:{name:'Rhino',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Storm Bolter',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Lucifer Pattern Engines','Transport','May carry up to two of the following: Death Company, Devastators, Tacticals, Scouts.']},
		hunter:{name:'Hunter',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Hunter-killer',range:'60cm',firepower:'AT4+/AA4+',notes:[]}],abilities:['Lucifer Pattern Engines']},
		vindicator:{name:'Vindicator',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Demolisher Cannon',range:'30cm',firepower:'AP3+/AT4+',notes:['IC']}],abilities:['Lucifer Pattern Engines','Walker']},
		baal_predator:{name:'Baal Predator',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'Twin Assault Cannon',range:'30cm',firepower:'AP4+/AT4+',notes:[]},{name:'2x Heavy Flamer',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'2x Heavy Flamer',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Lucifer Pattern Engines']},
		predator_infernus:{name:'Predator Infernus',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'4+ (3+)',weapons:[{name:'Magna Melta',range:'15cm',firepower:'MW4+',notes:['MW']},{name:'Magna Melta',range:'(15cm)',firepower:'Small Arms',notes:['MW']},{name:'Flamestorm Cannon',range:'15cm',firepower:'AP3+',notes:['IC']},{name:'Flamestorm Cannon',range:'(15cm)',firepower:'Small Arms',notes:['IC']},{name:'2x Heavy Flamer',range:'15cm',firepower:'AP4+',notes:['IC']}],abilities:['Lucifer Pattern Engines','All models in the formation may be armed with either a Magna Melta or Flamestorm Cannon, not both.','Flamestorm Cannon improves FF to 3+.']},
		razorback:{name:'Razorback',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]},{name:'Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]}],abilities:['Lucifer Pattern Engines','Transport','May carry one stand of Tacticals, Devastators or Scouts.','May be armed with either a Twin Heavy Bolter or a Twin Lascannon, not both.']},
		land_raider:{name:'Land Raider',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]},{name:'2x Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]}],abilities:['Reinforced Armour','Thick Rear Armour','Transport','May carry up to two stands of Tacticals or Devastators or one stand of Terminators.']},
		land_raider_redeemer:{name:'Land Raider Redeemer',type:'AV',speed:'25cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Twin Assault Cannons',range:'30cm',firepower:'AP4+/AT4+',notes:[]},{name:'2x Flamestorm Cannons',range:'15cm',firepower:'AP3+',notes:['IC']},{name:'2x Flamestorm Cannons',range:'(15cm)',firepower:'Small Arms',notes:['IC']},{name:'Frag Launchers',range:'(bc)',firepower:'Assault Weapons',notes:[]}],abilities:['Reinforced Armour','Thick Rear Armour','Transport','May carry up to two stands of Tacticals or Devastators or one stand of Terminators.']},
		furioso_dreadnought:{name:'Furioso Dreadnought',type:'AV',speed:'15cm',armour:'3+',cc:'4+',ff:'5+ (4+)',weapons:[{name:'2x Power Fist',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']},{name:'Power Fist',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']},{name:'Frag Cannon',range:'(15cm)',firepower:'Small Arms',notes:['EA(+1)']}],abilities:['Walker','May be armed with either two power fists or one power fist and a frag cannon, not both.','Frag Cannon improves FF to 4+.']},
		storm_raven_gunship:{name:'Storm Raven Gunship',type:'AV',speed:'35cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Assault Cannons',range:'30cm',firepower:'AP4+/AT4+',notes:[]},{name:'Twin Bloodstrike Missiles',range:'45cm',firepower:'AT5+',notes:[]},{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]},{name:'2x Hurricane Bolters',range:'(15cm)',firepower:'Small Arms',notes:['EA(+1)']}],abilities:['Reinforced Armour','Skimmer','Planetfall','Transport','May transport one Dreadnought and up to two stands of Tacticals, Devastators or Assault Marines, or one stand of Terminators.']},
		drop_pod:{name:'Drop Pod',type:'AV',speed:'Immobile',armour:'N/A',cc:'N/A',ff:'N/A',weapons:[{name:'Deathwind',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Planetfall','Transport','May carry one formation which includes only units from the following: Tacticals, Devastators, Dreadnoughts.','Place the Drop Pod marker using the Planetfall rules (4.4). After the marker is placed, its Deathwind attacks all enemy units within 15cm of the centre of the marker. Then any troops carried in the pod must disembark (which can trigger overwatch) in coherency, completely within 15cm of the Drop Pod and outside enemy zones of control.','The Drop Pod is not a unit.']},
		thunderhawk_gunship:{name:'Thunderhawk Gunship',type:'WE/AC',speed:'Bomber',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Battle Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:['FxF']},{name:'2x Twin Heavy Bolter',range:'30cm',firepower:'AP4+/AA5+',notes:['FxF']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Right Arc']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Left Arc']}],abilities:['Planetfall','Reinforced Armour','Transport','May carry up to eight of the following: Tacticals, Devastators, Assault Marines, Scouts, Death Company, Bikes. Terminators and Dreadnoughts may also be transported but take up two slots each.','Damage Capacity 2','Critical Hit Effect: Destroyed.']},
		landing_craft:{name:'Landing Craft',type:'WE/AC',speed:'Bomber',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'2x Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]},{name:'3x Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:[]},{name:'Storm Bolters',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Planetfall','Reinforced Armour','Transport','May carry up to twelve of the following: Tacticals, Devastators, Assault Marines, Scouts, Death Company, Bikes. Terminators and Dreadnoughts may also be transported but take up two slots each. May additionally transport up to four Land Raiders of any type, or up to six Rhinos, Razorbacks, Hunters, Predators or Vindicators.','Damage Capacity 4','Critical Hit Effect: Destroyed.']},
		strike_cruiser:{name:'Strike Cruiser',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'5BP',notes:['MW']}],abilities:['Transport','May transport up to twenty of the following: Tacticals, Devastators, Assault Marines, Scouts, Terminators, plus up to twenty of the following: Rhinos, Razorbacks, Predators, Vindicators, Hunters and Land Raiders, plus up to six Thunderhawks and enough Drop Pods or Landing Craft to transport any other units on board.']},
		battle_barge:{name:'Battle Barge',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'14BP',notes:['MW']}],abilities:['Transport','May transport up to sixty of the following: Tacticals, Devastators, Assault Marines, Scouts, Terminators, plus up to sixty of the following: Rhinos, Razorbacks, Predators, Vindicators, Hunters and Land Raiders, plus up to nine Thunderhawks and enough Drop Pods or Landing Craft to transport any other units on board.','Slow and Steady']},
		storm_talon_fighter_bomber:{name:'Storm Talon fighter-bomber',type:'AC',speed:'Fighter-Bomber',armour:'5+',cc:'N/A',ff:'N/A',weapons:[{name:'Twin Assault Cannon',range:'30cm',firepower:'AP4+/AT4+/AA5+',notes:['FA']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['FxF']}],abilities:[]},
		sniper:{name:'Sniper',type:'Formation',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for the Blood Angels Sniper upgrade. All units in the formation gain the Sniper ability when this option is selected.']}
	},
	nameToKey: {
		'supreme commander':'supreme_commander',
		'supreme commander honour guard':'supreme_commander',
		'captain':'captain',
		'chaplain':'chaplain',
		'blood angels chaplain character':'chaplain',
		'librarian':'librarian',
		'death company':'death_company',
		'death company units':'death_company',
		'4 death company units':'death_company',
		'blood angels terminators':'blood_angels_terminators',
		'blood angels terminator units':'blood_angels_terminators',
		'terminator units':'blood_angels_terminators',
		'terminator detachment':'blood_angels_terminators',
		'blood angels devastators':'blood_angels_devastators',
		'blood angels devastator marine units':'blood_angels_devastators',
		'devastator marine units':'blood_angels_devastators',
		'devastator detachment':'blood_angels_devastators',
		'blood angels assault marines':'blood_angels_assault_marines',
		'blood angels assault marine units':'blood_angels_assault_marines',
		'assault marine units':'blood_angels_assault_marines',
		'assault detachment':'blood_angels_assault_marines',
		'4 blood angels assault marine units':'blood_angels_assault_marines',
		'6 blood angels assault marine units':'blood_angels_assault_marines',
		'blood angels tacticals':'blood_angels_tacticals',
		'blood angels tactical marine units':'blood_angels_tacticals',
		'blood angels tactical marines':'blood_angels_tacticals',
		'tactical marine units':'blood_angels_tacticals',
		'tactical detachment':'blood_angels_tacticals',
		'blood angels scouts':'blood_angels_scouts',
		'blood angels scout units':'blood_angels_scouts',
		'scout units':'blood_angels_scouts',
		'scout detachment':'blood_angels_scouts',
		'blood angels attack bike':'blood_angels_attack_bike',
		'attack bike':'blood_angels_attack_bike',
		'blood angels bikes':'blood_angels_bikes',
		'blood angels bike units':'blood_angels_bikes',
		'bike units':'blood_angels_bikes',
		'blood angels bike unit':'blood_angels_bikes',
		'blood angels bike':'blood_angels_bikes',
		'bike detachment':'blood_angels_bikes',
		'land speeder':'land_speeder',
		'land speeders':'land_speeder',
		'land speeder tornado':'land_speeder_tornado',
		'land speeder typhoon':'land_speeder_typhoon',
		'death company dreadnought':'death_company_dreadnought',
		'rhino':'rhino',
		'rhinos':'rhino',
		'hunter':'hunter',
		'vindicator':'vindicator',
		'vindicators':'vindicator',
		'baal predator':'baal_predator',
		'predator squadron':'baal_predator',
		'predators':'baal_predator',
		'predator':'baal_predator',
		'infernus predator':'predator_infernus',
		'predator infernus':'predator_infernus',
		'baal predator infernus':'predator_infernus',
		'baal predator infernus magna melta':'predator_infernus',
		'baal or infernus predators':'predator_infernus',
		'razorback':'razorback',
		'razorbacks':'razorback',
		'razorback lascannon':'razorback',
		'razorback heavy bolter':'razorback',
		'blood angels tl lascannon razorback':'razorback',
		'blood angels tl heavy bolter razorback':'razorback',
		'land raider':'land_raider',
		'land raiders':'land_raider',
		'2 land raider':'land_raider',
		'3 land raider':'land_raider',
		'4 land raider':'land_raider',
		'land raider redeemer':'land_raider_redeemer',
		'2 land raider redeemer':'land_raider_redeemer',
		'3 land raider redeemer':'land_raider_redeemer',
		'4 land raider redeemer':'land_raider_redeemer',
		'furioso dreadnought':'furioso_dreadnought',
		'furioso dreadnought 2x power fist':'furioso_dreadnought',
		'furioso dreadnought frag cannon':'furioso_dreadnought',
		'dreadnought':'furioso_dreadnought',
		'storm raven':'storm_raven_gunship',
		'storm raven formation':'storm_raven_gunship',
		'storm raven units':'storm_raven_gunship',
		'storm raven gunships':'storm_raven_gunship',
		'storm raven gunship':'storm_raven_gunship',
		'storm ravens':'storm_raven_gunship',
		'stormraven':'storm_raven_gunship',
		'stormraven gunship':'storm_raven_gunship',
		'drop pod':'drop_pod',
		'drop pods':'drop_pod',
		'thunderhawk':'thunderhawk_gunship',
		'thunderhawk gunship':'thunderhawk_gunship',
		'landing craft':'landing_craft',
		'strike cruiser':'strike_cruiser',
		'spacecraft':'strike_cruiser',
		'space craft':'strike_cruiser',
		'0 1 spacecraft':'strike_cruiser',
		'0 1 space craft':'strike_cruiser',
		'battle barge':'battle_barge',
		'battlebarge':'battle_barge',
		'upgrade to battle barge':'battle_barge',
		'storm talon fighter bomber':'storm_talon_fighter_bomber',
		'storm talon fighter bombers':'storm_talon_fighter_bomber',
		'two storm talon fighter bombers':'storm_talon_fighter_bomber',
		'storm talons':'storm_talon_fighter_bomber',
		'2 storm talons':'storm_talon_fighter_bomber',
		'sniper':'sniper',
		'character':'chaplain'
	}
};

ArmyforgeUnitProfiles.normalizeBloodAngelsName = function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\b(one|two|three|four|five|six)\b/g, '')
		.replace(/\bplus transport\b/g, '')
		.replace(/\btransport\b/g, '')
		.replace(/\b(units|unit|stands|stand|formation|formations)\b/g, '')
		.replace(/\b(blood angels|blood angel)\b/g, 'blood angels')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.findBloodAngelsProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.bloodAngels.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeBloodAngelsName(displayName);
	var key = ArmyforgeUnitProfiles.bloodAngels.nameToKey[normalized];
	if (key && ArmyforgeUnitProfiles.bloodAngels.profiles[key]) {
		return ArmyforgeUnitProfiles.bloodAngels.profiles[key];
	}
	if (ArmyforgeUnitProfiles.findSmCodexAstartesProfileByName) {
		return ArmyforgeUnitProfiles.findSmCodexAstartesProfileByName(displayName, 'SM_codex_NETEA');
	}
	return null;
};
