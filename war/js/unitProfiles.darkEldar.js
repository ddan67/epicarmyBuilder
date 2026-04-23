// Source: war/source-json/dark-eldar.json
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
		.replace(/\b(?:unit|units|character|characters|squadron|squadrons|group|groups|cadre|cadres|maniple|maniples|phalanx|phalanxes|kindred|kindreds|dropship|dropships|battlesuit|battlesuits|support|supports|wing|wings|pack|packs|team|teams|flight|flights|gunship|gunships)\b/g, " ")
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

	for (var key in (config.profiles || {})) {
		if (config.profiles.hasOwnProperty(key)) {
			var profile = config.profiles[key];
			module.profiles[key] = profile;
			registerAlias(profile.name, key);
			if (profile.aliases) {
				for (var i = 0; i < profile.aliases.length; i++) {
					registerAlias(profile.aliases[i], key);
				}
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

ArmyforgeUnitProfiles.darkEldar = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: ["EL_dark_NETEA"],
	profiles: {
  "archon": {
    "name": "Archon",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Agonizer",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Inspiring",
      "Invulnerable Save",
      "Supreme Commander"
    ]
  },
  "dracon": {
    "name": "Dracon",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Agonizer",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Commander",
      "Invulnerable Save",
      "Leader"
    ]
  },
  "sybarite": {
    "name": "Sybarite",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Punisher",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": [
      "Leader"
    ]
  },
  "grotesques": {
    "name": "Grotesques",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "3+",
    "ff": "-",
    "weapons": [],
    "abilities": [
      "Fearless"
    ]
  },
  "haemonculi": {
    "name": "Haemonculi",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Arcane Terrors",
        "range": "15cm",
        "firepower": "AP3+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Leader"
    ]
  },
  "hellions": {
    "name": "Hellions",
    "type": "INF",
    "speed": "30cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Hellglaives",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "Jump Packs",
      "Scout"
    ]
  },
  "incubi": {
    "name": "Incubi",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Tormentor Helms",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Punishers",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": []
  },
  "mandrakes": {
    "name": "Mandrakes",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Splinter Pistols",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "First Strike",
      "Infiltrator",
      "Teleport"
    ]
  },
  "reavers": {
    "name": "Reavers",
    "type": "INF",
    "speed": "40cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Splinter Rifles",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "Mounted",
      "Skimmer"
    ]
  },
  "scourges": {
    "name": "Scourges",
    "type": "INF",
    "speed": "30cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Dark Lance",
        "range": "30cm",
        "firepower": "AT5+",
        "notes": [
          "L"
        ]
      },
      {
        "name": "Splinter Rifles",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": [
      "Jump Packs",
      "Teleport"
    ]
  },
  "warp_beasts": {
    "name": "Warp Beasts",
    "type": "INF",
    "speed": "15cm",
    "armour": "(5+)",
    "cc": "3+",
    "ff": "-",
    "weapons": [
      {
        "name": "Teeth and Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": [
      "First Strike",
      "Infiltrator",
      "In an assault the unit counts as having an armour value of 5+."
    ]
  },
  "warriors": {
    "name": "Warriors",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Splinter Cannon",
        "range": "15cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "wyches": {
    "name": "Wyches",
    "type": "INF",
    "speed": "15cm",
    "armour": "(5+)",
    "cc": "3+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Splinter Pistols",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "First Strike",
      "Infiltrator",
      "In an assault the unit counts as having an armour value of 5+."
    ]
  },
  "raider": {
    "name": "Raider",
    "type": "LV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Dark Lance",
        "range": "30cm",
        "firepower": "AT5+",
        "notes": [
          "L"
        ]
      },
      {
        "name": "Horrorfex",
        "range": "15cm",
        "firepower": "AP6+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "Skimmer",
      "Transport",
      "May transport two infantry units (except Warp Beasts) without Jump Packs or Mounted ; plus one unit of Mandrakes. Transported units do not have to disembark in order to shoot or use their firefight value if this unit is able to shoot, assault or lend support."
    ]
  },
  "ravager": {
    "name": "Ravager",
    "type": "LV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "3+",
    "weapons": [
      {
        "name": "2x Dark Lance",
        "range": "30cm",
        "firepower": "AT5+",
        "notes": [
          "L"
        ]
      },
      {
        "name": "Disintegrator",
        "range": "30cm",
        "firepower": "AP4+/AT6+",
        "notes": []
      },
      {
        "name": "Horrorfex",
        "range": "15cm",
        "firepower": "AP6+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "Skimmer"
    ]
  },
  "talos": {
    "name": "Talos",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Paralyzer",
        "range": "15cm",
        "firepower": "AP5+",
        "notes": [
          "D"
        ]
      },
      {
        "name": "Talos Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "MW"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Reinforced Armour",
      "Walker"
    ]
  },
  "barge_of_pleasure": {
    "name": "Barge of Pleasure",
    "type": "WE",
    "speed": "30cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "2x Dark Lance",
        "range": "30cm",
        "firepower": "AT5+",
        "notes": [
          "L"
        ]
      },
      {
        "name": "Long-Barrel Splinter Cannon",
        "range": "45cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Desolator",
        "range": "30cm",
        "firepower": "2BP",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "2 Shadowfields",
      "Skimmer",
      "Transport",
      "May transport four infantry units without Jump Packs or Mounted ; plus two units of Mandrakes. Transported units do not have to disembark in order to shoot or use their firefight value if this unit is able to shoot, assault or lend support. Critical Hit Effect: The unit looses all of its weapons and has no close combat and firefight values. Subsequent critical hits destroy the unit."
    ]
  },
  "executor_landing_module": {
    "name": "Executor Landing Module",
    "type": "WE",
    "speed": "25cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Disintegrator Array",
        "range": "60cm",
        "firepower": "2x AA4+",
        "notes": []
      },
      {
        "name": "Heavy Phantom Lance",
        "range": "60cm",
        "firepower": "MW3+",
        "notes": [
          "FxF",
          "TK(D3)"
        ]
      },
      {
        "name": "Twin Desolators",
        "range": "30cm",
        "firepower": "4BP",
        "notes": [
          "FwA",
          "D"
        ]
      },
      {
        "name": "Hail of Splinters",
        "range": "45cm",
        "firepower": "3x AP4+/AT6+",
        "notes": []
      },
      {
        "name": "Hail of Splinters",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+2)"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 6",
      "Fearless",
      "Reinforced Armour",
      "Self Planetfall",
      "4 Shadowfields",
      "Support Craft",
      "Transport",
      "Webway Portal",
      "May transport eight armoured vehicle, light vehicle or war engine units; war engines count as a number of units equal to their starting damage capacity; plus 16 infantry units. Critical Hit Effect: The unit loses all of its weapons, has no close combat value and a firefight value of 6+. Subsequent critical hits cause one point of damage."
    ]
  },
  "kashnarak": {
    "name": "Kashnarak",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "-",
    "weapons": [
      {
        "name": "Massive Claws and Teeth",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+2)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 4",
      "Fearless",
      "Infiltrator",
      "Inspiring",
      "Scout",
      "Walker",
      "Critical Hit Effect: Destroyed."
    ]
  },
  "perditor": {
    "name": "Perditor",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Widowmaker",
        "range": "30cm",
        "firepower": "2BP",
        "notes": [
          "D",
          "Ind"
        ]
      },
      {
        "name": "Perditor Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Fearless",
      "Reinforced Armour",
      "Critical Hit Effect: The unit is destroyed."
    ]
  },
  "tormentor_titan": {
    "name": "Tormentor Titan",
    "type": "WE",
    "speed": "35cm",
    "armour": "5+",
    "cc": "3+",
    "ff": "4+",
    "weapons": [
      {
        "name": "2x Phantom Lances",
        "range": "45cm",
        "firepower": "MW3+",
        "notes": [
          "TK"
        ]
      },
      {
        "name": "Hail of Splinters",
        "range": "45cm",
        "firepower": "3x AP4+/AT6+",
        "notes": []
      },
      {
        "name": "Hail of Splinters",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+2)"
        ]
      },
      {
        "name": "Tormentor Blades",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+3)",
          "TK"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 4",
      "Fearless",
      "Jump Packs",
      "Reinforced Armour",
      "3 Shadowfields",
      "Walker",
      "Critical Hit Effect: The unit's speed value is reduced to 25cm and it loses the Jump Packs ability. Subsequent critical hits cause one point of damage."
    ]
  },
  "vessel_of_pain": {
    "name": "Vessel of Pain",
    "type": "WE",
    "speed": "30cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "2x Phantom Lances",
        "range": "45cm",
        "firepower": "MW3+",
        "notes": [
          "TK"
        ]
      },
      {
        "name": "2x Long-Barrel Splinter Cannon",
        "range": "45cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Desolator",
        "range": "30cm",
        "firepower": "2BP",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "2 Shadowfields",
      "Skimmer",
      "Critical Hit Effect: The unit is destroyed. All units within 5cm are subject to an AP5+ attack."
    ]
  },
  "raven_fighter": {
    "name": "Raven Fighter",
    "type": "AC",
    "speed": "Fighter",
    "armour": "4+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Twin Dark Lance",
        "range": "30cm",
        "firepower": "AT4+/AA5+",
        "notes": [
          "FxF",
          "L"
        ]
      },
      {
        "name": "Long-Barrel Splinter Cannon",
        "range": "30cm",
        "firepower": "AP5+/AA5+",
        "notes": [
          "FxF"
        ]
      }
    ],
    "abilities": []
  },
  "razorwing": {
    "name": "Razorwing",
    "type": "AC",
    "speed": "Fighter-Bomber",
    "armour": "4+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Razor Lances",
        "range": "30cm",
        "firepower": "MW3+",
        "notes": [
          "FxF",
          "Slw",
          "TK"
        ]
      },
      {
        "name": "2x Long-Barrel Splinter Cannon",
        "range": "30cm",
        "firepower": "AP5+/AA5+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Horrorfex",
        "range": "15cm",
        "firepower": "AP6+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": []
  },
  "slavebringer_assault_boat": {
    "name": "Slavebringer Assault Boat",
    "type": "AC/WE",
    "speed": "Bomber",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "2x Twin Dark Lance",
        "range": "30cm",
        "firepower": "AT4+/AA5+",
        "notes": [
          "FxF",
          "L"
        ]
      },
      {
        "name": "Turreted Splinter Cannons",
        "range": "30cm",
        "firepower": "AP5+/AA5+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Planetfall",
      "1 Shadowfield",
      "Transport",
      "May transport eight Talos or infantry units without Mounted ; Talos count as two units each; plus four units of Mandrakes. Critical Hit Effect: The unit and all units being carried are destroyed."
    ]
  },
  "corsair_class_escort": {
    "name": "Corsair Class Escort",
    "type": "SC",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Orbital Bombardment",
        "range": "n/a",
        "firepower": "2BP",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "0-1x Pin-Point Attack",
        "range": "n/a",
        "firepower": "MW2+",
        "notes": [
          "TK(D3)"
        ]
      }
    ],
    "abilities": [
      "Transport",
      "The Pin-Point Attack may be forfeited to transport three Slavebringer Assault Bolts and one Executor Landing Module plus the units being carried on them."
    ]
  },
  "torture_class_cruiser": {
    "name": "Torture Class Cruiser",
    "type": "SC",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Orbital Bombardment",
        "range": "n/a",
        "firepower": "6BP",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "0-1x Pin-Point Attacks",
        "range": "n/a",
        "firepower": "2x MW2+",
        "notes": [
          "TK(D3)"
        ]
      }
    ],
    "abilities": [
      "Transport",
      "May transport Six Slavebringer Assault Boats and an Executor Landing Module plus the units being carried on them. The Pin-Point Attacks may be forfeited to transport an additional four Slavebringer Assault Boats and two Executor Landing modules plus the units being carried on them."
    ]
  },
  "webway_portal": {
    "name": "Webway Portal",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "At the start of the game nominate one objective on your half of the table as a Webway Portal before setting up spacecraft and garrisons. The Webway Portal functions both as a Webway Portal and as an objective for the rules purposes. It may not be destroyed. Only formations consisting completely of infantry units, light vehicle units or armoured vehicles units with the Walker ability may use the Webway Portal to enter play."
    ]
  },
  "corsair_escorts": {
    "name": "Corsair Escorts",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list formation.",
      "Section: SPACESHIPS, AIRCRAFT & HORRORS",
      "Points: 0",
      "Options: Corsair Class Escort"
    ]
  },
  "executioner_landing_module": {
    "name": "Executioner Landing Module",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list formation.",
      "Section: SPACESHIPS, AIRCRAFT & HORRORS",
      "Points: 750"
    ]
  },
  "fighter_formation": {
    "name": "Fighter Formation",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list formation.",
      "Section: SPACESHIPS, AIRCRAFT & HORRORS",
      "Points: 0",
      "Options: Raven Fighter"
    ]
  },
  "bomber_formation": {
    "name": "Bomber Formation",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list formation.",
      "Section: SPACESHIPS, AIRCRAFT & HORRORS",
      "Points: 0",
      "Options: Razorwing Bomber"
    ]
  },
  "razorwing_bomber": {
    "name": "Razorwing Bomber",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 125",
      "Used in: Bomber Formation"
    ]
  },
  "ravagers": {
    "name": "4 Ravagers",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 0"
    ]
  },
  "ravagers_ref": {
    "name": "6 Ravagers",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 100"
    ]
  },
  "incubi_ref": {
    "name": "8 Incubi",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 150"
    ]
  },
  "wyches_ref": {
    "name": "8 Wyches",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 50"
    ]
  },
  "warriors_ref": {
    "name": "8 Warriors",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 50"
    ]
  },
  "mandrakes_ref": {
    "name": "8 Mandrakes",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 75"
    ]
  },
  "scourges_ref": {
    "name": "8 Scourges",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 75"
    ]
  },
  "haemonculus_grotesque": {
    "name": "Haemonculus, Grotesque",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 100",
      "Used in: Kabal Coterie, Kabal Syndicate"
    ]
  },
  "haemonculi_2_grotesques": {
    "name": "2 Haemonculi, 2 Grotesques",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 200",
      "Used in: Kabal Coterie"
    ]
  },
  "reavers_ref": {
    "name": "2 Reavers",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 50",
      "Used in: Wych Cult"
    ]
  },
  "hellions_ref": {
    "name": "2 Hellions",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 50",
      "Used in: Wych Cult"
    ]
  },
  "haemonculi_4_grotesques": {
    "name": "2 Haemonculi, 4 Grotesques",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 0"
    ]
  },
  "haemonculi_5_grotesques": {
    "name": "3 Haemonculi, 5 Grotesques",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 100"
    ]
  },
  "slavebringer": {
    "name": "Slavebringer",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 200",
      "Used in: Kabal Coterie, Kabal Syndicate, Talos Swarm, Wych Cult"
    ]
  },
  "perditors": {
    "name": "2 Perditors",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 300",
      "Used in: Haemonculi Coven, Talos Swarm"
    ]
  },
  "talos_ref": {
    "name": "2 Talos",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list option.",
      "Points: 100",
      "Used in: Haemonculi Coven"
    ]
  }
},
aliases: {
  "hellions": "hellions",
  "incubi": "incubi",
  "mandrakes": "mandrakes",
  "reavers": "reavers",
  "scourges": "scourges",
  "warp beasts": "warp_beasts",
  "warriors": "warriors",
  "wyches": "wyches",
  "talos": "talos",
  "corsair escorts": "corsair_class_escort",
  "fighter formation": "raven_fighter",
  "bomber formation": "razorwing",
  "executioner landing module": "executor_landing_module",
  "ravagers": "ravager",
  "perditors": "perditor",
  "slavebringer": "slavebringer_assault_boat",
  "slavebringer assault boat": "slavebringer_assault_boat",
  "raiders": "raider"
}
});

ArmyforgeUnitProfiles.findDarkEldarProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && ArmyforgeUnitProfiles.darkEldar.armyIds.indexOf(listId) === -1) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName);
	if (!normalized) {
		return null;
	}
	var key = ArmyforgeUnitProfiles.darkEldar.nameToKey[normalized] || ArmyforgeUnitProfiles.darkEldar.nameToKey[normalized.replace(/\s+/g, '')];
	if (!key) {
		return null;
	}
	var profile = ArmyforgeUnitProfiles.darkEldar.profiles[key];
	if (listId === "EL_dark_NETEA" && profile && profile.type === "Formation" && profile.speed === "n/a" && profile.armour === "n/a" && profile.cc === "n/a" && profile.ff === "n/a" && key !== "webway_portal") {
		return null;
	}
	return profile || null;
};
