---
title: Auto-Optimize
subtitle: Acts on the content score breakdown for you, and keeps a record of what it changed and what it achieved.
enableTableOfContents: true
---

Auto-Optimize takes a page and the gaps [content score](/docs/content/content-score) found, and closes them: the missing concepts, the structure, the parts of the topic left uncovered.

It reports the score before and after, along with what changed, so the result is something you can judge rather than accept.

## Nothing publishes without you

A run produces a proposed version. You read it, and it goes live when you say so.

This is deliberate and not negotiable. An automated system rewriting published pages on its own is a bad afternoon waiting to happen, and the cost of a human read is far lower than the cost of finding out later.

## The history

Every run is logged: the score before and after, the length before and after, and the outcome.

That log is the answer to the most common frustration with any tool like this, which is a run that appears to have changed nothing. Usually it did something and the something was rejected, and the log says which.

## When a run changes little

Three ordinary reasons, and the log distinguishes them.

**The page was already close.** A page scoring well has little headroom. Small change is the correct outcome.

**The gap is structural, not textual.** If the page is aimed at the wrong query, or the topic needs a section that does not exist, adding terms cannot fix it. Those pages need a rewrite or a decision, not an optimization pass.

**The proposal was rejected.** The run produced something that did not meet the bar, and the log records why rather than publishing it anyway.

<Callout title="Read the log before rerunning">
Running it again on a page that has no headroom produces the same result and consumes another document from your allowance. The log tells you in a few seconds which of the three cases you are in.
</Callout>

## What it will not do

It will not invent expertise. If the winning pages demonstrate first-hand knowledge you do not have, closing the term gap does not close the credibility gap, and the result will read like a page that covered the right topics without knowing anything.

That is a real limit, and the pages where it bites are usually the most commercially important ones. Those deserve a person.

## Where it connects

[Content score](/docs/content/content-score) for the breakdown it acts on, [Automations](/docs/content/automations) for scheduling runs as part of a calendar, and the [WordPress plugin](/docs/integrations/wordpress) for pushing an approved version live. An assistant connected over [MCP](/docs/integrations/mcp) can read the optimization history directly.

<NeedHelp/>
