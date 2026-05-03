# Traitor Titan Legions Audit

## Identity Check
- Confirmed list id: `CHAOS_titans_NETEA`
- Builder source file: `war/lists/CHAOS_titans_NETEA.json`
- Closest PDF reference: `Traitor Titan Legions v2,31 Beta.pdf`
- Secondary cross-checks: `Traitor Titan Legions v2,2.pdf`, `Traitor Titan Legions 2,2 QRS.pdf`

## Counts
- Builder formations extracted: 44
- Builder upgrades represented: 199
- Profiles total: 79
- Weapon/reference profiles: 46

## Builder vs PDF Mismatch Table
- Carrion Lord, Forgelord, and Herald costs in the builder are higher than both PDFs.
- Lord of Battles and Harbringer Bomber costs differ from both PDFs.
- Greater Brass Scorpion count/cost in the builder aligns with v2.2, not v2.31b.
- Death Wheel count in the builder is 1-2, matching v2.31b rather than v2.2.

## Profiles With Parse Confidence Lower Than High
- None

## Parse Warnings
- No additional parse warnings were introduced beyond the builder/PDF mismatch notes.

## Formation Name / Profile Alias Notes
- `Carrion Lord Class` maps to `Chaos Emperor Titan`
- `Forgelord Class` maps to `Chaos Warlord Titan`
- `Herald Class` maps to `Chaos Reaver Titan`
- `Forgehound Class` maps to `Chaos Warhound Titan`
- `Retlaxi Pattern Death Wheel` maps to `Retlaxi Pattern Death Wheel`
- `Harbringer Bomber` is preserved with the PDF spelling; later wiring should alias `Harbinger` to it
- `Chaos Battleship` maps to `Despoiler Class Battleship`

## Rows Cross-Checked Against v2.2 or QRS
- Battle titan and daemon engine counts/costs from the builder were cross-checked against both PDFs.
- Weapon reference tables were taken from v2.31b text extraction and validated against the QRS where needed.

## Source Notes
- The builder list is a hybrid and intentionally preserved as the source of truth for costs/counts/constraints.
- v2.31b is the main rule/profile source.
- v2.2 and the QRS only served as cross-checks.
