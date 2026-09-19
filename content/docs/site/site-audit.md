---
title: Site audit
subtitle: A crawl that reports what is broken, how fast the site is, and whether the answer engines can reach you at all.
enableTableOfContents: true
---

Site audit crawls your domain and comes back with three scores, each opening to the pages behind it.

<DefinitionList>

Site Health
: The technical state of the pages that were crawled, as a share of checks that passed

AI Search Health
: Whether the crawlers behind the answer engines can reach your pages. See [AI Search Health](/docs/site/ai-search-health)

Site Speed
: How fast the site is, measured during the same crawl

</DefinitionList>

Measuring speed inside the campaign rather than on demand matters more than it sounds. A speed number from a different day, taken under different conditions, cannot be compared to the issues listed beside it. These come from one run.

## Reading the result

Start with AI Search Health, not Site Health. A blocked answer-engine crawler is both the most consequential problem and the fastest to fix, and it explains symptoms elsewhere that would otherwise send you hunting through content.

Then Site Health. The score itself is a rough signal; the list underneath it is the useful part. Work down it by how many pages each issue affects, not by how alarming the label sounds.

## What a crawl covers

Pages reachable by following links from your domain, up to the limit your plan allows. The Agency plan raises that ceiling considerably, which matters on large sites. See [plans and limits](/docs/introduction/plans).

If a section of your site is not linked from anywhere, a crawler will not find it, and neither will Google. That absence is itself a finding.

## Rerunning

The rerun button resets the job and runs the campaign again, rather than returning the previous result.

Reruns reserve their allowance before the reset, so a rerun that fails gives the allowance back instead of consuming it.

<Callout title="Compare runs, do not just read the latest">
The second crawl is worth more than the first, because it tells you what changed. A fixed issue disappearing is confirmation; a new one appearing the week after a deploy is a lead.
</Callout>

## Turning findings into work

The audit reports. [Recommendations](/docs/site/recommendations) decides what to do about it, ordering the findings by likely impact rather than leaving you with a flat list.

<NeedHelp/>
