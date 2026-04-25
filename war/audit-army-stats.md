# Army Stats Audit

Generated on 2026-04-25 from `war/source-json`.

## Overview

- Army JSON files audited: 35
- Non-army/reference JSON files seen: 2
- Complete `army_stats` data: 35
- Missing `strategy_rating`: 0
- Missing `initiative_rating`: 0
- `initiative_rating` stored as simple scalar: 0
- `initiative_rating` stored as `entries` array: 35
- `initiative_rating` missing: 0
- Dedicated initiative note fields found under `army_stats.initiative_rating`: 0
- Initiative exceptions are encoded through `initiative_rating.entries[].scope` text rather than a separate notes field.

## 1. Armies With Complete army_stats Data

- `adeptus-mechanicus-knight-world.json` - House Lakar Knight World Defense Force: strategy 2; initiative `entries` array (single entry)
- `adeptus-mechanicus-skitarii-legion.json` - Gryphonne IV Skitarii Legion: strategy 2; initiative `entries` array (multi-entry)
- `adeptus-mechanicus-titan-legion.json` - War Griffons Titan Legion: strategy 3; initiative `entries` array (multi-entry)
- `blood-angels-v3.1-normalized-codex-style.json` - Blood Angels Army List: strategy 5; initiative `entries` array (single entry)
- `chaos-cultist-slaves-to-darkness.json` - Slaves to Darkness Chaos Cultist: strategy 1; initiative `entries` array (single entry)
- `chaos-cultist-stigmatus-covenant.json` - Stigmatus Covenant Chaos Cultist: strategy 2; initiative `entries` array (multi-entry)
- `chaos-space-marine-black-legion.json` - 13 th Black Crusade Black Legion: strategy 4; initiative `entries` array (multi-entry)
- `chaos-space-marine-emperors-children.json` - Emperor's Children Chaos Space Marine: strategy 4; initiative `entries` array (multi-entry)
- `chaos-space-marine-iron-warriors.json` - Iron Warriors Chaos Space Marine: strategy 4; initiative `entries` array (multi-entry)
- `chaos-space-marine-red-corsairs.json` - Red Corsairs: strategy 4; initiative `entries` array (multi-entry)
- `dark-eldar.json` - Kabal of Pain’s Way Dark Eldar: strategy 3; initiative `entries` array (multi-entry)
- `eldar-alaitoc.json` - Eldar Alaitoc Craftworld: strategy 4; initiative `entries` array (multi-entry)
- `eldar-biel-tan.json` - Eldar Biel-Tan Craftworld: strategy 4; initiative `entries` array (multi-entry)
- `eldar-iyanden.json` - Eldar Iyanden Craftworld: strategy 4; initiative `entries` array (multi-entry)
- `eldar-saim-hann.json` - Eldar Saim-Hann Craftworld Army List: strategy 4; initiative `entries` array (multi-entry)
- `imperial-guard-baran-siegemasters.json` - Baran Siegemasters Imperial Guard: strategy 1; initiative `entries` array (single entry)
- `imperial-guard-death-korps-of-krieg.json` - Death Korps of Krieg Imperial Guard: strategy 2; initiative `entries` array (multi-entry)
- `imperial-guard-minervan-tank-legion.json` - Minervan Tank Legion Imperial Guard: strategy 2; initiative `entries` array (multi-entry)
- `imperial-guard-steel-legion.json` - Armageddon Steel Legion Imperial Guard: strategy 2; initiative `entries` array (multi-entry)
- `inquisition-ordo-xenos.json` - Ordo Xenos Inquisition: strategy 5; initiative `entries` array (multi-entry)
- `necron.json` - Scarab Conflict Necron: strategy 2; initiative `entries` array (single entry)
- `ork-feral-orks.json` - Warlord Snagga Snagga’s Feral Ork Horde: strategy 3; initiative `entries` array (single entry)
- `ork-gargant-mob.json` - Orkimedes' Gargant Big Mob: strategy 3; initiative `entries` array (single entry)
- `ork-speed-freeks.json` - Burning Death Speed Freeks: strategy 3; initiative `entries` array (single entry)
- `ork-war-horde.json` - Ghazghkull Mag Uruk Thraka’s Ork War Horde: strategy 3; initiative `entries` array (single entry)
- `space-marine-codex-astartes.json` - Codex Astartes Space Marine: strategy 5; initiative `entries` array (multi-entry)
- `space-marine-imperial-fists.json` - Imperial Fists Space Marine: strategy 5; initiative `entries` array (multi-entry)
- `space-marine-raven-guard.json` - Raven Guard Space Marine: strategy 5; initiative `entries` array (multi-entry)
- `space-marine-salamanders.json` - Salamanders Space Marine: strategy 5; initiative `entries` array (multi-entry)
- `space-marine-scions-of-iron.json` - Scions of Iron Space Marine: strategy 5; initiative `entries` array (multi-entry)
- `space-marine-space-wolves.json` - Space Wolves Space Marine: strategy 5; initiative `entries` array (multi-entry)
- `space-marine-white-scars.json` - White Scars Space Marine: strategy 5; initiative `entries` array (multi-entry)
- `squat.json` - Grindel Stronghold Squat: strategy 2; initiative `entries` array (single entry)
- `tau.json` - Tau Third Phase Expansion: strategy 3; initiative `entries` array (multi-entry)
- `tyranid.json` - Hive Fleet Onachus Tyranid: strategy 1; initiative `entries` array (single entry)

