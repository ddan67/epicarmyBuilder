// Source: https://tp.net-armageddon.org/army-lists/chaos-space-marine-iron-warriors.html
// Values extracted from archived JSON source; source-faithful runtime profiles generated from archived JSON.

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeChaosSpaceMarineName = ArmyforgeUnitProfiles.normalizeChaosSpaceMarineName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/['’]/g, '')
		.replace(/\([^)]*\)/g, ' ')
		.replace(/^\s*one of the following\s+/i, '')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, '')
		.replace(/^\s*\d+\s*[xX]?\s*/g, '')
		.replace(/^\s*(?:one|two|three|four|five|six|seven|eight|nine|ten)\s+/i, '')
		.replace(/\b(?:unit|units|company|companies|squadron|squadrons|pack|packs|retinue|retinues|wing|wings|cult|cults|circle|circles|force|forces|flight|flights|bomber|bombers|fighter|fighters|interceptor|interceptors|gunship|gunships)\b/g, ' ')
		.replace(/\b(?:daemonic|demonic)\b/g, 'daemon')
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
};

ArmyforgeUnitProfiles.createChaosSpaceMarineProfileSet = ArmyforgeUnitProfiles.createChaosSpaceMarineProfileSet || function(config) {
	var module = {
		armyIds: config.armyIds || [],
		profiles: {},
		nameToKey: {}
	};

	function registerAlias(alias, key) {
		if (!alias || !key) {
			return;
		}
		var normalized = ArmyforgeUnitProfiles.normalizeChaosSpaceMarineName(alias);
		if (!normalized) {
			return;
		}
		module.nameToKey[normalized] = key;
		var compact = normalized.replace(/\s+/g, '');
		if (compact) {
			module.nameToKey[compact] = key;
		}
	}

	for (var key in config.profiles) {
		if (config.profiles.hasOwnProperty(key)) {
			module.profiles[key] = config.profiles[key];
			registerAlias(config.profiles[key].name, key);
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

ArmyforgeUnitProfiles.chaosSpaceMarineIronWarriors = ArmyforgeUnitProfiles.createChaosSpaceMarineProfileSet({
	armyIds: ["CHAOS_ironwarriors_NETEA","CHAOS_iron_warriors_NETEA"],
	profiles: 	{
	  "iron_warriors_lord": {
	    "name": "Iron Warriors Lord",
	    "type": "CH",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "0-1x Daemon Weapon",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
	          "MW"
	        ]
	      },
	      {
	        "name": "0-1x Servo Arm",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+2)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Commander",
	      "Invulnerable Save",
	      "Leader",
	      "Armed with either a Daemon Weapon or a Servo Arm."
	    ]
	  },
	  "warsmith": {
	    "name": "Warsmith",
	    "type": "CH",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "0-1x Daemon Weapon",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
	          "MW"
	        ]
	      },
	      {
	        "name": "0-1x Servo Arm",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+2)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Commander",
	      "Supreme Commander",
	      "Armed with either a Daemon Weapon or a Servo Arm."
	    ]
	  },
	  "chaos_assault_marines": {
	    "name": "Chaos Assault Marines",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Bolters",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": []
	      }
	    ],
	    "abilities": []
	  },
	  "chaos_space_marine_chosen": {
	    "name": "Chaos Space Marine Chosen",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Autocannon",
	        "range": "45cm",
	        "firepower": "AP5+/AT6+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Scout"
	    ]
	  },
	  "iron_warriors_terminators": {
	    "name": "Iron Warriors Terminators",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP4+/AT6+",
	        "notes": []
	      },
	      {
	        "name": "Heavy Flamer",
	        "range": "15cm",
	        "firepower": "AP4+",
	        "notes": [
	          "IC"
	        ]
	      },
	      {
	        "name": "Heavy Flamer",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "IC"
	        ]
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
	      "Reinforced Armour",
	      "Teleport",
	      "Thick Rear Armour",
	      "Counts as a Chaos Space Marine Terminators for the purposes of being transported."
	    ]
	  },
	  "chaos_space_marines": {
	    "name": "Chaos Space Marines",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Autocannon",
	        "range": "45cm",
	        "firepower": "AP5+/AT6+",
	        "notes": []
	      }
	    ],
	    "abilities": []
	  },
	  "daemon_prince": {
	    "name": "Daemon Prince",
	    "type": "INF",
	    "speed": "15cm (30cm)",
	    "armour": "3+ (4+)",
	    "cc": "3+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Warp Blast",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "EA(+1)",
	          "MW"
	        ]
	      },
	      {
	        "name": "Possessed Weapon",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+2)",
	          "MW"
	        ]
	      }
	    ],
	    "abilities": [
	      "Commander",
	      "Fearless",
	      "Leader",
	      "Reinforced Armour",
	      "Teleport",
	      "A Daemon Prince may have wings, the unit gains Jump Packs and a move of 30cm, while its armour value is reduced to 4+."
	    ]
	  },
	  "havocs": {
	    "name": "Havocs",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "5+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "2x Autocannon",
	        "range": "45cm",
	        "firepower": "AP5+/AT6+",
	        "notes": []
	      }
	    ],
	    "abilities": []
	  },
	  "obliterators": {
	    "name": "Obliterators",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "2+",
	    "weapons": [
	      {
	        "name": "3x Body Weapons",
	        "range": "45cm",
	        "firepower": "AP5+/AT5+/AA6+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Fearless",
	      "Reinforced Armour",
	      "Teleport",
	      "Thick Rear Armour"
	    ]
	  },
	  "raptors": {
	    "name": "Raptors",
	    "type": "INF",
	    "speed": "30cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Bolt Pistols",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Jump Packs"
	    ]
	  },
	  "basilisk": {
	    "name": "Basilisk",
	    "type": "AV",
	    "speed": "20cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "5+",
	    "weapons": [
	      {
	        "name": "Earthshaker",
	        "range": "120cm",
	        "firepower": "AP4+/AT4+",
	        "notes": []
	      },
	      {
	        "name": "Earthshaker",
	        "range": "120cm",
	        "firepower": "1BP",
	        "notes": [
	          "Ind"
	        ]
	      },
	      {
	        "name": "Heavy Bolter",
	        "range": "30cm",
	        "firepower": "AP5+",
	        "notes": []
	      }
	    ],
	    "abilities": []
	  },
	  "chaos_dreadnought": {
	    "name": "Chaos Dreadnought",
	    "type": "AV",
	    "speed": "15cm",
	    "armour": "3+",
	    "cc": "4+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Twin Autocannon",
	        "range": "45cm",
	        "firepower": "AP4+/AT5+",
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
	  "chaos_land_raider": {
	    "name": "Chaos Land Raider",
	    "type": "AV",
	    "speed": "25cm",
	    "armour": "4+",
	    "cc": "6+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "2x Twin Lascannon",
	        "range": "45cm",
	        "firepower": "AT4+",
	        "notes": []
	      },
	      {
	        "name": "Twin Heavy Bolter",
	        "range": "30cm",
	        "firepower": "AP4+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Reinforced Armour",
	      "Thick Rear Armour",
	      "Transport",
	      "May transport one unit of Chaos Space Marine Terminators or Obliterators, or two infantry units (except Daemon Princes) without Jump Packs or Mounted ."
	    ]
	  },
	  "chaos_predator": {
	    "name": "Chaos Predator",
	    "type": "AV",
	    "speed": "30cm",
	    "armour": "4+",
	    "cc": "6+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Twin Lascannon",
	        "range": "45cm",
	        "firepower": "AT4+",
	        "notes": []
	      },
	      {
	        "name": "2x Heavy Bolter",
	        "range": "30cm",
	        "firepower": "AP5+",
	        "notes": []
	      }
	    ],
	    "abilities": []
	  },
	  "chaos_rhino": {
	    "name": "Chaos Rhino",
	    "type": "AV",
	    "speed": "30cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "6+",
	    "weapons": [
	      {
	        "name": "Combi-Bolter",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Transport",
	      "May transport two infantry units (except Chaos Space Marine Terminators, Daemon Princes and Obliterators) without Jump Packs or Mounted ."
	    ]
	  },
	  "chaos_siege_dreadnought": {
	    "name": "Chaos Siege Dreadnought",
	    "type": "AV",
	    "speed": "15cm",
	    "armour": "3+",
	    "cc": "4+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Power Fist",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
	          "MW"
	        ]
	      },
	      {
	        "name": "Siege Drills",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+2)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Fearless",
	      "Walker",
	      "Counts as a Chaos Dreadnought for the purposes of being transported."
	    ]
	  },
	  "chaos_vindicator": {
	    "name": "Chaos Vindicator",
	    "type": "AV",
	    "speed": "25cm",
	    "armour": "4+",
	    "cc": "6+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Demolisher",
	        "range": "30cm",
	        "firepower": "AP3+/AT4+",
	        "notes": [
	          "IC"
	        ]
	      }
	    ],
	    "abilities": [
	      "Walker"
	    ]
	  },
	  "daemonic_artillery": {
	    "name": "Daemonic Artillery",
	    "type": "AV",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "6+",
	    "weapons": [
	      {
	        "name": "Plague Catapult",
	        "range": "45cm",
	        "firepower": "1BP",
	        "notes": [
	          "IC",
	          "Ind"
	        ]
	      }
	    ],
	    "abilities": [
	      "Fearless",
	      "Invulnerable Save"
	    ]
	  },
	  "defiler": {
	    "name": "Defiler",
	    "type": "AV",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Battle Cannon",
	        "range": "75cm",
	        "firepower": "AP4+/AT4+",
	        "notes": []
	      },
	      {
	        "name": "Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP4+/AT6+",
	        "notes": []
	      },
	      {
	        "name": "Twin Heavy Flamer",
	        "range": "15cm",
	        "firepower": "AP3+",
	        "notes": [
	          "IC"
	        ]
	      },
	      {
	        "name": "Battle Claws",
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
	      "Infiltrator",
	      "Invulnerable Save",
	      "Walker"
	    ]
	  },
	  "stalker": {
	    "name": "Stalker",
	    "type": "AV",
	    "speed": "30cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "6+",
	    "weapons": [
	      {
	        "name": "Stalker Autocannon",
	        "range": "30cm",
	        "firepower": "2x AP5+/AT6+/AA5+",
	        "notes": []
	      }
	    ],
	    "abilities": []
	  },
	  "decimator": {
	    "name": "Decimator",
	    "type": "WE",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Decimator Cannon",
	        "range": "45cm",
	        "firepower": "3BP",
	        "notes": [
	          "FxF",
	          "IC",
	          "MW"
	        ]
	      },
	      {
	        "name": "2x Twin Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP3+/AT5+",
	        "notes": [
	          "Left"
	        ]
	      },
	      {
	        "name": "2x Twin Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP3+/AT5+",
	        "notes": [
	          "Right"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 3",
	      "Fearless",
	      "Reinforced Armour",
	      "Critical Hit Effect: Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a hit on a roll of 6+."
	    ]
	  },
	  "ordinatus_medrengard": {
	    "name": "Ordinatus Medrengard",
	    "type": "WE",
	    "speed": "10cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Medrengard Siege Cannon",
	        "range": "60cm",
	        "firepower": "9BP",
	        "notes": [
	          "FxF",
	          "D",
	          "Ind"
	        ]
	      },
	      {
	        "name": "2x Lascannon",
	        "range": "45cm",
	        "firepower": "AT5+",
	        "notes": []
	      },
	      {
	        "name": "2x Heavy Bolter",
	        "range": "30cm",
	        "firepower": "AP5+/AA6+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 4",
	      "Reinforced Armour",
	      "4 Void Shields",
	      "Critical Hit Effect: Destroyed. All units within 15cm of the model suffer a hit on a roll of 4+."
	    ]
	  },
	  "ravager_titan": {
	    "name": "Ravager Titan",
	    "type": "WE",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Doomburner",
	        "range": "45cm",
	        "firepower": "MW2+",
	        "notes": [
	          "FxF",
	          "IC",
	          "TK(D3)"
	        ]
	      },
	      {
	        "name": "2x Death Storm",
	        "range": "45cm",
	        "firepower": "4x AP4+/AT4+",
	        "notes": [
	          "FwA"
	        ]
	      },
	      {
	        "name": "Battlehead",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "EA(+2)"
	        ]
	      },
	      {
	        "name": "Tail",
	        "range": "75cm",
	        "firepower": "AP4+/AT4+",
	        "notes": []
	      },
	      {
	        "name": "Tail",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 6",
	      "Fearless",
	      "Reinforced Armour",
	      "4 Void Shields",
	      "Walker",
	      "May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 5+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
	    ]
	  },
	  "siege_lord_titan": {
	    "name": "Siege Lord Titan",
	    "type": "WE",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "2+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Hellstrike Cannon",
	        "range": "60cm",
	        "firepower": "3BP",
	        "notes": [
	          "FxF",
	          "IC",
	          "MW"
	        ]
	      },
	      {
	        "name": "Power Claw",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+3)",
	          "TK(D3)"
	        ]
	      },
	      {
	        "name": "Doomburner",
	        "range": "45cm",
	        "firepower": "MW2+",
	        "notes": [
	          "FxF",
	          "IC",
	          "TK(D3)"
	        ]
	      },
	      {
	        "name": "Tail",
	        "range": "75cm",
	        "firepower": "AP4+/AT4+",
	        "notes": []
	      },
	      {
	        "name": "Tail",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 8",
	      "Fearless",
	      "Reinforced Armour",
	      "Thick Rear Armour",
	      "Transport",
	      "6 Void Shields",
	      "Walker",
	      "May transport ten infantry units without Jump Packs or Mounted , Chaos Dreadnoughts; Chaos Terminators, Obliterators and Chaos Dreadnoughts count as two units each. May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 4+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
	    ]
	  },
	  "harbinger": {
	    "name": "Harbinger",
	    "type": "AC/WE",
	    "speed": "Bomber",
	    "armour": "5+",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP4+/AT6+/AA5+",
	        "notes": [
	          "FxF"
	        ]
	      },
	      {
	        "name": "Reaper Autocannon",
	        "range": "15cm",
	        "firepower": "AP4+/AT6+/AA5+",
	        "notes": [
	          "Left"
	        ]
	      },
	      {
	        "name": "Reaper Autocannon",
	        "range": "15cm",
	        "firepower": "AP4+/AT6+/AA5+",
	        "notes": [
	          "Right"
	        ]
	      },
	      {
	        "name": "Incendiary Bombs",
	        "range": "15cm",
	        "firepower": "6BP",
	        "notes": [
	          "FxF",
	          "IC"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 4",
	      "Invulnerable Save",
	      "Reinforced Armour",
	      "Critical Hit Effect: The unit is destroyed."
	    ]
	  },
	  "hell_blade": {
	    "name": "Hell Blade",
	    "type": "AC",
	    "speed": "Fighter",
	    "armour": "6+",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "2x Reaper Autocannon",
	        "range": "15cm",
	        "firepower": "AP4+/AT6+/AA5+",
	        "notes": [
	          "FxF"
	        ]
	      }
	    ],
	    "abilities": []
	  },
	  "hell_talon": {
	    "name": "Hell Talon",
	    "type": "AC",
	    "speed": "Fighter-Bomber",
	    "armour": "5+",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Bombs",
	        "range": "15cm",
	        "firepower": "2BP",
	        "notes": [
	          "FxF",
	          "IC"
	        ]
	      },
	      {
	        "name": "Twin Lascannon",
	        "range": "30cm",
	        "firepower": "AT4+/AA4+",
	        "notes": [
	          "FxF"
	        ]
	      },
	      {
	        "name": "Havoc Launcher",
	        "range": "45cm",
	        "firepower": "AP5+/AT6+",
	        "notes": [
	          "FxF"
	        ]
	      }
	    ],
	    "abilities": []
	  },
	  "despoiler_class_battleship": {
	    "name": "Despoiler Class Battleship",
	    "type": "SC",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Orbital Bombardment",
	        "range": "n/a",
	        "firepower": "3BP",
	        "notes": [
	          "MW"
	        ]
	      },
	      {
	        "name": "3x Pin-Point Attack",
	        "range": "n/a",
	        "firepower": "MW2+",
	        "notes": [
	          "TK(D3)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Slow and Steady",
	      "Transport",
	      "May transport 40 infantry units or Chaos Dreadnoughts; plus nine Chaos Thunderhawks and enough Dreadclaws to transport any other units being carried."
	    ]
	  },
	  "devastation_class_cruiser": {
	    "name": "Devastation Class Cruiser",
	    "type": "SC",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Orbital Bombardment",
	        "range": "n/a",
	        "firepower": "3BP",
	        "notes": [
	          "MW"
	        ]
	      },
	      {
	        "name": "Pin-Point Attack",
	        "range": "n/a",
	        "firepower": "MW2+",
	        "notes": [
	          "TK(D3)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Transport",
	      "May transport 20 infantry units or Chaos Dreadnoughts; plus six Chaos Thunderhawks and enough Dreadclaws to transport any other units being carried."
	    ]
	  },
	  "dreadclaw": {
	    "name": "Dreadclaw",
	    "type": "Special",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [],
	    "abilities": [
	      "Planetfall",
	      "Transport",
	      "May transport one formation of infantry units (except Chaos Space Marine Bikes) and Chaos Dreadnoughts. The Dreadclaw does not scatter 2d6cm after being placed within 15cm of the drop zone co-ordinates recorded at the start of the game (see Planetfall ). Any troops carried in the Dreadclaw must disembark within 5cm of the Dreadclaw or within 5cm of another unit from the same formation that has already landed, so long as all units are placed within 15cm of the Dreadclaw. Dreadclaw models should be removed from the board once the formation they transport has disembarked."
	    ]
	  }
	},
	aliases: 	{
	  "iron warrior terminator": "iron_warriors_terminators",
	  "iron warriors terminator": "iron_warriors_terminators",
	  "terminator": "iron_warriors_terminators",
	  "terminators": "iron_warriors_terminators",
	  "chosen": "chaos_space_marine_chosen",
	  "chaos chosen": "chaos_space_marine_chosen",
	  "chaos space marine scouts": "chaos_space_marine_chosen",
	  "scouts": "chaos_space_marine_chosen",
	  "iron warrior assault marines": "chaos_assault_marines",
	  "chaos assault marines": "chaos_assault_marines",
	  "dreadnought warsmith": "warsmith",
	  "dreadnought warsmith supreme commander": "warsmith",
	  "chaos basilisk": "basilisk",
	  "chaos basilisks": "basilisk",
	  "basilisk": "basilisk",
	  "basilisks": "basilisk",
	  "siegelord titan": "siege_lord_titan",
	  "chaos thunderhawk gunship": "chaos_thunderhawk",
	  "thunderhawk": "chaos_thunderhawk",
	  "raptor": "raptors",
	  "chaos warlord supreme commander": "warsmith",
	  "daemon prince supreme commander": "daemon_prince"
	}
});

ArmyforgeUnitProfiles.findChaosSpaceMarineIronWarriorsProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.chaosSpaceMarineIronWarriors.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeChaosSpaceMarineName(displayName);
	var key = ArmyforgeUnitProfiles.chaosSpaceMarineIronWarriors.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.chaosSpaceMarineIronWarriors.profiles[key] || null;
};
