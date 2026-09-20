<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV — curated open-source JEV projects, tools, models, and experiments, powered by BeatAPI" width="100%" />
</p>

<p align="center">
  <a href="#featured-projects">Featured projects</a> ·
  <a href="#explore-by-use-case">Use cases</a> ·
  <a href="./data/projects.json">JSON catalogue</a> ·
  <a href="./README.zh-CN.md">中文说明</a> ·
  <a href="https://beatapi.io/dashboard/apikeys">Create a BeatAPI key</a>
</p>

# Awesome JEV

**Curated JEV projects, tools, models, and experiments—with the original X case,
public repository, and fixed-commit source evidence kept together.**

JEV is most useful when it handles a bounded judgment—**choose, score, route, or
filter**—while ordinary code keeps control of thresholds, execution, and
fallbacks. This collection makes those system boundaries inspectable.

## At a glance

| Source-reviewed projects | Original-post views | Use-case groups | Snapshot |
| ---: | ---: | ---: | :--- |
| **17** | **2.13M** | **6** | **2026-09-20** |

Views are a historical X snapshot. They are useful discovery signals, not
independent validation of performance claims.

## Why these projects matter

```text
noisy state + bounded options
              │
              ▼
     JEV: choose · score · route · filter
              │
              ▼
 local policy: threshold · fallback · approval
              │
              ▼
       tool, model, search, or action
```

The recurring pattern is not “replace the whole agent.” It is to move one
frequent, well-bounded judgment onto a faster decision path and leave the final
action under explicit application policy.

## Explore by use case

