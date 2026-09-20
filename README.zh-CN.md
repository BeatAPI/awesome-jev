<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV——由 BeatAPI 维护的 JEV 开源项目、工具、模型与实验精选" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/zh/awesome-jev">浏览 Awesome JEV 主站 Gallery</a></strong> ·
  <a href="#精选项目-gallery">精选项目</a> ·
  <a href="#全部-100-个项目">全部 100 个项目</a> ·
  <a href="./data/projects.json">JSON 目录</a> ·
  <a href="./README.md">English</a> ·
  <a href="./README.ja.md">日本語</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>经过源码核对的 JEV 项目、集成、工具、开放模型与实验 Gallery。</strong></p>

<p align="center">看看 JEV 如何完成选择、评分、路由与过滤，同时由应用代码掌控执行。</p>

<h2 align="center">当前规模</h2>

<div align="center">
<table>
  <thead>
    <tr>
      <th align="center">已核对源码项目</th>
      <th align="center">1K+ Star 仓库</th>
      <th align="center">实践方向</th>
      <th align="center">数据快照</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>100</strong></td>
      <td align="center"><strong>29</strong></td>
      <td align="center"><strong>10</strong></td>
      <td align="center"><strong>2026-09-20</strong></td>
    </tr>
  </tbody>
</table>
</div>

<h2 align="center">按分类浏览</h2>

<p align="center">
  <a href="#浏览器与电脑操作3">浏览器与电脑操作 · 3</a> ·
  <a href="#sdk-与框架集成9">SDK 与框架集成 · 9</a> ·
  <a href="#路由与优化4">路由与优化 · 4</a> ·
  <a href="#开放模型8">开放模型 · 8</a> ·
  <a href="#搜索与数据4">搜索与数据 · 4</a><br>
  <a href="#安全与审查5">安全与审查 · 5</a> ·
  <a href="#agent-工作流3">Agent 工作流 · 3</a> ·
  <a href="#界面与自动化3">界面与自动化 · 3</a> ·
  <a href="#开发者工具2">开发者工具 · 2</a> ·
  <a href="#垂直工具3">垂直工具 · 3</a>
</p>

## 精选项目 Gallery

