<p align="center">
  <img src="./assets/readme/cover.webp" alt="Awesome JEV — BeatAPI がキュレーションする JEV のオープンソースプロジェクト、ツール、モデル、実験" width="100%" />
</p>

<p align="center">
  <strong><a href="https://beatapi.io/ja/awesome-jev">Awesome JEV ギャラリーを見る</a></strong> ·
  <a href="#注目プロジェクト">注目プロジェクト</a> ·
  <a href="#all-projects">全 183 プロジェクト</a> ·
  <a href="./data/projects.json">JSON カタログ</a> ·
  <a href="./README.md">English</a> ·
  <a href="./README.zh-CN.md">简体中文</a>
</p>

<h1 align="center">Awesome JEV</h1>

<p align="center"><strong>GitHub 50★以上・ソース確認済みの JEV 関連プロジェクト、連携、ツール、オープンモデル、実験、エコシステム資料をまとめています。</strong></p>

<p align="center">掲載基準は 50 stars 以上です。JEV が選択・採点・ルーティング・フィルタを担い、実行制御はアプリ側に残る事例を紹介します。</p>

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
      <td align="center"><strong>183</strong></td>
      <td align="center"><strong>49</strong></td>
      <td align="center"><strong>10</strong></td>
      <td align="center"><strong>2026-09-22</strong></td>
    </tr>
  </tbody>
</table>
</div>

<a id="categories"></a>
<h2 align="center">カテゴリから探す</h2>

<p align="center">
  <a href="#browser-computer-use"><strong>ブラウザ・PC 操作 · 16</strong></a> ·
  <a href="#sdk-integrations"><strong>SDK・フレームワーク · 30</strong></a> ·
  <a href="#routing-optimization"><strong>ルーティング · 16</strong></a> ·
  <a href="#open-models"><strong>オープンモデル · 21</strong></a> ·
  <a href="#search-data"><strong>検索・データ · 15</strong></a><br>
  <a href="#safety-review"><strong>安全性・レビュー · 14</strong></a> ·
  <a href="#agent-workflows"><strong>Agent ワークフロー · 14</strong></a> ·
  <a href="#interfaces"><strong>UI・自動化 · 9</strong></a> ·
  <a href="#developer-tools"><strong>開発者ツール · 35</strong></a> ·
  <a href="#domain-tools"><strong>業務特化ツール · 13</strong></a>
</p>

## 注目プロジェクト

