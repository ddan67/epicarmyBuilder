# Mobile Forces of Catachan Audit

- Total formations found: 15
- Total upgrades found: 13
- Total profiles found: 24

## Profiles extracted from Mobile Forces of Catachan Forces

- `Commissar`
- `Fire Support Squad`
- `Imperial Guard Infantry`
- `Imperial Guard Commander`
- `Imperial Guard Supreme Commander`
- `Mortar Team`
- `Ogryns`
- `Sniper`
- `Stormtroopers`
- `Veterans`
- `Catachan Sentinel`
- `Support Sentinel`
- `Drop Sentinel`
- `Valkyrie`
- `Valkyrie Sky Talon`
- `Vendetta`
- `Vulture`
- `Vulture Tornado`
- `Vulture Punisher`

## Profiles extracted from Imperial Navy Forces

- `Lightning Strike Fighter`
- `Marauder Bomber`
- `Thunderbolt Fighter`
- `Lunar Class Cruiser`
- `Emperor Class Battleship`

## Profiles with parse_confidence lower than high

- `Support Sentinel` (`medium`): plain-text extraction truncated the `AT6+` portion of the firepower line.

## parse_warnings

- `Airborne Support Platoon`: the core units contain an OR choice between Fire Support Units and Mortar Units.
- `Thunderbolt Squadron - Two Thunderbolt Fighters`: split from a single multi-cost alternative row.
- `Thunderbolt Squadron - Three Thunderbolt Fighters`: split from a single multi-cost alternative row.
- `0-1 Orbital Support - Lunar Class Cruiser`: split from a single multi-cost alternative row.
- `0-1 Orbital Support - Emperor Class Battleship`: split from a single multi-cost alternative row.
- `Ogryns (one Ogryn and a Valkyrie)`: split from an OR-cost upgrade row.
- `Ogryns (two Ogryns and two Valkyries)`: split from an OR-cost upgrade row.
- `Snipers (one Sniper and a Valkyrie)`: split from an OR-cost upgrade row.
- `Snipers (two Snipers and a Valkyrie)`: split from an OR-cost upgrade row.
- `Vultures (add two Vulture Punishers)`: split from an OR-cost upgrade row.
- `Vultures (add two Vultures)`: split from an OR-cost upgrade row.
- `Support Sentinel`: firepower OCR truncation was normalized conservatively to `2x AP5+/AT6+`.

## Formation names that do not have an obvious matching profile name

- `Airborne Regimental HQ`
- `Airborne Infantry Company`
- `Airborne Ogryn Company`
- `Sentinel Patrol`
- `Airborne Support Platoon`
- `0-1 Veterans`
- `Airborne Stormtroopers`
- `Lightning Squadron`
- `Marauder Squadron`
- `Thunderbolt Squadron - Two Thunderbolt Fighters`
- `Thunderbolt Squadron - Three Thunderbolt Fighters`
- `0-1 Orbital Support - Lunar Class Cruiser`
- `0-1 Orbital Support - Emperor Class Battleship`

## Source rows that could not be parsed safely

- `Support Sentinel` weapon row on page 3 due to OCR truncation.

## Formations with split alternatives due to multiple costs

- `Thunderbolt Squadron - Two Thunderbolt Fighters`
- `Thunderbolt Squadron - Three Thunderbolt Fighters`
- `0-1 Orbital Support - Lunar Class Cruiser`
- `0-1 Orbital Support - Emperor Class Battleship`

## Validation summary

- JSON top-level keys match the target schema: `metadata`, `army_stats`, `special_rules`, `formations`, `profiles`, `army_notes`, `extraction_warnings`.
- All formations from page 2 are present:
  - `Airborne Regimental HQ`
  - `Airborne Infantry Company`
  - `Airborne Ogryn Company`
  - `Sentinel Patrol`
  - `Airborne Support Platoon`
  - `0-1 Veterans`
  - `Airborne Stormtroopers`
  - `Vulture Punishers`
  - `Vultures`
  - `Lightning Squadron`
  - `Marauder Squadron`
  - `Thunderbolt Squadron - Two Thunderbolt Fighters`
  - `Thunderbolt Squadron - Three Thunderbolt Fighters`
  - `0-1 Orbital Support - Lunar Class Cruiser`
  - `0-1 Orbital Support - Emperor Class Battleship`
- All company upgrades from page 2 are represented as upgrade entries.
- All page 3 Mobile Forces of Catachan profiles are present.
- All page 4 Imperial Navy profiles are present.
