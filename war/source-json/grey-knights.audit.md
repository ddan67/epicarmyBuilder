# Grey Knights Source Audit

- Total formations found: 18
- Total upgrades found: 11
- Total profiles found: 33

## Profiles With `parse_confidence` Lower Than High

- `Death Cult Assassin`: `medium`
  Source weapon traits include abbreviated `S`, preserved as printed.
- `Valkyrie`: `medium`
  Rocket Pod trait `SS` preserved as printed because the intended expansion is not explicit on the page.

## Parse Warnings

- `Eternal Warrior Formation - Grey Knight Dreadnoughts`: split from a single source row to preserve the Dreadnought option and its printed cost.
- `Eternal Warrior Formation - Nemesis Dreadknights`: split from a single source row to preserve the Nemesis Dreadknight option and its printed cost.
- `Inquisitorial Tank Company`: normalized from extracted PDF text `Inquisitional Tank Company`.
- `Death Cult Assassin`: source weapon trait `S` preserved as printed.
- `Grey Knight Dreadnought`: source profile includes mutually exclusive loadouts.
- `Valkyrie`: Rocket Pod trait `SS` preserved as printed.

## Formation Names Without An Obvious Single Matching Profile

- `Strike Squad`
- `Inquisitorial Warband`
- `Terminators`
- `0-1 Purifier Squad`
- `Eternal Warrior Formation - Grey Knight Dreadnoughts`
- `Eternal Warrior Formation - Nemesis Dreadknights`
- `Interceptor Squad`
- `Purgation Squad`
- `Land Raiders`
- `0-1 Strike Cruisers`
- `Storm Raven Flight`
- `Inquisitorial Storm Troopers`
- `Inquisitorial Hellhound Platoon`
- `Inquisitorial Tank Company`
- `Stormtalon Gunship`

These are formation/container names rather than exact one-to-one profile names, or they intentionally point at multiple possible profiles.

## Source Rows That Could Not Be Parsed Completely Safely

- `Death Cult Assassin` weapon trait line: `S, FS` on the reference sheet.
- `Valkyrie` Rocket Pod trait line: `1BP, D, SS` on the reference sheet.
- `Eternal Warrior Formation` cost row: one source row contains two unit alternatives with two separate printed costs.

## Cost Rows Requiring Special Handling

- `Eternal Warrior Formation`: represented as two separate formation entries to preserve:
  - `4 Grey Knight Dreadnoughts` at `225 points`
  - `4 Grey Knight Nemesis Dreadknights` at `375 points`
