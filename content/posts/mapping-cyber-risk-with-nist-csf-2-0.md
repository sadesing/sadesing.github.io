+++
date = '2026-04-12T20:38:51-05:00'
draft = false
title = 'Mapping Cyber Risk with NIST CSF 2.0'
tags = ["cybersecurity", "NIST", "risk management", "privacy"]
featured = true
+++

A 480-person consulting firm operating almost entirely in the cloud, with teams regularly handling client data, is also preparing to expand into federal, healthcare, and payment card markets.

Across twelve NIST CSF 2.0 controls, nine were rated as severe.

That number makes more sense in context. The workforce is mostly remote and many engagements require direct access to client systems and data. Each new market also brings its own set of compliance requirements, including FISMA, HIPAA, and PCI DSS.

The existing security program wasn’t built with any of that in mind.


<div class="risk-grid">
  <div class="risk-card severe"><span class="risk-count">9</span><span class="risk-label">Severe</span></div>
  <div class="risk-card major"><span class="risk-count">3</span><span class="risk-label">Major</span></div>
  <div class="risk-card moderate"><span class="risk-count">0</span><span class="risk-label">Moderate</span></div>
  <div class="risk-card minor"><span class="risk-count">0</span><span class="risk-label">Minor</span></div>
</div>

I used the NIST CSF 2.0 framework to assess twelve controls across its six functions: Govern, Identify, Protect, Detect, Respond, and Recover. For each control, I rated the current risk level, maturity tier, and priority, then defined a realistic target state.

  ![Diagram showing CSF maturity tiers from 0 to 4, risk levels from Minor to Severe, and how 12 controls move from current state to target state](/images/nist-csf-assessment-overview.png) 

No control targets Tier 4, which would represent a fully optimized and adaptive program. This is a more realistic progression from the current baseline.

---
## The controls that mattered most

When nine controls share the same ratings, picking the top three means looking beyond the framework. You have to think about where the organization is headed and how that changes its risk exposure.

My three were identity and credential management, vulnerability identification, and supplier prioritization.

![Diagram showing top three risk controls: identity management, vulnerability identification, and supplier prioritization](/images/nist-csf-top-three-controls.png)

The first two are fairly standard picks. Weak identity governance is one of the most common ways organizations get compromised. Weak vulnerability management means you can’t act on what you can’t see. Both remain high priority even after remediation because they require continuous attention, not a one-time fix.

Supplier prioritization is where the business context shifted the decision. An AI tool I used to analyze the same data selected leadership accountability instead. That is a reasonable framework-based answer, but it didn’t reflect where the organization is headed. Federal contracts introduce FISMA, healthcare introduces HIPAA Business Associate requirements, and payment processing introduces PCI DSS, with suppliers sitting at the center of all three. That makes third-party risk a critical dependency, not a secondary concern.

---
## What the AI got right and where it missed

I used an AI tool to analyze the assessment data and generate the heat map visualization. The zone placements aligned with my ratings because the tool was working directly from the input data. That part was straightforward.

{{< nist-heatmap >}}

The tool also produced a written analysis covering zone placements, top three risk selections, and an overall posture summary.

The written analysis is where the gaps appeared. As noted in the previous section, the top three risk picks excluded supplier prioritization because the business context was not included in the prompt. It also described the three Major-zone controls as outliers “only in degree, not in kind,” while also flagging that one of them was at Tier 0 with no process in place for public recovery communications. That is not a difference in degree, but a missing capability.

The model applied the framework consistently. However, it could not connect those results to what the organization is actually moving toward next. That interpretation layer sits outside the tool and is where human context still plays a critical role.

---
## What the target state actually means

The target state is not a mature program, but a defined one where policies exist, processes are documented, and controls are actively being executed. For an organization starting at Tier 1 across twelve controls, that is the next realistic step.

The three highest-risk controls also happen to be the ones that enable progress across everything else. Identity governance has to work before access can be managed at scale. Vulnerability management has to be systematic before detection and response become meaningful. Supplier oversight has to be formalized before the firm can responsibly take on regulated clients.
