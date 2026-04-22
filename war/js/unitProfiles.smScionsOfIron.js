// Sources:
// - https://tp.net-armageddon.org/army-lists/space-marine-codex-astartes.html
// - https://tp.net-armageddon.org/army-lists/space-marine-imperial-fists.html
// - https://tp.net-armageddon.org/army-lists/space-marine-raven-guard.html
// - https://tp.net-armageddon.org/army-lists/space-marine-salamanders.html
// - https://tp.net-armageddon.org/army-lists/space-marine-scions-of-iron.html
// - https://tp.net-armageddon.org/army-lists/space-marine-space-wolves.html
// - https://tp.net-armageddon.org/army-lists/space-marine-white-scars.html

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.smScionsOfIron = {
	armyIds: ['SM_scions_NETEA'],
	profiles: {
		tactical_marines:{name:'Tactical Marines',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Missile Launcher',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		assault_marines:{name:'Assault Marines',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'5+',weapons:[{name:'Bolt Pistols',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:['Jump Packs']},
		devastators:{name:'Devastators',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Heavy Weapons',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		scouts:{name:'Scouts',type:'INF',speed:'15cm',armour:'5+',cc:'4+',ff:'5+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Infiltrator','Scout']},
		terminators:{name:'Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Storm Bolters',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Teleport']},
		sternguard_veterans:{name:'Sternguard Veterans',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'3+',weapons:[{name:'Special Issue Bolters',range:'30cm',firepower:'AP4+/AT6+',notes:[]}],abilities:[]},
		vanguard_veterans:{name:'Vanguard Veterans',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Power Weapons',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Jump Packs']},
		bikes:{name:'Bike Unit',type:'INF',speed:'35cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Twin Bolters',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:['Mounted']},
		attack_bike:{name:'Attack Bike',type:'LV',speed:'35cm',armour:'4+',cc:'5+',ff:'5+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:[]},
		land_speeder:{name:'Land Speeder',type:'LV',speed:'35cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Multi-melta',range:'15cm',firepower:'MW5+',notes:[]},{name:'Multi-melta (close range)',range:'15cm',firepower:'Small Arms',notes:['MW']}],abilities:['Scout','Skimmer']},
		landspeeder_tornado:{name:'Land Speeder Tornado',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT6+',notes:[]}],abilities:['Skimmer']},
		landspeeder_typhoon:{name:'Land Speeder Typhoon',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Typhoon Missile Launcher',range:'45cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Skimmer']},
		landspeeder_storm:{name:'Land Speeder Storm',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Heavy Flamer',range:'15cm',firepower:'AP4+',notes:['IC']}],abilities:['Skimmer','Transport']},
		landspeeder_tempest:{name:'Land Speeder Tempest',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Tempest Launcher',range:'45cm',firepower:'2BP',notes:['Ind']}],abilities:['Skimmer']},
		rhino:{name:'Rhino',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Storm Bolter',range:'15cm',firepower:'AP6+/AT6+',notes:[]}],abilities:['Transport']},
		drop_pod:{name:'Drop Pod',type:'Transport Drop Pod',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Planetfall','Transport','Reference card for drop pod insertion rather than a normal battlefield unit profile.']},
		razorback_hb:{name:'Razorback (Twin Heavy Bolter)',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Transport']},
		razorback_lc:{name:'Razorback (Twin Laser Cannon)',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]}],abilities:['Transport']},
		predator_annihilator:{name:'Predator Annihilator',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]}],abilities:[]},
		predator_destructor:{name:'Predator Destructor',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'Autocannon',range:'45cm',firepower:'AP5+/AT6+',notes:[]},{name:'2× Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:[]},
		predator_incinerator:{name:'Predator Incinerator',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Flame Cannon',range:'30cm',firepower:'AP4+',notes:['IC']}],abilities:[]},
		vindicator:{name:'Vindicator',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Demolisher',range:'30cm',firepower:'AP3+/AT4+',notes:['IC']}],abilities:['Walker']},
		whirlwind:{name:'Whirlwind',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Whirlwind',range:'45cm',firepower:'1BP',notes:['Ind']}],abilities:[]},
		hunter:{name:'Hunter',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Hunter-Killer',range:'60cm',firepower:'AT4+/AA4+',notes:[]}],abilities:[]},
		captain:{name:'Captain',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Commander','Invulnerable Save','Leader']},
		chaplain:{name:'Chaplain',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Inspiring','Invulnerable Save','Leader']},
		librarian:{name:'Librarian',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Smite',range:'15cm',firepower:'Small Arms',notes:['EA(+1)','MW']},{name:'Power Weapon',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Invulnerable Save','Leader']},
		supreme_commander:{name:'Supreme Commander',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Power Weapon',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Invulnerable Save','Supreme Commander']},
		techmarine:{name:'Techmarine',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Servo-arm',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Commander','Repair']},
		dreadnought:{name:'Dreadnought',type:'AV',speed:'15cm',armour:'3+',cc:'4+',ff:'4+',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT5+',notes:[]},{name:'Power Fist',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Walker']},
		venerable_dreadnought:{name:'Venerable Dreadnought',type:'AV',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT6+',notes:[]},{name:'Power Fist',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Walker','Leader']},
		dreadnought_hellfire:{name:'Dreadnought (Hellfire config.)',type:'AV',speed:'15cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Hellfire Missiles',range:'45cm',firepower:'1BP',notes:['Ind']}],abilities:['Walker']},
		vulcan_dreadnought:{name:'Vulcan Dreadnought',type:'AV',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Twin Heavy Flamers',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'Power Fist',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Walker']},
		land_raider:{name:'Land Raider',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'2× Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]},{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP4+',notes:[]}],abilities:['Reinforced Armour','Thick Rear Armour','Transport']},
		land_raider_crusader:{name:'Land Raider Crusader',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Hurricane Bolters',range:'30cm',firepower:'AP5+',notes:[]},{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT6+',notes:[]}],abilities:['Reinforced Armour','Transport']},
		land_raider_achilles:{name:'Land Raider Achilles',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Thunderfire Cannon',range:'45cm',firepower:'1BP',notes:['Ind']}],abilities:['Reinforced Armour','Transport']},
		land_raider_redeemer:{name:'Land Raider Redeemer',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Flamestorm Cannons',range:'15cm',firepower:'AP3+',notes:['IC']}],abilities:['Reinforced Armour','Transport']},
		land_raider_helios:{name:'Land Raider Helios',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Helios Missile Launcher',range:'60cm',firepower:'1BP / AA5+',notes:['Ind']}],abilities:['Reinforced Armour','Transport']},
		land_raider_prometheus:{name:'Land Raider Prometheus',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Quad Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Reinforced Armour','Transport','Commander']},
		landing_craft:{name:'Landing Craft',type:'AC/WE',speed:'Bomber',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'2× Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]},{name:'3× Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:[]}],abilities:['Damage Capacity 4','Fearless','Planetfall','Reinforced Armour','Transport']},
		strike_cruiser:{name:'Strike Cruiser',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'5BP',notes:['MW']}],abilities:['Transport']},
		battle_barge:{name:'Battle Barge',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Orbital Bombardment',range:'n/a',firepower:'D6BP',notes:['MW']}],abilities:['Slow and Steady','Transport']},
		spacecraft:{name:'Spacecraft',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for a spacecraft formation slot; commonly upgraded to a Strike Cruiser or Battle Barge.']},
		thunderhawk:{name:'Thunderhawk',type:'AC/WE',speed:'Bomber',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Battle Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:['FxF']},{name:'2× Twin Heavy Bolter',range:'30cm',firepower:'AP4+/AA5+',notes:['FxF']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Left']},{name:'Twin Heavy Bolter',range:'15cm',firepower:'AP4+/AA5+',notes:['Right']}],abilities:['Damage Capacity 2','Planetfall','Reinforced Armour','Transport']},
		thunderhawk_sat:{name:'Thunderhawk (Saturation Bombing configuration)',type:'AC/WE',speed:'n/a',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Bomb Racks',range:'15cm',firepower:'3BP',notes:['FxF']}],abilities:['Damage Capacity 2','Planetfall','Transport']},
		thunderhawk_cas:{name:'Thunderhawk (Close Air Support configuration)',type:'AC/WE',speed:'n/a',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Close Air Support Weapons',range:'30cm',firepower:'AP4+/AT5+',notes:['FxF']}],abilities:['Damage Capacity 2','Planetfall','Transport']},
		thunderhawk_transporter:{name:'Thunderhawk Transporter',type:'AC/WE',speed:'n/a',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Battle Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:['FxF']}],abilities:['Damage Capacity 2','Planetfall','Transport']},
		thunderbolt_fighter:{name:'Thunderbolt Fighter',type:'AC Fighter-Bomber',speed:'n/a',armour:'6+',cc:'n/a',ff:'n/a',weapons:[{name:'Multilaser',range:'30cm',firepower:'AP5+/AT6+/AA5+',notes:['FxF']},{name:'Underwing Rockets',range:'30cm',firepower:'AT4+',notes:['FxF']},{name:'Storm Bolters',range:'15cm',firepower:'AP4+/AA5+',notes:['FxF']}],abilities:[]},
		marauder_bomber:{name:'Marauder Bomber',type:'AC Bomber',speed:'n/a',armour:'4+',cc:'n/a',ff:'n/a',weapons:[{name:'Twin Lascannon',range:'45cm',firepower:'AT4+/AA4+',notes:['FxF']},{name:'Bomb Racks',range:'15cm',firepower:'3BP',notes:['FxF']},{name:'2× Twin Heavy Bolter',range:'15cm',firepower:'AA5+',notes:[]}],abilities:[]},
		storm_talon_gunship:{name:'Storm Talon Gunship',type:'AC Fighter-Bomber',speed:'n/a',armour:'5+',cc:'n/a',ff:'n/a',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT6+',notes:['FxF']},{name:'Skyhammer Missiles',range:'30cm',firepower:'AT4+/AA5+',notes:['FxF']}],abilities:[]},
		storm_eagle:{name:'Storm Eagle',type:'AC/WE',speed:'n/a',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Vengeance Launcher',range:'45cm',firepower:'AP4+/AT5+',notes:['FxF']},{name:'Twin Multi-melta',range:'15cm',firepower:'AT4+',notes:['FxF','MW']}],abilities:['Damage Capacity 2','Planetfall','Transport']},
		thunderfire_cannon:{name:'Thunderfire Cannon',type:'INF',speed:'10cm',armour:'-',cc:'6+',ff:'5+',weapons:[{name:'Thunderfire',range:'45cm',firepower:'1BP',notes:['Ind']}],abilities:[]},
		rapier:{name:'Rapier',type:'INF',speed:'10cm',armour:'-',cc:'6+',ff:'5+',weapons:[{name:'Laser Destroyer',range:'45cm',firepower:'AP6+/AT4+',notes:[]}],abilities:[]},
		thudd_gun:{name:'Thudd Gun',type:'INF',speed:'10cm',armour:'-',cc:'6+',ff:'5+',weapons:[{name:'Thudd Gun',range:'45cm',firepower:'AP4+/AT6+',notes:['Ind']}],abilities:[]},
		centurion:{name:'Centurion',type:'INF',speed:'10cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]},{name:'Siege Drills',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Reinforced Armour']},
		fortified_positions:{name:'Fortified Positions',type:'Static Defences',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for minefields or trenches with 2 bunkers.','Represents battlefield fortifications rather than a normal unit statline.']},
		bunkers_minefields:{name:'2 Bunkers + Minefields',type:'Static Defences',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for bunker and minefield fortifications.']},
		bunkers_trenches:{name:'2 Bunkers + Trenches',type:'Static Defences',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for bunker and trench fortifications.']},
		hyperios_platform:{name:'Hyperios Platform',type:'LV',speed:'0cm',armour:'6+',cc:'6+',ff:'6+',weapons:[{name:'Hyperios Launcher',range:'45cm',firepower:'AT6+/AA5+',notes:['Automata']}],abilities:['Immobile']},
		tarantula_sentry_gun:{name:'Tarantula Sentry Gun',type:'INF',speed:'0cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Immobile']},
		emplacement:{name:'Emplacement',type:'Fortification',speed:'0cm',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for a fixed gun emplacement.']},
		tarantula_and_emplacement:{name:'Tarantula + Emplacement',type:'Static Defences',speed:'0cm',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for a Tarantula and emplacement upgrade.']},
		ambush:{name:'Ambush',type:'Tactical Upgrade',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for an ambush deployment upgrade.']},
		planetfall:{name:'Planetfall',type:'Tactical Upgrade',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for a planetfall deployment upgrade.']},
		warhound_titan:{name:'Warhound Class Titan',type:'WE',speed:'30cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Titan Weapons',range:'varies',firepower:'varies',notes:['Configuration-dependent']}],abilities:['Damage Capacity 2','Reinforced Armour','Void Shields','Walker']},
		reaver_titan:{name:'Reaver Class Titan',type:'WE',speed:'20cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Titan Weapons',range:'varies',firepower:'varies',notes:['Configuration-dependent']}],abilities:['Damage Capacity 4','Reinforced Armour','Void Shields','Walker']},
		warlord_titan:{name:'Warlord Class Titan',type:'WE',speed:'15cm',armour:'4+',cc:'2+',ff:'2+',weapons:[{name:'Titan Weapons',range:'varies',firepower:'varies',notes:['Configuration-dependent']}],abilities:['Damage Capacity 6','Reinforced Armour','Void Shields','Walker']},
		fellblade:{name:'Fellblade',type:'WE',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Fellblade Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:[]}],abilities:['Damage Capacity 2','Reinforced Armour']},
		bastion:{name:'Bastion',type:'Fortification',speed:'n/a',armour:'4+',cc:'n/a',ff:'5+',weapons:[{name:'Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Immobile']},
		supreme_commander_in_land_raider:{name:'Supreme Commander in Land Raider',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Commander','Inspiring','Reinforced Armour','Supreme Commander','Transport']},
		supreme_commander_in_prometheus:{name:'Supreme Commander in Prometheus',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Quad Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Commander','Inspiring','Reinforced Armour','Supreme Commander','Transport']},
		fast_attack:{name:'Fast Attack',type:'Formation',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for a fast attack formation composed from bikes, attack bikes, and/or land speeders.']},
		land_raiders_or_redeemers:{name:'4 Land Raiders or Redeemers',type:'Formation Upgrade',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Reference card for a mixed Land Raider / Land Raider Redeemer upgrade group.']},
		blood_claws:{name:'Blood Claws',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'5+',weapons:[{name:'Bolt Pistols and Chainswords',range:'15cm/base',firepower:'Small Arms / Assault Weapons',notes:['EA(+1)']}],abilities:[]},
		grey_hunters:{name:'Grey Hunters',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Bolters',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:[]},
		long_fangs:{name:'Long Fangs',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Heavy Weapons',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		sky_claws:{name:'Sky Claws',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'5+',weapons:[{name:'Bolt Pistols',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:['Jump Packs']},
		wolf_guard_terminators:{name:'Wolf Guard Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Storm Bolters',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Teleport']},
		wolf_scouts:{name:'Wolf Scouts',type:'INF',speed:'15cm',armour:'5+',cc:'4+',ff:'5+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Infiltrator','Scout','Teleport']},
		fenrisian_wolves:{name:'Fenrisian Wolves',type:'INF',speed:'20cm',armour:'6+',cc:'4+',ff:'-',weapons:[{name:'Teeth and Claws',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Infiltrator']}
	},
	nameToKey: {
		'tactical':'tactical_marines','tactical marine':'tactical_marines','tactical marines':'tactical_marines','tactical unit':'tactical_marines','tactical units':'tactical_marines','tacticals':'tactical_marines','heavy tactical':'tactical_marines','salamander tactical units':'tactical_marines',
		'assault':'assault_marines','assault marine':'assault_marines','assault marines':'assault_marines','assault unit':'assault_marines','assault units':'assault_marines','assaults':'assault_marines',
		'devastator':'devastators','devastators':'devastators','devastator unit':'devastators','devastator units':'devastators','salamander devastator units':'devastators',
		'sternguard veteran':'sternguard_veterans','vanguard assault veteran':'vanguard_veterans','vanguard veteran':'vanguard_veterans',
		'scout':'scouts','scouts':'scouts','scout unit':'scouts','scout units':'scouts','sniper':'scouts','snipers':'scouts','wolf scout':'wolf_scouts','wolf scouts':'wolf_scouts','wolf scouts pack':'wolf_scouts',
		'terminator':'terminators','terminators':'terminators','terminator unit':'terminators','terminator units':'terminators','wolf guard terminators':'wolf_guard_terminators',
		'vanguard veteran units':'vanguard_veterans','vanguard assault veteran units':'vanguard_veterans','sternguard veteran units':'sternguard_veterans',
		'bike':'bikes','bikes':'bikes','bike unit':'bikes','bike units':'bikes','bike close assault':'bikes','fast attack':'fast_attack','white scars bikes':'bikes','swiftclaw bikes':'bikes','swiftclaw bikes pack':'bikes','attack bike':'attack_bike','attack bikes':'attack_bike','white scar attack bike':'attack_bike','multi melta attack bike':'attack_bike','multi melta attack bikes':'attack_bike','swiftclaw attack bikes':'attack_bike',
		'land speeder':'land_speeder','land speeders':'land_speeder','landspeeder':'land_speeder','landspeeders':'land_speeder','land speeder tornado':'landspeeder_tornado','landspeeder tornado':'landspeeder_tornado',
		'land speeder typhoon':'landspeeder_typhoon','landspeeder typhoon':'landspeeder_typhoon','typhoon':'landspeeder_typhoon','tornado':'landspeeder_tornado',
		'land speeder storm':'landspeeder_storm','land speeder tempest':'landspeeder_tempest',
		'rhino':'rhino','rhinos':'rhino','drop pod':'drop_pod','drop pods':'drop_pod','razorback':'razorback_hb','razorbacks':'razorback_hb','razorback twin heavy bolter':'razorback_hb','razorback hb':'razorback_hb','razorback twin laser cannon':'razorback_lc','razorback twin laser canon':'razorback_lc','razorback twin lascannon':'razorback_lc','razorback las':'razorback_lc',
		'predator':'predator_destructor','predators':'predator_destructor','annihilator':'predator_annihilator','predator annihilator':'predator_annihilator','predator anhinilator':'predator_annihilator','destructor':'predator_destructor','predator destructor':'predator_destructor','predator incinerator':'predator_incinerator',
		'vindicator':'vindicator','vindicators':'vindicator','white scars vindicator':'vindicator','whirlwind':'whirlwind','whirlwinds':'whirlwind','whirlwind battery':'whirlwind','hunter':'hunter',
		'captain':'captain','chaplain':'chaplain','librarian':'librarian','supreme commander':'supreme_commander','techmarine':'techmarine',
		'dreadnought':'dreadnought','dreadnought power fist config':'dreadnought','hellfire dreadnought':'dreadnought_hellfire','dreadnought hellfire config':'dreadnought_hellfire','venerable dreadnought':'venerable_dreadnought','vulcan dreadnought':'vulcan_dreadnought',
		'land raider':'land_raider','land raiders':'land_raider','helios':'land_raider_helios','land raider crusader':'land_raider_crusader','land raider achilles':'land_raider_achilles','land raider redeemer':'land_raider_redeemer','land raider helios':'land_raider_helios','land raider prometheus':'land_raider_prometheus',
		'landing craft':'landing_craft','strike cruiser':'strike_cruiser','battle barge':'battle_barge','spacecraft':'spacecraft',
		'thunderhawk':'thunderhawk','thunderhawk gunship':'thunderhawk','thunderhawk saturation bombing configuration':'thunderhawk_sat','thunderhawk saturation bomber':'thunderhawk_sat','1 thunderhawk saturation bomber':'thunderhawk_sat','thunderhawk close air support configuration':'thunderhawk_cas','thunderhawk sb':'thunderhawk_sat','thunderhawk cas':'thunderhawk_cas','thunderhawk transporters':'thunderhawk_transporter','thunderhawk transporter':'thunderhawk_transporter',
		'thunderbolt fighter':'thunderbolt_fighter','thunderbolt fighters':'thunderbolt_fighter','thunderbolt fighter bombers':'thunderbolt_fighter','thunderbolt fighter bomber':'thunderbolt_fighter','thunderbolt squadron':'thunderbolt_fighter','fighter':'thunderbolt_fighter','fighters':'thunderbolt_fighter',
		'marauder bomber':'marauder_bomber','marauder bombers':'marauder_bomber','marauders bomber':'marauder_bomber','marauders bombers':'marauder_bomber','maurader bomber':'marauder_bomber','maurader bombers':'marauder_bomber','marauder squadron':'marauder_bomber','bomber':'marauder_bomber','bombers':'marauder_bomber',
		'storm talon':'storm_talon_gunship','storm talons':'storm_talon_gunship','2 storm talons':'storm_talon_gunship','storm talon gunship':'storm_talon_gunship','storm talon squadron':'storm_talon_gunship','storm eagle':'storm_eagle',
		'thunderfire battery':'thunderfire_cannon','thunderfire cannon':'thunderfire_cannon','thunderfire cannons':'thunderfire_cannon','rapier':'rapier','thudd gun':'thudd_gun','centurion':'centurion','assault centurion':'centurion','devastator centurion':'centurion','fortified positions':'fortified_positions','minefield or trenches':'fortified_positions','cm minefield or trenches':'fortified_positions','2 bunkers minefields':'bunkers_minefields','2 bunkers trenches':'bunkers_trenches','bunkers':'bunkers_trenches','hyperios platforms':'hyperios_platform','hyperios platform':'hyperios_platform','fighter squadron':'thunderbolt_fighter','bomber squadron':'marauder_bomber','tarantula sentry guns':'tarantula_sentry_gun','tarantula sentry gun':'tarantula_sentry_gun','tarantulas':'tarantula_sentry_gun','emplacements':'emplacement','emplacement':'emplacement','tarantula emplacement':'tarantula_and_emplacement','fellblade':'fellblade','bastion':'bastion','ambush':'ambush','planetfall':'planetfall',
		'warhound':'warhound_titan','warhound pack':'warhound_titan','warhound class titan':'warhound_titan','reaver':'reaver_titan','reaver class titan':'reaver_titan','warlord':'warlord_titan','warlord class titan':'warlord_titan','warlord class titan deathstrike configuration':'warlord_titan',
		'blood claws':'blood_claws','blood claws pack':'blood_claws','great company':'grey_hunters','grey hunter':'grey_hunters','grey hunters':'grey_hunters','long fangs':'long_fangs','long fangs pack':'long_fangs','skyclaws':'sky_claws','sky claws':'sky_claws','skyclaws assault':'sky_claws','skyclaws assault pack':'sky_claws','fenrisian wolves':'fenrisian_wolves','supreme commander in land raider':'supreme_commander_in_land_raider','supreme commander in prometheus':'supreme_commander_in_prometheus','4 land raiders or redeemers':'land_raiders_or_redeemers'
	}
};

ArmyforgeUnitProfiles.normalizeSpaceMarineListName = function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\b(one|two|three|four|five|six)\b/g, '')
		.replace(/\bplus transport\b/g, '')
		.replace(/\btransport\b/g, '')
		.replace(/\b(detachment|detachments|pack)\b/g, '')
		.replace(/\b(space marine|space wolves|salamander|salamanders|white scar|white scars)\b/g, '')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.findSmScionsOfIronProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.smScionsOfIron.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeSpaceMarineListName(displayName);
	var key = ArmyforgeUnitProfiles.smScionsOfIron.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.smScionsOfIron.profiles[key] || null;
};

