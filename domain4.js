const DOMAIN4_QUESTIONS = [
  {
    domain: 4,
    task: "4.1",
    q: "A company wants to run a steady-state production database on EC2 for three years. Which pricing option will provide the greatest cost savings?",
    opts: ["On-Demand Instances", "Spot Instances", "3-year All Upfront Reserved Instance", "1-year No Upfront Reserved Instance"],
    ans: 2,
    explain: "A 3-year All Upfront Reserved Instance provides the deepest discount for predictable, long-running workloads because it combines the longest term with the highest upfront commitment."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company needs to meet regulatory requirements that mandate their workloads run on physically isolated servers. Which EC2 option should they choose?",
    opts: ["On-Demand Instances", "Dedicated Hosts", "Spot Instances", "Reserved Instances"],
    ans: 1,
    explain: "Dedicated Hosts provide a physical server fully dedicated to your use, helping meet compliance requirements that mandate physical isolation and server-bound software licensing."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company runs batch processing jobs that can start and stop at any time. The jobs typically take 2-3 hours. Which EC2 pricing model is most cost-effective?",
    opts: ["On-Demand Instances", "1-year Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    ans: 2,
    explain: "Spot Instances are ideal for batch processing workloads that are flexible about when they run and can tolerate interruptions, offering up to 90% savings."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company uses S3 and notices their costs increase as they store more data. Which S3 feature can automatically move objects to cheaper storage classes?",
    opts: ["S3 Versioning", "S3 Lifecycle Policies", "S3 Cross-Region Replication", "S3 Transfer Acceleration"],
    ans: 1,
    explain: "S3 Lifecycle Policies can automatically transition objects to cheaper storage classes (e.g., from Standard to Standard-IA to Glacier) based on age or other criteria."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company needs reserved EC2 capacity in a specific Availability Zone for a planned launch, but it does not want a term commitment. What should it use?",
    opts: ["Spot Instances", "On-Demand Capacity Reservations", "Reserved Instances", "Dedicated Instances"],
    ans: 1,
    explain: "On-Demand Capacity Reservations guarantee compute capacity in a specific AZ without any term commitment, ensuring instances can be launched when needed."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company has steady-state EC2 usage but wants the ability to move between instance sizes in the same family during the term. Which Reserved Instance type should it choose?",
    opts: ["Standard Reserved Instance with size flexibility", "Convertible Reserved Instance", "Scheduled Reserved Instance", "Zonal Reserved Instance"],
    ans: 0,
    explain: "Standard Reserved Instances offer size flexibility within the same instance family in the same region, allowing you to benefit from the RI discount even if you change instance sizes."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company wants to reduce EC2 costs and is flexible about the compute instance family, region, and operating system. Which option offers savings with maximum flexibility?",
    opts: [
      "Standard Reserved Instances",
      "EC2 Instance Savings Plan",
      "Compute Savings Plan",
      "On-Demand Instances with volume discounts"
    ],
    ans: 2,
    explain: "Compute Savings Plans offer the most flexibility, automatically applying discounts across any EC2 instance family, region, OS, tenancy, and even to Fargate and Lambda."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A team wants to track costs by department and project. Which approach should they use?",
    opts: [
      "Create separate AWS accounts for each department",
      "Use cost allocation tags to label resources with department and project information",
      "Use AWS Config rules to enforce department naming",
      "Use AWS CloudTrail to track spending per department"
    ],
    ans: 1,
    explain: "Cost allocation tags (user-defined) allow you to categorize and track AWS costs by applying metadata such as department, project, or environment to resources."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company wants to send the AWS Cost and Usage Report data to Amazon Athena for analysis. Where is the CUR data delivered?",
    opts: ["Amazon RDS", "Amazon S3", "Amazon DynamoDB", "AWS CloudTrail"],
    ans: 1,
    explain: "The AWS Cost and Usage Report is delivered to an Amazon S3 bucket that you specify, from where it can be queried using Athena, Redshift, or QuickSight."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company wants to estimate the costs of migrating an on-premises workload to AWS. Which tool should they use?",
    opts: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Migration Hub", "AWS Budgets"],
    ans: 1,
    explain: "AWS Pricing Calculator allows you to model and estimate the cost of running workloads on AWS before any migration, helping with planning and budgeting."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company uses multiple AWS accounts for different business units. Which approach best enables centralized billing while maintaining account-level visibility? (Choose TWO.)",
    opts: [
      "Use AWS Organizations with consolidated billing",
      "Create a single AWS account for all business units",
      "Use cost allocation tags to track spending per business unit",
      "Use separate payment methods for each account",
      "Disable all IAM access to the billing console"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Organizations with consolidated billing provides a single bill, while cost allocation tags enable tracking and reporting costs per business unit across accounts."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company wants to restrict member accounts in AWS Organizations from launching expensive instance types. Which feature should they use?",
    opts: ["AWS Budgets actions", "Service Control Policies (SCPs)", "Cost allocation tags", "AWS Config rules"],
    ans: 1,
    explain: "SCPs can restrict which instance types member accounts are allowed to launch, providing centralized governance over resource usage and costs."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company wants a personalized AWS view that shows service events and scheduled changes affecting its own resources. Which AWS feature should it use?",
    opts: [
      "Amazon CloudWatch metrics for EC2 instances",
      "AWS Health Dashboard",
      "Physical data center hardware telemetry",
      "On-premises server monitoring"
    ],
    ans: 1,
    explain: "AWS Health Dashboard provides a personalized account view of AWS service events and planned changes that may affect your resources."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company needs direct help from AWS experts to accelerate a complex migration and improve its cloud operating model. Which AWS resource best fits this need?",
    opts: [
      "A managed service that runs the customer's infrastructure day to day",
      "AWS Professional Services",
      "A certification program for AWS engineers",
      "A tool that automatically optimizes every workload"
    ],
    ans: 1,
    explain: "AWS Professional Services provides expert-led engagements to help customers accelerate migrations, modernization, and cloud adoption outcomes."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company running mission-critical workloads wants the fastest published AWS response time for a business-critical system down case. What response time should it expect with Enterprise Support?",
    opts: ["15 minutes", "30 minutes", "1 hour", "4 hours"],
    ans: 0,
    explain: "Enterprise Support provides the fastest published response target for business-critical system down cases: less than 15 minutes."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company is planning a major product launch and wants AWS-led event preparation and guidance for the rollout. Which AWS resource should it use?",
    opts: ["AWS Trusted Advisor", "AWS Countdown", "AWS re:Post", "Basic Support"],
    ans: 1,
    explain: "AWS Countdown is the AWS resource for launch planning, event preparation, and rollout guidance."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company wants to engage an AWS consulting partner to help design and implement their cloud architecture. Where should they find qualified partners?",
    opts: ["AWS Marketplace", "AWS Partner Network (APN)", "AWS re:Post", "AWS Training and Certification"],
    ans: 1,
    explain: "The AWS Partner Network includes consulting partners who specialize in helping customers design, architect, build, migrate, and manage workloads on AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company running mission-critical workloads needs the fastest possible response time and a designated TAM. Which Support plan should they choose?",
    opts: ["Business Support+", "AWS Unified Operations", "Enterprise Support", "Basic"],
    ans: 2,
    explain: "Enterprise Support offers a 15-minute response time for critical issues and includes a designated TAM, making it ideal for mission-critical operations."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company runs batch processing jobs that can be interrupted and restarted. Which EC2 pricing option would be MOST cost-effective?",
    opts: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    ans: 2,
    explain: "Spot Instances offer up to 90% discount compared to On-Demand prices and are ideal for fault-tolerant, interruptible workloads like batch processing."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company wants to run a relational database 24/7 for three years. Which pricing approach offers the GREATEST savings?",
    opts: ["On-Demand pricing", "1-year Reserved Instance with no upfront payment", "3-year Reserved Instance with all upfront payment", "Spot Instance pricing"],
    ans: 2,
    explain: "A 3-year Reserved Instance with all upfront payment provides the maximum discount (up to 72%) for steady-state workloads like a continuously running database."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company wants to receive an alert when their monthly AWS spending exceeds $5,000. Which service should they use?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "Amazon CloudWatch"],
    ans: 1,
    explain: "AWS Budgets allows you to set custom cost thresholds and receive alerts (via email or SNS) when your actual or forecasted spending exceeds the defined budget amount."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company wants to use infrastructure as code templates and pre-built solutions vetted by AWS. Which resource should they use?",
    opts: ["AWS Marketplace", "AWS Quick Starts and AWS Solutions Library", "AWS Training and Certification", "AWS Personal Health Dashboard"],
    ans: 1,
    explain: "AWS Quick Starts and the AWS Solutions Library provide vetted, automated reference deployments and CloudFormation templates for common architectural patterns."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company needs help migrating a complex legacy application to AWS. Which resource provides direct assistance from AWS experts for this type of engagement?",
    opts: ["AWS Trusted Advisor", "AWS Support Center", "AWS Professional Services", "AWS re:Post"],
    ans: 2,
    explain: "AWS Professional Services is a global team of experts that helps customers achieve their desired outcomes through paid engagements, including complex migrations and modernizations."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company wants to reduce compute costs across EC2, Lambda, and Fargate. Which TWO strategies can help achieve this goal? (Select TWO)",
    opts: [
      "Purchase a Compute Savings Plan with a 1-year or 3-year commitment",
      "Enable S3 Transfer Acceleration on all buckets",
      "Right-size instances using AWS Compute Optimizer recommendations",
      "Enable versioning on all EBS volumes",
      "Use AWS Direct Connect for all internet traffic"
    ],
    ans: [0, 2],
    multi: true,
    explain: "Compute Savings Plans apply discounts across EC2, Lambda, and Fargate usage. AWS Compute Optimizer analyzes utilization metrics and recommends right-sized instance types to eliminate waste."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company is evaluating third-party software to deploy on AWS. Which TWO resources should they consult? (Select TWO)",
    opts: [
      "AWS Marketplace for pre-configured software listings with flexible pricing",
      "AWS Partner Network (APN) to find technology partners with validated solutions",
      "AWS Trusted Advisor cost optimization checks",
      "AWS CloudTrail event history",
      "Amazon CloudWatch Logs Insights"
    ],
    ans: [0, 1],
    multi: true,
    explain: "AWS Marketplace offers a curated catalog of third-party software that can be purchased and deployed directly on AWS. The APN includes technology partners whose solutions are validated to work on AWS."
  },
  { domain: 4, task: "4.1", q: "A startup runs unpredictable workloads — some weeks they use 10 EC2 instances, other weeks only 2. They cannot commit to steady usage. Which pricing model suits them best?", opts: ["Reserved Instances", "On-Demand pricing", "Spot Instances", "Compute Savings Plans"], ans: 1, explain: "On-Demand charges only for actual usage with no commitments, ideal for unpredictable workloads. Reserved Instances and Savings Plans require commitments for steadier use. Spot Instances can be interrupted." },
  { domain: 4, task: "4.1", q: "A company runs a production database 24/7 and expects steady EC2 usage for the next three years. Which pricing option is usually the best fit?", opts: ["On-Demand pricing", "Spot Instances", "Reserved Instances with a long-term commitment", "Dedicated Hosts"], ans: 2, explain: "Reserved Instances are a strong fit for steady-state EC2 workloads that can commit for one or three years. On-Demand is more flexible but usually more expensive, Spot is interruptible, and Dedicated Hosts are typically chosen for licensing or compliance needs." },
  { domain: 4, task: "4.1", q: "A company wants to save money on compute costs across EC2, Lambda, and Fargate with a single commitment. Which pricing model covers all three?", opts: ["EC2 Reserved Instances", "Compute Savings Plans", "EC2 Instance Savings Plans", "Spot Instances"], ans: 1, explain: "Compute Savings Plans provide discounts across EC2, Lambda, and Fargate with one compute spend commitment. Reserved Instances and EC2 Instance Savings Plans apply to EC2 usage patterns only. Spot is not a commitment-based model and does not cover Lambda." },
  { domain: 4, task: "4.2", q: "A company's AWS bill increased unexpectedly last month. The finance team needs to identify which service and account caused the spike. Which tool should they use?", opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Cost and Usage Report (CUR)"], ans: 1, explain: "Cost Explorer provides detailed visualizations of spending patterns filtered by service, account, tag, and date range. Budgets alert on thresholds, Pricing Calculator estimates new workloads, and CUR is the detailed raw dataset rather than the quickest interactive analysis tool." },
  { domain: 4, task: "4.2", q: "A company wants to receive an email alert when their monthly AWS spending is projected to exceed $10,000. Which service should they configure?", opts: ["AWS Cost Explorer", "AWS Budgets", "Amazon CloudWatch billing alarms", "AWS Cost Anomaly Detection"], ans: 1, explain: "AWS Budgets lets you set cost thresholds and sends alerts when actual or forecasted spending exceeds them. Cost Explorer analyzes spend, CloudWatch billing alarms are narrower, and Cost Anomaly Detection focuses on unusual spend patterns rather than a defined budget target." },
  { domain: 4, task: "4.2", q: "A company with five business units wants each unit to track and manage their own AWS costs independently. Which AWS feature supports this organizational structure?", opts: ["AWS Organizations with separate accounts per business unit and consolidated billing", "AWS Cost Explorer", "Cost allocation tags", "AWS Budgets"], ans: 0, explain: "AWS Organizations lets each business unit have its own account for independent cost tracking while benefiting from consolidated billing and volume discounts. Cost Explorer helps analyze spend, tags help with attribution, and Budgets help with thresholds, but none of them replace separate accounts for isolation." },
  { domain: 4, task: "4.2", q: "A company wants to estimate the monthly cost of a new workload consisting of 10 EC2 instances, an RDS database, and 5 TB of S3 storage before deploying. Which tool should they use?", opts: ["AWS Cost Explorer to view projected costs", "AWS Pricing Calculator to model and estimate costs for new workloads", "AWS Budgets to set a spending limit", "AWS Trusted Advisor to check for savings opportunities"], ans: 1, explain: "AWS Pricing Calculator lets you model AWS service configurations and estimate monthly costs before deployment. Cost Explorer shows historical spending, not estimates for new workloads. Budgets track existing spending. Trusted Advisor optimizes existing resources, not future estimates." },
  { domain: 4, task: "4.3", q: "A small development team needs technical support for AWS workloads but does not need 24/7 production support. Which plan is the most cost-effective paid option?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 1, explain: "Business Support+ is the lowest-cost paid plan that includes technical support, making it the best fit for workloads that need support cases." },
  { domain: 4, task: "4.1", q: "A company wants to transfer large amounts of data INTO AWS from the internet. They're concerned about data transfer costs. What should they know?", opts: ["Inbound transfer is free", "Outbound transfer costs money", "Both directions cost the same", "Only S3 uploads are free"], ans: 1, explain: "AWS does not charge for inbound data transfer (ingress) from the internet. Outbound data transfer (egress) is metered and charged. The pricing is not symmetric, and the free ingress rule is not limited to S3 uploads." },
  { domain: 4, task: "4.3", q: "A company wants to use AWS Trusted Advisor but finds that most checks are locked. Which support plan unlocks the full set of Trusted Advisor checks at the lowest current tier?", opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"], ans: 1, explain: "Business Support+ is the minimum current plan that unlocks the full set of Trusted Advisor checks. Enterprise Support and AWS Unified Operations also include full access." },
  { domain: 4, task: "4.1", q: "A company uses Amazon S3 to store data and is surprised by their storage bill. They realize most of their data hasn't been accessed in over a year. Which S3 feature can automatically reduce their costs?", opts: ["S3 Versioning", "S3 Lifecycle policies", "S3 Transfer Acceleration", "S3 Object Lock"], ans: 1, explain: "S3 Lifecycle policies automatically move objects to cheaper tiers based on age. Versioning keeps multiple copies, increasing costs. Transfer Acceleration speeds uploads but doesn't reduce storage costs. Object Lock prevents deletion but doesn't optimize storage costs." },
  { domain: 4, task: "4.2", q: "A company with 50 AWS accounts wants to receive a single invoice and benefit from volume pricing discounts across all accounts. Which feature enables this?", opts: ["AWS Budgets", "AWS Organizations consolidated billing", "AWS Cost Explorer", "Manual invoice aggregation"], ans: 1, explain: "Consolidated billing in AWS Organizations combines usage across all accounts into one bill and aggregates for volume discounts. Budgets alert on spending but don't consolidate billing. Cost Explorer visualizes multi-account costs but doesn't provide unified invoicing. Manual aggregation misses volume discounts." },
  { domain: 4, task: "4.1", q: "A company has Windows Server licenses with Software Assurance and wants to use them on AWS to avoid paying for new licenses. Which EC2 option supports this?", opts: ["On-Demand Instances", "Dedicated Hosts", "Spot Instances", "Reserved Instances"], ans: 1, explain: "Dedicated Hosts provide visibility into the underlying physical server, allowing customers to use existing per-socket or per-core licenses (BYOL). On-Demand includes license costs in the price. Spot doesn't waive licensing. Reserved Instances include license costs unless used on Dedicated Hosts." },
  { domain: 4, task: "4.2", q: "A company wants to identify and eliminate AWS resources that are provisioned but never used, such as unattached EBS volumes and idle load balancers. Which approach should they use?", opts: ["AWS CloudFormation stack deletion", "AWS Trusted Advisor cost optimization checks combined with AWS Cost Explorer analysis", "AWS Config rules", "Amazon CloudWatch alarms", "Amazon Inspector"], ans: 1, explain: "Trusted Advisor flags idle resources such as unattached EBS volumes and idle load balancers, while Cost Explorer shows spending on unused services. CloudFormation deletion removes everything, not just idle resources. Config tracks configuration, not utilization. CloudWatch alarms per resource are operationally heavy and don't identify waste directly." },
  { domain: 4, task: "4.2", q: "A company's cloud team wants a programmatic way to analyze their AWS cost and usage data in detail, beyond what the AWS console provides. Which feature enables this?", opts: ["AWS Cost Explorer API", "AWS Cost and Usage Report (CUR)", "AWS Budgets API", "AWS Billing Dashboard"], ans: 1, explain: "The Cost and Usage Report provides the most detailed billing data at line-item level for custom analysis. Cost Explorer API provides aggregate queries, Budgets API manages budget alerts, and the Billing Dashboard is a high-level console view." },
  { domain: 4, task: "4.3", q: "A company is evaluating their AWS architecture and wants a structured review based on the six pillars of the Well-Architected Framework. Which AWS tool facilitates this?", opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Config", "AWS Resilience Hub"], ans: 1, explain: "The Well-Architected Tool provides a structured questionnaire based on the six pillars to review workloads. Trusted Advisor is an automated check service, Config audits resource compliance, and Resilience Hub focuses on resilience assessments rather than full Well-Architected reviews." },
  { domain: 4, task: "4.1", q: "A company runs workloads across multiple EC2 instance types and sizes and wants flexible pricing discounts without being locked to a specific instance family. Which option provides this?", opts: ["Standard Reserved Instances", "Convertible Reserved Instances", "Compute Savings Plans", "Spot Instances"], ans: 2, explain: "Compute Savings Plans offer the most flexibility, applying discounts to any EC2 instance regardless of family, size, Region, or OS. Standard RIs are locked to one instance type. Convertible RIs allow changes but with less flexibility than Savings Plans. Spot Instances aren't commitment-based pricing." },
  { domain: 4, task: "4.1", q: "A company runs a stable baseline of container workloads every day but also experiences unpredictable traffic spikes during marketing campaigns. Finance wants strong savings without overcommitting all capacity. Which purchasing approaches should the team combine? (Select TWO)", opts: ["Savings Plans", "On-Demand or Spot", "Dedicated Hosts", "All Upfront Reserved Instances", "On-premises capacity"], ans: [0, 1], multi: true, explain: "Savings Plans are well suited to predictable baseline compute, while On-Demand or Spot can absorb burst capacity without overcommitting. The other options either reduce flexibility or do not fit the requirement." },
  { domain: 4, task: "4.2", q: "A company wants to understand which departments are driving cloud spend and also receive alerts before any department exceeds its monthly target. Which AWS features should they implement? (Select TWO)", opts: ["Cost allocation tags", "AWS Budgets", "AWS Cost Explorer", "AWS Cost Anomaly Detection", "AWS Control Tower"], ans: [0, 1], multi: true, explain: "Cost allocation tags let the team attribute spend by department, and AWS Budgets provides threshold alerts for actual or forecasted spending. Cost Explorer is for analysis, Cost Anomaly Detection finds unusual spend, and Control Tower helps with governance." },
  { domain: 4, task: "4.2", q: "A company wants detailed billing data delivered for custom analytics in Amazon Athena, while also giving executives a simpler interactive console view of cost trends and forecasts. Which AWS tools support these two needs? (Select TWO)", opts: ["AWS Cost and Usage Report (CUR)", "AWS Cost Explorer", "AWS Cost Anomaly Detection", "Cost allocation tags", "AWS Budgets"], ans: [0, 1], multi: true, explain: "CUR provides the granular line-item data needed for custom analytics, and Cost Explorer provides an easier interactive interface for trend and forecast analysis. The other options do not provide billing data analysis for these use cases." },
  { domain: 4, task: "4.3", q: "A company needs 24/7 access to Cloud Support Engineers for production issues but does not need a designated Technical Account Manager. Which support plans satisfy the 24/7 requirement? (Select TWO)", opts: ["Business Support+", "Enterprise Support", "Basic Support", "AWS re:Post", "AWS Trusted Advisor"], ans: [0, 1], multi: true, explain: "Business Support+ and Enterprise Support both provide 24/7 access to Cloud Support Engineers for production environments. Basic Support is free, and re:Post or Trusted Advisor do not replace a support plan." },
  { domain: 4, task: "4.2", q: "A company operating 40 AWS accounts wants one payer account, shared discount benefits, and controls that prevent individual teams from bypassing cost policies. Which AWS capabilities should they use? (Select TWO)", opts: ["AWS Organizations consolidated billing", "Service Control Policies (SCPs)", "AWS Budgets", "AWS Cost Explorer", "AWS Control Tower"], ans: [0, 1], multi: true, explain: "AWS Organizations consolidated billing centralizes invoicing and discount sharing, while SCPs enforce account-level guardrails. Budgets and Cost Explorer help with cost management, and Control Tower helps establish a landing zone, but none replaces this billing-plus-guardrails pair." },
  { domain: 4, task: "4.1", q: "A company wants to optimize AWS compute costs for different workload patterns. One workload is steady and predictable all year, while another is fault tolerant and can be interrupted during off-hours processing. Which purchasing approaches are the best fit? (Select TWO)", opts: ["Savings Plans or Reserved Instances for the steady workload", "Spot Instances for the interruptible workload", "Compute Savings Plans for every workload", "On-Demand for every workload regardless of pattern", "Dedicated Hosts for the interruptible workload"], ans: [0, 1], multi: true, explain: "Commitment-based discounts fit steady workloads, and Spot Instances fit interruptible processing. The other options do not align to the workload patterns or cost goal." },
  { domain: 4, task: "4.2", q: "A company with many AWS accounts wants centralized billing, consistent guardrails on what member accounts can do, and cost reporting by team. Which AWS capabilities support those goals? (Select THREE)", opts: ["AWS Organizations consolidated billing", "Service Control Policies (SCPs)", "Cost allocation tags", "Amazon Rekognition", "AWS Glue Studio"], ans: [0, 1, 2], multi: true, explain: "Consolidated billing centralizes charges, SCPs establish account guardrails, and cost allocation tags support team-based reporting. Rekognition and Glue Studio are unrelated." },
  { domain: 4, task: "4.1", q: "A startup expects usage to swing sharply from week to week and wants no long-term commitment. Which pricing model fits best?", opts: ["Reserved Instances", "On-Demand pricing", "Spot Instances", "Dedicated Hosts"], ans: 1, explain: "On-Demand pricing is best for unpredictable usage because it has no long-term commitment and charges only for actual use." },
  { domain: 4, task: "4.1", q: "A company knows its production database will run at a steady level for the next three years and wants the strongest commitment-based savings. Which option is the best fit?", opts: ["On-Demand pricing", "Spot Instances", "Reserved Instances with a long-term commitment", "AWS Free Tier"], ans: 2, explain: "Reserved Instances are designed for steady, predictable usage where the customer can commit for one or three years." },
  { domain: 4, task: "4.1", q: "A data team runs nightly batch jobs that can restart if interrupted and wants the lowest compute cost. Which pricing model should they use?", opts: ["On-Demand Instances", "Spot Instances", "Reserved Instances", "Dedicated Instances"], ans: 1, explain: "Spot Instances are a strong fit for fault-tolerant batch jobs because they can be interrupted in exchange for lower cost." },
  { domain: 4, task: "4.1", q: "A team uses EC2, Lambda, and Fargate and wants one commitment that still gives them flexibility across those services. Which pricing model should they choose?", opts: ["EC2 Reserved Instances", "Compute Savings Plans", "EC2 Instance Savings Plans", "Dedicated Hosts"], ans: 1, explain: "Compute Savings Plans apply across EC2, Lambda, and Fargate, making them the most flexible commitment-based option." },
  { domain: 4, task: "4.1", q: "A cloud architect wants pricing discounts that are not locked to one EC2 family or size, but still wants commitment-based savings. Which option should they choose?", opts: ["Standard Reserved Instances", "Convertible Reserved Instances", "Compute Savings Plans", "Spot Instances"], ans: 2, explain: "Compute Savings Plans provide commitment-based savings without locking the customer to a specific instance family, size, or Region." },
  { domain: 4, task: "4.2", q: "Before migrating a new application, a finance lead wants a monthly cost estimate for the target architecture. Which AWS tool should they use?", opts: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Trusted Advisor"], ans: 1, explain: "AWS Pricing Calculator is the right tool for estimating future monthly costs before deployment." },
  { domain: 4, task: "4.2", q: "A CFO wants to compare the costs of keeping servers on-premises versus moving to AWS, including facilities and staff costs. Which tool should be used?", opts: ["AWS TCO Calculator", "AWS Budgets", "AWS Cost Explorer", "AWS Cost and Usage Report (CUR)"], ans: 0, explain: "The AWS Total Cost of Ownership Calculator compares on-premises costs with AWS costs, including indirect expenses like facilities and labor." },
  { domain: 4, task: "4.2", q: "The finance team sees a sudden increase in one account's spend and needs to identify the service responsible. Which tool should they open first?", opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Trusted Advisor"], ans: 1, explain: "AWS Cost Explorer is the fastest way to filter spend by service, account, and tag to find the source of a cost spike." },
  { domain: 4, task: "4.2", q: "A manager wants an alert when projected monthly AWS spend is likely to exceed a target before the month ends. Which service should they configure?", opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost Anomaly Detection", "AWS Support Center"], ans: 1, explain: "AWS Budgets supports actual and forecasted threshold alerts, which is ideal for projected spend control." },
  { domain: 4, task: "4.2", q: "A billing analyst needs line-item usage data for custom chargeback logic in Athena. Which AWS service should they use?", opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report (CUR)", "AWS Pricing Calculator"], ans: 2, explain: "The Cost and Usage Report provides the most detailed billing data for custom analysis and chargeback workflows." },
  { domain: 4, task: "4.2", q: "A company wants one invoice for many AWS accounts and wants discounts to aggregate across those accounts. What feature should they enable?", opts: ["AWS Cost Explorer", "AWS Organizations consolidated billing", "AWS Budgets", "Cost allocation tags"], ans: 1, explain: "Consolidated billing in AWS Organizations combines charges into one invoice and aggregates usage for volume discounts." },
  { domain: 4, task: "4.2", q: "A team wants to see cloud spend by department, project, and environment without creating separate accounts for every combination. Which feature should they use?", opts: ["AWS Organizations consolidated billing", "Cost allocation tags", "AWS Cost Explorer", "AWS Trusted Advisor"], ans: 1, explain: "Cost allocation tags are designed to categorize and report spend by business dimensions such as department, project, and environment." },
  { domain: 4, task: "4.2", q: "A finance group notices a daily spending spike that does not cross a budget threshold but still looks unusual. Which service should help identify the anomaly?", opts: ["AWS Cost Anomaly Detection", "AWS Budgets", "AWS Pricing Calculator", "AWS Support Center"], ans: 0, explain: "AWS Cost Anomaly Detection uses machine learning to detect unusual spend patterns even before a budget threshold is breached." },
  { domain: 4, task: "4.2", q: "An operations team wants AWS recommendations for idle Elastic IPs, underutilized EC2 instances, and other waste. Which service should they check?", opts: ["AWS Cost Explorer", "AWS Trusted Advisor", "AWS Budgets", "AWS CloudWatch"], ans: 1, explain: "Trusted Advisor includes cost optimization checks that identify idle and underutilized resources." },
  { domain: 4, task: "4.3", q: "A startup wants the free support tier that includes documentation, white papers, and limited Trusted Advisor checks. Which plan should they choose?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 0, explain: "Basic Support is the free support tier and includes documentation, white papers, and limited Trusted Advisor checks." },
  { domain: 4, task: "4.3", q: "A production team needs technical support and 24/7 access to Cloud Support Engineers, but does not need a TAM. Which plan is the best fit?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 1, explain: "Business Support+ is the lowest-cost current paid plan that provides 24/7 access to Cloud Support Engineers." },
  { domain: 4, task: "4.3", q: "A business-critical application needs a designated Technical Account Manager for proactive guidance. Which support plan provides that?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS Trusted Advisor"], ans: 2, explain: "Enterprise Support includes a designated TAM for proactive architectural guidance." },
  { domain: 4, task: "4.3", q: "A company has a Sev 1 outage and wants the fastest published AWS response time available in the current support lineup. Which plan should they use?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 2, explain: "Enterprise Support provides less than 15-minute response for business-critical system down cases." },
  { domain: 4, task: "4.3", q: "A team has a production issue and wants AWS help within less than 1 hour. Which support plan is the minimum fit?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS Marketplace"], ans: 1, explain: "Business Support+ provides less than 1-hour response for production system down cases." },
  { domain: 4, task: "4.3", q: "A company wants the lowest current support tier that includes full Trusted Advisor access. Which plan should they buy?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 1, explain: "Business Support+ is the minimum current support plan that includes full Trusted Advisor checks." },
  { domain: 4, task: "4.3", q: "A developer has no paid support plan and wants to ask the AWS community for help with a service question. Where should they go?", opts: ["AWS Support Center", "AWS re:Post", "AWS Trusted Advisor", "AWS Health Dashboard"], ans: 1, explain: "AWS re:Post is the free community Q&A service for AWS technical questions." },
  { domain: 4, task: "4.3", q: "A customer needs to open, manage, and track support cases for an AWS issue. Which portal should they use?", opts: ["AWS Support Center", "AWS re:Post", "AWS Trusted Advisor", "AWS Artifact"], ans: 0, explain: "AWS Support Center is the portal customers use to manage AWS support cases." },
  { domain: 4, task: "4.3", q: "An operations team wants a view of AWS service issues that affect only their own account and resources. Which service should they use?", opts: ["AWS Trusted Advisor", "AWS Personal Health Dashboard (AWS Health)", "AWS Support Center", "AWS re:Post"], ans: 1, explain: "AWS Personal Health Dashboard shows account-specific service events and maintenance notices." },
  { domain: 4, task: "4.3", q: "A platform team wants to automate notifications when AWS service events affect their resources. Which support-related capability gives them programmatic access to health events?", opts: ["AWS Support Center", "AWS Health API", "AWS Trusted Advisor", "AWS re:Post"], ans: 1, explain: "The AWS Health API provides programmatic access to AWS health events." },
  { domain: 4, task: "4.3", q: "A release manager is preparing a big launch and wants AWS-led readiness guidance for the event. Which capability is designed for that type of work?", opts: ["AWS Well-Architected Tool", "AWS Countdown event management", "AWS Trusted Advisor", "AWS Support Center"], ans: 1, explain: "AWS Countdown event management is designed to help with planned launches and migrations." },
  { domain: 4, task: "4.3", q: "A solutions team wants a structured six-pillar review before moving a workload to production. Which tool should they use?", opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Support Center", "AWS re:Post"], ans: 1, explain: "The Well-Architected Tool guides teams through a structured review of the six pillars." },
  { domain: 4, task: "4.3", q: "A security-conscious team wants automated AWS recommendations for cost, performance, security, fault tolerance, and service limits. Which service should they review?", opts: ["AWS Well-Architected Tool", "AWS Trusted Advisor", "AWS Cost Explorer", "AWS Config"], ans: 1, explain: "Trusted Advisor provides automated recommendations across the key best-practice categories." },
  { domain: 4, task: "4.3", q: "A small finance team wants AWS to help them evaluate whether a cloud move is worth it before the migration project starts. Which tool fits best?", opts: ["AWS Pricing Calculator", "AWS TCO Calculator", "AWS Support Center", "AWS Budgets"], ans: 1, explain: "The AWS TCO Calculator compares on-premises and AWS costs for migration planning." },
  { domain: 4, task: "4.2", q: "A department lead wants to reduce surprise charges by combining a budget threshold with a tool that flags unusual patterns. Which two services should they use? (Select TWO)", opts: ["AWS Budgets", "AWS Cost Anomaly Detection", "AWS Trusted Advisor", "AWS Cost Explorer", "AWS Pricing Calculator"], ans: [0, 1], multi: true, explain: "Budgets handles threshold-based alerting, and Cost Anomaly Detection highlights unusual spend patterns." },
  { domain: 4, task: "4.2", q: "A finance team wants both department-level cost attribution and a single payer invoice for all member accounts. Which two AWS capabilities should they combine? (Select TWO)", opts: ["Cost allocation tags", "AWS Organizations consolidated billing", "AWS Cost Explorer", "AWS Budgets", "AWS Trusted Advisor"], ans: [0, 1], multi: true, explain: "Tags support department-level attribution, and consolidated billing provides the single invoice and aggregated discounts." },
  { domain: 4, task: "4.2", q: "A cloud team wants both raw billing data for Athena and a quick console view for executives. Which two tools should they use? (Select TWO)", opts: ["AWS Cost and Usage Report (CUR)", "AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost Anomaly Detection"], ans: [0, 1], multi: true, explain: "CUR provides raw line-item data, and Cost Explorer provides an interactive console view of trends and forecasts." },
  { domain: 4, task: "4.3", q: "A team wants both automated recommendations and a structured workload review before a major release. Which two tools should they use? (Select TWO)", opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Support Center", "AWS re:Post", "AWS Billing Console"], ans: [0, 1], multi: true, explain: "Trusted Advisor gives automated recommendations, and the Well-Architected Tool supports a structured workload review." },
  { domain: 4, task: "4.1", q: "A company has a steady baseline of EC2 usage and occasional interruptible spikes. Which two purchasing approaches best balance savings and flexibility? (Select TWO)", opts: ["Savings Plans for the baseline workload", "Spot Instances for the bursty jobs", "Dedicated Hosts for every workload", "All Upfront Reserved Instances for everything", "On-premises capacity for the spikes"], ans: [0, 1], multi: true, explain: "Savings Plans work well for steady usage, and Spot Instances fit interruptible spike workloads." },
  { domain: 4, task: "4.1", q: "A startup wants to experiment with AWS services during the first year without paying for heavy usage upfront. Which program should they use?", opts: ["AWS Free Tier", "AWS Enterprise Discount Program", "AWS Savings Plans", "AWS Support Center"], ans: 0, explain: "AWS Free Tier lets new customers try select services within limited usage levels." },
  { domain: 4, task: "4.2", q: "An executive wants a quick dashboard showing spend trends by service and account, plus forecasted spend for the month. Which tool should the team use?", opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report (CUR)", "AWS Pricing Calculator"], ans: 0, explain: "Cost Explorer is the interactive tool for filtering spend trends and forecasts." },
  { domain: 4, task: "4.2", q: "A company wants a repeatable way to estimate the monthly cost of a target architecture before they build it. Which tool should they use?", opts: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Budgets", "AWS Trusted Advisor"], ans: 0, explain: "AWS Pricing Calculator models target architectures and estimates monthly cost before deployment." },
  { domain: 4, task: "4.2", q: "A finance team wants to compare current AWS spend with the cost of staying on-premises for another three years, including labor and facilities. Which tool fits best?", opts: ["AWS TCO Calculator", "AWS Budgets", "AWS Cost Explorer", "AWS Cost and Usage Report (CUR)"], ans: 0, explain: "The AWS TCO Calculator compares on-premises and AWS costs for planning decisions." },
  { domain: 4, task: "4.2", q: "A company wants to know which AWS spending tool can help them create alerts for multiple teams while also letting them see spend in one view. Which two capabilities are they likely to use? (Select TWO)", opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Trusted Advisor", "AWS Support Center", "AWS Artifact"], ans: [0, 1], multi: true, explain: "Budgets creates alerts for thresholds, and Cost Explorer provides a single view of spend trends and filters." },
  { domain: 4, task: "4.3", q: "A company wants the current support plan that provides 24/7 Cloud Support Engineer access and is still cheaper than Enterprise Support. Which plan should they choose?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 1, explain: "Business Support+ is the lowest-cost current paid plan with 24/7 access to Cloud Support Engineers." },
  { domain: 4, task: "4.3", q: "A platform team needs AWS help for a planned migration weekend and wants a service to coordinate readiness tasks with AWS guidance. Which capability is the best match?", opts: ["AWS Trusted Advisor", "AWS Countdown event management", "AWS Support Center", "AWS Well-Architected Tool"], ans: 1, explain: "AWS Countdown event management is intended for planned launches and migrations that need AWS guidance." },
  { domain: 4, task: "4.3", q: "A team wants to know whether a workload is following AWS best practices for cost, security, and reliability before it goes live. Which service should they use first?", opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Support Center", "AWS re:Post"], ans: 1, explain: "The Well-Architected Tool is the right starting point for a structured review of a workload against the AWS pillars." },
  { domain: 4, task: "4.3", q: "A company wants AWS recommendations on cost optimization, service limits, security, fault tolerance, and performance without building their own checks. Which service should they use?", opts: ["AWS Trusted Advisor", "AWS Budgets", "AWS Cost Explorer", "AWS Health Dashboard"], ans: 0, explain: "Trusted Advisor provides best-practice recommendations across the main operational categories." },
  { domain: 4, task: "4.3", q: "A team wants AWS support that includes billing and account help through AWS Concierge. Which support plan provides that?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 2, explain: "Enterprise Support includes AWS Concierge Support for billing and account guidance." },
  { domain: 4, task: "4.3", q: "A developer needs to check which AWS service events affect only their own resources, not the whole AWS public status page. Which service should they review?", opts: ["AWS Personal Health Dashboard (AWS Health)", "AWS Trusted Advisor", "AWS Support Center", "AWS Artifact"], ans: 0, explain: "Personal Health Dashboard shows account-specific health events and maintenance notices." },
  { domain: 4, task: "4.3", q: "A small team needs a way to ask the AWS community for help instead of opening a paid support case. Which resource should they use?", opts: ["AWS re:Post", "AWS Support Center", "AWS Trusted Advisor", "AWS Well-Architected Tool"], ans: 0, explain: "AWS re:Post is the community Q&A resource for AWS questions." },
  { domain: 4, task: "4.3", q: "A company wants to reduce cloud waste and also get continuous recommendations about idle resources. Which service should they check?", opts: ["AWS Trusted Advisor", "AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator"], ans: 0, explain: "Trusted Advisor identifies idle and underutilized resources that can drive unnecessary cost." },
  { domain: 4, task: "4.1", q: "A startup wants to avoid large upfront hardware purchases and pay only for what it uses as demand changes. Which pricing model supports that best?", opts: ["On-Demand pricing", "Reserved Instances", "Spot Instances", "Dedicated Hosts"], ans: 0, explain: "On-Demand pricing is the simplest pay-as-you-go model for avoiding upfront hardware commitments." },
  { domain: 4, task: "4.2", q: "A team lead wants to tag resources by project and then alert each project owner before monthly spend exceeds a target. Which two features should they combine? (Select TWO)", opts: ["Cost allocation tags", "AWS Budgets", "AWS Cost Explorer", "AWS Trusted Advisor", "AWS Support Center"], ans: [0, 1], multi: true, explain: "Tags support project-level attribution, and Budgets provide alerts when actual or forecasted spending exceeds target thresholds." },
  { domain: 4, task: "4.2", q: "A finance analyst needs raw line-item billing data for Athena and also wants an executive-friendly view of monthly trends and forecasts. Which two AWS tools should they use? (Select TWO)", opts: ["AWS Cost and Usage Report (CUR)", "AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost Anomaly Detection"], ans: [0, 1], multi: true, explain: "CUR provides the detailed raw data, and Cost Explorer gives an interactive view of trends and forecasts." },
  { domain: 4, task: "4.3", q: "A migration team wants both automated best-practice recommendations and a structured six-pillar review before production cutover. Which two tools should they use? (Select TWO)", opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Support Center", "AWS re:Post", "AWS Billing Dashboard"], ans: [0, 1], multi: true, explain: "Trusted Advisor provides automated recommendations, and the Well-Architected Tool supports a structured workload review." },
  { domain: 4, task: "4.2", q: "A company wants one invoice for all AWS accounts, shared discount benefits, and the ability to prevent member accounts from bypassing policy. Which two AWS capabilities fit best? (Select TWO)", opts: ["AWS Organizations consolidated billing", "Service Control Policies (SCPs)", "AWS Cost Explorer", "AWS Budgets", "Cost allocation tags"], ans: [0, 1], multi: true, explain: "Consolidated billing centralizes invoicing and discount aggregation, while SCPs apply account-level guardrails." },
  { domain: 4, task: "4.3", q: "A small business needs the lowest-cost paid support option that still includes technical support cases. Which plan should they choose?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 1, explain: "Business Support+ is the lowest-cost paid option that includes technical support cases." },
  { domain: 4, task: "4.3", q: "A company wants billing and account assistance from AWS through a dedicated concierge-style support capability. Which support plan provides that?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS Trusted Advisor"], ans: 2, explain: "Enterprise Support includes AWS Concierge Support for billing and account help." },
  { domain: 4, task: "4.3", q: "An operations team wants to know about service issues that affect only their account and resources, not public AWS status. Which service should they review?", opts: ["AWS Personal Health Dashboard (AWS Health)", "AWS Support Center", "AWS Trusted Advisor", "AWS re:Post"], ans: 0, explain: "Personal Health Dashboard shows account-specific service events and maintenance notices." },
  { domain: 4, task: "4.3", q: "A platform team wants programmatic notifications when account-specific AWS health events occur. Which capability should they use?", opts: ["AWS Health API", "AWS Budgets", "AWS Cost Explorer", "AWS Support Center"], ans: 0, explain: "The AWS Health API provides programmatic access to account-specific health events." }
];
