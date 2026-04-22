// Source: https://tp.net-armageddon.org/army-lists/imperial-guard-steel-legion.html

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeImperialGuardListName = ArmyforgeUnitProfiles.normalizeImperialGuardListName || function normalizeImperialGuardListName(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/^\s*\d+\s*[xX]?\s*/g, '')
		.replace(/\b(steel legion|baran siegemasters|death korps|minervan tank legion|imperial guard)\b/g, ' ')
		.replace(/\b(transport|vehicle)\b/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.igSteelLegion = {
	armyIds: [
  "IG_steelLegion_NETEA"
],
	profiles: {
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
  "commander": {
    "name": "Commander",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Autocannon",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Commander"
    ]
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
  "ogryns": {
    "name": "Ogryns",
    "type": "INF",
    "speed": "15cm",
    "armour": "3+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Ripper Guns",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      },
      {
        "name": "Ogryn Combat Weapons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Counts as two units each for the purposes of being transported."
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
  "snipers": {
    "name": "Snipers",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Sniper Rifles",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Scout",
      "Sniper"
    ]
  },
  "storm_troopers": {
    "name": "Storm Troopers",
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
    "abilities": [
      "Scout"
    ]
  },
  "support_squad": {
    "name": "Support Squad",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "6+",
    "ff": "4+",
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
  "supreme_commander": {
    "name": "Supreme Commander",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Autocannon",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
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
      "Supreme Commander"
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
  "bombard": {
    "name": "Bombard",
    "type": "AV",
    "speed": "20cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Siege Mortar",
        "range": "45cm",
        "firepower": "2BP",
        "notes": [
          "IC",
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
  "deathstrike": {
    "name": "Deathstrike",
    "type": "AV",
    "speed": "20cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Deathstrike Missile",
        "range": "Unlimited",
        "firepower": "MW2+",
        "notes": [
          "Ind",
          "SS",
          "TK(D6)"
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
  "griffon": {
    "name": "Griffon",
    "type": "AV",
    "speed": "30cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Heavy Mortar",
        "range": "30cm",
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
  "hellhound": {
    "name": "Hellhound",
    "type": "AV",
    "speed": "30cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "3+",
    "weapons": [
      {
        "name": "Inferno Cannon",
        "range": "30cm",
        "firepower": "AP3+",
        "notes": [
          "IC"
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
  "leman_russ_demolisher": {
    "name": "Leman Russ Demolisher",
    "type": "AV",
    "speed": "20cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "3+",
    "weapons": [
      {
        "name": "Demolisher",
        "range": "30cm",
        "firepower": "AP3+/AT4+",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "Lascannon",
        "range": "45cm",
        "firepower": "AT5+",
        "notes": []
      },
      {
        "name": "2x Plasma Cannon",
        "range": "30cm",
        "firepower": "AP5+/AT5+",
        "notes": []
      }
    ],
    "abilities": [
      "Reinforced Armour"
    ]
  },
  "leman_russ_vanquisher": {
    "name": "Leman Russ Vanquisher",
    "type": "AV",
    "speed": "20cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Vanquisher",
        "range": "75cm",
        "firepower": "AP4+/AT2+",
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
  "manticore": {
    "name": "Manticore",
    "type": "AV",
    "speed": "20cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Rocket Launcher",
        "range": "150cm",
        "firepower": "2BP",
        "notes": [
          "D",
          "Ind",
          "Slw"
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
  "vulture": {
    "name": "Vulture",
    "type": "AV",
    "speed": "35cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Twin Autocannon",
        "range": "45cm",
        "firepower": "AP4+/AT5+",
        "notes": []
      },
      {
        "name": "2x Hellstrike",
        "range": "120cm",
        "firepower": "AT2+",
        "notes": [
          "SS"
        ]
      }
    ],
    "abilities": [
      "Scout",
      "Skimmer"
    ]
  },
  "baneblade": {
    "name": "Baneblade",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Baneblade Battle Cannon",
        "range": "75cm",
        "firepower": "2x AP3+/AT3+",
        "notes": []
      },
      {
        "name": "Autocannon",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      },
      {
        "name": "Demolisher",
        "range": "30cm",
        "firepower": "AP3+/AT4+",
        "notes": [
          "FxF",
          "IC"
        ]
      },
      {
        "name": "2x Lascannon",
        "range": "45cm",
        "firepower": "AT5+",
        "notes": []
      },
      {
        "name": "3x Twin Heavy Bolter",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "Reinforced Armour",
      "Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 6+."
    ]
  },
  "shadowsword": {
    "name": "Shadowsword",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Volcano Cannon",
        "range": "90cm",
        "firepower": "MW2+",
        "notes": [
          "FxF",
          "TK(D3)"
        ]
      },
      {
        "name": "2x Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "Reinforced Armour",
      "Critical Hit Effect: Destroyed. All units within 5cm of the model suffer a hit on a roll of 6+."
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
	nameToKey: {
  "commissar": "commissar",
  "commander": "commander",
  "infantry": "infantry",
  "ogryns": "ogryns",
  "rough riders": "rough_riders",
  "snipers": "snipers",
  "storm troopers": "storm_troopers",
  "support squad": "support_squad",
  "supreme commander": "supreme_commander",
  "sentinel": "sentinel",
  "basilisk": "basilisk",
  "bombard": "bombard",
  "chimera": "chimera",
  "deathstrike": "deathstrike",
  "griffon": "griffon",
  "hellhound": "hellhound",
  "hydra": "hydra",
  "leman russ": "leman_russ",
  "leman russ demolisher": "leman_russ_demolisher",
  "leman russ vanquisher": "leman_russ_vanquisher",
  "manticore": "manticore",
  "valkyrie": "valkyrie",
  "vulture": "vulture",
  "baneblade": "baneblade",
  "shadowsword": "shadowsword",
  "marauder bomber": "marauder_bomber",
  "marauder": "marauder_bomber",
  "marauders": "marauder_bomber",
  "thunderbolt fighter": "thunderbolt_fighter",
  "thunderbolt": "thunderbolt_fighter",
  "thunderbolts": "thunderbolt_fighter",
  "emperor class battleship": "emperor_class_battleship",
  "lunar class cruiser": "lunar_class_cruiser",
  "reaver class titan": "reaver_class_titan",
  "warhound class titan": "warhound_class_titan",
  "warlord class titan": "warlord_class_titan",
  "vanquisher": "leman_russ_vanquisher",
  "demolisher": "leman_russ_demolisher",
  "deathstrike missile launcher": "deathstrike",
  "deathstrike missile launchers": "deathstrike",
  "deathstrike missile battery": "deathstrike",
  "warhound": "warhound_class_titan",
  "warhound titan": "warhound_class_titan",
  "reaver titan": "reaver_class_titan",
  "warlord titan": "warlord_class_titan"
}
};

ArmyforgeUnitProfiles.findIgSteelLegionProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.igSteelLegion.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeImperialGuardListName(displayName);
	var key = ArmyforgeUnitProfiles.igSteelLegion.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.igSteelLegion.profiles[key] || null;
};
