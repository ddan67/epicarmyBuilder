// Source: https://tp.net-armageddon.org/army-lists/imperial-guard-baran-siegemasters.html

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

ArmyforgeUnitProfiles.igBaranSiegeMasters = {
	armyIds: [
  "IG_siege_NETEA"
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
  "rapier_laser_destroyer": {
    "name": "Rapier Laser Destroyer",
    "type": "INF",
    "speed": "10cm",
    "armour": "-",
    "cc": "-",
    "ff": "5+",
    "weapons": [
      {
        "name": "Rapier Laser Destroyer",
        "range": "45cm",
        "firepower": "AP6+/AT4+",
        "notes": []
      }
    ],
    "abilities": []
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
  "sappers": {
    "name": "Sappers",
    "type": "INF",
    "speed": "15cm",
    "armour": "6+",
    "cc": "5+",
    "ff": "5+",
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
      },
      {
        "name": "Melta Bombs",
        "range": "(bc)",
        "firepower": "Assault Weapons",
        "notes": [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    "abilities": [
      "Walker"
    ]
  },
  "siege_infantry": {
    "name": "Siege Infantry",
    "type": "INF",
    "speed": "15cm",
    "armour": "-",
    "cc": "6+",
    "ff": "5+",
    "weapons": [
      {
        "name": "Heavy Stubber",
        "range": "30cm",
        "firepower": "AP6+",
        "notes": []
      }
    ],
    "abilities": []
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
  "thudd_gun": {
    "name": "Thudd Gun",
    "type": "INF",
    "speed": "10cm",
    "armour": "-",
    "cc": "-",
    "ff": "5+",
    "weapons": [
      {
        "name": "Thudd Gun",
        "range": "45cm",
        "firepower": "AP4+/AT6+",
        "notes": [
          "Ind"
        ]
      }
    ],
    "abilities": []
  },
  "blitzen_aa_gun": {
    "name": "Blitzen AA Gun",
    "type": "LV",
    "speed": "0cm",
    "armour": "-",
    "cc": "-",
    "ff": "6+",
    "weapons": [
      {
        "name": "Blitzen Cannon",
        "range": "60cm",
        "firepower": "AP6+/AT5+/AA5+",
        "notes": []
      }
    ],
    "abilities": []
  },
  "gotterdammerung_howitzer": {
    "name": "Götterdämmerung Howitzer",
    "type": "LV",
    "speed": "0cm",
    "armour": "-",
    "cc": "-",
    "ff": "6+",
    "weapons": [
      {
        "name": "Howitzer",
        "range": "90cm",
        "firepower": "1BP",
        "notes": [
          "Ind"
        ]
      }
    ],
    "abilities": []
  },
  "siegfried_light_tank": {
    "name": "Siegfried Light Tank",
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
      }
    ],
    "abilities": [
      "Scout"
    ]
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
  "ragnarok_heavy_tank": {
    "name": "Ragnarok Heavy Tank",
    "type": "AV",
    "speed": "15cm",
    "armour": "4+",
    "cc": "6+",
    "ff": "4+",
    "weapons": [
      {
        "name": "Ragnarok Battlecannon",
        "range": "60cm",
        "firepower": "AP4+/AT4+",
        "notes": []
      },
      {
        "name": "2x Heavy Stubber",
        "range": "30cm",
        "firepower": "AP6+",
        "notes": []
      }
    ],
    "abilities": [
      "Reinforced Armour",
      "Walker"
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
  }
},
	nameToKey: {
  "commissar": "commissar",
  "commander": "commander",
  "rapier laser destroyer": "rapier_laser_destroyer",
  "rapier platoon": "rapier_laser_destroyer",
  "rough riders": "rough_riders",
  "sappers": "sappers",
  "sappers unit": "sappers",
  "siege infantry": "siege_infantry",
  "snipers": "snipers",
  "sniper unit": "snipers",
  "supreme commander": "supreme_commander",
  "thudd gun": "thudd_gun",
  "thudd gun platoon": "thudd_gun",
  "blitzen aa gun": "blitzen_aa_gun",
  "gotterdammerung howitzer": "gotterdammerung_howitzer",
  "siegfried light tank": "siegfried_light_tank",
  "bombard": "bombard",
  "deathstrike": "deathstrike",
  "griffon": "griffon",
  "griffon battery": "griffon",
  "hellhound": "hellhound",
  "ragnarok heavy tank": "ragnarok_heavy_tank",
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
  "rapier laser destroyer unit": "rapier_laser_destroyer",
  "rapier laser destroyer units": "rapier_laser_destroyer",
  "deathstrike missile launcher": "deathstrike",
  "deathstrike missile launchers": "deathstrike",
  "deathstrike missile battery": "deathstrike"
}
};

ArmyforgeUnitProfiles.findIgBaranSiegeMastersProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	if (listId && !ArmyforgeUnitProfiles.igBaranSiegeMasters.armyIds.member(listId)) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeImperialGuardListName(displayName);
	var key = ArmyforgeUnitProfiles.igBaranSiegeMasters.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.igBaranSiegeMasters.profiles[key] || null;
};
