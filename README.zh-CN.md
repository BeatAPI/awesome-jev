<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV——由 BeatAPI 维护的 JEV 开源项目、工具、模型与实验精选" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/zh/awesome-jev">浏览 Awesome JEV 主站 Gallery</a></strong> ·
  <a href="#精选项目-gallery">精选项目</a> ·
  <a href="#all-projects">全部 183 个项目</a> ·
  <a href="./data/projects.json">JSON 目录</a> ·
  <a href="./README.md">English</a> ·
  <a href="./README.ja.md">日本語</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>只整理 50+ Star、经过源码核对的 JEV 相关项目、集成、工具、开放模型、实验与生态资源。</strong></p>

<p align="center">收录门槛为 GitHub 50 Star 及以上。看看 JEV 如何完成选择、评分、路由与过滤，同时由应用代码掌控执行。</p>

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
      <td align="center"><strong>183</strong></td>
      <td align="center"><strong>49</strong></td>
      <td align="center"><strong>10</strong></td>
      <td align="center"><strong>2026-09-22</strong></td>
    </tr>
  </tbody>
</table>
</div>

<a id="categories"></a>
<h2 align="center">按分类浏览</h2>

<p align="center">
  <a href="#browser-computer-use"><strong>浏览器与电脑操作 · 16</strong></a> ·
  <a href="#sdk-integrations"><strong>SDK 与框架集成 · 30</strong></a> ·
  <a href="#routing-optimization"><strong>路由与优化 · 16</strong></a> ·
  <a href="#open-models"><strong>开放模型 · 21</strong></a> ·
  <a href="#search-data"><strong>搜索与数据 · 15</strong></a><br>
  <a href="#safety-review"><strong>安全与审查 · 14</strong></a> ·
  <a href="#agent-workflows"><strong>Agent 工作流 · 14</strong></a> ·
  <a href="#interfaces"><strong>界面与自动化 · 9</strong></a> ·
  <a href="#developer-tools"><strong>开发者工具 · 35</strong></a> ·
  <a href="#domain-tools"><strong>垂直工具 · 13</strong></a>
</p>

## 精选项目 Gallery

