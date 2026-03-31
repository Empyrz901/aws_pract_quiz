function generateDomain1DistractorQuestions() {
  const companies = [
    "A startup",
    "An enterprise retailer",
    "A healthcare provider",
    "A fintech company",
    "A logistics platform",
    "A SaaS vendor",
    "A public sector agency",
    "A media company",
    "A manufacturing firm",
    "An edtech platform",
    "A biotech startup",
    "A global nonprofit organization",
    "A telecom provider",
    "A travel marketplace",
    "An energy company"
  ];

  const constraints = [
    "lowest operational overhead",
    "most cost-effective approach",
    "maximum business agility",
    "fastest time to market",
    "highest resilience",
    "minimum upfront investment",
    "lowest long-term TCO",
    "simplest operating model",
    "quickest migration path",
    "best elasticity during demand spikes",
    "highest compliance confidence",
    "best global user experience",
    "lowest recovery time objective",
    "least implementation risk",
    "most predictable scaling behavior"
  ];

  const templates = [
    { task: "1.1", q: (c, k) => `${c} is launching a new service with unpredictable traffic and wants to avoid overprovisioning. Leadership requires ${k}. Which AWS benefit should they prioritize?`, opts: ["Elasticity", "High CapEx procurement", "Manual capacity forecasting only", "Fixed annual hardware contracts"], ans: "Elasticity", next: "Manual capacity forecasting only", win: "Elasticity matches variable demand and avoids paying for idle resources.", lose: "Manual forecasting can help planning but cannot match real-time autoscaling behavior." },
    { task: "1.1", q: (c, k) => `${c} needs global users to experience consistently low latency for static web assets. The product owner demands ${k}. Which AWS concept best supports this goal?`, opts: ["Edge locations via content delivery", "Single Region deployment only", "One Availability Zone architecture", "On-premises WAN acceleration appliances"], ans: "Edge locations via content delivery", next: "Single Region deployment only", win: "Serving content near users with edge locations reduces latency globally.", lose: "A single Region helps centralization but does not provide worldwide edge proximity." },
    { task: "1.2", q: (c, k) => `${c} wants to improve architecture quality and run periodic reviews with minimal custom framework design. The CTO requests ${k}. Which AWS resource should they use?`, opts: ["AWS Well-Architected Framework", "AWS Artifact", "AWS Support API only", "AWS Marketplace reference architectures"], ans: "AWS Well-Architected Framework", next: "AWS Artifact", win: "Well-Architected provides structured best-practice reviews across core pillars.", lose: "Artifact offers compliance reports, not architecture review methodology." },
    { task: "1.2", q: (c, k) => `${c} is redesigning a mission-critical workload and wants architecture guidance focused on fault tolerance and recovery. The key constraint is ${k}. Which Well-Architected pillar is most relevant?`, opts: ["Reliability", "Cost Optimization", "Operational Excellence", "Sustainability"], ans: "Reliability", next: "Operational Excellence", win: "Reliability directly addresses recovery, fault tolerance, and availability design.", lose: "Operational Excellence improves operations but is not the primary pillar for resilience engineering." },
    { task: "1.3", q: (c, k) => `${c} must move a legacy app quickly to AWS with minimal code changes. Executives prioritize ${k}. Which migration strategy is most appropriate first?`, opts: ["Rehost (lift and shift)", "Refactor to microservices", "Retire the application immediately", "Rebuild from scratch"], ans: "Rehost (lift and shift)", next: "Refactor to microservices", win: "Rehost is usually the quickest path when speed and minimal changes are required.", lose: "Refactoring can improve architecture but increases timeline and engineering effort." },
    { task: "1.3", q: (c, k) => `${c} discovers a legacy internal tool is no longer used after cloud assessment. The migration office wants ${k}. Which 7R strategy should they choose?`, opts: ["Retire", "Relocate", "Repurchase", "Replatform"], ans: "Retire", next: "Repurchase", win: "Retiring unused workloads removes unnecessary cost and operational burden.", lose: "Repurchasing still incurs spend and effort for an application no longer needed." },
    { task: "1.3", q: (c, k) => `${c} wants to replace an aging self-hosted CRM with a SaaS alternative during migration. The business asks for ${k}. Which migration strategy fits best?`, opts: ["Repurchase", "Rehost", "Refactor", "Retain"], ans: "Repurchase", next: "Rehost", win: "Repurchase means moving to a SaaS product instead of migrating existing software.", lose: "Rehost preserves existing application hosting model rather than adopting SaaS." },
    { task: "1.4", q: (c, k) => `${c} wants to avoid large upfront hardware purchases and align IT spending with actual usage. Finance requires ${k}. Which cloud economics model supports this?`, opts: ["OpEx pay-as-you-go", "CapEx data center expansion", "Three-year fixed hardware lease", "One-time perpetual capacity purchase"], ans: "OpEx pay-as-you-go", next: "Three-year fixed hardware lease", win: "OpEx with pay-as-you-go directly ties cost to consumption and reduces upfront spend.", lose: "Leasing may spread payments but still lacks full usage-based elasticity." },
    { task: "1.4", q: (c, k) => `${c} is comparing infrastructure options and needs to evaluate all direct and indirect lifecycle expenses. The CFO insists on ${k}. Which analysis should the team perform?`, opts: ["Total Cost of Ownership (TCO) analysis", "Only monthly cloud bill comparison", "Only server purchase price comparison", "Only networking contract comparison"], ans: "Total Cost of Ownership (TCO) analysis", next: "Only monthly cloud bill comparison", win: "TCO captures broad lifecycle costs including operations, facilities, and labor.", lose: "Monthly bill comparison alone misses major indirect and fixed cost components." },
    { task: "1.4", q: (c, k) => `${c} runs seasonal workloads with high peaks during holidays and low utilization for most of the year. The finance team wants ${k}. Which cloud characteristic delivers the strongest value?`, opts: ["On-demand scalability", "Permanent peak-capacity provisioning", "Manual quarterly hardware expansion", "Dedicated idle standby servers"], ans: "On-demand scalability", next: "Permanent peak-capacity provisioning", win: "On-demand scaling aligns capacity with seasonal demand and lowers waste.", lose: "Permanent peak provisioning increases idle cost outside peak periods." },
    { task: "1.2", q: (c, k) => `${c} wants to standardize architecture decision-making around customer impact and measurable design tradeoffs. The constraint is ${k}. Which AWS framework is most suitable?`, opts: ["AWS Well-Architected Framework", "AWS Shared Responsibility Model", "AWS Service Health Dashboard", "AWS Trusted Advisor alone"], ans: "AWS Well-Architected Framework", next: "AWS Trusted Advisor alone", win: "Well-Architected offers pillar-based design guidance and structured review questions.", lose: "Trusted Advisor is useful for checks but not a complete architecture decision framework." },
    { task: "1.1", q: (c, k) => `${c} is moving from single-office infrastructure to cloud to reduce deployment delays from hardware lead times. Leadership demands ${k}. Which cloud benefit is most directly relevant?`, opts: ["Rapid provisioning", "Long procurement cycles", "Fixed-capacity architecture", "Physical appliance standardization"], ans: "Rapid provisioning", next: "Physical appliance standardization", win: "Rapid provisioning removes hardware lead times and accelerates delivery.", lose: "Standardization helps consistency but does not remove procurement delays by itself." },
    { task: "1.3", q: (c, k) => `${c} plans to keep one specialized manufacturing system on-premises for now due to hardware dependencies. The migration roadmap optimizes for ${k}. Which 7R strategy applies to that system?`, opts: ["Retain", "Retire", "Replatform", "Refactor"], ans: "Retain", next: "Replatform", win: "Retain means keeping a workload in place temporarily when migration constraints exist.", lose: "Replatform still implies moving and modifying the workload in cloud infrastructure." },
    { task: "1.3", q: (c, k) => `${c} needs to move many VMware-based workloads to AWS quickly without redesigning each VM first. The transformation office demands ${k}. Which strategy is most suitable?`, opts: ["Relocate", "Refactor", "Repurchase", "Retire"], ans: "Relocate", next: "Rehost", win: "Relocate supports large-scale VM moves with minimal architecture change in virtualization context.", lose: "Rehost is close but typically framed per-application lift-and-shift rather than bulk hypervisor relocation." },
    { task: "1.2", q: (c, k) => `${c} is balancing architecture decisions to reduce incidents while keeping service levels predictable. The leadership team prioritizes ${k}. Which Well-Architected pillar should be emphasized first?`, opts: ["Reliability", "Sustainability", "Cost Optimization", "Performance Efficiency"], ans: "Reliability", next: "Performance Efficiency", win: "Reliability directly focuses on fault tolerance, recovery, and consistent service operation.", lose: "Performance efficiency matters, but it does not primarily address continuity and recovery outcomes." },
    { task: "1.4", q: (c, k) => `${c} wants to compare on-prem and cloud economics including staff effort, facilities, and maintenance contracts. Finance requires ${k}. Which metric is most appropriate?`, opts: ["TCO", "Only compute unit price", "Only storage unit price", "Only internet egress price"], ans: "TCO", next: "Only compute unit price", win: "TCO includes comprehensive cost categories beyond isolated service unit prices.", lose: "Compute price alone ignores facilities, labor, downtime risk, and related costs." },
    { task: "1.1", q: (c, k) => `${c} wants to focus engineers on product features rather than racking servers and managing data center utilities. The COO requires ${k}. Which cloud value proposition applies best?`, opts: ["Undifferentiated heavy lifting reduction", "Long-term hardware ownership", "Physical DC specialization", "Manual infrastructure procurement"], ans: "Undifferentiated heavy lifting reduction", next: "Physical DC specialization", win: "Cloud offloads infrastructure management so teams can focus on business differentiation.", lose: "Data center specialization can improve internal ops but increases non-core effort." },
    { task: "1.4", q: (c, k) => `${c} is trying to minimize risk from inaccurate long-range capacity forecasts and overbuying equipment. The board asks for ${k}. Which cloud cost advantage is most relevant?`, opts: ["Pay only for consumed resources", "Three-year fixed hardware purchases", "Annual capacity reservation on-prem", "Bulk hardware procurement discounts"], ans: "Pay only for consumed resources", next: "Bulk hardware procurement discounts", win: "Consumption-based pricing reduces forecasting risk and idle-capacity waste.", lose: "Bulk discounts can lower unit cost but still require upfront commitment and forecast accuracy." },
    { task: "1.3", q: (c, k) => `${c} wants to move an application to a managed database while keeping core business logic mostly unchanged. The architect targets ${k}. Which migration strategy best describes this move?`, opts: ["Replatform", "Retire", "Rehost", "Repurchase"], ans: "Replatform", next: "Rehost", win: "Replatform introduces targeted platform improvements without full application rewrite.", lose: "Rehost aims for minimal change and would not typically include managed platform optimization." },
    { task: "1.2", q: (c, k) => `${c} needs to improve daily operational procedures, runbooks, and incident response practices in its cloud environment. The VP asks for ${k}. Which Well-Architected pillar is the best match?`, opts: ["Operational Excellence", "Security", "Cost Optimization", "Reliability"], ans: "Operational Excellence", next: "Reliability", win: "Operational Excellence addresses process, operations, and continuous improvement practices.", lose: "Reliability is related but focuses more on workload continuity than operational process maturity." }
  ];

  function rotate(opts, n) {
    const len = opts.length;
    const s = n % len;
    return opts.map((_, i) => opts[(i + s) % len]);
  }

  function buildPrompt(baseQuestion, constraint, variant) {
    const clean = baseQuestion.trim();
    const styles = [
      `A company is facing this decision: ${clean} The team is optimizing for ${constraint}.`,
      `A company is working through this scenario: ${clean} The strongest priority is ${constraint}.`,
      `A company needs guidance on the following: ${clean} They want the choice that best supports ${constraint}.`,
      `A company is evaluating this option set: ${clean} The deciding factor is ${constraint}.`
    ];
    return styles[variant % styles.length];
  }

  function buildExplanation(correct, win, nextBest, lose, variant) {
    const styles = [
      `${win} ${nextBest} is a plausible alternative, but ${lose.charAt(0).toLowerCase()}${lose.slice(1)}`,
      `${correct} is the best answer here. ${win} ${nextBest} may seem close, but ${lose.charAt(0).toLowerCase()}${lose.slice(1)}`,
      `${win} ${lose} That is why ${correct} is the better fit.`,
      `${correct} fits the requirement best. ${win} By comparison, ${nextBest} falls short because ${lose.charAt(0).toLowerCase()}${lose.slice(1)}`
    ];
    return styles[variant % styles.length];
  }

  const out = [];
  let idx = 0;
  templates.forEach((t) => {
    for (let i = 0; i < 15; i++) {
      const c = companies[i % companies.length];
      const k = constraints[(i + idx) % constraints.length];
      const opts = rotate(t.opts, i);
      out.push({
        domain: 1,
        task: t.task,
        q: buildPrompt(t.q(c, k), k, i + idx),
        opts: opts,
        ans: opts.indexOf(t.ans),
        explain: buildExplanation(t.ans, t.win, t.next, t.lose, i + idx)
      });
      idx++;
    }
  });

  return out;
}

const DOMAIN1_DISTRACTOR_QUESTIONS = generateDomain1DistractorQuestions();
