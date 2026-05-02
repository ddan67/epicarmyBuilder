# Tallarn Desert Raiders Audit

- Total formations found: 16
- Total upgrades found: 6
- Total profiles found: 23

## Profiles extracted directly from the Tallarn PDF

- `Mukaali Cavalry`
- `Mukaali Support Cavalry`
- `Tallarn Sentinel`
- `Cavalry Supreme Commander`
- `Cavalry Commander`
- `Sabre Platform`
- `Thudd Gun`
- `Tauros`
- `Tauros Venator`
- `Leman Russ Conqueror`
- `Questoris Knight`
- `Marauder Destroyer`

## Generic profiles reused from existing repo sources

- `Imperial Guard Commander` reused from `war/source-json/imperial-guard-steel-legion.json` (`Commander`)
- `Imperial Guard Supreme Commander` reused from `war/source-json/imperial-guard-steel-legion.json` (`Supreme Commander`)
- `Imperial Guard Infantry` reused from `war/source-json/imperial-guard-steel-legion.json` (`Infantry`)
- `Sniper` reused from `war/js/unitProfiles.igSteelLegion.js` (`Snipers`)
- `Chimera` reused from `war/source-json/imperial-guard-steel-legion.json`
- `Fire Support` reused from `war/source-json/imperial-guard-death-korps-of-krieg.json`
- `Griffon` reused from `war/source-json/imperial-guard-steel-legion.json`
- `Hellhound` reused from `war/source-json/imperial-guard-steel-legion.json`
- `Stormtrooper` reused from `war/js/unitProfiles.igSteelLegion.js` (`Storm Troopers`)
- `Rough Rider` reused from `war/js/unitProfiles.igSteelLegion.js` (`Rough Riders`)
- `Thunderbolt Fighter-Bomber` reused from `war/js/unitProfiles.igSteelLegion.js` (`Thunderbolt Fighter`)

## Generic profiles not found and left as low-confidence/reference-only

- None

## Profiles with parse_confidence lower than high

- `Questoris Knight` (`medium`): the page 3 row is OCR-collapsed around the small-arms lines and the pick-one main gun block.

## parse_warnings

- `Questoris Knight`: The row was preserved conservatively as separate `Shock Field`, `Heavy Stubber`, and pick-one main gun entries because the PDF text extraction collapsed adjacent lines.

## Formation names without an obvious matching profile name

- `Infantry Company`
- `Mechanized Infantry Company`
- `Mukaali Assault Company`
- `Fire Support Platoon`
- `Light Artillery Platoon`
- `Desert Raiders Platoon`
- `Anti-Aircraft Platoon`
- `Destroyer Squadron`
- `Knight House Banner`

## Source rows that could not be parsed safely

- `Questoris Knight`: weapon/loadout row on page 3.

## Validation summary

- JSON top-level keys match the target schema: `metadata`, `army_stats`, `special_rules`, `formations`, `profiles`, `army_notes`, `extraction_warnings`.
- The structure intentionally aligns with `war/source-json/necron.json` while adding Tallarn-specific metadata fields requested for this task.
- All formations from pages 1-3 are represented:
  - `Infantry Company`
  - `Mechanized Infantry Company`
  - `Mukaali Assault Company`
  - `Sentinel Platoon`
  - `Fire Support Platoon`
  - `Light Artillery Platoon`
  - `Desert Raiders Platoon`
  - `Hellhound Squadron`
  - `Griffon Squadron`
  - `Anti-Aircraft Platoon`
  - `Rough Rider Platoon`
  - `Tauros Platoon`
  - `Conqueror Platoon`
  - `Thunderbolt Squadron`
  - `Destroyer Squadron`
  - `Knight House Banner`
- All company upgrades from pages 1-2 are represented:
  - `Snipers`
  - `Flak`
  - `Griffon Squadron`
  - `Hellhound`
  - `0-1 Supreme Commander`
  - `Fire Support`
- All visible Tallarn-specific profiles from pages 3-4 are present.
- Every reused generic Imperial Guard profile is listed in `extraction_warnings`.