## 2. Armies Missing strategy_rating

- None

## 3. Armies Missing initiative_rating

- None

## 4. Armies Where initiative_rating Has Unusual Structure

- `adeptus-mechanicus-skitarii-legion.json` - Gryphonne IV Skitarii Legion: multiple scoped initiative entries, scope uses inline exception text, scope text ends with trailing comma. Entries: `1+` for `All Mechanicus ally formations, except for Cataphractii,`; `2+` for `all other formations`.
- `adeptus-mechanicus-titan-legion.json` - War Griffons Titan Legion: multiple scoped initiative entries. Entries: `1+` for `Battle and Scout Titan formations`; `2+` for `All other formations`.
- `chaos-cultist-stigmatus-covenant.json` - Stigmatus Covenant Chaos Cultist: multiple scoped initiative entries. Entries: `2+` for `Tzeentch Doomwing, Tzeentch Firelord and Traitor Navy aircraft formations`; `3+` for `all other formations`.
- `chaos-space-marine-black-legion.json` - 13 th Black Crusade Black Legion: multiple scoped initiative entries. Entries: `2+` for `Chaos Navy formations`; `1+` for `All other formations`.
- `chaos-space-marine-emperors-children.json` - Emperor's Children Chaos Space Marine: multiple scoped initiative entries. Entries: `2+` for `Chaos Navy, Questor, Subjugator and Knight Pack formations`; `1+` for `All other formations`.
- `chaos-space-marine-iron-warriors.json` - Iron Warriors Chaos Space Marine: multiple scoped initiative entries. Entries: `2+` for `Chaos Navy formations`; `1+` for `All other formations`.
- `chaos-space-marine-red-corsairs.json` - Red Corsairs: multiple scoped initiative entries. Entries: `2+` for `Chaos Navy, Blight Drone, Blood Slaughterer, Brass Scorpion, Daemon Knight, Defiler and Silver Tower formations`; `1+` for `All other formations`.
- `dark-eldar.json` - Kabal of Pain’s Way Dark Eldar: multiple scoped initiative entries. Entries: `1+` for `Dark Eldar Kabals, Tormentor and Executor formations`; `2+` for `All other formations`.
- `eldar-alaitoc.json` - Eldar Alaitoc Craftworld: multiple scoped initiative entries. Entries: `1+` for `Avatar, Aspect Warrior, Phantom, Revenants and Warlock formations`; `2+` for `All other formations`.
- `eldar-biel-tan.json` - Eldar Biel-Tan Craftworld: multiple scoped initiative entries. Entries: `1+` for `Avatar, Aspect Warrior, Phantom, Revenants and Warlock formations`; `2+` for `All other formations`.
- `eldar-iyanden.json` - Eldar Iyanden Craftworld: multiple scoped initiative entries, scope text ends with trailing comma. Entries: `1+` for `Avatar, Aspect Warrior, Phantom, Revenants and Warlock formations, as well as the formation with the Wraithseer,`; `2+` for `All other formations`.
- `eldar-saim-hann.json` - Eldar Saim-Hann Craftworld Army List: multiple scoped initiative entries. Entries: `1+` for `Avatar, Shining Spears, Aspect Warrior and Revenants formations`; `2+` for `All other formations`.
- `imperial-guard-death-korps-of-krieg.json` - Death Korps of Krieg Imperial Guard: multiple scoped initiative entries. Entries: `1+` for `Titan Legion battlegroup formations`; `2+` for `All other formations`.
- `imperial-guard-minervan-tank-legion.json` - Minervan Tank Legion Imperial Guard: multiple scoped initiative entries. Entries: `1+` for `Titan Legion battlegroup formations`; `2+` for `All other formations`.
- `imperial-guard-steel-legion.json` - Armageddon Steel Legion Imperial Guard: multiple scoped initiative entries. Entries: `1+` for `Titan Legion battlegroup formations`; `2+` for `All other formations`.
- `inquisition-ordo-xenos.json` - Ordo Xenos Inquisition: multiple scoped initiative entries. Entries: `2+` for `Inducted Imperial Guard and Inquisitorial support formations, and Imperial Navy aircraft formations`; `1+` for `All other formations`.
- `necron.json` - Scarab Conflict Necron: fallback-only initiative entry. Entries: `1+` for `All other formations`.
- `space-marine-codex-astartes.json` - Codex Astartes Space Marine: multiple scoped initiative entries. Entries: `2+` for `Imperial Navy aircraft formations`; `1+` for `All other formations`.
- `space-marine-imperial-fists.json` - Imperial Fists Space Marine: multiple scoped initiative entries. Entries: `2+` for `Imperial Fist static defence formations`; `1+` for `All other formations`.
- `space-marine-raven-guard.json` - Raven Guard Space Marine: multiple scoped initiative entries. Entries: `2+` for `Imperial Navy aircraft formations`; `1+` for `All other formations`.
- `space-marine-salamanders.json` - Salamanders Space Marine: multiple scoped initiative entries. Entries: `2+` for `Imperial Navy aircraft formations`; `1+` for `All other formations`.
- `space-marine-scions-of-iron.json` - Scions of Iron Space Marine: multiple scoped initiative entries. Entries: `2+` for `Imperial Navy aircraft formations`; `1+` for `All other formations`.
- `space-marine-space-wolves.json` - Space Wolves Space Marine: multiple scoped initiative entries. Entries: `2+` for `Blood Claws, Fenrisian Wolves, Skyclaws, Swiftclaws and Imperial Navy aircraft formations`; `1+` for `All other formations`.
- `space-marine-white-scars.json` - White Scars Space Marine: multiple scoped initiative entries. Entries: `2+` for `Imperial Navy aircraft formations`; `1+` for `All other formations`.
- `tau.json` - Tau Third Phase Expansion: multiple scoped initiative entries. Entries: `1+` for `Crisis Battlesuit Cadre and Manta Dropship formations`; `2+` for `All other formations`.

