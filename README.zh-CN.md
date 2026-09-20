<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV——由 BeatAPI 维护的 JEV 开源项目、工具、模型与实验精选" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/zh/awesome-jev">浏览 Awesome JEV 主站 Gallery</a></strong> ·
  <a href="#精选项目-gallery">精选项目</a> ·
  <a href="#全部-44-个项目">全部 44 个项目</a> ·
  <a href="./data/projects.json">JSON 目录</a> ·
  <a href="./README.md">English</a>
</p>

# Awesome JEV

**经过源码核对的 JEV 项目、集成、工具、开放模型与实验 Gallery。每个条目都保留
一手发现来源、公开仓库和固定 commit 源码证据。**

JEV 最适合处理有明确边界的判断：**选择、评分、路由、过滤**。最终阈值、
执行动作和失败回退仍由本地代码控制，这个项目库重点展示的正是这种系统分工。

## 当前规模

| 已核对源码项目 | 1K+ Star 仓库 | 实践方向 | 数据快照 |
| ---: | ---: | ---: | :--- |
| **44** | **29** | **10** | **2026-09-20** |

Star 和浏览量只是发现快照，不代表本站独立复现了运行结果或 Benchmark。需要筛选、
搜索和完整中文说明，可以打开 **[BeatAPI 主站 Gallery](https://beatapi.io/zh/awesome-jev)**。

## 精选项目 Gallery

参考 [MiniMax H3 Prompt Gallery](https://github.com/BeatAPI/awesome-minimax-h3-prompts)
的案例展示方式，先让项目本身可见。每个案例都提供仓库、固定版本源码证据，能找到
原始传播案例的同时保留原链接。

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

**[在主站筛选并查看完整项目说明 →](https://beatapi.io/zh/awesome-jev)**

## 全部 44 个项目

### 浏览器与电脑操作（3）

[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) · [Cua · JEV Use](https://github.com/trycua/cua) · [Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop)

### SDK 与框架集成（9）

[LangChain · TypeSafe](https://github.com/langchain-ai/langchain) · [Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio) · [Vercel AI SDK · TypeSafe](https://github.com/vercel/ai) · [Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai) · [Eliza · TypeSafe Client](https://github.com/elizaOS/eliza) · [LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs) · [Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig) · [Ax · TypeSafe Client](https://github.com/ax-llm/ax) · [Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant)

### 路由与优化（4）

[LiteLLM · JEV Router](https://github.com/BerriAI/litellm) · [Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi) · [OpenChamber · JEV Router](https://github.com/openchamber/openchamber) · [Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate)

### 开放模型（8）

[SemIf](https://github.com/TheoLeeCJ/SemIf) · [Laya](https://github.com/NandhaKishorM/laya) · [NanoJev](https://github.com/TianyuCodings/NanoJev) · [Jevlike](https://github.com/vinnylarouge/jevlike) · [Kev 0.5B](https://github.com/jaredpalmer/kev) · [Nimble](https://github.com/bespokelabsai/nimble) · [LocalJev](https://github.com/githubnext/localjev) · [Jeff](https://github.com/logan-markewich/jeff)

### 搜索与数据（4）

[Jev Experiments](https://github.com/dabit3/jev-experiments) · [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) · [jev-semgrep](https://github.com/uehaj/jev-semgrep) · [jegrep](https://github.com/can1357/jegrep)

### 安全与审查（5）

[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway) · [Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm) · [Abide](https://github.com/coldteadotai/abide) · [jev-align](https://github.com/sutro-sh/jev-align) · [Jev Reviewer](https://github.com/choxos/jev-reviewer)

### Agent 工作流（3）

[Jev Model Router](https://github.com/davila7/claude-code-templates) · [NewsJack](https://github.com/elvisun/newsjack) · [jev-gateway](https://github.com/vinilana/jev-gateway)

### 界面与自动化（3）

[json-render · JEV Compose](https://github.com/vercel-labs/json-render) · [TipTour macOS](https://github.com/milind-soni/tiptour-macos) · [Live Jev](https://github.com/okinaaudio/live-jev)

### 开发者工具（2）

[Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) · [Hono Jev Router](https://github.com/yusukebe/hono-jev-router)

### 垂直工具（3）

[AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund) · [QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger) · [JEV Trader](https://github.com/jarrodwatts/jev-trader)

## JEV 在系统里的位置

```text
复杂状态 + 有限选项
        │
        ▼
JEV：选择 · 评分 · 路由 · 过滤
        │
        ▼
本地策略：阈值 · 回退 · 人工确认
        │
        ▼
工具、模型、搜索或实际动作
```

这些项目共同的思路不是“让 JEV 替代整个 Agent”，而是把一个高频、明确、
有边界的判断放到更短的决策链路里。

## 收录标准

- 有公开仓库并能定位 JEV 或 JEV 兼容实现；
- 有 X 原案例、GitHub 源码命中或其他一手发现来源；
- 保留可长期核对的固定 commit 证据；
- 能明确说明 JEV 在系统中负责哪一个有限判断；
- 完成项目级去重。

源码搜索发现的直接相关 1K+ Star 仓库，经核对后全部纳入；像 `jegrep` 这样
Star 较低但实践模式独特的项目也会作为精选案例保留。

`source-reviewed` 只代表核对过公开源码，不代表 BeatAPI 已经运行项目、复现
性能、完成安全审计或获得作者背书。

## 参与维护

欢迎补充项目或修正证据。提交前请阅读
[`CONTRIBUTING.md`](./CONTRIBUTING.md)。

## BeatAPI

[BeatAPI](https://beatapi.io) 是 **The professional capability layer for any
agent**。开发者可以用一个平台 Key 使用 BeatAPI 当前已经上线的能力。

**[浏览 Awesome JEV 主站 Gallery](https://beatapi.io/zh/awesome-jev)** ·
**[创建 BeatAPI Key](https://beatapi.io/zh/dashboard/apikeys)**

本仓库不宣称 JEV 已经在 BeatAPI 上线。只有端点、模型 ID、价格和真实返回完成
核验后，才会正式公布 JEV 的接入方式。

## License

BeatAPI 编写的目录文字和仓库资产采用 MIT License；被收录项目保留各自许可证。
详见 [`NOTICE.md`](./NOTICE.md)。

---

<sub>由 <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> 策展与维护 · <a href="https://beatapi.io/zh/awesome-jev">主站 Gallery</a> · <a href="https://beatapi.io">beatapi.io</a></sub>
