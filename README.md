<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV — curated open-source JEV projects, tools, models, and experiments, powered by BeatAPI" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/awesome-jev">Browse the live Awesome JEV gallery</a></strong> ·
  <a href="#featured-project-gallery">Featured projects</a> ·
  <a href="#all-projects">All 148 projects</a> ·
  <a href="./data/projects.json">JSON catalogue</a> ·
  <a href="./README.zh-CN.md">简体中文</a> ·
  <a href="./README.ja.md">日本語</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>A source-reviewed gallery of JEV-related projects with 50+ GitHub stars (one editorial exception) — integrations, tools, open models, experiments, and ecosystem resources.</strong></p>

<p align="center">We list source-reviewed JEV-related repositories at or above 50 stars, plus one editorial exception: Jev Reviewer (30 stars). See where JEV chooses, scores, routes, or filters—while application code keeps control of execution.</p>

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
      <td align="center"><strong>148</strong></td>
      <td align="center"><strong>34</strong></td>
      <td align="center"><strong>10</strong></td>
      <td align="center"><strong>2026-09-21</strong></td>
    </tr>
  </tbody>
</table>
</div>

<a id="categories"></a>
<h2 align="center">Browse by category</h2>

<p align="center">
  <a href="#browser-computer-use"><strong>Browser & computer use · 14</strong></a> ·
  <a href="#sdk-integrations"><strong>SDK integrations · 23</strong></a> ·
  <a href="#routing-optimization"><strong>Routing & optimization · 14</strong></a> ·
  <a href="#open-models"><strong>Open models · 17</strong></a> ·
  <a href="#search-data"><strong>Search & data · 9</strong></a><br>
  <a href="#safety-review"><strong>Safety & review · 12</strong></a> ·
  <a href="#agent-workflows"><strong>Agent workflows · 11</strong></a> ·
  <a href="#interfaces"><strong>Interfaces & automation · 8</strong></a> ·
  <a href="#developer-tools"><strong>Developer tools · 27</strong></a> ·
  <a href="#domain-tools"><strong>Domain tools · 13</strong></a>
</p>

## Featured project gallery

