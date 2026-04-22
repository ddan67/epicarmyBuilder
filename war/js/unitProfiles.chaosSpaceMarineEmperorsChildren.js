// Source: https://tp.net-armageddon.org/army-lists/chaos-space-marine-emperors-children.html
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

ArmyforgeUnitProfiles.chaosSpaceMarineEmperorsChildren = ArmyforgeUnitProfiles.createChaosSpaceMarineProfileSet({
	armyIds: ["CHAOS_ec_NETEA","CHAOS_emperors_children_NETEA"],
	profiles: 	{
	  "champion_of_chaos": {
	    "name": "Champion of Chaos",
	    "type": "CH",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Daemon Artifact",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
	          "FS"
	        ]
	      },
	      {
	        "name": "Daemon Bolt",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "EA(+1)",
	          "FS"
	        ]
	      }
	    ],
	    "abilities": [
	      "Augmented Summoning (+2D3)",
	      "Invulnerable Save",
	      "A Champion of Chaos added to a formation that belongs to Khorne, Nurgle or Chaos Undivided has a Daemon Artifact weapon. A Champion of Chaos added to a formation that belongs to Slaanesh or Tzeentch has a Daemon Bolt weapon. A unit with this character may be sacrificed (removed from play without its formation receiving a Blast marker) before rolling for summoning points. This changes its Augmented Summoning from (+2D3) to (+6), and a Greater Daemon must be summoned. Place the Greater Daemon within 10cm of the point where the sacrificed unit was removed."
	    ]
	  },
	  "chaos_lord": {
	    "name": "Chaos Lord",
	    "type": "CH",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Daemon Weapon",
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
	  "chaos_warlord": {
	    "name": "Chaos Warlord",
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
	  "icon_bearer": {
	    "name": "Icon Bearer",
	    "type": "CH",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [],
	    "abilities": [
	      "Daemonic Focus",
	      "Invulnerable Save",
	      "Leader"
	    ]
	  },
	  "sorcerer_lord": {
	    "name": "Sorcerer Lord",
	    "type": "CH",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Warp Bolt",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
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
	  "chaos_space_marine_bikes": {
	    "name": "Chaos Space Marine Bikes",
	    "type": "INF",
	    "speed": "35cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Twin Bolters",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Mounted"
	    ]
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
	  "daemonettes": {
	    "name": "Daemonettes",
	    "type": "INF",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "-",
	    "weapons": [],
	    "abilities": [
	      "Expendable",
	      "First Strike",
	      "Invulnerable Save"
	    ]
	  },
	  "emperor_s_children_terminators": {
	    "name": "Emperor's Children Terminators",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "2x Blastmaster",
	        "range": "30cm",
	        "firepower": "AP5+/AT6+",
	        "notes": [
	          "D"
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
	      "Counts as Chaos Space Marine Terminators for the purposes of being transported."
	    ]
	  },
	  "fiends_of_slaanesh": {
	    "name": "Fiends of Slaanesh",
	    "type": "INF",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "-",
	    "weapons": [],
	    "abilities": [
	      "Expendable",
	      "Infiltrator",
	      "Invulnerable Save"
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
	  "noise_marines": {
	    "name": "Noise Marines",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Blastmaster",
	        "range": "30cm",
	        "firepower": "AP5+/AT6+",
	        "notes": [
	          "D"
	        ]
	      }
	    ],
	    "abilities": [
	      "Fearless"
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
	  "steeds_of_slaanesh": {
	    "name": "Steeds of Slaanesh",
	    "type": "INF",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "-",
	    "weapons": [],
	    "abilities": [
	      "Expendable",
	      "First Strike",
	      "Infiltrator",
	      "Invulnerable Save",
	      "Mounted"
	    ]
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
	  "emperor_s_children_dreadnought": {
	    "name": "Emperor's Children Dreadnought",
	    "type": "AV",
	    "speed": "15cm",
	    "armour": "3+",
	    "cc": "4+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Twin Blastmaster",
	        "range": "30cm",
	        "firepower": "AP4+/AT5+",
	        "notes": [
	          "D"
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
	      "Walker",
	      "Counts as Chaos Dreadnought for the purposes of being transported."
	    ]
	  },
	  "emperor_s_children_land_raider": {
	    "name": "Emperor's Children Land Raider",
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
	        "name": "Twin Blastmaster",
	        "range": "30cm",
	        "firepower": "AP4+/AT5+",
	        "notes": [
	          "D"
	        ]
	      }
	    ],
	    "abilities": [
	      "Reinforced Armour",
	      "Thick Rear Armour",
	      "Transport",
	      "May transport one unit of Chaos Space Marine Terminators or Obliterators, or two infantry units (except Daemon Princes) without Jump Packs or Mounted ."
	    ]
	  },
	  "emperor_s_children_predator": {
	    "name": "Emperor's Children Predator",
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
	        "name": "2x Blastmaster",
	        "range": "30cm",
	        "firepower": "AP5+/AT6+",
	        "notes": [
	          "D"
	        ]
	      }
	    ],
	    "abilities": []
	  },
	  "hell_strider": {
	    "name": "Hell Strider",
	    "type": "AV",
	    "speed": "30cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "5+",
	    "weapons": [
	      {
	        "name": "Lascannon",
	        "range": "45cm",
	        "firepower": "AT5+",
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
	      }
	    ],
	    "abilities": [
	      "Fearless",
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
	  "keeper_of_secrets": {
	    "name": "Keeper of Secrets",
	    "type": "WE",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Gaze of Slaanesh",
	        "range": "30cm",
	        "firepower": "3x MW4+",
	        "notes": []
	      },
	      {
	        "name": "Gaze of Slaanesh",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "EA(+1)",
	          "FS",
	          "MW"
	        ]
	      },
	      {
	        "name": "Lash of Torment",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
	          "FS",
	          "MW"
	        ]
	      }
	    ],
	    "abilities": [
	      "Daemonic Focus",
	      "Damage Capacity 3",
	      "Expendable",
	      "Fearless",
	      "Inspiring",
	      "Invulnerable Save",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: The unit is destroyed, all summoned units within 5cm are destroyed on a roll of 6+."
	    ]
	  },
	  "hell_knight": {
	    "name": "Hell-Knight",
	    "type": "WE",
	    "speed": "30cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "5+",
	    "weapons": [
	      {
	        "name": "Thermal Lance",
	        "range": "30cm",
	        "firepower": "MW4+",
	        "notes": [
	          "FwA"
	        ]
	      },
	      {
	        "name": "Thermal Lance",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "MW"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 2",
	      "Fearless",
	      "Invulnerable Save",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: Destroyed."
	    ]
	  },
	  "hell_scourge": {
	    "name": "Hell-Scourge",
	    "type": "WE",
	    "speed": "30cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Castigator Cannon",
	        "range": "45cm",
	        "firepower": "3x AP3+/AT5+",
	        "notes": [
	          "FwA"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 2",
	      "Fearless",
	      "Invulnerable Save",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: Destroyed."
	    ]
	  },
	  "questor_titan": {
	    "name": "Questor Titan",
	    "type": "WE",
	    "speed": "35cm",
	    "armour": "5+",
	    "cc": "5+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "2x Castigator Cannon",
	        "range": "45cm",
	        "firepower": "3x AP3+/AT5+",
	        "notes": []
	      },
	      {
	        "name": "2x Battle Cannon",
	        "range": "75cm",
	        "firepower": "AP4+/AT4+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 3",
	      "Fearless",
	      "Reinforced Armour",
	      "2 Void Shields",
	      "Walker",
	      "May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: Move the unit D6cm in a random direction. If it moves into impassable terrain or another unit it can't move over it will stop and suffer one point of damage. All units it moves into or over suffer a hit on a roll of 6+."
	    ]
	  },
	  "subjugator_titan": {
	    "name": "Subjugator Titan",
	    "type": "WE",
	    "speed": "35cm",
	    "armour": "5+",
	    "cc": "3+",
	    "ff": "5+",
	    "weapons": [
	      {
	        "name": "2x Battle Cannon",
	        "range": "75cm",
	        "firepower": "AP4+/AT4+",
	        "notes": []
	      },
	      {
	        "name": "2x Hellblades",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
	          "TK(D3)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 3",
	      "Fearless",
	      "Reinforced Armour",
	      "2 Void Shields",
	      "Walker",
	      "May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: Move the unit D6cm in a random direction. If it moves into impassable terrain or another unit it can't move over it will stop and suffer one point of damage. All units it moves into or over suffer a hit on a roll of 6+."
	    ]
	  },
	  "chaos_thunderhawk": {
	    "name": "Chaos Thunderhawk",
	    "type": "AC/WE",
	    "speed": "Bomber",
	    "armour": "4+",
	    "cc": "6+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Battle Cannon",
	        "range": "75cm",
	        "firepower": "AP4+/AT4+",
	        "notes": [
	          "FxF"
	        ]
	      },
	      {
	        "name": "2x Twin Heavy Bolter",
	        "range": "30cm",
	        "firepower": "AP4+/AA5+",
	        "notes": [
	          "FxF"
	        ]
	      },
	      {
	        "name": "Twin Heavy Bolter",
	        "range": "15cm",
	        "firepower": "AP4+/AA5+",
	        "notes": [
	          "Left"
	        ]
	      },
	      {
	        "name": "Twin Heavy Bolter",
	        "range": "15cm",
	        "firepower": "AP4+/AA5+",
	        "notes": [
	          "Right"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 2",
	      "Planetfall",
	      "Reinforced Armour",
	      "Transport",
	      "May transport eight infantry units or Chaos Dreadnoughts; Chaos Space Marine Terminators, Chaos Dreadnoughts and Obliterators count as two units each. Critical Hit Effect: The unit and all units being carried are destroyed. Counts as a Thunderhawk Gunship for the purposes of being transported."
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
	  "chaos champion": "champion_of_chaos",
	  "champion": "champion_of_chaos",
	  "chaos space marine scouts": "chaos_space_marine_chosen",
	  "scouts": "chaos_space_marine_chosen",
	  "chosen": "chaos_space_marine_chosen",
	  "chaos chosen": "chaos_space_marine_chosen",
	  "chaos terminator": "emperor_s_children_terminators",
	  "chaos terminators": "emperor_s_children_terminators",
	  "terminator": "emperor_s_children_terminators",
	  "terminators": "emperor_s_children_terminators",
	  "bike": "chaos_space_marine_bikes",
	  "bikes": "chaos_space_marine_bikes",
	  "bike company": "chaos_space_marine_bikes",
	  "emperor's children bike": "chaos_space_marine_bikes",
	  "emperors children bike": "chaos_space_marine_bikes",
	  "raptor": "raptors",
	  "chaos space marines": "chaos_space_marines",
	  "chaos marine": "chaos_space_marines",
	  "chaos marines": "chaos_space_marines",
	  "chaos space marine": "chaos_space_marines",
	  "chaos warlord supreme commander": "chaos_warlord",
	  "daemon prince supreme commander": "daemon_prince",
	  "dreadclaw drop pod": "dreadclaw",
	  "chaos thunderhawk gunship": "chaos_thunderhawk",
	  "thunderhawk": "chaos_thunderhawk",
	  "sorceror lord": "sorcerer_lord",
	  "emperor's children dreadnought": "emperor_s_children_dreadnought",
	  "emperors children dreadnought": "emperor_s_children_dreadnought",
	  "emperor's children land raider": "emperor_s_children_land_raider",
	  "emperors children land raider": "emperor_s_children_land_raider",
	  "emperor's children predator": "emperor_s_children_predator",
	  "emperors children predator": "emperor_s_children_predator"
	}
});

ArmyforgeUnitProfiles.findChaosSpaceMarineEmperorsChildrenProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.chaosSpaceMarineEmperorsChildren.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeChaosSpaceMarineName(displayName);
	var key = ArmyforgeUnitProfiles.chaosSpaceMarineEmperorsChildren.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.chaosSpaceMarineEmperorsChildren.profiles[key] || null;
};
