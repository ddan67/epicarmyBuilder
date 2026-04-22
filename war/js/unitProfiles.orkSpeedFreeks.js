// Source: https://tp.net-armageddon.org/army-lists/ork-speed-freeks.html

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.orkSpeedFreeks = {
	armyId: 'ORK_kult_NETEA',
	profiles: {
		big_gunz: {name:'Big Gunz', type:'INF', speed:'10cm', armour:'-', cc:'6+', ff:'5+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:[]},
		boyz: {name:'Boyz', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]}], abilities:[]},
		mekboy_bad_ork_bikerboy: {name:'Mekboy Bad Ork Bikerboy', type:'INF', speed:'40cm', armour:'5+', cc:'4+', ff:'5+', weapons:[{name:'Sawn-Off Custom Blasta', range:'15cm', firepower:'MW5+', notes:['MW']},{name:'Sawn-Off Custom Blasta', range:'(15cm)', firepower:'Small Arms', notes:['EA(+1)','MW']},{name:'Choppa Blades', range:'(bc)', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Invulnerable Save','Mounted','Supreme Commander']},
		nob_warbikes: {name:'Nob Warbikes', type:'INF', speed:'35cm', armour:'4+', cc:'3+', ff:'5+', weapons:[{name:'2× Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Big Choppas', range:'(bc)', firepower:'Assault Weapons', notes:['EA(+1)']}], abilities:['Leader','Mounted']},
		nobz: {name:'Nobz', type:'INF', speed:'15cm', armour:'4+', cc:'3+', ff:'5+', weapons:[{name:'2× Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Big Choppas', range:'(bc)', firepower:'Assault Weapons', notes:['EA(+1)']}], abilities:['Leader']},
		stormboyz: {name:'Stormboyz', type:'INF', speed:'30cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Shootas', range:'(15cm)', firepower:'Small Arms', notes:[]}], abilities:['Jump Packs','Scout']},
		warbikes: {name:'Warbikes', type:'INF', speed:'35cm', armour:'5+', cc:'4+', ff:'6+', weapons:[{name:'Twin Sawn-Off Big Shoota', range:'15cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Mounted']},
		deth_kopta: {name:'Deth Kopta', type:'LV', speed:'35cm', armour:'4+', cc:'6+', ff:'5+', weapons:[{name:'Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Skimmer']},
		guntrukk: {name:'Guntrukk', type:'LV', speed:'35cm', armour:'5+', cc:'6+', ff:'6+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:[]},
		skorcha: {name:'Skorcha', type:'LV', speed:'35cm', armour:'5+', cc:'6+', ff:'4+', weapons:[{name:'Skorcha', range:'15cm', firepower:'AP4+', notes:['IC']}], abilities:[]},
		warbuggy: {name:'Warbuggy', type:'LV', speed:'35cm', armour:'5+', cc:'5+', ff:'5+', weapons:[{name:'Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:[]},
		warbike_outriders: {name:'Warbike Outriders', type:'INF', speed:'35cm', armour:'5+', cc:'4+', ff:'6+', weapons:[{name:'Twin Sawn-Off Big Shoota', range:'15cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Mounted','Scout']},
		trukk: {name:'Trukk', type:'LV', speed:'35cm', armour:'5+', cc:'6+', ff:'-', weapons:[], abilities:['Transport','May transport one infantry units without Jump Packs or Mounted. With the exception of Big Gunz, transported units do not have to disembark in order to shoot or use their firefight value if this unit is able to shoot, assault or lend support.']},
		battlewagon: {name:'Battlewagon', type:'AV', speed:'30cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'2× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Transport','May transport two infantry units without Jump Packs or Mounted; only one of the two units may be a Big Gunz; plus one unit of Grotz.']},
		flakwagon: {name:'Flakwagon', type:'AV', speed:'30cm', armour:'5+', cc:'5+', ff:'5+', weapons:[{name:'Flak Gun', range:'30cm', firepower:'2× AP6+/AT6+/AA6+', notes:[]}], abilities:['Transport','May transport one infantry unit without Jump Packs or Mounted.']},
		gunwagon: {name:'Gunwagon', type:'AV', speed:'30cm', armour:'5+', cc:'5+', ff:'5+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Transport','May transport one infantry unit without Jump Packs or Mounted.']},
		mekboy_speedsta: {name:'Mekboy Speedsta', type:'AV', speed:'35cm', armour:'5+', cc:'6+', ff:'5+', weapons:[{name:'Kustom Kannon', range:'45cm', firepower:'MW4+', notes:[]}], abilities:['D3 Power Fields']},
		battlefortress: {name:'Battlefortress', type:'WE', speed:'30cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'4× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Damage Capacity 3','Transport','May transport eight infantry units without Jump Packs or Mounted; only one of the eight units may be a Big Gunz; plus four units of Grotz. Critical Hit Effect: Move the unit D6cm in a random direction, all units under it suffer a hit. The unit is destroyed and all units being carried are destroyed unless they roll a 6+.']},
		gunfortress: {name:'Gunfortress', type:'WE', speed:'30cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'5× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'3× Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Damage Capacity 3','Transport','May transport four infantry units without Jump Packs or Mounted; only one of the four units may be a Big Gunz; plus two units of Grotz. Critical Hit Effect: Move the unit D6cm in a random direction, all units under it suffer a hit. The unit is destroyed and all units being carried are destroyed unless they roll a 6+.']},
		fighta_bommer: {name:'Fighta Bommer', type:'AC', speed:'Fighter-Bomber', armour:'6+', cc:'n/a', ff:'n/a', weapons:[{name:'Heavy Shootas', range:'15cm', firepower:'AP5+/AA5+', notes:[]},{name:'Tankbusta Rokkits', range:'30cm', firepower:'AT4+', notes:[]}], abilities:[]},
		landa: {name:'Landa', type:'AC/WE', speed:'Bomber', armour:'5+', cc:'6+', ff:'4+', weapons:[{name:'Gun Turrets', range:'15cm', firepower:'D6+3× AP5+/AA6+', notes:[]},{name:'2× Tankbusta Rokkits', range:'30cm', firepower:'AT4+', notes:['FxF']}], abilities:['Damage Capacity 3','Planetfall','Reinforced Armour','Transport','May transport ten infantry units (except Big Gunz), light vehicle units, Killa Kans or Dreadnoughts; plus four units of Grotz. Light vehicles and Dreadnoughts count as two units each. Critical Hit Effect: The unit and all units being carried are destroyed.']},
		battlekroozer: {name:'Battlekroozer', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'D6+3BP', notes:['MW']}], abilities:['Slow and Steady','Transport','May transport twelve Landas and the units being carried on them.']},
		kill_kroozer: {name:'Kill Kroozer', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'D6+1BP', notes:['MW']}], abilities:[]}
	},
	nameToKey: {
		'big gunz':'big_gunz','big gun':'big_gunz','big guns':'big_gunz',
		'boyz':'boyz',
		'mekboy bad ork bikerboy':'mekboy_bad_ork_bikerboy','mekboy bikerboy':'mekboy_bad_ork_bikerboy','bad ork bikerboy':'mekboy_bad_ork_bikerboy','bikerboy':'mekboy_bad_ork_bikerboy',
		'nob warbikes':'nob_warbikes','nob warbike':'nob_warbikes',
		'nobz':'nobz',
		'stormboyz':'stormboyz','stormboy':'stormboyz',
		'warbikes':'warbikes','warbike':'warbikes',
		'warbike outriders':'warbike_outriders','warbike outrider':'warbike_outriders','warbikes outriders':'warbike_outriders','scout warbikes':'warbike_outriders','scout warbike':'warbike_outriders',
		'deth kopta':'deth_kopta','deth koptas':'deth_kopta',
		'guntrukk':'guntrukk','gun trukk':'guntrukk','gun trukks':'guntrukk',
		'skorcha':'skorcha','skorchas':'skorcha',
		'warbuggy':'warbuggy','war buggies':'warbuggy','warbuggies':'warbuggy',
		'trukk':'trukk','trukks':'trukk',
		'battlewagon':'battlewagon','battlewagons':'battlewagon',
		'flakwagon':'flakwagon','flakwagons':'flakwagon',
		'gunwagon':'gunwagon','gunwagons':'gunwagon',
		'mekboy speedsta':'mekboy_speedsta','speedsta':'mekboy_speedsta',
		'battlefortress':'battlefortress','battlefortresses':'battlefortress',
		'gunfortress':'gunfortress','gunfortresses':'gunfortress',
		'fighta bommer':'fighta_bommer','fighta bomber':'fighta_bommer','fighta bombers':'fighta_bommer','fighta bomma':'fighta_bommer','fighta bomba':'fighta_bommer','fighter bomber':'fighta_bommer','fighter bombers':'fighta_bommer','fighta squadron':'fighta_bommer','fighta sqwadron':'fighta_bommer',
		'landa':'landa',
		'battlekroozer':'battlekroozer','battle kroozer':'battlekroozer',
		'kill kroozer':'kill_kroozer','kroozer':'kill_kroozer'
	}
};

ArmyforgeUnitProfiles.findOrkSpeedFreeksProfileByName = function(displayName) {
	if (!displayName) {
		return null;
	}
	var normalized = displayName.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').strip();
	var key = ArmyforgeUnitProfiles.orkSpeedFreeks.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.orkSpeedFreeks.profiles[key] || null;
};
