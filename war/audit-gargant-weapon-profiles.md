# Gargant Weapon Profile Audit

Generated from:

- `war/lists/ORK_gargant_NETEA.json`
- `war/js/unitProfiles.orkGargantMob.js`

## Selectable Gargant / Supa Stompa Weapon Options Found In Army Data

- `Gatling Cannon`
- `Krusha`
- `Loadz o' Guns`
- `Mega-Choppa`
- `Snappa`
- `Mega-Lobba`
- `Soopagun`
- `Supa-Lifta-Droppa`
- `Supa-Zzap-Gun`
- `Deth Kannon`
- `Krooz Missiles`
- `Lifta-Droppa`
- `Twin Soopagun`
- `Ultra-Lobba`

## Formation Applicability

- `Gargant`: all 14 options above
- `Great Gargant`: all 14 options above
- `Supa Stompa Mob`: `Gatling Cannon`, `Loadz o' Guns`, `Mega-Choppa`, `Snappa`, `Mega-Lobba`, `Soopagun`, `Supa-Zzap-Gun`

## Profile Resolution Results

All selectable Gargant / Supa Stompa weapon option names currently resolve to profiles.

- `Gatling Cannon` -> resolved
- `Krusha` -> resolved
- `Loadz o' Guns` -> resolved
- `Mega-Choppa` -> resolved
- `Snappa` -> resolved
- `Mega-Lobba` -> resolved
- `Soopagun` -> resolved
- `Supa-Lifta-Droppa` -> resolved
- `Supa-Zzap-Gun` -> resolved
- `Deth Kannon` -> resolved
- `Krooz Missiles` -> resolved
- `Lifta-Droppa` -> resolved
- `Twin Soopagun` -> resolved
- `Ultra-Lobba` -> resolved

## Missing Profiles Or Aliases

- None

## Notes

- The builder stores final selected replacements in `formation.upgrades`, so the current selection can be used to build the final displayed loadout.
- Gargant-family rendering now merges selected weapon profiles into the base war engine card instead of only listing a few hardcoded upgrade cards.
