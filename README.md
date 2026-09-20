<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV — curated open-source JEV projects, tools, models, and experiments, powered by BeatAPI" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/awesome-jev">Browse the live Awesome JEV gallery</a></strong> ·
  <a href="#featured-project-gallery">Featured projects</a> ·
  <a href="#all-44-projects">All 44 projects</a> ·
  <a href="./data/projects.json">JSON catalogue</a> ·
  <a href="./README.zh-CN.md">简体中文</a> ·
  <a href="./README.ja.md">日本語</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>A source-reviewed gallery of JEV projects, integrations, tools, open models, and experiments.</strong></p>

<p align="center">See where JEV chooses, scores, routes, or filters—while application code keeps control of execution.</p>

<h2 align="center">At a glance</h2>

<div align="center">
<table>
  <thead>
    <tr>
      <th align="center">Source-reviewed projects</th>
      <th align="center">Repositories ≥1K stars</th>
      <th align="center">Use-case groups</th>
      <th align="center">Snapshot</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>44</strong></td>
      <td align="center"><strong>29</strong></td>
      <td align="center"><strong>10</strong></td>
      <td align="center"><strong>2026-09-20</strong></td>
    </tr>
  </tbody>
</table>
</div>

<h2 align="center">Browse by category</h2>

<p align="center">
  <a href="#browser--computer-use-3">Browser & Computer Use · 3</a> ·
  <a href="#sdk-integrations-9">SDK Integrations · 9</a> ·
  <a href="#routing--optimization-4">Routing · 4</a> ·
  <a href="#open-models-8">Open Models · 8</a> ·
  <a href="#search--data-4">Search & Data · 4</a><br>
  <a href="#safety--review-5">Safety & Review · 5</a> ·
  <a href="#agent-workflows-3">Agent Workflows · 3</a> ·
  <a href="#interfaces--automation-3">Interfaces · 3</a> ·
  <a href="#developer-tools-2">Developer Tools · 2</a> ·
  <a href="#domain-tools-3">Domain Tools · 3</a>
</p>

## Featured project gallery

