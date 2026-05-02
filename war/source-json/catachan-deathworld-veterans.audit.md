# Catachan Deathworld Veterans Audit

- Total formations found: 17
- Total upgrades found: 10
- Total profiles found: 23

## Profiles with parse_confidence lower than high

- `Marauder Bomber` (`medium`): the plain-text PDF extraction dropped the speed and defence columns, so those values were aligned to the same standard Marauder Bomber profile already used elsewhere in the repo.

## parse_warnings

- `Orbital Support - Lunar Class Cruiser`: the source Orbital Support row was split from a combined multi-cost alternative row.
- `Orbital Support - Emperor Class Battleship`: the source Orbital Support row was split from a combined multi-cost alternative row.
- `Marauder Bomber`: plain-text extraction truncated the speed and defence columns.

## Formation names without an obvious matching profile name

- `0-1 Deathworld Air Cavalry Company`
- `Deathworld Infantry Company`
- `0-1 Deathworld Regimental HQ`
- `Deathworld Mortar Platoon`
- `Ogryn Platoon`
- `Deathworld Sentinel Squadron`
- `Deathworld Veterans Platoon`
- `Hellhound Platoon`
- `Support Tank Squadron`
- `Vulture Squadron`
- `Artillery Firebase`
- `Traitor's Bane`
- `Marauder Squadron`
- `Thunderbolt Squadron`
- `Orbital Support - Lunar Class Cruiser`
- `Orbital Support - Emperor Class Battleship`

## Source rows that could not be parsed safely

- `Marauder Bomber`: the speed and defence columns were dropped by plain-text extraction.

## Formations with split alternatives due to multiple costs

- `Orbital Support - Lunar Class Cruiser`: `150 points`
- `Orbital Support - Emperor Class Battleship`: `300 points`

## Validation summary

- JSON parses successfully.
- Top-level structure matches the requested schema and aligns with `war/source-json/necron.json`.
- All formations from page 1 are represented.
- All company upgrades from page 1 are represented.
- `Oops! Sorry, sir!` and `Booby Traps` special rules are present.
- All profiles from page 2 are represented.
- Orbital Support's Lunar Class Cruiser and Emperor Class Battleship alternatives remain explicit with separate costs.

## List id note

- The user initially mentioned `IG_cadian_NETEA`, but this PDF is for Catachan Deathworld Veterans.
- The existing repo list id `IG_catachan_NETEA` was used.
