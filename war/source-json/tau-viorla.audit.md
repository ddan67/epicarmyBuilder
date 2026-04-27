# Tau Vior’la Audit

- Total formations found: 13
- Total upgrades found: 12
- Total profiles found: 23

## Profiles below high confidence

- `XV109 Y’vahra Battlesuit` — `medium`
- `KX139 Supremacy Suit` — `medium`
- `Gun Drones` — `medium`
- `Protector II Class Cruiser` — `medium`

## Parse warnings

- `XV109 Y’vahra Battlesuit`: The close-range Small Arms line was reconstructed from OCR text that read as a continuation of the Plasma Flamer entry.
- `KX139 Supremacy Suit`: The Heavy Rail Cannon, Nexus Missile Array, and Pulse Ordnance Multi Driver are mutually exclusive loadouts and were preserved as separate weapon entries.
- `Gun Drones`: The source abbreviated the secondary weapon trait as `D`; it was normalized to `Disrupt` to match existing Tau source-json style.
- `Protector II Class Cruiser`: The profile was preserved with both Pinpoint Attack and Gravitic Tracer Salvo entries from the reference sheet; the sheet presentation may imply alternate attack modes.
- `Manta`: Obvious OCR issues in the source were normalized for `Damage Capacity`, `Missiles`, and `loses`.

## Formation names without an obvious direct profile match

- `Fire Warrior Breacher Cadre` -> `Fire Warrior Breachers`
- `Vior’la XV8 Crisis Suit Formation` -> `Vior’la XV8 Crisis Battlesuit`
- `Heavy Battlesuit formation` -> `XV104 Riptide Battlesuit`, `XV107 R’Varna Battlesuit`, `XV109 Y’vahra Battlesuit`
- `KV128 Stormsurge formation` -> `KX128 Stormsurge Battlesuit`
- `KV139 Supremacy formation` -> `KX139 Supremacy Suit`
- `XV88 Broadside` -> `XV88 Broadside Battlesuit`
- `Vior’la Assault Orca` -> `Vior’la Orca Dropship`
- `Spacecraft` -> `Protector II Class Cruiser`

## Source rows that could not be parsed safely

- `XV109 Y’vahra Battlesuit` reference row: one weapon line was collapsed by OCR and reconstructed conservatively.
- `KX139 Supremacy Suit` reference row: mutually exclusive main weapon options were preserved as separate weapon entries.
- `Protector II Class Cruiser` reference row: attack presentation is compressed and may represent alternate attack modes.
- `Gun Drones` reference row: weapon trait abbreviation `D` was interpreted as `Disrupt`.

## Costs that were hard to match

- No formation or upgrade costs from page 1 required speculative reassignment after coordinate-based extraction. The visible table supported all requested costs clearly.
