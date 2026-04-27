# Dark Angels Audit

- Total formations found: 21
- Total upgrades found: 15
- Total profiles found: 38

## Profiles below high confidence

- None.

## Parse warnings

- `Ravenwing Land Speeder`: The printed `and (small arms)` line was represented as a separate Small Arms weapon entry.
- `Land Raider Ares`: The printed `and (small arms)` line was represented as a separate Small Arms weapon entry.
- `Dark Angels Thunderhawk Transporter`: The printed type shorthand `AC/WE/B` was normalized to type `AC/WE` with speed `Bomber`.

## Formation names without an obvious direct profile match

- `Tacticals` -> `Tactical Marines`
- `Land Raiders` -> `Land Raider`
- `Scouts` -> `Sniper Scouts`
- `Assaults` -> `Dark Angels Assault Marines`
- `Devastators` -> `Dark Angels Devastators`
- `Predators` -> `Predator Destructor`
- `Siege Breachers` -> `Land Raider Ares`
- `Whirlwinds` -> `Whirlwind`
- `Ravenwing Attack` -> `Ravenwing Black Knights`, `Ravenwing Assault Bikes`, `Ravenwing Land Speeder`
- `Deathwing Overwatch` -> `Deathwing Cyclone Terminators`
- `Deathwing Dreadnoughts` -> `Deathwing Dreadnought`
- `Ravenwing Support` -> `Ravenwing Land Speeder Tornado` or `Ravenwing Land Speeder Venegance`
- `Relic Deimos` -> `Deimos Predator Executioner`, `Deimos Vindicator Laser Destroyer`
- `Relic Glaive` -> `Glaive`
- `Ravenwing Nephilim` -> `Ravenwing Nephilim Interceptor`
- `Thunderhawk Transporter` -> `Dark Angels Thunderhawk Transporter`
- `0-1 Swordwing` -> `Hunter Class Destroyer` or `Strike Cruiser`

## Source rows that could not be parsed safely

- No source rows required low-confidence reconstruction.
- A few profile rows used condensed printed notation such as `b-t-b`, `and (small arms)`, and `AC/WE/B`; these were normalized conservatively and recorded in parse warnings where relevant.
