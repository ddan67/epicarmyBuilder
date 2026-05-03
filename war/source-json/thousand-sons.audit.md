# Thousand Sons Audit

## List identity check

Confirmed existing list id: `CHAOS_ts_NETEA`

The repo already exposes this army in `war/indexNETEA.html` as `Thousand Sons`, and the live list file `war/lists/CHAOS_ts_NETEA.json` matches the Thousand Sons roster used by the new source JSON.

## Counts

- Total formations found: 15
- Total upgrades found: 19
- Total profiles found: 28

## Profiles with parse confidence lower than high

- `Wraithgate` - low confidence, reference-only portal item
- `Thousand Sons Sorcerer` - medium confidence, older source text uses `Preceptor/Sorceror` wording
- `Sekhmet Disc Riders` - medium confidence, reconstructed from legacy compendium snippets
- `Thousand Sons Neophyte` - medium confidence, OCR snippet was compressed
- `Thousand Sons Predator` - medium confidence, weapon layout reconstructed from legacy compendium snippet
- `Tzeentch Horrors` - low confidence, placeholder daemon pool profile
- `Tzeentch Screamers` - low confidence, placeholder daemon pool profile

## Parse warnings

- `Deceivers Formation` uses older `Deceiver` / `Decievers` wording across live drafts.
- `Wraithgate` is reference-only.
- `Thousand Sons Sorcerer` uses older `Preceptor`/`Sorceror` wording in the source snippets.
- `Sekhmet Disc Riders`, `Thousand Sons Neophyte`, and `Thousand Sons Predator` were reconstructed from legacy snippets and should be validated against a rendered PDF if one is added later.
- `Tzeentch Horrors` and `Tzeentch Screamers` are placeholder profiles for lesser daemon selections.

## Formation names without an obvious exact profile name

- `Wraithgate`
- `Thousand Sons Daemon Pool`
- `Scarab Occult`
- `Ahriman's Chosen`
- `Rubric Fellowship`
- `Thousand Sons Armor`
- `Silver Tower Company`
- `Thousand Sons Warcoven`
- `Neophyte Class`
- `Deceivers Formation`
- `Greater Spires of Tzeentch`
- `Warp Palace of Tzeentch`
- `Doomwing fighters`
- `Firelord Bombers`

These are resolved through aliases and formation-specific supplemental profile logic rather than by exact profile-name matching.

## Safely reconstructed or reused rows

- `Thousand Sons Sorcerer Lord` was reused from the Black Legion Sorcerer Lord profile structure with Thousand Sons-specific naming.
- `Thousand Sons Marines` was reused from the Black Legion Thousand Sons infantry profile structure.
- `Thousand Sons Terminators` was reused from the Black Legion Chaos Terminators profile structure.
- `Silver Tower`, `Doomwing`, `Firelord`, `Lord of Change`, `Dreadclaw`, `Devastation Class Cruiser`, and `Despoiler Class Battleship` were reused from existing Chaos source profiles.
- `Deceiver` was reused from the Necron source profile structure.

## Alias mismatches needed later

- `Thousand Sons Armour` and `Thousand Sons Armor`
- `Scarab Occult` -> `Thousand Sons Sorcerer Lord`, `Thousand Sons Adeptus`
- `Ahriman's Chosen` and `Rubric Fellowship` -> `Thousand Sons Sorcerer`, `Thousand Sons Marines`
- `Thousand Sons Warcoven` -> `Thousand Sons Sorcerer`, `Thousand Sons Terminators`
- `Sekhmet Disc Riders` -> `Thousand Sons Sorcerer`, `Sekhmet Disc Riders`
- `Neophyte Class` -> `Thousand Sons Sorcerer`, `Thousand Sons Neophyte`
- `Deceivers Formation` / `Deceiver` -> `Deceiver`
- `Doomwing fighters` -> `Doomwing`
- `Firelord Bombers` -> `Firelord`
- `Greater daemon (Lord of Change)` -> `Lord of Change`
- `Lesser Daemons` -> `Tzeentch Flamers`, `Tzeentch Horrors`, `Tzeentch Screamers`

## Notes

- The live route is the correct Thousand Sons route for this repo: `CHAOS_ts_NETEA`.
- No points, formation costs, upgrade costs, constraints, or army construction rules were changed here.
