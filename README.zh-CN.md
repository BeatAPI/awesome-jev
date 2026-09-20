<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV——由 BeatAPI 维护的 JEV 开源项目、工具、模型与实验精选" width="100%" />
</p>

<p align="center">
  <a href="#精选项目">精选项目</a> ·
  <a href="#按实践方向浏览">实践方向</a> ·
  <a href="./data/projects.json">JSON 目录</a> ·
  <a href="./README.md">English</a> ·
  <a href="https://beatapi.io/dashboard/apikeys">创建 BeatAPI Key</a>
</p>

# Awesome JEV

**经过源码核对的 JEV 项目、集成、工具、开放模型与实验目录。每个条目都保留
一手发现来源、公开仓库和固定 commit 源码证据。**

JEV 最适合处理有明确边界的判断：**选择、评分、路由、过滤**。最终阈值、
执行动作和失败回退仍由本地代码控制，这个项目库重点展示的正是这种系统分工。

## 当前规模

| 已核对源码项目 | 1K+ Star 仓库 | 实践方向 | 数据快照 |
| ---: | ---: | ---: | :--- |
| **44** | **29** | **10** | **2026-09-20** |

本次把原有 X 专项与 GitHub 源码搜索合并。Star 和浏览量都只是发现快照，不代表
本站独立复现了运行结果或 Benchmark。

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

## 按实践方向浏览

| 方向 | JEV 负责的判断 | 项目 |
| --- | --- | --- |
| **浏览器与电脑操作** | 下一步应该执行哪个动作、作用于哪个目标 | [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)、[Cua](https://github.com/trycua/cua)、[Agent Desktop](https://github.com/lahfir/agent-desktop) |
| **SDK 与框架集成** | 框架如何暴露类型化 JEV 判断 | [LangChain](https://github.com/langchain-ai/langchain)、[Vercel AI SDK](https://github.com/vercel/ai)、[Pydantic AI](https://github.com/pydantic/pydantic-ai)、[Composio](https://github.com/ComposioHQ/composio) |
| **路由与优化** | 应该选择哪个模型、规则或上下文 | [LiteLLM](https://github.com/BerriAI/litellm)、[OpenChamber](https://github.com/openchamber/openchamber)、[Firstmate](https://github.com/kunchenguid/firstmate) |
| **搜索与数据** | 文件、代码片段或记录是否符合意图 | [jegrep](https://github.com/can1357/jegrep)、[jev-semgrep](https://github.com/uehaj/jev-semgrep)、[Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) |
| **开放模型** | 开放权重如何复用有限判断接口 | [Laya](https://huggingface.co/convaiinnovations/laya)、[SemIf](https://github.com/TheoLeeCJ/SemIf)、[NanoJev](https://github.com/TianyuCodings/NanoJev)、[Jevlike](https://github.com/vinnylarouge/jevlike) |
| **安全与评测** | 是否满足规则、检查项或证据字段 | [Agentgateway](https://github.com/agentgateway/agentgateway)、[Latitude](https://github.com/latitude-dev/latitude-llm)、[Abide](https://github.com/coldteadotai/abide) |
| **垂直工具** | 金融等垂直流程中的一个有限判断 | [QuantDinger](https://github.com/OpenByteInc/QuantDinger)、[AI Hedge Fund](https://github.com/virattt/ai-hedge-fund)、[JEV Trader](https://github.com/jarrodwatts/jev-trader) |

## 精选项目

| 项目 | 实践模式 | X 原案例 | 源码 |
| --- | --- | --- | --- |
| **Jev Ultrafast** | 一次 JEV 请求选择浏览器动作和 DOM 目标 | [@gregpr07 · 294 万浏览](https://x.com/gregpr07/status/2100411066966749359) | [仓库](https://github.com/browser-use/jev-ultrafast) · [证据](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) |
| **LiteLLM · JEV Router** | 在路由后端模型前判断请求复杂度 | GitHub 源码 | [仓库](https://github.com/BerriAI/litellm) · [证据](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| **jegrep** | 无需建索引，直接对实时代码树做语义检索 | GitHub 源码 | [仓库](https://github.com/can1357/jegrep) · [证据](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs) |
| **Laya** | 用开放权重在本地输出多语言类型化判断 | Hugging Face + GitHub | [模型](https://huggingface.co/convaiinnovations/laya) · [证据](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md) |
| **QuantDinger** | 在部分真实交易入场前增加类型化决策闸门 | GitHub 源码 | [仓库](https://github.com/OpenByteInc/QuantDinger) · [证据](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

**[浏览全部 44 个有源码证据的项目 →](./data/projects.json)**

## 收录标准

- 有公开仓库并能定位 JEV 或 JEV 兼容实现；
- 有 X 原案例、GitHub 源码命中或其他一手发现来源；
- 保留可长期核对的固定 commit 证据；
- 能明确说明 JEV 在系统中负责哪一个有限判断；
- 完成项目级去重。

GitHub 刷新会检查 JEV 名称、API 域名、模型 ID、SDK 包名与 `/v1/systemone`
端点。由这些搜索路径发现、Star 不低于 **1,000** 且源码直接相关的仓库，经核对后
全部纳入；像 `jegrep` 这样 Star 较低但实践模式独特的项目也会作为精选案例保留。

`source-reviewed` 只代表核对过公开源码，不代表 BeatAPI 已经运行项目、复现
性能、完成安全审计或获得作者背书。

## 参与维护

欢迎补充项目或修正证据。提交前请阅读
[`CONTRIBUTING.md`](./CONTRIBUTING.md)。

## BeatAPI

[BeatAPI](https://beatapi.io) 是 **The professional capability layer for any
agent**。开发者可以用一个平台 Key 使用 BeatAPI 当前已经上线的能力。

**[创建 BeatAPI Key →](https://beatapi.io/dashboard/apikeys)**

本仓库不宣称 JEV 已经在 BeatAPI 上线。只有端点、模型 ID、价格和真实返回完成
核验后，才会正式公布 JEV 的接入方式。

## License

BeatAPI 编写的目录文字和仓库资产采用 MIT License；被收录项目保留各自许可证。
详见 [`NOTICE.md`](./NOTICE.md)。

---

<sub>由 <a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> 策展与维护 · <a href="https://beatapi.io">beatapi.io</a></sub>
