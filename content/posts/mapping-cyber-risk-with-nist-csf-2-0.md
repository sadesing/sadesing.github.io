+++
date = '2026-04-12T20:38:51-05:00'
draft = false
title = 'Mapping Cyber Risk with NIST CSF 2.0'
tags = ["cybersecurity", "NIST", "risk management", "privacy"]
featured = true
+++

The company is a 480-person consulting firm operating almost entirely in the cloud and handling client data directly. It is also planning to expand into federal, healthcare, and payment card markets. Across twelve controls, nine were rated Severe.

The risk becomes clearer in context. The workforce is mostly remote, and many engagements involve direct access to client systems and data. Each expansion also introduces a different compliance requirement: FISMA, HIPAA, and PCI DSS. The current security program was not built for any of them.

<div class="risk-grid">
  <div class="risk-card severe"><span class="risk-count">9</span><span class="risk-label">Severe</span></div>
  <div class="risk-card major"><span class="risk-count">3</span><span class="risk-label">Major</span></div>
  <div class="risk-card moderate"><span class="risk-count">0</span><span class="risk-label">Moderate</span></div>
  <div class="risk-card minor"><span class="risk-count">0</span><span class="risk-label">Minor</span></div>
</div>

I used the NIST CSF 2.0 framework to assess twelve controls across its six functions: Govern, Identify, Protect, Detect, Respond, and Recover. For each control, I rated the current risk level, maturity tier, and priority, then defined a realistic target state.

  ![Diagram showing CSF maturity tiers from 0 to 4, risk levels from Minor to Severe, and how 12 controls move from current state to target state](/images/nist-csf-assessment-overview.png) 

No control targets Tier 4, which would indicate a fully optimized and adaptive program. That reflects a more realistic progression from the current baseline.

---
## The controls that mattered most

When nine controls share the same ratings, picking the top three means looking past the framework. You have to think about what the organization is actually about to do.

My three were identity and credential management, vulnerability identification, and supplier prioritization.

![Top three risk controls: identity management, vulnerability identification, and supplier prioritization](/images/nist-csf-top-three-controls.png)

The first two are fairly standard picks. Weak identity governance is one of the most common ways organizations get compromised. Weak vulnerability management means you can't act on what you can't see. Both stay High priority even after remediation because they need ongoing attention, not a one-time fix.

Supplier prioritization is where the business context changed my call. An AI tool I used to analyze the same data picked leadership accountability as the third. That's a reasonable framework answer, but it didn't account for what the firm is planning. Federal contracts mean FISMA. Healthcare means HIPAA Business Associate requirements. Direct card processing means PCI. Suppliers are the entry point to all three at once. You don't put that lower on the list when the entire expansion strategy depends on third-party relationships holding up under regulatory scrutiny.

---
## What the AI got right and where it missed

I used an AI tool to analyze the assessment data and generate the heat map visualization. The zone placements matched my ratings because the tool was working directly from the data I provided. That part was straightforward.

{{< nist-heatmap >}}

The tool also produced a written analysis covering zone placements, top three risk picks, and an overall posture summary. The zone placements matched my ratings, which was expected since the tool was working directly from the data I provided.

The written analysis is where the gaps showed up. As I mentioned in the previous section, the tool's top three picks skipped supplier prioritization because the business context wasn't in the prompt. It also described the three Major-zone controls as outliers "only in degree, not in kind," but had flagged earlier in the same output that one of those controls was at Tier 0, with no process at all for public recovery communications. That's not a difference in degree. The tool didn't catch its own contradiction.

The tool applied the framework consistently. It couldn't tell you which controls become urgent because of what a specific organization is planning to do next. That part doesn't come from the tool.

---
## What the target state actually means

The target state isn't a mature program. It's a defined one. Policies exist, processes are documented, controls are actually being executed. For an organization starting at Tier 1 across twelve controls, that's the realistic next step.

The three highest-risk controls also happen to be the ones that make progress on everything else possible. Identity governance has to work before access can be managed at scale. Vulnerability management has to be systematic before detection and response mean anything. Supplier oversight has to be formalized before the firm can responsibly take on regulated clients. The sequencing matters as much as the work.
