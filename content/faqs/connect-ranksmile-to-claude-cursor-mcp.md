---
title: 'Can I connect Ranksmile to Claude, Cursor or ChatGPT?'
subtitle: 'Yes. Ranksmile runs an MCP server at app.ranksmile.pl/mcp with six read-only tools, so an assistant can read your content scores and optimization history.'
createdAt: '2026-09-19T00:00:00.000Z'
category: FAQ
previousLink:
  title: "What's the difference between rank tracking and AI visibility?"
  slug: rank-tracking-vs-ai-visibility
nextLink:
  title: 'What do I get in one Brand Space?'
  slug: what-is-in-a-brand-space
---

Yes, through [MCP](/mcp). Point any MCP client at:

```text
https://app.ranksmile.pl/mcp
```

The server speaks Streamable HTTP and authorizes with OAuth 2.1. Your client registers itself, you approve it in the browser once, and the token it receives is scoped to your account. No API key to paste anywhere, and nothing to rotate by hand.

## What the assistant can do

Six tools, all read-only:

| Tool                    | What it returns                                                               |
| ----------------------- | ----------------------------------------------------------------------------- |
| `workspace__list`       | Your workspaces and their primary domains                                     |
| `article__list`         | Articles with stored scores and word counts                                   |
| `article__get`          | One article's metadata, scores and optionally its body                        |
| `article__score`        | The per-slot breakdown behind a content score                                 |
| `article__optimize_log` | Auto-Optimize history: score and length before and after each run             |
| `article__jobs`         | Recent generation jobs, with what the generator was told and what it returned |

## Why read-only

An assistant reading your scores is useful. An assistant rewriting your published articles because it misread an instruction is a bad afternoon. Writing stays in the app, where a person approves it.

## What it's actually good for

The honest answer is debugging. `article__score` is the tool that says _why_ a piece scores badly: which terms are under-used, how the length compares to the competitor-derived target, which structural slots are empty. Ask an assistant to explain a bad score and it can read the breakdown instead of guessing from the text.

`article__optimize_log` covers the other common frustration. When Auto-Optimize appears to have changed nothing, the log holds the before and after scores and the rejection reason, which is usually the whole explanation.

## Setting it up

The [MCP page](/mcp) has per-client configuration, including Claude Desktop, Claude Code and Cursor. Most clients need one entry in a config file and a browser approval.

<Admonition type="note" title="One connection, one account">
The token is tied to the account that approved it, and the assistant sees exactly the workspaces that account can open. Connecting a client does not widen anyone's access.
</Admonition>

<NeedHelp/>
