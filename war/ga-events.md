# GA Events

## Events

### select_formation
Fires when a formation is successfully added to the army.

Parameters:
- list_id
- army_name
- formation_name
- formation_points
- formation_category
- action_source

### remove_formation
Fires when a formation is successfully removed from the army.

Parameters:
- list_id
- army_name
- formation_name
- formation_points
- action_source

### select_upgrade
Fires when an upgrade, individual, or option is successfully added to a formation.

Parameters:
- list_id
- army_name
- formation_name
- upgrade_name
- upgrade_points
- action_source

### remove_upgrade
Fires when an upgrade, individual, or option is successfully removed from a formation.

Parameters:
- list_id
- army_name
- formation_name
- upgrade_name
- upgrade_points
- action_source

## Recommended GA4 custom dimensions

Register these event-scoped custom dimensions in GA4:
- list_id
- army_name
- formation_name
- formation_category
- upgrade_name
- action_source

Do not register points as custom dimensions unless needed; use them as event parameters or metrics if your GA4 setup supports it.

## Notes

- Event tracking is skipped silently if `window.gtag` is unavailable.
- Custom army names and full force URLs are not sent.
- `clear_army` is not currently emitted because chooser.html does not expose a clear/reset army action.
