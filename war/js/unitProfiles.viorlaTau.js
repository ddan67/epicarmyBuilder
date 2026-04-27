// Source: war/source-json/tau-viorla.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.viorlaTau = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: ['XENOS_tau_Viorla_NETEA'],
	profiles: {
		shaso_supreme_commander:{name:'Shas’O Supreme Commander',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Experimental Weapons',range:'30cm',firepower:'AP4+',notes:[]}],abilities:['Supreme Commander','Coordinated Fire','Invulnerable Save']},
		shasel_commander:{name:'Shas’el Commander',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Character','Commander','Leader','Coordinated Fire']},
		fireblade:{name:'Fireblade',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Experimental Weapons',range:'30cm',firepower:'AP4+',notes:[]}],abilities:['Character','Inspiring','Leader','Coordinated Fire']},
		ethereal:{name:'Ethereal',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Honour Blade',range:'(base contact)',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Invulnerable Save','Leader','All units in a formation joined by an Ethereal gain Fearless. If the Ethereal is killed then all these units lose Fearless and the formation receives an additional D3 blast markers.']},
		fire_warrior_breachers:{name:'Fire Warrior Breachers',type:'INF',speed:'15cm',armour:'5+',cc:'6+',ff:'4+',weapons:[{name:'2x Pulse Blasters',range:'15cm',firepower:'AP4+',notes:[]}],abilities:[]},
		pathfinders:{name:'Pathfinders',type:'INF',speed:'15cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Rail Rifles',range:'30cm',firepower:'AP5+',notes:['Sniper']},{name:'Pulse Carbines',range:'15cm',firepower:'AP5+',notes:['Disrupt']}],abilities:['Scout','Markerlights','Coordinated Fire']},
		devilfish:{name:'Devilfish',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Burst Cannon and Drones',range:'15cm',firepower:'AP5+',notes:[]},{name:'Seeker Missiles',range:'90cm',firepower:'AT6+',notes:['Guided Missiles']}],abilities:['Skimmer','Transport (may carry two of either Fire Warrior Breachers or Pathfinders)']},
		skyray_missile_defence_gunship:{name:'Skyray Missile Defence Gunship',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Smart Missile System',range:'30cm',firepower:'AP5+',notes:['Ignore Cover']},{name:'2x Hunter Missiles',range:'60cm',firepower:'AA5+',notes:[]},{name:'2x Seeker Missiles',range:'90cm',firepower:'AT6+',notes:['Guided Missiles']}],abilities:['Markerlights','Skimmer']},
		viorla_xv8_crisis_battlesuit:{name:'Vior’la XV8 Crisis Battlesuit',type:'INF',speed:'20cm',armour:'3+',cc:'5+',ff:'4+',weapons:[{name:'Twin Linked Flamer',range:'15cm',firepower:'AP4+',notes:['Ignore Cover']},{name:'Twin Plasma Rifles',range:'30cm',firepower:'AP4+/AT6+',notes:[]},{name:'Twin Fusion Blasters',range:'15cm',firepower:'MW4+',notes:['MW']}],abilities:['Invulnerable Save','Tau Jet Packs']},
		xv88_broadside_battlesuit:{name:'XV88 Broadside Battlesuit',type:'LV',speed:'15cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Twin Railguns',range:'60cm',firepower:'AT3+',notes:[]},{name:'Smart Missile System',range:'30cm',firepower:'AP5+',notes:['Ignore Cover']}],abilities:['Reinforced Armour','Walker']},
		xv15_stealth_battlesuit:{name:'XV15 Stealth Battlesuit',type:'INF',speed:'20cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Silenced Burst Cannons',range:'15cm',firepower:'AP4+',notes:['Disrupt']}],abilities:['Scout','Markerlights','First Strike','Teleport','Reinforced Armour','Tau Jet Packs']},
		xv95_ghostkeel_battlesuit:{name:'XV95 Ghostkeel Battlesuit',type:'AV',speed:'15cm',armour:'4+',cc:'6+',ff:'4+',weapons:[{name:'Twin Fusion Blasters',range:'15cm',firepower:'MW4+',notes:['MW']},{name:'Cyclic Ion Raker',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:['Walker','First Strike','Teleport','Reinforced Armour','Tau Jet Packs']},
		xv104_riptide_battlesuit:{name:'XV104 Riptide Battlesuit',type:'WE',speed:'25cm',armour:'3+',cc:'5+',ff:'4+',weapons:[{name:'Ion Accelerator',range:'45cm',firepower:'MW3+',notes:['MW']},{name:'2x Twin Missile Pods',range:'45cm',firepower:'AP5+/AT6+',notes:[]},{name:'Velocity Tracker',range:'30cm',firepower:'AA6+',notes:[]}],abilities:['Tau Deflector Shield','Walker','Thick Rear Armour','Tau Jet Packs','Damage Capacity 2','Critical Effect: Destroyed, any units within 5cm take a hit on a 6+.']},
		xv107_rvarna_battlesuit:{name:'XV107 R’Varna Battlesuit',type:'WE',speed:'20cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'2x Pulse Submunition Cannon',range:'45cm',firepower:'2x AP3+/AT5+',notes:[]}],abilities:['Invulnerable Save','Walker','Reinforced Armour','Thick Rear Armour','Damage Capacity 2','Critical Effect: Destroyed, any units within 5cm take a hit on a 6+.']},
		xv109_yvahra_battlesuit:{name:'XV109 Y’vahra Battlesuit',type:'WE',speed:'25cm',armour:'3+',cc:'5+',ff:'4+',weapons:[{name:'Plasma Flamer',range:'15cm',firepower:'MW4+',notes:['MW','TK(1)','Ignore Cover']},{name:'Plasma Flamer',range:'(15cm)',firepower:'Small Arms',notes:['MW','EA(+1)']},{name:'EMP Discharge Cannon',range:'15cm',firepower:'AT4+',notes:['Disrupt']}],abilities:['Tau Deflector Shield','Walker','Thick Rear Armour','Tau Jet Packs','Damage Capacity 2','Critical Effect: Destroyed, any units within 5cm take a hit on a 6+.']},
		kx128_stormsurge_battlesuit:{name:'KX128 Stormsurge Battlesuit',type:'WE',speed:'15cm',armour:'3+',cc:'5+',ff:'5+',weapons:[{name:'Pulse Driver Cannon',range:'75cm',firepower:'MW3+',notes:['MW']},{name:'2x Destroyer Missiles',range:'90cm',firepower:'AT5+',notes:['Guided Missiles']},{name:'Burst Cannon and Drones',range:'15cm',firepower:'AP5+',notes:[]}],abilities:['Tau Deflector Shield','Walker','Damage Capacity 2','Critical Effect: Destroyed, any units within 5cm take a hit on a 6+.']},
		kx139_supremacy_suit:{name:'KX139 Supremacy Suit',type:'WE',speed:'15cm',armour:'3+',cc:'5+',ff:'5+',weapons:[{name:'2x Seeker Missiles',range:'90cm',firepower:'AT6+',notes:['Guided Missiles']},{name:'Heavy Rail Cannon',range:'90cm',firepower:'MW2+',notes:['MW','TK(D3)']},{name:'Nexus Missile Array',range:'90cm',firepower:'3x MW5+',notes:['MW','Guided Missiles']},{name:'Pulse Ordnance Multi Driver',range:'45cm',firepower:'3BP',notes:['Ind']}],abilities:['Tau Deflector Shield','Walker','Damage Capacity 3','Critical Effect: Destroyed, any units within 5cm take a hit on a 6+.']},
		gun_drones:{name:'Gun Drones',type:'INF',speed:'20cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Pulse Carbines',range:'15cm',firepower:'AP4+',notes:['Disrupt']}],abilities:['Tau Jet Packs']},
		razorshark_fighter:{name:'Razorshark Fighter',type:'AC',speed:'Fighter',armour:'6+',cc:'n/a',ff:'n/a',weapons:[{name:'Quad Ion Turret',range:'30cm',firepower:'AP4+/AT5+/AA5+',notes:['FA']},{name:'Twin Burst Cannons',range:'15cm',firepower:'AA6+',notes:[]}],abilities:[]},
		sunshark_bomber:{name:'Sunshark Bomber',type:'AC',speed:'Bomber',armour:'4+',cc:'n/a',ff:'n/a',weapons:[{name:'Pulse Bomb Generator',range:'15cm',firepower:'2BP',notes:['FxF']},{name:'Twin Missile Pods',range:'45cm',firepower:'AP5+/AT6+',notes:['FxF']},{name:'Twin Burst Cannons',range:'15cm',firepower:'AA6+',notes:[]}],abilities:[]},
		viorla_orca_dropship:{name:'Vior’la Orca Dropship',type:'AC/WE',speed:'Bomber',armour:'4+',cc:'6+',ff:'6+',weapons:[{name:'Twin Burst Cannons',range:'15cm',firepower:'AA6+',notes:[]},{name:'Twin Missile Pods',range:'45cm',firepower:'AP5+/AT6+',notes:[]},{name:'Aircraft Seeker Missiles',range:'45cm',firepower:'AT6+',notes:['Guided Missiles']}],abilities:['Planetfall','Transport (up to 12 of the following: Vior’la Fire Warriors, Pathfinders, Broadsides, Stealth suits, Gun Drones, Ghostkeels, Crisis Suits; Ghostkeels and Crisis Suits take up 2 slots each)','Damage Capacity 2','Critical Effect: The Orca and any transported units are destroyed.']},
		protector_ii_class_cruiser:{name:'Protector II Class Cruiser',type:'SC',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'2x Pinpoint Attack',range:'n/a',firepower:'MW2+',notes:['MW','TK(D3)']},{name:'1x Gravitic Tracer Salvo',range:'n/a',firepower:'3x MW3+',notes:['MW','Guided Missiles']}],abilities:['Transport. May transport three of the following units and the units being transported on them: Orca, Manta; Manta counts as three units each.','The Gravitic Tracer Salvo may be fired at a marked formation of any type.']},
		manta:{name:'Manta',type:'WE',speed:'20cm',armour:'5+',cc:'-',ff:'4+',weapons:[{name:'2x Heavy Rail Cannons',range:'90cm',firepower:'MW3+',notes:['MW','FxF','TK(D3)']},{name:'3x Heavy Ion Phalanx',range:'75cm',firepower:'AP3+/AT4+',notes:['FxF']},{name:'4x Twin Manta Burst Cannons',range:'30cm',firepower:'AP5+/AA6+',notes:[]},{name:'Twin Missile Pods',range:'45cm',firepower:'AP5+/AT6+',notes:['FxF']},{name:'2x Seeker Missiles',range:'90cm',firepower:'AT6+',notes:['Guided Missiles']}],abilities:['Damage Capacity 8','Deflector Shield','Fearless','Markerlights','Planetfall','Reinforced Armour','Support Craft','Transport. May transport 20 infantry units or Broadside Battlesuits; plus four armoured vehicle or light vehicle units (except Broadside Battlesuits); Tetra count as one-third unit each, rounding up. Crisis Battlesuits and Ghostkeels count as two units each. Heavy Battlesuits count as four units each.','Critical Effect: The unit loses Tau Deflector Shield, subsequent critical hits cause an extra point of damage.']},
		bonded_team:{name:'Bonded Team',type:'Formation',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[],abilities:['Formation counts as having an additional leader and removes one additional blast marker when rallying or regrouping; this ability is not tied to any one unit in the formation.']}
	},
	aliases: {
		'fire warrior breacher cadre':'fire_warrior_breachers',
		'fire warrior breachers':'fire_warrior_breachers',
		'vior la fire warriors':'fire_warrior_breachers',
		'viorla fire warriors':'fire_warrior_breachers',
		'fire warrior breacher units':'fire_warrior_breachers',
		'fire warriors':'fire_warrior_breachers',
		'pathfinders':'pathfinders',
		'pathfinder group':'pathfinders',
		'pathfinder':'pathfinders',
		'vior la xv8 crisis suit formation':'viorla_xv8_crisis_battlesuit',
		'vior la xv8 crisis suit cadre':'viorla_xv8_crisis_battlesuit',
		'viorla xv8 crisis suit formation':'viorla_xv8_crisis_battlesuit',
		'viorla xv8 crisis suit cadre':'viorla_xv8_crisis_battlesuit',
		'crisis suit formation':'viorla_xv8_crisis_battlesuit',
		'crisis suits':'viorla_xv8_crisis_battlesuit',
		'6 xv8 crisis battlesuit':'viorla_xv8_crisis_battlesuit',
		'7 xv8 crisis battlesuit':'viorla_xv8_crisis_battlesuit',
		'8 xv8 crisis battlesuit':'viorla_xv8_crisis_battlesuit',
		'xv8 viorla crisis suits':'viorla_xv8_crisis_battlesuit',
		'xv104 riptide':'xv104_riptide_battlesuit',
		'riptide':'xv104_riptide_battlesuit',
		'xv107 r varna':'xv107_rvarna_battlesuit',
		'xv107 rvarna':'xv107_rvarna_battlesuit',
		'xv107 r varna battlesuit':'xv107_rvarna_battlesuit',
		'r varna':'xv107_rvarna_battlesuit',
		'rvarna':'xv107_rvarna_battlesuit',
		'xv109 y vahra':'xv109_yvahra_battlesuit',
		'xv109 yvahra':'xv109_yvahra_battlesuit',
		'y vahra':'xv109_yvahra_battlesuit',
		'yvahra':'xv109_yvahra_battlesuit',
		'kv128 stormsurge formation':'kx128_stormsurge_battlesuit',
		'kv128 stormsurge':'kx128_stormsurge_battlesuit',
		'kx128 stormsurge':'kx128_stormsurge_battlesuit',
		'stormsurge':'kx128_stormsurge_battlesuit',
		'kv139 supremacy formation':'kx139_supremacy_suit',
		'kv139 supremacy':'kx139_supremacy_suit',
		'kx139 supremacy':'kx139_supremacy_suit',
		'kx139 taunar supremacy':'kx139_supremacy_suit',
		'supremacy suit':'kx139_supremacy_suit',
		'xv88 broadside':'xv88_broadside_battlesuit',
		'xv88 broadside battlesuit units':'xv88_broadside_battlesuit',
		'3 xv88 broadside battlesuits':'xv88_broadside_battlesuit',
		'6 xv88 broadside battlesuits':'xv88_broadside_battlesuit',
		'broadside':'xv88_broadside_battlesuit',
		'broadsides':'xv88_broadside_battlesuit',
		'broadside group':'xv88_broadside_battlesuit',
		'stealth group':'xv15_stealth_battlesuit',
		'xv15 stealth battlesuit units':'xv15_stealth_battlesuit',
		'xv15 stealthsuit':'xv15_stealth_battlesuit',
		'xv15 stealthsuit unit':'xv15_stealth_battlesuit',
		'stealthsuit':'xv15_stealth_battlesuit',
		'stealth suits':'xv15_stealth_battlesuit',
		'xv95 ghostkeel':'xv95_ghostkeel_battlesuit',
		'xv95 ghostkeel battlesuit unit':'xv95_ghostkeel_battlesuit',
		'ghostkeel':'xv95_ghostkeel_battlesuit',
		'ghostkeels':'xv95_ghostkeel_battlesuit',
		'razorshark squadron':'razorshark_fighter',
		'razorshark fighter':'razorshark_fighter',
		'razorshark fighters':'razorshark_fighter',
		'razorshark strike fighters':'razorshark_fighter',
		'sunshark squadron':'sunshark_bomber',
		'sun shark squadron':'sunshark_bomber',
		'sunshark bomber':'sunshark_bomber',
		'sunshark bombers':'sunshark_bomber',
		'sun shark bombers':'sunshark_bomber',
		'vior la assault orca':'viorla_orca_dropship',
		'viorla assault orca':'viorla_orca_dropship',
		'orca dropship':'viorla_orca_dropship',
		'orca':'viorla_orca_dropship',
		'spacecraft':'protector_ii_class_cruiser',
		'protector ii class cruiser':'protector_ii_class_cruiser',
		'protector class ii cruiser':'protector_ii_class_cruiser',
		'manta dropship':'manta',
		'manta':'manta',
		'shas o supreme commander':'shaso_supreme_commander',
		'shas o':'shaso_supreme_commander',
		'shaso':'shaso_supreme_commander',
		'shas o commander':'shaso_supreme_commander',
		'shaso commander':'shaso_supreme_commander',
		'shas el':'shasel_commander',
		'shasel':'shasel_commander',
		'shas el commander':'shasel_commander',
		'fireblade':'fireblade',
		'cadre fireblade':'fireblade',
		'ethereal':'ethereal',
		'skyray missile defence gunship':'skyray_missile_defence_gunship',
		'skyray':'skyray_missile_defence_gunship',
		'gun drones':'gun_drones',
		'gun drone':'gun_drones',
		'2 gun drones':'gun_drones',
		'drone':'gun_drones',
		'drones':'gun_drones',
		'devilfish':'devilfish',
		'bonded team':'bonded_team',
		'bonded teams':'bonded_team',
		'heavy rail cannon':'kx139_supremacy_suit',
		'nexus missile array':'kx139_supremacy_suit',
		'pulse ordnance multi driver':'kx139_supremacy_suit',
		'pulse ordinance multi driver':'kx139_supremacy_suit',
		'pulse ordanance multi driver':'kx139_supremacy_suit'
	}
});

ArmyforgeUnitProfiles.findViorlaTauProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.viorlaTau.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName)
		.replace(/\bkv128\b/g, 'kx128')
		.replace(/\bkv139\b/g, 'kx139')
		.replace(/\bordinance\b/g, 'ordnance')
		.replace(/\bordanance\b/g, 'ordnance')
		.replace(/\bmissle\b/g, 'missile')
		.replace(/\br varna\b/g, 'rvarna')
		.replace(/\by vahra\b/g, 'yvahra')
		.replace(/\bta unar\b/g, 'taunar');
	var key = ArmyforgeUnitProfiles.viorlaTau.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.viorlaTau.profiles[key] || null;
};
