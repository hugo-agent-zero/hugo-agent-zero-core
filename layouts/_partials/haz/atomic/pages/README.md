# pages (atomic design tier 5)

**Classic role:** Templates filled with real content — the actual page a user sees.

**In HAZ, this tier is not stored here.** Pages are composed at render time from:

- **Hugo** — `content/`, page context (`.Title`, `.Content`, taxonomies, dates)
- **Layout stubs** — `layouts/single.html`, `list.html`, `home.html`, etc. (Hugo-required hooks)
- **Routes** — `child/data/system_manifest/routes.yaml` (path → layout child key)
- **Manifest** — which template/multiplier chain runs for that route/kind

Presentation pieces live under [`../atoms/`](../atoms/), [`../molecules/`](../molecules/), [`../organisms/`](../organisms/). Assembly lives under [`../../helpers/`](../../helpers/).