|  |  |
| --- | --- |
| [![Jev Ultrafast 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/browser-use/jev-ultrafast)](https://github.com/browser-use/jev-ultrafast) | [![LiteLLM 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/BerriAI/litellm)](https://github.com/BerriAI/litellm) |
| **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · 浏览器与电脑操作 · 9.5K Star<br>一次 JEV 请求选择浏览器动作和对应 DOM 目标。<br>[原始案例 · 294 万浏览](https://x.com/gregpr07/status/2100411066966749359) · [固定版本源码](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) | **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · 路由与优化 · 59.2K Star<br>在路由后端模型前判断请求复杂度。<br>[固定版本源码](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| [![LangChain 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) | [![Vercel AI SDK 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/vercel/ai)](https://github.com/vercel/ai) |
| **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · SDK 集成 · 146.7K Star<br>在 Python 工作流中提供二元、分类和有序评分判断。<br>[固定版本源码](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) | **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · SDK 集成 · 26.9K Star<br>把 choice、score 和 yes/no 问题映射到统一 evaluate 接口。<br>[固定版本源码](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts) |
| [![Laya 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/NandhaKishorM/laya)](https://github.com/NandhaKishorM/laya) | [![jegrep 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/can1357/jegrep)](https://github.com/can1357/jegrep) |
| **[Laya](https://github.com/NandhaKishorM/laya)** · 开放模型 · 1.8K Star<br>使用开放权重在本地完成多语言类型化判断。<br>[Hugging Face 模型](https://huggingface.co/convaiinnovations/laya) · [固定版本源码](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md) | **[jegrep](https://github.com/can1357/jegrep)** · 搜索与数据<br>无需建立索引，直接对实时代码树做语义检索。<br>[固定版本源码](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs) |
| [![Cua 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/trycua/cua)](https://github.com/trycua/cua) | [![Agentgateway 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/agentgateway/agentgateway)](https://github.com/agentgateway/agentgateway) |
| **[Cua · JEV Use](https://github.com/trycua/cua)** · 浏览器与电脑操作 · 24.7K Star<br>根据 DOM 或视觉区域描述选择下一步动作 ID。<br>[固定版本源码](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) | **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 安全与审查 · 4.9K Star<br>在网关层判断越狱、有害内容与密钥泄露风险。<br>[固定版本源码](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |
| [![NewsJack 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/elvisun/newsjack)](https://github.com/elvisun/newsjack) | [![QuantDinger 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/OpenByteInc/QuantDinger)](https://github.com/OpenByteInc/QuantDinger) |
| **[NewsJack](https://github.com/elvisun/newsjack)** · Agent 工作流 · 1.2K Star<br>先筛选数百条实时新闻，再让 Agent 继续处理少量入选机会。<br>[原始案例 · 58.3 万浏览](https://x.com/elvissun/status/2100951347080421409) · [固定版本源码](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) | **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 垂直工具 · 11.8K Star<br>在部分真实交易入场前增加证据质量与风险判断闸门。<br>[固定版本源码](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

<p align="center"><strong><a href="https://beatapi.io/zh/awesome-jev">在主站筛选并查看完整项目说明 →</a></strong></p>

## 全部 100 个项目

- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) · 9,549 Star
- [LangChain · TypeSafe](https://github.com/langchain-ai/langchain) · 146,702 Star
- [AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund) · 63,571 Star
- [LiteLLM · JEV Router](https://github.com/BerriAI/litellm) · 59,192 Star
- [Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi) · 32,024 Star
- [Jev Model Router](https://github.com/davila7/claude-code-templates) · 30,822 Star
- [Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio) · 30,258 Star
- [Vercel AI SDK · TypeSafe](https://github.com/vercel/ai) · 26,858 Star
- [Cua · JEV Use](https://github.com/trycua/cua) · 24,683 Star
- [Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai) · 20,066 Star
- [Eliza · TypeSafe Client](https://github.com/elizaOS/eliza) · 19,382 Star
- [LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs) · 18,213 Star
- [json-render · JEV Compose](https://github.com/vercel-labs/json-render) · 16,898 Star
- [QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger) · 11,763 Star
- [OpenChamber · JEV Router](https://github.com/openchamber/openchamber) · 10,100 Star
- [Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig) · 8,679 Star
- [Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate) · 6,771 Star
- [Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway) · 4,936 Star
- [Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm) · 4,661 Star
- [Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) · 4,463 Star
- [Ax · TypeSafe Client](https://github.com/ax-llm/ax) · 2,927 Star
- [SemIf](https://github.com/TheoLeeCJ/SemIf) · 2,047 Star
- [Laya](https://github.com/NandhaKishorM/laya) · 1,795 Star
- [JEV Trader](https://github.com/jarrodwatts/jev-trader) · 1,364 Star
- [Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop) · 1,310 Star
- [Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant) · 1,292 Star
- [NewsJack](https://github.com/elvisun/newsjack) · 1,181 Star
- [NanoJev](https://github.com/TianyuCodings/NanoJev) · 1,104 Star
- [Jevlike](https://github.com/vinnylarouge/jevlike) · 1,018 Star
- [TipTour macOS](https://github.com/milind-soni/tiptour-macos) · 600 Star
- [Kev 0.5B](https://github.com/jaredpalmer/kev) · 591 Star
- [Nimble](https://github.com/bespokelabsai/nimble) · 573 Star
- [LocalJev](https://github.com/githubnext/localjev) · 484 Star
- [Jev Experiments](https://github.com/dabit3/jev-experiments) · 312 Star
- [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) · 270 Star
- [Abide](https://github.com/coldteadotai/abide) · 169 Star
- [jev-align](https://github.com/sutro-sh/jev-align) · 158 Star
- [Jeff](https://github.com/logan-markewich/jeff) · 120 Star
- [jev-semgrep](https://github.com/uehaj/jev-semgrep) · 92 Star
- [jev-gateway](https://github.com/vinilana/jev-gateway) · 57 Star
- [Hono Jev Router](https://github.com/yusukebe/hono-jev-router) · 39 Star
- [Live Jev](https://github.com/okinaaudio/live-jev) · 32 Star
- [jegrep](https://github.com/can1357/jegrep) · 31 Star
- [Jev Reviewer](https://github.com/choxos/jev-reviewer) · 19 Star
- [Celesto](https://github.com/CelestoAI/celesto) · 943 Star
- [Atomic](https://github.com/bastani-inc/atomic) · 806 Star
- [Aiavatarkit](https://github.com/uezo/aiavatarkit) · 676 Star
- [Kody](https://github.com/kentcdodds/kody) · 654 Star
- [Agent](https://github.com/AgentiLoop/Agent) · 616 Star
- [Req LLM](https://github.com/agentjido/req_llm) · 577 Star
- [Omg.dev](https://github.com/BennyKok/omg.dev) · 531 Star
- [Vexjoy Agent](https://github.com/notque/vexjoy-agent) · 420 Star
- [Foreman](https://github.com/thruwire/foreman) · 344 Star
- [WrongStack](https://github.com/WrongStack/WrongStack) · 329 Star
- [Instructor Php](https://github.com/cognesy/instructor-php) · 327 Star
- [TypeSafe Computer Use](https://github.com/awlevin/typesafe-computer-use) · 302 Star
- [Jev Review](https://github.com/devagrawal09/jev-review) · 284 Star
- [Orchestkit](https://github.com/yonatangross/orchestkit) · 278 Star
- [TypeSafe Mario](https://github.com/fhshaik/typesafe-mario) · 266 Star
- [Openai Scala Client](https://github.com/cequence-io/openai-scala-client) · 248 Star
- [Pi Fabric](https://github.com/monotykamary/pi-fabric) · 236 Star
- [OpenWhisper](https://github.com/Knuckles92/OpenWhisper) · 185 Star
- [Pg JEV](https://github.com/realZachi/pg-jev) · 179 Star
- [Interlinked CLI](https://github.com/QuentinCody/interlinked-cli) · 177 Star
- [JEV Router](https://github.com/gargpratyush/jev-router) · 174 Star
- [Skillbox](https://github.com/kitze/skillbox) · 165 Star
- [Mobile JEV](https://github.com/droidrun/mobile-jev) · 162 Star
- [Runline](https://github.com/Michaelliv/runline) · 162 Star
- [JEV Search](https://github.com/superagents-lab/jev-search) · 146 Star
- [JEV Browser Use](https://github.com/wy-coliney/jev-browser-use) · 136 Star
- [JEV Review](https://github.com/NiazMorshed2007/jev-review) · 126 Star
- [Effect Agent](https://github.com/danieljvdm/effect-agent) · 119 Star
- [JEV Browser](https://github.com/jkudish/jev-browser) · 117 Star
- [Unclutter](https://github.com/kitze/unclutter) · 110 Star
- [TypeSafe SDK Python](https://github.com/typesafe-ai/typesafe-sdk-python) · 101 Star
- [JEV Eval Agent](https://github.com/vinilana/jev-eval-agent) · 87 Star
- [Bluenoise](https://github.com/rokcso/bluenoise) · 83 Star
- [TypeSafe MCP](https://github.com/itsmostafa/typesafe-mcp) · 80 Star
- [JEV Shell History](https://github.com/mrnugget/jev-shell-history) · 57 Star
- [JEV Codex Router](https://github.com/0xNatoshi/jev-codex-router) · 53 Star
- [TypeSafe Adblock](https://github.com/realZachi/typesafe-adblock) · 50 Star
- [JEV Skip](https://github.com/valentynkit/jev-skip) · 1 Star
- [JEV Commit](https://github.com/valentynkit/jev-commit) · 0 Star
- [Jev.nvim](https://github.com/valentynkit/jev.nvim) · 0 Star
- [Jevpilot](https://github.com/standardagents/jevpilot) · 77 Star
- [JEV Drone](https://github.com/RomanSlack/jev-drone) · 66 Star
- [Youtube Sponsor Detection](https://github.com/trungdq88/youtube-sponsor-detection) · 61 Star
- [Jevmeter](https://github.com/ChetasLua/jevmeter) · 58 Star
- [Captaincore](https://github.com/CaptainCore/captaincore) · 71 Star
- [Pg TypeSafe](https://github.com/giuliosmall/pg_typesafe) · 76 Star
- [Simple JEV](https://github.com/featherless-ai/simple-jev) · 168 Star
- [TypeSafe SDK Js](https://github.com/typesafe-ai/typesafe-sdk-js) · 139 Star
- [AI](https://github.com/hackclub/ai) · 133 Star
- [Taskuary](https://github.com/ldbumble/taskuary) · 105 Star
- [JEV Voice Browser](https://github.com/moritzkremb/jev-voice-browser) · 84 Star
- [JEV MCP](https://github.com/jkudish/jev-mcp) · 75 Star
- [Advocaat](https://github.com/pithings/advocaat) · 75 Star
- [Pi JEV](https://github.com/y0usaf/pi-jev) · 70 Star
- [Pi Warden](https://github.com/DevMortimer/pi-warden) · 67 Star
- [Openjev](https://github.com/razorback16/openjev) · 50 Star


## BeatAPI

**[浏览主站 Gallery](https://beatapi.io/zh/awesome-jev)** ·
**[创建 BeatAPI Key](https://beatapi.io/zh/dashboard/apikeys)** ·
**[参与维护](./CONTRIBUTING.md)**

在模型 ID、价格和真实返回完成核验前，本仓库不宣称 JEV 已经作为 BeatAPI 端点上线。

---

<sub>由 <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> 策展 · <a href="https://beatapi.io/zh/awesome-jev">主站 Gallery</a> · <a href="./NOTICE.md">许可证与声明</a></sub>
