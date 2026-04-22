// Source: https://tp.net-armageddon.org/army-lists/chaos-space-marine-red-corsairs.html
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

ArmyforgeUnitProfiles.chaosSpaceMarineRedCorsairs = ArmyforgeUnitProfiles.createChaosSpaceMarineProfileSet({
	armyIds: ["CHAOS_corsairs_playtestNETEA","CHAOS_corsairs_NETEA","CHAOS_red_corsairs_NETEA"],
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
	  "minor_daemons": {
	    "name": "Minor Daemons",
	    "type": "INF",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "4+",
	    "ff": "-",
	    "weapons": [
	      {
	        "name": "Fangs",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Expendable",
	      "Invulnerable Save"
	    ]
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
	  "blight_drone": {
	    "name": "Blight Drone",
	    "type": "AV",
	    "speed": "35cm",
	    "armour": "4+",
	    "cc": "6+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Maw Cannon",
	        "range": "30cm",
	        "firepower": "AP3+/AT5+",
	        "notes": [
	          "IC"
	        ]
	      },
	      {
	        "name": "Reaper Autocannon",
	        "range": "30cm",
	        "firepower": "AP4+/AT6+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Fearless",
	      "Invulnerable Save",
	      "Skimmer"
	    ]
	  },
	  "blood_slaughterer": {
	    "name": "Blood Slaughterer",
	    "type": "AV",
	    "speed": "15cm",
	    "armour": "3+",
	    "cc": "3+",
	    "ff": "-",
	    "weapons": [
	      {
	        "name": "Cleavers",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+2)",
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
	  "daemon_knight": {
	    "name": "Daemon Knight",
	    "type": "AV",
	    "speed": "30cm",
	    "armour": "4+",
	    "cc": "5+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Castigator Cannon",
	        "range": "45cm",
	        "firepower": "3x AP3+/AT5+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Fearless",
	      "Invulnerable Save",
	      "Scout",
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
	  "hunter": {
	    "name": "Hunter",
	    "type": "AV",
	    "speed": "30cm",
	    "armour": "5+",
	    "cc": "6+",
	    "ff": "6+",
	    "weapons": [
	      {
	        "name": "Hunter-Killer",
	        "range": "60cm",
	        "firepower": "AT4+/AA4+",
	        "notes": []
	      }
	    ],
	    "abilities": []
	  },
	  "silver_tower": {
	    "name": "Silver Tower",
	    "type": "AV",
	    "speed": "20cm",
	    "armour": "4+",
	    "cc": "6+",
	    "ff": "4+",
	    "weapons": [
	      {
	        "name": "Arcane Cannons",
	        "range": "45cm",
	        "firepower": "3x AP4+/AT4+",
	        "notes": []
	      },
	      {
	        "name": "Beam of Power",
	        "range": "60cm",
	        "firepower": "MW5+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Fearless",
	      "Invulnerable Save",
	      "Skimmer"
	    ]
	  },
	  "brass_scorpion": {
	    "name": "Brass Scorpion",
	    "type": "WE",
	    "speed": "20cm",
	    "armour": "5+",
	    "cc": "3+",
	    "ff": "3+",
	    "weapons": [
	      {
	        "name": "Scorpion Cannon",
	        "range": "30cm",
	        "firepower": "2x AP3+/AT5+",
	        "notes": []
	      },
	      {
	        "name": "2x Hellmaw Cannon",
	        "range": "15cm",
	        "firepower": "AP4+",
	        "notes": [
	          "IC"
	        ]
	      },
	      {
	        "name": "Demolisher",
	        "range": "30cm",
	        "firepower": "AP3+/AT4+",
	        "notes": [
	          "IC"
	        ]
	      },
	      {
	        "name": "Claws",
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
	      "Infiltrator",
	      "Invulnerable Save",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: Destroyed."
	    ]
	  },
	  "greater_daemon": {
	    "name": "Greater Daemon",
	    "type": "WE",
	    "speed": "15cm",
	    "armour": "4+",
	    "cc": "3+",
	    "ff": "-",
	    "weapons": [
	      {
	        "name": "2x Claws",
	        "range": "(bc)",
	        "firepower": "Assault Weapons",
	        "notes": [
	          "EA(+1)",
	          "MW"
	        ]
	      }
	    ],
	    "abilities": [
	      "Damage Capacity 3",
	      "Daemonic Focus",
	      "Fearless",
	      "Inspiring",
	      "Invulnerable Save",
	      "Reinforced Armour",
	      "Walker",
	      "Critical Hit Effect: The unit is destroyed, all summoned units within 5cm are destroyed on a roll of 6+."
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
	  "battle_barge": {
	    "name": "Battle Barge",
	    "type": "SC",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Orbital Bombardment",
	        "range": "n/a",
	        "firepower": "14BP",
	        "notes": [
	          "MW"
	        ]
	      }
	    ],
	    "abilities": [
	      "Slow and Steady",
	      "Transport",
	      "May transport 60 infantry units, Attack Bikes, or Dreadnoughts; plus 60 armoured vehicle units (except Dreadnoughts); plus nine Thunderhawk Gunships and enough Drop Pods or Landing Craft to transport any other units being carried."
	    ]
	  },
	  "strike_cruiser": {
	    "name": "Strike Cruiser",
	    "type": "SC",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Orbital Bombardment",
	        "range": "n/a",
	        "firepower": "5BP",
	        "notes": [
	          "MW"
	        ]
	      }
	    ],
	    "abilities": [
	      "Transport",
	      "May transport 20 infantry units, Attack Bikes, or Dreadnoughts; plus 20 light vehicles or armoured vehicle units (except Attack Bikes and Dreadnoughts); plus six Thunderhawk Gunships and enough Drop Pods or Landing Craft to transport any other units being carried."
	    ]
	  },
	  "spaceship": {
	    "name": "Spaceship",
	    "type": "SC",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [],
	    "abilities": [
	      "Reference card for a Chaos spacecraft slot."
	    ]
	  },
	  "chaos_drop_pod": {
	    "name": "Chaos Drop Pod",
	    "type": "Special",
	    "speed": "n/a",
	    "armour": "n/a",
	    "cc": "n/a",
	    "ff": "n/a",
	    "weapons": [
	      {
	        "name": "Deathwind",
	        "range": "15cm",
	        "firepower": "AP5+/AT5+",
	        "notes": []
	      }
	    ],
	    "abilities": [
	      "Planetfall",
	      "Transport",
	      "May transport one formation of only the following units: Berzerkers, Chaos Dreadnoughts, Chaos Space Marine Chosen, Chaos Space Marines, Daemon Prince, Havocs, Noise Marines, Plague Marines, Thousand Sons. After the drop pod lands, its Deathwind attacks all enemy units within 15cm. Each enemy formation attacked receives a Blast marker for coming under fire, and an extra Blast marker for each casualty. Then any troops carried in the drop pod must disembark within 5cm of the drop pod or within 5cm of another unit from the same formation that has already landed, so long as all units are placed within 15cm of the drop pod. Drop pod models should be removed from the board once the formation they transport has disembarked. Counts as a Drop Pod for the purposes of being transported."
	    ]
	  }
	},
	aliases: 	{
	  "chaos champion": "champion_of_chaos",
	  "champion": "champion_of_chaos",
	  "sorceror lord": "sorcerer_lord",
	  "chaos space marine bike": "chaos_space_marine_bikes",
	  "chaos space marine bikes": "chaos_space_marine_bikes",
	  "bike": "chaos_space_marine_bikes",
	  "bikes": "chaos_space_marine_bikes",
	  "raptor": "raptors",
	  "terminator": "chaos_space_marine_terminators",
	  "terminators": "chaos_space_marine_terminators",
	  "terminator unit": "chaos_space_marine_terminators",
	  "chaos space marine terminator": "chaos_space_marine_terminators",
	  "chosen": "chaos_space_marine_chosen",
	  "chaos chosen": "chaos_space_marine_chosen",
	  "chaos space marine scouts": "chaos_space_marine_chosen",
	  "scouts": "chaos_space_marine_chosen",
	  "chaos hunter": "hunter",
	  "khorne berzerker": "berzerkers",
	  "khorne berzerkers": "berzerkers",
	  "berzerker": "berzerkers",
	  "berzerkers": "berzerkers",
	  "raptor unit": "raptors",
	  "raptor units": "raptors",
	  "chaos thunderhawk gunship": "chaos_thunderhawk",
	  "thunderhawk": "chaos_thunderhawk",
	  "chaos drop pod": "chaos_drop_pod",
	  "drop pod": "chaos_drop_pod",
	  "battle barge": "battle_barge",
	  "strike cruiser": "strike_cruiser",
	  "dreadclaw drop pod": "chaos_drop_pod",
	  "dreadnought": "chaos_dreadnought",
	  "daemon knight": "daemon_knight",
	  "greater daemon": "greater_daemon",
	  "minor daemons": "minor_daemons",
	  "minor daemon": "minor_daemons"
	}
});

ArmyforgeUnitProfiles.findChaosSpaceMarineRedCorsairsProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.chaosSpaceMarineRedCorsairs.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeChaosSpaceMarineName(displayName);
	var key = ArmyforgeUnitProfiles.chaosSpaceMarineRedCorsairs.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.chaosSpaceMarineRedCorsairs.profiles[key] || null;
};
