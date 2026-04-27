// Source: war/source-json/sisters-of-battle.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.sistersOfBattle = {
	armyIds: ['INQ_sisters2018_NETEA'],
	profiles: {
		canoness:{name:'Canoness',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Blessed Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Supreme Commander','Invulnerable Save','Inspiring']},
		mistress:{name:'Mistress',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Neural Whip',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Leader']},
		palatine:{name:'Palatine',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Blessed Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Commander','Invulnerable Save','Leader']},
		priest:{name:'Priest',type:'CH',speed:'n/a',armour:'n/a',cc:'n/a',ff:'n/a',weapons:[{name:'Eviscerator',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Fearless','Invulnerable Save','Inspiring']},
		inquisitor:{name:'Inquisitor',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'5+',weapons:[{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]},{name:'Power Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Inspiring','Invulnerable Save','Leader']},
		living_saint:{name:'Living Saint',type:'INF',speed:'30cm',armour:'4+',cc:'3+',ff:'3+',weapons:[{name:'Ardent Blade',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Teleport','Reinforced Armour','Thick Rear Armour','Invulnerable Save','Inspiring','Leader','Jump Pack']},
		arco_flagellants:{name:'Arco-Flagellants',type:'INF',speed:'15cm',armour:'4+',cc:'4+',ff:'-',weapons:[{name:'Combat Flails',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)']}],abilities:['Infiltrators','Fearless']},
		battle_sister:{name:'Battle Sister',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Heavy Flamers',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'Heavy Flamers',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Faithful']},
		celestian_sister:{name:'Celestian Sister',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Multimelta',range:'15cm',firepower:'MW5+',notes:['MW']},{name:'Multimelta',range:'(15cm)',firepower:'Small Arms',notes:['MW']}],abilities:['Faithful']},
		dominion_sister:{name:'Dominion Sister',type:'INF',speed:'15cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Meltaguns',range:'(15cm)',firepower:'Small Arms',notes:['MW']}],abilities:['Faithful','Scout']},
		retributor_sister:{name:'Retributor Sister',type:'INF',speed:'15cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]},{name:'Heavy Flamers',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'Heavy Flamers',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Faithful']},
		repentia_sister:{name:'Repentia Sister',type:'INF',speed:'15cm',armour:'5+',cc:'4+',ff:'-',weapons:[{name:'Eviscerator',range:'(bc)',firepower:'Assault Weapons',notes:['MW']}],abilities:['Faithful','Infiltrators']},
		seraphim_sister:{name:'Seraphim Sister',type:'INF',speed:'30cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'Twin Boltpistols',range:'(bc)',firepower:'Assault Weapons',notes:[]}],abilities:['Faithful','Jump Pack','Teleport']},
		inq_support_staff:{name:'Inq Support Staff',type:'INF',speed:'15cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Chainswords',range:'(bc)',firepower:'Assault Weapons',notes:[]},{name:'Scourging',range:'(15cm)',firepower:'Small Arms',notes:['MW','First Strike']}],abilities:['Leader']},
		inq_veteran_warrior_acolyte:{name:'Inq Veteran Warrior Acolyte',type:'INF',speed:'15cm',armour:'5+',cc:'5+',ff:'5+',weapons:[{name:'Power Weapon',range:'(bc)',firepower:'Assault Weapons',notes:['MW']},{name:'Hot-Shot Laserguns',range:'(15cm)',firepower:'Small Arms',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:[]},
		death_cult_assassin:{name:'Death Cult Assassin',type:'INF',speed:'15cm',armour:'5+',cc:'3+',ff:'-',weapons:[{name:'Power Weapons',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Infiltrators','Invulnerable Save']},
		inq_storm_troopers:{name:'Inq Storm Troopers',type:'INF',speed:'15cm',armour:'5+',cc:'5+',ff:'4+',weapons:[{name:'Plasma Guns',range:'15cm',firepower:'AP5+/AT5+',notes:[]}],abilities:[]},
		redemptionists:{name:'Redemptionists',type:'INF',speed:'15cm',armour:'-',cc:'4+',ff:'6+',weapons:[{name:'Exterminators',range:'(bc)',firepower:'Assault Weapons',notes:[]},{name:'Laspistols',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:[]},
		pentinent_engine:{name:'Pentinent Engine',type:'LV',speed:'15cm',armour:'4+',cc:'4+',ff:'4+',weapons:[{name:'2x Heavy Flamers',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'2x Heavy Flamers',range:'(15cm)',firepower:'Small Arms',notes:['IC']},{name:'Power Saws',range:'(bc)',firepower:'Assault Weapons',notes:['EA(+1)','MW']}],abilities:['Infiltrators','Fearless','Invulnerable Save','Walker']},
		exorcist:{name:'Exorcist',type:'AV',speed:'30cm',armour:'4+',cc:'6+',ff:'5+',weapons:[{name:'Exorcist Launcher',range:'45cm',firepower:'2x AP6+/AT4+',notes:[]}],abilities:['Faithful']},
		rhino:{name:'Rhino',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Storm Bolter',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Faithful','Transport(2)']},
		sororitas_hunter:{name:'Sororitas Hunter',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'6+',weapons:[{name:'Hunter Killer',range:'60cm',firepower:'AT4+/AA4+',notes:[]}],abilities:['Faithful']},
		repressor:{name:'Repressor',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Heavy Flamer',range:'15cm',firepower:'AP4+',notes:['IC']},{name:'Storm Bolter',range:'(15cm)',firepower:'Small Arms',notes:[]}],abilities:['Faithful','Walker','Transport(2)']},
		immolator:{name:'Immolator',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Twin Multimelta',range:'15cm',firepower:'MW4+',notes:['MW']},{name:'Twin Multimelta',range:'(15cm)',firepower:'Small Arms',notes:['MW']}],abilities:['Faithful','Transport(1)']},
		chimera:{name:'Chimera',type:'AV',speed:'30cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Multilaser',range:'30cm',firepower:'AP5+/AT6+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:[]}],abilities:['Transport(2)']},
		valkyrie:{name:'Valkyrie',type:'AV',speed:'35cm',armour:'5+',cc:'6+',ff:'5+',weapons:[{name:'Multilaser',range:'30cm',firepower:'AP5+/AT6+',notes:[]},{name:'2x Heavy Bolters',range:'30cm',firepower:'AP5+',notes:[]},{name:'2x Rocket Pod',range:'30cm',firepower:'1BP',notes:['Disrupt','One shot']}],abilities:['Transport(2)']},
		emperors_chapel:{name:'Emperors Chapel',type:'WE',speed:'20cm',armour:'4+',cc:'6+',ff:'3+',weapons:[{name:'Inferno Gun',range:'30cm',firepower:'3BP',notes:['IC','FF Arc']},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:['FF Arc']},{name:'Inferno Cannon',range:'30cm',firepower:'AP3+',notes:['IC','R Arc']},{name:'Inferno Cannon',range:'30cm',firepower:'AP3+',notes:['IC','L Arc']},{name:'Inferno Cannon',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Damage Capacity 3','Reinforced Armour','Fearless','Walker','Transport(8)','Critical Hit Effect: The Emperors Chapel is destroyed and any units within 5cm of the model suffer a hit on a D6 roll of 6.']},
		cathedral_of_purification:{name:'Cathedral of Purification',type:'WE',speed:'20cm',armour:'4+',cc:'5+',ff:'4+',weapons:[{name:'Promethion Cannon',range:'45cm',firepower:'4BP',notes:['IC','FF Arc']},{name:'Excommunicator',range:'30cm',firepower:'3x AP6+/AT4+/AA5+',notes:[]},{name:'Heavy Bolter',range:'30cm',firepower:'AP5+',notes:['FF Arc']},{name:'Inferno Cannon',range:'30cm',firepower:'AP3+',notes:['IC','L Arc']},{name:'Inferno Cannon',range:'30cm',firepower:'AP3+',notes:['IC','R Arc']},{name:'Inferno Cannon',range:'(15cm)',firepower:'Small Arms',notes:['IC']}],abilities:['Damage Capacity 6','2 Void Shields','Reinforced Armour','Fearless','Inspiring','Walker','Transport(12)','Critical Hit Effect: The Cathedral\'s tracks are damaged, immobilising it. Further critical hits inflict an additional point of damage.']},
		lightning_strike_fighter:{name:'Lightning Strike Fighter',type:'AC',speed:'F',armour:'6',cc:'-',ff:'-',weapons:[{name:'Lascannon',range:'45cm',firepower:'AT5+/AA5+',notes:['FF Arc']},{name:'2x Underwing Rockets',range:'30cm',firepower:'AT4+',notes:['FF Arc']}],abilities:[]},
		marauder_bomber:{name:'Marauder Bomber',type:'AC',speed:'B',armour:'4',cc:'-',ff:'-',weapons:[{name:'2x Twin Heavy Bolters',range:'15cm',firepower:'AA5+',notes:[]},{name:'Twin Lascannon',range:'45cm',firepower:'AT4+/AA4+',notes:['FF Arc']},{name:'Bomb Racks',range:'15cm',firepower:'3BP',notes:['FF Arc']}],abilities:[]},
		lunar_class_spaceship:{name:'Lunar Class Spaceship',type:'SC',speed:'-',armour:'-',cc:'-',ff:'-',weapons:[{name:'Orbital Bombardment',range:'-',firepower:'3BP',notes:['MW']},{name:'Pin Point attack',range:'-',firepower:'MW2+',notes:['MW','TK(D3)']}],abilities:[]}
	},
	nameToKey: {
		'mission':'battle_sister',
		'exorcism':'exorcist',
		'choir':'seraphim_sister',
		'retribution':'retributor_sister',
		'coven':'dominion_sister',
		'repentance':'repentia_sister',
		'purgeance':'immolator',
		'pentinence':'pentinent_engine',
		'penitence':'pentinent_engine',
		'penitent engines':'pentinent_engine',
		'pentinent engine':'pentinent_engine',
		'pentinent engines':'pentinent_engine',
		'crusaders':'redemptionists',
		'conclave':'arco_flagellants',
		'inquisitorial strike force':'inq_storm_troopers',
		'inquisitor hereticus retinue':'inq_storm_troopers',
		'inquisitorial storm troopers':'inq_storm_troopers',
		'inquisitorial storm trooper':'inq_storm_troopers',
		'inq storm troopers':'inq_storm_troopers',
		'inquisitor':'inquisitor',
		'lightning squadron':'lightning_strike_fighter',
		'lighting squadron':'lightning_strike_fighter',
		'lightning strike fighter':'lightning_strike_fighter',
		'lightning strike fighters':'lightning_strike_fighter',
		'marauder squadron':'marauder_bomber',
		'marauder bomber':'marauder_bomber',
		'marauder bombers':'marauder_bomber',
		'cathedral of purification':'cathedral_of_purification',
		'orbital support':'lunar_class_spaceship',
		'lunar class cruiser':'lunar_class_spaceship',
		'lunar class spaceship':'lunar_class_spaceship',
		'canoness':'canoness',
		'cannones':'canoness',
		'palantine':'palatine',
		'palatine':'palatine',
		'living saint':'living_saint',
		'priest':'priest',
		'priest character':'priest',
		'mistress':'mistress',
		'mistress character':'mistress',
		'celestican sisters':'celestian_sister',
		'celestian sister':'celestian_sister',
		'celestian sisters':'celestian_sister',
		'dominion':'dominion_sister',
		'dominion sister':'dominion_sister',
		'dominion sisters':'dominion_sister',
		'retributor':'retributor_sister',
		'retributor sister':'retributor_sister',
		'retributor sisters':'retributor_sister',
		'retribution sisters':'retributor_sister',
		'battle sister':'battle_sister',
		'battle sisters':'battle_sister',
		'8 battle sister':'battle_sister',
		'8 battle sisters':'battle_sister',
		'seraphim sister':'seraphim_sister',
		'seraphim sisters':'seraphim_sister',
		'seraphim sister units':'seraphim_sister',
		'seraphim sister unit':'seraphim_sister',
		'arco flagellants':'arco_flagellants',
		'arco flagellant units':'arco_flagellants',
		'deathcult assassins':'death_cult_assassin',
		'death cult assassins':'death_cult_assassin',
		'death cult assassin':'death_cult_assassin',
		'assasin':'death_cult_assassin',
		'assassin':'death_cult_assassin',
		'inq support staff':'inq_support_staff',
		'inquisitorial support staff':'inq_support_staff',
		'inq veteran warrior acolyte':'inq_veteran_warrior_acolyte',
		'inquisitorial veteran warrior acolyte':'inq_veteran_warrior_acolyte',
		'inquisitorial veteran warrior acolytes':'inq_veteran_warrior_acolyte',
		'veteran warrior acolytes':'inq_veteran_warrior_acolyte',
		'redemptionists':'redemptionists',
		'exorcist':'exorcist',
		'exorcists':'exorcist',
		'rhino':'rhino',
		'rhinos':'rhino',
		'immolator':'immolator',
		'immolators':'immolator',
		'repressor':'repressor',
		'repressors':'repressor',
		'chimeras':'chimera',
		'chimera':'chimera',
		'inquisitorial chimera':'chimera',
		'valkyries':'valkyrie',
		'valkyrie':'valkyrie',
		'inquisitorial valyries':'valkyrie',
		'inquisitorial valkyries':'valkyrie',
		'engines':'pentinent_engine',
		'hunter':'sororitas_hunter',
		'sororitas hunter':'sororitas_hunter',
		'chapel':'emperors_chapel',
		'emperors chapel':'emperors_chapel',
		'2 inquisitorial storm trooper':'inq_storm_troopers',
		'4 inquisitorial valyries':'valkyrie',
		'4 inquisitorial valkyries':'valkyrie',
		'6 retribution sisters':'retributor_sister',
		'4 dominion sister units':'dominion_sister',
		'4 dominion sisters':'dominion_sister',
		'2 death cult assassin':'death_cult_assassin'
	}
};

ArmyforgeUnitProfiles.normalizeSistersOfBattleName = function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\b(one|two|three|four|five|six|seven|eight|ten)\b/g, '')
		.replace(/\b(units|unit|character|characters|formation|formations)\b/g, '')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.findSistersOfBattleProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.sistersOfBattle.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeSistersOfBattleName(displayName);
	var key = ArmyforgeUnitProfiles.sistersOfBattle.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.sistersOfBattle.profiles[key] || null;
};
