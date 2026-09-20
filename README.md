# Awesome Jev Projects

A compact, source-backed gallery of practical Jev integrations maintained by
[BeatAPI](https://beatapi.io).

Jev is most useful when it handles a bounded judgment—choose, score, classify,
or filter—while ordinary code keeps control of thresholds, execution, and
fallbacks. This repository preserves the original project URL and a fixed-commit
evidence link for every entry.

## Browse the gallery

- Gallery: https://beatapi.io/awesome-jev-projects
- Data: [`data/projects.json`](data/projects.json)
- Contribute: [`CONTRIBUTING.md`](CONTRIBUTING.md)

## What is included

The first edition contains 20 selected projects across browser automation,
model routing, SDKs, guardrails, context filtering, search, code review, MCP,
CLI workflows, creative tools, and vertical applications.

| Project | Pattern | Jev decision | Evidence |
| --- | --- | --- | --- |
| LangChain | SDK | typed classification | [source](https://github.com/langchain-ai/langchain/blob/eba445b7563d1709427bd8072892975a6ea59fdc/libs/partners/typesafe/langchain_typesafe/classifier.py) |
| LiteLLM | Routing | request complexity | [source](https://github.com/BerriAI/litellm/blob/56116079c8022da0e8f7ff9ccb017ad5aca5aed2/litellm/router_strategy/complexity_router/jev_classifier.py#L70) |
| Composio | SDK | tool and argument choice | [source](https://github.com/ComposioHQ/composio/blob/4b5920bf7aa55c8a44657b060d4bd25ce7b13a9a/ts/packages/providers/typesafe/src/decide.ts) |
| Cua | Browser | bounded browser action | [source](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/python/jev_adapter.py#L11) |
| Agentgateway | Guardrails | content-risk scores | [source](https://github.com/agentgateway/agentgateway/blob/6b0270efd25b5255932943e48b5ca47583d3ad28/examples/llm-guardrail-jev/guardrail.ts) |

The full list lives in the JSON catalogue so the BeatAPI gallery and other
consumers can validate and reuse one canonical source.

## Evidence policy

- `source-reviewed` means the linked file was inspected at the recorded commit.
- It does **not** mean the project was run or independently benchmarked.
- Star counts are historical snapshots, not live popularity rankings.
- Project authors and licenses remain attached to the original repositories.

## API access

BeatAPI uses one platform API key across supported capabilities. Create a key at
https://beatapi.io/dashboard/apikeys. The gallery does not claim that Jev is
currently live in the BeatAPI catalogue; availability is only announced after
the endpoint, model ID, pricing, and a real response are verified.

## License

Repository code and BeatAPI-authored catalogue text are MIT licensed. Third-party
projects retain their own licenses. See [`NOTICE.md`](NOTICE.md).
