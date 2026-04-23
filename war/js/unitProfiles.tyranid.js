// Source: war/source-json/tyranid.json
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

ArmyforgeUnitProfiles.tyranid = ArmyforgeUnitProfiles.createXenosProfileSet({
	armyIds: ["XENOS_nids_NETEA"],
	profiles: {
  "brood_lord": {
    "name": "Brood Lord",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Inspiring",
      "Invulnerable Save",
      "Leader"
    ]
  },
  "symbiote": {
    "name": "Symbiote",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Supreme Commander",
      "Synapse (+1)",
      "If added to the Dominatrix the unit will additionally loose supreme commander and synapse (+1) on a Critical Hit Effect roll of a 6."
    ]
  },
  "gargoyles": {
    "name": "Gargoyles",
    "type": "INF",
    "speed": "30cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Flamespurts",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "IC"
        ]
      }
    ],
    "abilities": [
      "Brood (2)",
      "Expendable",
      "Jump Packs"
    ]
  },
  "genestealers": {
    "name": "Genestealers",
    "type": "INF",
    "speed": "20cm",
    "armour": "6+",
    "cc": "2+",
    "ff": "-",
    "weapons": [
      {
        "name": "Rending Claws",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "FS"
        ]
      }
    ],
    "abilities": [
      "Infiltrator",
      "Scout"
    ]
  },
  "hormagaunts": {
    "name": "Hormagaunts",
    "type": "INF",
    "speed": "20cm",
    "armour": "-",
    "cc": "3+",
    "ff": "-",
    "weapons": [],
    "abilities": [
      "Brood (1)",
      "Expendable",
      "Infiltrator"
    ]
  },
  "raveners": {
    "name": "Raveners",
    "type": "INF",
    "speed": "20cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "-",
    "weapons": [
      {
        "name": "Twin Scything Talons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)"
        ]
      }
    ],
    "abilities": [
      "Brood (2)",
      "Expendable",
      "Infiltrator",
      "Tunneler"
    ]
  },
  "termagants": {
    "name": "Termagants",
    "type": "INF",
    "speed": "20cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Fleshborers",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": [
      "Brood (1)",
      "Expendable"
    ]
  },
  "tyranid_warriors": {
    "name": "Tyranid Warriors",
    "type": "INF",
    "speed": "20cm",
    "armour": "5+",
    "cc": "2+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Deathspitters",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Fearless",
      "Synapse (1)"
    ]
  },
  "biovore": {
    "name": "Biovore",
    "type": "LV",
    "speed": "15cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Spore Mines",
        "range": "30cm",
        "firepower": "AP5+/AT6+",
        "notes": [
          "D",
          "Ind"
        ]
      }
    ],
    "abilities": []
  },
  "lictor": {
    "name": "Lictor",
    "type": "LV",
    "speed": "20cm",
    "armour": "5+",
    "cc": "3+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Flesh Hooks",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Lictor Talons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "S"
        ]
      }
    ],
    "abilities": [
      "First Strike",
      "Infiltrator",
      "Invulnerable Save",
      "Scout",
      "Teleport"
    ]
  },
  "zoanthrope": {
    "name": "Zoanthrope",
    "type": "LV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Warp Blast",
        "range": "30cm",
        "firepower": "AP5+/AA6+",
        "notes": []
      },
      {
        "name": "Warp Blast",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "MW"
        ]
      }
    ],
    "abilities": [
      "Invulnerable Save"
    ]
  },
  "carnifex": {
    "name": "Carnifex",
    "type": "AV",
    "speed": "20cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Bio-Plasma",
        "range": "15cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Large Scything Talons",
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
      "Reinforced Armour"
    ]
  },
  "dactylis": {
    "name": "Dactylis",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Bile Pods",
        "range": "45cm",
        "firepower": "1BP",
        "notes": [
          "D",
          "Ind"
        ]
      }
    ],
    "abilities": [
      "Reinforced Armour"
    ]
  },
  "exocrine": {
    "name": "Exocrine",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Bio-Cannon",
        "range": "45cm",
        "firepower": "2x AP4+/AT5+",
        "notes": []
      }
    ],
    "abilities": [
      "Reinforced Armour"
    ]
  },
  "haruspex": {
    "name": "Haruspex",
    "type": "AV",
    "speed": "20cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Acid Jets and Frag Spines",
        "range": "15cm",
        "firepower": "2x AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Claws and Mandibles",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Reinforced Armour"
    ]
  },
  "hive_tyrant": {
    "name": "Hive Tyrant",
    "type": "AV",
    "speed": "20cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Venon Cannon",
        "range": "30cm",
        "firepower": "AP4+/AT5+",
        "notes": []
      },
      {
        "name": "Lash Whip and Bonesword",
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
      "Fearless",
      "Leader",
      "Reinforced Armour",
      "Synapse (2)"
    ]
  },
  "malefactor": {
    "name": "Malefactor",
    "type": "AV",
    "speed": "25cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Frag Spines",
        "range": "15cm",
        "firepower": "2x AP5+",
        "notes": []
      },
      {
        "name": "Arms",
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
      "Transport",
      "May transport two infantry units without Jump Packs or Mounted ."
    ]
  },
  "dominatrix": {
    "name": "Dominatrix",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Bio-Titan Bio-Cannon",
        "range": "45cm",
        "firepower": "3x AP4+/AT5+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Energy Pulse",
        "range": "60cm",
        "firepower": "3BP",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "Energy Pulse",
        "range": "45cm",
        "firepower": "AA5+",
        "notes": [
          "MW"
        ]
      },
      {
        "name": "2x Massive Scything Talons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "TK"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 4",
      "Commander",
      "Fearless",
      "Invulnerable Save",
      "Leader",
      "Regeneration",
      "Reinforced Armour",
      "Synapse (2)",
      "May step over units and and pieces of terrain that are lower then the unit's abdomen and less than 2cm wide. Critical Hit Effect: The unit takes a point of damage. Roll a D6, on a roll of 1 all units within 5cm take a hit on a roll of 6+, and on a roll of 6 the unit loses commander , leader and synapse (2) ."
    ]
  },
  "harridan": {
    "name": "Harridan",
    "type": "WE",
    "speed": "35cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Twin Harridan Bio-Cannon",
        "range": "45cm",
        "firepower": "2x AP4+/AT5+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Large Scything Talons",
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
      "Fearless",
      "Reinforced Armour",
      "Skimmer",
      "Transport",
      "May transport four Gargoyles. Critical Hit Effect: The unit takes an extra point of damage."
    ]
  },
  "trygon": {
    "name": "Trygon",
    "type": "WE",
    "speed": "25cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Bio-Electric Field",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Large Scything Talons",
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
      "Tunneler",
      "Critical Hit Effect: Destroyed."
    ]
  },
  "hierodule_bio_titan": {
    "name": "Hierodule Bio-Titan",
    "type": "WE",
    "speed": "25cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "0-1x Bile Launcher",
        "range": "60cm",
        "firepower": "3BP",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "0-1x Bio-Titan Bio-Cannon",
        "range": "45cm",
        "firepower": "3x AP4+/AT5+",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "0-1x Cluster Spines",
        "range": "45cm",
        "firepower": "4BP",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "0-1x Pyro-Acid Spray",
        "range": "15cm",
        "firepower": "3BP",
        "notes": [
          "FwA",
          "IC"
        ]
      },
      {
        "name": "0-2x Razorclaw",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "TK(D3)"
        ]
      },
      {
        "name": "2x Massive Scything Talons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "TK"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 4",
      "Fearless",
      "Invulnerable Save",
      "Regeneration",
      "Reinforced Armour",
      "May step over units and and pieces of terrain that are lower then the unit's abdomen and less than 2cm wide. Armed with two weapons chosen from the following list (only a Razorclaw may be chosen twice): Bile Launcher, Bio-Titan Bio-Cannon, Cluster Spines, Pyro-Acid Spray, Razorclaw. Critical Hit Effect: The unit takes a point of damage. Roll a D6, on a roll of 1 all units within 5cm take a hit on a roll of 6+, and on a roll of 6 the unit loses another point of damage."
    ]
  },
  "hierophant_bio_titan": {
    "name": "Hierophant Bio-Titan",
    "type": "WE",
    "speed": "25cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "0-1x Bile Launcher",
        "range": "60cm",
        "firepower": "3BP",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "0-1x Bio-Titan Bio-Cannon",
        "range": "45cm",
        "firepower": "3x AP4+/AT5+",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "0-1x Cluster Spines",
        "range": "45cm",
        "firepower": "4BP",
        "notes": [
          "FwA"
        ]
      },
      {
        "name": "0-1x Pyro-Acid Spray",
        "range": "15cm",
        "firepower": "3BP",
        "notes": [
          "FwA",
          "IC"
        ]
      },
      {
        "name": "0-2x Razorclaw",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "TK(D3)"
        ]
      },
      {
        "name": "Ripper Tentacles",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+2)",
          "FS"
        ]
      },
      {
        "name": "2x Gigantic Scything Talons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "TK(D3)"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 6",
      "Fearless",
      "Invulnerable Save",
      "Regeneration",
      "Reinforced Armour",
      "May step over units and and pieces of terrain that are lower then the unit's abdomen and less than 2cm wide. Armed with two weapons chosen from the following list (only a Razorclaw may be chosen twice): Bile Launcher, Bio-Titan Bio-Cannon, Cluster Spines, Pyro-Acid Spray, Razorclaw. Critical Hit Effect: The unit takes a point of damage. Roll a D6, on a roll of 1 all units within 5cm take a hit on a roll of 6+, and on a roll of 6 the unit loses another point of damage."
    ]
  },
  "brood_nest": {
    "name": "Brood Nest",
    "type": "Formation",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [],
    "abilities": [
      "Source list formation.",
      "Section: TYRANID INDIVIDUALS",
      "Points: 50"
    ]
  },
  "bile_launcher": {
    "name": "Bile Launcher",
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
  "bio_titan_bio_cannon": {
    "name": "Bio-Titan Bio-Cannon",
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
  "cluster_spines": {
    "name": "Cluster Spines",
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
  "pyro_acid_spray": {
    "name": "Pyro-Acid Spray",
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
  }
},
	aliases: {
  "biovores": "biovore",
  "exocrines": "exocrine",
  "dactylis": "dactylis",
  "lictors": "lictor",
  "ravagers": "ravager",
  "perditors": "perditor",
  "tyranid warriors": "tyranid_warriors",
  "hive tyrant": "hive_tyrant",
  "genestealers": "genestealers",
  "gargoyles": "gargoyles",
  "4x gargoyles": "gargoyles",
  "2x tyranid warriors": "tyranid_warriors"
}
});

ArmyforgeUnitProfiles.findTyranidProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && ArmyforgeUnitProfiles.tyranid.armyIds.indexOf(listId) === -1) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeXenosName(displayName);
	if (!normalized) {
		return null;
	}
	var key = ArmyforgeUnitProfiles.tyranid.nameToKey[normalized] || ArmyforgeUnitProfiles.tyranid.nameToKey[normalized.replace(/\s+/g, '')];
	return key ? ArmyforgeUnitProfiles.tyranid.profiles[key] : null;
};
