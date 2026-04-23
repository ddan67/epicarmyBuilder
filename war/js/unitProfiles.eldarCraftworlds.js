// Source: https://tp.net-armageddon.org/army-lists/eldar-alaitoc.html
// Source: https://tp.net-armageddon.org/army-lists/eldar-biel-tan.html
// Source: https://tp.net-armageddon.org/army-lists/eldar-iyanden.html
// Source: https://tp.net-armageddon.org/army-lists/eldar-saim-hann.html
// Values extracted from those pages; manually verify against the source if any ambiguity remains.

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.eldarCraftworlds = {
  "armyIds": [
    "EL_bieltan_NETEA",
    "EL_saimhann_NETEA",
    "EL_iyanden_NETEA",
    "EL_alaitoc_NETEA"
  ],
  "profiles": {
    "autarch": {
      "name": "Autarch",
      "type": "CH",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Autarch Ranged Weapon",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+1)"
          ]
        },
        {
          "name": "Autarch Close Combat Weapon",
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
        "Supreme Commander"
      ]
    },
    "court_of_the_young_king": {
      "name": "Court of the Young King",
      "type": "CH",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Ancient Weapons",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+1)",
            "MW"
          ]
        }
      ],
      "abilities": []
    },
    "exarch": {
      "name": "Exarch",
      "type": "CH",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "0-1x Exarch Ranged Weapon",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+1)"
          ]
        },
        {
          "name": "0-1x Exarch Close Combat Weapon",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+1)"
          ]
        }
      ],
      "abilities": [
        "Inspiring",
        "Exarchs added to units of Dire Avengers, Howling Banshees, Shining Spears or Striking Scorpions have an Exarch Close Combat weapon. Exarchs added to a unit of Dark Reapers, Fire Dragons, Swooping Hawks or Warp Spiders have an Exarch Ranged Weapon."
      ]
    },
    "dark_reapers": {
      "name": "Dark Reapers",
      "type": "INF",
      "speed": "15cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "3+",
      "weapons": [
        {
          "name": "Reaper Missile Launchers",
          "range": "45cm",
          "firepower": "2x AP5+",
          "notes": []
        }
      ],
      "abilities": []
    },
    "dire_avengers": {
      "name": "Dire Avengers",
      "type": "INF",
      "speed": "15cm",
      "armour": "5+",
      "cc": "5+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Shuriken Catapults",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+1)"
          ]
        }
      ],
      "abilities": []
    },
    "farseer": {
      "name": "Farseer",
      "type": "INF",
      "speed": "15cm",
      "armour": "4+",
      "cc": "4+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Shuriken Pistols",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        },
        {
          "name": "Witch Blades",
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
        "Farsight",
        "Invulnerable Save"
      ]
    },
    "fire_dragons": {
      "name": "Fire Dragons",
      "type": "INF",
      "speed": "15cm",
      "armour": "5+",
      "cc": "5+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Fusion Guns",
          "range": "15cm",
          "firepower": "MW5+",
          "notes": []
        },
        {
          "name": "Fusion Guns",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "MW"
          ]
        }
      ],
      "abilities": []
    },
    "guardians": {
      "name": "Guardians",
      "type": "INF",
      "speed": "15cm",
      "armour": "-",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Shuriken Catapults",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        }
      ],
      "abilities": []
    },
    "heavy_weapon_platform": {
      "name": "Heavy Weapon Platform",
      "type": "INF",
      "speed": "15cm",
      "armour": "-",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+",
          "notes": []
        }
      ],
      "abilities": []
    },
    "howling_banshees": {
      "name": "Howling Banshees",
      "type": "INF",
      "speed": "15cm",
      "armour": "5+",
      "cc": "2+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Shuriken Pistols",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        },
        {
          "name": "Banshee Masks",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "FS"
          ]
        }
      ],
      "abilities": [
        "Infiltrator"
      ]
    },
    "jetbikes": {
      "name": "Jetbikes",
      "type": "INF",
      "speed": "35cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Twin Shuriken Catapults",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        }
      ],
      "abilities": [
        "Mounted",
        "Skimmer"
      ]
    },
    "rangers": {
      "name": "Rangers",
      "type": "INF",
      "speed": "15cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Long Rifles",
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
    "shining_spears": {
      "name": "Shining Spears",
      "type": "INF",
      "speed": "35cm",
      "armour": "4+",
      "cc": "4+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Twin Shuriken Catapults",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        },
        {
          "name": "Power Lances",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "L"
          ]
        }
      ],
      "abilities": [
        "Mounted",
        "Skimmer"
      ]
    },
    "striking_scorpions": {
      "name": "Striking Scorpions",
      "type": "INF",
      "speed": "15cm",
      "armour": "4+",
      "cc": "4+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Shuriken Pistols",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        },
        {
          "name": "Mandiblasters",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+1)"
          ]
        }
      ],
      "abilities": []
    },
    "support_weapon_platform": {
      "name": "Support Weapon Platform",
      "type": "INF",
      "speed": "15cm",
      "armour": "-",
      "cc": "6+",
      "ff": "6+",
      "weapons": [
        {
          "name": "D-Cannon",
          "range": "30cm",
          "firepower": "MW5+",
          "notes": []
        }
      ],
      "abilities": []
    },
    "swooping_hawks": {
      "name": "Swooping Hawks",
      "type": "INF",
      "speed": "35cm",
      "armour": "5+",
      "cc": "5+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Lasblasters",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        }
      ],
      "abilities": [
        "Jump Packs",
        "Scout",
        "Teleport"
      ]
    },
    "warp_spiders": {
      "name": "Warp Spiders",
      "type": "INF",
      "speed": "15cm",
      "armour": "4+",
      "cc": "5+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Death Spinners",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        }
      ],
      "abilities": [
        "First Strike",
        "Infiltrator",
        "Jump Packs"
      ]
    },
    "wraithguard": {
      "name": "Wraithguard",
      "type": "INF",
      "speed": "15cm",
      "armour": "4+",
      "cc": "4+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Wraithcannons",
          "range": "15cm",
          "firepower": "2x MW5+",
          "notes": []
        },
        {
          "name": "Wraithcannons",
          "range": "(15cm)",
          "firepower": "Small Arms",
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
    "vyper": {
      "name": "Vyper",
      "type": "LV",
      "speed": "35cm",
      "armour": "4+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+",
          "notes": []
        }
      ],
      "abilities": [
        "Skimmer"
      ]
    },
    "war_walker": {
      "name": "War Walker",
      "type": "LV",
      "speed": "20cm",
      "armour": "6+",
      "cc": "5+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+",
          "notes": []
        },
        {
          "name": "Bright Lance",
          "range": "30cm",
          "firepower": "AT5+",
          "notes": [
            "L"
          ]
        }
      ],
      "abilities": [
        "Reinforced Armour",
        "Scout",
        "Walker"
      ]
    },
    "falcon": {
      "name": "Falcon",
      "type": "AV",
      "speed": "35cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Pulse Laser",
          "range": "45cm",
          "firepower": "2x AT4+",
          "notes": []
        },
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+",
          "notes": []
        }
      ],
      "abilities": [
        "Skimmer",
        "Transport",
        "May transport one infantry unit (except Support Weapon Platforms and Wraithguard) without Jump Packs or Mounted ."
      ]
    },
    "fire_prism": {
      "name": "Fire Prism",
      "type": "AV",
      "speed": "35cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Prism Cannon",
          "range": "60cm",
          "firepower": "AP4+/AT2+",
          "notes": [
            "L"
          ]
        }
      ],
      "abilities": [
        "Skimmer"
      ]
    },
    "firestorm": {
      "name": "Firestorm",
      "type": "AV",
      "speed": "35cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Firestorm Battery",
          "range": "45cm",
          "firepower": "2x AP5+/AT5+/AA4+",
          "notes": []
        }
      ],
      "abilities": [
        "Skimmer",
        "Transport",
        "May transport one infantry unit (except Support Weapon Platforms and Wraithguard) without Jump Packs or Mounted ."
      ]
    },
    "night_spinner": {
      "name": "Night Spinner",
      "type": "AV",
      "speed": "35cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Night Spinner",
          "range": "45cm",
          "firepower": "1BP",
          "notes": [
            "D",
            "Ind"
          ]
        }
      ],
      "abilities": [
        "Skimmer",
        "Transport",
        "May transport one infantry unit (except Support Weapon Platforms and Wraithguard) without Jump Packs or Mounted ."
      ]
    },
    "wave_serpent": {
      "name": "Wave Serpent",
      "type": "AV",
      "speed": "35cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Twin Shuriken Cannon",
          "range": "30cm",
          "firepower": "AP4+",
          "notes": []
        }
      ],
      "abilities": [
        "Reinforced Armour",
        "Skimmer",
        "Transport",
        "May transport one Wraithguard unit or two infantry units (except Support Weapon Platforms) without Jump Packs or Mounted ; Wraithguard count as two units each."
      ]
    },
    "wraithlord": {
      "name": "Wraithlord",
      "type": "AV",
      "speed": "15cm",
      "armour": "4+",
      "cc": "3+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Bright Lance",
          "range": "30cm",
          "firepower": "AT5+",
          "notes": [
            "L"
          ]
        },
        {
          "name": "Power Fists",
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
        "Walker"
      ]
    },
    "avatar": {
      "name": "Avatar",
      "type": "WE",
      "speed": "15cm",
      "armour": "3+",
      "cc": "2+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Wailing Doom",
          "range": "30cm",
          "firepower": "MW5+",
          "notes": []
        },
        {
          "name": "Wailing Doom",
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
        "Damage Capacity 3",
        "Fearless",
        "Inspiring",
        "Invulnerable Save",
        "Walker",
        "Critical Hit Effect: The unit is destroyed. All Eldar formations with a unit with a line of fire to the Avatar receive a Blast marker."
      ]
    },
    "cobra": {
      "name": "Cobra",
      "type": "WE",
      "speed": "25cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Cobra D-Cannon",
          "range": "30cm",
          "firepower": "3BP",
          "notes": [
            "FxF",
            "IC",
            "MW"
          ]
        },
        {
          "name": "Cobra D-Cannon",
          "range": "30cm",
          "firepower": "MW3+",
          "notes": [
            "FxF",
            "TK(D6)"
          ]
        },
        {
          "name": "Eldar Missile Launcher",
          "range": "45cm",
          "firepower": "AP5+/AT6+/AA6+",
          "notes": []
        },
        {
          "name": "Shuriken Cannon",
          "range": "30cm",
          "firepower": "AP5+",
          "notes": []
        }
      ],
      "abilities": [
        "Damage Capacity 3",
        "Reinforced Armour",
        "Skimmer",
        "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a hit on a roll of 6+."
      ]
    },
    "phantom_titan": {
      "name": "Phantom Titan",
      "type": "WE",
      "speed": "25cm",
      "armour": "5+",
      "cc": "3+",
      "ff": "3+",
      "weapons": [
        {
          "name": "1-2x Titan Pulsar",
          "range": "75cm",
          "firepower": "2x MW2+",
          "notes": [
            "TK"
          ]
        },
        {
          "name": "0-1x Titan Power Fist",
          "range": "30cm",
          "firepower": "6x AP4+/AT4+",
          "notes": []
        },
        {
          "name": "0-1x Titan Power Fist",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+3)"
          ]
        },
        {
          "name": "0-1x Titan Power Fist",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+2)",
            "TK(D3)"
          ]
        },
        {
          "name": "2x Twin Eldar Missile Launcher",
          "range": "45cm",
          "firepower": "AP4+/AT5+/AA5+",
          "notes": []
        }
      ],
      "abilities": [
        "Damage Capacity 6",
        "Fearless",
        "Holofield",
        "Leader",
        "Reinforced Armour",
        "Walker",
        "Armed with either two Titan Pulsars, or a Titan Pulsar and Power Fist. May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit loses the Holofield ability save for the rest of the game. Subsequent critical hits cause an extra point of damage."
      ]
    },
    "revenant_titan": {
      "name": "Revenant Titan",
      "type": "WE",
      "speed": "35cm",
      "armour": "5+",
      "cc": "4+",
      "ff": "4+",
      "weapons": [
        {
          "name": "2x Revenant Pulse Laser",
          "range": "45cm",
          "firepower": "2x MW3+",
          "notes": []
        },
        {
          "name": "2x Eldar Missile Launcher",
          "range": "45cm",
          "firepower": "AP5+/AT6+/AA6+",
          "notes": []
        }
      ],
      "abilities": [
        "Damage Capacity 3",
        "Fearless",
        "Holofield",
        "Jump Packs",
        "Walker",
        "May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit loses the Holofield ability save for the rest of the game. Subsequent critical hits destroy the unit."
      ]
    },
    "scorpion": {
      "name": "Scorpion",
      "type": "WE",
      "speed": "25cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Scorpion Twin Pulsar",
          "range": "75cm",
          "firepower": "2x MW2+",
          "notes": []
        },
        {
          "name": "Shuriken Cannon",
          "range": "30cm",
          "firepower": "AP5+",
          "notes": []
        }
      ],
      "abilities": [
        "Damage Capacity 3",
        "Reinforced Armour",
        "Skimmer",
        "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a hit on a roll of 6+."
      ]
    },
    "storm_serpent": {
      "name": "Storm Serpent",
      "type": "WE",
      "speed": "25cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Storm Serpent Pulse Laser",
          "range": "45cm",
          "firepower": "2x AT3+",
          "notes": []
        },
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+",
          "notes": []
        }
      ],
      "abilities": [
        "Damage Capacity 3",
        "Reinforced Armour",
        "Skimmer",
        "Webway Portal",
        "Only formations consisting completely of infantry units, light vehicle units or armoured vehicles units with the walker ability may use the Storm Serpent's Webway Portal to enter play. Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a hit on a roll of 6+."
      ]
    },
    "void_spinner": {
      "name": "Void Spinner",
      "type": "WE",
      "speed": "25cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Void Spinner Array",
          "range": "60cm",
          "firepower": "3BP",
          "notes": [
            "D",
            "Ind"
          ]
        }
      ],
      "abilities": [
        "Damage Capacity 3",
        "Reinforced Armour",
        "Skimmer",
        "Critical Hit Effect: The unit is destroyed. All units within 5cm suffer a hit on a roll of 6+."
      ]
    },
    "warlock_titan": {
      "name": "Warlock Titan",
      "type": "WE",
      "speed": "25cm",
      "armour": "5+",
      "cc": "3+",
      "ff": "3+",
      "weapons": [
        {
          "name": "Psychic Lance",
          "range": "30cm",
          "firepower": "3BP",
          "notes": [
            "D",
            "IC",
            "TK(D3)"
          ]
        },
        {
          "name": "Psychic Lance",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+2)",
            "TK(D3)"
          ]
        },
        {
          "name": "0-1x Titan Pulsar",
          "range": "75cm",
          "firepower": "2x MW2+",
          "notes": [
            "TK"
          ]
        },
        {
          "name": "0-1x Titan Power Fist",
          "range": "30cm",
          "firepower": "6x AP4+/AT4+",
          "notes": []
        },
        {
          "name": "0-1x Titan Power Fist",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+3)"
          ]
        },
        {
          "name": "0-1x Titan Power Fist",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+2)",
            "TK(D3)"
          ]
        },
        {
          "name": "2x Twin Eldar Missile Launcher",
          "range": "45cm",
          "firepower": "AP4+/AT5+/AA5+",
          "notes": []
        }
      ],
      "abilities": [
        "Damage Capacity 6",
        "Farsight",
        "Fearless",
        "Holofield",
        "Inspiring",
        "Leader",
        "Reinforced Armour",
        "Walker",
        "Armed with a Psychic Lance, and either a Titan Pulsar or Power Fist. May step over units and pieces of terrain that are lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit loses the Holofield ability save for the rest of the game. Subsequent critical hits cause an extra point of damage."
      ]
    },
    "nightwing_interceptor": {
      "name": "Nightwing Interceptor",
      "type": "AC",
      "speed": "Fighter",
      "armour": "4+",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Twin Shuriken Cannon",
          "range": "30cm",
          "firepower": "AP4+/AA5+",
          "notes": [
            "FxF"
          ]
        },
        {
          "name": "Twin Bright Lance",
          "range": "30cm",
          "firepower": "AT4+/AA5+",
          "notes": [
            "FxF",
            "L"
          ]
        }
      ],
      "abilities": []
    },
    "phoenix_bomber": {
      "name": "Phoenix Bomber",
      "type": "AC",
      "speed": "Fighter-Bomber",
      "armour": "5+",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Twin Shuriken Cannon",
          "range": "30cm",
          "firepower": "AP4+/AA5+",
          "notes": [
            "FxF"
          ]
        },
        {
          "name": "Pulse Laser",
          "range": "45cm",
          "firepower": "2x AT4+",
          "notes": [
            "FxF"
          ]
        },
        {
          "name": "Night Spinner",
          "range": "15cm",
          "firepower": "1BP",
          "notes": [
            "FxF",
            "D"
          ]
        }
      ],
      "abilities": [
        "Reinforced Armour"
      ]
    },
    "vampire_raider": {
      "name": "Vampire Raider",
      "type": "AC/WE",
      "speed": "Bomber",
      "armour": "5+",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "2x Pulse Laser",
          "range": "45cm",
          "firepower": "2x AT4+",
          "notes": [
            "FxF"
          ]
        },
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+/AA5+",
          "notes": [
            "FxF"
          ]
        }
      ],
      "abilities": [
        "Damage Capacity 2",
        "Planetfall",
        "Reinforced Armour",
        "Transport",
        "May transport eight infantry units without Mounted . Wraithguard count as two units each. Critical Hit Effect: The unit and all units on board are destroyed."
      ]
    },
    "dragonship": {
      "name": "Dragonship",
      "type": "SC",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "0-1x Orbital Bombardment",
          "range": "n/a",
          "firepower": "8BP",
          "notes": [
            "MW"
          ]
        },
        {
          "name": "0-1x Pin-Point Attacks",
          "range": "n/a",
          "firepower": "2x MW2+",
          "notes": [
            "TK(D3)"
          ]
        }
      ],
      "abilities": [
        "Transport",
        "May transport twelve Vampire Raiders and the units being carried on them. Armed with either an Orbital Bombardment or Pin-Point Attacks."
      ]
    },
    "wraithship": {
      "name": "Wraithship",
      "type": "SC",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "0-1x Orbital Bombardment",
          "range": "n/a",
          "firepower": "4BP",
          "notes": [
            "MW"
          ]
        },
        {
          "name": "0-1x Pin-Point Attack",
          "range": "n/a",
          "firepower": "MW2+",
          "notes": [
            "TK(D3)"
          ]
        }
      ],
      "abilities": [
        "Armed with either an Orbital Bombardment or Pin-Point Attack."
      ]
    },
    "wild_rider_chieftain": {
      "name": "Wild Rider Chieftain",
      "type": "CH",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Autarch Ranged Weapon",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+1)"
          ]
        },
        {
          "name": "Autarch Close Combat Weapon",
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
    "saim_hann_jetbikes": {
      "name": "Saim-Hann Jetbikes",
      "type": "INF",
      "speed": "35cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Twin Shuriken Catapults",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        }
      ],
      "abilities": [
        "Invulnerable Save",
        "Mounted",
        "Skimmer"
      ]
    },
    "wild_riders": {
      "name": "Wild Riders",
      "type": "INF",
      "speed": "35cm",
      "armour": "5+",
      "cc": "5+",
      "ff": "4+",
      "weapons": [
        {
          "name": "Twin Shuriken Catapults",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": []
        },
        {
          "name": "Close Combat Weapons",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+1)"
          ]
        }
      ],
      "abilities": [
        "Invulnerable Save",
        "Mounted",
        "Skimmer"
      ]
    },
    "hornet": {
      "name": "Hornet",
      "type": "LV",
      "speed": "40cm",
      "armour": "4+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Twin Hornet Pulse Laser",
          "range": "30cm",
          "firepower": "2x AT4+",
          "notes": []
        }
      ],
      "abilities": [
        "Scout",
        "Skimmer"
      ]
    },
    "saim_hann_vyper": {
      "name": "Saim-Hann Vyper",
      "type": "LV",
      "speed": "35cm",
      "armour": "4+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+",
          "notes": []
        }
      ],
      "abilities": [
        "Invulnerable Save",
        "Skimmer"
      ]
    },
    "vampire_hunter": {
      "name": "Vampire Hunter",
      "type": "AC/WE",
      "speed": "Bomber",
      "armour": "5+",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Vampire Hunter Twin Pulsar",
          "range": "30cm",
          "firepower": "2x MW2+",
          "notes": [
            "FxF"
          ]
        },
        {
          "name": "Scatter Laser",
          "range": "30cm",
          "firepower": "AP5+/AT5+/AA5+",
          "notes": [
            "FxF"
          ]
        },
        {
          "name": "Twin Eldar Missile Launcher",
          "range": "45cm",
          "firepower": "AP4+/AT5+/AA5+",
          "notes": [
            "FxF"
          ]
        }
      ],
      "abilities": [
        "Damage Capacity 2",
        "Reinforced Armour",
        "Critical Hit Effect: The unit is destroyed."
      ]
    },
    "spiritseer": {
      "name": "Spiritseer",
      "type": "CH",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Singing Spear",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+1)"
          ]
        },
        {
          "name": "Singing Spear",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+1)",
            "MW"
          ]
        }
      ],
      "abilities": [
        "Farsight"
      ]
    },
    "wraithseer": {
      "name": "Wraithseer",
      "type": "CH",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [
        {
          "name": "Singing Spear",
          "range": "(15cm)",
          "firepower": "Small Arms",
          "notes": [
            "EA(+1)"
          ]
        },
        {
          "name": "Singing Spear",
          "range": "(bc)",
          "firepower": "Assault Weapons",
          "notes": [
            "EA(+1)",
            "MW"
          ]
        }
      ],
      "abilities": [
        "Farsight",
        "Invulnerable Save",
        "Supreme Commander"
      ]
    },
    "wraithblade": {
      "name": "Wraithblade",
      "type": "INF",
      "speed": "15cm",
      "armour": "4+",
      "cc": "3+",
      "ff": "-",
      "weapons": [
        {
          "name": "Wraithblades",
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
        "Counts as a Wraithguard unit for the purposes of being transported."
      ]
    },
    "pathfinders": {
      "name": "Pathfinders",
      "type": "INF",
      "speed": "20cm",
      "armour": "5+",
      "cc": "6+",
      "ff": "5+",
      "weapons": [
        {
          "name": "Long Rifles",
          "range": "30cm",
          "firepower": "AP5+",
          "notes": []
        }
      ],
      "abilities": [
        "Invulnerable Save",
        "Scout",
        "Sniper",
        "Teleport"
      ]
    },
    "wraithgate": {
      "name": "Wraithgate",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "At the start of the game nominate one objective on your half of the table as a Wraithgate before setting up spacecraft and garrisons. The Wraithgate functions both as a Webway Portal and as an objective for the rules purposes. It may not be destroyed. Only formations consisting completely of infantry units, light vehicle units or armoured vehicles units with the Walker ability may use the Wraithgate to enter play."
      ]
    },
    "aspect_warrior_warhost": {
      "name": "Aspect Warrior Warhost",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Aspect Warrior Warhost - 300 points; Upgrades: Exarch, Autarch, Wave Serpent, Falcon; Section: WARHOSTS"
      ]
    },
    "guardian_warhost": {
      "name": "Guardian Warhost",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Guardian Warhost - 150 points; Units: Farseer; Upgrades: 3 Support Weapon Platforms, 2 Wraithguards, 3 Wraithguards, 3 Wraithlords; Section: WARHOSTS",
        "Guardian Warhost (Mounted) - 350 points; Units: Farseer, 4 Wave Serpents; Section: WARHOSTS",
        "Guardian Warhost - 150 points; Units: Farseer; Upgrades: 3 Support Weapon Platforms, 2 Wraithguard, 3 Wraithguard, 3 Wraithlord; Section: WARHOSTS",
        "Guardian Warhost (Wave Serpents) - 350 points; Units: Farseer, 4 Wave Serpents; Section: WARHOSTS"
      ]
    },
    "engine_of_vaul_troupe": {
      "name": "Engine of Vaul Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Engine of Vaul Troupe - 0 points; Upgrades: Cobra, Scorpion, Storm Serpent; Section: TROUPES",
        "Engine of Vaul Troupe - 0 points; Upgrades: Cobra, Scorpion, Storm Serpent; Section: IYANDEN CRAFTWORLD TROUPES",
        "Engine of Vaul Troupe - 0 points; Upgrades: Scorpion, Cobra, Storm Serpent; Section: TROUPES"
      ]
    },
    "night_spinner_troupe": {
      "name": "Night Spinner Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Night Spinner Troupe - 175 points; Units: 3 Night Spinners; Section: TROUPES",
        "Night Spinner Troupe - 175 points; Units: 3x Night Spinner units; Section: IYANDEN CRAFTWORLD TROUPES",
        "Night Spinner Troupe - 175 points; Units: 3 Night Spinners; Section: TROUPES"
      ]
    },
    "ranger_troupe": {
      "name": "Ranger Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Ranger Troupe - 0 points; Upgrades: Ranger; Section: TROUPES",
        "Ranger Troupe - 0 points; Upgrades: Ranger; Section: IYANDEN CRAFTWORLD TROUPES"
      ]
    },
    "swords_of_vaul_troupe": {
      "name": "Swords of Vaul Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Swords of Vaul Troupe - 0 points; Upgrades: Falcon, Fire Storm, Fire Prism; Section: TROUPES",
        "Swords of Vaul Troupe - 0 points; Upgrades: Falcons; Section: IYANDEN CRAFTWORLD TROUPES",
        "Swords of Vaul Troupe - 0 points; Upgrades: Falcon, Fire Storm, Fire Prism; Section: TROUPES"
      ]
    },
    "war_walker_troupe": {
      "name": "War Walker Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "War Walker Troupe - 50 points; Upgrades: War Walker; Section: TROUPES",
        "War Walker Troupe - 50 points; Upgrades: War Walker; Section: IYANDEN CRAFTWORLD TROUPES",
        "War Walker Troupe - 50 points; Upgrades: War Walker; Section: TROUPES"
      ]
    },
    "windrider_troupe": {
      "name": "Windrider Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Windrider Troupe - 200 points; Section: TROUPES",
        "Windrider Troupe - 200 points; Section: IYANDEN CRAFTWORLD TROUPES",
        "Windrider Troupe - 200 points; Section: TROUPES"
      ]
    },
    "nightwings": {
      "name": "Nightwings",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Nightwings - 300 points; Units: 3 Nightwing Interceptors; Section: SPACECRAFT, AIRCRAFT & TITANS",
        "Nightwings - 300 points; Units: 3 Nightwing Interceptors; Section: Spacecraft, Aircraft & Titans",
        "Nightwings - 300 points; Units: 3 Nightwing Interceptors; Section: SPACECRAFT, AIRCRAFT & TITANS"
      ]
    },
    "phoenix_bombers": {
      "name": "Phoenix Bombers",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Phoenix Bombers - 325 points; Units: 3 Phoenix Bombers; Section: SPACECRAFT, AIRCRAFT & TITANS",
        "Phoenix Bombers - 325 points; Units: 3 Phoenix Bombers; Section: Spacecraft, Aircraft & Titans",
        "Phoenix Bombers - 325 points; Units: 3x Phoenix Bombers; Section: SPACECRAFT, AIRCRAFT & TITANS",
        "Phoenix Bombers - 325 points; Units: 3 Phoenix Bombers; Section: SPACECRAFT, AIRCRAFT & TITANS"
      ]
    },
    "wild_rider_clan": {
      "name": "Wild Rider Clan",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Wild Rider Clan (6) - 20 points; Upgrades: Farseer, Wild Rider Chieftain; Section: Warhosts",
        "Wild Rider Clan (9) - 5 points; Upgrades: Farseer, Wild Rider Chieftain; Section: Warhosts",
        "Wild Rider Clan (12) - -10 points; Upgrades: Farseer, Wild Rider Chieftain; Section: Warhosts"
      ]
    },
    "aspect_warrior": {
      "name": "Aspect Warrior",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Aspect Warrior - 15 points; Upgrades: Falcon, Wave Serpent, Exarch; Section: Troupes"
      ]
    },
    "engine_of_vaul": {
      "name": "Engine of Vaul",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Engine of Vaul - 0 points; Upgrades: Cobra, Scorpion, Storm Serpent; Section: Troupes"
      ]
    },
    "guardian": {
      "name": "Guardian",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Guardian - 10 points; Upgrades: Farseer; Section: Troupes",
        "Guardian (Wraithguard) - 15 points; Upgrades: Farseer; Section: Troupes"
      ]
    },
    "scout_rider": {
      "name": "Scout Rider",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Scout Rider - 20 points; Section: Troupes"
      ]
    },
    "swords_of_vaul": {
      "name": "Swords of Vaul",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Swords of Vaul - 0 points; Upgrades: Falcon, Fire Prism, Firestorm; Section: Troupes"
      ]
    },
    "spirit_wraithguard_warhost": {
      "name": "Spirit Wraithguard Warhost",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Spirit Wraithguard Warhost - 275 points; Units: 4x Wraithguard units; Upgrades: Wraithguard, Wraithblade, Wraithlord, Wave Serpent; Section: IYANDEN CRAFTWORLD WARHOSTS"
      ]
    },
    "spirit_wraithblade_warhost": {
      "name": "Spirit Wraithblade Warhost",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Spirit Wraithblade Warhost - 225 points; Units: 4x Wraithblade units; Upgrades: Wraithguard, Wraithblade, Wraithlord, Wave Serpent; Section: IYANDEN CRAFTWORLD WARHOSTS"
      ]
    },
    "spirit_wraithlord_warhost": {
      "name": "Spirit Wraithlord Warhost",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Spirit Wraithlord Warhost - 350 points; Units: 6x Wraithlord units; Section: IYANDEN CRAFTWORLD WARHOSTS"
      ]
    },
    "aspect_warrior_troupe": {
      "name": "Aspect Warrior Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Aspect Warrior Troupe - 175 points; Upgrades: Wave Serpent, Falcons, Exarch; Section: IYANDEN CRAFTWORLD TROUPES",
        "Aspect Warrior Troupe - 225 points; Upgrades: Exarch, Autarch, Wave Serpent, Falcon; Section: TROUPES"
      ]
    },
    "guardian_troupe": {
      "name": "Guardian Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Guardian Troupe - 150 points; Upgrades: 3x Support Weapon Platforms, Wraithguard, Wraithblade, Wraithlord, Wave Serpent; Section: IYANDEN CRAFTWORLD TROUPES"
      ]
    },
    "nightwing_interceptors": {
      "name": "Nightwing Interceptors",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Nightwing Interceptors - 300 points; Units: 3x Nightwing Interceptors; Section: SPACECRAFT, AIRCRAFT & TITANS"
      ]
    },
    "alaitoc_ranger_warhost": {
      "name": "Alaitoc Ranger Warhost",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Alaitoc Ranger Warhost - 200 points; Section: WARHOSTS"
      ]
    },
    "pathfinder_troupe": {
      "name": "Pathfinder Troupe",
      "type": "Formation",
      "speed": "n/a",
      "armour": "n/a",
      "cc": "n/a",
      "ff": "n/a",
      "weapons": [],
      "abilities": [
        "Reference card for an Eldar formation slot.",
        "Pathfinder Troupe - 0 points; Upgrades: Pathfinder; Section: TROUPES"
      ]
    }
  },
  "nameToKey": {
    "autarch": "autarch",
    "court of the young king": "court_of_the_young_king",
    "exarch": "exarch",
    "dark reapers": "dark_reapers",
    "dark reaper": "dark_reapers",
    "dire avengers": "dire_avengers",
    "dire avenger": "dire_avengers",
    "farseer": "farseer",
    "fire dragons": "fire_dragons",
    "fire dragon": "fire_dragons",
    "guardians": "guardians",
    "guardian": "guardians",
    "heavy weapon platform": "heavy_weapon_platform",
    "howling banshees": "howling_banshees",
    "howling banshee": "howling_banshees",
    "jetbikes": "jetbikes",
    "jetbike": "jetbikes",
    "rangers": "rangers",
    "ranger": "rangers",
    "shining spears": "shining_spears",
    "shining spear": "shining_spears",
    "striking scorpions": "striking_scorpions",
    "striking scorpion": "striking_scorpions",
    "support weapon platform": "support_weapon_platform",
    "swooping hawks": "swooping_hawks",
    "swooping hawk": "swooping_hawks",
    "warp spiders": "warp_spiders",
    "warp spider": "warp_spiders",
    "wraithguard": "wraithguard",
    "vyper": "vyper",
    "war walker": "war_walker",
    "falcon": "falcon",
    "fire prism": "fire_prism",
    "firestorm": "firestorm",
    "night spinner": "night_spinner",
    "wave serpent": "wave_serpent",
    "wraithlord": "wraithlord",
    "avatar": "avatar",
    "cobra": "cobra",
    "phantom titan": "phantom_titan",
    "revenant titan": "revenant_titan",
    "scorpion": "scorpion",
    "storm serpent": "storm_serpent",
    "void spinner": "void_spinner",
    "warlock titan": "warlock_titan",
    "nightwing interceptor": "nightwing_interceptor",
    "phoenix bomber": "phoenix_bomber",
    "vampire raider": "vampire_raider",
    "dragonship": "dragonship",
    "wraithship": "wraithship",
    "wild rider chieftain": "wild_rider_chieftain",
    "saim hann jetbikes": "saim_hann_jetbikes",
    "saim hann jetbike": "saim_hann_jetbikes",
    "wild riders": "wild_riders",
    "wild rider": "wild_riders",
    "hornet": "hornet",
    "saim hann vyper": "saim_hann_vyper",
    "vampire hunter": "vampire_hunter",
    "spiritseer": "spiritseer",
    "wraithseer": "wraithseer",
    "wraithblade": "wraithblade",
    "pathfinders": "pathfinders",
    "pathfinder": "pathfinders",
    "wraithgate": "wraithgate",
    "aspect warrior warhost": "aspect_warrior_warhost",
    "guardian warhost": "guardian_warhost",
    "engine of vaul troupe": "engine_of_vaul_troupe",
    "night spinner troupe": "night_spinner_troupe",
    "ranger troupe": "ranger_troupe",
    "swords of vaul troupe": "swords_of_vaul_troupe",
    "war walker troupe": "war_walker_troupe",
    "windrider troupe": "windrider_troupe",
    "nightwings": "nightwings",
    "nightwing": "nightwings",
    "phoenix bombers": "phoenix_bombers",
    "wild rider clan": "wild_rider_clan",
    "aspect warrior": "aspect_warrior",
    "engine of vaul": "engine_of_vaul",
    "scout rider": "scout_rider",
    "swords of vaul": "swords_of_vaul",
    "spirit wraithguard warhost": "spirit_wraithguard_warhost",
    "spirit wraithblade warhost": "spirit_wraithblade_warhost",
    "spirit wraithlord warhost": "spirit_wraithlord_warhost",
    "aspect warrior troupe": "aspect_warrior_troupe",
    "guardian troupe": "guardian_troupe",
    "nightwing interceptors": "nightwing_interceptors",
    "alaitoc ranger warhost": "alaitoc_ranger_warhost",
    "pathfinder troupe": "pathfinder_troupe",
    "guardian warhost mounted": "guardian_warhost"
  },
  "alaitocExcludedProfileKeys": {
    "guardian_warhost": true,
    "pathfinder_troupe": true,
    "aspect_warrior_troupe": true,
    "war_walker_troupe": true,
    "windrider_troupe": true,
    "swords_of_vaul_troupe": true,
    "night_spinner_troupe": true,
    "engine_of_vaul_troupe": true,
    "nightwings": true,
    "nightwing_interceptors": true,
    "phoenix_bombers": true
  },
  "bieltanExcludedProfileKeys": {
    "aspect_warrior_warhost": true,
    "guardian_warhost": true,
    "pathfinder_troupe": true,
    "aspect_warrior_troupe": true,
    "war_walker_troupe": true,
    "windrider_troupe": true,
    "swords_of_vaul_troupe": true,
    "night_spinner_troupe": true,
    "engine_of_vaul_troupe": true,
    "ranger_troupe": true,
    "nightwings": true,
    "nightwing_interceptors": true,
    "phoenix_bombers": true,
    "wild_rider_clan": true,
    "aspect_warrior": true,
    "engine_of_vaul": true,
    "guardians": true,
    "guardian_troupe": true,
    "scout_rider": true,
    "swords_of_vaul": true,
    "spirit_wraithguard_warhost": true,
    "spirit_wraithblade_warhost": true,
    "spirit_wraithlord_warhost": true,
    "alaitoc_ranger_warhost": true
  },
  "saimhannExcludedProfileKeys": {
    "aspect_warrior_warhost": true,
    "guardian_warhost": true,
    "pathfinder_troupe": true,
    "aspect_warrior_troupe": true,
    "war_walker_troupe": true,
    "windrider_troupe": true,
    "swords_of_vaul_troupe": true,
    "night_spinner_troupe": true,
    "engine_of_vaul_troupe": true,
    "ranger_troupe": true,
    "nightwings": true,
    "nightwing_interceptors": true,
    "phoenix_bombers": true,
    "wild_rider_clan": true,
    "aspect_warrior": true,
    "engine_of_vaul": true,
    "guardians": true,
    "guardian_troupe": true,
    "scout_rider": true,
    "swords_of_vaul": true,
    "spirit_wraithguard_warhost": true,
    "spirit_wraithblade_warhost": true,
    "spirit_wraithlord_warhost": true,
    "alaitoc_ranger_warhost": true
  },
  "iyandenExcludedProfileKeys": {
    "aspect_warrior_warhost": true,
    "guardian_warhost": true,
    "pathfinder_troupe": true,
    "aspect_warrior_troupe": true,
    "war_walker_troupe": true,
    "windrider_troupe": true,
    "swords_of_vaul_troupe": true,
    "night_spinner_troupe": true,
    "engine_of_vaul_troupe": true,
    "ranger_troupe": true,
    "nightwings": true,
    "nightwing_interceptors": true,
    "phoenix_bombers": true,
    "wild_rider_clan": true,
    "aspect_warrior": true,
    "engine_of_vaul": true,
    "guardians": true,
    "guardian_troupe": true,
    "scout_rider": true,
    "swords_of_vaul": true,
    "spirit_wraithguard_warhost": true,
    "spirit_wraithblade_warhost": true,
    "spirit_wraithlord_warhost": true,
    "alaitoc_ranger_warhost": true
  }
};

