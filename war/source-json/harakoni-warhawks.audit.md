# Harakoni Warhawks Audit

- List id: `IG_harakoni_NETEA_fixed`
- Source PDF: `C:\Users\fliff\Downloads\Harakoni Warhawks v1.4.2.pdf`

## Totals

- Total formations found: `13`
- Total upgrades found: `7`
- Total profiles found: `27`

## Formation Coverage

Harakoni Companies:
- `Harakoni Strike Company`

Harakoni Support Formations:
- `Reconnaissance Squadron`
- `Demolition Specialists`
- `Tank Hunter Squadron`
- `Harakoni Light Artillery Squadron`

Imperial Allies:
- `0-1 Spacecraft - Onero Overflight`
- `0-1 Spacecraft - Lunar Cruiser`
- `0-1 Spacecraft - Emperor Battleship`
- `Fighter Squadron`
- `Marauder Heavy Bomber`
- `Marauder Destroyer`
- `Marauder Spectre`
- `Linebreaker Relief Column`

All requested formations from the PDF are present.

## Upgrade Coverage

- `0-1 Regimental Command`
- `Fire Support`
- `Warhawk Infantry`
- `Harakoni Veterans`
- `Artillery Liaison Officer`
- `Grav-Glider`
- `Close Air Support`

All requested company upgrades are represented.

## Profile Coverage

Harakoni-specific profiles extracted from the PDF:
- `Warhawks`
- `Harakoni Commander`
- `Tech Priest`
- `Sappers`
- `Harakoni Supreme Commander`
- `Harakoni Fire Support`
- `Storm Troopers`
- `Forward Observer`
- `Sentinel`
- `Support Sentinel`
- `Valkyrie`
- `Vulture`
- `Vulture Punisher`
- `Vendetta`
- `Grav-Glider`

Imperial / allied profiles extracted from the PDF:
- `Imperial Guard Infantry`
- `Chimera`
- `Lightning Interceptor`
- `Lightning Strike Fighter`
- `Thunderbolt Fighter`
- `Marauder Heavy Bomber`
- `Marauder Destroyer`
- `Marauder Spectre`
- `Lunar Class Cruiser`
- `Emperor Class Battleship`
- `Onero Overflight`

Generic / reused profiles copied from existing repo sources:
- `Leman Russ Conqueror` reused from `war/source-json/elysian-drop-troops.json`

## Profiles With Parse Confidence Below High

- `Tech Priest` (`medium`)
- `Harakoni Fire Support` (`medium`)
- `Lightning Interceptor` (`medium`)
- `Lunar Class Cruiser` (`medium`)
- `Onero Overflight` (`medium`)

## Parse Warnings

- `Linebreaker Relief Column`: normalized source OCR `Coloumn` to `Column`.
- `Tech Priest`: close-combat weapon row overlaps adjacent OCR text, so the visible assault-weapon line was preserved conservatively.
- `Harakoni Fire Support`: the row clearly shows `2 x Lascannons` at `45cm`, but the firepower text is degraded and was preserved as visible `AP5+`.
- `Lightning Interceptor`: firepower tokens are partially reordered by OCR.
- `Lunar Class Cruiser`: weapon labels and firepower tokens are partially concatenated by OCR.
- `Onero Overflight`: weapon row is partially reordered by OCR.

## Source Rows That Could Not Be Parsed Fully Safely

- `Tech Priest` assault weapon row
- `Harakoni Fire Support` firepower row
- `Lightning Interceptor` firepower row
- `Lunar Class Cruiser` concatenated weapon row
- `Onero Overflight` weapon row

## Formations With Multiple Alternatives Or Split Costs

- `Harakoni Strike Company`: base company plus one-of internal build choices with different costs.
- `0-1 Spacecraft - Onero Overflight`
- `0-1 Spacecraft - Lunar Cruiser`
- `0-1 Spacecraft - Emperor Battleship`
- `Fighter Squadron`: preserves multiple fighter choices and replacement options in one row.

## Formation Names Without An Obvious One-to-One Profile Name

- `Harakoni Strike Company`
- `Reconnaissance Squadron`
- `Demolition Specialists`
- `Tank Hunter Squadron`
- `Harakoni Light Artillery Squadron`
- `Fighter Squadron`
- `Linebreaker Relief Column`

## Missing Profiles Left As Reference-Only

- None. The only non-printed profile needed by the list was `Leman Russ Conqueror`, which was reused from an existing repo source instead of being left reference-only.

## Notes

- The PDF text extraction was messy and rows were cross-checked against the rendered PDF table before normalizing the JSON.
- The Harakoni PDF references the standard Imperial Guard `Commissars` rule instead of reprinting it in full, so the rule text was reused from an existing Imperial Guard source-json file.
