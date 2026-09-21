<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV — BeatAPI がキュレーションする JEV のオープンソースプロジェクト、ツール、モデル、実験" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/ja/awesome-jev">Awesome JEV ギャラリーを見る</a></strong> ·
  <a href="#注目プロジェクト">注目プロジェクト</a> ·
  <a href="#全-44-プロジェクト">全 125 プロジェクト</a> ·
  <a href="./data/projects.json">JSON カタログ</a> ·
  <a href="./README.md">English</a> ·
  <a href="./README.zh-CN.md">简体中文</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>GitHub 100★以上・ソース確認済みの JEV 関連プロジェクト／連携／ツール／オープンモデル／実験だけをまとめています。</strong></p>

<p align="center">掲載の中心は 100 stars 以上。JEV が選択・採点・ルーティング・フィルタを担い、実行制御はアプリ側に残る事例です。</p>

<h2 align="center">概要</h2>

<div align="center">
<table>
  <thead>
    <tr>
      <th align="center">ソース確認済み</th>
      <th align="center">1K+ Star リポジトリ</th>
      <th align="center">ユースケース分類</th>
      <th align="center">スナップショット</th>
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

<h2 align="center">カテゴリから探す</h2>

<p align="center">
  <a href="#ブラウザコンピューター操作3">ブラウザ・PC 操作 · 3</a> ·
  <a href="#sdkフレームワーク連携9">SDK・フレームワーク · 9</a> ·
  <a href="#ルーティング最適化4">ルーティング · 4</a> ·
  <a href="#オープンモデル8">オープンモデル · 8</a> ·
  <a href="#検索データ4">検索・データ · 4</a><br>
  <a href="#安全性レビュー5">安全性・レビュー · 5</a> ·
  <a href="#agent-ワークフロー3">Agent ワークフロー · 3</a> ·
  <a href="#ui自動化3">UI・自動化 · 3</a> ·
  <a href="#開発者ツール2">開発者ツール · 2</a> ·
  <a href="#業務特化ツール3">業務特化ツール · 3</a>
</p>

## 注目プロジェクト

