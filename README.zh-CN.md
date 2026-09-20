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

**JEV 开源项目、工具、模型与实验精选。每个条目都同时保留 X 原案例、公开
GitHub 仓库和固定 commit 源码证据。**

JEV 最适合处理有明确边界的判断：**选择、评分、路由、过滤**。最终阈值、
执行动作和失败回退仍由本地代码控制，这个项目库重点展示的正是这种系统分工。

## 当前规模

| 已核对源码项目 | X 原帖浏览量 | 实践方向 | 数据快照 |
| ---: | ---: | ---: | :--- |
| **17** | **213 万** | **6** | **2026-09-20** |

浏览量是历史快照，只用于发现高信号案例，不代表本站独立验证了性能结论。

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
| **Agent 工作流** | 下一步是否值得交给更昂贵的模型、工具或流程 | [NewsJack](https://github.com/elvisun/newsjack)、[Jev Model Router](https://github.com/davila7/claude-code-templates)、[jev-gateway](https://github.com/vinilana/jev-gateway) |
| **开发者工具** | 应该进入哪个语义路由、哪些上下文仍然有用 | [Hono Jev Router](https://github.com/yusukebe/hono-jev-router)、[Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) |
| **搜索与数据** | 一条记录是否符合意图、类别或命题 | [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier)、[Jev Experiments](https://github.com/dabit3/jev-experiments)、[jev-semgrep](https://github.com/uehaj/jev-semgrep) |
| **开放模型** | 本地或开放分类器如何复用相同的有限判断接口 | [LocalJev](https://github.com/githubnext/localjev)、[Kev 0.5B](https://github.com/jaredpalmer/kev)、[Nimble](https://github.com/bespokelabsai/nimble)、[Jeff](https://github.com/logan-markewich/jeff) |
| **界面与自动化** | 一句指令对应哪个 UI 或创作工具动作 | [Live Jev](https://github.com/okinaaudio/live-jev)、[TipTour macOS](https://github.com/milind-soni/tiptour-macos) |
| **安全与审查** | 是否满足规则、评价标准或证据字段 | [Abide](https://github.com/coldteadotai/abide)、[jev-align](https://github.com/sutro-sh/jev-align)、[Jev Reviewer](https://github.com/choxos/jev-reviewer) |

## 精选项目

| 项目 | 实践模式 | X 原案例 | 源码 |
| --- | --- | --- | --- |
| **NewsJack** | 先筛选完整新闻流，再让 PR Agent 处理少量机会 | [@elvissun · 58.3 万浏览](https://x.com/elvissun/status/2100951347080421409) | [仓库](https://github.com/elvisun/newsjack) · [证据](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) |
| **Tax Document Classifier** | 把页面映射到固定 IRS 表格目录 | [@nedwize · 22.3 万浏览](https://x.com/nedwize/status/2100973868324417852) | [仓库](https://github.com/kyotofin/tax-doc-classifier) · [证据](https://github.com/kyotofin/tax-doc-classifier/blob/6afcf701395466d7c936ec8178daf017b9d96b0c/src/backend.ts) |
| **LocalJev** | 通过 JEV 兼容接口运行本地小模型 | [@GitHubNext · 19.1 万浏览](https://x.com/GitHubNext/status/2101193436816920798) | [仓库](https://github.com/githubnext/localjev) · [证据](https://github.com/githubnext/localjev/blob/3f23e36e1a3bff46c7e83e8e3781d3512bc82021/README.md) |
| **Kev 0.5B** | 在本地硬件上训练和运行轻量决策模型 | [@jaredpalmer · 16.5 万浏览](https://x.com/jaredpalmer/status/2101028325472841920) | [仓库](https://github.com/jaredpalmer/kev) · [证据](https://github.com/jaredpalmer/kev/blob/20fa6268c8ceb226530be2fb5266ab2c36b37724/README.md) |
| **Jev Model Router** | 把编码任务映射到模型和推理强度策略 | [@dani_avila7 · 13.9 万浏览](https://x.com/dani_avila7/status/2101176629745561686) | [仓库](https://github.com/davila7/claude-code-templates) · [证据](https://github.com/davila7/claude-code-templates/blob/73fdf20e1c2548e438c37d31ad5ece5179298f58/cli-tool/components/mods/productivity/jev-model-router/hooks/jev-model-router.ts) |
| **Hono Jev Router** | 在已声明的处理器之间按请求语义路由 | [@yusukebe · 11.3 万浏览](https://x.com/yusukebe/status/2100871075743859182) | [仓库](https://github.com/yusukebe/hono-jev-router) · [证据](https://github.com/yusukebe/hono-jev-router/blob/04f6e103e1397bca659ab85c042011a1f14b679d/README.md) |

**[浏览全部 17 个有源码证据的项目 →](./data/projects.json)**

## 收录标准

- 有公开仓库并能定位 JEV 或 JEV 兼容实现；
- 有 X 原案例或其他一手发现来源；
- 保留可长期核对的固定 commit 证据；
- 能明确说明 JEV 在系统中负责哪一个有限判断；
- 完成作者、项目与重复来源去重。

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
