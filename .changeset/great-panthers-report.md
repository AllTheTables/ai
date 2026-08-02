---
'@zenning/anthropic': patch
---

Add Claude 5 family (claude-sonnet-5, claude-opus-5, claude-fable-5, claude-mythos-5) and the 4.6-4.8 generation to getModelCapabilities (128K max output, structured outputs). Previously these fell through to the unknown-model default of 4,096 max_tokens, silently truncating large tool calls on any request that omitted maxOutputTokens. Unknown models relying on the default now emit a warning.
