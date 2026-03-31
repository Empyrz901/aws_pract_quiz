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
    "most cost-effective pricing",
    "lowest billing management overhead",
    "best forecast accuracy",
    "maximum savings on steady workloads",
    "quickest visibility into spend anomalies",
    "least manual cost governance effort",
    "strongest multi-account cost controls",
    "most predictable monthly spend",
    "lowest risk of budget overrun",
    "fastest root-cause analysis for charges",
    "highest chargeback clarity",
    "least commitment risk",
    "best long-term discount coverage",
    "simplest executive reporting",
    "lowest anomaly detection lag"
  ];

  const templates = [
    { task: "4.1", q: (c, k) => `${c} has stable, long-running compute usage and wants to reduce cost without managing instance reservations per family. Finance demands ${k}. Which option is best?`, opts: ["Compute Savings Plans", "On-Demand pricing", "Spot Instances only", "Dedicated Hosts only"], ans: "Compute Savings Plans", next: "Reserved Instances", win: "Savings Plans provide flexible discount commitments across eligible compute usage.", lose: "Reserved Instances can save money but are typically less flexible across changing compute patterns." },
    { task: "4.1", q: (c, k) => `${c} runs fault-tolerant batch jobs that can be interrupted and restarted. The objective is ${k}. Which EC2 purchasing model should be selected?`, opts: ["Spot Instances", "On-Demand Instances", "Dedicated Instances", "Capacity Blocks"], ans: "Spot Instances", next: "On-Demand Instances", win: "Spot instances are usually the lowest-cost option for interruptible workloads.", lose: "On-Demand is flexible but usually more expensive than Spot for suitable batch processing." },
    { task: "4.1", q: (c, k) => `${c} needs short-term unpredictable compute bursts with no long-term commitment. Procurement requires ${k}. Which pricing model fits best?`, opts: ["On-Demand Instances", "Savings Plans", "Standard Reserved Instances", "Spot Fleets only"], ans: "On-Demand Instances", next: "Spot Fleets only", win: "On-Demand avoids commitments and supports unpredictable usage patterns.", lose: "Spot may be cheaper but interruption risk conflicts with many unpredictable burst production workloads." },
    { task: "4.2", q: (c, k) => `${c} needs to visualize historical spend trends and forecast upcoming costs for business reviews. Leadership requests ${k}. Which AWS tool should they use first?`, opts: ["AWS Cost Explorer", "AWS Pricing Calculator only", "AWS Budgets only", "AWS Artifact"], ans: "AWS Cost Explorer", next: "AWS Budgets only", win: "Cost Explorer is designed for historical analysis, filtering, and forecast insights.", lose: "Budgets sets threshold alerts but is less focused on interactive historical trend analytics." },
    { task: "4.2", q: (c, k) => `${c} wants notifications when monthly spend exceeds a defined threshold by account and service. Finance needs ${k}. Which service is best?`, opts: ["AWS Budgets", "AWS Cost and Usage Report only", "Amazon CloudWatch Logs Insights", "AWS Trusted Advisor"], ans: "AWS Budgets", next: "AWS Cost and Usage Report only", win: "Budgets provides threshold-based alerts and actions tied to planned spending limits.", lose: "CUR provides detailed data but requires additional processing and does not itself provide simple budget alert workflows." },
    { task: "4.2", q: (c, k) => `${c} needs the most granular line-item billing data for custom BI analysis and chargeback pipelines. Data teams require ${k}. Which AWS service should be enabled?`, opts: ["AWS Cost and Usage Report (CUR)", "AWS Budgets", "AWS Cost Explorer summary only", "AWS Billing Conductor only"], ans: "AWS Cost and Usage Report (CUR)", next: "AWS Cost Explorer summary only", win: "CUR provides detailed usage and cost line items for advanced analytics.", lose: "Cost Explorer is excellent for interactive views but does not expose the same raw-level detail as CUR." },
    { task: "4.2", q: (c, k) => `${c} is planning a migration and wants to estimate monthly AWS cost before deployment. The PMO wants ${k}. Which tool should be used?`, opts: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Budgets", "AWS Support Center"], ans: "AWS Pricing Calculator", next: "AWS Cost Explorer", win: "Pricing Calculator is purpose-built for pre-deployment cost estimation scenarios.", lose: "Cost Explorer analyzes existing spend and is less suitable for initial greenfield cost modeling." },
    { task: "4.3", q: (c, k) => `${c} needs 24/7 technical support with fast response times for production systems, but does not require a dedicated TAM. They want ${k}. Which support plan fits best?`, opts: ["Business Support", "Developer Support", "Enterprise Support", "Basic Support"], ans: "Business Support", next: "Enterprise Support", win: "Business Support provides 24/7 access and production-grade response without requiring Enterprise-level scope.", lose: "Enterprise includes broader capabilities and TAM features that may exceed this stated requirement." },
    { task: "4.3", q: (c, k) => `${c} requires a designated Technical Account Manager and strategic architectural guidance for mission-critical operations. Leadership demands ${k}. Which support plan should they choose?`, opts: ["Enterprise Support", "Business Support", "Developer Support", "Basic Support"], ans: "Enterprise Support", next: "Business Support", win: "Enterprise Support includes TAM engagement and strategic support features.", lose: "Business Support is strong operationally but does not include the same dedicated TAM capability." },
    { task: "4.2", q: (c, k) => `${c} wants centralized billing and consolidated payment across multiple AWS accounts under one organization. Finance requires ${k}. Which feature is most appropriate?`, opts: ["AWS Organizations consolidated billing", "Separate standalone payer accounts", "Cross-account IAM roles only", "AWS Marketplace private offers"], ans: "AWS Organizations consolidated billing", next: "Separate standalone payer accounts", win: "Consolidated billing centralizes invoicing and can improve discount utilization.", lose: "Separate payer accounts increase billing fragmentation and administrative overhead." },
    { task: "4.2", q: (c, k) => `${c} needs a quick way to detect unusual daily spend spikes and receive alerts for investigation. The objective is ${k}. Which feature should be enabled?`, opts: ["AWS Cost Anomaly Detection", "AWS Config conformance packs", "Amazon GuardDuty", "AWS Artifact reports"], ans: "AWS Cost Anomaly Detection", next: "AWS Budgets", win: "Cost Anomaly Detection uses ML to identify unusual spend patterns automatically.", lose: "Budgets alert on static thresholds but may miss nuanced anomalies that do not breach preset limits." },
    { task: "4.1", q: (c, k) => `${c} has predictable baseline EC2 usage for three years and wants maximum discount for specific instance attributes. The target is ${k}. Which purchase option is most aligned?`, opts: ["Standard Reserved Instances", "On-Demand Instances", "Spot Instances", "Savings Plans for burst-only usage"], ans: "Standard Reserved Instances", next: "Compute Savings Plans", win: "Standard RIs can provide deep discounts for stable, specific usage commitments.", lose: "Savings Plans are flexible but may not always maximize discount for tightly fixed usage profiles." },
    { task: "4.1", q: (c, k) => `${c} needs dedicated physical servers to satisfy strict software licensing requirements. Compliance demands ${k}. Which EC2 option should they use?`, opts: ["Dedicated Hosts", "Spot Instances", "Savings Plans", "Amazon Lightsail"], ans: "Dedicated Hosts", next: "Dedicated Instances", win: "Dedicated Hosts provide visibility and control over physical host allocation for licensing.", lose: "Dedicated Instances isolate tenancy but do not provide the same host-level control needed for some licensing models." },
    { task: "4.2", q: (c, k) => `${c} wants non-technical managers to review monthly AWS spend by service and linked account without building custom data pipelines. The finance team requires ${k}. Which tool is best?`, opts: ["AWS Cost Explorer", "AWS CUR queried via Athena", "Custom ETL to Redshift", "AWS X-Ray"], ans: "AWS Cost Explorer", next: "AWS CUR queried via Athena", win: "Cost Explorer provides accessible filtering and visualization for standard reporting users.", lose: "CUR with Athena is powerful but generally requires more technical setup and maintenance." },
    { task: "4.2", q: (c, k) => `${c} needs to enforce account-level monthly spending limits and trigger notifications to owners proactively. The governance objective is ${k}. Which service should be configured?`, opts: ["AWS Budgets", "AWS Trusted Advisor", "AWS Cost Explorer forecast only", "AWS Compute Optimizer"], ans: "AWS Budgets", next: "AWS Cost Explorer forecast only", win: "Budgets supports threshold controls, notifications, and budget governance workflows.", lose: "Forecast views are informative but do not enforce threshold-driven alerting in the same way." },
    { task: "4.3", q: (c, k) => `${c} is a small development team needing business-hours guidance for experimentation workloads only. They need ${k}. Which support plan should they start with?`, opts: ["Developer Support", "Business Support", "Enterprise Support", "Basic Support"], ans: "Developer Support", next: "Basic Support", win: "Developer Support adds technical guidance for dev/test use cases beyond Basic.", lose: "Basic includes account-level support but lacks the same technical advisory scope." },
    { task: "4.3", q: (c, k) => `${c} wants architectural best-practice recommendations across cost, security, and performance categories with minimal manual inspection effort. The requirement is ${k}. Which AWS tool should they use?`, opts: ["AWS Trusted Advisor", "AWS Artifact", "AWS Support API only", "Amazon Inspector"], ans: "AWS Trusted Advisor", next: "Amazon Inspector", win: "Trusted Advisor provides broad best-practice recommendations including cost and performance domains.", lose: "Inspector focuses on vulnerability assessment, not broad cost/security/performance advisory checks." },
    { task: "4.2", q: (c, k) => `${c} needs to allocate shared AWS costs to internal business units with custom pricing rules for chargeback. Finance asks for ${k}. Which service is most suitable?`, opts: ["AWS Billing Conductor", "AWS Cost Explorer only", "AWS Config", "Amazon QuickSight only"], ans: "AWS Billing Conductor", next: "AWS Cost and Usage Report (CUR)", win: "Billing Conductor is designed for custom billing views and chargeback/showback structures.", lose: "CUR provides raw data but does not by itself implement custom pricing and billing group constructs." },
    { task: "4.1", q: (c, k) => `${c} has a mixed workload with steady baseline usage and occasional large spikes. The cost strategy must optimize for ${k}. Which approach is most appropriate?`, opts: ["Use Savings Plans for baseline and On-Demand/Spot for spikes", "Use only On-Demand for all workloads", "Use only Dedicated Hosts", "Use only Standard Reserved Instances for every workload"], ans: "Use Savings Plans for baseline and On-Demand/Spot for spikes", next: "Use only Standard Reserved Instances for every workload", win: "A blended strategy aligns commitment discounts with baseline demand while preserving spike flexibility.", lose: "All-in RI strategies can overcommit and reduce flexibility for burst patterns." },
    { task: "4.2", q: (c, k) => `${c} needs near-real-time visibility into current month spend trends across linked accounts from a single dashboard. The CFO asks for ${k}. Which tool should be used first?`, opts: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Support Center", "AWS Service Catalog"], ans: "AWS Cost Explorer", next: "AWS Cost and Usage Report (CUR)", win: "Cost Explorer provides quick, centralized spend trend visibility without building custom analytics stack.", lose: "CUR is detailed and powerful but typically requires additional processing for dashboarding." }
  ];

  function rotate(opts, n) {
    const len = opts.length;
    const s = n % len;
    return opts.map((_, i) => opts[(i + s) % len]);
  }

  const out = [];
  let idx = 0;
  templates.forEach((t) => {
    for (let i = 0; i < 15; i++) {
      const c = companies[i % companies.length];
      const k = constraints[(i + idx) % constraints.length];
      const opts = rotate(t.opts, i);
      out.push({
        domain: 4,
        task: t.task,
        q: `${t.q(c, k)} (Constraint: ${k}.)`,
        opts: opts,
        ans: opts.indexOf(t.ans),
        explain: `Correct answer: ${t.ans}. ${t.win} Next best distractor: ${t.next}. ${t.lose}`
      });
      idx++;
    }
  });

  return out;
}

const DOMAIN4_DISTRACTOR_QUESTIONS = generateDomain4DistractorQuestions();
