// Source: https://tp.net-armageddon.org/army-lists/imperial-guard-death-korps-of-krieg.html

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

ArmyforgeUnitProfiles.igDeathKorpsOfKrieg = {
	armyIds: [
  "IG_krieg_NETEA"
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
  "gorgon_mortars": {
    "name": "Gorgon Mortars",
    "type": "CH",
    "speed": "n/a",
    "armour": "n/a",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Gorgon Mortars",
        "range": "30cm",
        "firepower": "2BP",
        "notes": [
          "FwA",
          "Ind",
          "SS"
        ]
      }
    ],
    "abilities": [
      "Replace the 2x Twin Heavy Bolter with Gorgon Mortars and reduce the unit's firefight to 6+."
    ]
  },
  "commander": {
    "name": "Commander",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Twin Heavy Stubber",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Commander"
    ]
  },
  "death_riders": {
    "name": "Death Riders",
    "type": "INF",
    "speed": "20cm",
    "armour": "5+",
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
          "FS"
        ]
      }
    ],
    "abilities": [
      "Infiltrator",
      "Mounted",
      "Walker"
    ]
  },
  "engineers": {
    "name": "Engineers",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "4+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Mole Launcher",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": [
          "IC"
        ]
      }
    ],
    "abilities": []
  },
  "fire_support": {
    "name": "Fire Support",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Twin Heavy Stubber",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Autocannon",
        "range": "45cm",
        "firepower": "AP5+/AT6+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "grenadiers": {
    "name": "Grenadiers",
    "type": "INF",
    "speed": "15cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
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
      }
    ],
    "abilities": [
      "Scout"
    ]
  },
  "heavy_mortar": {
    "name": "Heavy Mortar",
    "type": "INF",
    "speed": "5cm",
    "armour": "-",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Heavy Mortar",
        "range": "30cm",
        "firepower": "1BP",
        "notes": [
          "Ind"
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
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Lasguns",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": []
  },
  "quad_launcher": {
    "name": "Quad Launcher",
    "type": "INF",
    "speed": "5cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Quad Launcher",
        "range": "45cm",
        "firepower": "2x AP4+",
        "notes": [
          "Ind"
        ]
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
        "name": "Twin Heavy Stubber",
        "range": "30cm",
        "firepower": "AP5+",
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
  "centaur": {
    "name": "Centaur",
    "type": "LV",
    "speed": "35cm",
    "armour": "6+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Heavy Stubber",
        "range": "30cm",
        "firepower": "AP6+",
        "notes": []
      }
    ],
    "abilities": [
      "Transport",
      "May transport one infantry unit with Jump Packs or Mounted . If transporting a Heavy Mortar or Quad Launcher the unit's speed is reduced to 20cm."
    ]
  },
  "earthshaker_platform": {
    "name": "Earthshaker Platform",
    "type": "LV",
    "speed": "Immobile",
    "armour": "6+",
    "cc": "6+",
    "ff": "6+",
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
      }
    ],
    "abilities": []
  },
  "heavy_aa_platform": {
    "name": "Heavy AA Platform",
    "type": "LV",
    "speed": "Immobile",
    "armour": "6+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Heavy AA Gun",
        "range": "60cm",
        "firepower": "AP5+/AT5+/AA5+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "hydra_platform": {
    "name": "Hydra Platform",
    "type": "LV",
    "speed": "Immobile",
    "armour": "6+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "2x Twin Hydra Autocannon",
        "range": "45cm",
        "firepower": "AP4+/AT5+/AA5+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "medusa_platform": {
    "name": "Medusa Platform",
    "type": "LV",
    "speed": "Immobile",
    "armour": "6+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Medusa Siege Gun",
        "range": "60cm",
        "firepower": "1BP",
        "notes": [
          "D",
          "IC",
          "Ind"
        ]
      },
      {
        "name": "Medusa Siege Gun",
        "range": "30cm",
        "firepower": "MW4+",
        "notes": [
          "IC"
        ]
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
  "thunderer": {
    "name": "Thunderer",
    "type": "AV",
    "speed": "20cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
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
      "Reinforced Armour",
      "Thick Rear Armour"
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
  "deathstrike_silo": {
    "name": "Deathstrike Silo",
    "type": "WE",
    "speed": "Immobile",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Deathstrike Missiles",
        "range": "Unlimited",
        "firepower": "2x MW2+",
        "notes": [
          "Ind",
          "SS",
          "TK(D6)"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Critical Hit Effect: Destroyed. All units within 5cm take a MW4+ hit."
    ]
  },
  "gorgon": {
    "name": "Gorgon",
    "type": "WE",
    "speed": "20cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "2x Twin Heavy Stubber",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "2x Twin Heavy Bolter",
        "range": "30cm",
        "firepower": "AP4+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 3",
      "Reinforced Armour",
      "Transport",
      "Walker",
      "May transport ten infantry units without Jump Packs or Mounted . Critical Hit Effect: Immobilized and D6 units being transported are hit. Subsequent critical hits destroy the unit."
    ]
  },
  "macharius": {
    "name": "Macharius",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "2x Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "2x Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Twin Heavy Stubber",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Reinforced Armour",
      "Critical Hit Effect: Destroyed."
    ]
  },
  "macharius_command": {
    "name": "Macharius Command",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "0-1x 2x Vanquisher",
        "range": "75cm",
        "firepower": "AP4+/AT2+",
        "notes": []
      },
      {
        "name": "0-1x Vulcan Mega-Bolter",
        "range": "45cm",
        "firepower": "4x AP3+/AT5+",
        "notes": []
      },
      {
        "name": "2x Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "Twin Heavy Stubber",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Reinforced Armour",
      "Critical Hit Effect: Destroyed. Armed with either a Vulcan Megabolter or two Vanquisher."
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
  "stormblade": {
    "name": "Stormblade",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Plasma Blastgun",
        "range": "45cm",
        "firepower": "2x MW2+",
        "notes": [
          "FxF",
          "Slw"
        ]
      },
      {
        "name": "Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "2x Lascannon",
        "range": "45cm",
        "firepower": "AT5+",
        "notes": []
      },
      {
        "name": "2x Twin Heavy Bolter",
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
  "stormsword": {
    "name": "Stormsword",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Siege Cannon",
        "range": "45cm",
        "firepower": "3BP",
        "notes": [
          "FxF",
          "D",
          "IC"
        ]
      },
      {
        "name": "Heavy Bolter",
        "range": "30cm",
        "firepower": "AP5+",
        "notes": []
      },
      {
        "name": "2x Heavy Flamer",
        "range": "15cm",
        "firepower": "AP4+",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "2x Heavy Flamer",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": [
          "IC"
        ]
      },
      {
        "name": "2x Twin Heavy Bolter",
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
  "marauder_heavy_bomber": {
    "name": "Marauder Heavy Bomber",
    "type": "AC/WE",
    "speed": "Bomber",
    "armour": "5+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Bomb Racks",
        "range": "15cm",
        "firepower": "3BP",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "2x Twin Heavy Bolter",
        "range": "15cm",
        "firepower": "AP4+/AA5+",
        "notes": []
      }
    ],
    "abilities": [
      "Damage Capacity 2",
      "Critical Hit Effect: Destroyed."
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
  "gorgon mortars": "gorgon_mortars",
  "siege transports": "gorgon",
  "siege transport": "gorgon",
  "commander": "commander",
  "death riders": "death_riders",
  "engineers": "engineers",
  "fire support": "fire_support",
  "grenadiers": "grenadiers",
  "heavy mortar": "heavy_mortar",
  "infantry": "infantry",
  "quad launcher": "quad_launcher",
  "supreme commander": "supreme_commander",
  "centaur": "centaur",
  "earthshaker platform": "earthshaker_platform",
  "heavy aa platform": "heavy_aa_platform",
  "heavy anti aircraft platform": "heavy_aa_platform",
  "hydra platform": "hydra_platform",
  "hydra": "hydra_platform",
  "medusa platform": "medusa_platform",
  "bombard": "bombard",
  "hellhound": "hellhound",
  "leman russ": "leman_russ",
  "leman russ demolisher": "leman_russ_demolisher",
  "leman russ vanquisher": "leman_russ_vanquisher",
  "thunderer": "thunderer",
  "baneblade": "baneblade",
  "deathstrike silo": "deathstrike_silo",
  "gorgon": "gorgon",
  "macharius": "macharius",
  "macharius command": "macharius_command",
  "macharius command tank": "macharius_command",
  "shadowsword": "shadowsword",
  "stormblade": "stormblade",
  "stormsword": "stormsword",
  "marauder heavy bomber": "marauder_heavy_bomber",
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
  "rough riders": "death_riders",
  "rough rider": "death_riders",
  "deathstrike missile launcher": "deathstrike_silo",
  "deathstrike missile launchers": "deathstrike_silo",
  "deathstrike missile silo": "deathstrike_silo",
  "leman russ thunderer": "thunderer",
  "heavy tank macharius": "macharius",
  "macharius tank": "macharius",
  "warhound": "warhound_class_titan",
  "warhound titan": "warhound_class_titan",
  "reaver titan": "reaver_class_titan",
  "warlord titan": "warlord_class_titan"
}
};

ArmyforgeUnitProfiles.findIgDeathKorpsOfKriegProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.igDeathKorpsOfKrieg.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeImperialGuardListName(displayName);
	var key = ArmyforgeUnitProfiles.igDeathKorpsOfKrieg.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.igDeathKorpsOfKrieg.profiles[key] || null;
};
