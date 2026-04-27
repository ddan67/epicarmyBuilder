// Source: war/source-json/necron.json and war/source-json/sautekh-necron.json
// Values extracted from archived JSON sources; source-faithful runtime profiles generated from source JSON.

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

ArmyforgeUnitProfiles.sautekhNecron = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: [
		"XENOS_sautekh_necron_NETEA"
	],
	profiles: {
		"necron_overlord": {
			"name": "Necron Overlord",
			"type": "CH",
			"speed": "n/a",
			"armour": "n/a",
			"cc": "n/a",
			"ff": "n/a",
			"weapons": [
				{
					"name": "Gauntlet of Fire",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+1)", "MW"]
				},
				{
					"name": "War Scythe",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+1)", "MW"]
				}
			],
			"abilities": ["Supreme Commander", "Invulnerable Save"]
		},
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
					"notes": ["EA(+1)"]
				},
				{
					"name": "Staff of Light",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+1)", "MW"]
				}
			],
			"abilities": ["Leader", "Invulnerable Save"]
		},
		"cryptek": {
			"name": "Cryptek",
			"type": "CH",
			"speed": "n/a",
			"armour": "n/a",
			"cc": "n/a",
			"ff": "n/a",
			"weapons": [
				{
					"name": "Abyssal Staff",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+1)", "MW"]
				}
			],
			"abilities": ["Inspiring", "Invulnerable Save"]
		},
		"deathmarks": {
			"name": "Deathmarks",
			"type": "INF",
			"speed": "15cm",
			"armour": "5+",
			"cc": "6+",
			"ff": "5+",
			"weapons": [
				{
					"name": "Synaptic Disintegrator",
					"range": "30cm",
					"firepower": "AP5+/AT6+",
					"notes": ["Sniper"]
				}
			],
			"abilities": ["Necron", "Scout", "Teleport"]
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
			"abilities": ["Mounted", "Necron", "Skimmer"]
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
			"abilities": ["Mounted", "Necron", "Skimmer"]
		},
		"immortals": {
			"name": "Immortals",
			"type": "INF",
			"speed": "15cm",
			"armour": "4+",
			"cc": "5+",
			"ff": "3+",
			"weapons": [
				{
					"name": "Gauss Blasters",
					"range": "15cm",
					"firepower": "AP4+/AT6+",
					"notes": []
				}
			],
			"abilities": ["Necron"]
		},
		"sautekh_flayed_ones": {
			"name": "Sautekh Flayed Ones",
			"type": "INF",
			"speed": "15cm",
			"armour": "5+",
			"cc": "3+",
			"ff": "-",
			"weapons": [
				{
					"name": "Claws",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": []
				}
			],
			"abilities": ["Infiltrator", "Necron", "Scout", "Teleport"]
		},
		"sautekh_warriors": {
			"name": "Sautekh Warriors",
			"type": "INF",
			"speed": "15cm",
			"armour": "5+",
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
			"abilities": ["Necron"]
		},
		"tomb_blades": {
			"name": "Tomb Blades",
			"type": "INF",
			"speed": "35cm",
			"armour": "4+",
			"cc": "6+",
			"ff": "5+",
			"weapons": [
				{
					"name": "Twin-linked Tesla Carbines",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+1)"]
				}
			],
			"abilities": ["Mounted", "Skimmer"]
		},
		"triarch_praetorian": {
			"name": "Triarch Praetorian",
			"type": "INF",
			"speed": "30cm",
			"armour": "4+",
			"cc": "3+",
			"ff": "5+",
			"weapons": [
				{
					"name": "Rods of Covenant",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+1)", "MW"]
				},
				{
					"name": "Rods of Covenant",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": []
				}
			],
			"abilities": ["Fearless", "Jump Packs", "Necron"]
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
					"notes": ["EA(+1)"]
				}
			],
			"abilities": ["Fearless", "First Strike", "Invulnerable Save", "Jump Packs"]
		},
		"annihilation_barge": {
			"name": "Annihilation Barge",
			"type": "AV",
			"speed": "25cm",
			"armour": "5+",
			"cc": "6+",
			"ff": "3+",
			"weapons": [
				{
					"name": "Twin Tesla Destructor",
					"range": "30cm",
					"firepower": "2x AP4+/AT5+",
					"notes": []
				},
				{
					"name": "Tesla Cannon",
					"range": "30cm",
					"firepower": "AP5+",
					"notes": []
				}
			],
			"abilities": ["Reinforced Armour", "Skimmer"]
		},
		"catacomb_command_barge": {
			"name": "Catacomb Command Barge",
			"type": "AV",
			"speed": "25cm",
			"armour": "5+",
			"cc": "6+",
			"ff": "4+",
			"weapons": [
				{
					"name": "Gauss Cannon",
					"range": "30cm",
					"firepower": "AP4+/AT6+",
					"notes": []
				}
			],
			"abilities": ["Reinforced Armour", "Skimmer", "Commander"]
		},
		"doomsday_ark": {
			"name": "Doomsday Ark",
			"type": "AV",
			"speed": "25cm",
			"armour": "5+",
			"cc": "6+",
			"ff": "5+",
			"weapons": [
				{
					"name": "Doomsday Cannon",
					"range": "75cm",
					"firepower": "AP3+/AT3+",
					"notes": []
				},
				{
					"name": "Gauss Flayers Array",
					"range": "15cm",
					"firepower": "2x AP5+/AT6+",
					"notes": []
				}
			],
			"abilities": ["Reinforced Armour", "Skimmer"]
		},
		"ghost_ark": {
			"name": "Ghost Ark",
			"type": "AV",
			"speed": "25cm",
			"armour": "5+",
			"cc": "6+",
			"ff": "5+",
			"weapons": [
				{
					"name": "Gauss Flayers Array",
					"range": "15cm",
					"firepower": "2x AP5+/AT6+",
					"notes": []
				}
			],
			"abilities": ["Leader", "Reinforced Armour", "Skimmer", "Transport (2 Sautekh Warrior units)"]
		},
		"sautekh_monolith": {
			"name": "Sautekh Monolith",
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
					"notes": ["EA(+2)"]
				}
			],
			"abilities": ["Portal", "Fearless", "Living Metal", "Ponderous", "Skimmer", "Teleport", "Thick Rear Armour"]
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
			"abilities": ["Fearless", "Reinforced Armour", "Teleport", "Thick Rear Armour", "Skimmer"]
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
					"notes": ["IC"]
				},
				{
					"name": "Scarab Swarm",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+1)", "IC"]
				},
				{
					"name": "Scarab Swarm",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+1)", "IC"]
				},
				{
					"name": "Claws",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+1)", "MW"]
				}
			],
			"abilities": ["Fearless", "Leader", "Skimmer", "Walker"]
		},
		"triarch_stalker": {
			"name": "Triarch Stalker",
			"type": "AV",
			"speed": "20cm",
			"armour": "5+",
			"cc": "5+",
			"ff": "5+",
			"weapons": [
				{
					"name": "Heat Ray",
					"range": "30cm",
					"firepower": "MW5+",
					"notes": ["IC"]
				},
				{
					"name": "Heat Ray",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["MW", "IC"]
				}
			],
			"abilities": ["Reinforced Armour", "Infiltrator", "Walker"]
		},
		"sentry_pylons": {
			"name": "Sentry Pylons",
			"type": "AV",
			"speed": "10cm",
			"armour": "5+",
			"cc": "-",
			"ff": "5+",
			"weapons": [
				{
					"name": "Gauss Exterminator",
					"range": "75cm",
					"firepower": "AT5+/AA5+",
					"notes": []
				}
			],
			"abilities": ["Reinforced Armour", "Fearless", "Teleport", "Thick Rear Armour"]
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
					"notes": ["IC"]
				},
				{
					"name": "3x Scarab Swarm",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+1)", "IC"]
				},
				{
					"name": "3x Scarab Swarm",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+1)", "IC"]
				},
				{
					"name": "Harvesters",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+2)", "TK(D3)"]
				}
			],
			"abilities": ["Damage Capacity 8", "Fearless", "Infiltrator", "Living Metal", "Ponderous", "Sautekh Portal", "Skimmer", "Thick Rear Armour", "Critical Hit Effect: A capacitor explosion causes an automatic hit to the Abattoir and also inflicts a hit to any unit within 5cm on a 5+, saves are allowed as normal."]
		},
		"aeonic_orb": {
			"name": "Æonic Orb",
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
					"notes": ["TK(D6)"]
				},
				{
					"name": "Solar Flare",
					"range": "90cm",
					"firepower": "12BP",
					"notes": []
				}
			],
			"abilities": ["Damage Capacity 6", "Fearless", "Living Metal", "Ponderous", "Sautekh Portal", "Skimmer", "Thick Rear Armour", "Critical Hit Effect: Center the barrage template that is 12cm across on the unit and resolve the effect as if it were a 3BP macro weapon barrage."]
		},
		"ctan_shard": {
			"name": "C’tan Shard",
			"type": "WE",
			"speed": "20cm",
			"armour": "4+",
			"cc": "4+",
			"ff": "4+",
			"weapons": [
				{
					"name": "Transdimensional Bolt",
					"range": "30cm",
					"firepower": "MW4+",
					"notes": []
				},
				{
					"name": "Entropic Touch",
					"range": "(bc)",
					"firepower": "Assault Weapons",
					"notes": ["EA(+1)", "TK(1)"]
				},
				{
					"name": "Pyreshards",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+1)"]
				}
			],
			"abilities": ["Damage Capacity 2", "Inspiring", "Fearless", "Jump Packs", "Living Metal", "Teleport", "Walker", "C’tan Shards can use Necron Portals.", "Critical Hit Effect: The C’tan Shard explodes inflicting a hit on every unit in base contact (armour saves allowed)."]
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
					"notes": ["TK(D3)"]
				},
				{
					"name": "Particle Accelerator",
					"range": "90cm",
					"firepower": "AA4+",
					"notes": ["TK(1)"]
				},
				{
					"name": "Gauss Flux Arc",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+2)"]
				}
			],
			"abilities": ["Damage Capacity 2", "Fearless", "Living Metal", "Teleport", "Thick Rear Armour", "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a hit on a roll of 4+."]
		},
		"tesseract_vault": {
			"name": "Tesseract Vault",
			"type": "WE",
			"speed": "20cm",
			"armour": "4+",
			"cc": "6+",
			"ff": "3+",
			"weapons": [
				{
					"name": "Sky of Falling Stars",
					"range": "45cm",
					"firepower": "3BP",
					"notes": ["MW"]
				},
				{
					"name": "Wave of Withering",
					"range": "30cm",
					"firepower": "2x MW3+",
					"notes": ["TK(1)", "IC"]
				},
				{
					"name": "Wave of Withering",
					"range": "(15cm)",
					"firepower": "Small Arms",
					"notes": ["EA(+1)", "TK(1)"]
				}
			],
			"abilities": ["Damage Capacity 3", "Fearless", "Living Metal", "Ponderous", "Skimmer", "Teleport", "Thick Rear Armour", "Critical Hit Effect: The node matrices of the Tesseract Vault suffer a temporary breach and a big wave of energy floods out. Place the small blast marker centered on the unit and resolve as if it were a 3BP barrage. The tesseract itself is hit automatically (so two hits for being under the center)."]
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
					"firepower": "AP4+/AT3+",
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
					"notes": ["EA(+2)"]
				}
			],
			"abilities": ["Damage Capacity 3", "Commander", "Fearless", "Living Metal", "Ponderous", "Sautekh Portal", "Skimmer", "Teleport", "Thick Rear Armour", "Critical Hit Effect: The unit loses the Portal ability. Subsequent critical hits destroy the unit."]
		},
		"doom_scythe": {
			"name": "Doom Scythe",
			"type": "AC",
			"speed": "Fighter-Bomber",
			"armour": "4+",
			"cc": "n/a",
			"ff": "n/a",
			"weapons": [
				{
					"name": "Twin Tesla Destructor",
					"range": "15cm",
					"firepower": "2x AP4+/AT5+/AA5+",
					"notes": ["FFA"]
				},
				{
					"name": "Death Ray",
					"range": "15cm",
					"firepower": "MW3+",
					"notes": ["FFA"]
				}
			],
			"abilities": []
		},
		"night_scythe": {
			"name": "Night Scythe",
			"type": "AC",
			"speed": "Fighter",
			"armour": "4+",
			"cc": "n/a",
			"ff": "n/a",
			"weapons": [
				{
					"name": "Twin Tesla Destructor",
					"range": "15cm",
					"firepower": "2x AP4+/AT5+/AA5+",
					"notes": ["FFA"]
				},
				{
					"name": "Gate Projector Array",
					"range": "(bc)",
					"firepower": "Special",
					"notes": ["Sautekh Portal"]
				}
			],
			"abilities": ["When performing a ground attack action the Night Scythe formation may choose to use the Gate Projector Array instead of firing. Choose one Night Scythe in the formation; treat that unit's base as a portal until the end of the turn."]
		},
		"night_shroud_bomber": {
			"name": "Night Shroud Bomber",
			"type": "AC",
			"speed": "Bomber",
			"armour": "5+",
			"cc": "n/a",
			"ff": "n/a",
			"weapons": [
				{
					"name": "Twin Tesla Destructor",
					"range": "15cm",
					"firepower": "2x AP4+/AT5+/AA5+",
					"notes": ["FFA"]
				},
				{
					"name": "Death Spheres",
					"range": "15cm",
					"firepower": "3BP",
					"notes": ["IC"]
				}
			],
			"abilities": ["Reinforced Armour"]
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
					"notes": ["MW"]
				},
				{
					"name": "2x Pin Point Attack",
					"range": "n/a",
					"firepower": "MW2+",
					"notes": ["TK(D3)"]
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
				"Source list formation.",
				"Points: 75",
				"The first objective the Necron player places on their own table edge functions both as a Portal and as an objective for the rules purposes. It may not be destroyed. Formations using the Portal should measure from the edge of the board as the formation’s starting point."
			]
		}
	},
	aliases: {
		"0-1 tomb complex": "tomb_complex",
		"tomb complex": "tomb_complex",
		"tomb complex objective": "tomb_complex",
		"0-1 overlord": "necron_overlord",
		"lord": "necron_lord",
		"overlord": "necron_overlord",
		"warrior phalanx": "sautekh_warriors",
		"warrior phalanx in ghost arks": "ghost_ark",
		"ghost ark phalanx": "ghost_ark",
		"immortal phalanx": "immortals",
		"blade maniple": "tomb_blades",
		"iudicium maniple": "doomsday_ark",
		"eques maniple": "destroyers",
		"letum maniple": "deathmarks",
		"monolith maniple": "sautekh_monolith",
		"venator maniple": "sautekh_flayed_ones",
		"stalker maniple": "triarch_stalker",
		"sentry maniple": "sentry_pylons",
		"sentry pylon": "sentry_pylons",
		"triarch phalanx": "triarch_praetorian",
		"triarch maniple": "triarch_praetorian",
		"warriors": "sautekh_warriors",
		"warrior": "sautekh_warriors",
		"sautekh warrior": "sautekh_warriors",
		"sautekh warrior unit": "sautekh_warriors",
		"sautekh warrior units": "sautekh_warriors",
		"immortal": "immortals",
		"immortals": "immortals",
		"flayed ones": "sautekh_flayed_ones",
		"flayed one": "sautekh_flayed_ones",
		"monolith": "sautekh_monolith",
		"monoliths": "sautekh_monolith",
		"sautekh monolith": "sautekh_monolith",
		"sautekh monoliths": "sautekh_monolith",
		"spacecraft": "scythe_class_harvester",
		"space craft": "scythe_class_harvester",
		"doom scythes": "doom_scythe",
		"night scythes": "night_scythe",
		"warbarques": "warbarque",
		"warbarque": "warbarque",
		"sentry pylon": "sentry_pylons",
		"triarch praetorian units": "triarch_praetorian",
		"triarch praetorian unit": "triarch_praetorian",
		"deathmark units": "deathmarks",
		"deathmark unit": "deathmarks",
		"deathmark": "deathmarks",
		"tomb blade units": "tomb_blades",
		"tomb blade unit": "tomb_blades",
		"tomb blade": "tomb_blades",
		"destroyer": "destroyers",
		"heavy destroyer": "heavy_destroyers",
		"wraith": "wraiths",
		"triarch stalkers": "triarch_stalker",
		"triarch stalker": "triarch_stalker",
		"ctan shard": "ctan_shard",
		"c tan shard": "ctan_shard",
		"c'tan shard": "ctan_shard",
		"cryptek character": "cryptek",
		"cryptek": "cryptek",
		"necron lord in command barge": "catacomb_command_barge",
		"necron overlord in command barge": "catacomb_command_barge",
		"command barge": "catacomb_command_barge",
		"catacomb command barge": "catacomb_command_barge",
		"doomsday ark units": "doomsday_ark",
		"annihilation barge units": "annihilation_barge",
		"ghost arks": "ghost_ark",
		"3 ghost arks": "ghost_ark",
		"2 monolith": "sautekh_monolith",
		"5 doomsday ark units": "doomsday_ark",
		"5 obelisk units": "obelisk",
		"5 annihilation barge units": "annihilation_barge",
		"4 triarch praetorian units": "triarch_praetorian",
		"5 triarch praetorian units": "triarch_praetorian",
		"6 triarch praetorian units": "triarch_praetorian",
		"aeonic orb": "aeonic_orb",
		"abattoir": "abattoir",
		"spacecraft": "scythe_class_harvester",
		"tesseract vault": "tesseract_vault",
		"0-1 tesseract vault": "tesseract_vault",
		"doom scythe": "doom_scythe",
		"night scythe": "night_scythe",
		"night shroud bomber": "night_shroud_bomber",
		"night shroud bombers": "night_shroud_bomber",
		"scythe class harvester": "scythe_class_harvester"
	}
});

ArmyforgeUnitProfiles.findSautekhNecronProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && ArmyforgeUnitProfiles.sautekhNecron.armyIds.indexOf(listId) === -1) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName);
	if (!normalized) {
		return null;
	}
	var key = ArmyforgeUnitProfiles.sautekhNecron.nameToKey[normalized] || ArmyforgeUnitProfiles.sautekhNecron.nameToKey[normalized.replace(/\s+/g, "")];
	return key ? ArmyforgeUnitProfiles.sautekhNecron.profiles[key] : null;
};
