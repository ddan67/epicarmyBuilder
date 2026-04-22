// Source: https://tp.net-armageddon.org/army-lists/tau.html
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

ArmyforgeUnitProfiles.tau = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: [
  "XENOS_tau_NETEA"
],
	profiles: {
  "ethereal": {
    "name": "Ethereal",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Honour Blade",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": [
      "Invulnerable Save",
      "Leader",
      "All units in a formation joined by an Ethereal gain Fearless . If the Ethereal is killed then all these units lose Fearless and the formation receives an additional D3 Blast markers."
    ]
  },
  "shasel": {
    "name": "Shas'el",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Coordinated Fire",
      "Leader"
    ]
  },
  "shaso": {
    "name": "Shas'o",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Experimental Weapons",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": []
      }
    ],
    "abilities": [
      "Coordinated Fire",
      "Leader",
      "Each Shas'o character in the army allows a player to re-roll one failed initiative test (of any type) once per turn."
    ]
  },
  "crisis_battlesuits": {
    "name": "Crisis Battlesuits",
    "type": "INF",
    "speed": "20cm",
    "armour": "3+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Missile Pods",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Twin Plasma Rifles",
        "range": "30cm",
        "firepower": "AP4+/AT6+",
        "notes": []
      },
      {
        "name": "Twin Fusion Blasters",
        "range": "15cm",
        "firepower": "MW4+",
        "notes": []
      }
    ],
    "abilities": [
      "Invulnerable Save",
      "Tau Jet Packs"
    ]
  },
  "fire_warriors": {
    "name": "Fire Warriors",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Pulse Rifles",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": []
      },
      {
        "name": "Pulse Carbines",
        "range": "15cm",
        "firepower": "AP5+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": []
  },
  "gun_drones": {
    "name": "Gun Drones",
    "type": "INF",
    "speed": "20cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Twin Pulse Carbines",
        "range": "15cm",
        "firepower": "AP4+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "Tau Jet Packs"
    ]
  },
  "kroot_hounds": {
    "name": "Kroot Hounds",
    "type": "INF",
    "speed": "20cm",
    "armour": "-",
    "cc": "3+",
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
      "Infiltrator",
      "Scout"
    ]
  },
  "kroot_master_shapers": {
    "name": "Kroot Master Shapers",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Kroot Rifles",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Mercenary Weapons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": [
      "Infiltrator",
      "Leader",
      "Scout"
    ]
  },
  "kroot_warriors": {
    "name": "Kroot Warriors",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Kroot Rifles",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "Infiltrator",
      "Scout"
    ]
  },
  "krootox": {
    "name": "Krootox",
    "type": "INF",
    "speed": "15cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Kroot Guns",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": []
  },
  "pathfinders": {
    "name": "Pathfinders",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Rail Rifles",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": [
          "S"
        ]
      },
      {
        "name": "Pulse Carbines",
        "range": "15cm",
        "firepower": "AP5+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "Coordinated Fire",
      "Markerlights",
      "Scout"
    ]
  },
  "stealth_battlesuits": {
    "name": "Stealth Battlesuits",
    "type": "INF",
    "speed": "20cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Silenced Burst Cannons",
        "range": "15cm",
        "firepower": "AP4+",
        "notes": [
          "D"
        ]
      }
    ],
    "abilities": [
      "First Strike",
      "Markerlights",
      "Reinforced Armour",
      "Scout",
      "Tau Jet Packs",
      "Teleport"
    ]
  },
  "broadside_battlesuit": {
    "name": "Broadside Battlesuit",
    "type": "LV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Twin Railguns",
        "range": "60cm",
        "firepower": "AT3+",
        "notes": []
      },
      {
        "name": "Smart Missile System",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": [
          "IC"
        ]
      }
    ],
    "abilities": [
      "Reinforced Armour",
      "Walker"
    ]
  },
  "piranha": {
    "name": "Piranha",
    "type": "LV",
    "speed": "35cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Burst Cannon and Drones",
        "range": "15cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Seeker Missiles",
        "range": "90cm",
        "firepower": "AT6+",
        "notes": [
          "GM"
        ]
      }
    ],
    "abilities": [
      "Skimmer"
    ]
  },
  "tetra": {
    "name": "Tetra",
    "type": "LV",
    "speed": "35cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Tetra Pulse Rifles",
        "range": "30cm",
        "firepower": "AP6+",
        "notes": []
      }
    ],
    "abilities": [
      "Coordinated Fire",
      "Markerlights",
      "Scout",
      "Skimmer"
    ]
  },
  "devilfish": {
    "name": "Devilfish",
    "type": "AV",
    "speed": "30cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Burst Cannon and Drones",
        "range": "15cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Seeker Missiles",
        "range": "90cm",
        "firepower": "AT6+",
        "notes": [
          "GM"
        ]
      }
    ],
    "abilities": [
      "Skimmer",
      "Transport",
      "May transport two units of Fire Warriors or Pathfinders."
    ]
  },
  "hammerhead": {
    "name": "Hammerhead",
    "type": "AV",
    "speed": "30cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Smart Missile System",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "Seeker Missiles",
        "range": "90cm",
        "firepower": "AT6+",
        "notes": [
          "GM"
        ]
      },
      {
        "name": "0-1x Railgun",
        "range": "75cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "0-1x Railgun",
        "range": "75cm",
        "firepower": "AT4+",
        "notes": [
          "L"
        ]
      },
      {
        "name": "0-1x Ion Cannon",
        "range": "60cm",
        "firepower": "AP4+/AT5+",
        "notes": []
      },
      {
        "name": "0-1x Twin Fusion Cannon",
        "range": "30cm",
        "firepower": "MW4+",
        "notes": []
      }
    ],
    "abilities": [
      "Skimmer",
      "Armed with either a Railgun, Ion Cannon or Twin Fusion Cannon."
    ]
  },
  "skyray": {
    "name": "Skyray",
    "type": "AV",
    "speed": "30cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Smart Missile System",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "2x Hunter Missiles",
        "range": "60cm",
        "firepower": "AA5+",
        "notes": []
      },
      {
        "name": "2x Seeker Missiles",
        "range": "90cm",
        "firepower": "AT6+",
        "notes": [
          "GM"
        ]
      }
    ],
    "abilities": [
      "Markerlights",
      "Skimmer"
    ]
  },
  "barracuda": {
    "name": "Barracuda",
    "type": "AC",
    "speed": "Fighter",
    "armour": "6+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Ion Cannon",
        "range": "30cm",
        "firepower": "AP4+/AT5+/AA5+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Twin Burst Cannon",
        "range": "15cm",
        "firepower": "AA6+",
        "notes": []
      },
      {
        "name": "Twin Missile Pods",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": [
          "FxF"
        ]
      }
    ],
    "abilities": []
  },
  "manta": {
    "name": "Manta",
    "type": "WE",
    "speed": "20cm",
    "armour": "5+",
    "cc": "-",
    "ff": "4+",
    "weapons": [
      {
        "name": "Twin Heavy Rail Cannons",
        "range": "90cm",
        "firepower": "MW2+",
        "notes": [
          "FxF",
          "TK(D3)"
        ]
      },
      {
        "name": "3x Heavy Ion Phalanx",
        "range": "75cm",
        "firepower": "AP3+/AT4+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "4x Twin Manta Burst Cannons",
        "range": "30cm",
        "firepower": "AP5+/AA6+",
        "notes": []
      },
      {
        "name": "Twin Missile Pods",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "2x Seeker Missiles",
        "range": "90cm",
        "firepower": "AT6+",
        "notes": [
          "GM"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 8",
      "Deflector Shield",
      "Fearless",
      "Markerlights",
      "Planetfall",
      "Reinforced Armour",
      "Support Craft",
      "Transport",
      "May transport 20 infantry units or Broadside Battlesuits; plus four armoured vehicle or light vehicle units (except Broadside Battlesuits); Tetra count as one-third of a unit each, rounding up. Crisis Battlesuits count as two units each. Critical Hit Effect: The unit looses Tau deflector shield . Subsequent critical hits cause an extra point of damage."
    ]
  },
  "orca": {
    "name": "Orca",
    "type": "AC/WE",
    "speed": "Bomber",
    "armour": "4+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Twin Burst Cannon",
        "range": "15cm",
        "firepower": "AA6+",
        "notes": []
      },
      {
        "name": "Twin Missile Pods",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Aircraft Seeker Missiles",
        "range": "45cm",
        "firepower": "AT6+",
        "notes": [
          "GM"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Planetfall",
      "Transport",
      "May transport twelve infantry units (except Krootox) or Broadside Battlesuits; Crisis Battlesuits count as two units each. Critical Hit Effect: The unit and all units on board are destroyed."
    ]
  },
  "tiger_shark": {
    "name": "Tiger Shark",
    "type": "AC",
    "speed": "Bomber",
    "armour": "4+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Twin Ion Cannon",
        "range": "30cm",
        "firepower": "AP3+/AT4+/AA4+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Twin Burst Cannon",
        "range": "15cm",
        "firepower": "AA6+",
        "notes": []
      },
      {
        "name": "Twin Missile Pods",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": [
          "FxF"
        ]
      }
    ],
    "abilities": [
      "Transport",
      "May transport three units of Gun Drones."
    ]
  },
  "tiger_shark_ax_1_0": {
    "name": "Tiger Shark AX-1-0",
    "type": "AC",
    "speed": "Bomber",
    "armour": "4+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Twin Rail Cannons",
        "range": "45cm",
        "firepower": "MW3+",
        "notes": [
          "FxF",
          "TK(D3)"
        ]
      },
      {
        "name": "Twin Burst Cannon",
        "range": "15cm",
        "firepower": "AA6+",
        "notes": []
      },
      {
        "name": "Twin Missile Pods",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Aircraft Seeker Missiles",
        "range": "45cm",
        "firepower": "AT6+",
        "notes": [
          "GM"
        ]
      }
    ],
    "abilities": []
  },
  "custodian_class_battleship": {
    "name": "Custodian Class Battleship",
    "type": "SC",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Gravitic Tracer Salvo",
        "range": "n/a",
        "firepower": "3x MW4+",
        "notes": [
          "GM",
          "IC"
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
      "May transport 18 of the following units and the units being transported on them: Orca, Manta; Mantas count as thee units each. The Gravitic Tracer Salvo may be fired at a marked formation of any type."
    ]
  },
  "protector_class_cruiser": {
    "name": "Protector Class Cruiser",
    "type": "SC",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "2x Pin-Point Attack",
        "range": "n/a",
        "firepower": "MW2+",
        "notes": [
          "TK(D3)"
        ]
      }
    ],
    "abilities": [
      "Transport",
      "May transport six of the following units and the units being transported on them: Orca, Manta; Mantas count as thee units each."
    ]
  },
  "spacecraft": {
    "name": "Spacecraft",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Tau spacecraft formation slot.",
      "One of the following units: Protector Class Cruiser, Custodian Class Battleship"
    ]
  },
  "armour_support_group": {
    "name": "Armour Support Group",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Reference card for the Tau Armour Support Group formation slot.",
      "Options: Hammerhead gunship, Skyray."
    ]
  }
},
	aliases: {
  "crisis battlesuit cadre": "crisis_battlesuits",
  "crisis battlesuit": "crisis_battlesuits",
  "crisis battlesuits": "crisis_battlesuits",
  "crisis suits": "crisis_battlesuits",
  "shas el": "shas_el",
  "shas el character": "shas_el",
  "shas o": "shas_o",
  "fire warrior cadre": "fire_warriors",
  "fire warrior": "fire_warriors",
  "fire warriors": "fire_warriors",
  "broadside group": "broadside_battlesuit",
  "broadside": "broadside_battlesuit",
  "broadsides": "broadside_battlesuit",
  "kroot kindred": "kroot_master_shapers",
  "kroot master shaper": "kroot_master_shapers",
  "kroot master shapers": "kroot_master_shapers",
  "kroot warrior": "kroot_warriors",
  "kroot warriors": "kroot_warriors",
  "kroot": "kroot_warriors",
  "kroot hound": "kroot_hounds",
  "kroot hounds": "kroot_hounds",
  "krootox": "krootox",
  "pathfinder group": "pathfinders",
  "pathfinder": "pathfinders",
  "pathfinders": "pathfinders",
  "recon skimmer group": "piranha",
  "piranha": "piranha",
  "piranhas": "piranha",
  "tetra": "tetra",
  "tetras": "tetra",
  "skysweep support group": "skyray",
  "skyray": "skyray",
  "skyrays": "skyray",
  "stealth group": "stealth_battlesuits",
  "stealth battlesuit": "stealth_battlesuits",
  "stealth battlesuits": "stealth_battlesuits",
  "gun drones": "gun_drones",
  "gun drone": "gun_drones",
  "hammerhead": "hammerhead",
  "hammerheads": "hammerhead",
  "devilfish": "devilfish",
  "manta dropship": "manta",
  "manta": "manta",
  "orca dropship": "orca",
  "orca": "orca",
  "barracuda squadron": "barracuda",
  "barracuda": "barracuda",
  "barracudas": "barracuda",
  "tiger shark squadron": "tiger_shark",
  "tiger shark": "tiger_shark",
  "tiger sharks": "tiger_shark",
  "shark ax 1 0": "tiger_shark_ax_1_0",
  "tiger shark ax 1 0 squadron": "tiger_shark_ax_1_0",
  "ax 1 0 squadron": "tiger_shark_ax_1_0",
  "tiger shark ax 1 0": "tiger_shark_ax_1_0",
  "protector class cruiser": "protector_class_cruiser",
  "custodian class battleship": "custodian_class_battleship",
  "spacecraft": "spacecraft",
  "any one of the following units": "spacecraft",
  "one of the following units": "spacecraft",
  "armour support group": "armour_support_group",
  "armor support group": "armour_support_group"
}
});

ArmyforgeUnitProfiles.findTauProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.tau.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName);
	var key = ArmyforgeUnitProfiles.tau.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.tau.profiles[key] || null;
};
