// Source: https://tp.net-armageddon.org/army-lists/ork-war-horde.html

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.orkWarHorde = {
	armyId: 'ORK_ghazgkhull_NETEA',
	profiles: {
		warlord: {name:'Warlord', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Big Choppa', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Supreme Commander']},
		oddboy: {name:'Oddboy', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Supa-Zzap-Gun', range:'60cm', firepower:'MW3+', notes:['TK(D3)','0–1× option']},{name:'Soopagun', range:'60cm', firepower:'2BP', notes:['MW','0–1× option']}], abilities:['Replaces one Big Gun weapon with either a Supa-Zzap-Gun or a Soopagun, or may be given D3 Power Fields.']},
		big_gunz: {name:'Big Gunz', type:'INF', speed:'10cm', armour:'-', cc:'6+', ff:'5+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:[]},
		boyz: {name:'Boyz', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]}], abilities:[]},
		grotz: {name:'Grotz', type:'INF', speed:'15cm', armour:'-', cc:'6+', ff:'6+', weapons:[{name:'Shootas', range:'15cm', firepower:'Small Arms', notes:[]}], abilities:['Expendable']},
		kommandos: {name:'Kommandos', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]}], abilities:['Infiltrator','Scout']},
		nobz: {name:'Nobz', type:'INF', speed:'15cm', armour:'4+', cc:'3+', ff:'5+', weapons:[{name:'2× Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Big Choppas', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)']}], abilities:['Leader']},
		stormboyz: {name:'Stormboyz', type:'INF', speed:'30cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Shootas', range:'15cm', firepower:'Small Arms', notes:[]}], abilities:['Jump Packs','Scout']},
		warbikes: {name:'Warbikes', type:'INF', speed:'35cm', armour:'5+', cc:'4+', ff:'6+', weapons:[{name:'Twin Sawn-Off Big Shoota', range:'15cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Mounted']},
		deth_kopta: {name:'Deth Kopta', type:'LV', speed:'35cm', armour:'4+', cc:'6+', ff:'5+', weapons:[{name:'Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Skimmer']},
		skorcha: {name:'Skorcha', type:'LV', speed:'35cm', armour:'5+', cc:'6+', ff:'4+', weapons:[{name:'Skorcha', range:'15cm', firepower:'AP4+', notes:[]}], abilities:['IC']},
		warbuggy: {name:'Warbuggy', type:'LV', speed:'35cm', armour:'5+', cc:'5+', ff:'5+', weapons:[{name:'Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:[]},
		battlewagon: {name:'Battlewagon', type:'AV', speed:'30cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'2× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Transport','May transport two infantry units without Jump Packs or Mounted; only one may be Big Gunz; plus one unit of Grotz.']},
		dreadnought: {name:'Dreadnought', type:'AV', speed:'15cm', armour:'4+', cc:'4+', ff:'5+', weapons:[{name:'2× Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Kombat Klaws', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Walker']},
		flakwagon: {name:'Flakwagon', type:'AV', speed:'30cm', armour:'5+', cc:'5+', ff:'5+', weapons:[{name:'Flak Gun', range:'30cm', firepower:'2× AP6+/AT6+/AA6+', notes:[]}], abilities:['Transport','May transport one infantry unit without Jump Packs or Mounted.']},
		gunwagon: {name:'Gunwagon', type:'AV', speed:'30cm', armour:'5+', cc:'5+', ff:'5+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Transport','May transport one infantry unit without Jump Packs or Mounted.']},
		killa_kan: {name:'Killa Kan', type:'AV', speed:'15cm', armour:'5+', cc:'5+', ff:'6+', weapons:[{name:'Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Kombat Klaws', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Walker']},
		stompa: {name:'Stompa', type:'AV', speed:'15cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:['2–3×']},{name:'Kombat ’Ammer', range:'30cm / base contact', firepower:'AP5+/AT6+ / Assault Weapons', notes:['EA(+1)','MW','0–1× option']}], abilities:['Reinforced Armour','Walker','Armed with either three Big Guns, or two Big Guns and a Kombat ’Ammer.']},
		battlefortress: {name:'Battlefortress', type:'WE', speed:'30cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'4× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Damage Capacity 3','Transport']},
		gunfortress: {name:'Gunfortress', type:'WE', speed:'30cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'5× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'3× Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Damage Capacity 3','Transport']},
		gargant: {name:'Gargant', type:'WE', speed:'15cm', armour:'4+', cc:'3+', ff:'3+', weapons:[{name:'Gaze of Mork', range:'30cm', firepower:'MW4+', notes:['TK']},{name:'Soopagun', range:'60cm', firepower:'2BP', notes:['FxF','MW','2–3×']},{name:'Supa-Zzap-Gun', range:'60cm', firepower:'MW3+', notes:['FxF','TK(D3)','0–1× option']},{name:'Mega-Choppa', range:'45cm / base contact', firepower:'AP5+/AT5+ / Assault Weapons', notes:['FxF','EA(+1)','TK(D3)','0–1× option']}], abilities:['Damage Capacity 8','Fearless','D3+3 Power Fields','Reinforced Armour','Walker']},
		great_gargant: {name:'Great Gargant', type:'WE', speed:'15cm', armour:'4+', cc:'3+', ff:'3+', weapons:[{name:'Gaze of Mork', range:'30cm', firepower:'MW4+', notes:['TK']},{name:'2× Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]},{name:'Soopagun', range:'60cm', firepower:'2BP', notes:['FxF','MW']},{name:'Twin Soopagun', range:'60cm', firepower:'3BP', notes:['FxF','MW','1–2×']},{name:'Lifta-Droppa', range:'60cm', firepower:'MW3+', notes:['FxF','TK(D3)','0–1× option']},{name:'Close Combat Arms', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','TK(D3)']}], abilities:['Damage Capacity 12','Fearless','D6+6 Power Fields','Reinforced Armour','Walker']},
		supa_stompa: {name:'Supa-Stompa', type:'WE', speed:'15cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'Gaze of Mork', range:'30cm', firepower:'MW4+', notes:['TK']},{name:'Soopagun', range:'60cm', firepower:'2BP', notes:['FxF','MW','2–3×']},{name:'Mega-Choppa', range:'45cm / base contact', firepower:'AP5+/AT5+ / Assault Weapons', notes:['FxF','EA(+1)','TK(D3)','0–1× option']}], abilities:['Damage Capacity 4','Fearless','D3 Power Fields','Reinforced Armour','Walker']},
		fighta_bommer: {name:'Fighta Bommer', type:'AC', speed:'Fighter-Bomber', armour:'6+', cc:'n/a', ff:'n/a', weapons:[{name:'Heavy Shootas', range:'15cm', firepower:'AP5+/AA5+', notes:[]},{name:'Tankbusta Rokkits', range:'30cm', firepower:'AT4+', notes:[]}], abilities:[]},
		landa: {name:'Landa', type:'AC/WE', speed:'Bomber', armour:'5+', cc:'6+', ff:'4+', weapons:[{name:'Gun Turrets', range:'15cm', firepower:'D6+3× AP5+/AA6+', notes:[]},{name:'2× Tankbusta Rokkits', range:'30cm', firepower:'AT4+', notes:['FxF']}], abilities:['Damage Capacity 3','Planetfall','Reinforced Armour','Transport']},
		battlekroozer: {name:'Battlekroozer', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'D6+3BP', notes:['MW']}], abilities:['Slow and Steady','Transport']},
		kill_kroozer: {name:'Kill Kroozer', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'D6+1BP', notes:['MW']}], abilities:[]}
	},
	nameToKey: {
		'warlord':'warlord','oddboy':'oddboy','oddboy with power fields':'oddboy','oddboy with soopagunz':'oddboy','oddboy with supa zzap gun':'oddboy',
		'big gunz':'big_gunz','big gun':'big_gunz','boyz':'boyz','boyz grotz':'boyz','boyz and an optional grotz':'boyz','grotz':'grotz',
		'kommandos':'kommandos','stormboyz':'stormboyz','nobz':'nobz','warbikes':'warbikes','warbike':'warbikes','deth kopta':'deth_kopta','deth koptas':'deth_kopta',
		'skorcha':'skorcha','warbuggy':'warbuggy','warbuggies':'warbuggy','battlewagon':'battlewagon','dreadnought':'dreadnought',
		'flakwagon':'flakwagon','gunwagon':'gunwagon','killa kan':'killa_kan','killa kans':'killa_kan','stompa':'stompa',
		'stompa with 2x big guns and kombat ammer':'stompa','stompa with 3x big guns':'stompa',
		'battlefortress':'battlefortress','gunfortress':'gunfortress','gargant':'gargant','great gargant':'great_gargant',
		'supa stompa':'supa_stompa','supa-stompa':'supa_stompa','supa stompa with 2x soopagunz and mega choppa':'supa_stompa','supa stompa with 3x soopagunz':'supa_stompa',
		'fighta bomma':'fighta_bommer','fighta bomba':'fighta_bommer','fighta bommer':'fighta_bommer','fighta bombers':'fighta_bommer','fighta skwadron':'fighta_bommer',
		'landa':'landa','battlekroozer':'battlekroozer','battle kroozer':'battlekroozer','kill kroozer':'kill_kroozer','kroozer':'kill_kroozer',
		'warband':'boyz','warband big':'boyz','warband uge':'boyz','kommando warhorde':'kommandos','stormboyz warhorde':'stormboyz',
		'kult of speed':'warbikes','kult of speed big':'warbikes','kult of speed uge':'warbikes',
		'blitz brigade':'battlewagon','blitz brigade big':'battlewagon','blitz brigade uge':'battlewagon',
		'mekboy gunzmob':'big_gunz','mekboy gunzmob big':'big_gunz','mekboy gunzmob uge':'big_gunz',
		'mekboy stompamob':'stompa','mekboy stompamob big':'stompa','mekboy stompamob uge':'stompa'
	}
};

ArmyforgeUnitProfiles.findOrkWarHordeProfileByName = function(displayName) {
	if (!displayName) {
		return null;
	}
	var normalized = displayName.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').strip();
	var key = ArmyforgeUnitProfiles.orkWarHorde.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.orkWarHorde.profiles[key] || null;
};
