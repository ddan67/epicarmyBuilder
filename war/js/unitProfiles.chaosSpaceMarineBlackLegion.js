// Source: https://tp.net-armageddon.org/army-lists/chaos-space-marine-black-legion.html
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

ArmyforgeUnitProfiles.chaosSpaceMarineBlackLegion = ArmyforgeUnitProfiles.createChaosSpaceMarineProfileSet({
	armyIds: ["CHAOS_legion_NETEA","CHAOS_black_legion_NETEA"],
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
	  "berzerkers": {
	    "name": "Berzerkers",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "2+",
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
	      "Fearless"
	    ]
	  },
	  "bloodletters": {
	    "name": "Bloodletters",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "-",
	    "weapons": [
	      {
	        "name": "Hellblades",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Expendable",
	      "Invulnerable Save"
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
	  "chaos_space_marine_terminators": {
	    "name": "Chaos Space Marine Terminators",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "2x Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP4+/AT6+",
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
	      "Reinforced Armour",
	      "Teleport",
	      "Thick Rear Armour"
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
	  "daemonic_beasts": {
	    "name": "Daemonic Beasts",
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
	  "flamers": {
	    "name": "Flamers",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "5+",
	    "cc": "5+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Flames of Tzeentch",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Expendable",
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
	  "plague_marines": {
	    "name": "Plague Marines",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "3+",
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
	    "abilities": [
	      "Fearless"
	    ]
	  },
	  "plaguebearers": {
	    "name": "Plaguebearers",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "3+",
	    "cc": "4+",
	    "ff": "6+",
	    "weapons": [
	      {
	        "name": "Plague of Flies",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Expendable",
	      "Invulnerable Save"
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
	  "thousand_sons": {
	    "name": "Thousand Sons",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "5+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Bolters",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Fearless",
	      "Reinforced Armour"
	    ]
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
	  "banelord_titan": {
	    "name": "Banelord Titan",
	    "type": "WE",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "2+",
	    "ff": "4+",
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
	        "name": "Doomfist",
	        "range": "30cm",
	        "firepower": "4x AP4+/AT4+",
	        "notes": [
	          "FwA"
	        ]
	      },
	      {
	        "name": "Doomfist",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+2)",
	          "TK(D3)"
	        ]
	      },
	      {
	        "name": "6x Havoc Missile",
	        "range": "60cm",
	        "firepower": "2BP",
	        "notes": [
	          "FwA",
	          "Ind",
	          "SS"
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
	      "Damage Capacity 8",
	      "Fearless",
	      "Reinforced Armour",
	      "Thick Rear Armour",
	      "6 Void Shields",
	      "Walker",
	      "May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: Move the unit 3D6cm in a random direction. If it moves into impassable terrain or another unit it can't move over it will stop and suffer one point of damage. All units it moves into or over suffer a hit on a roll of 4+."
	    ]
	  },
	  "bloodthirster": {
	    "name": "Bloodthirster",
	    "type": "WE",
	    "speed": "30cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "-",
	    "weapons": [
	      {
	        "name": "Axe of Khorne",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+3)",
	          "TK"
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
	      "Jump Packs",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: The unit is destroyed, all summoned units within 5cm are destroyed on a roll of 6+."
	    ]
	  },
	  "deathwheel": {
	    "name": "Deathwheel",
	    "type": "WE",
	    "speed": "30cm",
	    "armour": "4+",
	    "cc": "5+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "2x Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP4+/AT6+",
	        "notes": [
	          "Left"
	        ]
	      },
	      {
	        "name": "2x Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP4+/AT6+",
	        "notes": [
	          "Right"
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
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 4",
	      "Fearless",
	      "Reinforced Armour",
	      "2 Void Shields",
	      "Critical Hit Effect: Move the unit 3D6cm in a random direction. If it moves into impassable terrain or a war engine unit it will stop. All units it moves into or over suffer a hit. The unit is destroyed."
	    ]
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
	  "feral_titan": {
	    "name": "Feral Titan",
	    "type": "WE",
	    "speed": "30cm",
	    "armour": "5+",
	    "cc": "4+",
	    "ff": "5+",
	    "weapons": [
	      {
	        "name": "Death Storm",
	        "range": "45cm",
	        "firepower": "4x AP4+/AT4+",
	        "notes": [
	          "FwA"
	        ]
	      },
	      {
	        "name": "Hellmouth",
	        "range": "30cm",
	        "firepower": "3BP",
	        "notes": [
	          "FwA",
	          "IC"
	        ]
	      },
	      {
	        "name": "Battlehead",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "EA(+2)"
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
	  "great_unclean_one": {
	    "name": "Great Unclean One",
	    "type": "WE",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Stream of Corruption",
	        "range": "15cm",
	        "firepower": "3BP",
	        "notes": [
	          "IC"
	        ]
	      },
	      {
	        "name": "Stream of Corruption",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "EA(+1)",
	          "IC"
	        ]
	      },
	      {
	        "name": "Nurgling Swarm",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)"
	        ]
	      }
	    ],
	    "abilities": [
	      "Daemonic Focus",
	      "Damage Capacity 4",
	      "Expendable",
	      "Fearless",
	      "Inspiring",
	      "Invulnerable Save",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: The unit is destroyed, all summoned units within 5cm are destroyed on a roll of 6+."
	    ]
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
	  "lord_of_change": {
	    "name": "Lord of Change",
	    "type": "WE",
	    "speed": "30cm",
	    "armour": "4+",
	    "cc": "5+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Withering Gaze",
	        "range": "45cm",
	        "firepower": "2x MW3+",
	        "notes": []
	      },
	      {
	        "name": "Withering Gaze",
	        "range": "(15cm)",
	        "firepower": "Small Arms",
	        "notes": [
	          "EA(+1)",
	          "MW"
	        ]
	      },
	      {
	        "name": "Bedlam Staff",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
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
	      "Jump Packs",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: The unit is destroyed, all summoned units within 5cm are destroyed on a roll of 6+."
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
	  "chaos terminator": "chaos_space_marine_terminators",
	  "chaos terminators": "chaos_space_marine_terminators",
	  "terminator": "chaos_space_marine_terminators",
	  "terminators": "chaos_space_marine_terminators",
	  "bike": "chaos_space_marine_bikes",
	  "bikes": "chaos_space_marine_bikes",
	  "bike company": "chaos_space_marine_bikes",
	  "chaos space marine bike": "chaos_space_marine_bikes",
	  "raptor": "raptors",
	  "chaos space marines": "chaos_space_marines",
	  "chaos marine": "chaos_space_marines",
	  "chaos marines": "chaos_space_marines",
	  "chaos space marine": "chaos_space_marines",
	  "chaos warlord supreme commander": "chaos_warlord",
	  "daemon prince supreme commander": "daemon_prince",
	  "dreadclaw drop pod": "dreadclaw",
	  "death wheel": "deathwheel"
	}
});

ArmyforgeUnitProfiles.findChaosSpaceMarineBlackLegionProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.chaosSpaceMarineBlackLegion.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeChaosSpaceMarineName(displayName);
	var key = ArmyforgeUnitProfiles.chaosSpaceMarineBlackLegion.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.chaosSpaceMarineBlackLegion.profiles[key] || null;
};
