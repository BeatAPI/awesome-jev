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

**A source-reviewed catalogue of JEV projects, integrations, tools, open models,
and experiments—with primary discovery links and fixed-commit evidence kept together.**

JEV is most useful when it handles a bounded judgment—**choose, score, route, or
filter**—while ordinary code keeps control of thresholds, execution, and
fallbacks. This collection makes those system boundaries inspectable.

## At a glance

| Source-reviewed projects | Repositories ≥1K stars | Use-case groups | Snapshot |
| ---: | ---: | ---: | :--- |
| **44** | **29** | **10** | **2026-09-20** |

This refresh combines the existing X case batch with a new GitHub source audit.
Stars and views are discovery snapshots, not independent validation of runtime
or benchmark claims.

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
| **Browser & computer use** | Which action and target should be used next | [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast), [Cua](https://github.com/trycua/cua), [Agent Desktop](https://github.com/lahfir/agent-desktop) |
| **SDK integrations** | How frameworks expose typed JEV decisions | [LangChain](https://github.com/langchain-ai/langchain), [Vercel AI SDK](https://github.com/vercel/ai), [Pydantic AI](https://github.com/pydantic/pydantic-ai), [Composio](https://github.com/ComposioHQ/composio) |
| **Routing & optimization** | Which model, rule, or context deserves the next step | [LiteLLM](https://github.com/BerriAI/litellm), [OpenChamber](https://github.com/openchamber/openchamber), [Firstmate](https://github.com/kunchenguid/firstmate) |
| **Search & data** | Whether a file, passage, or record matches an intent | [jegrep](https://github.com/can1357/jegrep), [jev-semgrep](https://github.com/uehaj/jev-semgrep), [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) |
| **Open models** | How open weights reproduce the bounded decision interface | [Laya](https://huggingface.co/convaiinnovations/laya), [SemIf](https://github.com/TheoLeeCJ/SemIf), [NanoJev](https://github.com/TianyuCodings/NanoJev), [Jevlike](https://github.com/vinnylarouge/jevlike), [LocalJev](https://github.com/githubnext/localjev) |
| **Safety & evaluation** | Whether a rule, check, or evidence field is satisfied | [Agentgateway](https://github.com/agentgateway/agentgateway), [LangWatch](https://github.com/langwatch/langwatch), [Latitude](https://github.com/latitude-dev/latitude-llm), [Abide](https://github.com/coldteadotai/abide) |
| **Domain tools** | A bounded decision inside finance or another vertical workflow | [QuantDinger](https://github.com/OpenByteInc/QuantDinger), [AI Hedge Fund](https://github.com/virattt/ai-hedge-fund), [JEV Trader](https://github.com/jarrodwatts/jev-trader) |

## Featured projects

| Project | Practical pattern | Original case | Source |
| --- | --- | --- | --- |
| **Jev Ultrafast** | Chooses a browser action and DOM target in one JEV request | [@gregpr07 · 2.9M views](https://x.com/gregpr07/status/2100411066966749359) | [Repo](https://github.com/browser-use/jev-ultrafast) · [Evidence](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) |
| **LiteLLM · JEV Router** | Classifies request complexity before backend model routing | GitHub source | [Repo](https://github.com/BerriAI/litellm) · [Evidence](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| **jegrep** | Searches live code trees semantically without building an index | GitHub source | [Repo](https://github.com/can1357/jegrep) · [Evidence](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs) |
| **Laya** | Runs open-weight typed decisions locally with multilingual checkpoints | Hugging Face + GitHub | [Model](https://huggingface.co/convaiinnovations/laya) · [Evidence](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md) |
| **QuantDinger** | Puts a typed decision gate before selected live-trading entries | GitHub source | [Repo](https://github.com/OpenByteInc/QuantDinger) · [Evidence](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

**[Browse all 44 source-reviewed entries →](./data/projects.json)**

## Use the catalogue

The machine-readable catalogue is deliberately simple:

```bash
curl -s https://raw.githubusercontent.com/BeatAPI/awesome-jev/main/data/projects.json \
  | jq '.projects[] | {name, category, repoUrl, source, evidenceUrl}'
```

Each record includes its primary discovery source, repository metadata, localized
summaries, the JEV decision point, and a permalink to the exact source version reviewed.

## Selection standard

A project enters the main catalogue only when it has:

- a public repository with a clear JEV or JEV-compatible implementation;
- an original X case, GitHub source match, or another primary discovery source;
- fixed-commit evidence that future readers can inspect;
- a concrete, bounded decision role rather than a generic AI claim;
- one canonical entry per project after deduplication.

The GitHub refresh explicitly checks JEV names, API hosts, model IDs, SDK package
names, and the `/v1/systemone` route. Every directly related repository at or
above **1,000 stars** found by those lanes is included after source review;
smaller entries such as `jegrep` can still be included when they add a distinct,
useful implementation pattern.

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