|  |  |
| --- | --- |
| [![Jev Ultrafast 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/browser-use/jev-ultrafast)](https://github.com/browser-use/jev-ultrafast) | [![LiteLLM 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/BerriAI/litellm)](https://github.com/BerriAI/litellm) |
| **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · 浏览器与电脑操作 · 16.3K Star<br>一次 JEV 请求选择浏览器动作和对应 DOM 目标。<br>[原始案例 · 294 万浏览](https://x.com/gregpr07/status/2100411066966749359) · [固定版本源码](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) | **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · 路由与优化 · 59.4K Star<br>在路由后端模型前判断请求复杂度。<br>[固定版本源码](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| [![LangChain 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) | [![Vercel AI SDK 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/vercel/ai)](https://github.com/vercel/ai) |
| **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · SDK 集成 · 146.8K Star<br>在 Python 工作流中提供二元、分类和有序评分判断。<br>[固定版本源码](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) | **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · SDK 集成 · 26.9K Star<br>把 choice、score 和 yes/no 问题映射到统一 evaluate 接口。<br>[固定版本源码](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts) |
| [![Laya 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/NandhaKishorM/laya)](https://github.com/NandhaKishorM/laya) | [![jegrep 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/can1357/jegrep)](https://github.com/can1357/jegrep) |
| **[Laya](https://github.com/NandhaKishorM/laya)** · 开放模型 · 11.5K Star<br>多语言 System 1 类型化判断，单次前向完成，并带检查点路由。<br>[Hugging Face 模型](https://huggingface.co/convaiinnovations/laya) · [固定版本源码](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md)| **[jegrep](https://github.com/can1357/jegrep)** · 搜索与数据<br>无需建立索引，直接对实时代码树做语义检索。<br>[固定版本源码](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs) |
| [![Cua 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/trycua/cua)](https://github.com/trycua/cua) | [![Agentgateway 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/agentgateway/agentgateway)](https://github.com/agentgateway/agentgateway) |
| **[Cua · JEV Use](https://github.com/trycua/cua)** · 浏览器与电脑操作 · 25.8K Star<br>根据 DOM 或视觉区域描述选择下一步动作 ID。<br>[固定版本源码](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) | **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 安全与审查 · 5.0K Star<br>在网关层判断越狱、有害内容与密钥泄露风险。<br>[固定版本源码](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |
| [![NewsJack 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/elvisun/newsjack)](https://github.com/elvisun/newsjack) | [![QuantDinger 仓库预览](https://opengraph.githubassets.com/awesome-jev-20260920/OpenByteInc/QuantDinger)](https://github.com/OpenByteInc/QuantDinger) |
| **[NewsJack](https://github.com/elvisun/newsjack)** · Agent 工作流 · 1.3K Star<br>先筛选数百条实时新闻，再让 Agent 继续处理少量入选机会。<br>[原始案例 · 58.3 万浏览](https://x.com/elvissun/status/2100951347080421409) · [固定版本源码](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) | **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 垂直工具 · 12.0K Star<br>在部分真实交易入场前增加证据质量与风险判断闸门。<br>[固定版本源码](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

<p align="center"><strong><a href="https://beatapi.io/zh/awesome-jev">在主站筛选并查看完整项目说明 →</a></strong></p>

<a id="all-projects"></a>
## 全部 183 个项目

<a id="browser-computer-use"></a>
### 浏览器与电脑操作 (16)

- **[Cua · JEV Use](https://github.com/trycua/cua)** · 25.8K Star — 把 Cua Driver 的观察与执行能力和 JEV 的有限动作选择结合起来。 [源码证据](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11)
- **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · 16.3K Star — 用 JEV 一次选出浏览器动作与对应 DOM 元素，只在需要输入文本时再调用文本模型。 [源码证据](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py)
- **[Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop)** · 1.4K Star — 根据系统无障碍数据选择原生桌面控件与动作的可选 JEV Skill。 [源码证据](https://github.com/lahfir/agent-desktop/blob/7a8e4a10281c7319733aa200fd79501f34529716/scripts/jev/act.mjs)
- **[TypeSafe Computer Use](https://github.com/awlevin/typesafe-computer-use)** · 765 Star — 用 OCR 和界面状态构造候选动作，让 Jev 决定如何操作 macOS，需要写文字时再调用文本模型。 [源码证据](https://github.com/awlevin/typesafe-computer-use/blob/cc7b5066ae1a07b5e3182e8f87a9b5b6dfdcffc1/typesafe_computer_use/decide.py)
- **[Jev CU](https://github.com/Sac-Y/Jev-cu)** · 549 Star — 用 JEV 决定下一步界面动作的 Computer Use 辅助工具。 [源码证据](https://github.com/Sac-Y/Jev-cu/blob/38fb31de7dfe6209bbe6e04057c00c6e885ba577/scripts/jev-decide.mjs)
- **[Omg.dev](https://github.com/BennyKok/omg.dev)** · 535 Star — omg.dev 的移动端测试脚本可让 Jev 读取可访问性树并选择下一步交互。 [源码证据](https://github.com/BennyKok/omg.dev/blob/a00f56684a569ee417be787c148eaa9874946f2b/mobile/scripts/jev.ts)
- **[JEV Browser Use](https://github.com/wy-coliney/jev-browser-use)** · 334 Star — 给 Codex 浏览器工作流加一个 Skill：Jev 选导航、点击和滚动，Codex 保留文字输入与最终核验。 [源码证据](https://github.com/wy-coliney/jev-browser-use/blob/f14b60e0ae1ee90cd73eb6650e30a666a84c021a/skills/jev-browser-use/bridge.mjs)
- **[Mobile JEV](https://github.com/droidrun/mobile-jev)** · 329 Star — 通过 Mobilerun 控制 Android 手机，网页面板与命令行可查看 Jev 的操作过程。 [源码证据](https://github.com/droidrun/mobile-jev/blob/395fc222beac4f059f9a0beb337d114a2b066e99/scripts/mobile-agent/policy.mjs#L224)
- **[Third Hand](https://github.com/shhivv/third-hand)** · 283 Star — Swift 客户端栈：在驱动本地 computer-use 辅助逻辑时调用 JEV。 [源码证据](https://github.com/shhivv/third-hand/blob/430394b35dbb44ff8b303bf19da29b0828d92bd2/Sources/ThirdHand/JevClient.swift)
- **[JEV Browser](https://github.com/jkudish/jev-browser)** · 231 Star — 给定任务与网址后驱动浏览器，返回最终页面、截图和逐步操作记录。 [源码证据](https://github.com/jkudish/jev-browser/blob/8d90c51bedbe7cd07596bfaa532ded019a31d2a8/src/navigate.ts#L1)
- **[JEV Voice Browser](https://github.com/moritzkremb/jev-voice-browser)** · 216 Star — 用语音控制 Playwright 浏览器，将逐步转写的口令交给 Jev 判断。 [源码证据](https://github.com/moritzkremb/jev-voice-browser/blob/054db0f3dbf537af63a8117632d3f941ccd520e1/src/jev.js#L123)
- **[Arc CUA · TypeSafe Policy](https://github.com/shhivv/arc-cua)** · 127 Star — 带 TypeSafe Policy 实现的高速 Computer Use 动作层。 [源码证据](https://github.com/shhivv/arc-cua/blob/6d47ce6c906d7d8586d3553e277c1c3611c4f6af/src/arc_cua/policies/typesafe.py)
- **[JEV Use](https://github.com/savka777/jev-use)** · 86 Star — 无需视觉模型、通过无障碍控件操作 macOS 的 Computer Use 工具。 [源码证据](https://github.com/savka777/jev-use/blob/8907f85354addfa3d2b78f6a462087e4c73310b8/README.md)
- **[WindTunnel · JEV Benchmarks](https://github.com/nekuda-ai/WindTunnel)** · 76 Star — 浏览器 Agent 基准测试工具，包含基于无障碍树与 WebMCP 接口的冻结 JEV 实验。 [源码证据](https://github.com/nekuda-ai/WindTunnel/blob/5ca8644e23826ebb30108e7bad240b61043bfe67/experiments/jev/run.mjs)
- **[TypeSafe Adblock](https://github.com/realZachi/typesafe-adblock)** · 68 Star — 一个实验性 Chrome 扩展，让 Jev 判断候选 DOM 元素是否是广告，再高亮或移除。 [源码证据](https://github.com/realZachi/typesafe-adblock/blob/7e067d243d87b7fe4d511653c0ddcd77b9beee18/src/typesafe.js)
- **[JEV Browser](https://github.com/Ying-Kai-Liao/jev-browser)** · 67 Star — 把 LLM 规划与 JEV 动作结合的浏览器自动化库、CLI 与 MCP Server。 [源码证据](https://github.com/Ying-Kai-Liao/jev-browser/blob/578cff6e701a131733d03256078bb559a45ad188/src/jev.mjs)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="sdk-integrations"></a>
### SDK 与框架集成 (30)

- **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · 146.8K Star — 面向 Python LangChain 工作流的可选 JEV 分类器集成。 [源码证据](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py)
- **[Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio)** · 30.3K Star — 用 JEV 在工具与有限参数选项之间做选择的 TypeSafe Provider。 [源码证据](https://github.com/ComposioHQ/composio/blob/4b5920bf7aa55c8a44657b060d4bd25ce7b13a9a/ts/packages/providers/typesafe/src/decide.ts)
- **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · 26.9K Star — AI SDK 的 TypeSafe Provider 通过统一 evaluate 接口调用 JEV。 [源码证据](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts)
- **[Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai)** · 20.1K Star — 把受支持的结构化输出映射为 JEV 问题的 TypeSafe 模型集成。 [源码证据](https://github.com/pydantic/pydantic-ai/blob/c4898abb54dc25ae6f6aef208a4c0661b30a455e/pydantic_ai_slim/pydantic_ai/models/typesafe.py)
- **[Eliza · TypeSafe Client](https://github.com/elizaOS/eliza)** · 19.4K Star — Eliza Agent 操作系统中的可选 TypeSafe HTTP 适配器。 [源码证据](https://github.com/elizaOS/eliza/blob/ebc808e3a67fb941e29153d89fc896524d32fe3c/packages/agent/src/services/typesafe/client.ts)
- **[LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs)** · 18.2K Star — 面向 JavaScript LangChain 工作流的 TypeSafeClassifier 集成。 [源码证据](https://github.com/langchain-ai/langchainjs/blob/206d8b992bcf90ce7d46f2158f1ad85fc1d826c0/libs/providers/langchain-typesafe/src/classifier.ts)
- **[Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig)** · 8.7K Star — 用 Rust 类型表达 JEV 问题与答案的实验性 crate。 [源码证据](https://github.com/0xPlaygrounds/rig/blob/2d16c1b25f6749b3a2cd841beddf767106495069/crates/rig-typesafeai/src/wire.rs#L40)
- **[Bifrost · TypeSafe Provider](https://github.com/maximhq/bifrost)** · 8.2K Star — Bifrost 通过统一 Decision 操作把 TypeSafe 接成原生 Provider。 [源码证据](https://github.com/maximhq/bifrost/blob/40c3f7ee3a1a4277c5b269b850ca7725d419907f/core/providers/typesafe/typesafe.go)
- **[GPT-Load · JEV Provider](https://github.com/tbphp/gpt-load)** · 6.9K Star — 自托管 AI 网关内置一等 JEV 渠道与原生 Decisions 路由。 [源码证据](https://github.com/tbphp/gpt-load/blob/93502ced3a650018a35ed76c54573e90742b8ccc/internal/channel/modules/jev.go)
- **[Open Connector · TypeSafe](https://github.com/oomol-lab/open-connector)** · 5.9K Star — Open Connector 通过 Provider Runtime 暴露 TypeSafe 评估能力。 [源码证据](https://github.com/oomol-lab/open-connector/blob/4e6d8533ae436cba4781b6fb69d1bf31e5fb5ffe/src/providers/typesafe_ai/runtime.ts)
- **[Kiln · JEV Adapter](https://github.com/Kiln-AI/Kiln)** · 5.1K Star — Kiln 把兼容的 JSON Schema 映射为 JEV 问题，用于结构化单轮任务。 [源码证据](https://github.com/Kiln-AI/Kiln/blob/5992e2e51ec6782fce33f277145954ba3ae8467e/libs/core/kiln_ai/adapters/model_adapters/jev_adapter.py)
- **[Ax · TypeSafe Client](https://github.com/ax-llm/ax)** · 2.9K Star — 支持布尔、有限分类以及原生 JEV 请求的 TypeSafe 集成。 [源码证据](https://github.com/ax-llm/ax/blob/5c43344f9ef3016db576fa2c3b59d48ef21b4d71/src/ax/ai/typesafe/client.ts#L1)
- **[http4k · TypeSafe Client](https://github.com/http4k/http4k)** · 2.8K Star — 面向 TypeSafe System One API 的 Kotlin 类型化客户端与 Fake 实现。 [源码证据](https://github.com/http4k/http4k/blob/528ef94c9533b42be9010396bd1828ed1c84c9d2/connect/ai/typesafe/client/src/main/kotlin/org/http4k/connect/typesafe/action/SystemOne.kt)
- **[Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant)** · 1.3K Star — 提交会话状态与显式问题的可选 JEV Provider。 [源码证据](https://github.com/vellum-ai/vellum-assistant/blob/ee5ba342719e72b67698c2e1a4a78837321d0b1d/assistant/src/providers/jev/client.ts)
- **[Laravel AI · TypeSafe](https://github.com/laravel/ai)** · 1.2K Star — Laravel AI 内置由 JEV 驱动的 TypeSafe 分类 Provider。 [源码证据](https://github.com/laravel/ai/blob/f0a5d4f3c5bddda7c8975eb79e92d62811197484/src/Providers/TypeSafeProvider.php)
- **[Req LLM](https://github.com/agentjido/req_llm)** · 581 Star — ReqLLM 的 TypeSafe provider，让 Elixir 应用通过 evaluate 接口调用 Jev。 [源码证据](https://github.com/agentjido/req_llm/blob/9cb0ee7a0fea5f3520fc953911d352c93193615e/README.md)
- **[Simple JEV](https://github.com/featherless-ai/simple-jev)** · 458 Star — 将任意开源大语言模型转化为分类器与 Jev 兼容端点的适配服务，无需额外训练专用分类头。 [源码证据](https://github.com/featherless-ai/simple-jev/blob/0dd5396ffce671ab7c4bfc031506d8e558cf8d23/demos/jevpilot/src/simple-jev-api.js#L1-L85)
- **[Classifier.dev](https://github.com/mrmps/classifier-dev)** · 406 Star — 以 JEV 为主要类型化决策后端的零样本分类服务。 [源码证据](https://github.com/mrmps/classifier-dev/blob/33ca63816f2bc7e93c3f2d0715f7896500370739/src/jev.ts)
- **[Instructor Php](https://github.com/cognesy/instructor-php)** · 327 Star — Instructor PHP 的 Polyglot 模块内置 TypeSafe Decision 驱动。 [源码证据](https://github.com/cognesy/instructor-php/blob/bb1160ce2360dcf1434788c46ee97809fe782ea3/README.md)
- **[Openjev](https://github.com/razorback16/openjev)** · 286 Star — 一个兼容 Jev System One 接口的独立决策服务，使用开源 DiffusionGemma 模型运行。 [源码证据](https://github.com/razorback16/openjev/blob/91d5005effcf8cc0ecccaa9538ceabbb130fef59/openjev/api.py)
- **[Openai Scala Client](https://github.com/cequence-io/openai-scala-client)** · 248 Star — 让 Scala 应用也能接入 Jev。这个多模型客户端新增了独立 TypeSafe 模块，用状态和判断题获取结构化答案。 [源码证据](https://github.com/cequence-io/openai-scala-client/blob/cfabe8842344da713615d0121a7804840649eb46/README.md)
- **[Pi Fabric](https://github.com/monotykamary/pi-fabric)** · 244 Star — 给 Pi 的工具运行时加上可编程的 Jev 决策循环。先写好观察、判断和执行步骤，再让它按预算在前台或后台运行。 [源码证据](https://github.com/monotykamary/pi-fabric/blob/2e5fcdd94cc364445b115756edefcaab24f68928/README.md)
- **[System One Adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python)** · 243 Star — 可替换 TypeSafeClient 的适配器，用普通 LLM API 承接 System One 调用。 [源码证据](https://github.com/typesafe-ai/system-one-adapter-python/blob/adffc2eab300a4fa3c0e92252d4ffd6ceaa53700/src/system_one_adapter/_client.py)
- **[TypeSafe SDK Js](https://github.com/typesafe-ai/typesafe-sdk-js)** · 214 Star — TypeSafe 组织发布的 JavaScript 与 TypeScript SDK，提供 Jev 请求和回答类型。 [源码证据](https://github.com/typesafe-ai/typesafe-sdk-js/blob/66880ccded6cb642dc1809620c2b108c33730214/README.md)
- **[TypeSafe SDK Python](https://github.com/typesafe-ai/typesafe-sdk-python)** · 188 Star — TypeSafe 官方 Python SDK，提供 Jev System One 的同步、异步客户端及问题和回答类型。 [源码证据](https://github.com/typesafe-ai/typesafe-sdk-python/blob/2ce5c65f13646cab6e6f782328194c9d85f3300a/src/typesafe_sdk/_core/client/sync/client.py#L206-L221)
- **[Runline](https://github.com/Michaelliv/runline)** · 163 Star — Runline 的 TypeSafe 插件，把 Jev 判断作为 Agent JavaScript 可调用的动作。 [源码证据](https://github.com/Michaelliv/runline/blob/6bdddfa82cd95b6b9a07e57fd93a271ae83a0d1b/README.md)
- **[NeuroLink · TypeSafe](https://github.com/Juspay/neurolink)** · 137 Star — NeuroLink 提供 TypeSafe Provider 与基于 JEV 的分类路由能力。 [源码证据](https://github.com/Juspay/neurolink/blob/e2d87c355cf9e725ae5edc3c6db6c05fa659aaa0/src/lib/providers/typesafe.ts)
- **[AI](https://github.com/hackclub/ai)** · 133 Star — Hack Club AI 代理中的 Jev 转发接口，复用已有鉴权、限额和用量记录。 [源码证据](https://github.com/hackclub/ai/blob/a76ea2cb159f707a60107935a5b2e0dbdc7455f5/README.md)
- **[Effect Agent](https://github.com/danieljvdm/effect-agent)** · 121 Star — Effect Agent 的 TypeSafe 决策 provider，支持类型化问题集与可选模型选择。 [源码证据](https://github.com/danieljvdm/effect-agent/blob/88005e497e9b627eeb16d670f278903c57601da9/README.md)
- **[Advocaat](https://github.com/pithings/advocaat)** · 89 Star — 用简短的 TypeScript 调用向 Jev 提问。把同一份数据里的多个判断一次写好，直接拿到概率、选项和分数。 [源码证据](https://github.com/pithings/advocaat/blob/bc46287fc1102b95852a81d679c6e34a2c44f4a2/README.md)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="routing-optimization"></a>
### 路由与优化 (16)

- **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · 59.4K Star — LiteLLM 可在按复杂度路由模型的策略中使用 JEV。 [源码证据](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70)
- **[Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi)** · 32.4K Star — 在编码 Agent 中提供可选 TypeSafe 判断器，处理有边界的工作流决策。 [源码证据](https://github.com/can1357/oh-my-pi/blob/78b753124d11f8dd3ae73e2524125890ff7c977e/packages/ai/src/judgment/typesafe.ts#L4)
- **[OpenChamber · JEV Router](https://github.com/openchamber/openchamber)** · 10.2K Star — 在选择模型前先对消息分类的可选自动路由器。 [源码证据](https://github.com/openchamber/openchamber/blob/614d7f76e581a132a86575c03d3fa9aad5e624b6/packages/web/server/lib/routing/jev.js)
- **[Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate)** · 6.9K Star — 可用 JEV 把任务简报匹配到调度规则的 Agent 团队调度器。 [源码证据](https://github.com/kunchenguid/firstmate/blob/4812db801628040b609dc25a2a8a91ed5efac662/bin/fm-dispatch-resolve.sh)
- **[Agent Router · TypeSafe](https://github.com/theagentrouter/agent-router)** · 2.1K Star — Agent Router 在 Envoy 网关中提供原生 TypeSafe System One 转换器。 [源码证据](https://github.com/theagentrouter/agent-router/blob/7d7c07ffdb14241362def2f7d3f76cbd06d518cc/internal/translator/typesafe_systemone.go)
- **[LLMGateway · System One](https://github.com/theopenco/llmgateway)** · 1.7K Star — LLMGateway 实现带类型化 Schema 与 Provider 映射的原生 System One 路由。 [源码证据](https://github.com/theopenco/llmgateway/blob/24de43b5f307ecbdee9aad386b68aee76de4ae8c/apps/gateway/src/systemone/systemone.ts)
- **[Atomic](https://github.com/bastani-inc/atomic)** · 812 Star — Atomic 编程 Agent 的可选 Jev 决策后端，为路由等流程提供受限的结构化选择。 [源码证据](https://github.com/bastani-inc/atomic/blob/33ca4ccb5f39488aeba67c0212a52a31cd14059d/packages/coding-agent/src/core/structured-output/jev.ts)
- **[Vexjoy Agent](https://github.com/notque/vexjoy-agent)** · 423 Star — 给 VexJoy 的任务分派增加一条 Jev 路线。输入需求后，判断该选哪位专长 Agent、哪项技能和哪条工作流。 [源码证据](https://github.com/notque/vexjoy-agent/blob/ab51ee7da567e84f72f76d73b6e7b83cec5ef060/README.md)
- **[Hermes JEV Skills](https://github.com/kerpopule/hermes-jev-skills)** · 401 Star — 为 Hermes Agent 提供 JEV 驱动的路由、记忆、压缩、Skill 选择与电脑/浏览器操作。 [源码证据](https://github.com/kerpopule/hermes-jev-skills/blob/a5d89014fbeca5102c5e7ccd3915afcd856505d8/jevkit/choose.py)
- **[WrongStack](https://github.com/WrongStack/WrongStack)** · 331 Star — 给 WrongStack 编程 Agent 增加一个可选分派助手。遇到多个相近的专长 Agent 时，用 Jev 判断谁更适合当前任务。 [源码证据](https://github.com/WrongStack/WrongStack/blob/4cf97c0aa4f855751949ee8e99c719d06f4c26e0/README.md)
- **[JEV Router](https://github.com/gargpratyush/jev-router)** · 316 Star — Claude Code / CLI 代理：Jev 给任务复杂度打分，并在当前账号可用的模型里选一个，再由本地策略决定是否更换。 [源码证据](https://github.com/gargpratyush/jev-router/blob/38da6b84ea01241bfc41fbddc0928d0f40a703f0/src/policy.mjs#L1-L63)
- **[Skillbox](https://github.com/kitze/skillbox)** · 223 Star — 自建一个有版本管理的 Agent 技能库，还能选配 Jev 推荐：告诉它当前任务，从你有权限使用的技能里挑更相关的。 [源码证据](https://github.com/kitze/skillbox/blob/d83ba4ecd254c8dfa6a759d1feb5141384e26a9e/README.md)
- **[JEV Codex Router](https://github.com/0xNatoshi/jev-codex-router)** · 184 Star — 每轮先让 Jev 判断任务类型与难度，再由本地策略为 Codex 选模型、思考深度和速度档。 [源码证据](https://github.com/0xNatoshi/jev-codex-router/blob/8292b519659280884627a962c826ac7721136a64/server/jev_server.py)
- **[JevRouter](https://github.com/BillionsBobby/JevRouter)** · 145 Star — 用于模型、工具与子 Agent 的轻量 JEV 路由器。 [源码证据](https://github.com/BillionsBobby/JevRouter/blob/715970774ae8070e958e83ac9b1a780b32a9184c/src/provider.ts)
- **[Grok Bot JEV](https://github.com/Bodila51/grok-bot-jev)** · 74 Star — 为 Grok Bot 提供用量闸门与 Skill 模板的 JEV 决策层。 [源码证据](https://github.com/Bodila51/grok-bot-jev/blob/1583e09928c138aeac0aa89818c67ea41f08e807/README.md)
- **[Agent Router](https://github.com/nidhi-singh02/agent-router)** · 63 Star — 用 JEV 把任务路由到编码 Agent、模型与推理强度的 CLI。 [源码证据](https://github.com/nidhi-singh02/agent-router/blob/ad7571f38ea31ffbf3c28391f9e6d6383a7c08ba/packages/router/src/semantic/typesafe-client.ts)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="open-models"></a>
### 开放模型 (21)

- **[Laya](https://github.com/NandhaKishorM/laya)** · 11.5K Star — 多语言非自回归 System 1 决策引擎：单次前向完成类型化 choice/score/noul，并由路由在检查点间选型。 [源码证据](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md)
- **[SemIf](https://github.com/TheoLeeCJ/SemIf)** · 3.4K Star — 用开放模型实现“语义 if”接口模式的独立研究项目。 [源码证据](https://github.com/TheoLeeCJ/SemIf/blob/ca3ba65f142967030ecb453346e94d6f476a69df/README.md)
- **[Kev 0.5B](https://github.com/jaredpalmer/kev)** · 2.6K Star — 基于 Qwen2.5-0.5B、可在 MacBook 上训练运行的轻量决策模型。 [源码证据](https://github.com/jaredpalmer/kev/blob/20fa6268c8ceb226530be2fb5266ab2c36b37724/README.md)
- **[NanoJev](https://github.com/TianyuCodings/NanoJev)** · 1.9K Star — 提供并行判断、动态候选与完整训练流程的 0.6B 开放 JEV 接口复刻。 [源码证据](https://github.com/TianyuCodings/NanoJev/blob/71a513bb0163b5634467842b523ee0c0ed6fb1c7/README.md)
- **[Nimble](https://github.com/bespokelabsai/nimble)** · 1.5K Star — 面向本地类型化决策、数据整理与评测的开放工具包。 [源码证据](https://github.com/bespokelabsai/nimble/blob/35fe1f4fdbc64fa3dbbf5ac0042f3f5680c1ad28/README.md)
- **[Jevlike](https://github.com/vinnylarouge/jevlike)** · 1.2K Star — 一次为动态文本或视觉候选列表评分的独立入门模型。 [源码证据](https://github.com/vinnylarouge/jevlike/blob/94f5fd1b0b11d52bbdfdf4e0ee6aa96b568f8452/README.md)
- **[LocalJev](https://github.com/githubnext/localjev)** · 704 Star — 基于多种本地小模型、提供 JEV 兼容接口与评测的本地服务。 [源码证据](https://github.com/githubnext/localjev/blob/3f23e36e1a3bff46c7e83e8e3781d3512bc82021/README.md)
- **[Splash](https://github.com/incoai/splash)** · 578 Star — 面向决策类模型的本地 Apple Silicon 推理引擎。 [源码证据](https://github.com/incoai/splash/blob/f53d5ab543a7accdc332c060fd594a693f33f529/README.md)
- **[Von](https://github.com/wfzyx/von)** · 374 Star — 提供 JEV 兼容接口的本地开放 System One 决策模型。 [源码证据](https://github.com/wfzyx/von/blob/14d09878e89b103bfbbe641f9bed02e4d72c8830/README.md)
- **[Decider](https://github.com/Mapika/decider)** · 279 Star — 一次前向的类型化决策与校准概率，基于 Qwen3.5-2B 微调。 [源码证据](https://github.com/Mapika/decider/blob/c4daaac28af9fea95d627015cffa2dd5a5926ee6/decider/__init__.py)
- **[Rizzo Flow](https://github.com/Rizzo-AI-Academy/rizzo-flow)** · 273 Star — 独立的本地决策模型，提供兼容 TypeSafe 的 System One 接口。 [源码证据](https://github.com/Rizzo-AI-Academy/rizzo-flow/blob/d34665b7a28c62b79f37939f2fd83f5fe659fbf9/src/rizzo_flow/compat.py)
- **[OpenJEV SGLang](https://github.com/ekzhang/openjev-sglang)** · 258 Star — 基于开源模型的 JEV 兼容 API，采用 prefill-only 服务路径。 [源码证据](https://github.com/ekzhang/openjev-sglang/blob/604664a22b2cf44c6cc499e503092ae4e3c24c03/src/openjev/__init__.py)
- **[OpenJEV Verdict 2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** · 246 Star — 约 151M 的校准非自回归本地决策引擎，目标对齐类 JEV 类型化答案。 [源码证据](https://github.com/Heman10x-NGU/openJev-verdict-2.0/blob/a458733c5f43fc7f30b6e4381636cbfbf8437633/openjev/__init__.py)
- **[JEV Visual](https://github.com/hr98w/jev-visual)** · 221 Star — 在 Apple Silicon 上的教学向类 JEV 视觉推理实验，共享上下文直接给候选打分。 [源码证据](https://github.com/hr98w/jev-visual/blob/19af545f096e8db4c4dd5d47aed42d92ec252111/jev_visual/scoring.py)
- **[Jeff](https://github.com/logan-markewich/jeff)** · 205 Star — 基于 GliFormer、可自托管的 JEV 兼容服务。 [源码证据](https://github.com/logan-markewich/jeff/blob/34b32f99a727c47b679adde33f4702a001e02979/README.md)
- **[Laya Node Runtime](https://github.com/receptron/laya)** · 195 Star — 面向开放 Laya JEV 兼容决策模型的 Node.js / TypeScript Runtime。 [源码证据](https://github.com/receptron/laya/blob/6478649e723122ca24bbf5fb69ed1010023c9750/src/laya.ts)
- **[djev-spark](https://github.com/mmastrac/djev-spark)** · 168 Star — 在 DGX Spark 上跑 DiffusionGemma NVFP4 结构化决策的容器配方。 [源码证据](https://github.com/mmastrac/djev-spark/blob/1444f3e927f83ba508e5b28a4fd4fdd9ecd0976b/README.md)
- **[LLM2Jev](https://github.com/Yinsongxu/LLM2Jev)** · 125 Star — 把本地语言模型转成 JEV 兼容结构化决策引擎的适配器。 [源码证据](https://github.com/Yinsongxu/LLM2Jev/blob/6fbbf74fc604f92fc9b0b67f0989157bb2908229/src/llm2jev/inference/binary.py)
- **[Reflex](https://github.com/kshetrajna12/reflex)** · 110 Star — 在 Qwen 上复现 JEV/System One 接口的小型开放决策模型。 [源码证据](https://github.com/kshetrajna12/reflex/blob/e21b3b23afdfeee7021a6604fa38f57e7ff5187f/README.md)
- **[Open JEV](https://github.com/daseinlabs/open-jev)** · 91 Star — 支持自定义微调的开放 JEV 风格实现。 [源码证据](https://github.com/daseinlabs/open-jev/blob/8a4fbdf712e78c5ef45509a16aacb81facdd79be/README.md)
- **[OpenJev](https://github.com/SiliconLabAI/OpenJev)** · 67 Star — 面向类型化决策请求的开源 JEV 兼容实现。 [源码证据](https://github.com/SiliconLabAI/OpenJev/blob/a08e969c37b2e4a37f95b3426f983bd94303590c/README.md)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="search-data"></a>
### 搜索与数据 (15)

- **[OpenViking · JEV Rerank](https://github.com/volcengine/OpenViking)** · 38.4K Star — OpenViking 可用 JEV 对 Agent 记忆与上下文检索结果做校准重排。 [源码证据](https://github.com/volcengine/OpenViking/blob/b8bed5a1ad3a1c524b5e1fd0fa591df51ca9b7cc/openviking/models/rerank/jev_rerank.py)
- **[Hindsight · TypeSafe Rerank](https://github.com/vectorize-io/hindsight)** · 24.8K Star — 在 Agent 记忆系统中加入 TypeSafe 重排器，可剔除无关召回候选。 [源码证据](https://github.com/vectorize-io/hindsight/blob/680406b3dd9cca2108c7f0e204820a09b4e30906/hindsight-api-slim/hindsight_api/engine/cross_encoder.py)
- **[GreptimeDB · JEV SQL](https://github.com/GreptimeTeam/greptimedb)** · 6.7K Star — GreptimeDB 增加由 JEV 判断驱动的实验性 SQL 谓词。 [源码证据](https://github.com/GreptimeTeam/greptimedb/blob/b5199bc59a199875187d808158357a33b09e5f60/src/common/function/src/scalars/jev.rs)
- **[Hippo Memory · JEV Reranker](https://github.com/kitfunso/hippo-memory)** · 752 Star — 本地优先的 Agent Memory 类库，可选用 JEV 对召回记忆重新排序。 [源码证据](https://github.com/kitfunso/hippo-memory/blob/c9eb2c31cd307cdae78c05e1fcb3e6d062efd5c0/src/rerankers/jev.ts)
- **[Kody](https://github.com/kentcdodds/kody)** · 663 Star — 可选的二段检索：先扩大混合召回，再用 Cloudflare Workers AI 上的 `typesafe/jev` Score 重排。 [源码证据](https://github.com/kentcdodds/kody/blob/ed9275186dc817530dd2289e62c208ac3809391f/packages/worker/src/mcp/tools/search-jev-rerank.ts)
- **[JEV Search](https://github.com/superagents-lab/jev-search)** · 385 Star — 用自然语言搜网页：Jev 选择搜索来源和时间范围，再给返回的链接排序。 [源码证据](https://github.com/superagents-lab/jev-search/blob/522868762f0637b20bf533f136e930cceb83b9f3/src/lib/typesafe.ts#L48)
- **[Jev Experiments](https://github.com/dabit3/jev-experiments)** · 358 Star — 包含意图搜索与 Agent Assist 流程的一组 JEV 实验。 [源码证据](https://github.com/dabit3/jev-experiments/tree/c469e5bfdc73eb3e1999bba2569e66b579a970fd/agent-assist)
- **[Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier)** · 348 Star — 把税务文档页面归入预先定义的 IRS 表格目录。 [源码证据](https://github.com/kyotofin/tax-doc-classifier/blob/6afcf701395466d7c936ec8178daf017b9d96b0c/src/backend.ts)
- **[Pg JEV](https://github.com/realZachi/pg-jev)** · 286 Star — 在 PostgreSQL 查询中用自然语言给数据行筛选、分类和排序。 [源码证据](https://github.com/realZachi/pg-jev/blob/afd11fa856d7a2b831a1bfd8ee7f869ce8efcd62/sql/jev--0.2.0.sql)
- **[SiftRank · JEV](https://github.com/noperator/siftrank)** · 202 Star — 使用 JEV 在大型集合中寻找相关条目的命令行排序工具。 [源码证据](https://github.com/noperator/siftrank/blob/03e7afe3289a204ea3dcc51613cea91877a651de/pkg/siftrank/jev_provider.go)
- **[DocJEV](https://github.com/jerryjliu/docjev)** · 201 Star — 带专用 JEV Engine 的文档分类与切分工具。 [源码证据](https://github.com/jerryjliu/docjev/blob/7e6b48d3f7eec8db7b582e7276f2778c0d12ca3d/src/jev_docs/engines/jev.py)
- **[jev-semgrep](https://github.com/uehaj/jev-semgrep)** · 124 Star — 支持跨语言 AND、OR、NOT 与概率阈值的“按意思搜索”grep。 [源码证据](https://github.com/uehaj/jev-semgrep/blob/ba6ef50f85d0c5d6caa4db102ee4db4a08c85dd2/README.md)
- **[Neo4JEV](https://github.com/jexp/neo4jev)** · 81 Star — 使用 JEV 判断下一条关系的 Neo4j 图导航器。 [源码证据](https://github.com/jexp/neo4jev/blob/d157bbe496eb91813475156942bef1c6badfb342/src/neo4jev/navigator.py)
- **[Pg TypeSafe](https://github.com/giuliosmall/pg_typesafe)** · 81 Star — 一个预览阶段的 PostgreSQL C 扩展，让 SQL 直接调用 Jev 做分类、是非判断和评分。 [源码证据](https://github.com/giuliosmall/pg_typesafe/blob/4b5bfc1df11b18c3f07bb10804eeb47e4508ec6a/typesafe.c)
- **[jegrep](https://github.com/can1357/jegrep)** · 75 Star — 面向实时代码树的语义 grep：用自然语言描述目标，无需建索引即可返回文件与原始行号范围。 [源码证据](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="safety-review"></a>
### 安全与审查 (14)

- **[Sub2API · JEV Moderation](https://github.com/Wei-Shaw/sub2api)** · 42.3K Star — 在订阅转 API 网关中内置 TypeSafe 客户端，用于内容审核。 [源码证据](https://github.com/Wei-Shaw/sub2api/blob/1c0a69c0ceddb2fd21581c17ab09f6c500b89ba1/backend/internal/pkg/typesafe/client.go)
- **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 5.0K Star — 用 JEV Webhook 检查模型请求与响应的 Guardrail 示例。 [源码证据](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts)
- **[Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm)** · 4.7K Star — 选择一段会话应执行哪些检查的可选 JEV 预分类器。 [源码证据](https://github.com/latitude-dev/latitude-llm/blob/6b2484c1d74973877fc7d353b8867c7496568d78/packages/domain/flaggers/src/use-cases/run-jev-preclassifier.ts#L1)
- **[Agent](https://github.com/AgentiLoop/Agent)** · 622 Star — 原生 macOS Agent 内的可选 Jev 命令风险顾问，配有 TypeSafeKit 客户端。 [源码证据](https://github.com/AgentiLoop/Agent/blob/078f87ceca1d1190cc73706ac8ec16442e766a27/README.md)
- **[jev-align](https://github.com/sutro-sh/jev-align)** · 271 Star — 用人工正反例和 GEPA 校准 JEV 分类标准的 CLI。 [源码证据](https://github.com/sutro-sh/jev-align/blob/49753df924d30c0d3642b58e0b9b1e89921dc102/README.md)
- **[Abide](https://github.com/coldteadotai/abide)** · 207 Star — 为普通 Linter 难以表达的项目规则增加 Agent 级约束。 [源码证据](https://github.com/coldteadotai/abide/blob/ec3352e873163b74aca1ac9cf3bd0ea69a97723a/README.md)
- **[Interlinked CLI](https://github.com/QuentinCody/interlinked-cli)** · 177 Star — Interlinked 在编程 Agent 的本地检查之外，提供可选 Jev 判断与证据检查。 [源码证据](https://github.com/QuentinCody/interlinked-cli/blob/207330d8131c5203ecc74e9fd4c24ba416463718/src/harness/jev/client.ts#L14)
- **[Unclutter](https://github.com/kitze/unclutter)** · 176 Star — 用 Jev 帮浏览器扩展识别网页中的广告、促销与订阅弹窗，并保存可复用的隐藏规则。 [源码证据](https://github.com/kitze/unclutter/blob/9ef9beccc1e57b4e3115ae68644b8fc9c19c29f6/lib/jev.ts)
- **[Pi JEV](https://github.com/y0usaf/pi-jev)** · 134 Star — Pi 编码 Agent 扩展：执行前提示工具风险，执行后检查秘密泄露与失败类型。 [源码证据](https://github.com/y0usaf/pi-jev/blob/b3478fd4ca1ac8ffcb703f6dc8d6069b555f531e/README.md)
- **[Pi Warden](https://github.com/DevMortimer/pi-warden)** · 132 Star — 给 Pi Agent 加项目规则、越界操作、重复失败和完成声明的检查。 [源码证据](https://github.com/DevMortimer/pi-warden/blob/e6c801679464b1a9624225114eb5fb443c27d823/src/guard.ts)
- **[Supercov](https://github.com/supercorp-ai/supercov)** · 94 Star — 使用 JEV 做有限质量检查的代码质量与覆盖率工具。 [源码证据](https://github.com/supercorp-ai/supercov/blob/55f5ce93a239829c224b89e6749991310be91ea4/crates/supercov-cli/src/quality.rs)
- **[Captaincore](https://github.com/CaptainCore/captaincore)** · 71 Star — WordPress 运维工具 CaptainCore 的 Jev 命令，可询问结构化问题，并给恶意代码扫描结果排复核优先级。 [源码证据](https://github.com/CaptainCore/captaincore/blob/f54e0669350707b2f4f4c67a0130fdd6574bd0b5/cmd/typesafe.go)
- **[JEV Lint](https://github.com/mizchi/jev-lint)** · 70 Star — 语义代码 Linter，通过零依赖 JEV 客户端批量判断仓库问题。 [源码证据](https://github.com/mizchi/jev-lint/blob/c9846c8c9ee13a917f3af26294a4fdf1421d21b1/src/jev.ts)
- **[Oxlint Plugin JEV](https://github.com/wobsoriano/oxlint-plugin-jev)** · 55 Star — 用 JEV 评估语义 Lint 规则的 Oxlint 插件。 [源码证据](https://github.com/wobsoriano/oxlint-plugin-jev/blob/18c5bc9097d88344382a98a78a67698c9c7ecf01/src/jev.ts)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="agent-workflows"></a>
### Agent 工作流 (14)

- **[Jev Model Router](https://github.com/davila7/claude-code-templates)** · 30.9K Star — 为 Claude Code 判断子 Agent 模型与推理强度的 Mod。 [源码证据](https://github.com/davila7/claude-code-templates/blob/61bfcd1586bf1076f6d3cfa0436317c912811e6c/cli-tool/components/mods/productivity/jev-model-router/hooks/jev-model-router.ts)
- **[Openwork](https://github.com/different-ai/openwork)** · 23.7K Star — 开源的 cowork 风格 Agent 工作区，可在 CI 与 Skill 流程里跑 JEV 驱动的审查。 [源码证据](https://github.com/different-ai/openwork/blob/80c74d2160034fa1738fc6be78dd24ddfeccfc59/.github/scripts/jev-test-coverage-review.mjs)
- **[Eve](https://github.com/vercel/eve)** · 5.3K Star — Vercel 开源的 Agent 框架，用于打包 Skill、评测与带工具的工作流。 [源码证据](https://github.com/vercel/eve/blob/d004e6d47e9d25d0380c24b5a47b65a18f8b2784/README.md)
- **[RNSkill · JEV Office Gate](https://github.com/Pluviobyte/rnskill)** · 1.6K Star — Agent Skill 合集中包含一个用于有限办公文档检查的 JEV Gate。 [源码证据](https://github.com/Pluviobyte/rnskill/blob/83d1783b892bbaa29a137895ff8338264b6872fa/skills/jev-office-gate/scripts/jev_office_gate.py)
- **[NewsJack](https://github.com/elvisun/newsjack)** · 1.3K Star — 从实时新闻流中筛选品牌可跟进话题的开源 PR 工作流。 [源码证据](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer)
- **[Distill · JEV Runtime](https://github.com/samuelfaj/distill)** · 683 Star — 编码 Agent Runtime 使用 JEV 分支处理路由、压缩、记忆与工具结果。 [源码证据](https://github.com/samuelfaj/distill/blob/d5f031153cb817f023138a9a0b3fce5516f727c4/crates/codegen/distill-shell/src/jev.rs)
- **[Smithers](https://github.com/smithersai/smithers)** · 418 Star — 以 TypeScript 配置定义工作流的 Agent 框架，内置 JEV 分类路径。 [源码证据](https://github.com/smithersai/smithers/blob/394ada6a3fb815b4b62cfc7bc2242e238d42ff44/apps/server/src/jev.ts)
- **[Compact Adviser](https://github.com/kunchenguid/compact-adviser)** · 173 Star — 编码 Agent 的 Skill/插件：建议何时压缩上下文以节省 token。 [源码证据](https://github.com/kunchenguid/compact-adviser/blob/d1655faa16a22b68bff60c3d7deb0123e1e52a53/packages/codex-plugin/skills/compact-adviser/SKILL.md)
- **[JEV Pruner](https://github.com/tamaratran/jev-pruner)** · 134 Star — Claude Code 插件：在模型看到长 Bash 输出前，用 TypeSafe JEV 裁剪。 [源码证据](https://github.com/tamaratran/jev-pruner/blob/47d017c34eab7690b95f075ce6f4839247c5dc0a/src/jev.ts)
- **[jev-gateway](https://github.com/vinilana/jev-gateway)** · 115 Star — 把 JEV 判断接入 Claude Code 与 Codex 工具流程的网关。 [源码证据](https://github.com/vinilana/jev-gateway/blob/9463952bf118773fb955427d2725a98f76546233/README.md)
- **[Skillranker](https://github.com/Dicklesworthstone/skillranker)** · 109 Star — 用 JEV 根据实时会话上下文排序 Agent Skills 的 Rust CLI。 [源码证据](https://github.com/Dicklesworthstone/skillranker/blob/16743e9f9dee04850d01015d8f5c863a4ed4d0ff/README.md)
- **[Bluenoise](https://github.com/rokcso/bluenoise)** · 90 Star — 为 X/Twitter 过滤帖子与回复的浏览器扩展；默认用本地规则，可选择用 Jev 检查未匹配的回复。 [源码证据](https://github.com/rokcso/bluenoise/blob/ef81ea7a7c3677501d6de8f9235a4d6a866b573a/entrypoints/background.ts)
- **[JEV DSH Decision](https://github.com/Devin-AXIS/jev-dsh-decision)** · 78 Star — 面向 DeepSeek Harness 及兼容编码 Agent Host 的结构化 JEV 决策插件。 [源码证据](https://github.com/Devin-AXIS/jev-dsh-decision/blob/adc88caa9bf174d367e79a5f254c7936bcef088e/service/jev.mjs)
- **[Save Token JEV Clean](https://github.com/IAmUnbounded/save-token-jev-clean)** · 62 Star — 让 JEV 判断哪些历史应保留、截断或丢弃的上下文清理器。 [源码证据](https://github.com/IAmUnbounded/save-token-jev-clean/blob/a7007354a8d3747f06ff82130561edb2822a17df/src/client.ts)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="interfaces"></a>
### 界面与自动化 (9)

- **[json-render · JEV Compose](https://github.com/vercel-labs/json-render)** · 18.0K Star — 用 JEV 从预定义组件与属性中进行选择的 UI 组合实验。 [源码证据](https://github.com/vercel-labs/json-render/blob/3ad381881194e7011ad3ccd6d668033495a06c29/apps/web/lib/jev/compose.ts)
- **[JEV Chat Jarvis](https://github.com/jev-chat/jev-chat-jarvis)** · 1.6K Star — 读取可见聊天上下文、给出候选回复但不自动发送的 Android 对话副驾。 [源码证据](https://github.com/jev-chat/jev-chat-jarvis/blob/d8720521fa13aa5172a891cba95c5dd8aeb44a11/app/src/main/java/com/jev/probe/jev/JevClient.kt)
- **[Aiavatarkit](https://github.com/uezo/aiavatarkit)** · 678 Star — AIAvatarKit 的可选 Jev 组件根据转写内容判断用户是否结束发言。 [源码证据](https://github.com/uezo/aiavatarkit/blob/38b617b8b9269939734e70ef503d7ea6976acdbd/aiavatar/sts/vad/turn_end_gates/jev.py#L172)
- **[TipTour macOS](https://github.com/milind-soni/tiptour-macos)** · 642 Star — 由 JEV 或 Gemini Live 驱动的本地 macOS 电脑操作伴侣。 [源码证据](https://github.com/milind-soni/tiptour-macos/blob/52582467c883d66484542f3be8e259340eb524f1/README.md)
- **[Notra](https://github.com/usenotra/notra)** · 207 Star — 把工作产物转成可发布内容的产品，并挂接 Agent Skill。 [源码证据](https://github.com/usenotra/notra/blob/f792a620ef1066b34665ec84c6f55fc9ca5d9954/README.md)
- **[OpenWhisper](https://github.com/Knuckles92/OpenWhisper)** · 187 Star — 语音听写与会议记录应用，可选用 Jev 检查话题变化、面向记录助手的指令和敏感文本。 [源码证据](https://github.com/Knuckles92/OpenWhisper/blob/9e83653df183096104769e302a3c907cb277c551/README.md)
- **[JEV Chat](https://github.com/w3cj/jev-chat)** · 84 Star — 由 JEV 仅从代码提供的回复与工具选项中选择的工具型聊天界面。 [源码证据](https://github.com/w3cj/jev-chat/blob/e543aba8c21b57a28a748ef41966502130f0f69e/apps/server/src/jev/pools.ts)
- **[Jevmeter](https://github.com/ChetasLua/jevmeter)** · 81 Star — 把视频转成带评分仪表的视频成片：Jev 按选定规则给字幕句子评分，再由渲染器叠加显示。 [源码证据](https://github.com/ChetasLua/jevmeter/blob/cbf8e117b5b8835e3294c3a8ee652c7dfa737a9a/jevmeter/score.py)
- **[Youtube Sponsor Detection](https://github.com/trungdq88/youtube-sponsor-detection)** · 81 Star — 结合实时音频与字幕由 Jev 驱动的 YouTube 视频赞助广告片段检测与自动跳过扩展。 [源码证据](https://github.com/trungdq88/youtube-sponsor-detection/blob/de01f0568d043035889a296a61ce21e0accc8b16/extension/lib/jev.js#L1-L541)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="developer-tools"></a>
### 开发者工具 (35)

- **[Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction)** · 6.0K Star — 压缩 Claude Code 工具历史，同时原样保留仍有价值的内容。 [源码证据](https://github.com/tamaratran/fast-jev-compaction/blob/e3f262a7f4d42bd8dd32ced30d26176f7cb545b0/src/client.ts)
- **[TypeSafe Skills](https://github.com/typesafe-ai/skills)** · 1.6K Star — 面向 TypeSafe System One / JEV API 的官方 Agent Skill 集合。 [源码证据](https://github.com/typesafe-ai/skills/blob/65a39f393687675ce170e6094757de20370365b9/skills/typesafe-ai/SKILL.md)
- **[Awesome JEV (yibie)](https://github.com/yibie/awesome-jev)** · 1.0K Star — 收录公开 JEV 项目、集成与讨论的大型社区目录。 [源码证据](https://github.com/yibie/awesome-jev/blob/a42aea88b30aeb62b3f165395f15336853e01863/README.md)
- **[Celesto](https://github.com/CelestoAI/celesto)** · 958 Star — Celesto 的 PR 审查示例在沙盒中准备检查，再比较普通模型与 Jev 对候选问题的判断。 [源码证据](https://github.com/CelestoAI/celesto/blob/fff7bb567752baee4ce195fcb78b5ee5e4da889f/examples/pr-review-jev/models.py#L96)
- **[AI CLI](https://github.com/vercel-labs/ai-cli)** · 810 Star — 终端生成 CLI，并附带可从命令行创作内容的 Agent Skill。 [源码证据](https://github.com/vercel-labs/ai-cli/blob/6a0ed5d04ea60ee536029d469499b82898d1b214/skills/ai-cli/SKILL.md)
- **[Awesome JEV by TypeSafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe)** · 772 Star — 有证据支撑的 JEV 用例、模式、提示词与起步代码手册。 [源码证据](https://github.com/Anil-matcha/awesome-jev-by-typesafe/blob/0f4a1eadcdd70f4fc1cf8eadcf72794dfe416095/docs/jev-use-case-playbook.md)
- **[Awesome JEV Tools](https://github.com/v-modal/awesome-jev-tools)** · 628 Star — 聚焦 JEV 与 TypeSafe System One 工具的精选目录。 [源码证据](https://github.com/v-modal/awesome-jev-tools/blob/f117e0c368d6e293bf5fdf99244a1173a6dc2ae0/README.md)
- **[Jev Review](https://github.com/devagrawal09/jev-review)** · 502 Star — 分阶段检查 Git diff 或整个代码库，在本地面板里展示可复核的审查线索。 [源码证据](https://github.com/devagrawal09/jev-review/blob/31f89602797fb7bea007f8a480bf368bf564954e/src/review/judgments.ts#L38)
- **[Foreman](https://github.com/thruwire/foreman)** · 472 Star — 独立监督环读取编码工人的 diff、日志和测试，用 Jev Noul 判断卡住、跑偏、该验证，再由 Python 策略干预。 [源码证据](https://github.com/thruwire/foreman/blob/209182dac7a3467033fd093ab4ca47d21279984a/src/foreman/foreman/jev.py)
- **[Awesome TypeSafe](https://github.com/AbdelStark/awesome-typesafe)** · 431 Star — TypeSafe、System One 与 JEV 的官方与社区资源精选列表。 [源码证据](https://github.com/AbdelStark/awesome-typesafe/blob/d44dc0a1e26d41bc7f543d39b4b62ae5cb9f13c8/README.md)
- **[Awesome TypeSafe JEV](https://github.com/AbdelStark/awesome-typesafe-jev)** · 431 Star — 带源码依据的 TypeSafe JEV 项目、SDK、演示与评测指南。 [源码证据](https://github.com/AbdelStark/awesome-typesafe-jev/blob/9384099af36cd439b7f0bd4311560ac02eeabe7c/README.md)
- **[Awesome Jev Skills](https://github.com/wuyoscar/jev-skill)** · 398 Star — 一套 Agent Skills 与工作流，内含仅依赖标准库的 JEV 决策客户端。 [源码证据](https://github.com/wuyoscar/jev-skill/blob/4d6efbc5b87a4172524ad4ab4590aef077fdc13b/skills/jev/scripts/jev.py)
- **[Awesome JEV Projects](https://github.com/logicrw/awesome-jev-projects)** · 334 Star — 有源码依据的 JEV 生态雷达，含白话发现页与 GitHub 同步。 [源码证据](https://github.com/logicrw/awesome-jev-projects/blob/d1b1b8d6c68c1754425778606d20d2cb14b09895/SKILL.md)
- **[Awesome JEV (cobanov)](https://github.com/cobanov/awesome-jev)** · 316 Star — 基于源码核对的 JEV / TypeSafe System One 项目精选列表。 [源码证据](https://github.com/cobanov/awesome-jev/blob/2c8c34a7a89499a0cec3ca7de3a23fec3ea9dc97/README.md)
- **[Orchestkit](https://github.com/yonatangross/orchestkit)** · 281 Star — OrchestKit 可选用 Jev 给编程会话分类，符合阈值时用结果决定会话颜色。 [源码证据](https://github.com/yonatangross/orchestkit/blob/569095f35ce61a4881197dfb8117f4c3312e2bee/src/hooks/src/lib/session-category-provider.ts)
- **[Awesome JEV (AnotiaWang)](https://github.com/AnotiaWang/awesome-jev)** · 257 Star — JEV 应用、类库与 System One 资源精选清单。 [源码证据](https://github.com/AnotiaWang/awesome-jev/blob/04e65b59a936b2fed0d40eaec71a0a11e33bb422/README.md)
- **[JEV MCP](https://github.com/jkudish/jev-mcp)** · 245 Star — 给 Agent 提供核对引用、筛查内容、查找、重排、分类、比较和提取等八个 MCP 判断工具。 [源码证据](https://github.com/jkudish/jev-mcp/blob/89f88b90c3180184d56961160e7178e64c98e468/src/provider.ts#L127)
- **[TypeSafe MCP](https://github.com/itsmostafa/typesafe-mcp)** · 227 Star — 让 Claude Code、Claude Desktop、Codex 和 Pi 通过 MCP 或扩展向 Jev 提问，获取结构化判断。 [源码证据](https://github.com/itsmostafa/typesafe-mcp/blob/0c9f35d9b1859189fc7e7d01947061f311ca6dde/README.md)
- **[JEV Review](https://github.com/NiazMorshed2007/jev-review)** · 196 Star — 供编码 Agent 使用的本地 MCP 代码质量检查器，返回多个维度的结构化评分。 [源码证据](https://github.com/NiazMorshed2007/jev-review/blob/57690af54ef7d862c2483342c1e61c14dffcf727/README.md)
- **[Awesome JEV (fatwang2)](https://github.com/fatwang2/awesome-jev)** · 187 Star — 有源码依据的 JEV 目录，并附带可复用的纯 JEV GitHub Review 工作流。 [源码证据](https://github.com/fatwang2/awesome-jev/blob/f036095ba8203001d40be955f3486cd3e0d0a81b/.github/workflows/jev-review.yml)
- **[Perch](https://github.com/lakeday-org/perch)** · 167 Star — 语义代码检查：用 JEV / System One 判断某条发现是否该触发。 [源码证据](https://github.com/lakeday-org/perch/blob/54a38d6034264dc507e97294b82316c347fe5a5e/src/systemone.js)
- **[Awesome JEV Gallery](https://github.com/OmniJev/awesome-jev-gallery)** · 159 Star — 汇总 System One 论文、开放复现与独立评测的 Gallery。 [源码证据](https://github.com/OmniJev/awesome-jev-gallery/blob/2b84d22ab0fb9e54098788955187feb023c40ab3/README.md)
- **[Awesome JEV (HeyJunPenn)](https://github.com/heyjunpenn/awesome-jev)** · 148 Star — 社区维护的多语言 JEV 开源项目目录。 [源码证据](https://github.com/heyjunpenn/awesome-jev/blob/eabb8446bdadd6744adce2e30871ef0691cf34e5/README.md)
- **[Building with JEV Skill](https://github.com/dbreunig/building-with-jev-skill)** · 128 Star — 帮助编写与改进调用 JEV / System One 程序的 Agent Skill。 [源码证据](https://github.com/dbreunig/building-with-jev-skill/blob/04fe3666c6b8b8abfec1271c0e581c823a181f6d/skills/jev/SKILL.md)
- **[Awesome Jev](https://github.com/hellogumbo/awesome-jev)** · 127 Star — awesomejev.com 的源数据目录，覆盖仓库、集成、演示与研究。 [源码证据](https://github.com/hellogumbo/awesome-jev/blob/e18fa74fa53e27395a074cf94c7a127e912fb090/data/projects.json)
- **[Awesome JEV TypeSafe](https://github.com/valentynkit/awesome-jev-typesafe)** · 125 Star — 围绕类型化、置信度感知决策整理的 TypeSafe JEV 资源列表。 [源码证据](https://github.com/valentynkit/awesome-jev-typesafe/blob/7eec7360d502826b51d1c8862c9fd2d76eecf6e4/readme.md)
- **[Awesome JEV (Promethe-us)](https://github.com/Promethe-us/awesome-jev)** · 122 Star — 带来源核验的双语 JEV 资源、项目、研究与动态合集。 [源码证据](https://github.com/Promethe-us/awesome-jev/blob/636623538eda3c363b8c396880ccdc8aba70d424/README.md)
- **[Taskuary](https://github.com/ldbumble/taskuary)** · 116 Star — Taskuary 的可选 Jev 判断模块，对任务运行状态检查用户定义的条件。 [源码证据](https://github.com/ldbumble/taskuary/blob/4ad29d7b292a7899767338cfcc83b2dde8f43330/README.md)
- **[Stanley Code](https://github.com/devagrawal09/stanley-code)** · 111 Star — 为编码 Agent 提供带专用适配器的有限 JEV 工作流。 [源码证据](https://github.com/devagrawal09/stanley-code/blob/fd092558ebea389c81d44f9b10e826d9a72afaa3/src/adapters/jev.ts)
- **[Awesome JEV (kraayenjon)](https://github.com/kraayenjon/awesome-jev)** · 100 Star — 涵盖 JEV 用例、项目、SDK、工具与学习资料的精选指南。 [源码证据](https://github.com/kraayenjon/awesome-jev/blob/22570dcd8662ae039860a1dfad7d7aec4aff8e15/README.md)
- **[JEV Shell History](https://github.com/mrnugget/jev-shell-history)** · 96 Star — 类似于 Fish 终端样式的 Zsh 历史命令建议工具，利用 Jev 对已有历史记录根据当前上下文进行智能打分排序。 [源码证据](https://github.com/mrnugget/jev-shell-history/blob/4b2b75d26c0ccf5726263904514a22a8e11659ea/src/suggest.ts#L1-L196)
- **[Awesome JEV Use Cases](https://github.com/walidboulanouar/awesome-jev-use-cases)** · 84 Star — 带原始来源的 JEV 已发布 Demo、仓库、自报指标与模型限制目录。 [源码证据](https://github.com/walidboulanouar/awesome-jev-use-cases/blob/80bd47333db768044cec10b1327c9ca3bb247994/README.md)
- **[Awesome JEV (AppitStudio)](https://github.com/AppitStudio/awesome-jev)** · 73 Star — 带可运行类型化决策示例的 JEV 精选资源列表。 [源码证据](https://github.com/AppitStudio/awesome-jev/blob/5d654f24aecf992617bbc45e76f32a36eba62f65/README.md)
- **[JevBench](https://github.com/fstandhartinger/jevbench)** · 71 Star — 用于比较 JEV、开放决策模型、分类器与重排模型的可复现基准。 [源码证据](https://github.com/fstandhartinger/jevbench/blob/75e6224ed8103bbc3485ca74820a2eaf7ce8abe0/jevbench/adapters/typesafe.py)
- **[Awesome JEV ZH](https://github.com/yzfly/awesome-jev-zh)** · 59 Star — 中文 JEV 生态指南，包含精选项目、实践教程、价格信息与独立限制说明。 [源码证据](https://github.com/yzfly/awesome-jev-zh/blob/cdb8a78cb3ac4cec36ebe305b73a4e0b4f5cba21/README.md)

<sub><a href="#categories">↑ 返回分类</a></sub>

<a id="domain-tools"></a>
### 垂直工具 (13)

- **[AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund)** · 63.7K Star — 在教育型 AI 对冲基金原型中加入可选 JEV 适配器，用于结构化策略判断。 [源码证据](https://github.com/virattt/ai-hedge-fund/blob/154a8b2f46dca0f40764d814e4e747b0ad71f4c4/hedge_fund/llm/client.py)
- **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 12.0K Star — 在部分真实交易入场前增加 JEV 决策闸门的开源交易系统。 [源码证据](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py)
- **[JEV Trader](https://github.com/jarrodwatts/jev-trader)** · 1.9K Star — 可在 Monad 每个区块请求一次 JEV 交易判断的做市实验。 [源码证据](https://github.com/jarrodwatts/jev-trader/blob/b587759e459ea049590102e54a0b07800864cdc3/src/model.ts)
- **[Astra + JEV Minecraft Agent](https://github.com/rmalde/minecraft-agent)** · 485 Star — 由规划模型设定目标、JEV 选择合法游戏动作的 Minecraft Agent。 [源码证据](https://github.com/rmalde/minecraft-agent/blob/78b40ed59514e5e2abde33a05ce398ecb2c39e05/models.mjs)
- **[TypeSafe Mario](https://github.com/fhshaik/typesafe-mario)** · 338 Star — 从 NES 模拟器 RAM 和状态数据中提取环境，让 Jev 选择超级马力欧的手柄按键。 [源码证据](https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/README.md)
- **[Embodied JEV](https://github.com/FBddcz/embodied-jev)** · 170 Star — 面向具身 Agent 的评测栈，用于比较 JEV、本地模型与通用模型决策策略。 [源码证据](https://github.com/FBddcz/embodied-jev/blob/687210b62f3fad831295ebb1b83dab0b4e013baa/src/embodied_jev/policies.py)
- **[Jevpilot](https://github.com/standardagents/jevpilot)** · 155 Star — 在浏览器里开一辆小车，让 Jev 从提前算好的路线和速度里选下一步。 [源码证据](https://github.com/standardagents/jevpilot/blob/e1beeb13b9a928fb76f167f86af584f4ce9cf180/README.md)
- **[Dasheng](https://github.com/wquguru/dasheng)** · 119 Star — 把流式 ASR 与 JEV 逐词判断结合的朗读练习应用。 [源码证据](https://github.com/wquguru/dasheng/blob/1bacff4a075527e6c02da242a72d117e7cb3286b/lib/jev.js)
- **[JEV Drone](https://github.com/RomanSlack/jev-drone)** · 119 Star — MuJoCo 无人机仿真实验：从相机缓冲区提取场景，Jev 提供战术动作建议。 [源码证据](https://github.com/RomanSlack/jev-drone/blob/cbeb53ce4f17a06ea490ae43effcdad231143610/tactics.py#L184)
- **[JEV Eval Agent](https://github.com/vinilana/jev-eval-agent)** · 103 Star — 智能体工具选择基准测试平台，在包含 100 个模拟工具的个人助理环境下对比大模型直接选工具与 Jev 路由的效率。 [源码证据](https://github.com/vinilana/jev-eval-agent/blob/037de1120c84b4b63cdf748e2acf258ff66d7731/agent/lib/jev-router.ts#L1-L154)
- **[Formanator](https://github.com/timrogers/formanator)** · 99 Star — 支持可选 JEV 收据分类的福利报销 CLI 与 MCP 客户端。 [源码证据](https://github.com/timrogers/formanator/blob/548740edef37a4169eef163e4988e64f43a560ec/src/typesafe.rs)
- **[JEV Trade](https://github.com/aowang-ai/jev-trade)** · 95 Star — 以 JEV 作为有限决策层的 Hyperliquid 实盘交易 Agent。 [源码证据](https://github.com/aowang-ai/jev-trade/blob/df2c9656324a8a75996eb0612de7adcfe3ce6f89/src/model.ts)
- **[Prism Liquidity Agent](https://github.com/irfndi/prism-liquidity-agent)** · 69 Star — 在再平衡决策服务中使用 JEV 的自动化流动性 Agent。 [源码证据](https://github.com/irfndi/prism-liquidity-agent/blob/22c67bdbe30bab608226832256a5013ad826b707/engine/jev-service.ts)

<sub><a href="#categories">↑ 返回分类</a></sub>

## BeatAPI

**[浏览主站 Gallery](https://beatapi.io/zh/awesome-jev)** ·
**[创建 BeatAPI Key](https://beatapi.io/zh/dashboard/apikeys)** ·
**[参与维护](./CONTRIBUTING.md)**

JEV 已在 BeatAPI 上线：使用同一把 BeatAPI Key 和 USD 余额，通过 `POST /v1/systemone` 调用模型 `jev-1.13`。

---

<sub>由 <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> 策展 · <a href="https://beatapi.io/zh/awesome-jev">主站 Gallery</a> · <a href="./NOTICE.md">许可证与声明</a></sub>
