// Source: https://tp.net-armageddon.org/army-lists/chaos-cultist-stigmatus-covenant.html
// Values extracted from archived JSON source; source-faithful runtime profiles generated from archived JSON.

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeChaosCultistName = ArmyforgeUnitProfiles.normalizeChaosCultistName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/^\s*one of the following\s+/i, '')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, '')
		.replace(/^\s*\d+\s*[xX]?\s*/g, '')
		.replace(/^\s*(?:one|two|three|four|five|six|seven|eight|nine|ten)\s+/i, '')
		.replace(/\b(?:daemonic|demonic)\b/g, 'daemon')
		.replace(/\b(?:unit|units|platoon|squadron|battery|company|fighter|fighters|bomber|bombers|titan|titans)\b/g, ' ')
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
};

ArmyforgeUnitProfiles.chaosCultistStigmatusCovenant = {
	armyIds: ["CHAOS_latd_redux_NetEA"],
	profiles: {
  "arch_heretic": {
    "name": "Arch-Heretic",
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
  "big_mutants": {
    "name": "Big Mutants",
    "type": "INF",
    "speed": "15cm",
    "armour": "3+",
    "cc": "4+",
    "ff": "4+",
    "weapons": [
      {
        "name": "2x Heavy Stubber",
        "range": "30cm",
        "firepower": "AP6+",
        "notes": []
      },
      {
        "name": "Big Weapons",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Counts as two units for the purposes of being transported."
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
  "chaos_hounds": {
    "name": "Chaos Hounds",
    "type": "INF",
    "speed": "30cm",
    "armour": "6+",
    "cc": "4+",
    "ff": "-",
    "weapons": [],
    "abilities": []
  },
  "chaos_marine_aspiring_champion": {
    "name": "Chaos Marine Aspiring Champion",
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
      },
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
  "chaos_spawn": {
    "name": "Chaos Spawn",
    "type": "INF",
    "speed": "15cm",
    "armour": "3+",
    "cc": "3+",
    "ff": "-",
    "weapons": [
      {
        "name": "Horrific Mutations",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+D3)"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Invulnerable Save",
      "Counts as two units for the purposes of being transported."
    ]
  },
  "cultists": {
    "name": "Cultists",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "5+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Heavy Weapons",
        "range": "30cm",
        "firepower": "AP6+/AT6+",
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
  "daemon_beasts": {
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
  "plague_zombies": {
    "name": "Plague Zombies",
    "type": "INF",
    "speed": "10cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "-",
    "weapons": [],
    "abilities": [
      "Fearless",
      "Infiltrator",
      "Teleport"
    ]
  },
  "demagogue": {
    "name": "Demagogue",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Heavy Weapons",
        "range": "30cm",
        "firepower": "AP6+/AT6+",
        "notes": []
      },
      {
        "name": "Arcane Powers",
        "range": "30cm",
        "firepower": "MW6+",
        "notes": []
      },
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
      "Augmented Summoning (+2D3)",
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
  "mutants": {
    "name": "Mutants",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "4+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Firearms",
        "range": "(15cm)",
        "firepower": "Small Arms",
        "notes": []
      }
    ],
    "abilities": []
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
  "land_transporter": {
    "name": "Land Transporter",
    "type": "LV",
    "speed": "30cm",
    "armour": "5+",
    "cc": "6+",
    "ff": "6+",
    "weapons": [
      {
        "name": "Heavy Weapons",
        "range": "30cm",
        "firepower": "AP6+/AT6+",
        "notes": []
      }
    ],
    "abilities": [
      "Transport",
      "May transport two infantry units without Jump Packs or Mounted ."
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
  "contagion_tower": {
    "name": "Contagion Tower",
    "type": "AV",
    "speed": "15cm",
    "armour": "5+",
    "cc": "5+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Plague Catapult",
        "range": "45cm",
        "firepower": "1BP",
        "notes": [
          "D",
          "Ind"
        ]
      },
      {
        "name": "Vomit Cannon",
        "range": "30cm",
        "firepower": "AP4+/AT6+",
        "notes": [
          "IC"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Invulnerable Save"
    ]
  },
  "daemon_assault_engine": {
    "name": "Daemon Assault Engine",
    "type": "AV",
    "speed": "25cm",
    "armour": "4+",
    "cc": "3+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Blood Cannon",
        "range": "30cm",
        "firepower": "2x AP4+/AT5+",
        "notes": []
      },
      {
        "name": "Daemon Blades",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+D3)"
        ]
      }
    ],
    "abilities": [
      "Fearless",
      "Reinforced Armour"
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
  "hellfire_cannon": {
    "name": "Hellfire Cannon",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "5+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Hellfire Cannon",
        "range": "75cm",
        "firepower": "MW4+",
        "notes": []
      }
    ],
    "abilities": [
      "Fearless",
      "Invulnerable Save"
    ]
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
  "chaos_altar": {
    "name": "Chaos Altar",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Arcane Technology",
        "range": "45cm",
        "firepower": "D3x AP4+/AT4+/AA4+",
        "notes": []
      }
    ],
    "abilities": [
      "Augmented Summoning (+2)",
      "Daemonic Focus",
      "Damage Capacity 3",
      "Fearless",
      "Inspiring",
      "Invulnerable Save",
      "Reinforced Armour",
      "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a macro-weapon hit on a roll of 6+."
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
  "lord_of_battles": {
    "name": "Lord of Battles",
    "type": "WE",
    "speed": "25cm",
    "armour": "4+",
    "cc": "2+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Chain Fist",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+3)",
          "MW"
        ]
      },
      {
        "name": "Death Storm",
        "range": "45cm",
        "firepower": "4x AP4+/AT4+",
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
      "Damage Capacity 6",
      "Fearless",
      "Invulnerable Save",
      "Reinforced Armour",
      "Thick Rear Armour",
      "Critical Hit Effect: Move the unit 3D6cm in a random direction. If it moves into impassable terrain or another unit it can't move over it will stop and suffer one point of damage. All units it moves into or over suffer a hit on a roll of 4+."
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
  "plague_tower": {
    "name": "Plague Tower",
    "type": "WE",
    "speed": "15cm",
    "armour": "4+",
    "cc": "4+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Plague Mortar",
        "range": "60cm",
        "firepower": "D3+3BP",
        "notes": [
          "FxF",
          "D"
        ]
      },
      {
        "name": "2x Battle Cannon",
        "range": "75cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "Rot Cannon",
        "range": "90cm",
        "firepower": "AP3+/AT5+",
        "notes": [
          "FxF",
          "IC"
        ]
      }
    ],
    "abilities": [
      "Damage Capacity 6",
      "Fearless",
      "Invulnerable Save",
      "Reinforced Armour",
      "Transport",
      "May transport sixteen Great Unclean Ones or infantry units without Jump Packs or Mounted ; Great Unclean Ones count as two units each. Critical Hit Effect: The unit takes a point of damage and D3 units of the player's choice that are being transported are destroyed."
    ]
  },
  "questor": {
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
  "subjugator": {
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
  "doomwing": {
    "name": "Doomwing",
    "type": "AC",
    "speed": "Fighter",
    "armour": "6+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Flame Cannon",
        "range": "15cm",
        "firepower": "2x AP4+/AT5+/AA6+",
        "notes": [
          "FxF",
          "IC"
        ]
      }
    ],
    "abilities": [
      "Invulnerable Save"
    ]
  },
  "firelord": {
    "name": "Firelord",
    "type": "AC",
    "speed": "Bomber",
    "armour": "4+",
    "cc": "n/a",
    "ff": "n/a",
    "weapons": [
      {
        "name": "Flame Cannon",
        "range": "15cm",
        "firepower": "2x AP4+/AT5+/AA6+",
        "notes": [
          "FxF",
          "IC"
        ]
      },
      {
        "name": "Twin Lascannon",
        "range": "45cm",
        "firepower": "AT4+/AA4+",
        "notes": [
          "FxF"
        ]
      },
      {
        "name": "Firestorm Bombs",
        "range": "15cm",
        "firepower": "D3BP",
        "notes": [
          "FxF",
          "IC"
        ]
      }
    ],
    "abilities": [
      "Invulnerable Save"
    ]
  },
  "marauder": {
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
  "thunderbolt": {
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
  }
},
	nameToKey: {
  "arch heretic": "arch_heretic",
  "arch heretic unit": "arch_heretic",
  "arch heretic units": "arch_heretic",
  "arch heretics": "arch_heretic",
  "icon bearer": "icon_bearer",
  "icon bearer unit": "icon_bearer",
  "icon bearer units": "icon_bearer",
  "icon bearers": "icon_bearer",
  "big mutants": "big_mutants",
  "big mutants unit": "big_mutants",
  "big mutants units": "big_mutants",
  "big mutant": "big_mutants",
  "bloodletters": "bloodletters",
  "bloodletters unit": "bloodletters",
  "bloodletters units": "bloodletters",
  "bloodletter": "bloodletters",
  "chaos hounds": "chaos_hounds",
  "chaos hounds unit": "chaos_hounds",
  "chaos hounds units": "chaos_hounds",
  "chaos hound": "chaos_hounds",
  "chaos marine aspiring champion": "chaos_marine_aspiring_champion",
  "chaos marine aspiring champion unit": "chaos_marine_aspiring_champion",
  "chaos marine aspiring champion units": "chaos_marine_aspiring_champion",
  "chaos marine aspiring champions": "chaos_marine_aspiring_champion",
  "chaos spawn": "chaos_spawn",
  "chaos spawn unit": "chaos_spawn",
  "chaos spawn units": "chaos_spawn",
  "chaos spawns": "chaos_spawn",
  "cultists": "cultists",
  "cultists unit": "cultists",
  "cultists units": "cultists",
  "cultist": "cultists",
  "daemon prince": "daemon_prince",
  "daemon prince unit": "daemon_prince",
  "daemon prince units": "daemon_prince",
  "daemon princes": "daemon_prince",
  "daemonettes": "daemonettes",
  "daemonettes unit": "daemonettes",
  "daemonettes units": "daemonettes",
  "daemonette": "daemonettes",
  "daemon beasts": "daemon_beasts",
  "daemon beasts unit": "daemon_beasts",
  "daemon beasts units": "daemon_beasts",
  "daemon beast": "daemon_beasts",
  "demagogue": "demagogue",
  "demagogue unit": "demagogue",
  "demagogue units": "demagogue",
  "demagogues": "demagogue",
  "flamers": "flamers",
  "flamers unit": "flamers",
  "flamers units": "flamers",
  "flamer": "flamers",
  "mutants": "mutants",
  "mutants unit": "mutants",
  "mutants units": "mutants",
  "mutant": "mutants",
  "plaguebearers": "plaguebearers",
  "plaguebearers unit": "plaguebearers",
  "plaguebearers units": "plaguebearers",
  "plaguebearer": "plaguebearers",
  "plague zombies": "plague_zombies",
  "plague zombies unit": "plague_zombies",
  "plague zombies units": "plague_zombies",
  "plague zombie": "plague_zombies",
  "plague zombie infestation": "plague_zombies",
  "rough riders": "rough_riders",
  "rough riders unit": "rough_riders",
  "rough riders units": "rough_riders",
  "rough rider": "rough_riders",
  "support squad": "support_squad",
  "support squad unit": "support_squad",
  "support squad units": "support_squad",
  "support squads": "support_squad",
  "sentinel": "sentinel",
  "sentinel unit": "sentinel",
  "sentinel units": "sentinel",
  "sentinels": "sentinel",
  "land transporter": "land_transporter",
  "land transporter unit": "land_transporter",
  "land transporter units": "land_transporter",
  "land transporters": "land_transporter",
  "basilisk": "basilisk",
  "basilisk unit": "basilisk",
  "basilisk units": "basilisk",
  "basilisks": "basilisk",
  "chimera": "chimera",
  "chimera unit": "chimera",
  "chimera units": "chimera",
  "chimeras": "chimera",
  "contagion tower": "contagion_tower",
  "contagion tower unit": "contagion_tower",
  "contagion tower units": "contagion_tower",
  "contagion towers": "contagion_tower",
  "daemon assault engine": "daemon_assault_engine",
  "daemon assault engine unit": "daemon_assault_engine",
  "daemon assault engine units": "daemon_assault_engine",
  "daemon assault engines": "daemon_assault_engine",
  "daemon knight": "daemon_knight",
  "daemon knight unit": "daemon_knight",
  "daemon knight units": "daemon_knight",
  "daemon knights": "daemon_knight",
  "defiler": "defiler",
  "defiler unit": "defiler",
  "defiler units": "defiler",
  "defilers": "defiler",
  "griffon": "griffon",
  "griffon unit": "griffon",
  "griffon units": "griffon",
  "griffons": "griffon",
  "hellfire cannon": "hellfire_cannon",
  "hellfire cannon unit": "hellfire_cannon",
  "hellfire cannon units": "hellfire_cannon",
  "hellfire cannons": "hellfire_cannon",
  "hellhound": "hellhound",
  "hellhound unit": "hellhound",
  "hellhound units": "hellhound",
  "hellhounds": "hellhound",
  "hydra": "hydra",
  "hydra unit": "hydra",
  "hydra units": "hydra",
  "hydras": "hydra",
  "leman russ": "leman_russ",
  "leman russ unit": "leman_russ",
  "leman russ units": "leman_russ",
  "leman rus": "leman_russ",
  "leman russ demolisher": "leman_russ_demolisher",
  "leman russ demolisher unit": "leman_russ_demolisher",
  "leman russ demolisher units": "leman_russ_demolisher",
  "leman russ demolishers": "leman_russ_demolisher",
  "silver tower": "silver_tower",
  "silver tower unit": "silver_tower",
  "silver tower units": "silver_tower",
  "silver towers": "silver_tower",
  "bloodthirster": "bloodthirster",
  "bloodthirster unit": "bloodthirster",
  "bloodthirster units": "bloodthirster",
  "bloodthirsters": "bloodthirster",
  "chaos altar": "chaos_altar",
  "chaos altar unit": "chaos_altar",
  "chaos altar units": "chaos_altar",
  "chaos altars": "chaos_altar",
  "great unclean one": "great_unclean_one",
  "great unclean one unit": "great_unclean_one",
  "great unclean one units": "great_unclean_one",
  "great unclean ones": "great_unclean_one",
  "keeper of secrets": "keeper_of_secrets",
  "keeper of secrets unit": "keeper_of_secrets",
  "keeper of secrets units": "keeper_of_secrets",
  "keeper of secret": "keeper_of_secrets",
  "lord of battles": "lord_of_battles",
  "lord of battles unit": "lord_of_battles",
  "lord of battles units": "lord_of_battles",
  "lord of battle": "lord_of_battles",
  "lord of change": "lord_of_change",
  "lord of change unit": "lord_of_change",
  "lord of change units": "lord_of_change",
  "lord of changes": "lord_of_change",
  "plague tower": "plague_tower",
  "plague tower unit": "plague_tower",
  "plague tower units": "plague_tower",
  "plague towers": "plague_tower",
  "questor": "questor",
  "questor unit": "questor",
  "questor units": "questor",
  "questors": "questor",
  "subjugator": "subjugator",
  "subjugator unit": "subjugator",
  "subjugator units": "subjugator",
  "subjugators": "subjugator",
  "doomwing": "doomwing",
  "doomwing unit": "doomwing",
  "doomwing units": "doomwing",
  "doomwings": "doomwing",
  "firelord": "firelord",
  "firelord unit": "firelord",
  "firelord units": "firelord",
  "firelords": "firelord",
  "marauder": "marauder",
  "marauder unit": "marauder",
  "marauder units": "marauder",
  "marauders": "marauder",
  "thunderbolt": "thunderbolt",
  "thunderbolt unit": "thunderbolt",
  "thunderbolt units": "thunderbolt",
  "thunderbolts": "thunderbolt",
  "emperor class battleship": "emperor_class_battleship",
  "emperor class battleship unit": "emperor_class_battleship",
  "emperor class battleship units": "emperor_class_battleship",
  "emperor class battleships": "emperor_class_battleship",
  "lunar class cruiser": "lunar_class_cruiser",
  "lunar class cruiser unit": "lunar_class_cruiser",
  "lunar class cruiser units": "lunar_class_cruiser",
  "lunar class cruisers": "lunar_class_cruiser",
  "contagion engine": "contagion_tower",
  "contagion engines": "contagion_tower"
}
};

ArmyforgeUnitProfiles.findChaosCultistStigmatusCovenantProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.chaosCultistStigmatusCovenant.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeChaosCultistName(displayName);
	var key = ArmyforgeUnitProfiles.chaosCultistStigmatusCovenant.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.chaosCultistStigmatusCovenant.profiles[key] || null;
};
