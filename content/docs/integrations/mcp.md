---
title: MCP server
subtitle: Connect Claude, Cursor or another assistant so it can read your scores and optimization history.
enableTableOfContents: true
---

Ranksmile runs an MCP server, so an assistant you already use can read what is in your account and reason about it with you.

```text
https://app.ranksmile.pl/mcp
```

Per-client setup, including Claude Desktop, Claude Code and Cursor, is on the [MCP page](/mcp).

## How access works

The client registers itself, you approve it once in the browser, and the token it receives is scoped to your account. There is no API key to paste anywhere and nothing to rotate by hand.

An assistant sees exactly the Brand Spaces the approving account can open. Connecting a client does not widen anyone's access, and it does not create a shared credential.

## What it can read

Six tools, all read-only: your workspaces, your articles and their scores, the breakdown behind a score, the Auto-Optimize history for a piece, and the recent generation jobs behind it.

Writing stays in the app, where a person approves it. An assistant reading your scores is useful; an assistant rewriting published pages because it misread an instruction is not a trade worth making.

## What it is actually good for

Debugging, mostly. The honest use case is not "ask the assistant to do SEO", it is "ask the assistant why this specific thing looks wrong".

**A page scores badly and you cannot see why.** The assistant reads the full breakdown rather than guessing from the text, and can explain which concepts are missing and how far off the structure is.

**Auto-Optimize appears to have changed nothing.** The history holds the before and after and the outcome. The assistant reads it and tells you which of the ordinary reasons applies. See [Auto-Optimize](/docs/content/auto-optimize).

**Something generated came out wrong.** The job record shows what the generator was working from and what it returned, which is usually the whole explanation.

<Callout title="Ask narrow questions">
"Why does article 412 score lower than 388" gets a useful answer. "Improve my SEO" gets a summary of things you already know. The tools return specifics, so the questions should be specific.
</Callout>

## What it is not

It is not an API. There is no REST interface, no API key, and no way to drive the product programmatically. MCP is a read path for assistants, not an integration surface for building on.

## Where it connects

[Content score](/docs/content/content-score) and [Auto-Optimize](/docs/content/auto-optimize) produce most of what the tools return. [Smily AI](/docs/integrations/smily-ai) is the assistant inside the app, which is a different thing and can do more.

<NeedHelp/>
