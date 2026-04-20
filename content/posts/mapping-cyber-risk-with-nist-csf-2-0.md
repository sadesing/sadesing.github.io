+++
date = '2026-04-12T20:38:51-05:00'
draft = false
title = 'Mapping Cyber Risk with NIST CSF 2.0'
tags = ["cybersecurity", "NIST", "risk management", "privacy"]
featured = true
+++

A 480-person consulting firm running almost entirely in the cloud, handling client data directly, and planning to expand into federal, healthcare, and payment card markets all at once. I conducted a NIST CSF 2.0 assessment across twelve controls, and nine of them came back Severe.

The firm's workforce is mostly remote across the western US, and its client engagements involve direct access to client networks and systems. Each of the three planned expansions brings a different compliance regime: FISMA for federal, HIPAA for healthcare, PCI DSS for card processing. The current security program wasn't built for any of them.

<div class="risk-grid">
  <div class="risk-card severe"><span class="risk-count">9</span><span class="risk-label">Severe</span></div>
  <div class="risk-card major"><span class="risk-count">3</span><span class="risk-label">Major</span></div>
  <div class="risk-card moderate"><span class="risk-count">0</span><span class="risk-label">Moderate</span></div>
  <div class="risk-card minor"><span class="risk-count">0</span><span class="risk-label">Minor</span></div>
</div>

I used NIST CSF 2.0 to assess twelve controls across the framework's six functions: Govern, Identify, Protect, Detect, Respond, and Recover. For each one, I rated the current risk level, maturity tier, and priority, then set a realistic target.

Every control came in at Tier 1 or below. Nothing was in the Moderate or Minor zone. Nine controls were Severe, three were Major. The target state moves the nine Severe controls down to Moderate and the three Major controls to Minor. No control targets Tier 4, which would mean fully optimized and adaptive. That felt honest. You don't go from Tier 1 across the board to Tier 4.

  ![Heat map showing current state of 12 NIST CSF 2.0 controls, with nine in the Severe zone and three in the Major zone](/images/nist-csf-current-state-heatmap.png) 

---
## The controls that mattered most

When nine controls share the same ratings, picking the top three means looking past the framework. You have to think about what the organization is actually about to do.

My three were identity and credential management, vulnerability identification, and supplier prioritization.

The first two are fairly standard picks. Weak identity governance is one of the most common ways organizations get compromised. Weak vulnerability management means you can't act on what you can't see. Both stay High priority even after remediation because they need ongoing attention, not a one-time fix.

Supplier prioritization is where the business context changed my call. An AI tool I used to analyze the same data picked leadership accountability as the third. That's a reasonable framework answer, but it didn't account for what the firm is planning. Federal contracts mean FISMA. Healthcare means HIPAA Business Associate requirements. Direct card processing means PCI. Suppliers are the entry point to all three at once. You don't put that lower on the list when the entire expansion strategy depends on third-party relationships holding up under regulatory scrutiny.

---
## What the AI got right and where it missed
I used an AI tool to analyze the assessment data and generate the heat map visualization. The zone placements matched my ratings because the tool was working directly from the data I provided. That part was straightforward.

Where it missed was in interpretation. The top three picks skipped supplier prioritization entirely because the business context wasn't in the prompt. The tool worked with what it had.

It also described the three Major-zone controls as outliers "only in degree, not in kind." But earlier in its own output, it had flagged that one of those controls was at Tier 0. No process at all for public communications during a recovery event. That's not a difference in degree. The tool didn't catch the contradiction between what it said in one section and what it concluded in another.

The heat map itself was genuinely useful. Seeing nine controls packed into the Severe zone and then toggling to the target state communicates the gap faster than any paragraph could. For someone in a leadership role, the visual lands before the explanation does.

{{< nist-heatmap >}}


But the visual only reflects the judgment behind it. The tool applied the framework consistently. It couldn't tell you which controls become urgent because of what a specific organization is planning to do next. That part doesn't come from the tool.

---
## What the target state actually means

The target state isn't a mature program. It's a defined one. Policies exist, processes are documented, controls are actually being executed. For an organization starting at Tier 1 across twelve controls, that's the realistic next step.

The three highest-risk controls also happen to be the ones that make progress on everything else possible. Identity governance has to work before access can be managed at scale. Vulnerability management has to be systematic before detection and response mean anything. Supplier oversight has to be formalized before the firm can responsibly take on regulated clients. The sequencing matters as much as the work.
