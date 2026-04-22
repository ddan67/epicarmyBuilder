// Source: https://tp.net-armageddon.org/army-lists/squat.html
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
		.replace(/\b(?:m|l)\b/g, " ")
		.replace(/[^a-z0-9]+/g, " ")
		.replace(/\b(?:unit|units|character|characters|squadron|squadrons|group|groups|cadre|cadres|maniple|maniples|phalanx|phalanxes|kindred|kindreds|dropship|dropships|formation|formations|pack|packs|team|teams|flight|flights|fighter|fighters|bomber|bombers|gunship|gunships|support|supports)\b/g, " ")
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

ArmyforgeUnitProfiles.squat = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: ["XENOS_squats_NETEA"],
	profiles: {
  "grand_warlord": {
    "name": "Grand Warlord",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Power Weapon",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Supreme Commander"
    ]
  },
  "living_ancestor": {
    "name": "Living Ancestor",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Inspiring",
      "The formation that includes the Living Ancestor may ignore the -1 Action test penalty when it tries to retain the initiative. If added to an infantry unit the Living Ancestor will also have the invulnerable save ability."
    ]
  },
  "berserkers": {
    "name": "Berserkers",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Bolt Pistols",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "Infiltrator"
    ]
  },
  "guild_bikers": {
    "name": "Guild Bikers",
    "type": "INF",
    "speed": "35cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Lasguns",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "Mounted"
    ]
  },
  "hearthguard": {
    "name": "Hearthguard",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Heirloom Weapons",
        "range": "30cm",
        "firepower": "AP5+/AT5+",
        "notes": []
      }
    ],
    "abilities": [
      "Inspiring",
      "Leader"
    ]
  },
  "mole_mortar": {
    "name": "Mole Mortar",
    "type": "INF",
    "speed": "10cm",
    "armour": "-",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Mole Mortar",
        "range": "30cm",
        "firepower": "1BP",
        "notes": [
          "IC",
          "Ind"
        ]
      }
    ],
    "abilities": [
      "Counts as two units for the purposes of being transported."
    ]
  },
  "rapier": {
    "name": "Rapier",
    "type": "INF",
    "speed": "10cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Laser Destroyer",
        "range": "45cm",
        "firepower": "AP6+/AT4+",
        "notes": []
      }
    ],
    "abilities": [
      "Counts as two units for the purposes of being transported."
    ]
  },
  "tarantula": {
    "name": "Tarantula",
    "type": "INF",
    "speed": "10cm",
    "armour": "-",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "2x Lascannon",
        "range": "45cm",
        "firepower": "AT5+",
        "notes": []
      }
    ],
    "abilities": [
      "Counts as two units for the purposes of being transported."
    ]
  },
  "thudd_gun": {
    "name": "Thudd Gun",
    "type": "INF",
    "speed": "10cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Thudd Gun",
        "range": "45cm",
        "firepower": "AP4+/AT6+",
        "notes": [
          "Ind"
        ]
      }
    ],
    "abilities": [
      "Counts as two units for the purposes of being transported."
    ]
  },
  "thunderers": {
    "name": "Thunderers",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Missile Launcher",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "2x Twin Heavy Bolter",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "warlord": {
    "name": "Warlord",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Bolters",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Power Weapons",
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
      "Inspiring",
      "Leader",
      "Reinforced Armour",
      "Thick Rear Armour",
      "Counts as two units for the purposes of being transported."
    ]
  },
  "warriors": {
    "name": "Warriors",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Missile Launcher",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Lasguns",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "One unit in every two has an Missile Launcher."
    ]
  },
  "guild_trike": {
    "name": "Guild Trike",
    "type": "LV",
    "speed": "35cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Multi-melta",
        "range": "15cm",
        "firepower": "MW5+",
        "notes": []
      },
      {
        "name": "Multi-melta",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "MW"
        ]
      }
    ],
    "abilities": []
  },
  "guildmaster": {
    "name": "Guildmaster",
    "type": "LV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Bolters",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Power Lance",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "FS",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Commander",
      "Leader"
    ]
  },
  "colossus_class_robot": {
    "name": "Colossus Class Robot",
    "type": "AV",
    "speed": "15cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Multi-melta",
        "range": "15cm",
        "firepower": "MW5+",
        "notes": []
      },
      {
        "name": "Multi-melta",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "Power Fist",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Walker"
    ]
  },
  "conqueror_class_robot": {
    "name": "Conqueror Class Robot",
    "type": "AV",
    "speed": "15cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Autocannon",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Power Fist",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Walker"
    ]
  },
  "iron_eagle": {
    "name": "Iron Eagle",
    "type": "AV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Stub Battle Cannon",
        "range": "45cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Rapid Fire Autocannon",
        "range": "45cm",
        "firepower": "2x AP5+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Scout",
      "Skimmer"
    ]
  },
  "recon_iron_eagle": {
    "name": "Recon Iron Eagle",
    "type": "AV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Stub Battle Cannon",
        "range": "45cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Rapid Fire Autocannon",
        "range": "45cm",
        "firepower": "2x AP5+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Scout",
      "Spotter",
      "Support Craft"
    ]
  },
  "rhino": {
    "name": "Rhino",
    "type": "AV",
    "speed": "30cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Storm Bolter",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "Transport",
      "May transport two infantry units (except Terminator units) without Jump Packs or Mounted ."
    ]
  },
  "steel_hawk": {
    "name": "Steel Hawk",
    "type": "AV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Battlehammer Rockets",
        "range": "15cm",
        "firepower": "1BP",
        "notes": []
      },
      {
        "name": "Twin Multi-melta",
        "range": "15cm",
        "firepower": "MW4+",
        "notes": []
      },
      {
        "name": "Twin Multi-melta",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "MW"
        ]
      }
    ],
    "abilities": [
      "Scout",
      "Skimmer"
    ]
  },
  "termite": {
    "name": "Termite",
    "type": "AV",
    "speed": "20cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "-",
    "weapons": [],
    "abilities": [
      "Transport",
      "Tunneler",
      "May transport two infantry units without Jump Packs or Mounted ."
    ]
  },
  "thunderfire": {
    "name": "Thunderfire",
    "type": "AV",
    "speed": "Immobile",
    "armour": "5+",
    "cc": "6+",
    "ff": "3+",
    "weapons": [
      {
        "name": "Twin Battle Cannon",
        "range": "75cm",
        "firepower": "AP3+/AT3+",
        "notes": []
      },
      {
        "name": "Thunderfire",
        "range": "60cm",
        "firepower": "AA4+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "war_hawk": {
    "name": "War Hawk",
    "type": "AV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Doom Anvil Missiles",
        "range": "45cm",
        "firepower": "AT3+",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Scout",
      "Skimmer"
    ]
  },
  "colossus": {
    "name": "Colossus",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Doomsday Cannon",
        "range": "90cm",
        "firepower": "3BP",
        "notes": [
          "FxF",
          "Dir",
          "MW"
        ]
      },
      {
        "name": "4x Rapid Fire Battle Cannon",
        "range": "75cm",
        "firepower": "2x AP4+/AT4+",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "Thunderer",
        "range": "30cm",
        "firepower": "AP3+/AT4+",
        "notes": [
          "FxF",
          "IC"
        ]
      },
      {
        "name": "4x Plasma Missile",
        "range": "45cm",
        "firepower": "2BP",
        "notes": [
          "FwA",
          "Ind",
          "SS"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 5",
      "Fearless",
      "Reinforced Armour",
      "Thick Rear Armour",
      "6 Void Shields",
      "Critical Hit Effect: The unit takes an extra point of damage and is immobilized. Subsequent critical hits destroy the unit and all units within 5cm of the model suffer a hit on a roll of 4+."
    ]
  },
  "cyclops": {
    "name": "Cyclops",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Hellfury Cannon",
        "range": "90cm",
        "firepower": "MW2+",
        "notes": [
          "FxF",
          "TK(D6+1)"
        ]
      },
      {
        "name": "Rapid Fire Battle Cannon",
        "range": "75cm",
        "firepower": "2x AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Melta Cannon",
        "range": "30cm",
        "firepower": "MW2+",
        "notes": [
          "FxF",
          "TK(D3)"
        ]
      },
      {
        "name": "Melta Cannon",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)",
          "TK(D6)"
        ]
      },
      {
        "name": "6x Doomstorm Missile",
        "range": "45cm",
        "firepower": "1BP",
        "notes": [
          "FwA",
          "Ind",
          "SS"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 5",
      "Fearless",
      "Reinforced Armour",
      "Thick Rear Armour",
      "5 Void Shields",
      "Critical Hit Effect: The unit takes an extra point of damage and will take an extra point of damage whenever the Hellfury Cannon misses. Subsequent critical hits destroy the unit and all units within 5cm of the model suffer a hit on a roll of 4+."
    ]
  },
  "goliath": {
    "name": "Goliath",
    "type": "WE",
    "speed": "5cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Mega Cannon",
        "range": "150cm",
        "firepower": "3BP",
        "notes": [
          "IC",
          "Ind"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "This unit must fire indirectly or not fire at all. Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 4+."
    ]
  },
  "land_train": {
    "name": "Land Train",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Doomsday Cannon",
        "range": "90cm",
        "firepower": "3BP",
        "notes": [
          "FxF",
          "Dir",
          "MW"
        ]
      },
      {
        "name": "Rapid Fire Battle Cannon",
        "range": "75cm",
        "firepower": "2x AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Rapid Fire Battle Cannon",
        "range": "75cm",
        "firepower": "2x AP4+/AT4+",
        "notes": [
          "FxF"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Fearless",
      "Reinforced Armour",
      "Thick Rear Armour",
      "2 Void Shields",
      "Characters added to this unit add their damage capacity and void shields to the unit's respective starting values of each. Critical Hit Effect: Choose a random character added to this unit and remove it, remembering to reduce the unit's starting damage capacity and void shields values. The unit is immobilized for its next activation or withdrawal. If the unit doesn't have any characters added to it then it is destroyed."
    ]
  },
  "leviathan": {
    "name": "Leviathan",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Doomsday Cannon",
        "range": "90cm",
        "firepower": "3BP",
        "notes": [
          "FxF",
          "Dir",
          "MW"
        ]
      },
      {
        "name": "Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "3x Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+",
        "notes": [
          "Left"
        ]
      },
      {
        "name": "3x Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+",
        "notes": [
          "Right"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 5",
      "Fearless",
      "Reinforced Armour",
      "Transport",
      "Thick Rear Armour",
      "4 Void Shields",
      "May transport twenty-four infantry units without Jump Packs or Mounted . Critical Hit Effect: The unit takes a point of damage and D3 units of the player's choice that are being transported are destroyed. Subsequent critical hits destroy the unit and all units within 5cm of the model suffer a hit on a roll of 4+."
    ]
  },
  "mole": {
    "name": "Mole",
    "type": "WE",
    "speed": "20cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "-",
    "weapons": [],
    "abilities": [
      "Damage Capacity 2",
      "Transport",
      "Tunneler",
      "Critical Hit Effect: Destroyed. May transport ten infantry units without Jump Packs or Mounted ."
    ]
  },
  "overlord": {
    "name": "Overlord",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "2x Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": [
          "Left"
        ]
      },
      {
        "name": "Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": [
          "Right"
        ]
      },
      {
        "name": "2x Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": [
          "RrA"
        ]
      },
      {
        "name": "2x Twin Autocannon",
        "range": "45cm",
        "firepower": "AP4+/AT5+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Melta Bombs",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "MW"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "Invulnerable Save",
      "Reinforced Armour",
      "Support Craft",
      "Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 5+."
    ]
  },
  "berserker_battlecar": {
    "name": "Berserker Battlecar",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Rapid Fire Autocannon",
        "range": "45cm",
        "firepower": "2x AP5+/AT6+",
        "notes": [
          "FwA"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 1",
      "Transport",
      "1 Void Shield",
      "May transport six infantry units without Jump Packs or Mounted ."
    ]
  },
  "bomb_battlecar": {
    "name": "Bomb Battlecar",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Rad Bomb",
        "range": "Unlimited",
        "firepower": "6BP",
        "notes": [
          "Ind",
          "MW",
          "SS"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 1",
      "1 Void Shield"
    ]
  },
  "dragon_battlecar": {
    "name": "Dragon Battlecar",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Firethrower",
        "range": "30cm",
        "firepower": "4x AP4+/AT5+",
        "notes": [
          "FwA",
          "IC"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 1",
      "1 Void Shield"
    ]
  },
  "fire_shield_battlecar": {
    "name": "Fire Shield Battlecar",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Rapid Fire Autocannon",
        "range": "45cm",
        "firepower": "2x AP5+/AT6+",
        "notes": [
          "FwA"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 1",
      "3 Void Shields",
      "The unit can repair one additional void shield in the end phase of each turn."
    ]
  },
  "iron_eagle_battlecar": {
    "name": "Iron Eagle Battlecar",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Damage Capacity 1",
      "1 Void Shield"
    ]
  },
  "motar_battlecar": {
    "name": "Motar Battlecar",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Siege Mortar",
        "range": "45cm",
        "firepower": "1BP",
        "notes": [
          "Ind",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 1",
      "1 Void Shield"
    ]
  },
  "skyhammer_battlecar": {
    "name": "Skyhammer Battlecar",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Ack-Ack Missiles",
        "range": "45cm",
        "firepower": "2x AA4+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 1",
      "1 Void Shield"
    ]
  },
  "artillery_battery": {
    "name": "Artillery Battery",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Squat Artillery Battery formation slot.",
      "Options: Mole Mortar, Rapier, Tarantula, Thudd Gun."
    ]
  },
  "gyrocopter_wing": {
    "name": "Gyrocopter Wing",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Squat Gyrocopter Wing formation slot.",
      "Options: Iron Eagle, Steel Hawk, War Hawk."
    ]
  },
  "guild_robot_squadron": {
    "name": "Guild Robot Squadron",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Squat Guild Robot Squadron formation slot.",
      "Options: Colossus Class Robot, Conqueror Class Robot."
    ]
  },
  "guild_squadron": {
    "name": "Guild Squadron",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Squat Guild Squadron formation slot.",
      "Options: Guild Bikers, Guild Trike."
    ]
  },
  "thunderfire_battery": {
    "name": "Thunderfire Battery",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Squat Thunderfire Battery formation slot.",
      "Options: Thunderfire."
    ]
  }
},
	aliases: {
  "berserker": "berserkers",
  "thunderer": "thunderers",
  "warrior": "warriors",
  "artillery battery": "artillery_battery",
  "gyrocopter wing": "gyrocopter_wing",
  "guild robot squadron": "guild_robot_squadron",
  "guild squadron": "guild_squadron",
  "thunderfire battery": "thunderfire_battery",
  "grand warlord": "grand_warlord",
  "living ancestor": "living_ancestor",
  "colossus class robot": "colossus_class_robot",
  "conqueror class robot": "conqueror_class_robot",
  "guild bikers": "guild_bikers",
  "guild trike": "guild_trike",
  "hearthguard": "hearthguard",
  "mole mortar": "mole_mortar",
  "rapier": "rapier",
  "tarantula": "tarantula",
  "thudd gun": "thudd_gun",
  "thunderfire": "thunderfire",
  "iron eagle": "iron_eagle",
  "steel hawk": "steel_hawk",
  "war hawk": "war_hawk",
  "goliath": "goliath",
  "colossus": "colossus",
  "cyclops": "cyclops",
  "land train": "land_train",
  "leviathan": "leviathan",
  "berzerker battlecar": "berserker_battlecar",
  "bomb battlecar": "bomb_battlecar",
  "dragon battlecar": "dragon_battlecar",
  "fire shield battlecar": "fire_shield_battlecar",
  "iron eagle battlecar": "iron_eagle_battlecar",
  "motar battlecar": "motar_battlecar",
  "skyhammer battlecar": "skyhammer_battlecar"
}
});

ArmyforgeUnitProfiles.findSquatProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.squat.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName);
	var key = ArmyforgeUnitProfiles.squat.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.squat.profiles[key] || null;
};