|  |  |
| --- | --- |
| [![Jev Ultrafast リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/browser-use/jev-ultrafast)](https://github.com/browser-use/jev-ultrafast) | [![LiteLLM リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/BerriAI/litellm)](https://github.com/BerriAI/litellm) |
| **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · ブラウザ・PC 操作 · 13.8K Star<br>1 回の JEV リクエストでブラウザ操作と対象 DOM を選択します。<br>[オリジナル事例 · 294 万表示](https://x.com/gregpr07/status/2100411066966749359) · [固定コミットの根拠](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) | **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · ルーティング · 59.3K Star<br>バックエンドモデルを選ぶ前にリクエストの複雑さを分類します。<br>[固定コミットの根拠](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| [![LangChain リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) | [![Vercel AI SDK リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/vercel/ai)](https://github.com/vercel/ai) |
| **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · SDK 連携 · 146.8K Star<br>Python ワークフローで二値・分類・順序付き評価を扱います。<br>[固定コミットの根拠](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) | **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · SDK 連携 · 26.9K Star<br>choice、score、yes/no を共通の evaluate インターフェースへ変換します。<br>[固定コミットの根拠](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts) |
| [![Laya リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/NandhaKishorM/laya)](https://github.com/NandhaKishorM/laya) | [![jegrep リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/can1357/jegrep)](https://github.com/can1357/jegrep) |
| **[Laya](https://github.com/NandhaKishorM/laya)** · オープンモデル · 6.7K stars<br>多言語 System 1 の型付き判断を 1 回の前向き計算で行い、チェックポイントをルーティングします。<br>[Hugging Face モデル](https://huggingface.co/convaiinnovations/laya) · [固定コミット根拠](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md)|
| [![Cua リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/trycua/cua)](https://github.com/trycua/cua) | [![Agentgateway リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/agentgateway/agentgateway)](https://github.com/agentgateway/agentgateway) |
| **[Cua · JEV Use](https://github.com/trycua/cua)** · ブラウザ・PC 操作 · 25.4K Star<br>DOM や画面領域の説明から次のアクション ID を選択します。<br>[固定コミットの根拠](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) | **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 安全性・レビュー · 5.0K Star<br>ゲートウェイで脱獄、有害コンテンツ、秘密情報漏えいを判定します。<br>[固定コミットの根拠](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |
| [![NewsJack リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/elvisun/newsjack)](https://github.com/elvisun/newsjack) | [![QuantDinger リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/OpenByteInc/QuantDinger)](https://github.com/OpenByteInc/QuantDinger) |
| **[NewsJack](https://github.com/elvisun/newsjack)** · Agent ワークフロー · 1.3K Star<br>大量のニュースを先に絞り込み、選ばれた機会だけを Agent が処理します。<br>[オリジナル事例 · 58.3 万表示](https://x.com/elvissun/status/2100951347080421409) · [固定コミットの根拠](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) | **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 業務特化ツール · 11.9K Star<br>一部の実取引エントリー前に、根拠とリスクの判断ゲートを追加します。<br>[固定コミットの根拠](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

<p align="center"><strong><a href="https://beatapi.io/ja/awesome-jev">フィルターと詳しい説明付きで見る →</a></strong></p>

## 全 125 プロジェクト

- [LangChain · TypeSafe](https://github.com/langchain-ai/langchain) · 146,779 stars
- [AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund) · 63,642 stars
- [LiteLLM · JEV Router](https://github.com/BerriAI/litellm) · 59,305 stars
- [Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi) · 32,236 stars
- [Jev Model Router](https://github.com/davila7/claude-code-templates) · 30,870 stars
- [Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio) · 30,268 stars
- [Vercel AI SDK · TypeSafe](https://github.com/vercel/ai) · 26,870 stars
- [Cua · JEV Use](https://github.com/trycua/cua) · 25,422 stars
- [Openwork](https://github.com/different-ai/openwork) · 23,682 stars
- [Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai) · 20,084 stars
- [Eliza · TypeSafe Client](https://github.com/elizaOS/eliza) · 19,404 stars
- [LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs) · 18,215 stars
- [json-render · JEV Compose](https://github.com/vercel-labs/json-render) · 17,731 stars
- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) · 13,811 stars
- [QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger) · 11,883 stars
- [OpenChamber · JEV Router](https://github.com/openchamber/openchamber) · 10,213 stars
- [Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig) · 8,691 stars
- [Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate) · 6,889 stars
- [Laya](https://github.com/NandhaKishorM/laya) · 6,688 stars
- [Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) · 5,719 stars
- [Eve](https://github.com/vercel/eve) · 5,291 stars
- [Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway) · 4,953 stars
- [Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm) · 4,665 stars
- [Ax · TypeSafe Client](https://github.com/ax-llm/ax) · 2,934 stars
- [SemIf](https://github.com/TheoLeeCJ/SemIf) · 2,749 stars
- [JEV Trader](https://github.com/jarrodwatts/jev-trader) · 1,672 stars
- [NanoJev](https://github.com/TianyuCodings/NanoJev) · 1,672 stars
- [Kev 0.5B](https://github.com/jaredpalmer/kev) · 1,530 stars
- [TypeSafe Skills](https://github.com/typesafe-ai/skills) · 1,388 stars
- [Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop) · 1,378 stars
- [Nimble](https://github.com/bespokelabsai/nimble) · 1,357 stars
- [Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant) · 1,293 stars
- [NewsJack](https://github.com/elvisun/newsjack) · 1,271 stars
- [Jevlike](https://github.com/vinnylarouge/jevlike) · 1,132 stars
- [Celesto](https://github.com/CelestoAI/celesto) · 946 stars
- [Atomic](https://github.com/bastani-inc/atomic) · 809 stars
- [AI CLI](https://github.com/vercel-labs/ai-cli) · 808 stars
- [Awesome JEV by TypeSafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) · 742 stars
- [TypeSafe Computer Use](https://github.com/awlevin/typesafe-computer-use) · 693 stars
- [Aiavatarkit](https://github.com/uezo/aiavatarkit) · 678 stars
- [Kody](https://github.com/kentcdodds/kody) · 659 stars
- [LocalJev](https://github.com/githubnext/localjev) · 657 stars
- [TipTour macOS](https://github.com/milind-soni/tiptour-macos) · 627 stars
- [Agent](https://github.com/AgentiLoop/Agent) · 618 stars
- [Req LLM](https://github.com/agentjido/req_llm) · 580 stars
- [Omg.dev](https://github.com/BennyKok/omg.dev) · 533 stars
- [Jev CU](https://github.com/Sac-Y/Jev-cu) · 519 stars
- [Splash](https://github.com/incoai/splash) · 506 stars
- [Foreman](https://github.com/thruwire/foreman) · 446 stars
- [Jev Review](https://github.com/devagrawal09/jev-review) · 438 stars
- [Simple JEV](https://github.com/featherless-ai/simple-jev) · 428 stars
- [Vexjoy Agent](https://github.com/notque/vexjoy-agent) · 421 stars
- [Smithers](https://github.com/smithersai/smithers) · 418 stars
- [Awesome TypeSafe](https://github.com/AbdelStark/awesome-typesafe) · 414 stars
- [Jev Experiments](https://github.com/dabit3/jev-experiments) · 352 stars
- [JEV Search](https://github.com/superagents-lab/jev-search) · 352 stars
- [Hermes JEV Skills](https://github.com/kerpopule/hermes-jev-skills) · 335 stars
- [WrongStack](https://github.com/WrongStack/WrongStack) · 329 stars
- [Instructor Php](https://github.com/cognesy/instructor-php) · 327 stars
- [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) · 314 stars
- [TypeSafe Mario](https://github.com/fhshaik/typesafe-mario) · 314 stars
- [Mobile JEV](https://github.com/droidrun/mobile-jev) · 304 stars
- [Awesome JEV (cobanov)](https://github.com/cobanov/awesome-jev) · 292 stars
- [JEV Browser Use](https://github.com/wy-coliney/jev-browser-use) · 291 stars
- [JEV Router](https://github.com/gargpratyush/jev-router) · 283 stars
- [Orchestkit](https://github.com/yonatangross/orchestkit) · 280 stars
- [Third Hand](https://github.com/shhivv/third-hand) · 270 stars
- [Awesome JEV Projects](https://github.com/logicrw/awesome-jev-projects) · 264 stars
- [Pg JEV](https://github.com/realZachi/pg-jev) · 259 stars
- [jev-align](https://github.com/sutro-sh/jev-align) · 253 stars
- [Openai Scala Client](https://github.com/cequence-io/openai-scala-client) · 248 stars
- [Openjev](https://github.com/razorback16/openjev) · 245 stars
- [OpenJEV SGLang](https://github.com/ekzhang/openjev-sglang) · 245 stars
- [Pi Fabric](https://github.com/monotykamary/pi-fabric) · 241 stars
- [OpenJEV Verdict 2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0) · 221 stars
- [Skillbox](https://github.com/kitze/skillbox) · 220 stars
- [System One Adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python) · 218 stars
- [JEV Browser](https://github.com/jkudish/jev-browser) · 209 stars
- [Abide](https://github.com/coldteadotai/abide) · 199 stars
- [Notra](https://github.com/usenotra/notra) · 199 stars
- [TypeSafe SDK Js](https://github.com/typesafe-ai/typesafe-sdk-js) · 196 stars
- [JEV MCP](https://github.com/jkudish/jev-mcp) · 196 stars
- [JEV Visual](https://github.com/hr98w/jev-visual) · 192 stars
- [JEV Review](https://github.com/NiazMorshed2007/jev-review) · 191 stars
- [OpenWhisper](https://github.com/Knuckles92/OpenWhisper) · 187 stars
- [JEV Voice Browser](https://github.com/moritzkremb/jev-voice-browser) · 187 stars
- [Awesome JEV (fatwang2)](https://github.com/fatwang2/awesome-jev) · 185 stars
- [Jeff](https://github.com/logan-markewich/jeff) · 183 stars
- [Decider](https://github.com/Mapika/decider) · 180 stars
- [Interlinked CLI](https://github.com/QuentinCody/interlinked-cli) · 178 stars
- [TypeSafe MCP](https://github.com/itsmostafa/typesafe-mcp) · 173 stars
- [TypeSafe SDK Python](https://github.com/typesafe-ai/typesafe-sdk-python) · 171 stars
- [Perch](https://github.com/lakeday-org/perch) · 167 stars
- [Runline](https://github.com/Michaelliv/runline) · 162 stars
- [Compact Adviser](https://github.com/kunchenguid/compact-adviser) · 157 stars
- [Unclutter](https://github.com/kitze/unclutter) · 152 stars
- [djev-spark](https://github.com/mmastrac/djev-spark) · 152 stars
- [Jevpilot](https://github.com/standardagents/jevpilot) · 143 stars
- [AI](https://github.com/hackclub/ai) · 133 stars
- [Pi JEV](https://github.com/y0usaf/pi-jev) · 131 stars
- [JEV Pruner](https://github.com/tamaratran/jev-pruner) · 130 stars
- [Building with JEV Skill](https://github.com/dbreunig/building-with-jev-skill) · 128 stars
- [JEV Codex Router](https://github.com/0xNatoshi/jev-codex-router) · 125 stars
- [jev-semgrep](https://github.com/uehaj/jev-semgrep) · 122 stars
- [Effect Agent](https://github.com/danieljvdm/effect-agent) · 121 stars
- [Pi Warden](https://github.com/DevMortimer/pi-warden) · 118 stars
- [Taskuary](https://github.com/ldbumble/taskuary) · 116 stars
- [JEV Eval Agent](https://github.com/vinilana/jev-eval-agent) · 99 stars
- [JEV Drone](https://github.com/RomanSlack/jev-drone) · 96 stars
- [Bluenoise](https://github.com/rokcso/bluenoise) · 90 stars
- [Advocaat](https://github.com/pithings/advocaat) · 88 stars
- [Youtube Sponsor Detection](https://github.com/trungdq88/youtube-sponsor-detection) · 81 stars
- [Pg TypeSafe](https://github.com/giuliosmall/pg_typesafe) · 81 stars
- [JEV Shell History](https://github.com/mrnugget/jev-shell-history) · 80 stars
- [jev-gateway](https://github.com/vinilana/jev-gateway) · 79 stars
- [Jevmeter](https://github.com/ChetasLua/jevmeter) · 77 stars
- [Captaincore](https://github.com/CaptainCore/captaincore) · 71 stars
- [TypeSafe Adblock](https://github.com/realZachi/typesafe-adblock) · 64 stars
- [jegrep](https://github.com/can1357/jegrep) · 57 stars
- [Hono Jev Router](https://github.com/yusukebe/hono-jev-router) · 45 stars
- [Live Jev](https://github.com/okinaaudio/live-jev) · 38 stars
- [Jev Reviewer](https://github.com/choxos/jev-reviewer) · 30 stars
- [JEV Commit](https://github.com/valentynkit/jev-commit) · 8 stars
- [JEV Skip](https://github.com/valentynkit/jev-skip) · 3 stars
- [Jev.nvim](https://github.com/valentynkit/jev.nvim) · 3 stars

## BeatAPI

**[ギャラリーを見る](https://beatapi.io/ja/awesome-jev)** ·
**[BeatAPI Key を作成](https://beatapi.io/ja/dashboard/apikeys)** ·
**[コントリビュート](./CONTRIBUTING.md)**

JEV は BeatAPI で提供中です。同じ BeatAPI キーと USD 残高を使い、`POST /v1/systemone` でモデル `jev-1.13` を呼び出せます。

---

<sub><a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> がキュレーション · <a href="https://beatapi.io/ja/awesome-jev">ライブギャラリー</a> · <a href="./NOTICE.md">ライセンスと注記</a></sub>

<!-- catalogue links -->
- [Celesto](https://github.com/CelestoAI/celesto)
- [Atomic](https://github.com/bastani-inc/atomic)
- [Aiavatarkit](https://github.com/uezo/aiavatarkit)
- [Kody](https://github.com/kentcdodds/kody)
- [Agent](https://github.com/AgentiLoop/Agent)
- [Req LLM](https://github.com/agentjido/req_llm)
- [Omg.dev](https://github.com/BennyKok/omg.dev)
- [Vexjoy Agent](https://github.com/notque/vexjoy-agent)
- [Foreman](https://github.com/thruwire/foreman)
- [WrongStack](https://github.com/WrongStack/WrongStack)
- [Instructor Php](https://github.com/cognesy/instructor-php)
- [TypeSafe Computer Use](https://github.com/awlevin/typesafe-computer-use)
- [Jev Review](https://github.com/devagrawal09/jev-review)
- [Orchestkit](https://github.com/yonatangross/orchestkit)
- [TypeSafe Mario](https://github.com/fhshaik/typesafe-mario)
- [Openai Scala Client](https://github.com/cequence-io/openai-scala-client)
- [Pi Fabric](https://github.com/monotykamary/pi-fabric)
- [OpenWhisper](https://github.com/Knuckles92/OpenWhisper)
- [Pg JEV](https://github.com/realZachi/pg-jev)
- [Interlinked CLI](https://github.com/QuentinCody/interlinked-cli)
- [JEV Router](https://github.com/gargpratyush/jev-router)
- [Skillbox](https://github.com/kitze/skillbox)
- [Mobile JEV](https://github.com/droidrun/mobile-jev)
- [Runline](https://github.com/Michaelliv/runline)
- [JEV Search](https://github.com/superagents-lab/jev-search)
- [JEV Browser Use](https://github.com/wy-coliney/jev-browser-use)
- [JEV Review](https://github.com/NiazMorshed2007/jev-review)
- [Effect Agent](https://github.com/danieljvdm/effect-agent)
- [JEV Browser](https://github.com/jkudish/jev-browser)
- [Unclutter](https://github.com/kitze/unclutter)
- [TypeSafe SDK Python](https://github.com/typesafe-ai/typesafe-sdk-python)
- [JEV Eval Agent](https://github.com/vinilana/jev-eval-agent)
- [Bluenoise](https://github.com/rokcso/bluenoise)
- [TypeSafe MCP](https://github.com/itsmostafa/typesafe-mcp)
- [JEV Shell History](https://github.com/mrnugget/jev-shell-history)
- [JEV Codex Router](https://github.com/0xNatoshi/jev-codex-router)
- [TypeSafe Adblock](https://github.com/realZachi/typesafe-adblock)
- [JEV Skip](https://github.com/valentynkit/jev-skip)
- [JEV Commit](https://github.com/valentynkit/jev-commit)
- [Jev.nvim](https://github.com/valentynkit/jev.nvim)
- [Jevpilot](https://github.com/standardagents/jevpilot)
- [JEV Drone](https://github.com/RomanSlack/jev-drone)
- [Youtube Sponsor Detection](https://github.com/trungdq88/youtube-sponsor-detection)
- [Jevmeter](https://github.com/ChetasLua/jevmeter)
- [Captaincore](https://github.com/CaptainCore/captaincore)
- [Pg TypeSafe](https://github.com/giuliosmall/pg_typesafe)
- [Simple JEV](https://github.com/featherless-ai/simple-jev)
- [TypeSafe SDK Js](https://github.com/typesafe-ai/typesafe-sdk-js)
- [AI](https://github.com/hackclub/ai)
- [Taskuary](https://github.com/ldbumble/taskuary)
- [JEV Voice Browser](https://github.com/moritzkremb/jev-voice-browser)
- [JEV MCP](https://github.com/jkudish/jev-mcp)
- [Advocaat](https://github.com/pithings/advocaat)
- [Pi JEV](https://github.com/y0usaf/pi-jev)
- [Pi Warden](https://github.com/DevMortimer/pi-warden)
- [Openjev](https://github.com/razorback16/openjev)