ArmyforgeUnitProfiles.normalizeEldarCraftworldName = function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.replace(/[’']/g, "'")
		.replace(/[^a-z0-9]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
};

ArmyforgeUnitProfiles.findEldarCraftworldProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.eldarCraftworlds.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeEldarCraftworldName(displayName);
	var key = ArmyforgeUnitProfiles.eldarCraftworlds.nameToKey[normalized];
	if (!key) {
		return null;
	}
	if (listId === 'EL_alaitoc_NETEA' && ArmyforgeUnitProfiles.eldarCraftworlds.alaitocExcludedProfileKeys[key]) {
		return null;
	}
  if (listId === 'EL_bieltan_NETEA' && ArmyforgeUnitProfiles.eldarCraftworlds.bieltanExcludedProfileKeys[key]) {
    return null;
  }
  if (listId === 'EL_saimhann_NETEA' && ArmyforgeUnitProfiles.eldarCraftworlds.saimhannExcludedProfileKeys[key]) {
    return null;
  }
  if (listId === 'EL_iyanden_NETEA' && ArmyforgeUnitProfiles.eldarCraftworlds.iyandenExcludedProfileKeys[key]) {
    return null;
  }
  return ArmyforgeUnitProfiles.eldarCraftworlds.profiles[key] || null;
};
