// Source: https://tp.net-armageddon.org/army-lists/inquisition-ordo-xenos.html
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
		.replace(/\bplus transport\b/g, " ")
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

ArmyforgeUnitProfiles.inquisitionOrdoXenos = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: ["INQ_ordo_xenos_NETEA"],
	profiles: {
  "captain": {
    "name": "Captain",
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
      "Commander",
      "Invulnerable Save",
      "Leader"
    ]
  },
  "chaplain": {
    "name": "Chaplain",
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
      "Inspiring",
      "Invulnerable Save",
      "Leader"
    ]
  },
  "commissar": {
    "name": "Commissar",
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
      "Fearless",
      "Inspiring",
      "Leader"
    ]
  },
  "librarian": {
    "name": "Librarian",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Smite",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      },
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
      "Invulnerable Save",
      "Leader"
    ]
  },
  "ordo_xenos_inquisitor_lord": {
    "name": "Ordo Xenos Inquisitor Lord",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Smite",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      },
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
      "Fearless",
      "Invulnerable Save",
      "Reinforced Armour",
      "Sniper"
    ]
  },
  "supreme_commander": {
    "name": "Supreme Commander",
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
      "Invulnerable Save",
      "Supreme Commander"
    ]
  },
  "deathwatch_assault": {
    "name": "Deathwatch Assault",
    "type": "INF",
    "speed": "30cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Bolt Pistols",
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
      "Jump Packs"
    ]
  },
  "deathwatch_bike": {
    "name": "Deathwatch Bike",
    "type": "INF",
    "speed": "35cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Twin Bolters",
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
      "Mounted"
    ]
  },
  "deathwatch_scout": {
    "name": "Deathwatch Scout",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Stalker Pattern Bolters",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": [
          "D",
          "S"
        ]
      },
      {
        "name": "Stalker Pattern Bolters",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "S"
        ]
      }
    ],
    "abilities": [
      "Infiltrator",
      "Scout"
    ]
  },
  "deathwatch_terminator": {
    "name": "Deathwatch Terminator",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "3+",
    "weapons": [
      {
        "name": "2x Cyclone Missile Launcher",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
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
  "deathwatch_veteran": {
    "name": "Deathwatch Veteran",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Hellfire Heavy Bolter",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": []
      },
      {
        "name": "Hellfire Heavy Bolter",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": []
  },
  "infantry": {
    "name": "Infantry",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Autocannon",
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
      "One unit in every two has an Autocannon."
    ]
  },
  "inquisitorial_storm_troopers": {
    "name": "Inquisitorial Storm Troopers",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Plasma Guns",
        "range": "15cm",
        "firepower": "AP5+/AT5+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "ordo_xenos_inquisitor": {
    "name": "Ordo Xenos Inquisitor",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Missile Launcher",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Commander"
    ]
  },
  "rough_riders": {
    "name": "Rough Riders",
    "type": "INF",
    "speed": "20cm",
    "armour": "6+",
    "cc": "4+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Laspistols",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Power Lances",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "FS"
        ]
      }
    ],
    "abilities": [
      "Infiltrator",
      "Mounted",
      "Scout"
    ]
  },
  "land_speeder_tornado": {
    "name": "Land Speeder Tornado",
    "type": "LV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Assault Cannon",
        "range": "30cm",
        "firepower": "AP5+/AT5+",
        "notes": []
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
  "land_speeder_typhoon": {
    "name": "Land Speeder Typhoon",
    "type": "LV",
    "speed": "35cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Twin Typhoon Missile",
        "range": "45cm",
        "firepower": "AP3+/AT5+",
        "notes": []
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
  "sentinel": {
    "name": "Sentinel",
    "type": "LV",
    "speed": "20cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Multilaser",
        "range": "30cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Scout",
      "Walker"
    ]
  },
  "corvus_blackstar": {
    "name": "Corvus Blackstar",
    "type": "AV",
    "speed": "35cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "3+",
    "weapons": [
      {
        "name": "Twin Assault Cannon",
        "range": "30cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Twin Blackstar Rocket Launcher",
        "range": "30cm",
        "firepower": "AP3+",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "Twin Blackstar Rocket Launcher",
        "range": "30cm",
        "firepower": "AT4+",
        "notes": []
      }
    ],
    "abilities": [
      "Planetfall",
      "Reinforced Armour",
      "Skimmer",
      "Transport",
      "May transport two infantry units. Terminator units and units with Mounted or Jump Packs count as two units each. May not be transported by a Landing Craft."
    ]
  },
  "chimera": {
    "name": "Chimera",
    "type": "AV",
    "speed": "30cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Multilaser",
        "range": "30cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Transport",
      "May transport two infantry units without Jump Packs or Mounted ."
    ]
  },
  "hydra": {
    "name": "Hydra",
    "type": "AV",
    "speed": "30cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "2x Twin Hydra Autocannon",
        "range": "45cm",
        "firepower": "AP4+/AT5+/AA5+",
        "notes": []
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
  "land_raider": {
    "name": "Land Raider",
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
      "May transport one Terminator unit or two infantry units without Jump Packs or Mounted ."
    ]
  },
  "leman_russ": {
    "name": "Leman Russ",
    "type": "AV",
    "speed": "20cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Lascannon",
        "range": "45cm",
        "firepower": "AT5+",
        "notes": []
      },
      {
        "name": "2x Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Reinforced Armour"
    ]
  },
  "razorback": {
    "name": "Razorback",
    "type": "AV",
    "speed": "30cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+ (4+)",
    "weapons": [
      {
        "name": "0-1x Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+",
        "notes": []
      },
      {
        "name": "0-1x Twin Heavy Bolter",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": []
      }
    ],
    "abilities": [
      "Transport",
      "May transport one infantry unit (except a Terminator unit) without Jump Packs or Mounted . Armed with either a Twin Lascannon or a Twin Heavy Bolter. Razorbacks armed with a Twin Heavy Bolter have their firefight value increased to 4+."
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
  "valkyrie": {
    "name": "Valkyrie",
    "type": "AV",
    "speed": "35cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Multilaser",
        "range": "30cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "2x Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "2x Rocket Pod",
        "range": "30cm",
        "firepower": "1BP",
        "notes": [
          "D",
          "SS"
        ]
      }
    ],
    "abilities": [
      "Scout",
      "Skimmer",
      "Transport",
      "May transport two infantry units without Jump Packs or Mounted ."
    ]
  },
  "venerable_dreadnought": {
    "name": "Venerable Dreadnought",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "4+",
    "weapons": [
      {
        "name": "0-1x Missile Launcher",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "0-1x Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+",
        "notes": []
      },
      {
        "name": "0-1x Assault Cannon",
        "range": "30cm",
        "firepower": "AP5+/AT5+",
        "notes": []
      },
      {
        "name": "0-1x Power Fist",
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
      "Reinforced Armour",
      "Walker",
      "Armed with either a Missile Launcher and Twin Lascannon, or an Assault Cannon and Power Fist. Counts as a Dreadnought for the purposes of being transported."
    ]
  },
  "landing_craft": {
    "name": "Landing Craft",
    "type": "AC/WE",
    "speed": "Bomber",
    "armour": "4+",
    "cc": "5+",
    "ff": "3+",
    "weapons": [
      {
        "name": "2x Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+",
        "notes": []
      },
      {
        "name": "3x Twin Heavy Bolter",
        "range": "15cm",
        "firepower": "AP4+/AA5+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 4",
      "Fearless",
      "Planetfall",
      "Reinforced Armour",
      "Transport",
      "May transport twelve infantry units, Attack Bikes or Dreadnoughts; Terminator units and Dreadnoughts count as two units each; plus any six armoured vehicle units (except Dreadnoughts); Land Raiders count as one and a half units each, rounding up. Critical Hit Effect: The unit and all units being carried are destroyed. All units within 5cm suffer a hit."
    ]
  },
  "thunderhawk_gunship": {
    "name": "Thunderhawk Gunship",
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
      "May transport eight infantry units, Attack Bikes or Dreadnoughts; Terminator units and Dreadnoughts count as two units each. Critical Hit Effect: The unit and all units being carried are destroyed."
    ]
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
  "deathwatch_drop_pod": {
    "name": "Deathwatch Drop Pod",
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
      "May transport one formation of only the following units: Deathwatch Scout, Deathwatch Terminator, Deathwatch Veteran, Venerable Dreadnought. After the drop pod lands, its Deathwind attacks all enemy units within 15cm. Each enemy formation attacked receives a Blast marker for coming under fire, and an extra Blast marker for each casualty. Then any troops carried in the drop pod must disembark within 5cm of the drop pod or within 5cm of another unit from the same formation that has already landed, so long as all units are placed within 15cm of the drop pod. Drop pod models should be removed from the board once the formation they transport has disembarked. Counts as a Drop Pod for the purposes of being transported. Counts as a Drop Pod for the purposes of being transported."
    ]
  },
  "marauder_bomber": {
    "name": "Marauder Bomber",
    "type": "AC",
    "speed": "Bomber",
    "armour": "4+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+/AA4+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Bomb Racks",
        "range": "15cm",
        "firepower": "3BP",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "2x Twin Heavy Bolter",
        "range": "15cm",
        "firepower": "AA5+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "thunderbolt_fighter": {
    "name": "Thunderbolt Fighter",
    "type": "AC",
    "speed": "Fighter-Bomber",
    "armour": "6+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Multilaser",
        "range": "30cm",
        "firepower": "AP5+/AT6+/AA5+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Underwing Rockets",
        "range": "30cm",
        "firepower": "AT4+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Storm Bolters",
        "range": "15cm",
        "firepower": "AP4+/AA5+",
        "notes": [
          "FxF"
        ]
      }
    ],
    "abilities": []
  },
  "emperor_class_battleship": {
    "name": "Emperor Class Battleship",
    "type": "SC",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Orbital Bombardment",
        "range": "n/a",
        "firepower": "8BP",
        "notes": [
          "MW"
        ]
      }
    ],
    "abilities": [
      "Slow and Steady"
    ]
  },
  "lunar_class_cruiser": {
    "name": "Lunar Class Cruiser",
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
    "abilities": []
  },
  "reaver_class_titan": {
    "name": "Reaver Class Titan",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "3+",
    "weapons": [
      {
        "name": "2x Turbo-Laser Destructor",
        "range": "60cm",
        "firepower": "4x AP5+/AT3+",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "Rocket Launcher",
        "range": "60cm",
        "firepower": "3BP",
        "notes": [
          "FxF"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 6",
      "Fearless",
      "Reinforced Armour",
      "4 Void Shields",
      "Walker",
      "May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 5+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
    ]
  },
  "warhound_class_titan": {
    "name": "Warhound Class Titan",
    "type": "WE",
    "speed": "30cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Plasma Blastgun",
        "range": "45cm",
        "firepower": "2x MW2+",
        "notes": [
          "FwA",
          "Slw"
        ]
      },
      {
        "name": "Vulcan Mega-Bolter",
        "range": "45cm",
        "firepower": "4x AP3+/AT5+",
        "notes": [
          "FwA"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "Fearless",
      "Reinforced Armour",
      "2 Void Shields",
      "Walker",
      "May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit takes a point of damage and is moved D6cm in a random direction. If this move takes the titan into impassable terrain or another unit it can't move over then it stops immediately and is destroyed. All units it moves into or over suffer a hit on a roll of 6+."
    ]
  },
  "warlord_class_titan": {
    "name": "Warlord Class Titan",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "2+",
    "ff": "3+",
    "weapons": [
      {
        "name": "Volcano Cannon",
        "range": "90cm",
        "firepower": "MW2+",
        "notes": [
          "FwA",
          "TK(D3)"
        ]
      },
      {
        "name": "Gatling Blaster",
        "range": "60cm",
        "firepower": "4x AP4+/AT4+",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "2x Turbo-Laser Destructor",
        "range": "60cm",
        "firepower": "4x AP5+/AT3+",
        "notes": [
          "FxF"
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
      "May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 4+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
    ]
  }
},
	aliases: {
  "ordo xenos inquisitor lord": "ordo_xenos_inquisitor_lord",
  "deathwatch assault": "deathwatch_assault",
  "deathwatch bike": "deathwatch_bike",
  "deathwatch scout": "deathwatch_scout",
  "deathwatch terminator": "deathwatch_terminator",
  "deathwatch veteran": "deathwatch_veteran",
  "inquisitorial storm troopers": "inquisitorial_storm_troopers",
  "ordo xenos inquisitor": "ordo_xenos_inquisitor",
  "rough rider": "rough_riders",
  "land speeder tornado": "land_speeder_tornado",
  "land speeder tornadoes": "land_speeder_tornado",
  "land speeder typhoon": "land_speeder_typhoon",
  "land speeder typhoons": "land_speeder_typhoon",
  "sentinel": "sentinel",
  "scout": "deathwatch_scout",
  "chimera": "chimera",
  "hydra": "hydra",
  "land raider": "land_raider",
  "leman russ": "leman_russ",
  "razorback": "razorback",
  "rhino": "rhino",
  "valkyrie": "valkyrie",
  "landing craft": "landing_craft",
  "thunderhawk gunship": "thunderhawk_gunship",
  "battle barge": "battle_barge",
  "strike cruiser": "strike_cruiser",
  "veterans": "deathwatch_veteran",
  "deathwatch drop pod": "deathwatch_drop_pod",
  "marauder bomber": "marauder_bomber",
  "thunderbolt fighter": "thunderbolt_fighter",
  "emperor class battleship": "emperor_class_battleship",
  "lunar class cruiser": "lunar_class_cruiser",
  "reaver class titan": "reaver_class_titan",
  "warhound class titan": "warhound_class_titan",
  "warlord class titan": "warlord_class_titan",
  "captain": "captain",
  "chaplain": "chaplain",
  "commissar": "commissar",
  "librarian": "librarian",
  "supreme commander": "supreme_commander",
  "inquisition ordo xenos": "ordo_xenos_inquisitor_lord"
}
});

ArmyforgeUnitProfiles.findInquisitionOrdoXenosProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.inquisitionOrdoXenos.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName);
	var key = ArmyforgeUnitProfiles.inquisitionOrdoXenos.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.inquisitionOrdoXenos.profiles[key] || null;
};
