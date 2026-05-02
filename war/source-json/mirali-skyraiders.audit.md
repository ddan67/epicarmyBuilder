# Mirali Skyraiders Audit

- List id: `IG_miraliSkyraiders_NETEA`
- Source PDF: `C:\Users\fliff\Downloads\Mirali Skyraiders v1.0.pdf`

## Totals

- Total formations found: `13`
- Total upgrades found: `6`
- Total profiles found: `19`

## Profiles extracted directly from the Mirali PDF

- `Mirali Trackers`
- `Mirali Vendetta`
- `Vulture Punisher`
- `Vulture Slick`
- `Howitzer Weapon Platform`
- `Blitzen AA Platform`
- `Lightning Strike Fighter`
- `Heavy Marauder Bomber`
- `Mirali Heavy Marauder Destroyer`
- `Gun Emplacement`
- `Bunker`

## Generic profiles reused from existing repo sources

- `Imperial Guard Supreme Commander` reused from `war/source-json/tallarn-desert-raiders.json`
- `Imperial Guard Commander` reused from `war/source-json/tallarn-desert-raiders.json`
- `Imperial Guard Infantry` reused from `war/source-json/tallarn-desert-raiders.json`
- `Valkyrie` reused from `war/source-json/cadian-shock-troops.json`
- `Fire Support` reused from `war/source-json/tallarn-desert-raiders.json`
- `Sniper` reused from `war/source-json/tallarn-desert-raiders.json`
- `Vulture` reused from `war/source-json/cadian-shock-troops.json`
- `Thunderbolt Fighter` reused from `war/source-json/cadian-shock-troops.json`

## Generic profiles not found and left as low-confidence/reference-only

- None

## Profiles with parse_confidence lower than high

- `Mirali Trackers` (`medium`)
- `Mirali Heavy Marauder Destroyer` (`medium`)

## parse_warnings

- `Attached Vulture (Vulture)`: split from a one-of upgrade row with distinct costs.
- `Attached Vulture (Vulture Punisher)`: split from a one-of upgrade row with distinct costs.
- `Mirali Trackers`: page 2 is rotated and the weapon column OCR is degraded; the row was cross-checked against the visible rendered table.
- `Mirali Trackers`: `Miral Combat Blades` was normalized conservatively to `Mirali Combat Blades`.
- `Mirali Vendetta`: OCR capitalization normalized from `MIrali Vendetta`.
- `Vulture Slick`: rotated page row cross-checked against the visible rendered table.
- `Lightning Strike Fighter`: rotated page row cross-checked against the visible rendered table.
- `Heavy Marauder Bomber`: rotated page row cross-checked against the visible rendered table.
- `Mirali Heavy Marauder Destroyer`: rotated page row cross-checked against the visible rendered table.
- `Mirali Heavy Marauder Destroyer`: the first autocannon firepower token was partially degraded by OCR and was normalized conservatively to `AP4+/AT5+`.

## Formation names that do not have an obvious matching profile name

- `0-1 Air Cavalry RHQ`
- `Air Cavalry Company`
- `Vulture Squadron`
- `Vulture Punisher Squadron`
- `Regimental Artillery Battery`
- `Regimental Anti-Air Battery`
- `Firebase Defense Company`
- `Mirali Trackers Company`
- `Vulture Slick Squadron`
- `Thunderbolt Flight`
- `Lightning Strike Flight`
- `Marauder`
- `Marauder Destroyer`

## Source rows that could not be parsed safely

- `Mirali Trackers` weapon column on rotated page 2
- `Mirali Heavy Marauder Destroyer` first weapon row on rotated page 2

## Formations with multiple alternatives or split costs

- `Attached Vulture (Vulture)` / `Attached Vulture (Vulture Punisher)` were split from one upgrade row because the source prints distinct costs.

## Validation summary

- JSON top-level keys match the target schema: `metadata`, `army_stats`, `special_rules`, `formations`, `profiles`, `army_notes`, `extraction_warnings`.
- All formations from page 1 are present:
  - `0-1 Air Cavalry RHQ`
  - `Air Cavalry Company`
  - `Vulture Squadron`
  - `Vulture Punisher Squadron`
  - `Regimental Artillery Battery`
  - `Regimental Anti-Air Battery`
  - `Firebase Defense Company`
  - `Mirali Trackers Company`
  - `Vulture Slick Squadron`
  - `Thunderbolt Flight`
  - `Lightning Strike Flight`
  - `Marauder`
  - `Marauder Destroyer`
- All Core Company Upgrades from page 1 are represented.
- All explicitly listed Mirali profiles from page 2 are present.
- Terrain/reference entries for `Gun Emplacement` and `Bunker` are represented.
- Reused generic Imperial Guard profiles are listed in `extraction_warnings`.
- Page 2 is rotated and was cross-checked against the visible rendered table before normalizing the reference rows.