## 5. Armies Where Referenced Special Rule Text Could Not Be Found

No file uses a dedicated initiative note field, so this section checks referenced rule names inside `special_rules` text that may be needed to explain initiative exceptions or army-level summaries.

- `adeptus-mechanicus-knight-world.json` - House Lakar Knight World Defense Force: missing referenced rule text for `Fortified Positions`
- `chaos-cultist-slaves-to-darkness.json` - Slaves to Darkness Chaos Cultist: missing referenced rule text for `Augmented Summoning`, `Daemonic Focus`
- `chaos-cultist-stigmatus-covenant.json` - Stigmatus Covenant Chaos Cultist: missing referenced rule text for `Augmented Summoning`, `Daemonic Focus`
- `chaos-space-marine-black-legion.json` - 13 th Black Crusade Black Legion: missing referenced rule text for `Augmented Summoning`, `Daemonic Focus`
- `chaos-space-marine-emperors-children.json` - Emperor's Children Chaos Space Marine: missing referenced rule text for `Augmented Summoning`, `Daemonic Focus`
- `chaos-space-marine-red-corsairs.json` - Red Corsairs: missing referenced rule text for `Augmented Summoning`, `Daemonic Focus`
- `dark-eldar.json` - Kabal of Pain’s Way Dark Eldar: missing referenced rule text for `Hit & Run Tactics`, `Fleet of Foot`, `Dark Eldar Technology`
- `eldar-alaitoc.json` - Eldar Alaitoc Craftworld: missing referenced rule text for `Hit & Run Tactics`, `Farsight`, `Eldar Technology`
- `eldar-biel-tan.json` - Eldar Biel-Tan Craftworld: missing referenced rule text for `Hit & Run Tactics`, `Farsight`, `Eldar Technology`
- `eldar-iyanden.json` - Eldar Iyanden Craftworld: missing referenced rule text for `Hit & Run Tactics`, `Farsight`, `Eldar Technology`, `May Not Garrison`
- `eldar-saim-hann.json` - Eldar Saim-Hann Craftworld Army List: missing referenced rule text for `Hit & Run Tactics`, `Farsight`, `Eldar Technology`
- `imperial-guard-baran-siegemasters.json` - Baran Siegemasters Imperial Guard: missing referenced rule text for `Commissars`
- `imperial-guard-death-korps-of-krieg.json` - Death Korps of Krieg Imperial Guard: missing referenced rule text for `Commissars and Fortified Positions`
- `imperial-guard-minervan-tank-legion.json` - Minervan Tank Legion Imperial Guard: missing referenced rule text for `Commissars`
- `necron.json` - Scarab Conflict Necron: missing referenced rule text for `Implacable Advance`, `Phase Out`, `Necron Technology`
- `ork-feral-orks.json` - Warlord Snagga Snagga’s Feral Ork Horde: missing referenced rule text for `Mob Rule`, `Power of the Waaagh!`
- `ork-gargant-mob.json` - Orkimedes' Gargant Big Mob: missing referenced rule text for `Mob Rule`, `Power of the Waaagh!`
- `ork-speed-freeks.json` - Burning Death Speed Freeks: missing referenced rule text for `Mob Rule`, `Power of the Waaagh!`
- `ork-war-horde.json` - Ghazghkull Mag Uruk Thraka’s Ork War Horde: missing referenced rule text for `Mob Rule`, `Power of the Waaagh!`
- `space-marine-imperial-fists.json` - Imperial Fists Space Marine: missing referenced rule text for `Fortified Positions`
- `space-marine-salamanders.json` - Salamanders Space Marine: missing referenced rule text for `Space Marine Transports`
- `tau.json` - Tau Third Phase Expansion: missing referenced rule text for `Coordinated Fire`, `Tau Technology`
- `tyranid.json` - Hive Fleet Onachus Tyranid: missing referenced rule text for `Xeno-Biology`, `Xeno-Sociology`

