<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV — BeatAPI がキュレーションする JEV のオープンソースプロジェクト、ツール、モデル、実験" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/ja/awesome-jev">Awesome JEV ギャラリーを見る</a></strong> ·
  <a href="#注目プロジェクト">注目プロジェクト</a> ·
  <a href="#全-44-プロジェクト">全 100 プロジェクト</a> ·
  <a href="./data/projects.json">JSON カタログ</a> ·
  <a href="./README.md">English</a> ·
  <a href="./README.zh-CN.md">简体中文</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>ソースコードを確認した JEV のプロジェクト、連携、ツール、オープンモデル、実験を集めたギャラリー。</strong></p>

<p align="center">JEV が選択・採点・ルーティング・フィルタリングを担い、実行はアプリケーションコードが制御する実例を紹介します。</p>

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
      <td align="center"><strong>100</strong></td>
      <td align="center"><strong>29</strong></td>
      <td align="center"><strong>10</strong></td>
      <td align="center"><strong>2026-09-20</strong></td>
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
| **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · ブラウザ・PC 操作 · 9.5K Star<br>1 回の JEV リクエストでブラウザ操作と対象 DOM を選択します。<br>[オリジナル事例 · 294 万表示](https://x.com/gregpr07/status/2100411066966749359) · [固定コミットの根拠](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) | **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · ルーティング · 59.2K Star<br>バックエンドモデルを選ぶ前にリクエストの複雑さを分類します。<br>[固定コミットの根拠](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| [![LangChain リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) | [![Vercel AI SDK リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/vercel/ai)](https://github.com/vercel/ai) |
| **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · SDK 連携 · 146.7K Star<br>Python ワークフローで二値・分類・順序付き評価を扱います。<br>[固定コミットの根拠](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) | **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · SDK 連携 · 26.9K Star<br>choice、score、yes/no を共通の evaluate インターフェースへ変換します。<br>[固定コミットの根拠](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts) |
| [![Laya リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/NandhaKishorM/laya)](https://github.com/NandhaKishorM/laya) | [![jegrep リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/can1357/jegrep)](https://github.com/can1357/jegrep) |
| **[Laya](https://github.com/NandhaKishorM/laya)** · オープンモデル · 1.8K Star<br>多言語の型付き判断をオープンウェイトでローカル実行します。<br>[Hugging Face モデル](https://huggingface.co/convaiinnovations/laya) · [固定コミットの根拠](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md) | **[jegrep](https://github.com/can1357/jegrep)** · 検索・データ<br>インデックスを作らず、実際のコードツリーを意味検索します。<br>[固定コミットの根拠](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs) |
| [![Cua リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/trycua/cua)](https://github.com/trycua/cua) | [![Agentgateway リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/agentgateway/agentgateway)](https://github.com/agentgateway/agentgateway) |
| **[Cua · JEV Use](https://github.com/trycua/cua)** · ブラウザ・PC 操作 · 24.7K Star<br>DOM や画面領域の説明から次のアクション ID を選択します。<br>[固定コミットの根拠](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) | **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 安全性・レビュー · 4.9K Star<br>ゲートウェイで脱獄、有害コンテンツ、秘密情報漏えいを判定します。<br>[固定コミットの根拠](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |
| [![NewsJack リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/elvisun/newsjack)](https://github.com/elvisun/newsjack) | [![QuantDinger リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/OpenByteInc/QuantDinger)](https://github.com/OpenByteInc/QuantDinger) |
| **[NewsJack](https://github.com/elvisun/newsjack)** · Agent ワークフロー · 1.2K Star<br>大量のニュースを先に絞り込み、選ばれた機会だけを Agent が処理します。<br>[オリジナル事例 · 58.3 万表示](https://x.com/elvissun/status/2100951347080421409) · [固定コミットの根拠](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) | **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 業務特化ツール · 11.8K Star<br>一部の実取引エントリー前に、根拠とリスクの判断ゲートを追加します。<br>[固定コミットの根拠](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

<p align="center"><strong><a href="https://beatapi.io/ja/awesome-jev">フィルターと詳しい説明付きで見る →</a></strong></p>

## 全 100 プロジェクト

### ブラウザ・コンピューター操作（3）

[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) · [Cua · JEV Use](https://github.com/trycua/cua) · [Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop)

### SDK・フレームワーク連携（9）

[LangChain · TypeSafe](https://github.com/langchain-ai/langchain) · [Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio) · [Vercel AI SDK · TypeSafe](https://github.com/vercel/ai) · [Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai) · [Eliza · TypeSafe Client](https://github.com/elizaOS/eliza) · [LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs) · [Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig) · [Ax · TypeSafe Client](https://github.com/ax-llm/ax) · [Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant)

### ルーティング・最適化（4）

[LiteLLM · JEV Router](https://github.com/BerriAI/litellm) · [Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi) · [OpenChamber · JEV Router](https://github.com/openchamber/openchamber) · [Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate)

### オープンモデル（8）

[SemIf](https://github.com/TheoLeeCJ/SemIf) · [Laya](https://github.com/NandhaKishorM/laya) · [NanoJev](https://github.com/TianyuCodings/NanoJev) · [Jevlike](https://github.com/vinnylarouge/jevlike) · [Kev 0.5B](https://github.com/jaredpalmer/kev) · [Nimble](https://github.com/bespokelabsai/nimble) · [LocalJev](https://github.com/githubnext/localjev) · [Jeff](https://github.com/logan-markewich/jeff)

### 検索・データ（4）

[Jev Experiments](https://github.com/dabit3/jev-experiments) · [Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier) · [jev-semgrep](https://github.com/uehaj/jev-semgrep) · [jegrep](https://github.com/can1357/jegrep)

### 安全性・レビュー（5）

[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway) · [Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm) · [Abide](https://github.com/coldteadotai/abide) · [jev-align](https://github.com/sutro-sh/jev-align) · [Jev Reviewer](https://github.com/choxos/jev-reviewer)

### Agent ワークフロー（3）

[Jev Model Router](https://github.com/davila7/claude-code-templates) · [NewsJack](https://github.com/elvisun/newsjack) · [jev-gateway](https://github.com/vinilana/jev-gateway)

### UI・自動化（3）

[json-render · JEV Compose](https://github.com/vercel-labs/json-render) · [TipTour macOS](https://github.com/milind-soni/tiptour-macos) · [Live Jev](https://github.com/okinaaudio/live-jev)

### 開発者ツール（2）

[Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction) · [Hono Jev Router](https://github.com/yusukebe/hono-jev-router)

### 業務特化ツール（3）

[AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund) · [QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger) · [JEV Trader](https://github.com/jarrodwatts/jev-trader)

<details>
<summary><strong>データ、根拠、選定基準</strong></summary>

- 各項目には公開リポジトリ、固定コミットの根拠、JEV が担う具体的な判断を記録しています。
- ソース確認で見つかった直接関連の 1K+ Star リポジトリを収録し、独自性のある小規模プロジェクトも残しています。
- Star と表示回数は発見時点のスナップショットです。`source-reviewed` は性能再現、セキュリティ監査、開発者による推薦を意味しません。
- 機械可読データ：[`data/projects.json`](./data/projects.json)
- 追加・修正：[`CONTRIBUTING.md`](./CONTRIBUTING.md)

</details>

## BeatAPI

**[ギャラリーを見る](https://beatapi.io/ja/awesome-jev)** ·
**[BeatAPI Key を作成](https://beatapi.io/ja/dashboard/apikeys)** ·
**[コントリビュート](./CONTRIBUTING.md)**

モデル ID、価格、実レスポンスが確認されるまで、JEV を BeatAPI の提供中エンドポイントとは表記しません。

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
