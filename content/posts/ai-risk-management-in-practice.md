+++
date = '2025-11-16T20:38:51-05:00'
draft = false
title = 'What AI Risk Management Actually Looks Like'
tags = ["AI-governance", "risk-management", "NIST", "privacy"]
featured = true
+++

Imagine you're working with a 400-person consulting firm that operates across healthcare, financial services, and government. AI is everywhere: custom models trained on proprietary client data, RAG systems pulling from internal documents, AI-assisted hiring, automated contract review, and predictive analytics delivered straight to the C-suite.

Now someone asks you to figure out where the risks are. Not in theory, but in practice. Which systems could cause the most damage if something goes wrong? What framework do you apply? And how do you build a governance plan that actually fits a firm this size without over-engineering it?

This is the kind of challenge that comes with an AI governance role, and it’s exactly what I tackled in a recent risk assessment.
___

## Ranking the risks 

I started by ranking all 12 risk categories from the NIST AI Risk Management Framework in order of priority for this organization. Not every risk carries the same weight. The goal was to figure out which ones could do the most damage given how this firm actually operates.

![Risk ranking table showing NIST AI RMF risk categories ranked 1 through 6, with information security ranked highest for Sterling](/images/risk-ranking-1.png)

![Risk ranking table showing NIST AI RMF risk categories ranked 7 through 12, with environmental impacts ranked lowest for Sterling](/images/risk-ranking-2.png)


**Here's where the biggest risks landed and why**.

<div class="content-grid">
  <div class="content-grid-item">
    <h3>1. Information security</h3>
    <p>This firm runs AI models across sensitive client data, uses third-party vendors, and operates globally. A single breach could trigger regulatory penalties, contract violations, and reputational damage all at once. This risk has the potential to impact the organization at every level.</p>
  </div>
  <div class="content-grid-item">
    <h3>2. Data privacy</h3>
    <p>The firm processes protected health information, financial records, and government data across multiple jurisdictions. HIPAA, GDPR, and sector-specific privacy laws all apply at the same time. A generative AI model can surface sensitive information on its own.</p>
  </div>
  <div class="content-grid-item">
    <h3>3. Harmful bias</h3>
    <p>The firm plans to use AI for hiring, client analytics, and public-facing reports. If those systems reflect biased training data, the damage might not show up right away. But when it does, it shows up as legal liability, broken client trust, or credibility issues that are difficult to rebuild.</p>
  </div>
</div>

___

## Applying NIST AI RMF

![Breakdown of how the NIST AI Risk Management Framework's four functions, govern, map, measure, and manage, were applied to a consulting firm's AI operations](/images/nist-ai-rmf-application.png)

The NIST AI Risk Management Framework breaks down into four core functions: govern, map, measure, and manage. Instead of treating these as abstract guidelines, I applied each one directly to the firm's operations. That meant:

- Defining who owns each model and who reviews it
- Mapping where sensitive data flows through AI systems
- Building in structured testing like red-team exercises and privacy leakage scans
- Setting up incident response procedures for when something goes wrong

The goal was a governance plan that connects to workflows the firm already uses, not a separate compliance layer that sits on top.
___

## Where AI helped and where it missed

I wanted to see how AI would approach the same problem. So I ran the scenario through a generative AI tool and compared its recommendations against my own. The AI produced a coherent governance plan that included:

- A board-level AI risk committee
- A dedicated chief AI risk officer
- A cross-functional review board
- A model risk management program similar to what large financial institutions use

Some of that was genuinely useful. The ideas I kept:

- A centralized model inventory with clear lineage and a validation checklist
- Stronger vendor controls, specifically restricting data reuse and requiring breach notification timelines in contracts
- A small oversight committee with assigned model owners and second-line reviewers

But other pieces didn't fit. Universal provenance tracking on every output, immutable records for all advisory models, and multiple new executive roles would require resources that a 400-person firm doesn't have. The recommendations were solid in theory, but oversized for the organization.

The final plan blends both. I kept my risk rankings and framework alignment, then borrowed the structural ideas from the AI that could realistically be implemented.

___

## Phased rollout

The final governance plan needed to be something this firm could actually execute. I broke the implementation into three phases:

- First 90 days: inventory the top ten AI use cases, publish an acceptable use policy, and run one red-team exercise to surface early issues
- Months 3 to 6: introduce fairness testing and privacy leakage scans for the highest risk systems
- Months 6 to 12: formalize incident response drills and expand the practices that prove effective

Each phase also accounts for the firm's client base. Healthcare clients require HIPAA-aligned protections. Financial clients expect clear explanations of analytic methods. Government clients expect documentation and auditability. The governance structure had to work across all three without treating each one as a separate compliance effort.

AI governance isn't about having the perfect framework. It's about knowing which risks matter most for a specific organization and building something realistic enough to actually get implemented.