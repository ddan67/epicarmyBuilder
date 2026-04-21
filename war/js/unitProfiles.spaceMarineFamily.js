// Sources:
// - https://tp.net-armageddon.org/army-lists/space-marine-codex-astartes.html
// - https://tp.net-armageddon.org/army-lists/space-marine-imperial-fists.html
// - https://tp.net-armageddon.org/army-lists/space-marine-raven-guard.html
// - https://tp.net-armageddon.org/army-lists/space-marine-salamanders.html
// - https://tp.net-armageddon.org/army-lists/space-marine-scions-of-iron.html
// - https://tp.net-armageddon.org/army-lists/space-marine-space-wolves.html
// - https://tp.net-armageddon.org/army-lists/space-marine-white-scars.html

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.spaceMarineFamily = {
	profiles: {
		tactical_marines:{name:'Tactical Marines',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Bolters',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:[]},
		assault_marines:{name:'Assault Marines',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Bolt Pistols',range:'15cm',firepower:'Small Arms',notes:[]},{name:'Chainswords',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Jump Packs']},
		devastators:{name:'Devastators',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Heavy Weapons',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		scouts:{name:'Scouts',type:'INF',speed:'15cm',armour:'5+',cc:'5+',ff:'4+',weapons:[{name:'Bolters',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:['Scout']},
		terminators:{name:'Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Storm Bolters',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Teleport']},
		sternguard_veterans:{name:'Sternguard Veterans',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'3+',weapons:[{name:'Special Issue Bolters',range:'30cm',firepower:'AP4+/AT6+',notes:[]}],abilities:[]},
		vanguard_veterans:{name:'Vanguard Veterans',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'4+',weapons:[{name:'Power Weapons',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Jump Packs']},
		bikes:{name:'Bike Unit',type:'INF',speed:'35cm',armour:'4+',cc:'4+',ff:'5+',weapons:[{name:'Twin Bolters',range:'15cm',firepower:'AP5+/AT6+',notes:[]}],abilities:['Mounted']},
		attack_bike:{name:'Attack Bike',type:'INF',speed:'35cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]},{name:'Multi-melta',range:'15cm',firepower:'AT4+',notes:['MW']}],abilities:['Mounted']},
		land_speeder:{name:'Land Speeder',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Skimmer']},
		landspeeder_tornado:{name:'Land Speeder Tornado',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT6+',notes:[]}],abilities:['Skimmer']},
		landspeeder_typhoon:{name:'Land Speeder Typhoon',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Typhoon Missile Launcher',range:'45cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Skimmer']},
		landspeeder_storm:{name:'Land Speeder Storm',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Heavy Flamer',range:'15cm',firepower:'AP4+',notes:['IC']}],abilities:['Skimmer','Transport']},
		landspeeder_tempest:{name:'Land Speeder Tempest',type:'LV',speed:'35cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'Tempest Launcher',range:'45cm',firepower:'2BP',notes:['Ind']}],abilities:['Skimmer']},
		rhino:{name:'Rhino',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Storm Bolter',range:'15cm',firepower:'AP6+/AT6+',notes:[]}],abilities:['Transport']},
		razorback_hb:{name:'Razorback (Twin Heavy Bolter)',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Transport']},
		razorback_lc:{name:'Razorback (Twin Laser Cannon)',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]}],abilities:['Transport']},
		predator_annihilator:{name:'Predator Annihilator',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]}],abilities:[]},
		predator_destructor:{name:'Predator Destructor',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Autocannon',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		predator_incinerator:{name:'Predator Incinerator',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Flame Cannon',range:'30cm',firepower:'AP4+',notes:['IC']}],abilities:[]},
		vindicator:{name:'Vindicator',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Demolisher Cannon',range:'30cm',firepower:'AP3+/AT4+',notes:['IC']}],abilities:[]},
		whirlwind:{name:'Whirlwind',type:'AV',speed:'25cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Whirlwind Missile Launcher',range:'60cm',firepower:'1BP',notes:['Ind']}],abilities:[]},
		hunter:{name:'Hunter',type:'AV',speed:'25cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Hunter-Killer Missiles',range:'45cm',firepower:'AA4+',notes:[]}],abilities:[]},
		dreadnought:{name:'Dreadnought',type:'AV',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT6+',notes:[]},{name:'Power Fist',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Walker']},
		dreadnought_hellfire:{name:'Dreadnought (Hellfire config.)',type:'AV',speed:'15cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Hellfire Missiles',range:'45cm',firepower:'1BP',notes:['Ind']}],abilities:['Walker']},
		land_raider:{name:'Land Raider',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Twin Lascannon',range:'45cm',firepower:'AT4+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Reinforced Armour','Transport']},
		land_raider_crusader:{name:'Land Raider Crusader',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Hurricane Bolters',range:'30cm',firepower:'AP5+',notes:[]},{name:'Assault Cannon',range:'30cm',firepower:'AP5+/AT6+',notes:[]}],abilities:['Reinforced Armour','Transport']},
		land_raider_achilles:{name:'Land Raider Achilles',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Thunderfire Cannon',range:'45cm',firepower:'1BP',notes:['Ind']}],abilities:['Reinforced Armour','Transport']},
		land_raider_redeemer:{name:'Land Raider Redeemer',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Flamestorm Cannons',range:'15cm',firepower:'AP3+',notes:['IC']}],abilities:['Reinforced Armour','Transport']},
		land_raider_helios:{name:'Land Raider Helios',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Helios Missile Launcher',range:'60cm',firepower:'1BP / AA5+',notes:['Ind']}],abilities:['Reinforced Armour','Transport']},
		land_raider_prometheus:{name:'Land Raider Prometheus',type:'AV',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Quad Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Reinforced Armour','Transport','Commander']},
		thunderhawk:{name:'Thunderhawk',type:'AC/WE',speed:'n/a',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Battle Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:['FxF']}],abilities:['Damage Capacity 2','Planetfall','Transport']},
		thunderhawk_sat:{name:'Thunderhawk (Saturation Bombing configuration)',type:'AC/WE',speed:'n/a',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Bomb Racks',range:'15cm',firepower:'3BP',notes:['FxF']}],abilities:['Damage Capacity 2','Planetfall','Transport']},
		thunderhawk_cas:{name:'Thunderhawk (Close Air Support configuration)',type:'AC/WE',speed:'n/a',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Close Air Support Weapons',range:'30cm',firepower:'AP4+/AT5+',notes:['FxF']}],abilities:['Damage Capacity 2','Planetfall','Transport']},
		thunderfire_cannon:{name:'Thunderfire Cannon',type:'INF',speed:'10cm',armour:'-',cc:'6+',ff:'5+',weapons:[{name:'Thunderfire',range:'45cm',firepower:'1BP',notes:['Ind']}],abilities:[]},
		rapier:{name:'Rapier',type:'INF',speed:'10cm',armour:'-',cc:'6+',ff:'5+',weapons:[{name:'Laser Destroyer',range:'45cm',firepower:'AP6+/AT4+',notes:[]}],abilities:[]},
		fellblade:{name:'Fellblade',type:'WE',speed:'25cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Fellblade Cannon',range:'75cm',firepower:'AP4+/AT4+',notes:[]}],abilities:['Damage Capacity 2','Reinforced Armour']},
		bastion:{name:'Bastion',type:'Fortification',speed:'n/a',armour:'4+',cc:'n/a',ff:'5+',weapons:[{name:'Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Immobile']},
		blood_claws:{name:'Blood Claws',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'5+',weapons:[{name:'Bolt Pistols and Chainswords',range:'15cm/base',firepower:'Small Arms / Assault Weapons',notes:['EA(+1)']}],abilities:[]},
		grey_hunters:{name:'Grey Hunters',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Bolters',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:[]},
		long_fangs:{name:'Long Fangs',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'3+',weapons:[{name:'Heavy Weapons',range:'45cm',firepower:'AP5+/AT6+',notes:[]}],abilities:[]},
		sky_claws:{name:'Sky Claws',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'5+',weapons:[{name:'Bolt Pistols',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:['Jump Packs']},
		wolf_guard_terminators:{name:'Wolf Guard Terminators',type:'INF',speed:'15cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Storm Bolters',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Teleport']},
		wolf_scouts:{name:'Wolf Scouts',type:'INF',speed:'15cm',armour:'5+',cc:'5+',ff:'4+',weapons:[{name:'Bolters',range:'15cm',firepower:'Small Arms',notes:[]}],abilities:['Scout']},
		fenrisian_wolves:{name:'Fenrisian Wolves',type:'INF',speed:'20cm',armour:'6+',cc:'4+',ff:'-',weapons:[{name:'Teeth and Claws',range:'base contact',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Infiltrator']}
	},
	nameToKey: {
		'tactical marines':'tactical_marines','tactical units':'tactical_marines','tacticals':'tactical_marines','salamander tactical units':'tactical_marines',
		'assault marines':'assault_marines','assault units':'assault_marines',
		'devastators':'devastators','devastator units':'devastators','salamander devastator units':'devastators',
		'scouts':'scouts','scout units':'scouts','sniper':'scouts','snipers':'scouts','wolf scouts':'wolf_scouts',
		'terminators':'terminators','terminator units':'terminators','wolf guard terminators':'wolf_guard_terminators',
		'vanguard veteran units':'vanguard_veterans','vanguard assault veteran units':'vanguard_veterans','sternguard veteran units':'sternguard_veterans',
		'bike unit':'bikes','bike':'bikes','white scars bikes':'bikes','attack bike':'attack_bike','white scar attack bike':'attack_bike','multi melta attack bike':'attack_bike',
		'land speeder':'land_speeder','landspeeder':'land_speeder','land speeder tornado':'landspeeder_tornado','landspeeder tornado':'landspeeder_tornado',
		'land speeder typhoon':'landspeeder_typhoon','landspeeder typhoon':'landspeeder_typhoon','typhoon':'landspeeder_typhoon','tornado':'landspeeder_tornado',
		'land speeder storm':'landspeeder_storm','land speeder tempest':'landspeeder_tempest',
		'rhino':'rhino','rhinos':'rhino','razorback':'razorback_hb','razorbacks':'razorback_hb','razorback twin heavy bolter':'razorback_hb','razorback hb':'razorback_hb','razorback twin laser cannon':'razorback_lc','razorback twin laser canon':'razorback_lc','razorback las':'razorback_lc',
		'annihilator':'predator_annihilator','predator annihilator':'predator_annihilator','predator anhinilator':'predator_annihilator','destructor':'predator_destructor','predator destructor':'predator_destructor','predator incinerator':'predator_incinerator',
		'vindicator':'vindicator','white scars vindicator':'vindicator','whirlwind':'whirlwind','whirlwinds':'whirlwind','hunter':'hunter',
		'dreadnought':'dreadnought','dreadnought power fist config':'dreadnought','hellfire dreadnought':'dreadnought_hellfire','dreadnought hellfire config':'dreadnought_hellfire',
		'land raider':'land_raider','land raiders':'land_raider','land raider crusader':'land_raider_crusader','land raider achilles':'land_raider_achilles','land raider redeemer':'land_raider_redeemer','land raider helios':'land_raider_helios','land raider prometheus':'land_raider_prometheus',
		'thunderhawk':'thunderhawk','thunderhawk saturation bombing configuration':'thunderhawk_sat','thunderhawk close air support configuration':'thunderhawk_cas',
		'thunderfire cannon':'thunderfire_cannon','thunderfire cannons':'thunderfire_cannon','rapier':'rapier','fellblade':'fellblade','bastion':'bastion',
		'blood claws':'blood_claws','grey hunters':'grey_hunters','long fangs':'long_fangs','skyclaws':'sky_claws','sky claws':'sky_claws','fenrisian wolves':'fenrisian_wolves'
	}
};

ArmyforgeUnitProfiles.findSpaceMarineFamilyProfileByName = function(displayName) {
	if (!displayName) {
		return null;
	}
	var normalized = displayName.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').strip();
	var key = ArmyforgeUnitProfiles.spaceMarineFamily.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.spaceMarineFamily.profiles[key] || null;
};
