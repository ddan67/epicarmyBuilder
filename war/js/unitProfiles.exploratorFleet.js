// Source: war/source-json/explorator-fleet.json

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeExploratorFleetName = ArmyforgeUnitProfiles.normalizeExploratorFleetName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, ' ')
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.exploratorFleet = ArmyforgeUnitProfiles.exploratorFleet || {
	armyIds: ['AMTL_MarsPrime_NETEA'],
	profiles: {},
	nameToKey: {}
};

(function() {
	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeExploratorFleetName(alias);
		if (!normalized) {
			return;
		}
		ArmyforgeUnitProfiles.exploratorFleet.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			ArmyforgeUnitProfiles.exploratorFleet.nameToKey[compact] = key;
		}
	}

	function cloneProfile(profile) {
		return {
			name: profile.name,
			type: profile.type,
			speed: profile.speed,
			armour: profile.armour,
			cc: profile.cc,
			ff: profile.ff,
			weapons: (profile.weapons || []).map(function(weapon) {
				return {
					name: weapon.name,
					range: weapon.range,
					firepower: weapon.firepower,
					notes: (weapon.notes || []).slice()
				};
			}),
			abilities: (profile.abilities_or_notes || profile.abilities || []).slice()
		};
	}

	function loadSourceData() {
		var responseText = null;
		try {
			new Ajax.Request('./source-json/explorator-fleet.json', {
				method: 'get',
				asynchronous: false,
				onSuccess: function(response) {
					responseText = response.responseText;
				}
			});
		}
		catch (err) {
			return null;
		}
		if (!responseText) {
			return null;
		}
		try {
			return JSON.parse(responseText);
		}
		catch (err2) {
			return null;
		}
	}

	var sourceData = loadSourceData();
	if (sourceData && sourceData.profiles && sourceData.profiles.length) {
		sourceData.profiles.each(function(profile) {
			var key = ArmyforgeUnitProfiles.normalizeExploratorFleetName(profile.name).replace(/\s+/g, '_');
			if (!key) {
				return;
			}
			ArmyforgeUnitProfiles.exploratorFleet.profiles[key] = cloneProfile(profile);
			registerAlias(profile.name, key);
		});
	}

	var aliases = {
		'Arch Magos': 'Explorator Archmagos',
		'Archmagos': 'Explorator Archmagos',
		'Commander': 'Tech-Priest Dominus',
		'Tech Priest Dominus': 'Tech-Priest Dominus',
		'Tech-Priest Dominus': 'Tech-Priest Dominus',
		'Magos': 'Explorator Magos',
		'Vanguard Maniple': 'Skitarii Vanguard',
		'Skorpius Cohort': 'Skorpius Disintegrator',
		'Skorpius Disintegrators': 'Skorpius Disintegrator',
		'Ranger Centuria': 'Skitarii Rangers',
		'Ironstrider Cavaliers': 'Ironstrider Ballistarius',
		'Ironstriders': 'Ironstrider Ballistarius',
		'Sydonian Dragoons': 'Sydonian Dragoon',
		'Dragoons': 'Sydonian Dragoon',
		'Ruststalker Killclade': 'Sicarian Ruststalkers',
		'Infiltrator Killclade': 'Sicarian Infiltrators',
		'Fulgurite Maniple': 'Electro-Priests',
		'Fulgurite Electro-Priests': 'Electro-Priests',
		'Electro-Priests': 'Electro-Priests',
		'Hounds': 'Serberys Sulphurhounds',
		'Pteraxii Maniple': 'Pteraxii',
		'Onager Cohort': 'Onager Dunecrawler',
		'Onagers': 'Onager Dunecrawler',
		'Kastelan Maniple': 'Kastelan Robots',
		'Cybernetica Datasmith': 'Cybernetica Datasmith',
		'Destroyer Maniple': 'Kataphron Destroyer',
		'Kataphron Destroyers': 'Kataphron Destroyer',
		'Breacher Maniple': 'Kataphron Breacher',
		'Kataphron Breachers': 'Kataphron Breacher',
		'Knights': 'Knight Paladin',
		'Warhound Pack': 'Warhound Class Titan',
		'Reaver': 'Reaver Class Titan',
		'Avenger Strike Fighter': 'Avenger Strike Fighters',
		'Avenger Strike Fighters': 'Avenger Strike Fighters',
		'Ark Mechanicus Battleship': 'Ark Mechanicus Battleship',
		'Secutarii Hoplites': 'Secutarii Hoplite',
		'Secutarii Hoplite': 'Secutarii Hoplite',
		'Secutarii Peltasts': 'Secutarii Peltasts',
		'Skitarii Rangers': 'Skitarii Rangers',
		'Skorpius Duneriders': 'Skorpius Dunerider',
		'Subterranean Assault': 'Termite Assault Drill',
		'Termite Assault Drills': 'Termite Assault Drill',
		'Archaeopters': 'Archaeopter',
		'Seneschal': 'Seneschal',
		'Knight Paladin': 'Knight Paladin',
		'Knight Errant': 'Knight Errant',
		'Warhound Class Titan': 'Warhound Class Titan'
	};

	for (var alias in aliases) {
		if (aliases.hasOwnProperty(alias)) {
			registerAlias(alias, ArmyforgeUnitProfiles.normalizeExploratorFleetName(aliases[alias]).replace(/\s+/g, '_'));
		}
	}
})();

ArmyforgeUnitProfiles.findExploratorFleetProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.exploratorFleet.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeExploratorFleetName(displayName);
	var key = ArmyforgeUnitProfiles.exploratorFleet.nameToKey[normalized] || ArmyforgeUnitProfiles.exploratorFleet.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.exploratorFleet.profiles[key] || null;
};
