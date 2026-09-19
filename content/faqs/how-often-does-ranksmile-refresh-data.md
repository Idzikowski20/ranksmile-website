---
title: 'How often does Ranksmile refresh AI visibility data?'
subtitle: 'It depends on the priority you give a topic: core daily, supporting weekly, long-tail every two weeks. Rank tracking runs once a day.'
createdAt: '2026-09-19T00:00:00.000Z'
category: FAQ
previousLink:
  title: 'Which AI engines does Ranksmile track?'
  slug: which-ai-engines-does-ranksmile-track
nextLink:
  title: "What's the difference between rank tracking and AI visibility?"
  slug: rank-tracking-vs-ai-visibility
---

AI visibility refreshes on a schedule you set per topic, not one global interval:

| Priority   | Automatic re-scan | Manual re-scan allowed |
| ---------- | ----------------- | ---------------------- |
| Core       | every day         | once a day             |
| Supporting | every 7 days      | every 3 days           |
| Long-tail  | every 14 days     | every 7 days           |

Rank tracking is separate and simpler: positions refresh once a day.

## Why the tiers exist

Every prompt sent to every engine costs money. Scanning fifty long-tail prompts daily would spend your budget on questions whose answers barely move, and leave nothing for the ten that decide whether you get cited.

So you decide what's core. A handful of buying-intent prompts belong there. Everything else can wait a week or two and still tell you what you need to know.

## The cooldown

The manual re-scan button respects a cooldown per tier, measured from when the last scan finished rather than when you clicked. A core topic can be re-run daily, a long-tail one weekly. The button tells you when the next run is available.

Without the cooldown, one impatient afternoon would burn a month of scan budget, so it's deliberate.

<Callout title="Interpreting a flat line">
AI answers are not deterministic. The same prompt to the same engine on the same day can name different brands. A single scan is a sample, not a measurement. Look at the trend across several scans before concluding anything changed.
</Callout>

## Checking when something last ran

Every Brand Space shows the finished time of the last completed scan per topic, and the Activity Log keeps the history. If a scan looks stuck, it's treated as dead after ten minutes and can be started again.

<NeedHelp/>
