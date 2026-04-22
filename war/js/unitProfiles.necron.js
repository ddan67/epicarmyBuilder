// Source: https://tp.net-armageddon.org/army-lists/necron.html
// Values extracted from archived JSON source; source-faithful runtime profiles generated from archived JSON.

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeXenosName = ArmyforgeUnitProfiles.normalizeXenosName || function(displayName) {
	if (!displayName) {
		return "";
	}
	return String(displayName).toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		.replace(/[æÆ]/g, "ae")
		.replace(/[œŒ]/g, "oe")
		.replace(/[’']/g, "")
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, " ")
		.replace(/^\s*\d+\s*[xX]?\s*/g, " ")
		.replace(/[^a-z0-9]+/g, " ")
		.replace(/\b(?:unit|units|character|characters|squadron|squadrons|group|groups|cadre|cadres|maniple|maniples|phalanx|phalanxes|kindred|kindreds|dropship|dropships|battlesuit|battlesuits|support|supports|wing|wings|formation|formations|pack|packs|team|teams|flight|flights|fighter|fighters|bomber|bombers|gunship|gunships)\b/g, " ")
		.replace(/\s+/g, " ")
		.trim();
};

ArmyforgeUnitProfiles.createXenosProfileSet = ArmyforgeUnitProfiles.createXenosProfileSet || function(config) {
	var module = {
		armyIds: config.armyIds || [],
		profiles: {},
		nameToKey: {}
	};

	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeXenosName(alias);
		if (!normalized) {
			return;
		}
		module.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, "");
		if (compact) {
			module.nameToKey[compact] = key;
		}
	}

	function addProfile(profile) {
		var key = profile.key || profile.name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
		module.profiles[key] = {
			name: profile.name,
			type: profile.type,
			speed: profile.speed,
			armour: profile.armour,
			cc: profile.cc,
			ff: profile.ff,
			weapons: profile.weapons || [],
			abilities: profile.abilities || []
		};
		registerAlias(profile.name, key);
	if (profile.aliases) {
			for (var i = 0; i < profile.aliases.length; i++) {
				registerAlias(profile.aliases[i], key);
			}
		}
	}

	var sourceProfiles = config.profiles || [];
	if (sourceProfiles instanceof Array) {
		for (var i = 0; i < sourceProfiles.length; i++) {
			addProfile(sourceProfiles[i]);
		}
	}
	else {
		for (var sourceKey in sourceProfiles) {
			if (sourceProfiles.hasOwnProperty(sourceKey)) {
				var sourceProfile = sourceProfiles[sourceKey];
				if (!sourceProfile.key) {
					sourceProfile.key = sourceKey;
				}
				addProfile(sourceProfile);
			}
		}
	}

	if (config.aliases) {
		for (var alias in config.aliases) {
			if (config.aliases.hasOwnProperty(alias)) {
				registerAlias(alias, config.aliases[alias]);
			}
		}
	}

	return module;
};

