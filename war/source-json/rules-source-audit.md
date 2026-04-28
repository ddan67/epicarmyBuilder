# Rules Source Audit

Scope: all `war/source-json/*.json` army files except `tournament-pack-army-rules.json` and `tournament-pack-global-rules.json`.

Summary:
- Files checked: 41
- No `special_rules` entries: 5
- Pointer/stub style `special_rules` that appear to resolve to shared army-pack rules: 19
- Pointer/stub style `special_rules` with no exact army-pack match and worth a later look: 2
- Substantial `special_rules` text already represented in `tournament-pack-army-rules.json`: 9
- Substantial `special_rules` text not represented in `tournament-pack-army-rules.json`: 6

## No `special_rules`

- `adeptus-mechanicus-skitarii-legion.json`
- `adeptus-mechanicus-titan-legion.json`
- `chaos-space-marine-iron-warriors.json`
- `imperial-guard-steel-legion.json`
- `squat.json`

## Pointer / stub, represented in shared army-pack rules

- `chaos-cultist-slaves-to-darkness.json`
- `chaos-cultist-stigmatus-covenant.json`
- `chaos-space-marine-black-legion.json`
- `chaos-space-marine-emperors-children.json`
- `chaos-space-marine-red-corsairs.json`
- `dark-eldar.json`
- `eldar-alaitoc.json`
- `eldar-biel-tan.json`
- `eldar-iyanden.json`
- `eldar-saim-hann.json`
- `imperial-guard-baran-siegemasters.json`
- `imperial-guard-death-korps-of-krieg.json`
- `imperial-guard-minervan-tank-legion.json`
- `necron.json`
- `ork-feral-orks.json`
- `ork-gargant-mob.json`
- `ork-speed-freeks.json`
- `ork-war-horde.json`
- `tau.json`

## Pointer / stub, no exact army-pack match

- `adeptus-mechanicus-knight-world.json`
  - `special_rules` is only a short pointer to Fortified Positions; there is no exact matching army-pack entry by name.
- `tyranid.json`
  - `special_rules` is only a short pointer to Xeno-Biology / Mobility / Swarming; there is no exact matching army-pack entry by name.

## Substantial text, already represented in shared army-pack rules

- `inquisition-ordo-xenos.json`
  - Full `They Shall Know No Fear` text is present and matches the shared Space Marine-family rule.
- `sautekh-necron.json`
  - Full named rules are already split out in the shared army-pack file: `Necron Technology`, `Necron`, `Sautekh Portals`, `Living Metal`, `Implacable Advance`, `Ponderous`, `Necron Reserves`, and `Garrisons`.
- `space-marine-codex-astartes.json`
  - Full `They Shall Know No Fear` text is already represented in the shared army-pack file.
- `space-marine-imperial-fists.json`
  - Full `They Shall Know No Fear` text is already represented in the shared army-pack file.
- `space-marine-raven-guard.json`
  - Full `They Shall Know No Fear` text is already represented in the shared army-pack file.
- `space-marine-salamanders.json`
  - Full `They Shall Know No Fear` text is already represented in the shared army-pack file.
- `space-marine-scions-of-iron.json`
  - Full `They Shall Know No Fear` text is already represented in the shared army-pack file.
- `space-marine-space-wolves.json`
  - Full `They Shall Know No Fear` text is already represented in the shared army-pack file.
- `space-marine-white-scars.json`
  - Full `They Shall Know No Fear` text is already represented in the shared army-pack file.

## Substantial text, not represented in `tournament-pack-army-rules.json`

- `blood-angels-v3.1-normalized-codex-style.json`
  - Contains full `Space Marine Special Rules`, `Lucifer Pattern Engines`, and `Red Thirst` text that is not present in the shared army-pack file.
- `blood-angels.json`
  - Contains full `Space Marine Transport`, `They Shall Know No Fear`, `Lucifer Pattern Engines`, `Red Thirst`, and `Statement of Theme` text; only part of that overlaps the shared army-pack/global rules, so the file still carries substantial non-shared rule text.
- `dark-angels.json`
  - Contains full `Unforgiven`, `Hunt for the Fallen`, `Teleport Homer`, `Coordinated Teleport`, `Deathwing`, `Space Marine Transports`, and `ATSKNF` text; this is not fully represented in the shared army-pack file.
