# haz — Hugo Agent Zero core

Shippable base library under `layouts/_partials/haz/`. Site-specific pieces live in sibling [`../child/`](../child/).

## Layout

```
haz/
  atomic/       Presentation components (atoms, molecules, organisms)
                templates/ pages/ — README stubs (tiers 4–5; assembly lives in helpers/)
  helpers/      Manifest operations — what runs atomic
    fn/         Callable partials (fn_partial, fn_tag_*, …)
      page/     Page-domain fns (fn_page_*)
    multipliers/ Manifest multiplier entry shells
    parents/    Shared orchestration (multiplier_parent, routers)
```

**Mental model:** `atomic/` = what gets rendered · `helpers/` = how it gets assembled via sysManifest.

## Migration status

**Phase 2 (current):** Manifest `part.file` and `settings.yaml` `row_partial` use `haz/*` paths. Layout stubs (`baseof`, `single`, …) call `haz/helpers/fn/*`. Legacy folders under `_partials/` still exist until phase 3 cleanup.

See [AGENTS.md](../../../AGENTS.md) and [.agents/notes.md](../../../.agents/notes.md).
