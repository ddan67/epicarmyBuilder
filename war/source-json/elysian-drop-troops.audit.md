# Elysian Drop Troop Regiment Audit

- List id: `IG_Elysian_NETEA`
- Source PDFs:
  - `C:\Users\fliff\Downloads\Elysian Drop Troop Regiment Army List V4.3.2.pdf`
  - `C:\Users\fliff\Downloads\Elysian Drop Army Unit Statistic ver 4.3.2.pdf`

## Totals

- Total formations found: `17`
- Total upgrades found: `3`
- Total profiles found: `27`

## Formation Coverage

- Elysian Drop Troop Companies: `3`
- Elysian Drop Support Platoons/Squadrons: `8`
- Drop Troop Company Upgrades: `3`
- Elysian Air and Allied Units: `6`

All requested formations from the army list PDF pages 2-3 are present.

## Profile Coverage

Profiles extracted directly from the Elysian statistics PDF:

- `Elysian Supreme Commander`
- `Elysian Commander`
- `Commissar`
- `Elysian Drop Troop Infantry`
- `Elysian Drop Hardened Veterans`
- `Grey Ghosts`
- `Storm Troopers`
- `Elysian Support Squad`
- `Elysian Mortar Squad`
- `Elysian Cyclops`
- `Taurus`
- `Taurus Venator`
- `Elysian Drop Rocket Sentinel`
- `Elysian Drop Sentinel`
- `Elysian Sabre Platform`
- `Elysian Valkyrie Transport`
- `Vulture Gunship`
- `Chimera`
- `Leman Russ Conqueror`
- `IG Infantry unit`
- `Lunar Class Cruiser`
- `Lightning Fighter`
- `Lightning Strike Fighter`
- `Marauder Bomber`
- `Marauder Destroyer`

Profiles reused from existing repo sources because they do not appear in the Elysian statistics PDF:

- `Vendetta` reused from `war/source-json/mobile-catachans.json`
- `Valkyrie Sky Talon` reused from `war/source-json/mobile-catachans.json`

Missing army-list terms without a distinct source profile in the Elysian statistics PDF:

- `Sky Talons` do not have their own printed Elysian profile; handled by reused `Valkyrie Sky Talon`
- `Vendettas` do not have their own printed Elysian profile; handled by reused `Vendetta`
- `Elysian Special Weapons Troops` do not have a distinct printed profile; likely needs aliasing to `Elysian Drop Troop Infantry` during later wiring

## Parse Confidence

Profiles with parse confidence lower than `high`:

- None

## Parse Warnings

- `Elysian Drop Hardened Veterans`: the source folds `Las Carbines and Machetes` across two lines; normalized into separate `Las Carbines` and `Machetes` weapon entries.
- `Grey Ghosts`: normalized OCR `I5cm` to `15cm`; also split `LasCarbines & Machetes` into separate weapon entries.
- `Taurus Venator`: normalized `TLLascannon` to `TL Lascannon` and preserved the `Multi-Laser or TLLascannon` row as alternative weapon options.
- `Elysian Drop Sentinel`: split collapsed `Small Arms and Multi-Melta` text into separate weapon entries.
- `Elysian Sabre Platform`: normalized concatenated `Drop troops.Walker` notes into separate abilities.
- `Vulture Gunship`: preserved the TL Punisher Cannon as an alternative replacement package for TL Autocannon plus Hellstrike Missiles.
- `Leman Russ Conqueror`: normalized printed `Reinforce Armour` to `Reinforced Armour`.
- `Lunar Class Cruiser`: OCR read `Pin Point Attack` firepower as `MN 2+ TK (D3)`; normalized conservatively to `MW2+ TK(D3)`.
- `Marauder Destroyer`: preserved the unusual source note `FxR` on `2x Underwing Rockets` verbatim.

## Name Mismatch Aliases Needed Later

- `Drop Troops` -> `Elysian Drop Troop Infantry`
- `Elysian Special Weapons Troops` -> likely `Elysian Drop Troop Infantry`
- `Drop Fire Support` -> `Elysian Support Squad`
- `Valkyries` -> `Elysian Valkyrie Transport`
- `Vendettas` -> `Vendetta`
- `Vultures` -> `Vulture Gunship`
- `Tauros` -> `Taurus`
- `Venator` -> `Taurus Venator`
- `Space Ship` / `Lunar Cruiser` -> `Lunar Class Cruiser`
- `Imperial infantry units` -> `IG Infantry unit`
- `Conquerors` -> `Leman Russ Conqueror`

## Formation Names Without An Obvious One-to-One Profile Name

- `0-1 Elysian Regimental HQ`
- `Elysian Drop Troop Company`
- `Elysian Drop Mortar Company`
- `Elysian Anti-tank Platoon`
- `Elysian droppable Sabre Battery`
- `Vulture Squadron`
- `Elysian Drop Sentinel Squadron`
- `Elysian Drop Rocket Sentinels`
- `Tauros Squadron`
- `Storm Trooper Company`
- `Grey Ghosts Platoon`
- `Space Ship`
- `Lightning Wing`
- `Lightning Strike`
- `Line Breaker Column`

## Source Rows That Needed Conservative Parsing

- `Grey Ghosts` move value OCR as `I5cm`
- `Taurus Venator` weapon label `TLLascannon`
- `Lunar Class Cruiser` pin-point attack OCR as `MN 2+`
- `Marauder Destroyer` underwing rockets note printed as `FxR`

## Validation Notes

- JSON parsed successfully.
- Top-level structure matches the requested `metadata`, `army_stats`, `special_rules`, `formations`, `profiles`, `army_notes`, and `extraction_warnings` keys.
- All requested army rules from page 1 are present.
- All requested upgrades from page 3 are represented.
- Missing or reused transport/support profiles for `Sky Talons` and `Vendettas` are documented explicitly.
