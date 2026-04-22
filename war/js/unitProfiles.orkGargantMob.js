// Source: https://tp.net-armageddon.org/army-lists/ork-gargant-mob.html

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.orkGargantMob = {
	armyId: 'ORK_gargant_NETEA',
	profiles: {
		mekboy_big_boss: {name:'Mekboy Big Boss', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Kustom Blastas', range:'(15cm)', firepower:'Small Arms', notes:['EA(+1)','MW']}], abilities:['Supreme Commander']},
		big_gunz: {name:'Big Gunz', type:'INF', speed:'10cm', armour:'-', cc:'6+', ff:'5+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:[]},
		boyz: {name:'Boyz', type:'INF', speed:'15cm', armour:'6+', cc:'4+', ff:'6+', weapons:[{name:'Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]}], abilities:[]},
		grotz: {name:'Grotz', type:'INF', speed:'15cm', armour:'-', cc:'6+', ff:'6+', weapons:[{name:'Shootas', range:'15cm', firepower:'Small Arms', notes:[]}], abilities:['Expendable']},
		nobz: {name:'Nobz', type:'INF', speed:'15cm', armour:'4+', cc:'3+', ff:'5+', weapons:[{name:'2× Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Big Choppas', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)']}], abilities:['Leader']},
		deth_kopta: {name:'Deth Kopta', type:'LV', speed:'35cm', armour:'4+', cc:'6+', ff:'5+', weapons:[{name:'Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]}], abilities:['Skimmer']},
		flakwagon: {name:'Flakwagon', type:'AV', speed:'30cm', armour:'5+', cc:'5+', ff:'5+', weapons:[{name:'Flak Gun', range:'30cm', firepower:'2× AP6+/AT6+/AA6+', notes:[]}], abilities:['Transport']},
		killa_kan: {name:'Killa Kan', type:'AV', speed:'15cm', armour:'5+', cc:'5+', ff:'6+', weapons:[{name:'Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Kombat Klaws', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Walker']},
		dreadnought: {name:'Dreadnought', type:'AV', speed:'15cm', armour:'4+', cc:'4+', ff:'5+', weapons:[{name:'2× Big Shoota', range:'30cm', firepower:'AP6+/AT6+', notes:[]},{name:'Kombat Klaws', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','MW']}], abilities:['Walker']},
		stompa: {name:'Stompa', type:'AV', speed:'15cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:['2–3×']},{name:'Kombat ’Ammer', range:'30cm / base contact', firepower:'AP5+/AT6+ / Assault Weapons', notes:['EA(+1)','MW','0–1× option']}], abilities:['Reinforced Armour','Walker']},
		oddboy: {name:'Oddboy', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Supa-Zzap-Gun', range:'60cm', firepower:'MW3+', notes:['TK(D3)','0–1× option']},{name:'Soopagun', range:'60cm', firepower:'2BP', notes:['MW','0–1× option']}], abilities:['May be given D3 Power Fields.']},
		battlefortress: {name:'Battlefortress', type:'WE', speed:'30cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'4× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Damage Capacity 3','Transport']},
		gunfortress: {name:'Gunfortress', type:'WE', speed:'30cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'5× Twin Big Shoota', range:'30cm', firepower:'AP5+/AT6+', notes:[]},{name:'3× Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:[]}], abilities:['Damage Capacity 3','Transport']},
		gargant: {name:'Gargant', type:'WE', speed:'15cm', armour:'4+', cc:'3+', ff:'3+', weapons:[{name:'Gaze of Mork', range:'30cm', firepower:'MW4+', notes:['TK']},{name:'Soopagun', range:'60cm', firepower:'2BP', notes:['MW']},{name:'Supa-Zzap-Gun', range:'60cm', firepower:'MW3+', notes:['TK(D3)']},{name:'Mega-Choppa', range:'45cm / base contact', firepower:'AP5+/AT5+ / Assault Weapons', notes:['EA(+1)','TK(D3)']}], abilities:['Damage Capacity 8','Fearless','D3+3 Power Fields','Reinforced Armour','Walker']},
		great_gargant: {name:'Great Gargant', type:'WE', speed:'15cm', armour:'4+', cc:'3+', ff:'3+', weapons:[{name:'Gaze of Mork', range:'30cm', firepower:'MW4+', notes:['TK']},{name:'Twin Soopagun', range:'60cm', firepower:'3BP', notes:['MW']},{name:'Lifta-Droppa', range:'60cm', firepower:'MW3+', notes:['TK(D3)']},{name:'Close Combat Arms', range:'base contact', firepower:'Assault Weapons', notes:['EA(+1)','TK(D3)']}], abilities:['Damage Capacity 12','Fearless','D6+6 Power Fields','Reinforced Armour','Walker']},
		mega_gargant: {name:'Mega Gargant', type:'WE', speed:'15cm', armour:'5+', cc:'3+', ff:'4+', weapons:[{name:'Gaze of Mork', range:'30cm', firepower:'MW4+', notes:['TK']},{name:'Mega-Cannon', range:'75cm', firepower:'3BP', notes:['FxF','MW']},{name:'7x Soopagun', range:'60cm', firepower:'2BP', notes:['FxF','MW']},{name:'2x Krooz Missile', range:'Unlimited', firepower:'MW3+', notes:['Ind','SS','TK(D3)']},{name:'Supa-Zzap-Gun', range:'60cm', firepower:'MW3+', notes:['FxF','TK(D3)']},{name:'Supa-Lifta-Droppa', range:'45cm', firepower:'MW4+', notes:['FxF','TK(D6)']},{name:'Fist of Gork', range:'45cm', firepower:'MW5+/AA5+', notes:['MW']},{name:'2x Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:['Left']},{name:'2x Big Gun', range:'45cm', firepower:'AP5+/AT5+', notes:['Right']},{name:'Krusha', range:'(bc)', firepower:'Assault Weapons', notes:['EA(+D3)','TK(D3)']}], abilities:['Damage Capacity 16','Fearless','D6+8 Power Fields','Reinforced Armour','Thick Rear Armour','Walker']},
		supa_stompa: {name:'Supa Stompa', type:'WE', speed:'15cm', armour:'4+', cc:'4+', ff:'4+', weapons:[{name:'Soopagun', range:'60cm', firepower:'2BP', notes:['MW']},{name:'Mega-Choppa', range:'45cm / base contact', firepower:'AP5+/AT5+ / Assault Weapons', notes:['EA(+1)','TK(D3)']}], abilities:['Damage Capacity 4','Fearless','D3 Power Fields','Reinforced Armour','Walker']},
		fighta_bommer: {name:'Fighta Bommer', type:'AC', speed:'Fighter-Bomber', armour:'6+', cc:'n/a', ff:'n/a', weapons:[{name:'Heavy Shootas', range:'15cm', firepower:'AP5+/AA5+', notes:[]},{name:'Tankbusta Rokkits', range:'30cm', firepower:'AT4+', notes:[]}], abilities:[]},
		bommer: {name:'Bommer', type:'AC/WE', speed:'Bomber', armour:'5+', cc:'n/a', ff:'n/a', weapons:[{name:'Gun Turrets', range:'15cm', firepower:'D6+3x AP5+/AA6+', notes:[]},{name:'Blasta Bombs', range:'15cm', firepower:'D3+1BP', notes:['FxF']}], abilities:['Damage Capacity 2','Reinforced Armour','Critical Hit Effect: Destroyed.']},
		battlekroozer: {name:'Battlekroozer', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'D6+3BP', notes:['MW']}], abilities:['Slow and Steady','Transport']},
		kill_kroozer: {name:'KillKroozer', type:'SC', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Orbital Bombardment', range:'n/a', firepower:'D6+1BP', notes:['MW']}], abilities:[]},
		big_gun_or_skorcha_head: {name:'Big Gun or Skorcha Head', type:'Kustom Upgrade', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[], abilities:['Reference card for a Gargant head upgrade that swaps the head armament.']},
		banna: {name:'Banna', type:'Kustom Upgrade', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[], abilities:['Reference card for a Gargant command/banner upgrade.']},
		eavy_armour: {name:'Eavy Armour', type:'Kustom Upgrade', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[], abilities:['Reference card for an armour upgrade that improves the Gargant chassis.']},
		flak_gunz: {name:'Flak Gunz', type:'CH', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[{name:'Flak Gunz', range:'30cm', firepower:'D3+1x AA6+', notes:[]}], abilities:[]},
		gork_or_mork_head: {name:'Gork or Mork Head', type:'Kustom Upgrade', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[], abilities:['Reference card for a distinctive Gargant head upgrade.']},
		kart: {name:'Kart', type:'Kustom Upgrade', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[], abilities:['Reference card for a transport/kart upgrade option.']},
		ordz_duruk: {name:'Ordz Duruk', type:'Kustom Upgrade', speed:'n/a', armour:'n/a', cc:'n/a', ff:'n/a', weapons:[], abilities:['Reference card for a named Gargant upgrade option.']}
	},
	nameToKey: {
		'mekboy big boss':'mekboy_big_boss','big gunz':'big_gunz','boyz':'boyz','boyz grotz':'boyz','grotz':'grotz','nobz':'nobz',
		'deth kopta':'deth_kopta','deth koptas':'deth_kopta','flakwagon':'flakwagon','killa kan':'killa_kan','killa kans':'killa_kan','dreadnought':'dreadnought',
		'stompa':'stompa','stompa with 2x big guns and kombat ammer':'stompa','stompa with 3x big guns':'stompa',
		'oddboy':'oddboy','oddboy with power fields':'oddboy','oddboy with soopagunz':'oddboy','oddboy with supa zzap gun':'oddboy',
		'battlefortress':'battlefortress','gunfortress':'gunfortress','gargant':'gargant','great gargant':'great_gargant','mega gargant':'mega_gargant',
		'supa stompa':'supa_stompa','fighta bommer':'fighta_bommer','fighta bombers':'fighta_bommer','fighta sqwadron':'fighta_bommer','bommer':'bommer',
		'battlekroozer':'battlekroozer','battle kroozer':'battlekroozer','killkroozer':'kill_kroozer','kill kroozer':'kill_kroozer','kroozer':'kill_kroozer',
		'big gun or skorcha head':'big_gun_or_skorcha_head','banna':'banna','eavy armour':'eavy_armour','flak gunz':'flak_gunz','gork or mork head':'gork_or_mork_head','kart':'kart','ordz duruk':'ordz_duruk'
		,'kan mob normal':'killa_kan','kan mob big':'killa_kan','kan mob uge':'killa_kan',
		'loota warband normal':'big_gunz','loota warband big':'big_gunz','loota warband uge':'big_gunz',
		'stompa mob normal':'stompa','stompa mob big':'stompa','stompa mob uge':'stompa','supa stompa mob':'supa_stompa'
	}
};

ArmyforgeUnitProfiles.findOrkGargantMobProfileByName = function(displayName) {
	if (!displayName) {
		return null;
	}
	var normalized = displayName.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').strip();
	var key = ArmyforgeUnitProfiles.orkGargantMob.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.orkGargantMob.profiles[key] || null;
};
