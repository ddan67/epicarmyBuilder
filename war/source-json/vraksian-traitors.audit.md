# Vraksian Traitors Audit

## Identity Check
Confirmed list id: `CHAOS_VraksianTraitors_NETEA`.
The repo index and live list file match the Vraksian Traitors PDF, so the JSON was created against this route.

## Counts
- Formations: 21
- Upgrades: 7
- Profiles: 35

## Lower Confidence Profiles
- Enforcer (medium)
- Alpha Legion Lord (medium)
- Hell Bringer (medium)

## Parse Warnings
- Enforcer: The CH row omits stat columns in the extracted table; n/a values were preserved.
- Alpha Legion Lord: The CH row omits stat columns in the extracted table; n/a values were preserved.
- Hell Bringer: The bomber row is compressed in the extracted layout; the profile was reconstructed conservatively from the visible table.

## Profiles Extracted Directly from the Reference PDF
- All 35 profile entries were extracted directly from `Vraksian Traitors reference 1.081.pdf`.

## Reused Profiles from Existing Repo Sources
- None.

## Reference-only Profiles
- None.

## Formation / Profile Alias Mismatches
- Varksian / Vraksian: the PDF prints Varksian in profile names.
- Orygns Berserkers -> Ogryn Berserkers.
- Sentinal -> Sentinel.
- Death Strike Laucher -> Deathstrike Launcher.
- HellBlade -> Hell Blade.
- Helltalon -> Hell Talon.
- Hell Bringer -> Harbinger Bomber / live builder Harbinger Bomber.
- Chaos Warhounds / Chaos Reaver Titan / Chaos Warlord Titan -> Vraks Warhound / Vraks Reaver / Vraks Warlord.
- Tank Hunter Squadron - Leman Russ Destroyers -> Leman Russ Tank Destroyer.

## Formation Names Without an Obvious Matching Profile Name
- Harbinger Bomber
- Chaos Warhounds
- Chaos Reaver Titan
- Chaos Warlord Titan

## Source Rows Requiring Care
- `Harbinger Bomber` has no matching profile row in the reference PDF and should map to `Hell Bringer` in the builder.
- `Armored Fist Company` uses the PDF's American spelling; the live builder should keep its existing route if it already differs.

## Formations with Split Alternatives or Multiple Costs
- `Leman Russ Tank Company` has a Vanquisher exchange option.
- `Artillery Squadron` can be built from Basilisks, Bombards, or Manticores.
- `Tank Hunter Squadron - Valdor Tank Hunters` and `Tank Hunter Squadron - Leman Russ Destroyers` are separate support entries with different unit mixes and points.
- `Chaos Warhounds` has a second Warhound option at an additional cost.

## Notes
- The source PDFs were extracted with layout text and the visible table was used to preserve the printed rows conservatively.
