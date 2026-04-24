// Source: https://tp.net-armageddon.org/army-lists/adeptus-mechanicus-skitarii-legion.html
// Values extracted from that page; source-faithful runtime profiles generated from archived JSON.

var ArmyforgeUnitProfiles = ArmyforgeUnitProfiles || {};

ArmyforgeUnitProfiles.normalizeAdeptusMechanicusName = ArmyforgeUnitProfiles.normalizeAdeptusMechanicusName || function(displayName) {
	if (!displayName) {
		return '';
	}
	return displayName.toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/^\s*one of the following\s+/i, '')
		.replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, '')
		.replace(/^\s*\d+\s*[xX]?\s*/g, '')
		.replace(/^\s*(?:one|two|three|four|five|six|seven|eight|nine|ten)\s+/i, '')
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.strip();
};

ArmyforgeUnitProfiles.adeptusMechanicusSkitariiLegion = {
	armyIds: ["AMTL_skitarii_NETEA"],
	profiles: {
  apocalypse_missile_launcher: {
    name: "Apocalypse Missile Launcher",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Apocalypse Missile Launcher",
        range: "60cm",
        firepower: "3BP",
        notes: [
          "D"
        ]
      }
    ],
    abilities: []
  },
  carapace_landing_pad: {
    name: "Carapace Landing Pad",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [],
    abilities: [
      "All weapons with a BP firepower in the formation do not need a line of fire when shooting as part of a sustained fire, advance or double action."
    ]
  },
  carapace_multilasers: {
    name: "Carapace Multilasers",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "2x Multilaser",
        range: "30cm",
        firepower: "AP5+/AT6+/AA5+",
        notes: []
      }
    ],
    abilities: []
  },
  close_combat_weapon: {
    name: "Close Combat Weapon",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Close Combat Weapon",
        range: "(bc)",
        firepower: "Assault Weapons",
        notes: [
          "EA(+3)",
          "TK(D3)"
        ]
      }
    ],
    abilities: []
  },
  corvus_assault_pod: {
    name: "Corvus Assault Pod",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [],
    abilities: [
      "Transport",
      "May transport ten infantry units without Jump Packs or Mounted ."
    ]
  },
  gatling_blaster: {
    name: "Gatling Blaster",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Gatling Blaster (Mars Pattern)",
        range: "60cm",
        firepower: "6x AP4+/AT4+",
        notes: []
      }
    ],
    abilities: []
  },
  inferno_gun: {
    name: "Inferno Gun",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Inferno Gun",
        range: "30cm",
        firepower: "3BP",
        notes: [
          "IC"
        ]
      }
    ],
    abilities: []
  },
  laser_blaster: {
    name: "Laser Blaster",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Laser Blaster",
        range: "60cm",
        firepower: "6x AP5+/AT3+",
        notes: []
      }
    ],
    abilities: []
  },
  laser_burner: {
    name: "Laser Burner",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Laser Burner",
        range: "(15cm)",
        firepower: "Small Arms",
        notes: [
          "EA(+2)"
        ]
      },
      {
        name: "Laser Burner",
        range: "(bc)",
        firepower: "Assault Weapons",
        notes: [
          "EA(+4)"
        ]
      }
    ],
    abilities: []
  },
  magos: {
    name: "Magos",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Augmentations",
        range: "(bc)",
        firepower: "Assault Weapons",
        notes: [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    abilities: [
      "Fearless",
      "Invulnerable Save",
      "Supreme Commander"
    ]
  },
  melta_cannon: {
    name: "Melta Cannon",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Melta Cannon",
        range: "30cm",
        firepower: "MW2+",
        notes: [
          "TK(D3)"
        ]
      },
      {
        name: "Melta Cannon",
        range: "(15cm)",
        firepower: "Small Arms",
        notes: [
          "EA(+1)",
          "TK(D6)"
        ]
      }
    ],
    abilities: []
  },
  plasma_blastgun: {
    name: "Plasma Blastgun",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Plasma Blastgun",
        range: "45cm",
        firepower: "2x MW2+",
        notes: [
          "Slw"
        ]
      }
    ],
    abilities: []
  },
  plasma_cannon: {
    name: "Plasma Cannon",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Plasma Cannon",
        range: "60cm",
        firepower: "3x MW2+",
        notes: [
          "Slw"
        ]
      }
    ],
    abilities: []
  },
  plasma_destructor: {
    name: "Plasma Destructor",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Plasma Destructor",
        range: "75cm",
        firepower: "5x MW2+",
        notes: [
          "Slw"
        ]
      }
    ],
    abilities: []
  },
  quake_cannon: {
    name: "Quake Cannon",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Quake Cannon",
        range: "90cm",
        firepower: "3BP",
        notes: [
          "MW"
        ]
      }
    ],
    abilities: []
  },
  sacred_icon: {
    name: "Sacred Icon",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [],
    abilities: [
      "Inspiring"
    ]
  },
  support_missile: {
    name: "Support Missile",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "0-1x Barrage Missile",
        range: "Unlimited",
        firepower: "10BP",
        notes: [
          "D",
          "Ind",
          "SS"
        ]
      },
      {
        name: "0-1x Deathstrike Missile",
        range: "Unlimited",
        firepower: "MW2+",
        notes: [
          "Ind",
          "SS",
          "TK(D6)"
        ]
      },
      {
        name: "0-1x Vortex Missile",
        range: "Unlimited",
        firepower: "3BP",
        notes: [
          "IC",
          "Ind",
          "SS",
          "TK"
        ]
      },
      {
        name: "0-1x Warp Missile",
        range: "Unlimited",
        firepower: "MW2+",
        notes: [
          "Ind",
          "SS",
          "TK(D3)"
        ]
      }
    ],
    abilities: [
      "Can be armed with one of the following: Barrage Missile, Deathstrike Missile, Vortex Missile or Warp Missile. A Warp Missile ignores Imperial Void Shields and Power Fields ."
    ]
  },
  turbo_laser_destructor: {
    name: "Turbo-Laser Destructor",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Turbo-Laser Destructor",
        range: "60cm",
        firepower: "4x AP5+/AT3+",
        notes: []
      }
    ],
    abilities: []
  },
  veteran_princeps: {
    name: "Veteran Princeps",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [],
    abilities: [
      "Commander",
      "Leader"
    ]
  },
  volcano_cannon: {
    name: "Volcano Cannon",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Volcano Cannon",
        range: "90cm",
        firepower: "MW2+",
        notes: [
          "TK(D3)"
        ]
      }
    ],
    abilities: []
  },
  vulcan_mega_bolter: {
    name: "Vulcan Mega-Bolter",
    type: "CH",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Vulcan Mega-Bolter",
        range: "45cm",
        firepower: "4x AP3+/AT5+",
        notes: []
      }
    ],
    abilities: []
  },
  gun_servitor: {
    name: "Gun Servitor",
    type: "INF",
    speed: "15cm",
    armour: "5+",
    cc: "6+",
    ff: "5+",
    weapons: [
      {
        name: "Heavy Bolter",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      }
    ],
    abilities: [
      "Invulnerable Save"
    ]
  },
  hypaspist: {
    name: "Hypaspist",
    type: "INF",
    speed: "15cm",
    armour: "5+",
    cc: "5+",
    ff: "5+",
    weapons: [
      {
        name: "Heavy Bolter",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      }
    ],
    abilities: []
  },
  praetorian_combat_servitor: {
    name: "Praetorian Combat Servitor",
    type: "INF",
    speed: "15cm",
    armour: "3+",
    cc: "4+",
    ff: "5+",
    weapons: [
      {
        name: "Autocannon",
        range: "45cm",
        firepower: "AP5+/AT6+",
        notes: []
      },
      {
        name: "Augmentations",
        range: "(bc)",
        firepower: "Assault Weapons",
        notes: [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    abilities: [
      "Fearless",
      "Invulnerable Save"
    ]
  },
  sagitarii: {
    name: "Sagitarii",
    type: "INF",
    speed: "15cm",
    armour: "5+",
    cc: "6+",
    ff: "4+",
    weapons: [
      {
        name: "2x Phased Plasma Fusil",
        range: "30cm",
        firepower: "AP5+/AT5+",
        notes: []
      }
    ],
    abilities: []
  },
  secutor: {
    name: "Secutor",
    type: "INF",
    speed: "15cm",
    armour: "4+",
    cc: "3+",
    ff: "3+",
    weapons: [
      {
        name: "2x Multi-melta",
        range: "15cm",
        firepower: "MW5+",
        notes: []
      },
      {
        name: "2x Multi-melta",
        range: "(15cm)",
        firepower: "Small Arms",
        notes: [
          "MW"
        ]
      },
      {
        name: "Augmentations",
        range: "(bc)",
        firepower: "Assault Weapons",
        notes: [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    abilities: [
      "Commander",
      "Reinforced Armour"
    ]
  },
  rapier: {
    name: "Rapier",
    type: "INF",
    speed: "10cm",
    armour: "6+",
    cc: "-",
    ff: "4+",
    weapons: [
      {
        name: "Laser Destroyer",
        range: "45cm",
        firepower: "AP6+/AT4+",
        notes: []
      }
    ],
    abilities: []
  },
  crusader_robot: {
    name: "Crusader Robot",
    type: "LV",
    speed: "25cm",
    armour: "6+",
    cc: "4+",
    ff: "6+",
    weapons: [
      {
        name: "Heavy Bolter",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      },
      {
        name: "Multi-melta",
        range: "15cm",
        firepower: "MW5+",
        notes: []
      },
      {
        name: "Multi-melta",
        range: "(15cm)",
        firepower: "Small Arms",
        notes: [
          "MW"
        ]
      },
      {
        name: "Power Fist",
        range: "(bc)",
        firepower: "Assault Weapons",
        notes: [
          "EA(+1)",
          "MW"
        ]
      }
    ],
    abilities: [
      "Automaton",
      "Scout",
      "Walker"
    ]
  },
  chimedon: {
    name: "Chimedon",
    type: "AV",
    speed: "30cm",
    armour: "5+",
    cc: "6+",
    ff: "5+",
    weapons: [
      {
        name: "Conqueror Cannon",
        range: "45cm",
        firepower: "AP5+/AT5+",
        notes: []
      },
      {
        name: "Heavy Bolter",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      }
    ],
    abilities: [
      "Transport",
      "May transport one infantry unit without Jump Packs or Mounted , expect for Praetorian Combat Servitor and Rapier units."
    ]
  },
  colossus_robot: {
    name: "Colossus Robot",
    type: "AV",
    speed: "15cm",
    armour: "3+",
    cc: "6+",
    ff: "4+",
    weapons: [
      {
        name: "2x Autocannon",
        range: "45cm",
        firepower: "AP5+/AT6+",
        notes: []
      },
      {
        name: "2x Autocannon",
        range: "30cm",
        firepower: "AA6+",
        notes: []
      },
      {
        name: "Lascannon",
        range: "45cm",
        firepower: "AT5+",
        notes: []
      }
    ],
    abilities: [
      "Automaton",
      "Walker"
    ]
  },
  hydra: {
    name: "Hydra",
    type: "AV",
    speed: "30cm",
    armour: "6+",
    cc: "6+",
    ff: "5+",
    weapons: [
      {
        name: "2x Twin Hydra Autocannon",
        range: "45cm",
        firepower: "AP4+/AT5+/AA5+",
        notes: []
      },
      {
        name: "Heavy Bolter",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      }
    ],
    abilities: []
  },
  imperator_class_titan: {
    name: "Imperator Class Titan",
    type: "WE",
    speed: "15cm",
    armour: "4+",
    cc: "4+",
    ff: "3+",
    weapons: [
      {
        name: "Plasma Annihilator",
        range: "90cm",
        firepower: "4x MW2+",
        notes: [
          "FwA",
          "Slw",
          "TK(D3)"
        ]
      },
      {
        name: "Hellstorm Cannon",
        range: "60cm",
        firepower: "10BP",
        notes: [
          "FwA"
        ]
      },
      {
        name: "Defense Laser",
        range: "90cm",
        firepower: "MW2+/AA4+",
        notes: [
          "TK(D3)"
        ]
      },
      {
        name: "Quake Cannon",
        range: "90cm",
        firepower: "3BP",
        notes: [
          "MW"
        ]
      },
      {
        name: "4x Battle Cannon",
        range: "75cm",
        firepower: "AP4+/AT4+",
        notes: []
      },
      {
        name: "Tertitary Arms",
        range: "(15cm)",
        firepower: "Small Arms",
        notes: [
          "EA(+2)"
        ]
      }
    ],
    abilities: [
      "Damage Capacity 12",
      "Fearless",
      "Inspiring",
      "Reinforced Armour",
      "Transport",
      "8 Void Shields",
      "Walker",
      "May transport ten infantry units without Jump Packs or Mounted . May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 4+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
    ]
  },
  macharius: {
    name: "Macharius",
    type: "WE",
    speed: "15cm",
    armour: "4+",
    cc: "6+",
    ff: "4+",
    weapons: [
      {
        name: "2x Battle Cannon",
        range: "75cm",
        firepower: "AP4+/AT4+",
        notes: []
      },
      {
        name: "2x Heavy Bolter",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      },
      {
        name: "Twin Heavy Stubber",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      }
    ],
    abilities: [
      "Damage Capacity 2",
      "Reinforced Armour",
      "Critical Hit Effect: Destroyed."
    ]
  },
  macharius_command: {
    name: "Macharius Command",
    type: "WE",
    speed: "15cm",
    armour: "4+",
    cc: "6+",
    ff: "4+",
    weapons: [
      {
        name: "0-1x 2x Vanquisher",
        range: "75cm",
        firepower: "AP4+/AT2+",
        notes: []
      },
      {
        name: "0-1x Vulcan Mega-Bolter",
        range: "45cm",
        firepower: "4x AP3+/AT5+",
        notes: []
      },
      {
        name: "2x Heavy Bolter",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      },
      {
        name: "Twin Heavy Stubber",
        range: "30cm",
        firepower: "AP5+",
        notes: []
      }
    ],
    abilities: [
      "Damage Capacity 2",
      "Reinforced Armour",
      "Critical Hit Effect: Destroyed. Armed with either a Vulcan Megabolter or two Vanquisher."
    ]
  },
  ordinatus_majoris: {
    name: "Ordinatus Majoris",
    type: "WE",
    speed: "10cm",
    armour: "5+",
    cc: "6+",
    ff: "4+",
    weapons: [
      {
        name: "0-1x Sonic Disruptor",
        range: "100cm",
        firepower: "10BP",
        notes: [
          "FxF",
          "D",
          "IC"
        ]
      },
      {
        name: "0-1x Hellfire Missiles",
        range: "Unlimited",
        firepower: "3BP",
        notes: [
          "FxF",
          "Ind",
          "MW",
          "Slw"
        ]
      },
      {
        name: "0-1x Nova Cannon",
        range: "100cm",
        firepower: "4x MW3+",
        notes: [
          "FxF",
          "TK(D3)"
        ]
      },
      {
        name: "2x Heavy Bolter",
        range: "30cm",
        firepower: "AP5+/AA6+",
        notes: []
      },
      {
        name: "2x Lascannon",
        range: "45cm",
        firepower: "AT5+",
        notes: []
      }
    ],
    abilities: [
      "Damage Capacity 4",
      "Fearless",
      "Inspiring",
      "Reinforced Armour",
      "4 Void Shields",
      "Critical Hit Effect: Destroyed. All units within 15cm of the model suffer a hit on a roll of 5+ and all Adeptus Mechanicus formations with a unit with a line of fire to the Ordinatus Majoris receive a Blast marker. Mars Ordinatus are armed with a Sonic Disruptor, Golgotha Ordinatus are armed with Hellfire Missiles (which use the barrage template that is 12cm across), and Armageddon Ordinatus are armed with a Nova Cannon."
    ]
  },
  ordinatus_minorus: {
    name: "Ordinatus Minorus",
    type: "WE",
    speed: "15cm (25cm)",
    armour: "5+",
    cc: "6+ (3+)",
    ff: "5+",
    weapons: [
      {
        name: "2x Heavy Bolter",
        range: "30cm",
        firepower: "AP5+/AA6+",
        notes: []
      }
    ],
    abilities: [
      "Damage Capacity 2",
      "Fearless",
      "Reinforced Armour",
      "2 Void Shields",
      "Critical Hit Effect: Destroyed. All units within 15cm of the model suffer a hit on a roll of 5+. If a Close Combat Weapon or a Laser Burner is mounted on the Carapace Weapon Mount the unit has a close combat value of 3+. If a Corvus Assault Pod is mounted on the Carapace Weapon Mount the unit has a speed value of 25cm."
    ]
  },
  reaver_class_titan: {
    name: "Reaver Class Titan",
    type: "WE",
    speed: "20cm",
    armour: "4+",
    cc: "3+",
    ff: "3+",
    weapons: [],
    abilities: [
      "Damage Capacity 6",
      "Fearless",
      "Reinforced Armour",
      "4 Void Shields",
      "Walker",
      "May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 5+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
    ]
  },
  warhound_class_titan: {
    name: "Warhound Class Titan",
    type: "WE",
    speed: "30cm",
    armour: "5+",
    cc: "4+",
    ff: "4+",
    weapons: [],
    abilities: [
      "Damage Capacity 3",
      "Fearless",
      "Reinforced Armour",
      "2 Void Shields",
      "Walker",
      "May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit takes a point of damage and is moved D6cm in a random direction. If this move takes the titan into impassable terrain or another unit it can't move over then it stops immediately and is destroyed. All units it moves into or over suffer a hit on a roll of 6+."
    ]
  },
  warlord_class_titan: {
    name: "Warlord Class Titan",
    type: "WE",
    speed: "15cm",
    armour: "4+",
    cc: "2+",
    ff: "3+",
    weapons: [],
    abilities: [
      "Damage Capacity 8",
      "Fearless",
      "Reinforced Armour",
      "Thick Rear Armour",
      "6 Void Shields",
      "Walker",
      "May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 4+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
    ]
  },
  warmonger_class_titan: {
    name: "Warmonger Class Titan",
    type: "WE",
    speed: "15cm",
    armour: "4+",
    cc: "4+",
    ff: "5+",
    weapons: [
      {
        name: "Vengeance Cannon",
        range: "90cm",
        firepower: "2x MW2+",
        notes: [
          "FwA",
          "TK(D3)"
        ]
      },
      {
        name: "0-8x Barrage Missile",
        range: "Unlimited",
        firepower: "10BP",
        notes: [
          "D",
          "Ind",
          "SS"
        ]
      },
      {
        name: "0-8x Deathstrike Missile",
        range: "Unlimited",
        firepower: "MW2+",
        notes: [
          "Ind",
          "SS",
          "TK(D6)"
        ]
      },
      {
        name: "0-8x Vortex Missile",
        range: "Unlimited",
        firepower: "3BP",
        notes: [
          "IC",
          "Ind",
          "SS",
          "TK"
        ]
      },
      {
        name: "0-8x Warp Missile",
        range: "Unlimited",
        firepower: "MW2+",
        notes: [
          "Ind",
          "SS",
          "TK(D3)"
        ]
      },
      {
        name: "4x Twin Hydra Autocannon",
        range: "45cm",
        firepower: "AP4+/AT5+/AA5+",
        notes: []
      },
      {
        name: "Head Gun",
        range: "45cm",
        firepower: "AP4+/AT4+",
        notes: [
          "FxF"
        ]
      },
      {
        name: "Tertitary Arms",
        range: "(15cm)",
        firepower: "Small Arms",
        notes: [
          "EA(+2)"
        ]
      }
    ],
    abilities: [
      "Damage Capacity 12",
      "Fearless",
      "Inspiring",
      "Reinforced Armour",
      "Transport",
      "8 Void Shields",
      "Walker",
      "May transport ten infantry units without Jump Packs or Mounted . Armed with any eight of the following: Barrage Missile, Deathstrike Missile, Vortex Missile or Warp Missile. Only one missile may be fired per turn. Warp Missiles ignore Imperial Void Shields and Power Fields . The unit's fire control center allows it to re-roll one failed to-hit roll per turn. May step over units and pieces of terrain that that are lower lower than the unit's knees and less than 2cm wide. Critical Hit Effect: The unit's plasma reactor has been breached. Roll a D6 for each breach on the unit in the end phase of each turn. On a roll of 1 the unit is destroyed and all units within 5cm suffer a hit on a roll of 4+, and on a roll of 4-6 the breach has been repaired. Any breach not repaired causes one point of damage."
    ]
  },
  avenger_strike_fighter: {
    name: "Avenger Strike Fighter",
    type: "AC",
    speed: "Fighter-Bomber",
    armour: "6+",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Avenger Bolt Cannon",
        range: "30cm",
        firepower: "2x AP3+/AT5+",
        notes: [
          "FxF"
        ]
      },
      {
        name: "2x Lascannon",
        range: "30cm",
        firepower: "AT5+/AA5+",
        notes: [
          "FxF"
        ]
      },
      {
        name: "Heavy Stubber",
        range: "15cm",
        firepower: "AA6+",
        notes: [
          "RrA"
        ]
      }
    ],
    abilities: []
  },
  lysander_fighter: {
    name: "Lysander Fighter",
    type: "AC",
    speed: "Fighter",
    armour: "6+",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "Storm Bolters",
        range: "15cm",
        firepower: "AP4+/AA5+",
        notes: [
          "FxF"
        ]
      },
      {
        name: "Heavy Bolter",
        range: "30cm",
        firepower: "AP5+/AA6+",
        notes: [
          "FxF"
        ]
      }
    ],
    abilities: []
  },
  ark_mechanicus_battleship: {
    name: "Ark Mechanicus Battleship",
    type: "SC",
    speed: "n/a",
    armour: "n/a",
    cc: "n/a",
    ff: "n/a",
    weapons: [
      {
        name: "0-1x Orbital Bombardment",
        range: "n/a",
        firepower: "5BP",
        notes: [
          "MW"
        ]
      },
      {
        name: "0-1x Pin-Point Attacks",
        range: "n/a",
        firepower: "2x MW2+",
        notes: [
          "TK(D3)"
        ]
      }
    ],
    abilities: [
      "Armed with either Pin-point Attacks or Orbital Bombardment."
    ]
  }
},
	nameToKey: {
  "apocalypse missile launcher": "apocalypse_missile_launcher",
  "apocalypse missile launcher unit": "apocalypse_missile_launcher",
  "apocalypse missile launcher units": "apocalypse_missile_launcher",
  "carapace landing pad": "carapace_landing_pad",
  "carapace landing pad unit": "carapace_landing_pad",
  "carapace landing pad units": "carapace_landing_pad",
  "carapace multilasers": "carapace_multilasers",
  "carapace multilasers unit": "carapace_multilasers",
  "carapace multilasers units": "carapace_multilasers",
  "close combat weapon": "close_combat_weapon",
  "close combat weapon unit": "close_combat_weapon",
  "close combat weapon units": "close_combat_weapon",
  "corvus assault pod": "corvus_assault_pod",
  "corvus assault pod unit": "corvus_assault_pod",
  "corvus assault pod units": "corvus_assault_pod",
  "gatling blaster": "gatling_blaster",
  "gatling blaster unit": "gatling_blaster",
  "gatling blaster units": "gatling_blaster",
  "inferno gun": "inferno_gun",
  "inferno gun unit": "inferno_gun",
  "inferno gun units": "inferno_gun",
  "laser blaster": "laser_blaster",
  "laser blaster unit": "laser_blaster",
  "laser blaster units": "laser_blaster",
  "laser burner": "laser_burner",
  "laser burner unit": "laser_burner",
  "laser burner units": "laser_burner",
  "magos": "magos",
  "magos unit": "magos",
  "magos units": "magos",
  "melta cannon": "melta_cannon",
  "melta cannon unit": "melta_cannon",
  "melta cannon units": "melta_cannon",
  "plasma blastgun": "plasma_blastgun",
  "plasma blastgun unit": "plasma_blastgun",
  "plasma blastgun units": "plasma_blastgun",
  "plasma cannon": "plasma_cannon",
  "plasma cannon unit": "plasma_cannon",
  "plasma cannon units": "plasma_cannon",
  "plasma destructor": "plasma_destructor",
  "plasma destructor unit": "plasma_destructor",
  "plasma destructor units": "plasma_destructor",
  "quake cannon": "quake_cannon",
  "quake cannon unit": "quake_cannon",
  "quake cannon units": "quake_cannon",
  "sacred icon": "sacred_icon",
  "sacred icon unit": "sacred_icon",
  "sacred icon units": "sacred_icon",
  "support missile": "support_missile",
  "support missile unit": "support_missile",
  "support missile units": "support_missile",
  "turbo laser destructor": "turbo_laser_destructor",
  "turbo laser destructor unit": "turbo_laser_destructor",
  "turbo laser destructor units": "turbo_laser_destructor",
  "veteran princeps": "veteran_princeps",
  "veteran princeps unit": "veteran_princeps",
  "veteran princeps units": "veteran_princeps",
  "volcano cannon": "volcano_cannon",
  "volcano cannon unit": "volcano_cannon",
  "volcano cannon units": "volcano_cannon",
  "vulcan mega bolter": "vulcan_mega_bolter",
  "vulcan mega bolter unit": "vulcan_mega_bolter",
  "vulcan mega bolter units": "vulcan_mega_bolter",
  "gun servitor": "gun_servitor",
  "gun servitor unit": "gun_servitor",
  "gun servitor units": "gun_servitor",
  "hypaspist": "hypaspist",
  "hypaspist unit": "hypaspist",
  "hypaspist units": "hypaspist",
  "praetorian combat servitor": "praetorian_combat_servitor",
  "praetorian combat servitor unit": "praetorian_combat_servitor",
  "praetorian combat servitor units": "praetorian_combat_servitor",
  "sagitarii": "sagitarii",
  "sagitarii unit": "sagitarii",
  "sagitarii units": "sagitarii",
  "secutor": "secutor",
  "secutor unit": "secutor",
  "secutor units": "secutor",
  "rapier": "rapier",
  "rapier unit": "rapier",
  "rapier units": "rapier",
  "crusader robot": "crusader_robot",
  "crusader robot unit": "crusader_robot",
  "crusader robot units": "crusader_robot",
  "chimedon": "chimedon",
  "chimedon unit": "chimedon",
  "chimedon units": "chimedon",
  "colossus robot": "colossus_robot",
  "colossus robot unit": "colossus_robot",
  "colossus robot units": "colossus_robot",
  "hydra": "hydra",
  "hydra unit": "hydra",
  "hydra units": "hydra",
  "imperator class titan": "imperator_class_titan",
  "imperator class titan unit": "imperator_class_titan",
  "imperator class titan units": "imperator_class_titan",
  "imperator": "imperator_class_titan",
  "emperor titan": "imperator_class_titan",
  "imperator configuration": "imperator_class_titan",
  "macharius": "macharius",
  "macharius unit": "macharius",
  "macharius units": "macharius",
  "macharius command": "macharius_command",
  "macharius command unit": "macharius_command",
  "macharius command units": "macharius_command",
  "ordinatus majoris": "ordinatus_majoris",
  "ordinatus majoris unit": "ordinatus_majoris",
  "ordinatus majoris units": "ordinatus_majoris",
  "ordinatus minorus": "ordinatus_minorus",
  "ordinatus minorus unit": "ordinatus_minorus",
  "ordinatus minorus units": "ordinatus_minorus",
  "reaver class titan": "reaver_class_titan",
  "reaver class titan unit": "reaver_class_titan",
  "reaver class titan units": "reaver_class_titan",
  "reaver": "reaver_class_titan",
  "reaver titan": "reaver_class_titan",
  "warhound class titan": "warhound_class_titan",
  "warhound class titan unit": "warhound_class_titan",
  "warhound class titan units": "warhound_class_titan",
  "warhound": "warhound_class_titan",
  "warhound titan": "warhound_class_titan",
  "warhound titan pack": "warhound_class_titan",
  "warlord class titan": "warlord_class_titan",
  "warlord class titan unit": "warlord_class_titan",
  "warlord class titan units": "warlord_class_titan",
  "warlord": "warlord_class_titan",
  "warlord titan": "warlord_class_titan",
  "warmonger class titan": "warmonger_class_titan",
  "warmonger class titan unit": "warmonger_class_titan",
  "warmonger class titan units": "warmonger_class_titan",
  "warmonger": "warmonger_class_titan",
  "warmonger configuration": "warmonger_class_titan",
  "avenger strike fighter": "avenger_strike_fighter",
  "avenger strike fighter unit": "avenger_strike_fighter",
  "avenger strike fighter units": "avenger_strike_fighter",
  "lysander fighter": "lysander_fighter",
  "lysander fighter unit": "lysander_fighter",
  "lysander fighter units": "lysander_fighter",
  "ark mechanicus battleship": "ark_mechanicus_battleship",
  "ark mechanicus battleship unit": "ark_mechanicus_battleship",
  "ark mechanicus battleship units": "ark_mechanicus_battleship",
  "gun servator": "gun_servitor",
  "gun servator unit": "gun_servitor",
  "gun servator units": "gun_servitor",
  "one of the following ordinatus majoris": "ordinatus_majoris",
  "one of the following ordinatus minorus": "ordinatus_minorus",
  "mars": "ordinatus_majoris",
  "golgotha": "ordinatus_majoris",
  "armageddon": "ordinatus_majoris",
  "legate per army": "legate"
}
};

ArmyforgeUnitProfiles.findAdeptusMechanicusSkitariiLegionProfileByName = function(displayName, listId) {
	if (!displayName) {
		return null;
	}
	var normalized = ArmyforgeUnitProfiles.normalizeAdeptusMechanicusName(displayName);
	var key = ArmyforgeUnitProfiles.adeptusMechanicusSkitariiLegion.nameToKey[normalized];
	if (!key) {
		return null;
	}
	return ArmyforgeUnitProfiles.adeptusMechanicusSkitariiLegion.profiles[key] || null;
};