| Area | What JEV decides | Selected projects |
| --- | --- | --- |
| **Agent workflows** | Which model, tool, or follow-up deserves the next expensive step | [NewsJack](https://github.com/elvisun/newsjack), [Jev Model Router](https://github.com/davila7/claude-code-templates), [jev-gateway](https://github.com/vinilana/jev-gateway) |
| **Developer tools** | Which route or context remains relevant | [Hono Jev Router](https://github.com/yusukebe/hono-jev-router), [Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) |
| **Search & data** | Whether a record matches an intent, class, or proposition | [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier), [Jev Experiments](https://github.com/dabit3/jev-experiments), [jev-semgrep](https://github.com/uehaj/jev-semgrep) |
| **Open models** | How a local or open classifier can serve the same bounded interface | [LocalJev](https://github.com/githubnext/localjev), [Kev 0.5B](https://github.com/jaredpalmer/kev), [Nimble](https://github.com/bespokelabsai/nimble), [Jeff](https://github.com/logan-markewich/jeff) |
| **Interfaces & automation** | Which UI or creative-tool action matches a short instruction | [Live Jev](https://github.com/okinaaudio/live-jev), [TipTour macOS](https://github.com/milind-soni/tiptour-macos) |
| **Safety & review** | Whether a rule, criterion, or evidence field is satisfied | [Abide](https://github.com/coldteadotai/abide), [jev-align](https://github.com/sutro-sh/jev-align), [Jev Reviewer](https://github.com/choxos/jev-reviewer) |

## Featured projects

| Project | Practical pattern | Original case | Source |
| --- | --- | --- | --- |
| **NewsJack** | Screens a full news feed before a PR agent expands the short list | [@elvissun · 583K views](https://x.com/elvissun/status/2100951347080421409) | [Repo](https://github.com/elvisun/newsjack) · [Evidence](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) |
| **Tax Document Classifier** | Maps extracted pages to a fixed IRS form catalogue | [@nedwize · 223K views](https://x.com/nedwize/status/2100973868324417852) | [Repo](https://github.com/kyotofin/tax-doc-classifier) · [Evidence](https://github.com/kyotofin/tax-doc-classifier/blob/6afcf701395466d7c936ec8178daf017b9d96b0c/src/backend.ts) |
| **LocalJev** | Serves local small models through a JEV-compatible interface | [@GitHubNext · 191K views](https://x.com/GitHubNext/status/2101193436816920798) | [Repo](https://github.com/githubnext/localjev) · [Evidence](https://github.com/githubnext/localjev/blob/3f23e36e1a3bff46c7e83e8e3781d3512bc82021/README.md) |
| **Kev 0.5B** | Runs a small trainable decision model on local hardware | [@jaredpalmer · 165K views](https://x.com/jaredpalmer/status/2101028325472841920) | [Repo](https://github.com/jaredpalmer/kev) · [Evidence](https://github.com/jaredpalmer/kev/blob/20fa6268c8ceb226530be2fb5266ab2c36b37724/README.md) |
| **Jev Model Router** | Maps a coding task to model and reasoning-effort policy | [@dani_avila7 · 139K views](https://x.com/dani_avila7/status/2101176629745561686) | [Repo](https://github.com/davila7/claude-code-templates) · [Evidence](https://github.com/davila7/claude-code-templates/blob/73fdf20e1c2548e438c37d31ad5ece5179298f58/cli-tool/components/mods/productivity/jev-model-router/hooks/jev-model-router.ts) |
| **Jev Experiments** | Adds intent judgment after retrieval instead of inspecting everything | [@dabit3 · 131K views](https://x.com/dabit3/status/2100960281769738433) | [Repo](https://github.com/dabit3/jev-experiments) · [Evidence](https://github.com/dabit3/jev-experiments/tree/c469e5bfdc73eb3e1999bba2569e66b579a970fd/agent-assist) |
| **Hono Jev Router** | Routes HTTP requests by meaning across declared handlers | [@yusukebe · 113K views](https://x.com/yusukebe/status/2100871075743859182) | [Repo](https://github.com/yusukebe/hono-jev-router) · [Evidence](https://github.com/yusukebe/hono-jev-router/blob/04f6e103e1397bca659ab85c042011a1f14b679d/README.md) |
| **Abide** | Checks coding-agent turns against semantic project rules | [@OhansEmmanuel · 108K views](https://x.com/OhansEmmanuel/status/2101034822760288452) | [Repo](https://github.com/coldteadotai/abide) · [Evidence](https://github.com/coldteadotai/abide/blob/ec3352e873163b74aca1ac9cf3bd0ea69a97723a/README.md) |

**[Browse all 17 source-reviewed entries →](./data/projects.json)**

## Use the catalogue

The machine-readable catalogue is deliberately simple:

```bash
curl -s https://raw.githubusercontent.com/BeatAPI/awesome-jev/main/data/projects.json \
  | jq '.projects[] | {name, category, repoUrl, xUrl, evidenceUrl}'
```

Each record includes the original X case, captured views, repository metadata,
localized summaries, the JEV decision point, and a permalink to the exact source
version reviewed.

## Selection standard

A project enters the main catalogue only when it has:

- a public repository with a clear JEV or JEV-compatible implementation;
- an original X case or another primary discovery source;
- fixed-commit evidence that future readers can inspect;
- a concrete, bounded decision role rather than a generic AI claim;
- one canonical entry per author and project after deduplication.

`source-reviewed` does **not** mean we ran the project, reproduced its benchmark,
audited its security, or received an endorsement from its maintainers.

## Contributing

Additions and evidence corrections are welcome. Read
[`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening a pull request.

## BeatAPI

[BeatAPI](https://beatapi.io) is the professional capability layer for any
agent. One platform key gives developers access to the BeatAPI capabilities
available today.

**[Create a BeatAPI key →](https://beatapi.io/dashboard/apikeys)**

This repository does not claim that JEV is currently live in BeatAPI. JEV access
will be announced only after its endpoint, model ID, pricing, and a real response
are verified.

## License

BeatAPI-authored catalogue text and repository assets are MIT licensed. Listed
projects retain their own licenses. See [`NOTICE.md`](./NOTICE.md).

---

<sub>Curated and maintained by <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> · <a href="https://beatapi.io">beatapi.io</a></sub>