|  |  |
| --- | --- |
| [![Jev Ultrafast リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/browser-use/jev-ultrafast)](https://github.com/browser-use/jev-ultrafast) | [![LiteLLM リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/BerriAI/litellm)](https://github.com/BerriAI/litellm) |
| **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · ブラウザ・PC 操作 · 16.3K Star<br>1 回の JEV リクエストでブラウザ操作と対象 DOM を選択します。<br>[オリジナル事例 · 294 万表示](https://x.com/gregpr07/status/2100411066966749359) · [固定コミットの根拠](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py) | **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · ルーティング · 59.4K Star<br>バックエンドモデルを選ぶ前にリクエストの複雑さを分類します。<br>[固定コミットの根拠](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| [![LangChain リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) | [![Vercel AI SDK リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/vercel/ai)](https://github.com/vercel/ai) |
| **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · SDK 連携 · 146.8K Star<br>Python ワークフローで二値・分類・順序付き評価を扱います。<br>[固定コミットの根拠](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) | **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · SDK 連携 · 26.9K Star<br>choice、score、yes/no を共通の evaluate インターフェースへ変換します。<br>[固定コミットの根拠](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts) |
| [![Laya リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/NandhaKishorM/laya)](https://github.com/NandhaKishorM/laya) | [![jegrep リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/can1357/jegrep)](https://github.com/can1357/jegrep) |
| **[Laya](https://github.com/NandhaKishorM/laya)** · オープンモデル · 11.5K stars<br>多言語 System 1 の型付き判断を 1 回の前向き計算で行い、チェックポイントをルーティングします。<br>[Hugging Face モデル](https://huggingface.co/convaiinnovations/laya) · [固定コミット根拠](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md)|
| [![Cua リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/trycua/cua)](https://github.com/trycua/cua) | [![Agentgateway リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/agentgateway/agentgateway)](https://github.com/agentgateway/agentgateway) |
| **[Cua · JEV Use](https://github.com/trycua/cua)** · ブラウザ・PC 操作 · 25.8K Star<br>DOM や画面領域の説明から次のアクション ID を選択します。<br>[固定コミットの根拠](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) | **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 安全性・レビュー · 5.0K Star<br>ゲートウェイで脱獄、有害コンテンツ、秘密情報漏えいを判定します。<br>[固定コミットの根拠](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |
| [![NewsJack リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/elvisun/newsjack)](https://github.com/elvisun/newsjack) | [![QuantDinger リポジトリ](https://opengraph.githubassets.com/awesome-jev-20260920/OpenByteInc/QuantDinger)](https://github.com/OpenByteInc/QuantDinger) |
| **[NewsJack](https://github.com/elvisun/newsjack)** · Agent ワークフロー · 1.3K Star<br>大量のニュースを先に絞り込み、選ばれた機会だけを Agent が処理します。<br>[オリジナル事例 · 58.3 万表示](https://x.com/elvissun/status/2100951347080421409) · [固定コミットの根拠](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer) | **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 業務特化ツール · 12.0K Star<br>一部の実取引エントリー前に、根拠とリスクの判断ゲートを追加します。<br>[固定コミットの根拠](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py) |

<p align="center"><strong><a href="https://beatapi.io/ja/awesome-jev">フィルターと詳しい説明付きで見る →</a></strong></p>

<a id="all-projects"></a>
## 全 183 プロジェクト

<a id="browser-computer-use"></a>
### ブラウザ・PC 操作 (16)

- **[Cua · JEV Use](https://github.com/trycua/cua)** · 25.8K Star — Cua Driver の観察と実行を、制限された JEV の選択肢と組み合わせたコンピューター使用例。 [根拠](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11)
- **[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)** · 16.3K Star — JEV を使用してアクションと一致する DOM 要素を選択し、入力テキストが必要な場合にのみテキスト モデルを呼び出すブラウザ エージェント。 [根拠](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/jev_ultrafast/model.py)
- **[Agent Desktop · JEV Skill](https://github.com/lahfir/agent-desktop)** · 1.4K Star — アクセシビリティ データからネイティブ デスクトップ コントロールとアクションを選択するオプションの JEV スキル。 [根拠](https://github.com/lahfir/agent-desktop/blob/7a8e4a10281c7319733aa200fd79501f34529716/scripts/jev/act.mjs)
- **[TypeSafe Computer Use](https://github.com/awlevin/typesafe-computer-use)** · 765 Star — JEV の OCR および UI 状態から候補アクションを構築して macOS を制御し、書き込みが必要な場合にのみテキスト モデルを呼び出します。 [根拠](https://github.com/awlevin/typesafe-computer-use/blob/cc7b5066ae1a07b5e3182e8f87a9b5b6dfdcffc1/typesafe_computer_use/decide.py)
- **[Jev CU](https://github.com/Sac-Y/Jev-cu)** · 549 Star — 次の UI 操作を JEV に決めさせる Computer Use 補助ツール。 [根拠](https://github.com/Sac-Y/Jev-cu/blob/38fb31de7dfe6209bbe6e04057c00c6e885ba577/scripts/jev-decide.mjs)
- **[Omg.dev](https://github.com/BennyKok/omg.dev)** · 535 Star — omg.dev モバイル テスト スクリプトは、JEV を使用してアクセシビリティ ツリーを読み取り、次のインタラクションを選択できます。 [根拠](https://github.com/BennyKok/omg.dev/blob/a00f56684a569ee417be787c148eaa9874946f2b/mobile/scripts/jev.ts)
- **[JEV Browser Use](https://github.com/wy-coliney/jev-browser-use)** · 334 Star — Codex ブラウザ ワークフローのスキル: JEV はナビゲーション、クリック、スクロールを選択し、Codex はテキスト入力と最終チェックを処理します。 [根拠](https://github.com/wy-coliney/jev-browser-use/blob/f14b60e0ae1ee90cd73eb6650e30a666a84c021a/skills/jev-browser-use/bridge.mjs)
- **[Mobile JEV](https://github.com/droidrun/mobile-jev)** · 329 Star — Web スタジオと CLI で JEV の決定を表示し、Mobilerun を通じて Android スマートフォンを制御します。 [根拠](https://github.com/droidrun/mobile-jev/blob/395fc222beac4f059f9a0beb337d114a2b066e99/scripts/mobile-agent/policy.mjs#L224)
- **[Third Hand](https://github.com/shhivv/third-hand)** · 283 Star — ローカル Computer Use 補助を動かしつつ JEV を呼ぶ Swift クライアント。 [根拠](https://github.com/shhivv/third-hand/blob/430394b35dbb44ff8b303bf19da29b0828d92bd2/Sources/ThirdHand/JevClient.swift)
- **[JEV Browser](https://github.com/jkudish/jev-browser)** · 231 Star — タスクと URL からブラウザを起動し、最終ページ、スクリーンショット、アクション トレースを返します。 [根拠](https://github.com/jkudish/jev-browser/blob/8d90c51bedbe7cd07596bfaa532ded019a31d2a8/src/navigate.ts#L1)
- **[JEV Voice Browser](https://github.com/moritzkremb/jev-voice-browser)** · 216 Star — 増分音声トランスクリプトを JEV に送信することで、Playwright ブラウザを制御します。 [根拠](https://github.com/moritzkremb/jev-voice-browser/blob/054db0f3dbf537af63a8117632d3f941ccd520e1/src/jev.js#L123)
- **[Arc CUA · TypeSafe Policy](https://github.com/shhivv/arc-cua)** · 127 Star — TypeSafe Policy 実装を備えた高速 Computer Use アクション層。 [根拠](https://github.com/shhivv/arc-cua/blob/6d47ce6c906d7d8586d3553e277c1c3611c4f6af/src/arc_cua/policies/typesafe.py)
- **[JEV Use](https://github.com/savka777/jev-use)** · 86 Star — 視覚モデルなしで Accessibility 要素を操作する macOS Computer Use ツール。 [根拠](https://github.com/savka777/jev-use/blob/8907f85354addfa3d2b78f6a462087e4c73310b8/README.md)
- **[WindTunnel · JEV Benchmarks](https://github.com/nekuda-ai/WindTunnel)** · 76 Star — アクセシビリティと WebMCP を対象に固定条件の JEV 実験を行うブラウザー Agent ベンチマークです。 [根拠](https://github.com/nekuda-ai/WindTunnel/blob/5ca8644e23826ebb30108e7bad240b61043bfe67/experiments/jev/run.mjs)
- **[TypeSafe Adblock](https://github.com/realZachi/typesafe-adblock)** · 68 Star — 候補となる DOM 要素が広告であるかどうかを JEV に尋ね、それらをハイライト表示または削除する実験的な Chrome 拡張機能。 [根拠](https://github.com/realZachi/typesafe-adblock/blob/7e067d243d87b7fe4d511653c0ddcd77b9beee18/src/typesafe.js)
- **[JEV Browser](https://github.com/Ying-Kai-Liao/jev-browser)** · 67 Star — LLM の計画と JEV の操作を組み合わせるブラウザー自動化ライブラリ、CLI、MCP サーバー。 [根拠](https://github.com/Ying-Kai-Liao/jev-browser/blob/578cff6e701a131733d03256078bb559a45ad188/src/jev.mjs)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="sdk-integrations"></a>
### SDK・フレームワーク (30)

- **[LangChain · TypeSafe](https://github.com/langchain-ai/langchain)** · 146.8K Star — Python LangChain ワークフロー用のオプションの JEV 分類子統合。 [根拠](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py)
- **[Composio · TypeSafe Provider](https://github.com/ComposioHQ/composio)** · 30.3K Star — JEV を使ってツールと許可済みの引数候補を選ぶ TypeSafe プロバイダー。 [根拠](https://github.com/ComposioHQ/composio/blob/4b5920bf7aa55c8a44657b060d4bd25ce7b13a9a/ts/packages/providers/typesafe/src/decide.ts)
- **[Vercel AI SDK · TypeSafe](https://github.com/vercel/ai)** · 26.9K Star — 共通の評価インターフェイスから JEV を利用できる、AI SDK 向け TypeSafe プロバイダー。 [根拠](https://github.com/vercel/ai/blob/73ec7015edd4f04ca9144ce93a8a037a731e5db8/packages/typesafe-ai/src/typesafe-ai-evaluation-model.ts)
- **[Pydantic AI · TypeSafe](https://github.com/pydantic/pydantic-ai)** · 20.1K Star — サポートされている構造化出力を JEV 質問にマッピングする TypeSafe モデル統合。 [根拠](https://github.com/pydantic/pydantic-ai/blob/c4898abb54dc25ae6f6aef208a4c0661b30a455e/pydantic_ai_slim/pydantic_ai/models/typesafe.py)
- **[Eliza · TypeSafe Client](https://github.com/elizaOS/eliza)** · 19.4K Star — Eliza エージェント オペレーティング システムのオプションの TypeSafe HTTP アダプター。 [根拠](https://github.com/elizaOS/eliza/blob/ebc808e3a67fb941e29153d89fc896524d32fe3c/packages/agent/src/services/typesafe/client.ts)
- **[LangChain.js · TypeSafe](https://github.com/langchain-ai/langchainjs)** · 18.2K Star — JavaScript の LangChain ワークフロー向け TypeSafeClassifier 連携。 [根拠](https://github.com/langchain-ai/langchainjs/blob/206d8b992bcf90ce7d46f2158f1ad85fc1d826c0/libs/providers/langchain-typesafe/src/classifier.ts)
- **[Rig · TypeSafe Crate](https://github.com/0xPlaygrounds/rig)** · 8.7K Star — JEV の質問と回答を Rust タイプで表現するための実験的な Rust クレート。 [根拠](https://github.com/0xPlaygrounds/rig/blob/2d16c1b25f6749b3a2cd841beddf767106495069/crates/rig-typesafeai/src/wire.rs#L40)
- **[Bifrost · TypeSafe Provider](https://github.com/maximhq/bifrost)** · 8.2K Star — Bifrost は共通の Decision 操作を通じて TypeSafe をネイティブ Provider として公開します。 [根拠](https://github.com/maximhq/bifrost/blob/40c3f7ee3a1a4277c5b269b850ca7725d419907f/core/providers/typesafe/typesafe.go)
- **[GPT-Load · JEV Provider](https://github.com/tbphp/gpt-load)** · 6.9K Star — セルフホスト AI ゲートウェイに、JEV 専用チャネルとネイティブ Decisions ルートを搭載。 [根拠](https://github.com/tbphp/gpt-load/blob/93502ced3a650018a35ed76c54573e90742b8ccc/internal/channel/modules/jev.go)
- **[Open Connector · TypeSafe](https://github.com/oomol-lab/open-connector)** · 5.9K Star — Open Connector は Provider Runtime 経由で TypeSafe 評価を公開します。 [根拠](https://github.com/oomol-lab/open-connector/blob/4e6d8533ae436cba4781b6fb69d1bf31e5fb5ffe/src/providers/typesafe_ai/runtime.ts)
- **[Kiln · JEV Adapter](https://github.com/Kiln-AI/Kiln)** · 5.1K Star — Kiln は互換 JSON Schema を JEV 質問へ変換し、構造化された単発タスクを実行します。 [根拠](https://github.com/Kiln-AI/Kiln/blob/5992e2e51ec6782fce33f277145954ba3ae8467e/libs/core/kiln_ai/adapters/model_adapters/jev_adapter.py)
- **[Ax · TypeSafe Client](https://github.com/ax-llm/ax)** · 2.9K Star — ブール型、有限クラス、およびネイティブ JEV 署名の TypeSafe 統合。 [根拠](https://github.com/ax-llm/ax/blob/5c43344f9ef3016db576fa2c3b59d48ef21b4d71/src/ax/ai/typesafe/client.ts#L1)
- **[http4k · TypeSafe Client](https://github.com/http4k/http4k)** · 2.8K Star — TypeSafe System One API 向けの型付き Kotlin クライアントと Fake 実装。 [根拠](https://github.com/http4k/http4k/blob/528ef94c9533b42be9010396bd1828ed1c84c9d2/connect/ai/typesafe/client/src/main/kotlin/org/http4k/connect/typesafe/action/SystemOne.kt)
- **[Vellum Assistant · JEV](https://github.com/vellum-ai/vellum-assistant)** · 1.3K Star — 会話状態と明示的な質問を送信するオプションの JEV プロバイダー。 [根拠](https://github.com/vellum-ai/vellum-assistant/blob/ee5ba342719e72b67698c2e1a4a78837321d0b1d/assistant/src/providers/jev/client.ts)
- **[Laravel AI · TypeSafe](https://github.com/laravel/ai)** · 1.2K Star — Laravel AI に、JEV を使う TypeSafe 分類プロバイダーが組み込まれています。 [根拠](https://github.com/laravel/ai/blob/f0a5d4f3c5bddda7c8975eb79e92d62811197484/src/Providers/TypeSafeProvider.php)
- **[Req LLM](https://github.com/agentjido/req_llm)** · 581 Star — Elixir の ReqLLM 評価インターフェイスから JEV を呼び出す TypeSafe プロバイダー。 [根拠](https://github.com/agentjido/req_llm/blob/9cb0ee7a0fea5f3520fc953911d352c93193615e/README.md)
- **[Simple JEV](https://github.com/featherless-ai/simple-jev)** · 458 Star — 専用の分類ヘッドを学習せずに、公開 LLM エンドポイントを JEV 互換の分類サービスへ変換するアダプター。 [根拠](https://github.com/featherless-ai/simple-jev/blob/0dd5396ffce671ab7c4bfc031506d8e558cf8d23/demos/jevpilot/src/simple-jev-api.js#L1-L85)
- **[Classifier.dev](https://github.com/mrmps/classifier-dev)** · 406 Star — JEV を主要な型付き判断バックエンドに使うゼロショット分類サービス。 [根拠](https://github.com/mrmps/classifier-dev/blob/33ca63816f2bc7e93c3f2d0715f7896500370739/src/jev.ts)
- **[Instructor Php](https://github.com/cognesy/instructor-php)** · 327 Star — Instructor PHP の Polyglot モジュール内の TypeSafe Decision ドライバー。 [根拠](https://github.com/cognesy/instructor-php/blob/bb1160ce2360dcf1434788c46ee97809fe782ea3/README.md)
- **[Openjev](https://github.com/razorback16/openjev)** · 286 Star — JEV API と互換性のある独立型 System One 意思決定サーバーで、オープンな DiffusionGemma モデルを実行します。 [根拠](https://github.com/razorback16/openjev/blob/91d5005effcf8cc0ecccaa9538ceabbb130fef59/openjev/api.py)
- **[Openai Scala Client](https://github.com/cequence-io/openai-scala-client)** · 248 Star — 複数の AI プロバイダーをサポートする Scala クライアントの専用 TypeSafe モジュール。 [根拠](https://github.com/cequence-io/openai-scala-client/blob/cfabe8842344da713615d0121a7804840649eb46/README.md)
- **[Pi Fabric](https://github.com/monotykamary/pi-fabric)** · 244 Star — Pi のプログラム可能なランタイムには、状態の監視、意思決定、制限されたアクションの実行のためのオプションの JEV ループが含まれています。 [根拠](https://github.com/monotykamary/pi-fabric/blob/2e5fcdd94cc364445b115756edefcaab24f68928/README.md)
- **[System One Adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python)** · 243 Star — 通常の LLM API で System One 呼び出しを受ける、TypeSafeClient 差し替えアダプタ。 [根拠](https://github.com/typesafe-ai/system-one-adapter-python/blob/adffc2eab300a4fa3c0e92252d4ffd6ceaa53700/src/system_one_adapter/_client.py)
- **[TypeSafe SDK Js](https://github.com/typesafe-ai/typesafe-sdk-js)** · 214 Star — TypeSafe によって公開された JavaScript および TypeScript SDK (型指定された JEV リクエストと回答を含む)。 [根拠](https://github.com/typesafe-ai/typesafe-sdk-js/blob/66880ccded6cb642dc1809620c2b108c33730214/README.md)
- **[TypeSafe SDK Python](https://github.com/typesafe-ai/typesafe-sdk-python)** · 188 Star — JEV System One の同期および非同期クライアントを備えた公式 TypeSafe Python SDK、および質問と回答のタイプ。 [根拠](https://github.com/typesafe-ai/typesafe-sdk-python/blob/2ce5c65f13646cab6e6f782328194c9d85f3300a/src/typesafe_sdk/_core/client/sync/client.py#L206-L221)
- **[Runline](https://github.com/Michaelliv/runline)** · 163 Star — Runline Agent JavaScript で呼び出し可能なアクションとして JEV 決定を公開する TypeSafe プラグイン。 [根拠](https://github.com/Michaelliv/runline/blob/6bdddfa82cd95b6b9a07e57fd93a271ae83a0d1b/README.md)
- **[NeuroLink · TypeSafe](https://github.com/Juspay/neurolink)** · 137 Star — NeuroLink は TypeSafe プロバイダーと JEV 分類ルーティングを提供します。 [根拠](https://github.com/Juspay/neurolink/blob/e2d87c355cf9e725ae5edc3c6db6c05fa659aaa0/src/lib/providers/typesafe.ts)
- **[AI](https://github.com/hackclub/ai)** · 133 Star — Hack Club AI プロキシの JEV 転送エンドポイント。認証、制限、使用状況ログを使用します。 [根拠](https://github.com/hackclub/ai/blob/a76ea2cb159f707a60107935a5b2e0dbdc7455f5/README.md)
- **[Effect Agent](https://github.com/danieljvdm/effect-agent)** · 121 Star — 型付き質問セットと任意のモデル選択に対応する、Effect Agent 向け TypeSafe 意思決定プロバイダー。 [根拠](https://github.com/danieljvdm/effect-agent/blob/88005e497e9b627eeb16d670f278903c57601da9/README.md)
- **[Advocaat](https://github.com/pithings/advocaat)** · 89 Star — 同じデータについて複数の型付き質問を JEV に送るための、小さな TypeScript クライアント。 [根拠](https://github.com/pithings/advocaat/blob/bc46287fc1102b95852a81d679c6e34a2c44f4a2/README.md)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="routing-optimization"></a>
### ルーティング (16)

- **[LiteLLM · JEV Router](https://github.com/BerriAI/litellm)** · 59.4K Star — LiteLLM は、複雑さベースのモデル ルーター内で JEV を使用できます。 [根拠](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70)
- **[Oh My Pi · JEV Judgments](https://github.com/can1357/oh-my-pi)** · 32.4K Star — 境界の明確なワークフロー判断に、任意の TypeSafe 意思決定プロバイダーを使えるコーディング Agent。 [根拠](https://github.com/can1357/oh-my-pi/blob/78b753124d11f8dd3ae73e2524125890ff7c977e/packages/ai/src/judgment/typesafe.ts#L4)
- **[OpenChamber · JEV Router](https://github.com/openchamber/openchamber)** · 10.2K Star — モデルを選択する前にメッセージを分類するオプションの自動モデル ルーター。 [根拠](https://github.com/openchamber/openchamber/blob/614d7f76e581a132a86575c03d3fa9aad5e624b6/packages/web/server/lib/routing/jev.js)
- **[Firstmate · JEV Dispatch](https://github.com/kunchenguid/firstmate)** · 6.9K Star — JEV を使用してタスクの概要をルールに一致させることができるエージェント クルー ディスパッチャー。 [根拠](https://github.com/kunchenguid/firstmate/blob/4812db801628040b609dc25a2a8a91ed5efac662/bin/fm-dispatch-resolve.sh)
- **[Agent Router · TypeSafe](https://github.com/theagentrouter/agent-router)** · 2.1K Star — Agent Router は Envoy ベースのゲートウェイに TypeSafe System One トランスレータを備えます。 [根拠](https://github.com/theagentrouter/agent-router/blob/7d7c07ffdb14241362def2f7d3f76cbd06d518cc/internal/translator/typesafe_systemone.go)
- **[LLMGateway · System One](https://github.com/theopenco/llmgateway)** · 1.7K Star — LLMGateway は型付き Schema と Provider マッピングを備えたネイティブ System One ルートを実装。 [根拠](https://github.com/theopenco/llmgateway/blob/24de43b5f307ecbdee9aad386b68aee76de4ae8c/apps/gateway/src/systemone/systemone.ts)
- **[Atomic](https://github.com/bastani-inc/atomic)** · 812 Star — ルーティングなど、範囲を限定した構造化選択に使える Atomic コーディング Agent の任意 JEV バックエンド。 [根拠](https://github.com/bastani-inc/atomic/blob/33ca4ccb5f39488aeba67c0212a52a31cd14059d/packages/coding-agent/src/core/structured-output/jev.ts)
- **[Vexjoy Agent](https://github.com/notque/vexjoy-agent)** · 423 Star — VexJoy リクエストを専門エージェント、スキル、ワークフローに照合するオプションの JEV ルーティング パス。 [根拠](https://github.com/notque/vexjoy-agent/blob/ab51ee7da567e84f72f76d73b6e7b83cec5ef060/README.md)
- **[Hermes JEV Skills](https://github.com/kerpopule/hermes-jev-skills)** · 401 Star — Hermes エージェント向けに、JEV 駆動のルーティング・記憶・圧縮・Skill 選択・PC/ブラウザ操作。 [根拠](https://github.com/kerpopule/hermes-jev-skills/blob/a5d89014fbeca5102c5e7ccd3915afcd856505d8/jevkit/choose.py)
- **[WrongStack](https://github.com/WrongStack/WrongStack)** · 331 Star — WrongStack の専門 Agent から担当を選ぶための、任意で使える JEV ディスパッチ分類器。 [根拠](https://github.com/WrongStack/WrongStack/blob/4cf97c0aa4f855751949ee8e99c719d06f4c26e0/README.md)
- **[JEV Router](https://github.com/gargpratyush/jev-router)** · 316 Star — Claude Code および CLI プロキシ。JEV にタスクの複雑さをスコアリングし、アカウントの利用可能なセットからモデルを選択するよう依頼します。 [根拠](https://github.com/gargpratyush/jev-router/blob/38da6b84ea01241bfc41fbddc0928d0f40a703f0/src/policy.mjs#L1-L63)
- **[Skillbox](https://github.com/kitze/skillbox)** · 223 Star — オプションの JEV 推奨事項を備えた自己ホスト型のバージョン管理されたエージェント スキル ライブラリ。 [根拠](https://github.com/kitze/skillbox/blob/d83ba4ecd254c8dfa6a759d1feb5141384e26a9e/README.md)
- **[JEV Codex Router](https://github.com/0xNatoshi/jev-codex-router)** · 184 Star — JEV で Codex の各ターンを分類し、ローカルルールに従ってモデル、推論強度、速度モードを選びます。 [根拠](https://github.com/0xNatoshi/jev-codex-router/blob/8292b519659280884627a962c826ac7721136a64/server/jev_server.py)
- **[JevRouter](https://github.com/BillionsBobby/JevRouter)** · 145 Star — モデル、ツール、サブ Agent 向けの軽量 JEV ルーター。 [根拠](https://github.com/BillionsBobby/JevRouter/blob/715970774ae8070e958e83ac9b1a780b32a9184c/src/provider.ts)
- **[Grok Bot JEV](https://github.com/Bodila51/grok-bot-jev)** · 74 Star — 使用量ゲートと Skill テンプレートを備えた Grok Bot 向け JEV 判断レイヤー。 [根拠](https://github.com/Bodila51/grok-bot-jev/blob/1583e09928c138aeac0aa89818c67ea41f08e807/README.md)
- **[Agent Router](https://github.com/nidhi-singh02/agent-router)** · 63 Star — JEV でタスクをコーディング Agent、モデル、推論強度へ振り分ける CLI。 [根拠](https://github.com/nidhi-singh02/agent-router/blob/ad7571f38ea31ffbf3c28391f9e6d6383a7c08ba/packages/router/src/semantic/typesafe-client.ts)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="open-models"></a>
### オープンモデル (21)

- **[Laya](https://github.com/NandhaKishorM/laya)** · 11.5K Star — 多言語・非自己回帰の System 1 意思決定エンジン。1 回の前向き計算で型付き choice/score/noul を出し、ルータがチェックポイントを選びます。 [根拠](https://github.com/NandhaKishorM/laya/blob/d113dca2512fb3eaca313534bc54c7162d87c1d4/README.md)
- **[SemIf](https://github.com/TheoLeeCJ/SemIf)** · 3.4K Star — semantic-if インターフェイス パターンの独立したオープンモデル実装。 [根拠](https://github.com/TheoLeeCJ/SemIf/blob/ca3ba65f142967030ecb453346e94d6f476a69df/README.md)
- **[Kev 0.5B](https://github.com/jaredpalmer/kev)** · 2.6K Star — Qwen2.5-0.5B に基づく、小さなトレーニング可能な JEV のような意思決定モデル。 [根拠](https://github.com/jaredpalmer/kev/blob/20fa6268c8ceb226530be2fb5266ab2c36b37724/README.md)
- **[NanoJev](https://github.com/TianyuCodings/NanoJev)** · 1.9K Star — 並列決定とトレーニング パイプラインを備えた JEV インターフェイスの 0.6B オープン レプリカ。 [根拠](https://github.com/TianyuCodings/NanoJev/blob/71a513bb0163b5634467842b523ee0c0ed6fb1c7/README.md)
- **[Nimble](https://github.com/bespokelabsai/nimble)** · 1.5K Star — ローカルでの型付き意思決定、データキュレーション、評価に使えるオープンツールキット。 [根拠](https://github.com/bespokelabsai/nimble/blob/35fe1f4fdbc64fa3dbbf5ac0042f3f5680c1ad28/README.md)
- **[Jevlike](https://github.com/vinnylarouge/jevlike)** · 1.2K Star — テキストまたはビジュアル オプションの変更リストを 1 パスでスコアリングする独立したスターター モデル。 [根拠](https://github.com/vinnylarouge/jevlike/blob/94f5fd1b0b11d52bbdfdf4e0ee6aa96b568f8452/README.md)
- **[LocalJev](https://github.com/githubnext/localjev)** · 704 Star — 小規模なローカル モデルにわたるベンチマークを備えたローカル JEV 互換サーバー。 [根拠](https://github.com/githubnext/localjev/blob/3f23e36e1a3bff46c7e83e8e3781d3512bc82021/README.md)
- **[Splash](https://github.com/incoai/splash)** · 578 Star — 意思決定系モデル向けの Apple Silicon ローカル推論エンジン。 [根拠](https://github.com/incoai/splash/blob/f53d5ab543a7accdc332c060fd594a693f33f529/README.md)
- **[Von](https://github.com/wfzyx/von)** · 374 Star — JEV 互換インターフェースを持つローカルのオープン System One 判断モデル。 [根拠](https://github.com/wfzyx/von/blob/14d09878e89b103bfbbe641f9bed02e4d72c8830/README.md)
- **[Decider](https://github.com/Mapika/decider)** · 279 Star — Qwen3.5-2B 微調整による、1 パスの型付き意思決定と校正確率。 [根拠](https://github.com/Mapika/decider/blob/c4daaac28af9fea95d627015cffa2dd5a5926ee6/decider/__init__.py)
- **[Rizzo Flow](https://github.com/Rizzo-AI-Academy/rizzo-flow)** · 273 Star — TypeSafe 互換の System One インターフェースを公開する独立ローカル判断モデルです。 [根拠](https://github.com/Rizzo-AI-Academy/rizzo-flow/blob/d34665b7a28c62b79f37939f2fd83f5fe659fbf9/src/rizzo_flow/compat.py)
- **[OpenJEV SGLang](https://github.com/ekzhang/openjev-sglang)** · 258 Star — オープンモデル上の JEV 互換 API。prefill-only の提供経路を使います。 [根拠](https://github.com/ekzhang/openjev-sglang/blob/604664a22b2cf44c6cc499e503092ae4e3c24c03/src/openjev/__init__.py)
- **[OpenJEV Verdict 2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** · 246 Star — 約 151M の校正済み非自己回帰ローカル意思決定エンジン。JEV 風の型付き回答を目指す。 [根拠](https://github.com/Heman10x-NGU/openJev-verdict-2.0/blob/a458733c5f43fc7f30b6e4381636cbfbf8437633/openjev/__init__.py)
- **[JEV Visual](https://github.com/hr98w/jev-visual)** · 221 Star — Apple Silicon 上の教育向け JEV 風ビジョン推論。共有コンテキストで候補を直接採点。 [根拠](https://github.com/hr98w/jev-visual/blob/19af545f096e8db4c4dd5d47aed42d92ec252111/jev_visual/scoring.py)
- **[Jeff](https://github.com/logan-markewich/jeff)** · 205 Star — GliFormer を利用したセルフホスト型の JEV 互換サービス。 [根拠](https://github.com/logan-markewich/jeff/blob/34b32f99a727c47b679adde33f4702a001e02979/README.md)
- **[Laya Node Runtime](https://github.com/receptron/laya)** · 195 Star — オープンな Laya JEV 互換判断モデル向け Node.js / TypeScript Runtime。 [根拠](https://github.com/receptron/laya/blob/6478649e723122ca24bbf5fb69ed1010023c9750/src/laya.ts)
- **[djev-spark](https://github.com/mmastrac/djev-spark)** · 168 Star — DGX Spark 上で DiffusionGemma NVFP4 構造化意思決定を動かすコンテナレシピ。 [根拠](https://github.com/mmastrac/djev-spark/blob/1444f3e927f83ba508e5b28a4fd4fdd9ecd0976b/README.md)
- **[LLM2Jev](https://github.com/Yinsongxu/LLM2Jev)** · 125 Star — ローカル言語モデルを JEV 互換の構造化判断エンジンへ変換するアダプタ。 [根拠](https://github.com/Yinsongxu/LLM2Jev/blob/6fbbf74fc604f92fc9b0b67f0989157bb2908229/src/llm2jev/inference/binary.py)
- **[Reflex](https://github.com/kshetrajna12/reflex)** · 110 Star — Qwen 上で JEV/System One インターフェースを再現する小型オープン判断モデル。 [根拠](https://github.com/kshetrajna12/reflex/blob/e21b3b23afdfeee7021a6604fa38f57e7ff5187f/README.md)
- **[Open JEV](https://github.com/daseinlabs/open-jev)** · 91 Star — カスタム微調整に対応するオープンな JEV 形式の実装。 [根拠](https://github.com/daseinlabs/open-jev/blob/8a4fbdf712e78c5ef45509a16aacb81facdd79be/README.md)
- **[OpenJev](https://github.com/SiliconLabAI/OpenJev)** · 67 Star — 型付き判断リクエスト向けのオープンソース JEV 互換実装。 [根拠](https://github.com/SiliconLabAI/OpenJev/blob/a08e969c37b2e4a37f95b3426f983bd94303590c/README.md)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="search-data"></a>
### 検索・データ (15)

- **[OpenViking · JEV Rerank](https://github.com/volcengine/OpenViking)** · 38.4K Star — OpenViking は JEV を使い、Agent の記憶・コンテキスト検索結果を較正して再順位付けできます。 [根拠](https://github.com/volcengine/OpenViking/blob/b8bed5a1ad3a1c524b5e1fd0fa591df51ca9b7cc/openviking/models/rerank/jev_rerank.py)
- **[Hindsight · TypeSafe Rerank](https://github.com/vectorize-io/hindsight)** · 24.8K Star — Agent メモリに TypeSafe リランカーを追加し、無関係な検索候補を除外できます。 [根拠](https://github.com/vectorize-io/hindsight/blob/680406b3dd9cca2108c7f0e204820a09b4e30906/hindsight-api-slim/hindsight_api/engine/cross_encoder.py)
- **[GreptimeDB · JEV SQL](https://github.com/GreptimeTeam/greptimedb)** · 6.7K Star — GreptimeDB に JEV 判断を利用する実験的 SQL 述語を追加。 [根拠](https://github.com/GreptimeTeam/greptimedb/blob/b5199bc59a199875187d808158357a33b09e5f60/src/common/function/src/scalars/jev.rs)
- **[Hippo Memory · JEV Reranker](https://github.com/kitfunso/hippo-memory)** · 752 Star — ローカル優先の Agent メモリライブラリで、任意で JEV リランカーを利用できます。 [根拠](https://github.com/kitfunso/hippo-memory/blob/c9eb2c31cd307cdae78c05e1fcb3e6d062efd5c0/src/rerankers/jev.ts)
- **[Kody](https://github.com/kentcdodds/kody)** · 663 Star — オプションの第 2 段階の検索: ハイブリッド プールを拡大し、Workers AI typesafe/jev を使用して候補者をスコア再ランク付けします。 [根拠](https://github.com/kentcdodds/kody/blob/ed9275186dc817530dd2289e62c208ac3809391f/packages/worker/src/mcp/tools/search-jev-rerank.ts)
- **[JEV Search](https://github.com/superagents-lab/jev-search)** · 385 Star — JEV を使用して Web を検索し、ソースと時間範囲を選択し、返されたリンクをランク付けします。 [根拠](https://github.com/superagents-lab/jev-search/blob/522868762f0637b20bf533f136e930cceb83b9f3/src/lib/typesafe.ts#L48)
- **[Jev Experiments](https://github.com/dabit3/jev-experiments)** · 358 Star — インテント検索やエージェント支援フローを含む小規模な JEV 実験。 [根拠](https://github.com/dabit3/jev-experiments/tree/c469e5bfdc73eb3e1999bba2569e66b579a970fd/agent-assist)
- **[Tax Document Classifier](https://github.com/kyotofin/tax-doc-classifier)** · 348 Star — 抽出された税務書類のページを固定 IRS フォーム カタログに基づいて分類します。 [根拠](https://github.com/kyotofin/tax-doc-classifier/blob/6afcf701395466d7c936ec8178daf017b9d96b0c/src/backend.ts)
- **[Pg JEV](https://github.com/realZachi/pg-jev)** · 286 Star — PostgreSQL クエリに行の自然言語フィルタリング、分類、ランク付けを追加します。 [根拠](https://github.com/realZachi/pg-jev/blob/afd11fa856d7a2b831a1bfd8ee7f869ce8efcd62/sql/jev--0.2.0.sql)
- **[SiftRank · JEV](https://github.com/noperator/siftrank)** · 202 Star — JEV を使って大規模コレクションから関連項目を探す CLI ランキングツール。 [根拠](https://github.com/noperator/siftrank/blob/03e7afe3289a204ea3dcc51613cea91877a651de/pkg/siftrank/jev_provider.go)
- **[DocJEV](https://github.com/jerryjliu/docjev)** · 201 Star — 専用 JEV エンジンを備えた文書分類・分割ツール。 [根拠](https://github.com/jerryjliu/docjev/blob/7e6b48d3f7eec8db7b582e7276f2778c0d12ca3d/src/jev_docs/engines/jev.py)
- **[jev-semgrep](https://github.com/uehaj/jev-semgrep)** · 124 Star — 多言語の AND、OR、NOT、確率しきい値を使用した意味ベースの grep。 [根拠](https://github.com/uehaj/jev-semgrep/blob/ba6ef50f85d0c5d6caa4db102ee4db4a08c85dd2/README.md)
- **[Neo4JEV](https://github.com/jexp/neo4jev)** · 81 Star — JEV で次のリレーションを分類する Neo4j グラフナビゲーター。 [根拠](https://github.com/jexp/neo4jev/blob/d157bbe496eb91813475156942bef1c6badfb342/src/neo4jev/navigator.py)
- **[Pg TypeSafe](https://github.com/giuliosmall/pg_typesafe)** · 81 Star — 分類、はい/いいえの判断、スコアリングのために SQL から JEV を呼び出すためのプレアルファ版の PostgreSQL C 拡張機能。 [根拠](https://github.com/giuliosmall/pg_typesafe/blob/4b5bfc1df11b18c3f07bb10804eeb47e4508ec6a/typesafe.c)
- **[jegrep](https://github.com/can1357/jegrep)** · 75 Star — ライブ コード ツリーのセマンティック grep: 必要なものを記述し、インデックスを作成せずにファイルと元の行範囲を取得します。 [根拠](https://github.com/can1357/jegrep/blob/a280f14f6da8163bde67e0c49f58b23517a02882/src/jev.rs)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="safety-review"></a>
### 安全性・レビュー (14)

- **[Sub2API · JEV Moderation](https://github.com/Wei-Shaw/sub2api)** · 42.3K Star — サブスクリプションを API 化するゲートウェイに、コンテンツ審査用 TypeSafe クライアントを内蔵。 [根拠](https://github.com/Wei-Shaw/sub2api/blob/1c0a69c0ceddb2fd21581c17ab09f6c500b89ba1/backend/internal/pkg/typesafe/client.go)
- **[Agentgateway · JEV Guardrail](https://github.com/agentgateway/agentgateway)** · 5.0K Star — モデルのリクエストとレスポンスを検査するための JEV Webhook ガードレールの例。 [根拠](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts)
- **[Latitude · JEV Preclassifier](https://github.com/latitude-dev/latitude-llm)** · 4.7K Star — 実行する会話チェックを選ぶための、任意で使える JEV 事前分類器。 [根拠](https://github.com/latitude-dev/latitude-llm/blob/6b2484c1d74973877fc7d353b8867c7496568d78/packages/domain/flaggers/src/use-cases/run-jev-preclassifier.ts#L1)
- **[Agent](https://github.com/AgentiLoop/Agent)** · 622 Star — TypeSafeKit クライアントを使用した、ネイティブ macOS エージェント内のオプションの JEV コマンド リスク アドバイザ。 [根拠](https://github.com/AgentiLoop/Agent/blob/078f87ceca1d1190cc73706ac8ec16442e766a27/README.md)
- **[jev-align](https://github.com/sutro-sh/jev-align)** · 271 Star — GEPA を使用して人間の例から JEV 分類器を調整するための CLI。 [根拠](https://github.com/sutro-sh/jev-align/blob/49753df924d30c0d3642b58e0b9b1e89921dc102/README.md)
- **[Abide](https://github.com/coldteadotai/abide)** · 207 Star — 通常のリンターでは表現できない制約を扱う、コーディング Agent 向けルール層。 [根拠](https://github.com/coldteadotai/abide/blob/ec3352e873163b74aca1ac9cf3bd0ea69a97723a/README.md)
- **[Interlinked CLI](https://github.com/QuentinCody/interlinked-cli)** · 177 Star — Interlinked は、任意の JEV 判断と根拠チェックをローカルのコーディング Agent 検査に追加します。 [根拠](https://github.com/QuentinCody/interlinked-cli/blob/207330d8131c5203ecc74e9fd4c24ba416463718/src/harness/jev/client.ts#L14)
- **[Unclutter](https://github.com/kitze/unclutter)** · 176 Star — JEV を使用して広告、プロモーション、購読ポップアップを識別し、再利用可能な非表示ルールを保存するブラウザ拡張機能。 [根拠](https://github.com/kitze/unclutter/blob/9ef9beccc1e57b4e3115ae68644b8fc9c19c29f6/lib/jev.ts)
- **[Pi JEV](https://github.com/y0usaf/pi-jev)** · 134 Star — 実行前にツールのリスクにフラグを立て、出力のシークレットと障害タイプをチェックする Pi 拡張機能。 [根拠](https://github.com/y0usaf/pi-jev/blob/b3478fd4ca1ac8ffcb703f6dc8d6069b555f531e/README.md)
- **[Pi Warden](https://github.com/DevMortimer/pi-warden)** · 132 Star — プロジェクト ルール、範囲外のアクション、繰り返される失敗、完了要求のチェックを Pi エージェントに追加します。 [根拠](https://github.com/DevMortimer/pi-warden/blob/e6c801679464b1a9624225114eb5fb443c27d823/src/guard.ts)
- **[Supercov](https://github.com/supercorp-ai/supercov)** · 94 Star — JEV で限定的な品質チェックを行うコード品質・カバレッジツール。 [根拠](https://github.com/supercorp-ai/supercov/blob/55f5ce93a239829c224b89e6749991310be91ea4/crates/supercov-cli/src/quality.rs)
- **[Captaincore](https://github.com/CaptainCore/captaincore)** · 71 Star — WordPress ツールキットCaptainCore の JEV コマンドは、構造化された質問に答え、マルウェア スキャナーの検出結果に優先順位を付けてレビューします。 [根拠](https://github.com/CaptainCore/captaincore/blob/f54e0669350707b2f4f4c67a0130fdd6574bd0b5/cmd/typesafe.go)
- **[JEV Lint](https://github.com/mizchi/jev-lint)** · 70 Star — 依存なしの JEV クライアントでリポジトリの検出候補を一括評価する意味的コードリンターです。 [根拠](https://github.com/mizchi/jev-lint/blob/c9846c8c9ee13a917f3af26294a4fdf1421d21b1/src/jev.ts)
- **[Oxlint Plugin JEV](https://github.com/wobsoriano/oxlint-plugin-jev)** · 55 Star — JEV で意味的な lint ルールを評価する Oxlint プラグイン。 [根拠](https://github.com/wobsoriano/oxlint-plugin-jev/blob/18c5bc9097d88344382a98a78a67698c9c7ecf01/src/jev.ts)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="agent-workflows"></a>
### Agent ワークフロー (14)

- **[Jev Model Router](https://github.com/davila7/claude-code-templates)** · 30.9K Star — サブエージェント モデルと推論強度の必要性を分類する Claude Code mod。 [根拠](https://github.com/davila7/claude-code-templates/blob/61bfcd1586bf1076f6d3cfa0436317c912811e6c/cli-tool/components/mods/productivity/jev-model-router/hooks/jev-model-router.ts)
- **[Openwork](https://github.com/different-ai/openwork)** · 23.7K Star — CI と Skill ワークフローで JEV レビューを実行できる、オープンソースの cowork 風エージェント作業空間。 [根拠](https://github.com/different-ai/openwork/blob/80c74d2160034fa1738fc6be78dd24ddfeccfc59/.github/scripts/jev-test-coverage-review.mjs)
- **[Eve](https://github.com/vercel/eve)** · 5.3K Star — Skill・評価・ツール付きワークフローをまとめる Vercel のオープンなエージェント枠組み。 [根拠](https://github.com/vercel/eve/blob/d004e6d47e9d25d0380c24b5a47b65a18f8b2784/README.md)
- **[RNSkill · JEV Office Gate](https://github.com/Pluviobyte/rnskill)** · 1.6K Star — Agent Skill 集に、限定されたオフィス文書チェック用 JEV ゲートを収録。 [根拠](https://github.com/Pluviobyte/rnskill/blob/83d1783b892bbaa29a137895ff8338264b6872fa/skills/jev-office-gate/scripts/jev_office_gate.py)
- **[NewsJack](https://github.com/elvisun/newsjack)** · 1.3K Star — ライブ ニュース フィードをスクリーニングしてタイムリーなブランド チャンスを見つけるオープンソースの PR ワークフロー。 [根拠](https://github.com/elvisun/newsjack/tree/092d882fc69912622f620c50eb493afe625f99dc/demos/news-desk-dealer)
- **[Distill · JEV Runtime](https://github.com/samuelfaj/distill)** · 683 Star — コーディング Agent Runtime が JEV レーンでルーティング・圧縮・記憶・ツール結果を処理。 [根拠](https://github.com/samuelfaj/distill/blob/d5f031153cb817f023138a9a0b3fce5516f727c4/crates/codegen/distill-shell/src/jev.rs)
- **[Smithers](https://github.com/smithersai/smithers)** · 418 Star — TypeScript 設定でワークフローを定義し、JEV 分類パスを持つエージェント枠組み。 [根拠](https://github.com/smithersai/smithers/blob/394ada6a3fb815b4b62cfc7bc2242e238d42ff44/apps/server/src/jev.ts)
- **[Compact Adviser](https://github.com/kunchenguid/compact-adviser)** · 173 Star — いつコンテキストを圧縮してトークンを節約するかを助言するコーディング Agent Skill。 [根拠](https://github.com/kunchenguid/compact-adviser/blob/d1655faa16a22b68bff60c3d7deb0123e1e52a53/packages/codex-plugin/skills/compact-adviser/SKILL.md)
- **[JEV Pruner](https://github.com/tamaratran/jev-pruner)** · 134 Star — 長い Bash 出力をモデルに渡す前に TypeSafe JEV で刈り込む Claude Code プラグイン。 [根拠](https://github.com/tamaratran/jev-pruner/blob/47d017c34eab7690b95f075ce6f4839247c5dc0a/src/jev.ts)
- **[jev-gateway](https://github.com/vinilana/jev-gateway)** · 115 Star — JEV 決定を Claude Code および Codex ツール フローに挿入するためのゲートウェイ。 [根拠](https://github.com/vinilana/jev-gateway/blob/9463952bf118773fb955427d2725a98f76546233/README.md)
- **[Skillranker](https://github.com/Dicklesworthstone/skillranker)** · 109 Star — JEV で現在のセッション文脈に対して Agent Skills を順位付けする Rust CLI。 [根拠](https://github.com/Dicklesworthstone/skillranker/blob/16743e9f9dee04850d01015d8f5c863a4ed4d0ff/README.md)
- **[Bluenoise](https://github.com/rokcso/bluenoise)** · 90 Star — デフォルトでローカル ルールを使用する X/Twitter フィルタリング拡張機能。オプションで JEV が一致しない返信をチェックします。 [根拠](https://github.com/rokcso/bluenoise/blob/ef81ea7a7c3677501d6de8f9235a4d6a866b573a/entrypoints/background.ts)
- **[JEV DSH Decision](https://github.com/Devin-AXIS/jev-dsh-decision)** · 78 Star — DeepSeek Harness と互換コーディング Agent ホスト向けの構造化 JEV 判断プラグイン。 [根拠](https://github.com/Devin-AXIS/jev-dsh-decision/blob/adc88caa9bf174d367e79a5f254c7936bcef088e/service/jev.mjs)
- **[Save Token JEV Clean](https://github.com/IAmUnbounded/save-token-jev-clean)** · 62 Star — 履歴を保持・短縮・削除するか JEV に判断させる文脈クリーナー。 [根拠](https://github.com/IAmUnbounded/save-token-jev-clean/blob/a7007354a8d3747f06ff82130561edb2822a17df/src/client.ts)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="interfaces"></a>
### UI・自動化 (9)

- **[json-render · JEV Compose](https://github.com/vercel-labs/json-render)** · 18.0K Star — 事前定義されたコンポーネントとプロパティから選択する JEV UI 構成の実験。 [根拠](https://github.com/vercel-labs/json-render/blob/3ad381881194e7011ad3ccd6d668033495a06c29/apps/web/lib/jev/compose.ts)
- **[JEV Chat Jarvis](https://github.com/jev-chat/jev-chat-jarvis)** · 1.6K Star — 表示中の会話を読み、候補返信を提案するが自動送信しない Android 会話コパイロット。 [根拠](https://github.com/jev-chat/jev-chat-jarvis/blob/d8720521fa13aa5172a891cba95c5dd8aeb44a11/app/src/main/java/com/jev/probe/jev/JevClient.kt)
- **[Aiavatarkit](https://github.com/uezo/aiavatarkit)** · 678 Star — オプションの AIAvatarKit コンポーネントは、JEV を使用して音声トランスクリプトからターン終了を判断します。 [根拠](https://github.com/uezo/aiavatarkit/blob/38b617b8b9269939734e70ef503d7ea6976acdbd/aiavatar/sts/vad/turn_end_gates/jev.py#L172)
- **[TipTour macOS](https://github.com/milind-soni/tiptour-macos)** · 642 Star — JEV または Gemini Live によって駆動されるローカル macOS コンピューター使用コンパニオン。 [根拠](https://github.com/milind-soni/tiptour-macos/blob/52582467c883d66484542f3be8e259340eb524f1/README.md)
- **[Notra](https://github.com/usenotra/notra)** · 207 Star — 作業成果を公開コンテンツに変え、Agent Skill を接続するプロダクト。 [根拠](https://github.com/usenotra/notra/blob/f792a620ef1066b34665ec84c6f55fc9ca5d9954/README.md)
- **[OpenWhisper](https://github.com/Knuckles92/OpenWhisper)** · 187 Star — オプションの JEV を備えたディクテーションと会議メモのアプリは、トピックの変更、メモを取る指示、機密テキストをチェックします。 [根拠](https://github.com/Knuckles92/OpenWhisper/blob/9e83653df183096104769e302a3c907cb277c551/README.md)
- **[JEV Chat](https://github.com/w3cj/jev-chat)** · 84 Star — JEV がコード提供の返答・ツール候補だけから選ぶツール利用チャット。 [根拠](https://github.com/w3cj/jev-chat/blob/e543aba8c21b57a28a748ef41966502130f0f69e/apps/server/src/jev/pools.ts)
- **[Jevmeter](https://github.com/ChetasLua/jevmeter)** · 81 Star — 選択したルーブリックに対してトランスクリプト文を評価するよう JEV に依頼することで、スコア メーター付きの編集済みビデオを作成します。 [根拠](https://github.com/ChetasLua/jevmeter/blob/cbf8e117b5b8835e3294c3a8ee652c7dfa737a9a/jevmeter/score.py)
- **[Youtube Sponsor Detection](https://github.com/trungdq88/youtube-sponsor-detection)** · 81 Star — YouTube 拡張機能は、JEV を使用してライブ音声とトランスクリプトからスポンサー付きセグメントを検出し、プロモーション ブロックを自動的にスキップします。 [根拠](https://github.com/trungdq88/youtube-sponsor-detection/blob/de01f0568d043035889a296a61ce21e0accc8b16/extension/lib/jev.js#L1-L541)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="developer-tools"></a>
### 開発者ツール (35)

- **[Fast Jev Compaction](https://github.com/tamaratran/fast-jev-compaction)** · 6.0K Star — 保持されたテキストをそのまま保持しながら、Claude Code ツール履歴を圧縮します。 [根拠](https://github.com/tamaratran/fast-jev-compaction/blob/e3f262a7f4d42bd8dd32ced30d26176f7cb545b0/src/client.ts)
- **[TypeSafe Skills](https://github.com/typesafe-ai/skills)** · 1.6K Star — TypeSafe の System One / JEV API 向け公式 Agent Skill 集。 [根拠](https://github.com/typesafe-ai/skills/blob/65a39f393687675ce170e6094757de20370365b9/skills/typesafe-ai/SKILL.md)
- **[Awesome JEV (yibie)](https://github.com/yibie/awesome-jev)** · 1.0K Star — 公開 JEV プロジェクト、連携、議論をまとめた大規模コミュニティ目录。 [根拠](https://github.com/yibie/awesome-jev/blob/a42aea88b30aeb62b3f165395f15336853e01863/README.md)
- **[Celesto](https://github.com/CelestoAI/celesto)** · 958 Star — Celesto PR レビューの例では、サンドボックス チェックを準備し、候補となる結果について一般的なモデルと JEV を比較します。 [根拠](https://github.com/CelestoAI/celesto/blob/fff7bb567752baee4ce195fcb78b5ee5e4da889f/examples/pr-review-jev/models.py#L96)
- **[AI CLI](https://github.com/vercel-labs/ai-cli)** · 810 Star — ターミナルからコンテンツ生成するための Agent Skill 付き CLI。 [根拠](https://github.com/vercel-labs/ai-cli/blob/6a0ed5d04ea60ee536029d469499b82898d1b214/skills/ai-cli/SKILL.md)
- **[Awesome JEV by TypeSafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe)** · 772 Star — 根拠付きの JEV ユースケース・パターン・プロンプト・スターター集。 [根拠](https://github.com/Anil-matcha/awesome-jev-by-typesafe/blob/0f4a1eadcdd70f4fc1cf8eadcf72794dfe416095/docs/jev-use-case-playbook.md)
- **[Awesome JEV Tools](https://github.com/v-modal/awesome-jev-tools)** · 628 Star — JEV と TypeSafe System One 向けツールのキュレーション目录。 [根拠](https://github.com/v-modal/awesome-jev-tools/blob/f117e0c368d6e293bf5fdf99244a1173a6dc2ae0/README.md)
- **[Jev Review](https://github.com/devagrawal09/jev-review)** · 502 Star — Git diff またはコードベースを段階的にレビューし、ローカル ダッシュボードにレビュー リードを表示します。 [根拠](https://github.com/devagrawal09/jev-review/blob/31f89602797fb7bea007f8a480bf368bf564954e/src/review/judgments.ts#L38)
- **[Foreman](https://github.com/thruwire/foreman)** · 472 Star — ワーカーの差分、ログ、テストを読み取り、スタック/オフトラック/検証について JEV Nouls に質問し、Python ポリシーを適用する独立したスーパーバイザー ループ。 [根拠](https://github.com/thruwire/foreman/blob/209182dac7a3467033fd093ab4ca47d21279984a/src/foreman/foreman/jev.py)
- **[Awesome TypeSafe](https://github.com/AbdelStark/awesome-typesafe)** · 431 Star — TypeSafe・System One・JEV の公式／コミュニティ資源をまとめたキュレーション一覧。 [根拠](https://github.com/AbdelStark/awesome-typesafe/blob/d44dc0a1e26d41bc7f543d39b4b62ae5cb9f13c8/README.md)
- **[Awesome TypeSafe JEV](https://github.com/AbdelStark/awesome-typesafe-jev)** · 431 Star — TypeSafe JEV のプロジェクト・SDK・デモ・評価を根拠付きでまとめたガイド。 [根拠](https://github.com/AbdelStark/awesome-typesafe-jev/blob/9384099af36cd439b7f0bd4311560ac02eeabe7c/README.md)
- **[Awesome Jev Skills](https://github.com/wuyoscar/jev-skill)** · 398 Star — 標準ライブラリだけで動く JEV クライアントを含む Agent スキルとワークフロー集です。 [根拠](https://github.com/wuyoscar/jev-skill/blob/4d6efbc5b87a4172524ad4ab4590aef077fdc13b/skills/jev/scripts/jev.py)
- **[Awesome JEV Projects](https://github.com/logicrw/awesome-jev-projects)** · 334 Star — 根拠付き JEV エコシステムレーダー。平易な発見 UI と GitHub 同期付き。 [根拠](https://github.com/logicrw/awesome-jev-projects/blob/d1b1b8d6c68c1754425778606d20d2cb14b09895/SKILL.md)
- **[Awesome JEV (cobanov)](https://github.com/cobanov/awesome-jev)** · 316 Star — JEV / TypeSafe System One で作られたプロジェクトの根拠付き一覧。 [根拠](https://github.com/cobanov/awesome-jev/blob/2c8c34a7a89499a0cec3ca7de3a23fec3ea9dc97/README.md)
- **[Orchestkit](https://github.com/yonatangross/orchestkit)** · 281 Star — OrchestKit はオプションで JEV を使用してコーディング セッションを分類し、信頼度がしきい値を満たしたときにその色を設定できます。 [根拠](https://github.com/yonatangross/orchestkit/blob/569095f35ce61a4881197dfb8117f4c3312e2bee/src/hooks/src/lib/session-category-provider.ts)
- **[Awesome JEV (AnotiaWang)](https://github.com/AnotiaWang/awesome-jev)** · 257 Star — JEV アプリ、ライブラリ、System One 資料のキュレーション一覧。 [根拠](https://github.com/AnotiaWang/awesome-jev/blob/04e65b59a936b2fed0d40eaec71a0a11e33bb422/README.md)
- **[JEV MCP](https://github.com/jkudish/jev-mcp)** · 245 Star — 証拠チェック、コンテンツ スクリーニング、検索、再ランキング、分類、比較、抽出のための 8 つの MCP ツール。 [根拠](https://github.com/jkudish/jev-mcp/blob/89f88b90c3180184d56961160e7178e64c98e468/src/provider.ts#L127)
- **[TypeSafe MCP](https://github.com/itsmostafa/typesafe-mcp)** · 227 Star — Claude Code、Claude Desktop、Codex、Pi から JEV へ型付き質問を送れる MCP サーバー。 [根拠](https://github.com/itsmostafa/typesafe-mcp/blob/0c9f35d9b1859189fc7e7d01947061f311ca6dde/README.md)
- **[JEV Review](https://github.com/NiazMorshed2007/jev-review)** · 196 Star — ローカルの MCP コード品質レビュアーが、構造化スコアをコーディング Agent に返します。 [根拠](https://github.com/NiazMorshed2007/jev-review/blob/57690af54ef7d862c2483342c1e61c14dffcf727/README.md)
- **[Awesome JEV (fatwang2)](https://github.com/fatwang2/awesome-jev)** · 187 Star — 根拠付き JEV ディレクトリと、再利用可能な JEV 専用 GitHub Review ワークフロー。 [根拠](https://github.com/fatwang2/awesome-jev/blob/f036095ba8203001d40be955f3486cd3e0d0a81b/.github/workflows/jev-review.yml)
- **[Perch](https://github.com/lakeday-org/perch)** · 167 Star — 発見を発火すべきかを JEV / System One に問うセマンティック lint。 [根拠](https://github.com/lakeday-org/perch/blob/54a38d6034264dc507e97294b82316c347fe5a5e/src/systemone.js)
- **[Awesome JEV Gallery](https://github.com/OmniJev/awesome-jev-gallery)** · 159 Star — System One の論文、オープン再現、独立評価を集めたギャラリー。 [根拠](https://github.com/OmniJev/awesome-jev-gallery/blob/2b84d22ab0fb9e54098788955187feb023c40ab3/README.md)
- **[Awesome JEV (HeyJunPenn)](https://github.com/heyjunpenn/awesome-jev)** · 148 Star — コミュニティ運営の多言語 JEV オープンソース・カタログ。 [根拠](https://github.com/heyjunpenn/awesome-jev/blob/eabb8446bdadd6744adce2e30871ef0691cf34e5/README.md)
- **[Building with JEV Skill](https://github.com/dbreunig/building-with-jev-skill)** · 128 Star — JEV / System One を呼ぶプログラムの作成・改善を助ける Agent Skill。 [根拠](https://github.com/dbreunig/building-with-jev-skill/blob/04fe3666c6b8b8abfec1271c0e581c823a181f6d/skills/jev/SKILL.md)
- **[Awesome Jev](https://github.com/hellogumbo/awesome-jev)** · 127 Star — awesomejev.com の元カタログで、リポジトリ、連携、デモ、研究を収録。 [根拠](https://github.com/hellogumbo/awesome-jev/blob/e18fa74fa53e27395a074cf94c7a127e912fb090/data/projects.json)
- **[Awesome JEV TypeSafe](https://github.com/valentynkit/awesome-jev-typesafe)** · 125 Star — 型付きで信頼度を扱う判断を中心にした TypeSafe JEV 資料一覧。 [根拠](https://github.com/valentynkit/awesome-jev-typesafe/blob/7eec7360d502826b51d1c8862c9fd2d76eecf6e4/readme.md)
- **[Awesome JEV (Promethe-us)](https://github.com/Promethe-us/awesome-jev)** · 122 Star — 出典を確認した JEV の資料、プロジェクト、研究、運用情報をまとめた二言語コレクションです。 [根拠](https://github.com/Promethe-us/awesome-jev/blob/636623538eda3c363b8c396880ccdc8aba70d424/README.md)
- **[Taskuary](https://github.com/ldbumble/taskuary)** · 116 Star — タスク状態に関するユーザー定義の条件をチェックするための Taskuary のオプションの JEV 判定モジュール。 [根拠](https://github.com/ldbumble/taskuary/blob/4ad29d7b292a7899767338cfcc83b2dde8f43330/README.md)
- **[Stanley Code](https://github.com/devagrawal09/stanley-code)** · 111 Star — 専用アダプターを備えたコーディング Agent 向けの限定 JEV ワークフロー。 [根拠](https://github.com/devagrawal09/stanley-code/blob/fd092558ebea389c81d44f9b10e826d9a72afaa3/src/adapters/jev.ts)
- **[Awesome JEV (kraayenjon)](https://github.com/kraayenjon/awesome-jev)** · 100 Star — JEV のユースケース、プロジェクト、SDK、ツール、学習資料をまとめたガイドです。 [根拠](https://github.com/kraayenjon/awesome-jev/blob/22570dcd8662ae039860a1dfad7d7aec4aff8e15/README.md)
- **[JEV Shell History](https://github.com/mrnugget/jev-shell-history)** · 96 Star — JEV によってランク付けされた Fish スタイルの Zsh 履歴提案ツール。コンテキストに基づいてローカル履歴から候補コマンドを順序付けします。 [根拠](https://github.com/mrnugget/jev-shell-history/blob/4b2b75d26c0ccf5726263904514a22a8e11659ea/src/suggest.ts#L1-L196)
- **[Awesome JEV Use Cases](https://github.com/walidboulanouar/awesome-jev-use-cases)** · 84 Star — 公開済み JEV デモ、リポジトリ、報告値、モデル制約を出典付きで整理したカタログです。 [根拠](https://github.com/walidboulanouar/awesome-jev-use-cases/blob/80bd47333db768044cec10b1327c9ca3bb247994/README.md)
- **[Awesome JEV (AppitStudio)](https://github.com/AppitStudio/awesome-jev)** · 73 Star — 実行可能な型付き判断例を含む JEV 資料一覧。 [根拠](https://github.com/AppitStudio/awesome-jev/blob/5d654f24aecf992617bbc45e76f32a36eba62f65/README.md)
- **[JevBench](https://github.com/fstandhartinger/jevbench)** · 71 Star — JEV、オープン判断モデル、分類器、リランカーを比較する再現可能なベンチマークです。 [根拠](https://github.com/fstandhartinger/jevbench/blob/75e6224ed8103bbc3485ca74820a2eaf7ce8abe0/jevbench/adapters/typesafe.py)
- **[Awesome JEV ZH](https://github.com/yzfly/awesome-jev-zh)** · 59 Star — 厳選プロジェクト、実践チュートリアル、価格、独立した注意点を含む中国語 JEV ガイドです。 [根拠](https://github.com/yzfly/awesome-jev-zh/blob/cdb8a78cb3ac4cec36ebe305b73a4e0b4f5cba21/README.md)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

<a id="domain-tools"></a>
### 業務特化ツール (13)

- **[AI Hedge Fund · JEV Adapter](https://github.com/virattt/ai-hedge-fund)** · 63.7K Star — 構造化された戦略判断のためのオプションの JEV アダプターを備えた教育用ヘッジファンド プロトタイプ。 [根拠](https://github.com/virattt/ai-hedge-fund/blob/154a8b2f46dca0f40764d814e4e747b0ad71f4c4/hedge_fund/llm/client.py)
- **[QuantDinger · JEV Gate](https://github.com/OpenByteInc/QuantDinger)** · 12.0K Star — 選択されたライブエントリーの前に JEV 決定ゲートを備えたオープンソースの取引 OS。 [根拠](https://github.com/OpenByteInc/QuantDinger/blob/12c04eb2cdb8a9d08dc84502f5261ec3f1c56bf7/backend_api_python/app/services/ai_decision_filter.py)
- **[JEV Trader](https://github.com/jarrodwatts/jev-trader)** · 1.9K Star — モナドブロックごとに 1 つの JEV 取引決定を要求できるマーケットメイク実験。 [根拠](https://github.com/jarrodwatts/jev-trader/blob/b587759e459ea049590102e54a0b07800864cdc3/src/model.ts)
- **[Astra + JEV Minecraft Agent](https://github.com/rmalde/minecraft-agent)** · 485 Star — プランナーが目標を定め、JEV が合法なゲーム操作を選ぶ Minecraft Agent。 [根拠](https://github.com/rmalde/minecraft-agent/blob/78b40ed59514e5e2abde33a05ce398ecb2c39e05/models.mjs)
- **[TypeSafe Mario](https://github.com/fhshaik/typesafe-mario)** · 338 Star — JEV 構造化エミュレータ RAM とスクリーンショットの代わりにテレメトリを提供する実験的な NES マリオ コントローラ。 [根拠](https://github.com/fhshaik/typesafe-mario/blob/ca22449ed187118d19326d1f54b01b6636578aa4/README.md)
- **[Embodied JEV](https://github.com/FBddcz/embodied-jev)** · 170 Star — JEV、ローカルモデル、汎用モデルの判断ポリシーを比較する身体化 Agent 評価基盤です。 [根拠](https://github.com/FBddcz/embodied-jev/blob/687210b62f3fad831295ebb1b83dab0b4e013baa/src/embodied_jev/policies.py)
- **[Jevpilot](https://github.com/standardagents/jevpilot)** · 155 Star — JEV がローカルで生成されたパスと速度の中から選択するブラウザー運転シミュレーター。 [根拠](https://github.com/standardagents/jevpilot/blob/e1beeb13b9a928fb76f167f86af584f4ce9cf180/README.md)
- **[Dasheng](https://github.com/wquguru/dasheng)** · 119 Star — ストリーミング ASR と単語ごとの JEV 判断を組み合わせた音読練習アプリ。 [根拠](https://github.com/wquguru/dasheng/blob/1bacff4a075527e6c02da242a72d117e7cb3286b/lib/jev.js)
- **[JEV Drone](https://github.com/RomanSlack/jev-drone)** · 119 Star — JEV 戦術的なアドバイスのためにカメラ バッファーからシーンの特徴を導出する MuJoCo ドローン実験。 [根拠](https://github.com/RomanSlack/jev-drone/blob/cbeb53ce4f17a06ea490ae43effcdad231143610/tactics.py#L184)
- **[JEV Eval Agent](https://github.com/vinilana/jev-eval-agent)** · 103 Star — 標準 LLM ツールの選択と 100 個のモック ツールにわたる JEV ルーティングを比較するエージェント ツール評価ハーネス。 [根拠](https://github.com/vinilana/jev-eval-agent/blob/037de1120c84b4b63cdf748e2acf258ff66d7731/agent/lib/jev-router.ts#L1-L154)
- **[Formanator](https://github.com/timrogers/formanator)** · 99 Star — 任意の JEV レシート分類を備えた福利厚生申請 CLI / MCP クライアント。 [根拠](https://github.com/timrogers/formanator/blob/548740edef37a4169eef163e4988e64f43a560ec/src/typesafe.rs)
- **[JEV Trade](https://github.com/aowang-ai/jev-trade)** · 95 Star — JEV を限定判断レイヤーに使う Hyperliquid ライブ取引 Agent。 [根拠](https://github.com/aowang-ai/jev-trade/blob/df2c9656324a8a75996eb0612de7adcfe3ce6f89/src/model.ts)
- **[Prism Liquidity Agent](https://github.com/irfndi/prism-liquidity-agent)** · 69 Star — リバランス判断サービスで JEV を使う自律流動性 Agent。 [根拠](https://github.com/irfndi/prism-liquidity-agent/blob/22c67bdbe30bab608226832256a5013ad826b707/engine/jev-service.ts)

<sub><a href="#categories">↑ カテゴリへ戻る</a></sub>

## BeatAPI

**[ギャラリーを見る](https://beatapi.io/ja/awesome-jev)** ·
**[BeatAPI Key を作成](https://beatapi.io/ja/dashboard/apikeys)** ·
**[コントリビュート](./CONTRIBUTING.md)**

JEV は BeatAPI で提供中です。同じ BeatAPI キーと USD 残高を使い、`POST /v1/systemone` でモデル `jev-1.13` を呼び出せます。

---

<sub><a href="https://github.com/BeatAPI"><b>BeatAPI</b></a> がキュレーション · <a href="https://beatapi.io/ja/awesome-jev">ライブギャラリー</a> · <a href="./NOTICE.md">ライセンスと注記</a></sub>