ArmyforgeUnitProfiles.necron = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: [
  "XENOS_necron_NETEA"
],
	profiles: {
  "necron_lord": {
    "name": "Necron Lord",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Staff of Light",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)"
        ]
      },
      {
        "name": "Staff of Light",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Invulnerable Save",
      "Leader"
    ]
  },
  "necron_overlord": {
    "name": "Necron Overlord",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Supreme Commander"
    ]
  },
  "destroyers": {
    "name": "Destroyers",
    "type": "INF",
    "speed": "25cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "3+",
    "weapons": [
      {
        "name": "2x Gauss Cannon",
        "range": "30cm",
        "firepower": "AP4+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Mounted",
      "Necron",
      "Skimmer"
    ]
  },
  "flayed_ones": {
    "name": "Flayed Ones",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "-",
    "weapons": [],
    "abilities": [
      "Infiltrator",
      "Necron",
      "Scout",
      "Teleport"
    ]
  },
  "heavy_destroyers": {
    "name": "Heavy Destroyers",
    "type": "INF",
    "speed": "25cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Heavy Gauss Cannon",
        "range": "30cm",
        "firepower": "AT3+",
        "notes": []
      }
    ],
    "abilities": [
      "Mounted",
      "Necron",
      "Skimmer"
    ]
  },
  "immortals": {
    "name": "Immortals",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "3+",
    "weapons": [
      {
        "name": "Gauss Blasters",
        "range": "15cm",
        "firepower": "AP4+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Necron"
    ]
  },
  "necron_warriors": {
    "name": "Necron Warriors",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Gauss Flayers",
        "range": "15cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Necron"
    ]
  },
  "pariahs": {
    "name": "Pariahs",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "3+",
    "weapons": [
      {
        "name": "War Scythes",
        "range": "15cm",
        "firepower": "AP4+/AT6+",
        "notes": []
      },
      {
        "name": "War Scythes",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Inspiring"
    ]
  },
  "wraiths": {
    "name": "Wraiths",
    "type": "INF",
    "speed": "30cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "-",
    "weapons": [
      {
        "name": "Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": [
      "First Strike",
      "Invulnerable Save",
      "Jump Packs",
      "Necron"
    ]
  },
  "monolith": {
    "name": "Monolith",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Particle Whip",
        "range": "30cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Gauss Flux Arc",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+2)"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Living Metal",
      "Portal",
      "Skimmer",
      "Teleport",
      "Thick Rear Armour"
    ]
  },
  "obelisk": {
    "name": "Obelisk",
    "type": "AV",
    "speed": "30cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Particle Flail",
        "range": "45cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      }
    ],
    "abilities": [
      "Fearless",
      "Reinforced Armour",
      "Skimmer",
      "Teleport",
      "Thick Rear Armour"
    ]
  },
  "tomb_spyder": {
    "name": "Tomb Spyder",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Scarab Swarm",
        "range": "30cm",
        "firepower": "AP5+/AT5+",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "Scarab Swarm",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)",
          "IC"
        ]
      },
      {
        "name": "Scarab Swarm",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "IC"
        ]
      },
      {
        "name": "Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "MW"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Leader",
      "Skimmer",
      "Walker"
    ]
  },
  "abattoir": {
    "name": "Abattoir",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "2+",
    "ff": "4+",
    "weapons": [
      {
        "name": "3x Scarab Swarm",
        "range": "30cm",
        "firepower": "AP5+/AT5+",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "3x Scarab Swarm",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)",
          "IC"
        ]
      },
      {
        "name": "3x Scarab Swarm",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "IC"
        ]
      },
      {
        "name": "Harvesters",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+2)",
          "TK"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 8",
      "Fearless",
      "Infiltrator",
      "Living Metal",
      "Portal",
      "Skimmer",
      "Thick Rear Armour",
      "Critical Hit Effect: The unit and all units within 5cm of the unit suffer a titan killer hit on a roll of 4+."
    ]
  },
  "aeonic_orb": {
    "name": "Aeonic Orb",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "-",
    "ff": "3+",
    "weapons": [
      {
        "name": "Solar Flare",
        "range": "90cm",
        "firepower": "MW3+",
        "notes": [
          "MW",
          "TK(D6)"
        ]
      },
      {
        "name": "Solar Flare",
        "range": "90cm",
        "firepower": "12BP",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 6",
      "Fearless",
      "Living Metal",
      "Skimmer",
      "Thick Rear Armour",
      "Critical Hit Effect: Center the barrage template that is 12cm across on the unit and resolve the effect as if it were a 3BP macro-weapon barrage."
    ]
  },
  "pylon": {
    "name": "Pylon",
    "type": "WE",
    "speed": "Immobile",
    "armour": "4+",
    "cc": "-",
    "ff": "4+",
    "weapons": [
      {
        "name": "Particle Accelerator",
        "range": "120cm",
        "firepower": "MW4+",
        "notes": [
          "TK(D3)"
        ]
      },
      {
        "name": "Particle Accelerator",
        "range": "90cm",
        "firepower": "AA4+",
        "notes": [
          "TK"
        ]
      },
      {
        "name": "Gauss Flux Arc",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+2)"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Fearless",
      "Living Metal",
      "Teleport",
      "Thick Rear Armour",
      "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a hit on a roll of 4+."
    ]
  },
  "the_deceiver": {
    "name": "The Deceiver",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Despair",
        "range": "45cm",
        "firepower": "4BP",
        "notes": [
          "D"
        ]
      },
      {
        "name": "Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+2)",
          "TK"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "Fearless",
      "Inspiring",
      "Living Metal",
      "Skimmer",
      "Supreme Commander",
      "Teleport",
      "Walker",
      "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a macro-weapon hit on a roll of 4+."
    ]
  },
  "the_nightbringer": {
    "name": "The Nightbringer",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Lightning Arc",
        "range": "30cm",
        "firepower": "MW4+",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "Gaze of Death",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+2)",
          "MW"
        ]
      },
      {
        "name": "Scythe",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+2)",
          "TK(D3)"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "Fearless",
      "Inspiring",
      "Living Metal",
      "Skimmer",
      "Supreme Commander",
      "Teleport",
      "Walker",
      "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a macro-weapon hit on a roll of 4+."
    ]
  },
  "warbarque": {
    "name": "Warbarque",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "2x Particle Cannon",
        "range": "60cm",
        "firepower": "AP5+/AT3+",
        "notes": []
      },
      {
        "name": "2x War Cannon",
        "range": "30cm",
        "firepower": "AT4+",
        "notes": []
      },
      {
        "name": "2x Gauss Cannon",
        "range": "30cm",
        "firepower": "AP4+/AT6+",
        "notes": []
      },
      {
        "name": "Gauss Flux Arc",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+2)"
        ]
      }
    ],
    "abilities": [
      "Commander",
      "Damage Capacity 3",
      "Fearless",
      "Living Metal",
      "Portal",
      "Skimmer",
      "Teleport",
      "Thick Rear Armour",
      "Critical Hit Effect: The unit looses Portal . Subsequent critical hits destroy the unit."
    ]
  },
  "scythe_class_harvester": {
    "name": "Scythe Class Harvester",
    "type": "SC",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Orbital Bombardment",
        "range": "n/a",
        "firepower": "4BP",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "2x Pin-Point Attack",
        "range": "n/a",
        "firepower": "MW2+",
        "notes": [
          "TK(D3)"
        ]
      }
    ],
    "abilities": []
  },
  "tomb_complex": {
    "name": "Tomb Complex",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Tomb Complex formation slot."
    ]
  },
  "eques_maniple": {
    "name": "Eques Maniple",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Eques Maniple formation slot."
    ]
  },
  "monolith_maniple": {
    "name": "Monolith Maniple",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Monolith Maniple formation slot."
    ]
  }
},
	aliases: {
  "tomb complex": "tomb_complex",
  "eques maniple": "eques_maniple",
  "monolith maniple": "monolith_maniple",
  "infantry phalanx": "necron_warriors",
  "armored phalanx": "obelisk",
  "armoured phalanx": "obelisk",
  "monolith phalanx": "monolith",
  "venator maniple": "flayed_ones",
  "warriors": "necron_warriors",
  "warrior": "necron_warriors",
  "obelisks": "obelisk",
  "monoliths": "monolith",
  "flayed ones": "flayed_ones",
  "flayed one": "flayed_ones",
  "the deceiver": "the_deceiver",
  "deceiver": "the_deceiver",
  "the nightbringer": "the_nightbringer",
  "nightbringer": "the_nightbringer",
  "c tan": "the_deceiver",
  "ctan": "the_deceiver",
  "harvester engine": "abattoir",
  "spacecraft": "scythe_class_harvester",
  "scythe": "scythe_class_harvester",
  "scythe class harvester": "scythe_class_harvester",
  "pylon": "pylon",
  "warbarque": "warbarque",
  "aeonic orb": "aeonic_orb",
  "aeonic orb ": "aeonic_orb"
}
});

ArmyforgeUnitProfiles.findNecronProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.necron.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName);
	var key = ArmyforgeUnitProfiles.necron.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.necron.profiles[key] || null;
};
