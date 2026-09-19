---
title: AI Search Health
subtitle: Whether the crawlers behind the answer engines can reach your pages. The first thing to check when AI visibility is flat.
enableTableOfContents: true
---

Answer engines cite pages they can read. If their crawler is blocked, nothing you publish can be cited, and no amount of content work will change it.

AI Search Health checks each one and reports back Healthy, Have issues, or Blocked.

## The crawlers it checks

Eight, covering the engines Ranksmile tracks:

- **Googlebot** for the classic results
- **Google-Extended**, which governs whether Gemini may use your pages
- **OAI-SearchBot** and **ChatGPT-User** for ChatGPT
- **PerplexityBot** and **Perplexity-User** for Perplexity
- **Claude-SearchBot** and **Claude-User** for Claude

Each engine typically has two: one that crawls ahead of time to build an index, and one that fetches a page live when a user's question needs it. They can be blocked independently, and being open to one while blocking the other produces confusing results.

## Google-Extended is the one to check

It is blocked on a surprising number of sites, almost always by accident.

The confusion is understandable. It sounds like it affects your Google ranking, so somebody blocks it during a privacy review or copies a robots.txt snippet that includes it. It does not affect ranking at all. It governs one thing: whether Gemini may use your pages.

Blocking it removes you from Gemini and costs you nothing in search. That is rarely what anyone intended.

<Admonition type="warning" title="Check before you conclude anything about content">
A flat AI visibility line with a blocked crawler is not a content problem. Fix the crawler, wait for the next scans, and measure again before rewriting anything.
</Admonition>

## What blocks a crawler

Usually robots.txt, and usually not deliberately. Sometimes a firewall or bot-protection rule that treats an unfamiliar user agent as suspicious, which catches the newer AI crawlers because they are newer.

The check tells you which crawler is affected. Fixing it is work on your side, in robots.txt or your edge configuration.

## Deciding on purpose

Some organizations block AI crawlers deliberately, and that is a legitimate choice. Training and answering are different things, and the distinction is worth understanding before you decide either way.

The point of this check is not to tell you which to pick. It is to make sure the setting is the one you meant, rather than one you inherited from a config snippet.

## After you fix it

Nothing changes immediately. The engines need to crawl, index and start citing, which takes weeks rather than days. Prompts marked core re-scan daily, so the data will show the change when it arrives. See [AI visibility](/docs/ai-visibility/overview).

<NeedHelp/>
