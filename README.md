<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV — curated open-source JEV projects, tools, models, and experiments, powered by BeatAPI" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/awesome-jev">Browse the live Awesome JEV gallery</a></strong> ·
  <a href="#featured-project-gallery">Featured projects</a> ·
  <a href="#all-125-projects">All 125 projects</a> ·
  <a href="./data/projects.json">JSON catalogue</a> ·
  <a href="./README.zh-CN.md">简体中文</a> ·
  <a href="./README.ja.md">日本語</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>A source-reviewed gallery of JEV-related projects with 100+ GitHub stars — integrations, tools, open models, and experiments.</strong></p>

<p align="center">We only list projects at or above 100 stars. See where JEV chooses, scores, routes, or filters—while application code keeps control of execution.</p>

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
      <td align="center"><strong>125</strong></td>
      <td align="center"><strong>34</strong></td>
      <td align="center"><strong>10</strong></td>
      <td align="center"><strong>2026-09-21</strong></td>
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

## All 125 projects

- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) · 13,806 stars
- [LangChain · TypeSafe](https://github.com/langchain-ai/langchain) · 146,779 stars
- [AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund) · 63,642 stars
- [LiteLLM · JEV Router](https://github.com/BerriAI/litellm) · 59,304 stars
- [Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi) · 32,236 stars
- [Jev Model Router](https://github.com/davila7/claude-code-templates) · 30,870 stars
- [Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio) · 30,268 stars
- [Vercel AI SDK · TypeSafe](https://github.com/vercel/ai) · 26,870 stars
- [Cua · JEV Use](https://github.com/trycua/cua) · 25,419 stars
- [Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai) · 20,084 stars
- [Eliza · TypeSafe Client](https://github.com/elizaOS/eliza) · 19,404 stars
- [LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs) · 18,215 stars
- [json-render · JEV Compose](https://github.com/vercel-labs/json-render) · 17,728 stars
- [QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger) · 11,882 stars
- [OpenChamber · JEV Router](https://github.com/openchamber/openchamber) · 10,213 stars
- [Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig) · 8,691 stars
- [Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate) · 6,889 stars
- [Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway) · 4,953 stars
- [Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm) · 4,665 stars
- [Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) · 5,713 stars
- [Ax · TypeSafe Client](https://github.com/ax-llm/ax) · 2,934 stars
- [SemIf](https://github.com/TheoLeeCJ/SemIf) · 2,746 stars
- [Laya](https://github.com/NandhaKishorM/laya) · 6,674 stars
- [JEV Trader](https://github.com/jarrodwatts/jev-trader) · 1,672 stars
- [Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop) · 1,377 stars
- [Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant) · 1,293 stars
- [NewsJack](https://github.com/elvisun/newsjack) · 1,271 stars
- [NanoJev](https://github.com/TianyuCodings/NanoJev) · 1,672 stars
- [Jevlike](https://github.com/vinnylarouge/jevlike) · 1,132 stars
- [TipTour macOS](https://github.com/milind-soni/tiptour-macos) · 627 stars
- [Kev 0.5B](https://github.com/jaredpalmer/kev) · 1,521 stars
- [Nimble](https://github.com/bespokelabsai/nimble) · 1,355 stars
- [LocalJev](https://github.com/githubnext/localjev) · 657 stars
- [Jev Experiments](https://github.com/dabit3/jev-experiments) · 352 stars
- [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) · 314 stars
- [Abide](https://github.com/coldteadotai/abide) · 199 stars
- [jev-align](https://github.com/sutro-sh/jev-align) · 253 stars
- [Jeff](https://github.com/logan-markewich/jeff) · 183 stars
- [jev-semgrep](https://github.com/uehaj/jev-semgrep) · 122 stars
- [jev-gateway](https://github.com/vinilana/jev-gateway) · 78 stars
- [Hono Jev Router](https://github.com/yusukebe/hono-jev-router) · 45 stars
- [Live Jev](https://github.com/okinaaudio/live-jev) · 38 stars
- [jegrep](https://github.com/can1357/jegrep) · 57 stars
- [Jev Reviewer](https://github.com/choxos/jev-reviewer) · 30 stars
- [Celesto](https://github.com/CelestoAI/celesto) · 946 stars
- [Atomic](https://github.com/bastani-inc/atomic) · 809 stars
- [Aiavatarkit](https://github.com/uezo/aiavatarkit) · 678 stars
- [Kody](https://github.com/kentcdodds/kody) · 659 stars
- [Agent](https://github.com/AgentiLoop/Agent) · 618 stars
- [Req LLM](https://github.com/agentjido/req_llm) · 580 stars
- [Omg.dev](https://github.com/BennyKok/omg.dev) · 533 stars
- [Vexjoy Agent](https://github.com/notque/vexjoy-agent) · 421 stars
- [Foreman](https://github.com/thruwire/foreman) · 446 stars
- [WrongStack](https://github.com/WrongStack/WrongStack) · 329 stars
- [Instructor Php](https://github.com/cognesy/instructor-php) · 327 stars
- [TypeSafe Computer Use](https://github.com/awlevin/typesafe-computer-use) · 693 stars
- [Jev Review](https://github.com/devagrawal09/jev-review) · 438 stars
- [Orchestkit](https://github.com/yonatangross/orchestkit) · 280 stars
- [TypeSafe Mario](https://github.com/fhshaik/typesafe-mario) · 314 stars
- [Openai Scala Client](https://github.com/cequence-io/openai-scala-client) · 248 stars
- [Pi Fabric](https://github.com/monotykamary/pi-fabric) · 241 stars
- [OpenWhisper](https://github.com/Knuckles92/OpenWhisper) · 187 stars
- [Pg JEV](https://github.com/realZachi/pg-jev) · 259 stars
- [Interlinked CLI](https://github.com/QuentinCody/interlinked-cli) · 178 stars
- [JEV Router](https://github.com/gargpratyush/jev-router) · 283 stars
- [Skillbox](https://github.com/kitze/skillbox) · 220 stars
- [Mobile JEV](https://github.com/droidrun/mobile-jev) · 304 stars
- [Runline](https://github.com/Michaelliv/runline) · 162 stars
- [JEV Search](https://github.com/superagents-lab/jev-search) · 352 stars
- [JEV Browser Use](https://github.com/wy-coliney/jev-browser-use) · 291 stars
- [JEV Review](https://github.com/NiazMorshed2007/jev-review) · 191 stars
- [Effect Agent](https://github.com/danieljvdm/effect-agent) · 121 stars
- [JEV Browser](https://github.com/jkudish/jev-browser) · 209 stars
- [Unclutter](https://github.com/kitze/unclutter) · 152 stars
- [TypeSafe SDK Python](https://github.com/typesafe-ai/typesafe-sdk-python) · 171 stars
- [JEV Eval Agent](https://github.com/vinilana/jev-eval-agent) · 99 stars
- [Bluenoise](https://github.com/rokcso/bluenoise) · 90 stars
- [TypeSafe MCP](https://github.com/itsmostafa/typesafe-mcp) · 173 stars
- [JEV Shell History](https://github.com/mrnugget/jev-shell-history) · 80 stars
- [JEV Codex Router](https://github.com/0xNatoshi/jev-codex-router) · 124 stars
- [TypeSafe Adblock](https://github.com/realZachi/typesafe-adblock) · 64 stars
- [JEV Skip](https://github.com/valentynkit/jev-skip) · 3 stars
- [JEV Commit](https://github.com/valentynkit/jev-commit) · 8 stars
- [Jev.nvim](https://github.com/valentynkit/jev.nvim) · 3 stars
- [Jevpilot](https://github.com/standardagents/jevpilot) · 143 stars
- [JEV Drone](https://github.com/RomanSlack/jev-drone) · 96 stars
- [Youtube Sponsor Detection](https://github.com/trungdq88/youtube-sponsor-detection) · 81 stars
- [Jevmeter](https://github.com/ChetasLua/jevmeter) · 77 stars
- [Captaincore](https://github.com/CaptainCore/captaincore) · 71 stars
- [Pg TypeSafe](https://github.com/giuliosmall/pg_typesafe) · 81 stars
- [Simple JEV](https://github.com/featherless-ai/simple-jev) · 428 stars
- [TypeSafe SDK Js](https://github.com/typesafe-ai/typesafe-sdk-js) · 196 stars
- [AI](https://github.com/hackclub/ai) · 133 stars
- [Taskuary](https://github.com/ldbumble/taskuary) · 116 stars
- [JEV Voice Browser](https://github.com/moritzkremb/jev-voice-browser) · 186 stars
- [JEV MCP](https://github.com/jkudish/jev-mcp) · 196 stars
- [Advocaat](https://github.com/pithings/advocaat) · 88 stars
- [Pi JEV](https://github.com/y0usaf/pi-jev) · 131 stars
- [Pi Warden](https://github.com/DevMortimer/pi-warden) · 118 stars
- [Openjev](https://github.com/razorback16/openjev) · 245 stars
- [Openwork](https://github.com/different-ai/openwork) · 23,682 stars
- [Eve](https://github.com/vercel/eve) · 5,291 stars
- [AI CLI](https://github.com/vercel-labs/ai-cli) · 808 stars
- [TypeSafe Skills](https://github.com/typesafe-ai/skills) · 1,387 stars
- [Awesome JEV by TypeSafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) · 742 stars
- [Smithers](https://github.com/smithersai/smithers) · 418 stars
- [Jev CU](https://github.com/Sac-Y/Jev-cu) · 519 stars
- [Splash](https://github.com/incoai/splash) · 506 stars
- [Awesome TypeSafe](https://github.com/AbdelStark/awesome-typesafe) · 414 stars
- [Awesome JEV (cobanov)](https://github.com/cobanov/awesome-jev) · 292 stars
- [OpenJEV SGLang](https://github.com/ekzhang/openjev-sglang) · 245 stars
- [Notra](https://github.com/usenotra/notra) · 199 stars
- [System One Adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python) · 217 stars
- [Awesome JEV (fatwang2)](https://github.com/fatwang2/awesome-jev) · 185 stars
- [Perch](https://github.com/lakeday-org/perch) · 167 stars
- [JEV Visual](https://github.com/hr98w/jev-visual) · 192 stars
- [Third Hand](https://github.com/shhivv/third-hand) · 270 stars
- [Compact Adviser](https://github.com/kunchenguid/compact-adviser) · 157 stars
- [Awesome JEV Projects](https://github.com/logicrw/awesome-jev-projects) · 263 stars
- [Hermes JEV Skills](https://github.com/kerpopule/hermes-jev-skills) · 335 stars
- [JEV Pruner](https://github.com/tamaratran/jev-pruner) · 130 stars
- [OpenJEV Verdict 2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0) · 221 stars
- [Building with JEV Skill](https://github.com/dbreunig/building-with-jev-skill) · 128 stars
- [Decider](https://github.com/Mapika/decider) · 180 stars
- [djev-spark](https://github.com/mmastrac/djev-spark) · 152 stars

## BeatAPI

**[Browse the live gallery](https://beatapi.io/awesome-jev)** ·
**[Create a BeatAPI key](https://beatapi.io/dashboard/apikeys)** ·
**[Contribute](./CONTRIBUTING.md)**

JEV is live on BeatAPI: use the same BeatAPI key and USD balance to call `POST /v1/systemone` with model `jev-1.13`.

---

<sub>Curated by <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> · <a href="https://beatapi.io/awesome-jev">Live gallery</a> · <a href="./NOTICE.md">License & notices</a></sub>
