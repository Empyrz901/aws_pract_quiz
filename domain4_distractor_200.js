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
    { task: "4.1", q: (c, k) => `${c} has stable, long-running compute usage and wants to reduce cost without managing instance reservations per family. Finance demands ${k}. Which option is best?`, opts: ["Compute Savings Plans", "EC2 Instance Savings Plans", "Standard Reserved Instances", "On-Demand Instances"], ans: "Compute Savings Plans", next: "EC2 Instance Savings Plans", win: "Savings Plans provide flexible discount commitments across eligible compute usage.", lose: "EC2 Instance Savings Plans are narrower and less flexible when usage shifts across families." },
    { task: "4.1", q: (c, k) => `${c} runs fault-tolerant batch jobs that can be interrupted and restarted. The objective is ${k}. Which EC2 purchasing model should be selected?`, opts: ["Spot Instances", "On-Demand Instances", "Reserved Instances", "Compute Savings Plans"], ans: "Spot Instances", next: "On-Demand Instances", win: "Spot instances are usually the lowest-cost option for interruptible workloads.", lose: "On-Demand is flexible but usually more expensive than Spot for suitable batch processing." },
    { task: "4.1", q: (c, k) => `${c} needs short-term unpredictable compute bursts with no long-term commitment. Procurement requires ${k}. Which pricing model fits best?`, opts: ["On-Demand Instances", "Compute Savings Plans", "Standard Reserved Instances", "Spot Instances"], ans: "On-Demand Instances", next: "Spot Instances", win: "On-Demand avoids commitments and supports unpredictable usage patterns.", lose: "Spot may be cheaper but interruption risk can conflict with burst production workloads." },
    { task: "4.2", q: (c, k) => `${c} needs to visualize historical spend trends and forecast upcoming costs for business reviews. Leadership requests ${k}. Which AWS tool should they use first?`, opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report (CUR) queried in Athena", "AWS Pricing Calculator"], ans: "AWS Cost Explorer", next: "AWS Budgets", win: "Cost Explorer is designed for historical analysis, filtering, and forecast insights.", lose: "Budgets is stronger for threshold management than for exploratory spend analysis." },
    { task: "4.2", q: (c, k) => `${c} wants notifications when monthly spend exceeds a defined threshold by account and service. Finance needs ${k}. Which service is best?`, opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Cost Anomaly Detection", "AWS Trusted Advisor"], ans: "AWS Budgets", next: "AWS Cost Anomaly Detection", win: "Budgets provides threshold-based alerts and actions tied to planned spending limits.", lose: "Cost Anomaly Detection finds unusual patterns, but Budgets is the native threshold tool." },
    { task: "4.2", q: (c, k) => `${c} needs the most granular line-item billing data for custom BI analysis and chargeback pipelines. Data teams require ${k}. Which AWS service should be enabled?`, opts: ["AWS Cost and Usage Report (CUR)", "AWS Cost Explorer", "AWS Budgets", "Cost allocation tags"], ans: "AWS Cost and Usage Report (CUR)", next: "AWS Cost Explorer", win: "CUR provides detailed usage and cost line items for advanced analytics.", lose: "Cost Explorer helps with analysis, but CUR is the more direct raw data source." },
    { task: "4.2", q: (c, k) => `${c} is planning a migration and wants to estimate monthly AWS cost before deployment. The PMO wants ${k}. Which tool should be used?`, opts: ["AWS Pricing Calculator", "AWS Migration Evaluator", "AWS Cost Explorer", "AWS Budgets"], ans: "AWS Pricing Calculator", next: "AWS Migration Evaluator", win: "Pricing Calculator is purpose-built for pre-deployment cost estimation scenarios.", lose: "Migration Evaluator helps assess migration business cases, but Pricing Calculator models a target architecture directly." },
    { task: "4.3", q: (c, k) => `${c} needs 24/7 technical support with fast response times for production systems, but does not require a dedicated TAM. They want ${k}. Which support plan fits best?`, opts: ["Business Support+", "Enterprise Support", "Basic Support", "AWS Unified Operations"], ans: "Business Support+", next: "Enterprise Support", win: "Business Support+ provides 24/7 access and production-grade response without requiring Enterprise-level scope.", lose: "Enterprise Support adds more scope than this requirement calls for." },
    { task: "4.3", q: (c, k) => `${c} requires a designated Technical Account Manager and strategic architectural guidance for mission-critical operations. Leadership demands ${k}. Which support plan should they choose?`, opts: ["Enterprise Support", "Business Support+", "Basic Support", "AWS re:Post"], ans: "Enterprise Support", next: "Business Support+", win: "Enterprise Support includes TAM engagement and strategic support features.", lose: "Business Support+ is strong operationally but does not include the same dedicated TAM capability." },
    { task: "4.2", q: (c, k) => `${c} wants centralized billing and consolidated payment across multiple AWS accounts under one organization. Finance requires ${k}. Which feature is most appropriate?`, opts: ["AWS Organizations consolidated billing", "AWS Cost Explorer", "Cost allocation tags", "AWS Budgets"], ans: "AWS Organizations consolidated billing", next: "AWS Cost Explorer", win: "Consolidated billing centralizes invoicing and can improve discount utilization.", lose: "Cost Explorer helps with analysis, but it does not replace consolidated payment." },
    { task: "4.2", q: (c, k) => `${c} needs a quick way to detect unusual daily spend spikes and receive alerts for investigation. The objective is ${k}. Which feature should be enabled?`, opts: ["AWS Cost Anomaly Detection", "AWS Budgets forecast alerts", "AWS Cost Explorer", "Amazon CloudWatch billing alarms"], ans: "AWS Cost Anomaly Detection", next: "AWS Budgets forecast alerts", win: "Cost Anomaly Detection uses ML to identify unusual spend patterns automatically.", lose: "Budgets alert on thresholds, but anomalies can appear before those thresholds are crossed." },
    { task: "4.1", q: (c, k) => `${c} has predictable baseline EC2 usage for three years and wants maximum discount for specific instance attributes. The target is ${k}. Which purchase option is most aligned?`, opts: ["Standard Reserved Instances", "Compute Savings Plans", "On-Demand Instances", "Spot Instances"], ans: "Standard Reserved Instances", next: "Compute Savings Plans", win: "Standard RIs can provide deep discounts for stable, specific usage commitments.", lose: "Compute Savings Plans are more flexible, but not always the steepest discount for tightly fixed usage." },
    { task: "4.1", q: (c, k) => `${c} needs dedicated physical servers to satisfy strict software licensing requirements. Compliance demands ${k}. Which EC2 option should they use?`, opts: ["Dedicated Hosts", "Dedicated Instances", "On-Demand Instances", "Compute Savings Plans"], ans: "Dedicated Hosts", next: "Dedicated Instances", win: "Dedicated Hosts provide visibility and control over physical host allocation for licensing.", lose: "Dedicated Instances isolate tenancy but do not provide the same host-level control needed for some licensing models." },
    { task: "4.2", q: (c, k) => `${c} wants non-technical managers to review monthly AWS spend by service and linked account without building custom data pipelines. The finance team requires ${k}. Which tool is best?`, opts: ["AWS Cost Explorer", "AWS CUR queried via Athena", "Amazon QuickSight with CUR data", "AWS Budgets"], ans: "AWS Cost Explorer", next: "Amazon QuickSight with CUR data", win: "Cost Explorer provides accessible filtering and visualization for standard reporting users.", lose: "QuickSight can produce polished dashboards, but it still requires extra data setup compared with native Cost Explorer views." },
    { task: "4.2", q: (c, k) => `${c} needs to enforce account-level monthly spending limits and trigger notifications to owners proactively. The governance objective is ${k}. Which service should be configured?`, opts: ["AWS Budgets", "AWS Cost Explorer", "Cost allocation tags", "AWS Cost Anomaly Detection"], ans: "AWS Budgets", next: "AWS Cost Anomaly Detection", win: "Budgets supports threshold controls, notifications, and budget governance workflows.", lose: "Cost Anomaly Detection helps identify unusual spend patterns, but it does not replace budget thresholds and proactive notifications." },
    { task: "4.3", q: (c, k) => `${c} is a small development team needing the lowest-cost paid AWS support plan for experimentation workloads only. They need ${k}. Which support plan should they start with?`, opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS Unified Operations"], ans: "Business Support+", next: "Enterprise Support", win: "Business Support+ adds technical support and is the lowest-cost paid option in the current lineup.", lose: "Enterprise Support adds more scope than this requirement calls for." },
    { task: "4.3", q: (c, k) => `${c} wants architectural best-practice recommendations across cost, security, and performance categories with minimal manual inspection effort. The requirement is ${k}. Which AWS tool should they use?`, opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Cost Explorer", "Amazon Inspector"], ans: "AWS Trusted Advisor", next: "AWS Well-Architected Tool", win: "Trusted Advisor provides broad best-practice recommendations including cost and performance domains.", lose: "The Well-Architected Tool is excellent for structured reviews, but it is a guided assessment rather than an ongoing automated recommendation engine." },
    { task: "4.2", q: (c, k) => `${c} needs to allocate shared AWS costs to internal business units and track them by department in billing reports. Finance asks for ${k}. Which service is most suitable?`, opts: ["Cost allocation tags", "AWS Organizations consolidated billing", "AWS Cost and Usage Report (CUR)", "AWS Budgets"], ans: "Cost allocation tags", next: "AWS Organizations consolidated billing", win: "Cost allocation tags are used to categorize and report spend by business unit or department.", lose: "Consolidated billing groups invoices, but it does not create cost attribution by department." },
    { task: "4.1", q: (c, k) => `${c} has a mixed workload with steady baseline usage and occasional large spikes. The cost strategy must optimize for ${k}. Which approach is most appropriate?`, opts: ["Use Savings Plans for baseline and On-Demand/Spot for spikes", "Use Compute Savings Plans for baseline and On-Demand for spikes", "Use Standard Reserved Instances for every workload", "Use Dedicated Hosts for every workload"], ans: "Use Savings Plans for baseline and On-Demand/Spot for spikes", next: "Use Compute Savings Plans for baseline and On-Demand for spikes", win: "A blended strategy aligns commitment discounts with baseline demand while preserving spike flexibility.", lose: "A purely committed strategy can overfit the steady workload and reduce flexibility for spikes." },
    { task: "4.2", q: (c, k) => `${c} needs near-real-time visibility into current month spend trends across linked accounts from a single dashboard. The CFO asks for ${k}. Which tool should be used first?`, opts: ["AWS Cost Explorer", "AWS Cost and Usage Report (CUR) dashboards", "AWS Pricing Calculator", "AWS Service Catalog"], ans: "AWS Cost Explorer", next: "AWS Cost and Usage Report (CUR) dashboards", win: "Cost Explorer provides quick, centralized spend trend visibility without building a custom analytics stack.", lose: "CUR can power detailed dashboards, but it usually requires additional ingestion and modeling before executives can use it easily." }
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