|  |  |
| --- | --- |
| [![Jev Ultrafast repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/browser-use/jev-ultrafast)](https://github.com/browser-use/jev-ultrafast) | [![LiteLLM repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/BerriAI/litellm)](https://github.com/BerriAI/litellm) |
| **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · Browser & computer use · 9.5K stars<br>Chooses a browser action and matching DOM target in one JEV request.<br>[Original case · 2.9M views](https://x.com/gregpr07/status/2100411066966749359) · [Fixed-commit evidence](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) | **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · Routing & optimization · 59.2K stars<br>Classifies request complexity before backend model routing.<br>[Fixed-commit evidence](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| [![LangChain repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) | [![Vercel AI SDK repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/vercel/ai)](https://github.com/vercel/ai) |
| **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · SDK integration · 146.7K stars<br>Exposes binary, classification, and ordinal JEV decisions inside Python workflows.<br>[Fixed-commit evidence](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) | **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · SDK integration · 26.9K stars<br>Maps choice, score, and yes/no questions onto a unified evaluate interface.<br>[Fixed-commit evidence](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts) |
| [![Laya repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/NandhaKishorM/laya)](https://github.com/NandhaKishorM/laya) | [![jegrep repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/can1357/jegrep)](https://github.com/can1357/jegrep) |
| **[Laya](https://github.com/NandhaKishorM/laya)** · Open model · 1.8K stars<br>Runs open-weight typed decisions locally with multilingual checkpoints.<br>[Hugging Face model](https://huggingface.co/convaiinnovations/laya) · [Fixed-commit evidence](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md) | **[jegrep](https://github.com/can1357/jegrep)** · Search & data<br>Searches live code trees semantically without building an index.<br>[Fixed-commit evidence](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs) |
| [![Cua repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/trycua/cua)](https://github.com/trycua/cua) | [![Agentgateway repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/agentgateway/agentgateway)](https://github.com/agentgateway/agentgateway) |
| **[Cua · JEV Use](https://github.com/trycua/cua)** · Browser & computer use · 24.7K stars<br>Selects an action ID from DOM or visual-region descriptions.<br>[Fixed-commit evidence](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) | **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · Safety & review · 4.9K stars<br>Scores jailbreak, harmful-content, and secret-leakage checks at the gateway.<br>[Fixed-commit evidence](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |
| [![NewsJack repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/elvisun/newsjack)](https://github.com/elvisun/newsjack) | [![QuantDinger repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/OpenByteInc/QuantDinger)](https://github.com/OpenByteInc/QuantDinger) |
| **[NewsJack](https://github.com/elvisun/newsjack)** · Agent workflow · 1.2K stars<br>Filters hundreds of live news items before an agent handles the selected opportunities.<br>[Original case · 583K views](https://x.com/elvissun/status/2100951347080421409) · [Fixed-commit evidence](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) | **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · Domain tool · 11.8K stars<br>Adds an evidence and risk gate before selected live-trading entries.<br>[Fixed-commit evidence](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

<p align="center"><strong><a href="https://beatapi.io/awesome-jev">Explore with filters and full descriptions →</a></strong></p>

## All 44 projects

### Browser & computer use (3)

[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) · [Cua · JEV Use](https://github.com/trycua/cua) · [Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop)

### SDK integrations (9)

[LangChain · TypeSafe](https://github.com/langchain-ai/langchain) · [Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio) · [Vercel AI SDK · TypeSafe](https://github.com/vercel/ai) · [Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai) · [Eliza · TypeSafe Client](https://github.com/elizaOS/eliza) · [LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs) · [Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig) · [Ax · TypeSafe Client](https://github.com/ax-llm/ax) · [Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant)

### Routing & optimization (4)

[LiteLLM · JEV Router](https://github.com/BerriAI/litellm) · [Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi) · [OpenChamber · JEV Router](https://github.com/openchamber/openchamber) · [Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate)

### Open models (8)

[SemIf](https://github.com/TheoLeeCJ/SemIf) · [Laya](https://github.com/NandhaKishorM/laya) · [NanoJev](https://github.com/TianyuCodings/NanoJev) · [Jevlike](https://github.com/vinnylarouge/jevlike) · [Kev 0.5B](https://github.com/jaredpalmer/kev) · [Nimble](https://github.com/bespokelabsai/nimble) · [LocalJev](https://github.com/githubnext/localjev) · [Jeff](https://github.com/logan-markewich/jeff)

### Search & data (4)

[Jev Experiments](https://github.com/dabit3/jev-experiments) · [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) · [jev-semgrep](https://github.com/uehaj/jev-semgrep) · [jegrep](https://github.com/can1357/jegrep)

### Safety & review (5)

[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway) · [Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm) · [Abide](https://github.com/coldteadotai/abide) · [jev-align](https://github.com/sutro-sh/jev-align) · [Jev Reviewer](https://github.com/choxos/jev-reviewer)

### Agent workflows (3)

[Jev Model Router](https://github.com/davila7/claude-code-templates) · [NewsJack](https://github.com/elvisun/newsjack) · [jev-gateway](https://github.com/vinilana/jev-gateway)

### Interfaces & automation (3)

[json-render · JEV Compose](https://github.com/vercel-labs/json-render) · [TipTour macOS](https://github.com/milind-soni/tiptour-macos) · [Live Jev](https://github.com/okinaaudio/live-jev)

### Developer tools (2)

[Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) · [Hono Jev Router](https://github.com/yusukebe/hono-jev-router)

### Domain tools (3)

[AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund) · [QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger) · [JEV Trader](https://github.com/jarrodwatts/jev-trader)

<details>
<summary><strong>Data, evidence, and selection notes</strong></summary>

- Every entry keeps a public repository, a fixed-commit evidence link, and a concrete JEV decision role.
- Directly related repositories at or above 1,000 stars are included after source review; smaller projects remain when they add a distinct pattern.
- Stars and views are discovery snapshots. `source-reviewed` does not mean BeatAPI reproduced benchmarks, audited security, or received maintainer endorsement.
- Machine-readable data: [`data/projects.json`](./data/projects.json)
- Corrections and additions: [`CONTRIBUTING.md`](./CONTRIBUTING.md)

</details>

## BeatAPI

**[Browse the live gallery](https://beatapi.io/awesome-jev)** ·
**[Create a BeatAPI key](https://beatapi.io/dashboard/apikeys)** ·
**[Contribute](./CONTRIBUTING.md)**

JEV is not claimed as a live BeatAPI endpoint until its model ID, pricing, and real response are verified.

---

<sub>Curated by <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> · <a href="https://beatapi.io/awesome-jev">Live gallery</a> · <a href="./NOTICE.md">License & notices</a></sub>