## 6. Suggested Generated Summary Text

- **House Lakar Knight World Defense Force** (`adeptus-mechanicus-knight-world.json`): Strategy 2. Initiative 2+ for all formations.
- **Gryphonne IV Skitarii Legion** (`adeptus-mechanicus-skitarii-legion.json`): Strategy 2. Initiative 1+ for Mechanicus ally formations except Cataphractii; 2+ for all other formations.
- **War Griffons Titan Legion** (`adeptus-mechanicus-titan-legion.json`): Strategy 3. Initiative 1+ for Battle and Scout Titan formations; 2+ for all other formations.
- **Blood Angels Army List** (`blood-angels-v3.1-normalized-codex-style.json`): Strategy 5. Initiative 1+ for all formations.
- **Slaves to Darkness Chaos Cultist** (`chaos-cultist-slaves-to-darkness.json`): Strategy 1. Initiative 2+ for all formations.
- **Stigmatus Covenant Chaos Cultist** (`chaos-cultist-stigmatus-covenant.json`): Strategy 2. Initiative 2+ for Tzeentch Doomwing, Tzeentch Firelord, and Traitor Navy aircraft formations; 3+ for all other formations.
- **13 th Black Crusade Black Legion** (`chaos-space-marine-black-legion.json`): Strategy 4. Initiative 2+ for Chaos Navy formations; 1+ for all other formations.
- **Emperor's Children Chaos Space Marine** (`chaos-space-marine-emperors-children.json`): Strategy 4. Initiative 2+ for Chaos Navy, Questor, Subjugator, and Knight Pack formations; 1+ for all other formations.
- **Iron Warriors Chaos Space Marine** (`chaos-space-marine-iron-warriors.json`): Strategy 4. Initiative 2+ for Chaos Navy formations; 1+ for all other formations.
- **Red Corsairs** (`chaos-space-marine-red-corsairs.json`): Strategy 4. Initiative 2+ for Chaos Navy, Blight Drone, Blood Slaughterer, Brass Scorpion, Daemon Knight, Defiler, and Silver Tower formations; 1+ for all other formations.
- **Kabal of Pain’s Way Dark Eldar** (`dark-eldar.json`): Strategy 3. Initiative 1+ for Dark Eldar Kabal, Tormentor, and Executor formations; 2+ for all other formations.
- **Eldar Alaitoc Craftworld** (`eldar-alaitoc.json`): Strategy 4. Initiative 1+ for Avatar, Aspect Warrior, Phantom, Revenant, and Warlock formations; 2+ for all other formations.
- **Eldar Biel-Tan Craftworld** (`eldar-biel-tan.json`): Strategy 4. Initiative 1+ for Avatar, Aspect Warrior, Phantom, Revenant, and Warlock formations; 2+ for all other formations.
- **Eldar Iyanden Craftworld** (`eldar-iyanden.json`): Strategy 4. Initiative 1+ for Avatar, Aspect Warrior, Phantom, Revenant, and Warlock formations, plus the formation with the Wraithseer; 2+ for all other formations.
- **Eldar Saim-Hann Craftworld Army List** (`eldar-saim-hann.json`): Strategy 4. Initiative 1+ for Avatar, Shining Spears, Aspect Warrior, and Revenant formations; 2+ for all other formations.
- **Baran Siegemasters Imperial Guard** (`imperial-guard-baran-siegemasters.json`): Strategy 1. Initiative 2+ for all formations.
- **Death Korps of Krieg Imperial Guard** (`imperial-guard-death-korps-of-krieg.json`): Strategy 2. Initiative 1+ for Titan Legion battlegroup formations; 2+ for all other formations.
- **Minervan Tank Legion Imperial Guard** (`imperial-guard-minervan-tank-legion.json`): Strategy 2. Initiative 1+ for Titan Legion battlegroup formations; 2+ for all other formations.
- **Armageddon Steel Legion Imperial Guard** (`imperial-guard-steel-legion.json`): Strategy 2. Initiative 1+ for Titan Legion battlegroup formations; 2+ for all other formations.
- **Ordo Xenos Inquisition** (`inquisition-ordo-xenos.json`): Strategy 5. Initiative 2+ for inducted Imperial Guard, Inquisitorial support, and Imperial Navy aircraft formations; 1+ for all other formations.
- **Scarab Conflict Necron** (`necron.json`): Strategy 2. Initiative 1+ for all other formations. Source looks incomplete because no primary exception entry is present.
- **Warlord Snagga Snagga’s Feral Ork Horde** (`ork-feral-orks.json`): Strategy 3. Initiative 3+ for all formations.
- **Orkimedes' Gargant Big Mob** (`ork-gargant-mob.json`): Strategy 3. Initiative 3+ for all formations.
- **Burning Death Speed Freeks** (`ork-speed-freeks.json`): Strategy 3. Initiative 3+ for all formations.
- **Ghazghkull Mag Uruk Thraka’s Ork War Horde** (`ork-war-horde.json`): Strategy 3. Initiative 3+ for all formations.
- **Codex Astartes Space Marine** (`space-marine-codex-astartes.json`): Strategy 5. Initiative 2+ for Imperial Navy aircraft formations; 1+ for all other formations.
- **Imperial Fists Space Marine** (`space-marine-imperial-fists.json`): Strategy 5. Initiative 2+ for Imperial Fist static defence formations; 1+ for all other formations.
- **Raven Guard Space Marine** (`space-marine-raven-guard.json`): Strategy 5. Initiative 2+ for Imperial Navy aircraft formations; 1+ for all other formations.
- **Salamanders Space Marine** (`space-marine-salamanders.json`): Strategy 5. Initiative 2+ for Imperial Navy aircraft formations; 1+ for all other formations.
- **Scions of Iron Space Marine** (`space-marine-scions-of-iron.json`): Strategy 5. Initiative 2+ for Imperial Navy aircraft formations; 1+ for all other formations.
- **Space Wolves Space Marine** (`space-marine-space-wolves.json`): Strategy 5. Initiative 2+ for Blood Claws, Fenrisian Wolves, Skyclaws, Swiftclaws, and Imperial Navy aircraft formations; 1+ for all other formations.
- **White Scars Space Marine** (`space-marine-white-scars.json`): Strategy 5. Initiative 2+ for Imperial Navy aircraft formations; 1+ for all other formations.
- **Grindel Stronghold Squat** (`squat.json`): Strategy 2. Initiative 2+ for all formations.
- **Tau Third Phase Expansion** (`tau.json`): Strategy 3. Initiative 1+ for Crisis Battlesuit Cadre and Manta Dropship formations; 2+ for all other formations.
- **Hive Fleet Onachus Tyranid** (`tyranid.json`): Strategy 1. Initiative 1+ for all Tyranid formations.

## Notes

- `tournament-pack-army-rules.json` and `tournament-pack-global-rules.json` are reference/rules datasets rather than army source files; they do not contain `metadata.army_name` or `army_stats`.
- Every actual army source file currently stores initiative as an `entries` array, even when the army effectively has a single universal initiative value.
- No audited army source file stores initiative as a plain scalar value today.
- For Print v2 summary generation, a renderer should handle at least three cases:
1. single universal entry such as `All formations` or `All Tyranid formations`
2. multiple scoped entries with an `All other formations` fallback
3. malformed or ambiguous cases such as fallback-only entries or scopes with trailing punctuation
