function generateDomain4DistractorQuestions() {
  const companies = [
    "A startup",
    "An enterprise retail company",
    "A healthcare analytics firm",
    "A fintech platform",
    "A logistics company",
    "A SaaS provider",
    "A public sector department",
    "A media business",
    "A manufacturing enterprise",
    "A gaming company",
    "A biotechnology startup",
    "A global insurance provider",
    "A telecommunications business",
    "An online education company",
    "An energy services firm"
  ];

  const constraints = [
    "lowest operational overhead",
    "most cost-effective approach",
    "maximum availability",
    "lowest latency",
    "least maintenance",
    "most cost-effective pricing",
    "lowest operational overhead for billing",
    "most cost-effective monthly spend",
    "maximum availability for production support",
    "least maintenance effort",
    "lowest operational overhead for chargeback",
    "most cost-effective reporting",
    "least maintenance in day-to-day use",
    "lowest latency for global reporting",
    "maximum availability with minimal admin effort"
  ];

  const templates = [
    { task: "4.1", q: (c, k) => `${c} has stable, long-running compute usage and wants to reduce cost without managing instance reservations per family. Finance demands ${k}. Which option is best?`, opts: ["Compute Savings Plans", "EC2 Instance Savings Plans tied to one family", "Spot Instances only", "Dedicated Hosts only"], ans: "Compute Savings Plans", next: "EC2 Instance Savings Plans tied to one family", win: "Savings Plans provide flexible discount commitments across eligible compute usage.", lose: "EC2 Instance Savings Plans can still work, but they are less flexible when usage shifts across instance families." },
    { task: "4.1", q: (c, k) => `${c} runs fault-tolerant batch jobs that can be interrupted and restarted. The objective is ${k}. Which EC2 purchasing model should be selected?`, opts: ["Spot Instances", "On-Demand Instances", "Reserved Instances with a one-year term", "Capacity Blocks for ML"], ans: "Spot Instances", next: "On-Demand Instances", win: "Spot instances are usually the lowest-cost option for interruptible workloads.", lose: "On-Demand is flexible but usually more expensive than Spot for suitable batch processing." },
    { task: "4.1", q: (c, k) => `${c} needs short-term unpredictable compute bursts with no long-term commitment. Procurement requires ${k}. Which pricing model fits best?`, opts: ["On-Demand Instances", "Savings Plans", "Standard Reserved Instances", "Spot Fleets only"], ans: "On-Demand Instances", next: "Spot Fleets only", win: "On-Demand avoids commitments and supports unpredictable usage patterns.", lose: "Spot may be cheaper but interruption risk conflicts with many unpredictable burst production workloads." },
    { task: "4.2", q: (c, k) => `${c} needs to visualize historical spend trends and forecast upcoming costs for business reviews. Leadership requests ${k}. Which AWS tool should they use first?`, opts: ["AWS Cost Explorer", "AWS Pricing Calculator for future architectures", "AWS Budgets with forecast thresholds", "AWS Cost and Usage Report (CUR) queried in Athena"], ans: "AWS Cost Explorer", next: "AWS Cost and Usage Report (CUR) queried in Athena", win: "Cost Explorer is designed for historical analysis, filtering, and forecast insights.", lose: "CUR in Athena is powerful and detailed, but it requires more setup and is less direct for quick executive trend reviews." },
    { task: "4.2", q: (c, k) => `${c} wants notifications when monthly spend exceeds a defined threshold by account and service. Finance needs ${k}. Which service is best?`, opts: ["AWS Budgets", "AWS Cost Explorer", "Amazon QuickSight dashboards over CUR", "AWS Trusted Advisor"], ans: "AWS Budgets", next: "AWS Cost Explorer", win: "Budgets provides threshold-based alerts and actions tied to planned spending limits.", lose: "Cost Explorer helps analyze and visualize spend, but Budgets is the native service for proactive threshold notifications." },
    { task: "4.2", q: (c, k) => `${c} needs the most granular line-item billing data for custom BI analysis and chargeback pipelines. Data teams require ${k}. Which AWS service should be enabled?`, opts: ["AWS Cost and Usage Report (CUR)", "AWS Budgets", "AWS Cost Explorer exports only", "AWS Billing Conductor"], ans: "AWS Cost and Usage Report (CUR)", next: "AWS Billing Conductor", win: "CUR provides detailed usage and cost line items for advanced analytics.", lose: "Billing Conductor helps model chargeback views, but CUR is still the more direct source of granular raw billing data." },
    { task: "4.2", q: (c, k) => `${c} is planning a migration and wants to estimate monthly AWS cost before deployment. The PMO wants ${k}. Which tool should be used?`, opts: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Migration Evaluator", "AWS Support Center"], ans: "AWS Pricing Calculator", next: "AWS Migration Evaluator", win: "Pricing Calculator is purpose-built for pre-deployment cost estimation scenarios.", lose: "Migration Evaluator is useful for business-case assessment, but Pricing Calculator is the more direct tool for modeling a specific target architecture." },
    { task: "4.3", q: (c, k) => `${c} needs 24/7 technical support with fast response times for production systems, but does not require a dedicated TAM. They want ${k}. Which support plan fits best?`, opts: ["Business Support", "Developer Support", "Enterprise On-Ramp", "Basic Support"], ans: "Business Support", next: "Enterprise On-Ramp", win: "Business Support provides 24/7 access and production-grade response without requiring Enterprise-level scope.", lose: "Enterprise On-Ramp can also fit many production teams, but it is a broader step up when the requirement does not call for that added scope." },
    { task: "4.3", q: (c, k) => `${c} requires a designated Technical Account Manager and strategic architectural guidance for mission-critical operations. Leadership demands ${k}. Which support plan should they choose?`, opts: ["Enterprise Support", "Business Support", "Developer Support", "Basic Support"], ans: "Enterprise Support", next: "Business Support", win: "Enterprise Support includes TAM engagement and strategic support features.", lose: "Business Support is strong operationally but does not include the same dedicated TAM capability." },
    { task: "4.2", q: (c, k) => `${c} wants centralized billing and consolidated payment across multiple AWS accounts under one organization. Finance requires ${k}. Which feature is most appropriate?`, opts: ["AWS Organizations consolidated billing", "Separate standalone payer accounts", "Cross-account IAM roles only", "AWS Marketplace private offers"], ans: "AWS Organizations consolidated billing", next: "Separate standalone payer accounts", win: "Consolidated billing centralizes invoicing and can improve discount utilization.", lose: "Separate payer accounts increase billing fragmentation and administrative overhead." },
    { task: "4.2", q: (c, k) => `${c} needs a quick way to detect unusual daily spend spikes and receive alerts for investigation. The objective is ${k}. Which feature should be enabled?`, opts: ["AWS Cost Anomaly Detection", "AWS Budgets forecast alerts", "Amazon GuardDuty", "AWS Cost Explorer scheduled reports"], ans: "AWS Cost Anomaly Detection", next: "AWS Budgets forecast alerts", win: "Cost Anomaly Detection uses ML to identify unusual spend patterns automatically.", lose: "Budgets alert on static thresholds but may miss nuanced anomalies that do not breach preset limits." },
    { task: "4.1", q: (c, k) => `${c} has predictable baseline EC2 usage for three years and wants maximum discount for specific instance attributes. The target is ${k}. Which purchase option is most aligned?`, opts: ["Standard Reserved Instances", "On-Demand Instances", "Spot Instances", "Savings Plans for burst-only usage"], ans: "Standard Reserved Instances", next: "Compute Savings Plans", win: "Standard RIs can provide deep discounts for stable, specific usage commitments.", lose: "Savings Plans are flexible but may not always maximize discount for tightly fixed usage profiles." },
    { task: "4.1", q: (c, k) => `${c} needs dedicated physical servers to satisfy strict software licensing requirements. Compliance demands ${k}. Which EC2 option should they use?`, opts: ["Dedicated Hosts", "Spot Instances", "Savings Plans", "Amazon Lightsail"], ans: "Dedicated Hosts", next: "Dedicated Instances", win: "Dedicated Hosts provide visibility and control over physical host allocation for licensing.", lose: "Dedicated Instances isolate tenancy but do not provide the same host-level control needed for some licensing models." },
    { task: "4.2", q: (c, k) => `${c} wants non-technical managers to review monthly AWS spend by service and linked account without building custom data pipelines. The finance team requires ${k}. Which tool is best?`, opts: ["AWS Cost Explorer", "AWS CUR queried via Athena", "Amazon QuickSight with CUR data", "AWS X-Ray"], ans: "AWS Cost Explorer", next: "Amazon QuickSight with CUR data", win: "Cost Explorer provides accessible filtering and visualization for standard reporting users.", lose: "QuickSight can produce polished dashboards, but it still requires extra data setup compared with native Cost Explorer views." },
    { task: "4.2", q: (c, k) => `${c} needs to enforce account-level monthly spending limits and trigger notifications to owners proactively. The governance objective is ${k}. Which service should be configured?`, opts: ["AWS Budgets", "AWS Cost Explorer forecast only", "AWS Billing Conductor", "AWS Compute Optimizer"], ans: "AWS Budgets", next: "AWS Billing Conductor", win: "Budgets supports threshold controls, notifications, and budget governance workflows.", lose: "Billing Conductor helps organize and present charges, but it does not replace budget thresholds and proactive notifications." },
    { task: "4.3", q: (c, k) => `${c} is a small development team needing business-hours guidance for experimentation workloads only. They need ${k}. Which support plan should they start with?`, opts: ["Developer Support", "Business Support", "Enterprise Support", "Basic Support"], ans: "Developer Support", next: "Basic Support", win: "Developer Support adds technical guidance for dev/test use cases beyond Basic.", lose: "Basic includes account-level support but lacks the same technical advisory scope." },
    { task: "4.3", q: (c, k) => `${c} wants architectural best-practice recommendations across cost, security, and performance categories with minimal manual inspection effort. The requirement is ${k}. Which AWS tool should they use?`, opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Support Center", "Amazon Inspector"], ans: "AWS Trusted Advisor", next: "AWS Well-Architected Tool", win: "Trusted Advisor provides broad best-practice recommendations including cost and performance domains.", lose: "The Well-Architected Tool is excellent for structured reviews, but it is a guided assessment rather than an ongoing automated recommendation engine." },
    { task: "4.2", q: (c, k) => `${c} needs to allocate shared AWS costs to internal business units with custom pricing rules for chargeback. Finance asks for ${k}. Which service is most suitable?`, opts: ["AWS Billing Conductor", "AWS Cost and Usage Report (CUR)", "Cost allocation tags only", "Amazon QuickSight only"], ans: "AWS Billing Conductor", next: "AWS Cost and Usage Report (CUR)", win: "Billing Conductor is designed for custom billing views and chargeback/showback structures.", lose: "CUR provides raw data but does not by itself implement custom pricing and billing group constructs." },
    { task: "4.1", q: (c, k) => `${c} has a mixed workload with steady baseline usage and occasional large spikes. The cost strategy must optimize for ${k}. Which approach is most appropriate?`, opts: ["Use Savings Plans for baseline and On-Demand/Spot for spikes", "Use only On-Demand for all workloads", "Use only Dedicated Hosts", "Use only Standard Reserved Instances for every workload"], ans: "Use Savings Plans for baseline and On-Demand/Spot for spikes", next: "Use only Standard Reserved Instances for every workload", win: "A blended strategy aligns commitment discounts with baseline demand while preserving spike flexibility.", lose: "All-in RI strategies can overcommit and reduce flexibility for burst patterns." },
    { task: "4.2", q: (c, k) => `${c} needs near-real-time visibility into current month spend trends across linked accounts from a single dashboard. The CFO asks for ${k}. Which tool should be used first?`, opts: ["AWS Cost Explorer", "AWS Cost and Usage Report (CUR) dashboards", "AWS Pricing Calculator", "AWS Service Catalog"], ans: "AWS Cost Explorer", next: "AWS Cost and Usage Report (CUR) dashboards", win: "Cost Explorer provides quick, centralized spend trend visibility without building custom analytics stack.", lose: "CUR can power detailed dashboards, but it usually requires additional ingestion and modeling before executives can use it easily." }
  ];

  function rotate(opts, n) {
    const len = opts.length;
    const s = n % len;
    return opts.map((_, i) => opts[(i + s) % len]);
  }

  const out = [];
  let idx = 0;
  const explanationStyles = [
    (whyCorrect, next, whyNext) => `${whyCorrect} ${whyNext}`,
    (whyCorrect, next, whyNext) => `${whyCorrect} A close alternative is ${next}, but ${whyNext}`,
    (whyCorrect, next, whyNext) => `${whyCorrect} ${next} is a common near-miss, but ${whyNext}`,
    (whyCorrect, next, whyNext) => `${whyCorrect} In this case, ${next} does not fit the requirement as well.`,
  ];
  templates.forEach((t) => {
    for (let i = 0; i < 15; i++) {
      const c = companies[i % companies.length];
      const k = constraints[(i + idx) % constraints.length];
      const opts = rotate(t.opts, i);
      const style = explanationStyles[(i + idx) % explanationStyles.length];
      out.push({
        domain: 4,
        task: t.task,
        q: t.q(c, k),
        opts: opts,
        ans: opts.indexOf(t.ans),
        explain: style(t.win, t.next, t.lose)
      });
      idx++;
    }
  });

  return out;
}

const DOMAIN4_DISTRACTOR_QUESTIONS = generateDomain4DistractorQuestions();