|  |  |
| --- | --- |
| [![Jev Ultrafast repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/browser-use/jev-ultrafast)](https://github.com/browser-use/jev-ultrafast) | [![LiteLLM repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/BerriAI/litellm)](https://github.com/BerriAI/litellm) |
| **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · Browser & computer use · 13.8K stars<br>Chooses a browser action and matching DOM target in one JEV request.<br>[Original case · 2.9M views](https://x.com/gregpr07/status/2100411066966749359) · [Fixed-commit evidence](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) | **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · Routing & optimization · 59.3K stars<br>Classifies request complexity before backend model routing.<br>[Fixed-commit evidence](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| [![LangChain repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) | [![Vercel AI SDK repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/vercel/ai)](https://github.com/vercel/ai) |
| **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · SDK integration · 146.8K stars<br>Exposes binary, classification, and ordinal JEV decisions inside Python workflows.<br>[Fixed-commit evidence](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) | **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · SDK integration · 26.9K stars<br>Maps choice, score, and yes/no questions onto a unified evaluate interface.<br>[Fixed-commit evidence](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts) |
| [![Laya repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/NandhaKishorM/laya)](https://github.com/NandhaKishorM/laya) | [![jegrep repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/can1357/jegrep)](https://github.com/can1357/jegrep) |
| **[Laya](https://github.com/NandhaKishorM/laya)** · Open model · 6.7K stars<br>Multilingual System 1 typed decisions in one forward pass, with a checkpoint router.<br>[Hugging Face model](https://huggingface.co/convaiinnovations/laya) · [Fixed-commit evidence](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md)| **[jegrep](https://github.com/can1357/jegrep)** · Search & data<br>Searches live code trees semantically without building an index.<br>[Fixed-commit evidence](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs) |
| [![Cua repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/trycua/cua)](https://github.com/trycua/cua) | [![Agentgateway repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/agentgateway/agentgateway)](https://github.com/agentgateway/agentgateway) |
| **[Cua · JEV Use](https://github.com/trycua/cua)** · Browser & computer use · 25.4K stars<br>Selects an action ID from DOM or visual-region descriptions.<br>[Fixed-commit evidence](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) | **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · Safety & review · 5.0K stars<br>Scores jailbreak, harmful-content, and secret-leakage checks at the gateway.<br>[Fixed-commit evidence](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |
| [![NewsJack repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/elvisun/newsjack)](https://github.com/elvisun/newsjack) | [![QuantDinger repository preview](https://opengraph.githubassets.com/awesome-jev-20260920/OpenByteInc/QuantDinger)](https://github.com/OpenByteInc/QuantDinger) |
| **[NewsJack](https://github.com/elvisun/newsjack)** · Agent workflow · 1.3K stars<br>Filters hundreds of live news items before an agent handles the selected opportunities.<br>[Original case · 583K views](https://x.com/elvissun/status/2100951347080421409) · [Fixed-commit evidence](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) | **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · Domain tool · 11.9K stars<br>Adds an evidence and risk gate before selected live-trading entries.<br>[Fixed-commit evidence](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

<p align="center"><strong><a href="https://beatapi.io/awesome-jev">Explore with filters and full descriptions →</a></strong></p>

<a id="all-projects"></a>
## All 148 projects

<a id="browser-computer-use"></a>
### Browser & computer use (14)

- **[Cua · JEV Use](https://github.com/trycua/cua)** · 25.4K stars — A computer-use example pairing Cua Driver observation and execution with bounded JEV choices. [Source](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11)
- **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · 13.8K stars — A browser agent that uses JEV to choose an action and matching DOM element, calling a text model only when input text is needed. [Source](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py)
- **[Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop)** · 1.4K stars — An optional JEV skill that chooses native desktop controls and actions from accessibility data. [Source](https://github.com/lahfir/agent-desktop/blob/7a8e4a10281c7319733aa200fd79501f34529716/scripts/jev/act.mjs)
- **[TypeSafe Computer Use](https://github.com/awlevin/typesafe-computer-use)** · 693 stars — Builds candidate actions from OCR and UI state for Jev to control macOS, calling a text model only when writing is needed. [Source](https://github.com/awlevin/typesafe-computer-use/blob/cc7b5066ae1a07b5e3182e8f87a9b5b6dfdcffc1/typesafe_computer_use/decide.py)
- **[Omg.dev](https://github.com/BennyKok/omg.dev)** · 533 stars — An omg.dev mobile testing script can use Jev to read the accessibility tree and choose the next interaction. [Source](https://github.com/BennyKok/omg.dev/blob/a00f56684a569ee417be787c148eaa9874946f2b/mobile/scripts/jev.ts)
- **[Jev CU](https://github.com/Sac-Y/Jev-cu)** · 519 stars — Computer-use helpers that call JEV to decide the next UI action. [Source](https://github.com/Sac-Y/Jev-cu/blob/38fb31de7dfe6209bbe6e04057c00c6e885ba577/scripts/jev-decide.mjs)
- **[Mobile JEV](https://github.com/droidrun/mobile-jev)** · 304 stars — Controls an Android phone through Mobilerun, with a web studio and CLI showing Jev decisions. [Source](https://github.com/droidrun/mobile-jev/blob/395fc222beac4f059f9a0beb337d114a2b066e99/scripts/mobile-agent/policy.mjs#L224)
- **[JEV Browser Use](https://github.com/wy-coliney/jev-browser-use)** · 291 stars — A Skill for Codex browser workflows: Jev chooses navigation, clicks, and scrolling while Codex handles text input and final checks. [Source](https://github.com/wy-coliney/jev-browser-use/blob/f14b60e0ae1ee90cd73eb6650e30a666a84c021a/skills/jev-browser-use/bridge.mjs)
- **[Third Hand](https://github.com/shhivv/third-hand)** · 270 stars — A Swift client stack that calls JEV while driving local computer-use style helpers. [Source](https://github.com/shhivv/third-hand/blob/430394b35dbb44ff8b303bf19da29b0828d92bd2/Sources/ThirdHand/JevClient.swift)
- **[JEV Browser](https://github.com/jkudish/jev-browser)** · 209 stars — Drives a browser from a task and URL, returning the final page, screenshot and action trace. [Source](https://github.com/jkudish/jev-browser/blob/8d90c51bedbe7cd07596bfaa532ded019a31d2a8/src/navigate.ts#L1)
- **[JEV Voice Browser](https://github.com/moritzkremb/jev-voice-browser)** · 187 stars — Controls a Playwright browser by sending incremental speech transcripts to Jev. [Source](https://github.com/moritzkremb/jev-voice-browser/blob/054db0f3dbf537af63a8117632d3f941ccd520e1/src/jev.js#L123)
- **[JEV Use](https://github.com/savka777/jev-use)** · 79 stars — A macOS computer-use harness that drives Accessibility controls without a vision model. [Source](https://github.com/savka777/jev-use/blob/8907f85354addfa3d2b78f6a462087e4c73310b8/README.md)
- **[TypeSafe Adblock](https://github.com/realZachi/typesafe-adblock)** · 64 stars — An experimental Chrome extension that asks Jev whether candidate DOM elements are ads, then highlights or removes them. [Source](https://github.com/realZachi/typesafe-adblock/blob/7e067d243d87b7fe4d511653c0ddcd77b9beee18/src/typesafe.js)
- **[JEV Browser](https://github.com/Ying-Kai-Liao/jev-browser)** · 62 stars — A browser automation library, CLI, and MCP server pairing LLM plans with JEV actions. [Source](https://github.com/Ying-Kai-Liao/jev-browser/blob/578cff6e701a131733d03256078bb559a45ad188/src/jev.mjs)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="sdk-integrations"></a>
### SDK integrations (23)

- **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · 146.8K stars — An optional JEV classifier integration for Python LangChain workflows. [Source](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py)
- **[Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio)** · 30.3K stars — A TypeSafe provider that uses JEV to choose among tools and bounded argument options. [Source](https://github.com/ComposioHQ/composio/blob/4b5920bf7aa55c8a44657b060d4bd25ce7b13a9a/ts/packages/providers/typesafe/src/decide.ts)
- **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · 26.9K stars — The AI SDK TypeSafe provider exposes JEV through the shared evaluate interface. [Source](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts)
- **[Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai)** · 20.1K stars — A TypeSafe model integration that maps supported structured outputs to JEV questions. [Source](https://github.com/pydantic/pydantic-ai/blob/c4898abb54dc25ae6f6aef208a4c0661b30a455e/pydantic_ai_slim/pydantic_ai/models/typesafe.py)
- **[Eliza · TypeSafe Client](https://github.com/elizaOS/eliza)** · 19.4K stars — An optional TypeSafe HTTP adapter in the Eliza agent operating system. [Source](https://github.com/elizaOS/eliza/blob/ebc808e3a67fb941e29153d89fc896524d32fe3c/packages/agent/src/services/typesafe/client.ts)
- **[LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs)** · 18.2K stars — A TypeSafeClassifier integration for JavaScript LangChain workflows. [Source](https://github.com/langchain-ai/langchainjs/blob/206d8b992bcf90ce7d46f2158f1ad85fc1d826c0/libs/providers/langchain-typesafe/src/classifier.ts)
- **[Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig)** · 8.7K stars — An experimental Rust crate for expressing JEV questions and answers with Rust types. [Source](https://github.com/0xPlaygrounds/rig/blob/2d16c1b25f6749b3a2cd841beddf767106495069/crates/rig-typesafeai/src/wire.rs#L40)
- **[Ax · TypeSafe Client](https://github.com/ax-llm/ax)** · 2.9K stars — A TypeSafe integration for boolean, finite-class, and native JEV signatures. [Source](https://github.com/ax-llm/ax/blob/5c43344f9ef3016db576fa2c3b59d48ef21b4d71/src/ax/ai/typesafe/client.ts#L1)
- **[Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant)** · 1.3K stars — An optional JEV provider that submits conversation state and explicit questions. [Source](https://github.com/vellum-ai/vellum-assistant/blob/ee5ba342719e72b67698c2e1a4a78837321d0b1d/assistant/src/providers/jev/client.ts)
- **[Req LLM](https://github.com/agentjido/req_llm)** · 580 stars — A TypeSafe provider for calling Jev through ReqLLM’s evaluate interface in Elixir. [Source](https://github.com/agentjido/req_llm/blob/9cb0ee7a0fea5f3520fc953911d352c93193615e/README.md)
- **[Simple JEV](https://github.com/featherless-ai/simple-jev)** · 428 stars — Adapter turning open LLM endpoints into Jev-compatible classification services without training a separate classifier head. [Source](https://github.com/featherless-ai/simple-jev/blob/0dd5396ffce671ab7c4bfc031506d8e558cf8d23/demos/jevpilot/src/simple-jev-api.js#L1-L85)
- **[Classifier.dev](https://github.com/mrmps/classifier-dev)** · 396 stars — A zero-shot classification service with JEV as its primary typed-decision backend. [Source](https://github.com/mrmps/classifier-dev/blob/33ca63816f2bc7e93c3f2d0715f7896500370739/src/jev.ts)
- **[Instructor Php](https://github.com/cognesy/instructor-php)** · 327 stars — A TypeSafe Decision driver within Instructor PHP’s Polyglot module. [Source](https://github.com/cognesy/instructor-php/blob/bb1160ce2360dcf1434788c46ee97809fe782ea3/README.md)
- **[Openai Scala Client](https://github.com/cequence-io/openai-scala-client)** · 248 stars — A dedicated TypeSafe module in a Scala client that supports multiple AI providers. [Source](https://github.com/cequence-io/openai-scala-client/blob/cfabe8842344da713615d0121a7804840649eb46/README.md)
- **[Openjev](https://github.com/razorback16/openjev)** · 245 stars — An independent System One decision server compatible with Jev’s API, running an open DiffusionGemma model. [Source](https://github.com/razorback16/openjev/blob/91d5005effcf8cc0ecccaa9538ceabbb130fef59/openjev/api.py)
- **[Pi Fabric](https://github.com/monotykamary/pi-fabric)** · 241 stars — Pi’s programmable runtime includes an optional Jev loop for observing state, making decisions and running bounded actions. [Source](https://github.com/monotykamary/pi-fabric/blob/2e5fcdd94cc364445b115756edefcaab24f68928/README.md)
- **[System One Adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python)** · 218 stars — A drop-in TypeSafeClient replacement that backs System One calls with ordinary LLM APIs. [Source](https://github.com/typesafe-ai/system-one-adapter-python/blob/adffc2eab300a4fa3c0e92252d4ffd6ceaa53700/src/system_one_adapter/_client.py)
- **[TypeSafe SDK Js](https://github.com/typesafe-ai/typesafe-sdk-js)** · 196 stars — The JavaScript and TypeScript SDK published by TypeSafe, with typed Jev requests and answers. [Source](https://github.com/typesafe-ai/typesafe-sdk-js/blob/66880ccded6cb642dc1809620c2b108c33730214/README.md)
- **[TypeSafe SDK Python](https://github.com/typesafe-ai/typesafe-sdk-python)** · 171 stars — Official TypeSafe Python SDK with synchronous and asynchronous clients for Jev System One, plus question and answer types. [Source](https://github.com/typesafe-ai/typesafe-sdk-python/blob/2ce5c65f13646cab6e6f782328194c9d85f3300a/src/typesafe_sdk/_core/client/sync/client.py#L206-L221)
- **[Runline](https://github.com/Michaelliv/runline)** · 162 stars — A TypeSafe plugin exposing Jev decisions as callable actions in Runline Agent JavaScript. [Source](https://github.com/Michaelliv/runline/blob/6bdddfa82cd95b6b9a07e57fd93a271ae83a0d1b/README.md)
- **[AI](https://github.com/hackclub/ai)** · 133 stars — A Jev forwarding endpoint in the Hack Club AI proxy, using its authentication, limits and usage logging. [Source](https://github.com/hackclub/ai/blob/a76ea2cb159f707a60107935a5b2e0dbdc7455f5/README.md)
- **[Effect Agent](https://github.com/danieljvdm/effect-agent)** · 121 stars — An Effect Agent TypeSafe decision provider for typed question sets and optional model selection. [Source](https://github.com/danieljvdm/effect-agent/blob/88005e497e9b627eeb16d670f278903c57601da9/README.md)
- **[Advocaat](https://github.com/pithings/advocaat)** · 88 stars — A small TypeScript client for asking Jev multiple typed questions about the same data. [Source](https://github.com/pithings/advocaat/blob/bc46287fc1102b95852a81d679c6e34a2c44f4a2/README.md)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="routing-optimization"></a>
### Routing & optimization (14)

- **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · 59.3K stars — LiteLLM can use JEV inside its complexity-based model router. [Source](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70)
- **[Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi)** · 32.2K stars — A coding agent with an optional TypeSafe judgment provider for bounded workflow decisions. [Source](https://github.com/can1357/oh-my-pi/blob/78b753124d11f8dd3ae73e2524125890ff7c977e/packages/ai/src/judgment/typesafe.ts#L4)
- **[OpenChamber · JEV Router](https://github.com/openchamber/openchamber)** · 10.2K stars — An optional automatic model router that classifies a message before model selection. [Source](https://github.com/openchamber/openchamber/blob/614d7f76e581a132a86575c03d3fa9aad5e624b6/packages/web/server/lib/routing/jev.js)
- **[Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate)** · 6.9K stars — An agent crew dispatcher that can match task briefs to rules with JEV. [Source](https://github.com/kunchenguid/firstmate/blob/4812db801628040b609dc25a2a8a91ed5efac662/bin/fm-dispatch-resolve.sh)
- **[Atomic](https://github.com/bastani-inc/atomic)** · 809 stars — An optional Jev decision backend in the Atomic coding Agent for bounded structured choices such as routing. [Source](https://github.com/bastani-inc/atomic/blob/33ca4ccb5f39488aeba67c0212a52a31cd14059d/packages/coding-agent/src/core/structured-output/jev.ts)
- **[Vexjoy Agent](https://github.com/notque/vexjoy-agent)** · 421 stars — An optional Jev routing path that matches VexJoy requests to specialist Agents, skills and workflows. [Source](https://github.com/notque/vexjoy-agent/blob/ab51ee7da567e84f72f76d73b6e7b83cec5ef060/README.md)
- **[Hermes JEV Skills](https://github.com/kerpopule/hermes-jev-skills)** · 335 stars — JEV-powered routing, memory, compaction, skill selection, and computer/browser use for Hermes agents. [Source](https://github.com/kerpopule/hermes-jev-skills/blob/a5d89014fbeca5102c5e7ccd3915afcd856505d8/jevkit/choose.py)
- **[WrongStack](https://github.com/WrongStack/WrongStack)** · 329 stars — An optional Jev dispatch classifier for choosing among WrongStack specialist Agents. [Source](https://github.com/WrongStack/WrongStack/blob/4cf97c0aa4f855751949ee8e99c719d06f4c26e0/README.md)
- **[JEV Router](https://github.com/gargpratyush/jev-router)** · 283 stars — A Claude Code and CLI proxy that asks Jev to score task complexity and pick a model from the account’s available set. [Source](https://github.com/gargpratyush/jev-router/blob/38da6b84ea01241bfc41fbddc0928d0f40a703f0/src/policy.mjs#L1-L63)
- **[Skillbox](https://github.com/kitze/skillbox)** · 220 stars — A self-hosted, versioned Agent skills library with optional Jev recommendations. [Source](https://github.com/kitze/skillbox/blob/d83ba4ecd254c8dfa6a759d1feb5141384e26a9e/README.md)
- **[JEV Codex Router](https://github.com/0xNatoshi/jev-codex-router)** · 125 stars — Uses Jev to classify each Codex turn, then applies local rules to choose the model, reasoning effort, and speed mode. [Source](https://github.com/0xNatoshi/jev-codex-router/blob/8292b519659280884627a962c826ac7721136a64/server/jev_server.py)
- **[JevRouter](https://github.com/BillionsBobby/JevRouter)** · 125 stars — A lightweight JEV router for models, tools, and subagents. [Source](https://github.com/BillionsBobby/JevRouter/blob/715970774ae8070e958e83ac9b1a780b32a9184c/src/provider.ts)
- **[Grok Bot JEV](https://github.com/Bodila51/grok-bot-jev)** · 68 stars — A JEV decision layer for Grok Bot with usage gates and skill templates. [Source](https://github.com/Bodila51/grok-bot-jev/blob/1583e09928c138aeac0aa89818c67ea41f08e807/README.md)
- **[Agent Router](https://github.com/nidhi-singh02/agent-router)** · 58 stars — A CLI that routes tasks to coding agents, models, and reasoning effort with JEV. [Source](https://github.com/nidhi-singh02/agent-router/blob/ad7571f38ea31ffbf3c28391f9e6d6383a7c08ba/packages/router/src/semantic/typesafe-client.ts)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="open-models"></a>
### Open models (17)

- **[Laya](https://github.com/NandhaKishorM/laya)** · 6.7K stars — Multilingual non-autoregressive System 1 decision engine: typed choice/score/noul in one forward pass, with a router across checkpoints. [Source](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md)
- **[SemIf](https://github.com/TheoLeeCJ/SemIf)** · 2.7K stars — An independent open-model implementation of the semantic-if interface pattern. [Source](https://github.com/TheoLeeCJ/SemIf/blob/ca3ba65f142967030ecb453346e94d6f476a69df/README.md)
- **[NanoJev](https://github.com/TianyuCodings/NanoJev)** · 1.7K stars — A 0.6B open replica of the JEV interface with parallel decisions and a training pipeline. [Source](https://github.com/TianyuCodings/NanoJev/blob/71a513bb0163b5634467842b523ee0c0ed6fb1c7/README.md)
- **[Kev 0.5B](https://github.com/jaredpalmer/kev)** · 1.5K stars — A tiny trainable Jev-like decision model based on Qwen2.5-0.5B. [Source](https://github.com/jaredpalmer/kev/blob/20fa6268c8ceb226530be2fb5266ab2c36b37724/README.md)
- **[Nimble](https://github.com/bespokelabsai/nimble)** · 1.4K stars — An open toolkit for local typed decisions, data curation, and evaluation. [Source](https://github.com/bespokelabsai/nimble/blob/35fe1f4fdbc64fa3dbbf5ac0042f3f5680c1ad28/README.md)
- **[Jevlike](https://github.com/vinnylarouge/jevlike)** · 1.1K stars — An independent starter model that scores a changing list of text or visual options in one pass. [Source](https://github.com/vinnylarouge/jevlike/blob/94f5fd1b0b11d52bbdfdf4e0ee6aa96b568f8452/README.md)
- **[LocalJev](https://github.com/githubnext/localjev)** · 657 stars — A local Jev-compatible server with benchmarks across small local models. [Source](https://github.com/githubnext/localjev/blob/3f23e36e1a3bff46c7e83e8e3781d3512bc82021/README.md)
- **[Splash](https://github.com/incoai/splash)** · 506 stars — A local Apple Silicon inference engine oriented around decision-style models. [Source](https://github.com/incoai/splash/blob/f53d5ab543a7accdc332c060fd594a693f33f529/README.md)
- **[Von](https://github.com/wfzyx/von)** · 297 stars — An open, local System One decision model with a JEV-compatible interface. [Source](https://github.com/wfzyx/von/blob/14d09878e89b103bfbbe641f9bed02e4d72c8830/README.md)
- **[OpenJEV SGLang](https://github.com/ekzhang/openjev-sglang)** · 245 stars — A JEV-compatible API endpoint built on open models with a prefill-only serving path. [Source](https://github.com/ekzhang/openjev-sglang/blob/604664a22b2cf44c6cc499e503092ae4e3c24c03/src/openjev/__init__.py)
- **[OpenJEV Verdict 2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** · 221 stars — A calibrated ~151M non-autoregressive local decision engine aiming at JEV-style typed answers. [Source](https://github.com/Heman10x-NGU/openJev-verdict-2.0/blob/a458733c5f43fc7f30b6e4381636cbfbf8437633/openjev/__init__.py)
- **[JEV Visual](https://github.com/hr98w/jev-visual)** · 192 stars — An educational JEV-like visual inference experiment on Apple Silicon with shared context scoring. [Source](https://github.com/hr98w/jev-visual/blob/19af545f096e8db4c4dd5d47aed42d92ec252111/jev_visual/scoring.py)
- **[Jeff](https://github.com/logan-markewich/jeff)** · 183 stars — A self-hosted Jev-compatible service powered by GliFormer. [Source](https://github.com/logan-markewich/jeff/blob/34b32f99a727c47b679adde33f4702a001e02979/README.md)
- **[Decider](https://github.com/Mapika/decider)** · 180 stars — One-pass typed decisions with calibrated probabilities, fine-tuned from Qwen3.5-2B. [Source](https://github.com/Mapika/decider/blob/c4daaac28af9fea95d627015cffa2dd5a5926ee6/decider/__init__.py)
- **[djev-spark](https://github.com/mmastrac/djev-spark)** · 152 stars — A DGX Spark container recipe for running DiffusionGemma NVFP4 structured decisions. [Source](https://github.com/mmastrac/djev-spark/blob/1444f3e927f83ba508e5b28a4fd4fdd9ecd0976b/README.md)
- **[Reflex](https://github.com/kshetrajna12/reflex)** · 91 stars — A small open decision model that recreates the JEV/System One interface on Qwen. [Source](https://github.com/kshetrajna12/reflex/blob/e21b3b23afdfeee7021a6604fa38f57e7ff5187f/README.md)
- **[Open JEV](https://github.com/daseinlabs/open-jev)** · 82 stars — An open JEV-style implementation with custom fine-tuning support. [Source](https://github.com/daseinlabs/open-jev/blob/8a4fbdf712e78c5ef45509a16aacb81facdd79be/README.md)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="search-data"></a>
### Search & data (9)

- **[Kody](https://github.com/kentcdodds/kody)** · 659 stars — Optional second-stage search: widen the hybrid pool, then Score-rerank candidates with Workers AI typesafe/jev. [Source](https://github.com/kentcdodds/kody/blob/ed9275186dc817530dd2289e62c208ac3809391f/packages/worker/src/mcp/tools/search-jev-rerank.ts)
- **[Jev Experiments](https://github.com/dabit3/jev-experiments)** · 352 stars — Small Jev experiments including intent search and agent-assist flows. [Source](https://github.com/dabit3/jev-experiments/tree/c469e5bfdc73eb3e1999bba2569e66b579a970fd/agent-assist)
- **[JEV Search](https://github.com/superagents-lab/jev-search)** · 352 stars — Searches the web with Jev choosing sources and time ranges, then ranking returned links. [Source](https://github.com/superagents-lab/jev-search/blob/522868762f0637b20bf533f136e930cceb83b9f3/src/lib/typesafe.ts#L48)
- **[Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier)** · 314 stars — Classifies extracted tax-document pages against a fixed IRS form catalogue. [Source](https://github.com/kyotofin/tax-doc-classifier/blob/6afcf701395466d7c936ec8178daf017b9d96b0c/src/backend.ts)
- **[Pg JEV](https://github.com/realZachi/pg-jev)** · 259 stars — Adds natural-language filtering, classification, and ranking of rows to PostgreSQL queries. [Source](https://github.com/realZachi/pg-jev/blob/afd11fa856d7a2b831a1bfd8ee7f869ce8efcd62/sql/jev--0.2.0.sql)
- **[jev-semgrep](https://github.com/uehaj/jev-semgrep)** · 122 stars — Meaning-based grep with multilingual AND, OR, NOT, and probability thresholds. [Source](https://github.com/uehaj/jev-semgrep/blob/ba6ef50f85d0c5d6caa4db102ee4db4a08c85dd2/README.md)
- **[Pg TypeSafe](https://github.com/giuliosmall/pg_typesafe)** · 81 stars — A pre-alpha PostgreSQL C extension for calling Jev from SQL for classification, yes/no judgments, and scoring. [Source](https://github.com/giuliosmall/pg_typesafe/blob/4b5bfc1df11b18c3f07bb10804eeb47e4508ec6a/typesafe.c)
- **[jegrep](https://github.com/can1357/jegrep)** · 57 stars — Semantic grep for live code trees: describe what you need, get files and original line ranges without building an index. [Source](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs)
- **[Neo4JEV](https://github.com/jexp/neo4jev)** · 57 stars — A Neo4j graph navigator that uses JEV to classify the next relationship. [Source](https://github.com/jexp/neo4jev/blob/d157bbe496eb91813475156942bef1c6badfb342/src/neo4jev/navigator.py)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="safety-review"></a>
### Safety & review (12)

- **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 5.0K stars — A JEV webhook guardrail example for inspecting model requests and responses. [Source](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts)
- **[Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm)** · 4.7K stars — An optional JEV preclassifier for selecting which conversation checks should run. [Source](https://github.com/latitude-dev/latitude-llm/blob/6b2484c1d74973877fc7d353b8867c7496568d78/packages/domain/flaggers/src/use-cases/run-jev-preclassifier.ts#L1)
- **[Agent](https://github.com/AgentiLoop/Agent)** · 618 stars — An optional Jev command-risk advisor inside a native macOS Agent, with a TypeSafeKit client. [Source](https://github.com/AgentiLoop/Agent/blob/078f87ceca1d1190cc73706ac8ec16442e766a27/README.md)
- **[jev-align](https://github.com/sutro-sh/jev-align)** · 253 stars — A CLI for calibrating Jev classifiers from human examples with GEPA. [Source](https://github.com/sutro-sh/jev-align/blob/49753df924d30c0d3642b58e0b9b1e89921dc102/README.md)
- **[Abide](https://github.com/coldteadotai/abide)** · 199 stars — A coding-agent rule layer for constraints that ordinary linters cannot express. [Source](https://github.com/coldteadotai/abide/blob/ec3352e873163b74aca1ac9cf3bd0ea69a97723a/README.md)
- **[Interlinked CLI](https://github.com/QuentinCody/interlinked-cli)** · 178 stars — Interlinked adds optional Jev judgments and evidence checks to local coding-agent checks. [Source](https://github.com/QuentinCody/interlinked-cli/blob/207330d8131c5203ecc74e9fd4c24ba416463718/src/harness/jev/client.ts#L14)
- **[Unclutter](https://github.com/kitze/unclutter)** · 152 stars — A browser extension using Jev to identify ads, promotions, and subscription popups and save reusable hiding rules. [Source](https://github.com/kitze/unclutter/blob/9ef9beccc1e57b4e3115ae68644b8fc9c19c29f6/lib/jev.ts)
- **[Pi JEV](https://github.com/y0usaf/pi-jev)** · 131 stars — A Pi extension that flags tool risks before execution and checks output for secrets and failure types. [Source](https://github.com/y0usaf/pi-jev/blob/b3478fd4ca1ac8ffcb703f6dc8d6069b555f531e/README.md)
- **[Pi Warden](https://github.com/DevMortimer/pi-warden)** · 118 stars — Adds checks for project rules, out-of-scope actions, repeated failures, and completion claims to Pi Agents. [Source](https://github.com/DevMortimer/pi-warden/blob/e6c801679464b1a9624225114eb5fb443c27d823/src/guard.ts)
- **[Supercov](https://github.com/supercorp-ai/supercov)** · 85 stars — A code-quality and coverage tool that uses JEV for bounded quality checks. [Source](https://github.com/supercorp-ai/supercov/blob/55f5ce93a239829c224b89e6749991310be91ea4/crates/supercov-cli/src/quality.rs)
- **[Captaincore](https://github.com/CaptainCore/captaincore)** · 71 stars — Jev commands in the WordPress toolkit CaptainCore answer structured questions and prioritize malware scanner findings for review. [Source](https://github.com/CaptainCore/captaincore/blob/f54e0669350707b2f4f4c67a0130fdd6574bd0b5/cmd/typesafe.go)
- **[Oxlint Plugin JEV](https://github.com/wobsoriano/oxlint-plugin-jev)** · 52 stars — An Oxlint plugin that evaluates semantic lint rules with JEV. [Source](https://github.com/wobsoriano/oxlint-plugin-jev/blob/18c5bc9097d88344382a98a78a67698c9c7ecf01/src/jev.ts)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="agent-workflows"></a>
### Agent workflows (11)

- **[Jev Model Router](https://github.com/davila7/claude-code-templates)** · 30.9K stars — A Claude Code mod that classifies subagent model and reasoning-effort needs. [Source](https://github.com/davila7/claude-code-templates/blob/61bfcd1586bf1076f6d3cfa0436317c912811e6c/cli-tool/components/mods/productivity/jev-model-router/hooks/jev-model-router.ts)
- **[Openwork](https://github.com/different-ai/openwork)** · 23.7K stars — An open-source cowork-style agent workspace that can run JEV-backed reviews inside CI and skill workflows. [Source](https://github.com/different-ai/openwork/blob/80c74d2160034fa1738fc6be78dd24ddfeccfc59/.github/scripts/jev-test-coverage-review.mjs)
- **[Eve](https://github.com/vercel/eve)** · 5.3K stars — Vercel’s open agent framework for packaging skills, evals, and tool-using workflows. [Source](https://github.com/vercel/eve/blob/d004e6d47e9d25d0380c24b5a47b65a18f8b2784/README.md)
- **[NewsJack](https://github.com/elvisun/newsjack)** · 1.3K stars — An open-source PR workflow that screens a live news feed for timely brand opportunities. [Source](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer)
- **[Smithers](https://github.com/smithersai/smithers)** · 418 stars — An agentic TypeScript workflow framework with a first-class JEV classify path. [Source](https://github.com/smithersai/smithers/blob/394ada6a3fb815b4b62cfc7bc2242e238d42ff44/apps/server/src/jev.ts)
- **[Compact Adviser](https://github.com/kunchenguid/compact-adviser)** · 157 stars — A coding-agent skill/plugin that advises when to compact context to save tokens. [Source](https://github.com/kunchenguid/compact-adviser/blob/d1655faa16a22b68bff60c3d7deb0123e1e52a53/packages/codex-plugin/skills/compact-adviser/SKILL.md)
- **[JEV Pruner](https://github.com/tamaratran/jev-pruner)** · 130 stars — A Claude Code plugin that trims long Bash output with TypeSafe JEV before the model sees it. [Source](https://github.com/tamaratran/jev-pruner/blob/47d017c34eab7690b95f075ce6f4839247c5dc0a/src/jev.ts)
- **[Skillranker](https://github.com/Dicklesworthstone/skillranker)** · 107 stars — A Rust CLI that ranks agent skills against live session context with JEV. [Source](https://github.com/Dicklesworthstone/skillranker/blob/16743e9f9dee04850d01015d8f5c863a4ed4d0ff/README.md)
- **[Bluenoise](https://github.com/rokcso/bluenoise)** · 90 stars — An X/Twitter filtering extension using local rules by default, with optional Jev checks for unmatched replies. [Source](https://github.com/rokcso/bluenoise/blob/ef81ea7a7c3677501d6de8f9235a4d6a866b573a/entrypoints/background.ts)
- **[jev-gateway](https://github.com/vinilana/jev-gateway)** · 79 stars — A gateway for inserting Jev decisions into Claude Code and Codex tool flows. [Source](https://github.com/vinilana/jev-gateway/blob/9463952bf118773fb955427d2725a98f76546233/README.md)
- **[Save Token JEV Clean](https://github.com/IAmUnbounded/save-token-jev-clean)** · 62 stars — A context cleaner that asks JEV which history to retain, truncate, or drop. [Source](https://github.com/IAmUnbounded/save-token-jev-clean/blob/a7007354a8d3747f06ff82130561edb2822a17df/src/client.ts)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="interfaces"></a>
### Interfaces & automation (8)

- **[json-render · JEV Compose](https://github.com/vercel-labs/json-render)** · 17.7K stars — A JEV UI-composition experiment that selects from predefined components and properties. [Source](https://github.com/vercel-labs/json-render/blob/3ad381881194e7011ad3ccd6d668033495a06c29/apps/web/lib/jev/compose.ts)
- **[Aiavatarkit](https://github.com/uezo/aiavatarkit)** · 678 stars — An optional AIAvatarKit component uses Jev to judge turn endings from speech transcripts. [Source](https://github.com/uezo/aiavatarkit/blob/38b617b8b9269939734e70ef503d7ea6976acdbd/aiavatar/sts/vad/turn_end_gates/jev.py#L172)
- **[TipTour macOS](https://github.com/milind-soni/tiptour-macos)** · 627 stars — A local macOS computer-use companion driven by Jev or Gemini Live. [Source](https://github.com/milind-soni/tiptour-macos/blob/52582467c883d66484542f3be8e259340eb524f1/README.md)
- **[Notra](https://github.com/usenotra/notra)** · 199 stars — A product that turns work artifacts into publishable content with agent skill hooks. [Source](https://github.com/usenotra/notra/blob/f792a620ef1066b34665ec84c6f55fc9ca5d9954/README.md)
- **[OpenWhisper](https://github.com/Knuckles92/OpenWhisper)** · 187 stars — A dictation and meeting-notes app with optional Jev checks for topic changes, note-taker instructions and sensitive text. [Source](https://github.com/Knuckles92/OpenWhisper/blob/9e83653df183096104769e302a3c907cb277c551/README.md)
- **[Youtube Sponsor Detection](https://github.com/trungdq88/youtube-sponsor-detection)** · 81 stars — YouTube extension detecting sponsored segments from live audio and transcripts using Jev, skipping promotional blocks automatically. [Source](https://github.com/trungdq88/youtube-sponsor-detection/blob/de01f0568d043035889a296a61ce21e0accc8b16/extension/lib/jev.js#L1-L541)
- **[Jevmeter](https://github.com/ChetasLua/jevmeter)** · 77 stars — Creates edited videos with score meters by asking Jev to rate transcript sentences against selected rubrics. [Source](https://github.com/ChetasLua/jevmeter/blob/cbf8e117b5b8835e3294c3a8ee652c7dfa737a9a/jevmeter/score.py)
- **[JEV Chat](https://github.com/w3cj/jev-chat)** · 71 stars — A tool-using chat interface where JEV chooses only from code-supplied reply and tool options. [Source](https://github.com/w3cj/jev-chat/blob/e543aba8c21b57a28a748ef41966502130f0f69e/apps/server/src/jev/pools.ts)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="developer-tools"></a>
### Developer tools (27)

- **[Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction)** · 5.7K stars — Compacts Claude Code tool history while keeping retained text verbatim. [Source](https://github.com/tamaratran/fast-jev-compaction/blob/e3f262a7f4d42bd8dd32ced30d26176f7cb545b0/src/client.ts)
- **[TypeSafe Skills](https://github.com/typesafe-ai/skills)** · 1.4K stars — Official agent skills for building against TypeSafe’s System One / JEV API. [Source](https://github.com/typesafe-ai/skills/blob/65a39f393687675ce170e6094757de20370365b9/skills/typesafe-ai/SKILL.md)
- **[Celesto](https://github.com/CelestoAI/celesto)** · 946 stars — A Celesto PR-review example prepares sandbox checks and compares a general model with Jev on candidate findings. [Source](https://github.com/CelestoAI/celesto/blob/fff7bb567752baee4ce195fcb78b5ee5e4da889f/examples/pr-review-jev/models.py#L96)
- **[AI CLI](https://github.com/vercel-labs/ai-cli)** · 808 stars — A terminal generator CLI that ships with an agent skill for creating content from the command line. [Source](https://github.com/vercel-labs/ai-cli/blob/6a0ed5d04ea60ee536029d469499b82898d1b214/skills/ai-cli/SKILL.md)
- **[Awesome JEV (yibie)](https://github.com/yibie/awesome-jev)** · 805 stars — A large community directory of public JEV projects, integrations, and discussions. [Source](https://github.com/yibie/awesome-jev/blob/a42aea88b30aeb62b3f165395f15336853e01863/README.md)
- **[Awesome JEV by TypeSafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe)** · 742 stars — An evidence-backed playbook of JEV use cases, patterns, prompts, and starter code. [Source](https://github.com/Anil-matcha/awesome-jev-by-typesafe/blob/0f4a1eadcdd70f4fc1cf8eadcf72794dfe416095/docs/jev-use-case-playbook.md)
- **[Awesome JEV Tools](https://github.com/v-modal/awesome-jev-tools)** · 599 stars — A curated directory focused on tools built for JEV and TypeSafe System One. [Source](https://github.com/v-modal/awesome-jev-tools/blob/f117e0c368d6e293bf5fdf99244a1173a6dc2ae0/README.md)
- **[Foreman](https://github.com/thruwire/foreman)** · 446 stars — An independent supervisor loop that reads worker diffs, logs and tests, asks Jev Nouls about stuck / off-track / verify, then applies a Python policy. [Source](https://github.com/thruwire/foreman/blob/209182dac7a3467033fd093ab4ca47d21279984a/src/foreman/foreman/jev.py)
- **[Jev Review](https://github.com/devagrawal09/jev-review)** · 438 stars — Reviews a Git diff or a codebase in stages and displays review leads in a local dashboard. [Source](https://github.com/devagrawal09/jev-review/blob/31f89602797fb7bea007f8a480bf368bf564954e/src/review/judgments.ts#L38)
- **[Awesome TypeSafe](https://github.com/AbdelStark/awesome-typesafe)** · 414 stars — A curated list of official and community resources for TypeSafe, System One, and JEV. [Source](https://github.com/AbdelStark/awesome-typesafe/blob/d44dc0a1e26d41bc7f543d39b4b62ae5cb9f13c8/README.md)
- **[Awesome JEV (cobanov)](https://github.com/cobanov/awesome-jev)** · 292 stars — A source-backed list of projects built with JEV / TypeSafe System One. [Source](https://github.com/cobanov/awesome-jev/blob/2c8c34a7a89499a0cec3ca7de3a23fec3ea9dc97/README.md)
- **[Orchestkit](https://github.com/yonatangross/orchestkit)** · 280 stars — OrchestKit can optionally use Jev to classify coding sessions and set their colors when confidence meets a threshold. [Source](https://github.com/yonatangross/orchestkit/blob/569095f35ce61a4881197dfb8117f4c3312e2bee/src/hooks/src/lib/session-category-provider.ts)
- **[Awesome JEV Projects](https://github.com/logicrw/awesome-jev-projects)** · 264 stars — A source-backed JEV ecosystem radar with plain-language discovery and GitHub sync. [Source](https://github.com/logicrw/awesome-jev-projects/blob/d1b1b8d6c68c1754425778606d20d2cb14b09895/SKILL.md)
- **[JEV MCP](https://github.com/jkudish/jev-mcp)** · 196 stars — Eight MCP tools for evidence checks, content screening, search, reranking, classification, comparison and extraction. [Source](https://github.com/jkudish/jev-mcp/blob/89f88b90c3180184d56961160e7178e64c98e468/src/provider.ts#L127)
- **[JEV Review](https://github.com/NiazMorshed2007/jev-review)** · 191 stars — A local MCP code-quality reviewer returning structured scores to coding Agents. [Source](https://github.com/NiazMorshed2007/jev-review/blob/57690af54ef7d862c2483342c1e61c14dffcf727/README.md)
- **[Awesome JEV (fatwang2)](https://github.com/fatwang2/awesome-jev)** · 185 stars — A source-backed JEV directory plus a reusable JEV-only GitHub review workflow. [Source](https://github.com/fatwang2/awesome-jev/blob/f036095ba8203001d40be955f3486cd3e0d0a81b/.github/workflows/jev-review.yml)
- **[Awesome JEV (AnotiaWang)](https://github.com/AnotiaWang/awesome-jev)** · 181 stars — A curated list of JEV applications, libraries, and System One resources. [Source](https://github.com/AnotiaWang/awesome-jev/blob/04e65b59a936b2fed0d40eaec71a0a11e33bb422/README.md)
- **[TypeSafe MCP](https://github.com/itsmostafa/typesafe-mcp)** · 173 stars — An MCP server that lets Claude Code, Claude Desktop, Codex and Pi ask Jev typed questions. [Source](https://github.com/itsmostafa/typesafe-mcp/blob/0c9f35d9b1859189fc7e7d01947061f311ca6dde/README.md)
- **[Perch](https://github.com/lakeday-org/perch)** · 167 stars — Semantic code linting that asks JEV / System One whether findings should fire. [Source](https://github.com/lakeday-org/perch/blob/54a38d6034264dc507e97294b82316c347fe5a5e/src/systemone.js)
- **[Awesome JEV Gallery](https://github.com/OmniJev/awesome-jev-gallery)** · 131 stars — A gallery of System One papers, open reproductions, and independent evaluations. [Source](https://github.com/OmniJev/awesome-jev-gallery/blob/2b84d22ab0fb9e54098788955187feb023c40ab3/README.md)
- **[Building with JEV Skill](https://github.com/dbreunig/building-with-jev-skill)** · 128 stars — An agent skill for writing and improving programs that call JEV / System One. [Source](https://github.com/dbreunig/building-with-jev-skill/blob/04fe3666c6b8b8abfec1271c0e581c823a181f6d/skills/jev/SKILL.md)
- **[Taskuary](https://github.com/ldbumble/taskuary)** · 116 stars — An optional Jev judgment module in Taskuary for checking user-defined conditions on task state. [Source](https://github.com/ldbumble/taskuary/blob/4ad29d7b292a7899767338cfcc83b2dde8f43330/README.md)
- **[Awesome JEV TypeSafe](https://github.com/valentynkit/awesome-jev-typesafe)** · 115 stars — A TypeSafe JEV resource list centered on typed, confidence-aware decisions. [Source](https://github.com/valentynkit/awesome-jev-typesafe/blob/7eec7360d502826b51d1c8862c9fd2d76eecf6e4/readme.md)
- **[Awesome Jev](https://github.com/hellogumbo/awesome-jev)** · 109 stars — The source catalogue behind awesomejev.com, covering repos, integrations, demos, and research. [Source](https://github.com/hellogumbo/awesome-jev/blob/e18fa74fa53e27395a074cf94c7a127e912fb090/data/projects.json)
- **[Stanley Code](https://github.com/devagrawal09/stanley-code)** · 106 stars — Bounded JEV workflows for coding agents with a dedicated adapter. [Source](https://github.com/devagrawal09/stanley-code/blob/fd092558ebea389c81d44f9b10e826d9a72afaa3/src/adapters/jev.ts)
- **[JEV Shell History](https://github.com/mrnugget/jev-shell-history)** · 80 stars — Fish-style Zsh history suggestion tool ranked by Jev, ordering candidate commands from local history based on context. [Source](https://github.com/mrnugget/jev-shell-history/blob/4b2b75d26c0ccf5726263904514a22a8e11659ea/src/suggest.ts#L1-L196)
- **[Awesome JEV (AppitStudio)](https://github.com/AppitStudio/awesome-jev)** · 66 stars — A curated JEV resource list with runnable typed-decision examples. [Source](https://github.com/AppitStudio/awesome-jev/blob/5d654f24aecf992617bbc45e76f32a36eba62f65/README.md)

<sub><a href="#categories">↑ Back to categories</a></sub>

<a id="domain-tools"></a>
### Domain tools (13)

- **[AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund)** · 63.6K stars — An educational hedge-fund prototype with an optional JEV adapter for structured strategy judgments. [Source](https://github.com/virattt/ai-hedge-fund/blob/154a8b2f46dca0f40764d814e4e747b0ad71f4c4/hedge_fund/llm/client.py)
- **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 11.9K stars — An open-source trading OS with a JEV decision gate before selected live entries. [Source](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py)
- **[JEV Trader](https://github.com/jarrodwatts/jev-trader)** · 1.7K stars — A market-making experiment that can request one JEV trade decision per Monad block. [Source](https://github.com/jarrodwatts/jev-trader/blob/b587759e459ea049590102e54a0b07800864cdc3/src/model.ts)
- **[Astra + JEV Minecraft Agent](https://github.com/rmalde/minecraft-agent)** · 395 stars — A Minecraft agent where a planner sets objectives and JEV selects legal game actions. [Source](https://github.com/rmalde/minecraft-agent/blob/78b40ed59514e5e2abde33a05ce398ecb2c39e05/models.mjs)
- **[TypeSafe Mario](https://github.com/fhshaik/typesafe-mario)** · 314 stars — An experimental NES Mario controller that gives Jev structured emulator RAM and telemetry instead of screenshots. [Source](https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/README.md)
- **[Jevpilot](https://github.com/standardagents/jevpilot)** · 143 stars — A browser driving simulator where Jev chooses among locally generated paths and speeds. [Source](https://github.com/standardagents/jevpilot/blob/e1beeb13b9a928fb76f167f86af584f4ce9cf180/README.md)
- **[JEV Eval Agent](https://github.com/vinilana/jev-eval-agent)** · 99 stars — Agent tool evaluation harness comparing standard LLM tool selection against Jev routing across 100 mocked tools. [Source](https://github.com/vinilana/jev-eval-agent/blob/037de1120c84b4b63cdf748e2acf258ff66d7731/agent/lib/jev-router.ts#L1-L154)
- **[Formanator](https://github.com/timrogers/formanator)** · 98 stars — A CLI and MCP client for benefit claims with optional JEV receipt classification. [Source](https://github.com/timrogers/formanator/blob/548740edef37a4169eef163e4988e64f43a560ec/src/typesafe.rs)
- **[JEV Drone](https://github.com/RomanSlack/jev-drone)** · 96 stars — A MuJoCo drone experiment deriving scene features from camera buffers for Jev tactical advice. [Source](https://github.com/RomanSlack/jev-drone/blob/cbeb53ce4f17a06ea490ae43effcdad231143610/tactics.py#L184)
- **[Dasheng](https://github.com/wquguru/dasheng)** · 90 stars — A reading-practice app that combines streaming ASR with per-word JEV judgments. [Source](https://github.com/wquguru/dasheng/blob/1bacff4a075527e6c02da242a72d117e7cb3286b/lib/jev.js)
- **[JEV Trade](https://github.com/aowang-ai/jev-trade)** · 68 stars — A live Hyperliquid trading agent with JEV as a bounded decision layer. [Source](https://github.com/aowang-ai/jev-trade/blob/df2c9656324a8a75996eb0612de7adcfe3ce6f89/src/model.ts)
- **[Prism Liquidity Agent](https://github.com/irfndi/prism-liquidity-agent)** · 54 stars — An autonomous liquidity agent that uses JEV inside its rebalancing decision service. [Source](https://github.com/irfndi/prism-liquidity-agent/blob/22c67bdbe30bab608226832256a5013ad826b707/engine/jev-service.ts)
- **[Jev Reviewer](https://github.com/choxos/jev-reviewer)** · 30 stars — A browser app that pulls verbatim quotes from trial reports to fill systematic-review extraction forms. [Source](https://github.com/choxos/jev-reviewer/blob/da15868cdca5e64555e6643243a52ea71f60cf3b/docs/jev.js#L51)

<sub><a href="#categories">↑ Back to categories</a></sub>

## BeatAPI

**[Browse the live gallery](https://beatapi.io/awesome-jev)** ·
**[Create a BeatAPI key](https://beatapi.io/dashboard/apikeys)** ·
**[Contribute](./CONTRIBUTING.md)**

JEV is live on BeatAPI: use the same BeatAPI key and USD balance to call `POST /v1/systemone` with model `jev-1.13`.

---

<sub>Curated by <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> · <a href="https://beatapi.io/awesome-jev">Live gallery</a> · <a href="./NOTICE.md">License & notices</a></sub>
