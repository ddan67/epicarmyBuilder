# Explorator Fleet Audit

- Confirmed list id found in repo: `AMTL_MarsPrime_NETEA`
- Source PDF: `C:\Users\fliff\Downloads\ADEPTUS MECHANICUS – Explorator Fleet.pdf`
- Version: `1.1`
- Status note: `Developmental`

## Totals

- Total formations found: `20`
- Total upgrades found: `9`
- Total profiles found: `31`

## Profiles With Parse Confidence Lower Than High

- `Pteraxii`
- `Sydonian Dragoon`
- `Onager Dunecrawler`
- `Skorpius Disintegrator`
- `Ark Mechanicus Battleship`

## Parse Warnings

- `Pteraxii`: The page 2 OCR compresses the Pteraxii row; the visible rendered table was used to preserve the heavy flamer and jump pack/teleport notes.
- `Sydonian Dragoon`: The Sydonian Dragoon melee row is OCR-truncated; the visible text was used conservatively.
- `Onager Dunecrawler`: The Onager row prints two optional weapon mounts; both have been preserved as separate weapon entries.
- `Skorpius Disintegrator`: The Belleros Energy Cannon row is an OR-mode weapon line and was split conservatively into distinct range/profile entries.
- `Ark Mechanicus Battleship`: The Ark Mechanicus row is an OR weapon choice line and was preserved as separate weapon entries.
- `Knight Errant`: Boolean weapon line folded into previous weapon for Knight Errant.

## Formation Names That Do Not Have An Obvious Matching Profile Name

- `Vanguard Maniple`
- `Skorpius Cohort`
- `Ranger Centuria`
- `Ironstrider Cavaliers`
- `Sydonian Dragoons`
- `Ruststalker Killclade`
- `Infiltrator Killclade`
- `Fulgurite Maniple`
- `Hounds`
- `Pteraxii Maniple`
- `Onager Cohort`
- `Kastelan Maniple`
- `Destroyer Maniple`
- `Breacher Maniple`
- `Knights`
- `Warhound Class Titan`
- `Warhound Pack`
- `Avenger Strike Fighters`
- `Ark Mechanicus Battleship`

## Source Rows That Could Not Be Parsed Safely

- `Pteraxii`
- `Sydonian Dragoon`
- `Onager Dunecrawler`
- `Skorpius Disintegrator`
- `Ark Mechanicus Battleship`

## Important Alias Mismatches Needed Later

- `Electro-Priests / Fulgurite Electro-Priests`
- `Secutarii Hoplite / Secutarii Hoplites`
- `Skitarii Rangers / Rangers upgrade`
- `Skorpius Dunerider / Skorpius Duneriders`
- `Avenger Strike Fighters`
- `Knight Paladin / Knight Errant / Seneschal`
- `Warhound Class Titan / Warhound Pack`

## Profile Coverage

- Explorator Fleet Skitarii units: complete.
- Knight Support: included.
- Collegia Titanica Support: included.
- Explorator Fleet Navy and Spacecraft: included.
- Generic Commissar profile reused from repo source JSON: included.

## Validation Summary

- JSON top-level keys match the target schema: `metadata`, `army_stats`, `special_rules`, `formations`, `profiles`, `army_notes`, `extraction_warnings`.
- All formations from page 1 are present.
- All upgrades from page 1 are represented.
- All profiles from page 2 are present.
- Automaton and Master of the Machine are present in special rules.
- Knight Support profiles are included.
