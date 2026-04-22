// Source: https://tp.net-armageddon.org/army-lists/ork-feral-orks.html

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.orkFeralOrks = {
	armyId: 'ORK_feral_NETEA',
	profiles: {
		warlord: {name:'Warlord', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Big Choppa', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Supreme Commander']},
		boyz: {name:'Boyz', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]}], abilities:[]},
		grotz: {name:'Grotz', type:'INF', speed:'15cm', armour:'-', cc:'6+', ff:'6+', weapons:[{name:'Shootas', range:'15cm', firepower:'Small Arms', notes:[]}], abilities:['Expendable']},
		nobz: {name:'Nobz', type:'INF', speed:'15cm', armour:'4+', cc:'3+', ff:'5+', weapons:[{name:'2× Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Big Choppas', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)']}], abilities:['Leader']},
		wildboyz: {name:'Wildboyz', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Choppas and Shootas', range:'15cm', firepower:'Small Arms', notes:[]}], abilities:['Infiltrator']},
		boarboyz: {name:'Boarboyz', type:'INF', speed:'20cm', armour:'5+', cc:'4+', ff:'6+', weapons:[{name:'Shootas', range:'15cm', firepower:'Small Arms', notes:[]}], abilities:['Infiltrator','Mounted']},
		madboyz: {name:'Madboyz', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Shootas', range:'15cm', firepower:'Small Arms', notes:[]}], abilities:['Fearless']},
		squig_katapult: {name:'Squig Katapult', type:'INF', speed:'10cm', armour:'-', cc:'6+', ff:'5+', weapons:[{name:'Squig Katapult', range:'45cm', firepower:'1BP', notes:['D']}], abilities:[]},
		squiggoth: {name:'Squiggoth', type:'LV', speed:'20cm', armour:'4+', cc:'4+', ff:'5+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]},{name:'Massive Tusks', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Reinforced Armour','Thick Rear Armour','Transport']},
		wyrdboy: {name:'Wyrdboy', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Fist of Gork', range:'45cm', firepower:'MW5+/AA5+', notes:['MW']}], abilities:['Psyker']},
		orkeosaurus: {name:'Orkeosaurus', type:'WE', speed:'15cm', armour:'4+', cc:'4+', ff:'5+', weapons:[{name:'Massive Jaws', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','TK(D3)']},{name:'Krew Big Gunz', range:'45cm', firepower:'2× AP5+/AT5+', notes:[]}], abilities:['Damage Capacity 6','Reinforced Armour','Thick Rear Armour','Transport']},
		junka_trukks: {name:'Junka Trukks', type:'AV', speed:'30cm', armour:'5+', cc:'6+', ff:'6+', weapons:[{name:'Rokkit Launcha', range:'30cm', firepower:'AT6+', notes:[]}], abilities:['Transport']},
		steam_gargant: {name:'Steam Gargant', type:'WE', speed:'15cm', armour:'4+', cc:'3+', ff:'3+', weapons:[{name:'Steam Belcha', range:'15cm', firepower:'AP4+', notes:['IC']},{name:'Gargant Klaw', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','TK(D3)']}], abilities:['Damage Capacity 8','Fearless','Reinforced Armour','Walker']}
	},
	nameToKey: {
		'warlord':'warlord','boyz':'boyz','boyz optional grotz':'boyz','grotz':'grotz','nobz':'nobz',
		'wildboyz':'wildboyz','two wildboyz units':'wildboyz','boarboyz':'boarboyz','madboyz':'madboyz',
		'squig katapult':'squig_katapult','squiggoth':'squiggoth','wyrdboy':'wyrdboy','orkeosaurus':'orkeosaurus',
		'junka trukks':'junka_trukks','junka trukk':'junka_trukks','steam gargant':'steam_gargant',
		'warband':'boyz','warband big':'boyz','warband uge':'boyz',
		'wildboyz big':'wildboyz','wildboyz uge':'wildboyz',
		'boarboyz horde':'boarboyz','boarboyz horde big':'boarboyz','boarboyz horde uge':'boarboyz',
		'madboyz horde':'madboyz','junka brigade':'junka_trukks','junka brigade big':'junka_trukks','trappas':'wildboyz'
	}
};

ArmyforgeUnitProfiles.findOrkFeralOrksProfileByName = function(displayName) {
	if (!displayName) {
		return null;
	}
	var normalized = displayName.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').strip();
	var key = ArmyforgeUnitProfiles.orkFeralOrks.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.orkFeralOrks.profiles[key] || null;
};