- `grey-knights.json`
  - Contains full `Grey Knights Transport`, `They Shall Know No Fear`, and `Into the Maw of the Beast` text; this is not fully represented in the shared army-pack file.
- `sisters-of-battle.json`
  - Contains full `Act of Faith` text; not represented in the shared army-pack file.
- `tau-viorla.json`
  - Contains full `Markerlights and Barrage Attacks`, `Coordinated Fire`, `Tau Deflector Shield`, `Guided Missiles`, `Markerlights`, and `Tau Jet Packs` text; this is not fully represented in the shared army-pack file.

## Manual follow-up candidates

- `adeptus-mechanicus-knight-world.json`
- `tyranid.json`
- `blood-angels-v3.1-normalized-codex-style.json`
- `blood-angels.json`
- `dark-angels.json`
- `grey-knights.json`
- `sisters-of-battle.json`
- `tau-viorla.json`

## Follow-up comparison

### `blood-angels-v3.1-normalized-codex-style.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Space Marine Special Rules` | No | Short pointer stub | Leave in army file; manual review if this file stays in use. |
| `Lucifer Pattern Engines` | No | List-specific | Needs manual review. |
| `Red Thirst` | No | List-specific | Needs manual review; likely candidate for shared army-rules coverage if other Blood Angels sources will reference it. |

### `blood-angels.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Special Rules` | No | Pointer stub | Leave in army file. |
| `Space Marine Transport` | No exact shared entry | Related to `Space Marine Transports`, but not identical by name | Needs manual review. |
| `They Shall Know No Fear` | Yes | Near-identical / shorter | Remove duplicate from the army file later if the shared pack is the source of truth. |
| `Lucifer Pattern Engines` | No | List-specific | Needs manual review. |
| `Red Thirst` | No | List-specific | Needs manual review. |
| `Statement of Theme` | No | List-specific | Leave in army file. |

### `dark-angels.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Unforgiven` | No | List-specific | Needs manual review. |
| `Optional Special Victory Condition - Hunt for the Fallen` | No | List-specific | Needs manual review. |
| `Teleport Homer` | No | List-specific | Needs manual review. |
| `Coordinated Teleport` | No | List-specific | Needs manual review. |
| `Deathwing` | No | List-specific | Needs manual review. |
| `Space Marine Transports` | Yes | Near-identical | Remove duplicate from the army file later if the shared pack is authoritative. |
| `ATSKNF` | Yes, via `They Shall Know No Fear` | Near-identical / named alias only | Keep the army-file alias if the builder needs it; otherwise it can be collapsed to the shared rule. |

### `grey-knights.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Special Rules` | No | Pointer stub | Leave in army file. |
| `Grey Knights Transport` | No | List-specific | Needs manual review. |
| `They Shall Know No Fear` | Yes | Near-identical / shorter | Remove duplicate later if the shared pack drives printing. |
| `Into the Maw of the Beast` | No | List-specific | Needs manual review. |

### `sisters-of-battle.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Act of Faith` | No | List-specific | Needs manual review; likely belongs in shared army rules only if another Sororitas list will reuse it. |

### `tau-viorla.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Special Rules` | No | Pointer stub | Leave in army file. |
| `Markerlights and Barrage Attacks` | No | List-specific | Needs manual review. |
| `Coordinated Fire` | Yes | Identical | Remove duplicate later if the shared pack is authoritative. |
| `Tau Deflector Shield` | Only as part of `Tau Technology` text | Related, but not a separate named shared entry | Needs manual review. |
| `Guided Missiles` | Only as part of `Tau Technology` text | Related, but not a separate named shared entry | Needs manual review. |
| `Markerlights` | Only as part of `Tau Technology` text | Related, but not a separate named shared entry | Needs manual review. |
| `Tau Jet Packs` | Only as part of `Tau Technology` text | Related, but not a separate named shared entry | Needs manual review. |

### `adeptus-mechanicus-knight-world.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Special Rules` | No exact shared entry | Short pointer stub to `Fortified Positions` | Leave in army file for now; manual review if this army should be normalized into shared rules later. |

### `tyranid.json`

| Rule name | Already represented in shared packs | Relation | Recommended action |
| --- | --- | --- | --- |
| `Special Rules` | No exact shared entry | Short pointer stub to `Xeno-Biology` / `Xeno-Sociology` / `Mobility` / `Swarming` concepts | Leave in army file for now; manual review if the Tyranid family is later normalized into shared rules. |
