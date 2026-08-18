# templates (atomic design tier 4)

**Classic role:** Layout shells — organisms arranged into page structure, usually with placeholder content.

**In HAZ, this tier is not stored here.** Template assembly lives in:

- [`../helpers/multipliers/`](../helpers/multipliers/) — manifest-driven `order` + child keys
- [`../helpers/parents/`](../helpers/parents/) — shared orchestration (`multiplier_parent`, routers)
- Manifest insts in `child/data/system_manifest/layouts.yaml` — which multiplier/wrapper runs, and in what order
- Wrapper atoms (e.g. `tag_tag_wrapper`, `tag_dl_list_wrapper`) — HTML shells with a `content` slot

Browse those paths for the “template layer” of the system.
