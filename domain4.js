const DOMAIN4_QUESTIONS = [
  // ===== TASK 4.1: PRICING MODELS (Questions 1-40) =====
  {
    domain: 4,
    task: "4.1",
    q: "Which EC2 pricing model allows you to pay for compute capacity by the hour or second with no long-term commitments?",
    opts: ["Reserved Instances", "On-Demand Instances", "Spot Instances", "Dedicated Hosts"],
    ans: 1,
    explain: "On-Demand Instances let you pay for compute capacity by the hour or second with no long-term commitments or upfront payments."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which EC2 pricing option offers the highest discount compared to On-Demand pricing but can be interrupted by AWS with a two-minute warning?",
    opts: ["Reserved Instances", "Dedicated Instances", "Spot Instances", "Savings Plans"],
    ans: 2,
    explain: "Spot Instances offer up to 90% discount over On-Demand prices but can be interrupted when AWS needs the capacity back, with a two-minute warning."
  },
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
    q: "What is the key difference between Standard Reserved Instances and Convertible Reserved Instances?",
    opts: [
      "Standard RIs usually provide a larger discount but less flexibility",
      "Convertible RIs allow you to change the instance family, OS, and tenancy during the term",
      "Standard RIs cannot be shared across accounts in AWS Organizations",
      "Convertible RIs are only available for 3-year terms"
    ],
    ans: 1,
    explain: "Convertible Reserved Instances allow you to exchange them for different instance families, operating systems, and tenancies, offering more flexibility at a slightly lower discount than Standard RIs."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which payment options are available for Reserved Instances?",
    opts: [
      "All Upfront, Half Upfront, No Upfront",
      "All Upfront, Partial Upfront, No Upfront",
      "Full Payment, Monthly Payment, Deferred Payment",
      "Prepaid, Postpaid, Hybrid"
    ],
    ans: 1,
    explain: "Reserved Instances offer three payment options: All Upfront (largest discount), Partial Upfront (moderate discount), and No Upfront (smallest discount)."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which Savings Plan type provides the most flexibility by automatically applying to EC2, Fargate, and Lambda usage regardless of region, instance family, or OS?",
    opts: ["EC2 Instance Savings Plan", "Compute Savings Plan", "SageMaker Savings Plan", "Organization Savings Plan"],
    ans: 1,
    explain: "Compute Savings Plans provide the most flexibility, automatically applying to any EC2, Fargate, and Lambda usage regardless of instance family, region, OS, or tenancy."
  },
  {
    domain: 4,
    task: "4.1",
    q: "How does an EC2 Instance Savings Plan differ from a Compute Savings Plan?",
    opts: [
      "EC2 Instance Savings Plans offer a larger discount but are locked to a specific instance family and region",
      "EC2 Instance Savings Plans cover Fargate and Lambda in addition to EC2",
      "Compute Savings Plans require a 3-year commitment while EC2 Instance Savings Plans do not",
      "There is no difference; they are the same product"
    ],
    ans: 0,
    explain: "EC2 Instance Savings Plans offer a deeper discount than Compute Savings Plans but require commitment to a specific instance family in a specific region."
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
    q: "What is the difference between a Dedicated Host and a Dedicated Instance?",
    opts: [
      "Dedicated Hosts are cheaper than Dedicated Instances",
      "Dedicated Instances provide visibility into the physical server's sockets and cores; Dedicated Hosts do not",
      "Dedicated Hosts give you visibility and control over the physical server placement; Dedicated Instances run on hardware dedicated to you but without server visibility",
      "There is no difference; they are the same feature"
    ],
    ans: 2,
    explain: "Dedicated Hosts give visibility into the physical server (sockets, cores, host ID) for licensing compliance, while Dedicated Instances simply ensure hardware is not shared with other AWS accounts."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following is true about data transfer pricing in AWS?",
    opts: [
      "Data transfer into AWS from the internet is charged per GB",
      "Data transfer out to the internet is always free",
      "Data transfer into AWS from the internet is free",
      "Cross-region data transfer is free within the same AWS account"
    ],
    ans: 2,
    explain: "Data transfer into AWS from the internet (inbound) is free. Outbound data transfer to the internet and cross-region transfers incur charges."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company is transferring 500 GB of data per month from an EC2 instance in us-east-1 to an EC2 instance in eu-west-1. Which statement is correct?",
    opts: [
      "This transfer is charged at the same rate as intra-region transfer",
      "This transfer incurs cross-region data transfer charges",
      "Both regions share the transfer cost equally",
      "This transfer is included in the EC2 instance hourly price"
    ],
    ans: 1,
    explain: "Data transfer between AWS Regions incurs cross-region data transfer charges regardless of the service or account used."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which AWS Free Tier type provides 750 hours per month of t2.micro or t3.micro EC2 instances for the first 12 months after account creation?",
    opts: ["Always Free", "12 Months Free", "Trials", "Promotional Credits"],
    ans: 1,
    explain: "The 12 Months Free tier provides 750 hours/month of eligible EC2 instances for the first 12 months after you create your AWS account."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following is an 'Always Free' AWS service offering that does not expire after 12 months?",
    opts: ["750 hours of EC2 t2.micro", "1 million AWS Lambda requests per month", "5 GB of S3 Standard storage", "750 hours of RDS db.t2.micro"],
    ans: 1,
    explain: "AWS Lambda offers 1 million free requests and 400,000 GB-seconds of compute per month as part of the Always Free tier, which never expires."
  },
  {
    domain: 4,
    task: "4.1",
    q: "How is AWS Lambda priced?",
    opts: [
      "Per hour of function availability",
      "Per number of requests and compute duration (GB-seconds)",
      "A flat monthly fee per function deployed",
      "Per the number of lines of code in the function"
    ],
    ans: 1,
    explain: "Lambda pricing is based on the number of requests and the duration of execution measured in GB-seconds (memory allocated multiplied by execution time)."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which S3 storage class is the most cost-effective for data that is rarely accessed and can tolerate retrieval times of 12 hours?",
    opts: ["S3 Standard", "S3 Standard-IA", "S3 Glacier Deep Archive", "S3 One Zone-IA"],
    ans: 2,
    explain: "S3 Glacier Deep Archive is the lowest-cost storage class, designed for long-term archive data with retrieval times of up to 12 hours."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which factors determine Amazon S3 pricing? (Choose TWO.)",
    opts: [
      "The number of S3 buckets created",
      "The storage class used and amount of data stored",
      "Data transfer out of S3",
      "The number of IAM policies attached to the bucket",
      "The AWS region where the account was created"
    ],
    ans: [1, 2],
    multi: true,
    explain: "S3 pricing is based on the storage class, amount of data stored, number and type of requests, data transfer out, and optional features like replication."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A startup has unpredictable workloads that may be interrupted. They want the cheapest EC2 pricing. Which option is best?",
    opts: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    ans: 2,
    explain: "Spot Instances are the cheapest EC2 option (up to 90% off On-Demand) and are ideal for fault-tolerant, flexible workloads that can handle interruptions."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which pricing model should a company use if they have existing per-socket or per-core software licenses they want to bring to AWS?",
    opts: ["On-Demand Instances", "Spot Instances", "Dedicated Hosts", "Savings Plans"],
    ans: 2,
    explain: "Dedicated Hosts provide visibility into the physical server's sockets and cores, allowing customers to use their existing server-bound software licenses (BYOL)."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is an On-Demand Capacity Reservation?",
    opts: [
      "A way to reserve compute capacity in a specific Availability Zone with no term commitment",
      "A discounted pricing model that requires a 1-year or 3-year commitment",
      "A feature that automatically scales capacity based on demand",
      "A reservation for data transfer bandwidth"
    ],
    ans: 0,
    explain: "On-Demand Capacity Reservations let you reserve compute capacity in a specific AZ without any term commitment, ensuring capacity is available when you need it."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following statements about EBS pricing is correct?",
    opts: [
      "EBS volumes are billed based on how often the data is read",
      "EBS pricing is based on the provisioned volume size (GB per month) and volume type",
      "EBS snapshots are always free",
      "EBS volumes are charged only when data is read or written"
    ],
    ans: 1,
    explain: "EBS charges are based on the amount of storage provisioned (in GB per month), the volume type (gp3, io2, etc.), and any additional IOPS or throughput provisioned."
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
    q: "Which Reserved Instance term lengths are available?",
    opts: ["6 months and 1 year", "1 year and 3 years", "1 year, 2 years, and 3 years", "3 years and 5 years"],
    ans: 1,
    explain: "Reserved Instances are available in 1-year and 3-year term lengths. The 3-year term provides a larger discount."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is true about data transfer between EC2 instances in the same Availability Zone using private IP addresses?",
    opts: ["Charged at the standard data transfer rate", "Free", "Charged at half the cross-region rate", "Charged only for outbound traffic"],
    ans: 1,
    explain: "Data transfer between EC2 instances in the same Availability Zone using private IPv4 or IPv6 addresses is free."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following workloads is LEAST suitable for Spot Instances?",
    opts: [
      "Image rendering",
      "Big data analytics",
      "Mission-critical real-time transaction processing",
      "CI/CD build and test environments"
    ],
    ans: 2,
    explain: "Mission-critical real-time transaction processing cannot tolerate interruptions, making Spot Instances unsuitable. Spot is best for fault-tolerant and flexible workloads."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company commits to spending $10/hour on compute for 1 year regardless of instance type or region. Which plan type is this?",
    opts: ["EC2 Instance Savings Plan", "Compute Savings Plan", "Standard Reserved Instance", "Convertible Reserved Instance"],
    ans: 1,
    explain: "Compute Savings Plans let you commit to a consistent amount of compute usage ($/hour) for 1 or 3 years, applied flexibly across instance types, regions, OS, and services including EC2, Fargate, and Lambda."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following AWS Free Tier offerings is classified as a 'Trial'?",
    opts: [
      "750 hours/month of EC2 t2.micro for 12 months",
      "1 million Lambda requests per month forever",
      "Amazon SageMaker free trial for 2 months",
      "25 GB of DynamoDB storage forever"
    ],
    ans: 2,
    explain: "Trial offers are short-term free trials of specific services that start from the first use of the service, such as Amazon SageMaker or Amazon Inspector trials."
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
    q: "Which statement about Savings Plans is TRUE?",
    opts: [
      "Savings Plans require choosing a specific instance type upfront",
      "Savings Plans are available for 1-year or 3-year terms",
      "Savings Plans can only be applied to EC2 instances",
      "Savings Plans apply automatically to all AWS services"
    ],
    ans: 1,
    explain: "Savings Plans are available in 1-year or 3-year terms. You commit to a consistent amount of usage (measured in $/hour) in exchange for discounted pricing."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which pricing consideration applies specifically to Amazon EBS snapshots?",
    opts: [
      "Snapshots are free for the first 12 months",
      "Snapshots are charged based on the amount of data stored incrementally",
      "Snapshots are charged per snapshot regardless of size",
      "Snapshots are included in EC2 instance pricing"
    ],
    ans: 1,
    explain: "EBS snapshots are incremental backups, and you are charged based on the amount of data actually stored in the snapshot, not the full volume size."
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
    q: "Which of the following accurately describes how AWS charges for data transfer? (Choose TWO.)",
    opts: [
      "Data transferred between Availability Zones in the same region incurs a charge",
      "All data transfer within a single Availability Zone is charged",
      "Data transfer from the internet into AWS is charged per GB",
      "Data transfer out to the internet from AWS incurs per-GB charges",
      "Data transfer from the internet into AWS is free only for S3 uploads"
    ],
    ans: [0, 3],
    multi: true,
    explain: "Data transfer between AZs in the same region incurs charges, and data transfer out to the internet is charged per GB. Inbound data from the internet is free."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What happens to a Spot Instance when AWS needs the capacity back?",
    opts: [
      "It is immediately terminated with no warning",
      "AWS sends a two-minute interruption notice before stopping or terminating the instance",
      "The instance is migrated to a different Availability Zone",
      "The instance is automatically converted to an On-Demand Instance"
    ],
    ans: 1,
    explain: "When AWS needs to reclaim Spot capacity, it sends a two-minute interruption notice, giving the instance time to save state or complete short tasks."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which Savings Plan type is specifically designed for machine learning workloads?",
    opts: ["Compute Savings Plan", "EC2 Instance Savings Plan", "SageMaker Savings Plan", "ML Savings Plan"],
    ans: 2,
    explain: "SageMaker Savings Plans are designed specifically for Amazon SageMaker usage, offering discounts on SageMaker instance usage."
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
    q: "Which AWS service has pricing based on the number of requests and the duration of code execution?",
    opts: ["Amazon EC2", "Amazon S3", "AWS Lambda", "Amazon RDS"],
    ans: 2,
    explain: "AWS Lambda charges based on the number of requests and compute duration measured in GB-seconds, with no charge for idle time."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is a key pricing benefit of using S3 Intelligent-Tiering?",
    opts: [
      "It uses lifecycle policies that require manual configuration for each object",
      "It automatically moves data between access tiers to optimize costs with no retrieval charges",
      "It reduces cost by compressing objects before storing them",
      "It requires manual tier changes for each object"
    ],
    ans: 1,
    explain: "S3 Intelligent-Tiering automatically moves objects between access tiers based on changing access patterns, optimizing costs without retrieval fees or operational overhead."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following statements about Reserved Instance payment options is correct?",
    opts: [
      "No Upfront Reserved Instances provide the largest discount",
      "All Upfront Reserved Instances provide the largest discount",
      "Partial Upfront Reserved Instances provide the largest discount",
      "All payment options provide the same discount"
    ],
    ans: 1,
    explain: "All Upfront payment provides the largest discount because you pay for the entire term in advance, reducing AWS's risk."
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
    task: "4.1",
    q: "Which of the following is included in the AWS Free Tier for Amazon S3?",
    opts: [
      "100 GB of S3 Standard storage forever",
      "5 GB of S3 Standard storage for 12 months",
      "Unlimited S3 Glacier storage for 12 months",
      "50 GB of S3 Standard-IA storage forever"
    ],
    ans: 1,
    explain: "The AWS Free Tier includes 5 GB of Amazon S3 Standard storage, 20,000 GET requests, and 2,000 PUT requests per month for 12 months."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company has a Windows-based application using per-socket licensing. They want to use their existing licenses on AWS. Which option helps control license compliance?",
    opts: ["Spot Instances", "Savings Plans", "Dedicated Hosts with AWS License Manager", "On-Demand Instances"],
    ans: 2,
    explain: "Dedicated Hosts combined with AWS License Manager provide visibility into physical sockets and cores, enabling BYOL compliance for per-socket or per-core licensed software."
  },

  // ===== TASK 4.2: BILLING AND COST MANAGEMENT (Questions 41-80) =====
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS tool allows you to set custom budgets and receive alerts when costs or usage exceed defined thresholds?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: 1,
    explain: "AWS Budgets lets you set custom cost and usage budgets and sends alerts (via email or SNS) when your actual or forecasted spending exceeds your thresholds."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS service provides an interactive visualization of your AWS spending patterns over time?",
    opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Billing Console", "AWS Pricing Calculator"],
    ans: 1,
    explain: "AWS Cost Explorer provides interactive charts and graphs to visualize, understand, and manage your AWS costs and usage over time, including forecasting future costs."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A solutions architect wants to estimate the cost of a new architecture before deploying it. Which tool should they use?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: 2,
    explain: "AWS Pricing Calculator lets you explore AWS services and estimate the cost of your use cases before deploying any resources."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is a benefit of consolidated billing in AWS Organizations?",
    opts: [
      "Each account receives a separate invoice with individual discounts",
      "Usage across all accounts is aggregated for potential volume pricing discounts",
      "It applies Reserved Instance pricing to all member accounts automatically",
      "It converts all On-Demand usage to Savings Plans pricing"
    ],
    ans: 1,
    explain: "Consolidated billing in AWS Organizations aggregates usage across all member accounts, which can qualify the organization for volume pricing discounts."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which type of cost allocation tag is automatically applied by AWS to track costs?",
    opts: ["User-defined tags", "AWS-generated tags", "Custom billing tags", "Resource group tags"],
    ans: 1,
    explain: "AWS-generated cost allocation tags (e.g., aws:createdBy) are automatically created and applied by AWS to track which resources were created by which IAM user or role."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is the purpose of the AWS Cost and Usage Report (CUR)?",
    opts: [
      "To provide a high-level summary of monthly charges",
      "To provide the most comprehensive and detailed set of cost and usage data available",
      "To generate estimates for future AWS spending",
      "To automatically optimize costs by shutting down unused resources"
    ],
    ans: 1,
    explain: "The AWS Cost and Usage Report provides the most detailed and comprehensive cost and usage data, including hourly line items for each service and resource."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company has 10 AWS accounts under AWS Organizations. How does consolidated billing affect Reserved Instance sharing?",
    opts: [
      "Reserved Instances cannot be shared across accounts",
      "Reserved Instances purchased in one account can be applied to matching usage in other accounts within the same organization",
      "Each account must purchase its own Reserved Instances",
      "Reserved Instances are automatically converted to Savings Plans in Organizations"
    ],
    ans: 1,
    explain: "With consolidated billing in AWS Organizations, Reserved Instance discounts are automatically shared across all accounts in the organization when usage matches the RI attributes."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS feature in the Billing Console helps you track whether you are staying within the AWS Free Tier limits?",
    opts: ["AWS Budgets", "AWS Free Tier usage alerts", "AWS Cost Explorer", "AWS Trusted Advisor"],
    ans: 1,
    explain: "The AWS Billing Console provides Free Tier usage alerts that notify you when your usage approaches or exceeds Free Tier limits."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which tool should you use to create a billing alarm that triggers when your estimated charges exceed a specific amount?",
    opts: ["AWS Budgets", "Amazon CloudWatch billing alarms", "AWS Cost Explorer", "AWS Config"],
    ans: 1,
    explain: "Amazon CloudWatch billing alarms can be configured to trigger notifications when your estimated charges exceed a specified threshold."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What do Service Control Policies (SCPs) in AWS Organizations allow you to do?",
    opts: [
      "Set cost alerts and budgets for member accounts",
      "Control which AWS services and actions are allowed or denied for member accounts",
      "Automatically tag resources in all member accounts",
      "Share Reserved Instances across member accounts"
    ],
    ans: 1,
    explain: "SCPs centrally control the maximum available permissions for member accounts in an organization, restricting which services and actions can be used."
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
    q: "Which AWS tool can forecast your future AWS costs based on historical usage patterns?",
    opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: 1,
    explain: "AWS Cost Explorer includes a forecasting feature that uses historical usage data to predict future costs for up to 12 months."
  },
  {
    domain: 4,
    task: "4.2",
    q: "How can a company benefit from volume discounts on AWS?",
    opts: [
      "By prepaying for all services annually",
      "By increasing usage, as some services offer tiered pricing where per-unit cost decreases with higher usage",
      "By using only On-Demand pricing for all services",
      "By purchasing Dedicated Hosts for all workloads"
    ],
    ans: 1,
    explain: "Many AWS services (such as S3 and data transfer) use tiered pricing where the per-unit cost decreases as usage increases, providing automatic volume discounts."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following can AWS Budgets track? (Choose TWO.)",
    opts: [
      "Cost budgets based on actual and forecasted spending",
      "Usage budgets for specific AWS services",
      "Code quality budgets for Lambda functions",
      "Network latency budgets for VPC connections",
      "CPU utilization budgets for EC2 instances"
    ],
    ans: [0, 1],
    multi: true,
    explain: "AWS Budgets can track cost budgets (actual and forecasted spending), usage budgets (service-specific usage amounts), reservation budgets, and Savings Plan budgets."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Where can you find a summary of your current month's charges and a breakdown by service in AWS?",
    opts: ["AWS Cost Explorer", "AWS Billing Console (Bills page)", "AWS Pricing Calculator", "AWS Trusted Advisor"],
    ans: 1,
    explain: "The AWS Billing Console Bills page provides a summary of your current month's charges with a breakdown by service."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What must you do before user-defined cost allocation tags appear in cost reports?",
    opts: [
      "Apply the tags and wait 24 hours",
      "Activate the tags in the AWS Billing Console",
      "Contact AWS Support to enable tagging",
      "Purchase a Business or Enterprise support plan"
    ],
    ans: 1,
    explain: "User-defined cost allocation tags must be activated in the AWS Billing Console before they appear in your cost allocation reports and Cost Explorer."
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
    q: "Which statement about AWS Organizations and consolidated billing is correct?",
    opts: [
      "Each member account receives a separate invoice",
      "The management account pays the combined charges for all member accounts with a single bill",
      "Consolidated billing requires an Enterprise Support plan",
      "Member accounts cannot see their own usage details"
    ],
    ans: 1,
    explain: "With consolidated billing, the management (payer) account receives a single bill that covers the charges of all member accounts in the organization."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which feature of AWS Cost Explorer helps identify underutilized Reserved Instances?",
    opts: [
      "Cost forecasting",
      "RI utilization and coverage reports",
      "Savings Plans recommendations",
      "Tag filtering"
    ],
    ans: 1,
    explain: "AWS Cost Explorer provides Reserved Instance utilization and coverage reports that show how well your RIs are being used and where you have gaps in coverage."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A finance team wants to receive an email notification when their monthly AWS spending is forecasted to exceed $5,000. Which service should they configure?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "Amazon CloudWatch Logs", "AWS Config"],
    ans: 1,
    explain: "AWS Budgets can send alert notifications via email or SNS when actual or forecasted spending exceeds defined budget thresholds."
  },
  {
    domain: 4,
    task: "4.2",
    q: "How does AWS Organizations help manage costs for multiple AWS accounts? (Choose TWO.)",
    opts: [
      "It provides consolidated billing across all member accounts",
      "It automatically reduces prices for all services by 10%",
      "It aggregates usage across accounts for volume pricing discounts",
      "It provides free Reserved Instances to all member accounts",
      "It eliminates the need for cost allocation tags"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Organizations provides consolidated billing (single bill for all accounts) and aggregates usage across accounts to qualify for volume pricing discounts on services like S3 and data transfer."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS tool is best suited for generating a detailed, line-item report of every AWS charge for integration with third-party billing systems?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report", "AWS Pricing Calculator"],
    ans: 2,
    explain: "The AWS Cost and Usage Report provides the most granular, line-item billing data that can be exported to S3 and integrated with third-party billing or analytics tools."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is the maximum number of budgets you can create with AWS Budgets for free?",
    opts: ["1 budget", "2 budgets", "5 budgets", "Unlimited budgets"],
    ans: 1,
    explain: "AWS Budgets allows you to create up to 2 budgets for free. Additional budgets incur a charge per budget per month."
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
    q: "Which of the following is a benefit of using cost allocation tags?",
    opts: [
      "They enforce spending limits on tagged resources",
      "They enable you to categorize costs and generate reports broken down by business categories",
      "They trigger CloudWatch alarms when tagged resource costs exceed thresholds",
      "They allow you to share Reserved Instances only between tagged accounts"
    ],
    ans: 1,
    explain: "Cost allocation tags let you categorize and track AWS costs by custom categories (department, project, environment), enabling detailed cost breakdowns in billing reports."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which action in the AWS Billing Console allows you to prevent accidental charges from exceeding your expectations?",
    opts: [
      "Setting up a payment method",
      "Configuring billing preferences and enabling billing alerts",
      "Disabling all unused AWS services",
      "Deleting all IAM users except the root account"
    ],
    ans: 1,
    explain: "Configuring billing preferences to receive billing alerts and setting up CloudWatch billing alarms or AWS Budgets helps you monitor spending and prevent unexpected charges."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following describes how the S3 volume discount model works with consolidated billing?",
    opts: [
      "Each account gets its own volume discount based on its individual usage",
      "Total S3 usage across all accounts in the organization is aggregated, potentially qualifying for a lower price tier",
      "Volume discounts only apply to the management account",
      "Volume discounts are not available with consolidated billing"
    ],
    ans: 1,
    explain: "Consolidated billing aggregates S3 usage across all organization accounts, which can push the total into a higher volume tier with lower per-GB pricing."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What type of AWS Budget would you create to ensure Reserved Instance utilization stays above 80%?",
    opts: ["Cost budget", "Usage budget", "Reservation budget", "Savings Plans budget"],
    ans: 2,
    explain: "A Reservation budget in AWS Budgets tracks RI utilization and coverage, alerting you if your RI utilization falls below a target threshold."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS Cost Explorer feature helps you identify which Savings Plan would best reduce your costs?",
    opts: [
      "Cost anomaly detection",
      "Savings Plans recommendations",
      "Resource optimization",
      "Monthly cost breakdown"
    ],
    ans: 1,
    explain: "AWS Cost Explorer provides Savings Plans recommendations that analyze your historical usage and suggest the optimal Savings Plan commitment to reduce costs."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company has tagged all of its resources with 'Environment: Production' and 'Environment: Development'. After activating these tags, where can they view the cost breakdown by environment?",
    opts: [
      "AWS CloudTrail logs",
      "AWS Cost Explorer using tag filters",
      "Amazon CloudWatch metrics",
      "AWS Config resource inventory"
    ],
    ans: 1,
    explain: "Once cost allocation tags are activated, you can use them as filters in AWS Cost Explorer to view costs broken down by tag values such as environment."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is the primary purpose of the AWS Billing Console?",
    opts: [
      "To launch and manage AWS resources",
      "To view and manage your AWS charges, payments, and billing information",
      "To configure network security groups",
      "To deploy CloudFormation templates"
    ],
    ans: 1,
    explain: "The AWS Billing Console is the central hub for viewing your AWS charges, managing payment methods, setting up billing alerts, and accessing cost management tools."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following best describes an AWS-generated cost allocation tag?",
    opts: [
      "A tag that users manually create and apply to resources",
      "A tag that AWS automatically creates, such as aws:createdBy, to help track resource creators",
      "A tag that is applied by AWS Config rules",
      "A tag that is only visible in AWS CloudTrail"
    ],
    ans: 1,
    explain: "AWS-generated cost allocation tags like aws:createdBy are automatically created by AWS and can be activated in the Billing Console to appear in cost reports."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS service can automatically detect unusual spending patterns and alert you?",
    opts: ["AWS Budgets", "AWS Cost Anomaly Detection", "AWS Trusted Advisor", "AWS Config"],
    ans: 1,
    explain: "AWS Cost Anomaly Detection uses machine learning to continuously monitor your cost and usage patterns and alerts you when it detects anomalous spending."
  },
  {
    domain: 4,
    task: "4.2",
    q: "How does the AWS Cost and Usage Report differ from Cost Explorer?",
    opts: [
      "CUR provides raw, granular data delivered to S3, while Cost Explorer provides interactive visual analysis in the console",
      "They are identical in functionality",
      "Cost Explorer is only available to Enterprise support customers",
      "CUR only shows summary data, while Cost Explorer shows line-item details"
    ],
    ans: 0,
    explain: "The CUR delivers the most detailed raw billing data to S3 for custom analysis, while Cost Explorer provides an interactive console-based visualization of your costs."
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
    q: "Which of the following actions can AWS Budgets perform when a threshold is breached? (Choose TWO.)",
    opts: [
      "Send an email notification to specified recipients",
      "Automatically terminate all running EC2 instances",
      "Trigger an AWS Budgets action (e.g., apply an IAM policy or SCP)",
      "Automatically purchase Reserved Instances",
      "Delete S3 buckets to reduce costs"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Budgets can send email/SNS notifications and trigger automated actions like applying IAM policies or SCPs when budget thresholds are exceeded."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS service allows you to view your charges grouped by linked account, service, or tag in a graphical format?",
    opts: ["AWS Cost and Usage Report", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS CloudTrail"],
    ans: 1,
    explain: "AWS Cost Explorer provides graphical views of your costs that can be grouped and filtered by linked account, service, tag, and other dimensions."
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
    task: "4.2",
    q: "Which of the following best describes how AWS Pricing Calculator works?",
    opts: [
      "It analyzes your current AWS bill and suggests savings",
      "It lets you model AWS solutions and estimate costs by configuring services, regions, and usage parameters",
      "It automatically applies discounts to your AWS account",
      "It compares pricing across different cloud providers"
    ],
    ans: 1,
    explain: "AWS Pricing Calculator lets you create cost estimates by selecting services, configuring parameters like region, instance type, and usage levels, and viewing itemized monthly costs."
  },

  // ===== TASK 4.3: TECHNICAL RESOURCES AND SUPPORT (Questions 81-120) =====
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan provides a designated Technical Account Manager (TAM)?",
    opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"],
    ans: 3,
    explain: "Only the Enterprise Support plan provides a designated Technical Account Manager (TAM) who provides proactive guidance and advocacy."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plans provide 24/7 access to Cloud Support Engineers via phone, chat, and email? (Choose TWO.)",
    opts: ["Basic", "Business Support+", "Enterprise Support", "AWS re:Post"],
    ans: [1, 2],
    multi: true,
    explain: "Business Support+ and Enterprise Support provide 24/7 access to Cloud Support Engineers via phone, chat, and email for technical support."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which current AWS Support plan offers the fastest published response time for business-critical system down issues?",
    opts: [
      "Basic",
      "Business Support+",
      "AWS Unified Operations",
      "Enterprise Support"
    ],
    ans: 3,
    explain: "Enterprise Support offers the fastest published response target for business-critical system down cases: less than 15 minutes."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan is free and available to all AWS customers?",
    opts: ["Basic", "Business Support+", "Enterprise Support", "AWS re:Post"],
    ans: 0,
    explain: "The Basic Support plan is free for all AWS customers and includes access to documentation, whitepapers, and limited Trusted Advisor checks."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS service provides personalized recommendations for cost optimization, performance, security, fault tolerance, and service limits?",
    opts: ["AWS Config", "AWS Trusted Advisor", "Amazon Inspector", "AWS Well-Architected Tool"],
    ans: 1,
    explain: "AWS Trusted Advisor inspects your AWS environment and provides recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company on the free support tier opens AWS Trusted Advisor and notices that most recommendations are unavailable. What level of access should it expect on Basic Support?",
    opts: [
      "Access to all Trusted Advisor checks",
      "A limited set of core checks such as selected security and service quota checks",
      "No Trusted Advisor access at all",
      "Only cost optimization checks"
    ],
    ans: 1,
    explain: "Basic Support includes only a limited set of core Trusted Advisor checks rather than the full catalog of recommendations."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the minimum current AWS Support plan that provides access to the full set of Trusted Advisor checks?",
    opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support only"],
    ans: 1,
    explain: "AWS documents full Trusted Advisor access for Business Support+, Enterprise Support, and AWS Unified Operations. Business Support+ is the minimum current plan that includes the full set of checks."
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
    q: "Which AWS resource is a community-driven Q&A service where users can find answers and get expert guidance?",
    opts: ["AWS Knowledge Center", "AWS re:Post", "AWS Documentation", "AWS Whitepapers"],
    ans: 1,
    explain: "AWS re:Post is a community-driven Q&A service (replacing AWS Forums) where AWS users can ask questions, share knowledge, and get guidance from experts."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which resource provides a curated collection of frequently asked questions and answers about AWS services?",
    opts: ["AWS re:Post", "AWS Knowledge Center", "AWS Whitepapers", "AWS Training and Certification"],
    ans: 1,
    explain: "The AWS Knowledge Center is a collection of frequently asked questions and articles that address common customer queries about AWS services."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the AWS Partner Network (APN)?",
    opts: [
      "A VPN service for connecting on-premises networks to AWS",
      "A global community of partners that leverage AWS to build solutions and services for customers",
      "A network of AWS data centers around the world",
      "A private network connecting all AWS regions"
    ],
    ans: 1,
    explain: "The AWS Partner Network (APN) is a global community of AWS partners (consulting and technology partners) who help customers design, build, and manage workloads on AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is AWS Marketplace?",
    opts: [
      "A physical store for purchasing AWS hardware",
      "A digital catalog where customers can find, buy, and deploy third-party software that runs on AWS",
      "A service for selling products on Amazon.com",
      "A tool for comparing AWS pricing with other cloud providers"
    ],
    ans: 1,
    explain: "AWS Marketplace is a curated digital catalog of third-party software, data, and services that you can find, test, buy, and deploy on AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which team should you contact to report suspected abuse of AWS resources, such as spam or illegal content hosted on AWS?",
    opts: ["AWS Support", "AWS Trust and Safety team", "AWS Professional Services", "AWS Security team"],
    ans: 1,
    explain: "The AWS Trust and Safety team handles reports of AWS resources being used for abusive or illegal purposes, such as spam, port scanning, or hosting illegal content."
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
    q: "Which is the lowest current AWS Support plan that offers a response time of less than 1 hour for production system down cases?",
    opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support only"],
    ans: 1,
    explain: "Business Support+ provides a less than 1-hour response time for production system down cases."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is AWS re:Post?",
    opts: [
      "A community Q&A platform for AWS users",
      "A service that connects customers with AWS-certified third-party experts for on-demand project work",
      "An AWS service for automated cost optimization",
      "A quiz platform for AWS certification preparation"
    ],
    ans: 0,
    explain: "AWS re:Post is a community-driven Q&A service where AWS users can ask questions, share knowledge, and get guidance from peers and AWS experts."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the minimum current AWS Support plan that provides access to the AWS Health API for programmatic health-event access?",
    opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support only"],
    ans: 1,
    explain: "AWS Health API access is documented for Business Support+, Enterprise Support, and AWS Unified Operations. Business Support+ is the minimum current plan that includes it."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A small startup is just beginning to use AWS and wants a free support tier with documentation and limited Trusted Advisor checks. Which Support plan is most appropriate?",
    opts: ["Basic", "Business Support+", "Enterprise Support", "AWS re:Post"],
    ans: 0,
    explain: "The Basic Support plan is free and includes access to documentation, whitepapers, and a limited set of Trusted Advisor checks."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What does Enterprise Support provide that Business Support+ does not?",
    opts: [
      "24/7 phone and chat support",
      "Full Trusted Advisor checks",
      "A designated Technical Account Manager (TAM) for proactive guidance",
      "Access to AWS Documentation"
    ],
    ans: 2,
    explain: "Enterprise Support includes a designated TAM. Business Support+ includes 24/7 technical support and full Trusted Advisor checks, but not a designated TAM."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following are categories of AWS Trusted Advisor recommendations? (Choose TWO.)",
    opts: [
      "Cost optimization",
      "Database performance",
      "Fault tolerance",
      "Machine learning accuracy",
      "Container orchestration"
    ],
    ans: [0, 2],
    multi: true,
    explain: "Trusted Advisor provides recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan is recommended for companies running production workloads on AWS and needing 24/7 technical support?",
    opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support only"],
    ans: 2,
    explain: "Business Support+ is the minimum current plan recommended for production workloads that need 24/7 access to Cloud Support Engineers."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the response time for production system down cases under Business Support+?",
    opts: ["Less than 24 hours", "Less than 4 hours", "Less than 1 hour", "15 minutes"],
    ans: 2,
    explain: "Business Support+ provides a less than 1-hour response time for production system down cases."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS resource provides in-depth technical documents covering topics such as architecture best practices, security, and migration?",
    opts: ["AWS re:Post", "AWS Knowledge Center", "AWS Whitepapers and Guides", "AWS Trusted Advisor"],
    ans: 2,
    explain: "AWS Whitepapers and Guides are authoritative documents that cover in-depth technical topics, best practices, architecture patterns, and migration strategies."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A large enterprise needs a designated point of contact at AWS who understands their environment and can coordinate across AWS teams. Which support feature fulfills this need?",
    opts: [
      "AWS Solutions Architect",
      "Technical Account Manager (TAM)",
      "AWS Concierge Support team",
      "Cloud Support Engineer"
    ],
    ans: 1,
    explain: "A TAM is a designated technical point of contact who provides proactive guidance, coordinates access to programs and experts, and advocates for the customer within AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What level of Trusted Advisor checks are available with the Basic Support plan?",
    opts: [
      "Full access to all Trusted Advisor checks",
      "Core security checks and service limit checks only",
      "No access to Trusted Advisor",
      "Performance and cost optimization checks only"
    ],
    ans: 1,
    explain: "The Basic Support plan includes a limited set of core Trusted Advisor checks focused on security best practices and service limits."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following describes the AWS Concierge Support team?",
    opts: [
      "A team that manages your technical infrastructure",
      "Senior billing and account specialists available to Enterprise Support customers for billing and account inquiries",
      "A team that provides architecture reviews",
      "A 24/7 technical support team for all customers"
    ],
    ans: 1,
    explain: "The Concierge Support team consists of senior specialists who help Enterprise Support customers with billing, account, and access inquiries."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A developer needs to programmatically receive notifications about AWS service events that affect their resources. Which feature should they use?",
    opts: ["AWS CloudTrail", "AWS Health API", "Amazon CloudWatch Events", "AWS Config"],
    ans: 1,
    explain: "The AWS Health API provides programmatic access to health events that affect your AWS resources, enabling automated responses and integration with monitoring tools."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS program helps customers get guidance from AWS experts during the early stages of cloud adoption?",
    opts: [
      "AWS Training and Certification",
      "AWS Professional Services",
      "AWS Free Tier",
      "AWS Well-Architected Review"
    ],
    ans: 1,
    explain: "AWS Professional Services, along with Solutions Architects, provides expert guidance to help customers plan and execute their cloud adoption journey."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following are available to ALL AWS customers at no additional cost? (Choose TWO.)",
    opts: [
      "AWS Documentation and Whitepapers",
      "24/7 phone support",
      "AWS re:Post community forums",
      "Technical Account Manager",
      "Full Trusted Advisor checks"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Documentation, Whitepapers, and re:Post community forums are available to all customers regardless of their support plan, at no additional cost."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company is looking for a third-party solution to enhance their AWS-based application with pre-built machine learning capabilities. Where should they look?",
    opts: ["AWS Trusted Advisor", "AWS Marketplace", "AWS Knowledge Center", "AWS Config"],
    ans: 1,
    explain: "AWS Marketplace is a digital catalog offering thousands of third-party software products, including machine learning solutions, that can be deployed on AWS."
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
    opts: ["AWS Trusted Advisor", "AWS Support Center", "AWS re:Post", "Basic Support"],
    ans: 1,
    explain: "AWS Support Center is where customers open cases and request AWS help for planned events and operational issues."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A customer discovers that an AWS-hosted website is sending phishing emails. Who should they report this to?",
    opts: ["AWS Support Center", "AWS Trust and Safety team", "Amazon customer service", "AWS Security Hub"],
    ans: 1,
    explain: "The AWS Trust and Safety team handles reports of abusive activity from AWS resources, including phishing, spam, malware, and other policy violations."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A development team needs the lowest-cost paid AWS Support plan with technical support for non-production workloads. Which current plan best matches that need?",
    opts: [
      "Basic Support",
      "Business Support+",
      "Enterprise Support",
      "AWS re:Post"
    ],
    ans: 1,
    explain: "Business Support+ is the lowest-cost current paid support plan and includes technical support, making it the best fit for non-production workloads that still need support cases."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the primary purpose of AWS Training and Certification?",
    opts: [
      "To manage AWS billing and cost optimization",
      "To help individuals build and validate cloud skills through courses and certification exams",
      "To provide technical support for production workloads",
      "To deploy AWS resources automatically"
    ],
    ans: 1,
    explain: "AWS Training and Certification provides courses, labs, and certification exams to help individuals build, validate, and demonstrate cloud expertise."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which type of Trusted Advisor access is available to customers on the Basic Support plan?",
    opts: [
      "Only cost optimization recommendations",
      "Selected core security and service quota checks",
      "The full set of Trusted Advisor checks",
      "No Trusted Advisor checks at all"
    ],
    ans: 1,
    explain: "Basic Support includes only selected core Trusted Advisor checks, such as certain security and service quota checks, rather than the full set."
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
    q: "How does the AWS Health Dashboard differ from the AWS Health API?",
    opts: [
      "The Dashboard shows public AWS service events while the API only shows account-specific events",
      "The Dashboard provides a visual console view while the API enables programmatic access to health data",
      "They are the same feature with different names",
      "The API is available to all customers while the Dashboard requires Business Support+"
    ],
    ans: 1,
    explain: "The AWS Health Dashboard provides a visual console-based view of service health, while the AWS Health API provides programmatic access for automation and integration."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan offers the lowest-cost option that includes 24/7 phone, chat, and email support?",
    opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"],
    ans: 2,
    explain: "Business Support+ is the lowest-cost current support plan that includes 24/7 access to Cloud Support Engineers via phone, chat, and email."
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
    task: "4.3",
    q: "Which of the following best describes what AWS Solutions Architects do?",
    opts: [
      "They manage your AWS infrastructure directly",
      "They provide architectural guidance and best practices to help customers design optimal AWS solutions",
      "They write application code for customers",
      "They provide billing support and account management"
    ],
    ans: 1,
    explain: "AWS Solutions Architects provide technical guidance and best practices to help customers design and build well-architected solutions on AWS."
  },

  // ===== ADDITIONAL QUESTIONS TO REACH 1000 TOTAL =====

  // 4.1 Additional Pricing Models
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
    q: "Which pricing model charges based on the number of requests and the duration of code execution?",
    opts: ["Amazon EC2 On-Demand", "AWS Lambda", "Amazon RDS Reserved Instances", "AWS Outposts"],
    ans: 1,
    explain: "AWS Lambda pricing is based on the number of requests and the compute time consumed (measured in GB-seconds), with no charge when code is not running."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which statement about data transfer pricing in AWS is correct?",
    opts: ["Data transfer into AWS from the internet is always free", "Data transfer between Regions is always free", "Data transfer out to the internet is always free", "All data transfer within the same Availability Zone is charged"],
    ans: 0,
    explain: "AWS does not charge for inbound data transfer from the internet to AWS services. Outbound data transfer and cross-Region transfers incur charges."
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
    task: "4.1",
    q: "Which AWS service automatically provides a free tier that includes 750 hours per month of a t2.micro or t3.micro instance for the first 12 months?",
    opts: ["AWS Lambda", "Amazon EC2", "Amazon Redshift", "AWS Fargate"],
    ans: 1,
    explain: "Amazon EC2 includes 750 hours per month of t2.micro or t3.micro instance usage in the AWS Free Tier for the first 12 months after account creation."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is a key financial advantage of Savings Plans over traditional Reserved Instances?",
    opts: ["Savings Plans are always cheaper than Reserved Instances", "Savings Plans offer flexibility across instance families, sizes, OS, and tenancy", "Savings Plans do not require any commitment period", "Savings Plans only apply to Amazon S3 storage"],
    ans: 1,
    explain: "Compute Savings Plans provide flexibility to change instance families, sizes, OS, and tenancy while still receiving discounted pricing, unlike standard Reserved Instances."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which Amazon S3 storage class is the MOST cost-effective for data that is rarely accessed and can tolerate retrieval times of 12 hours?",
    opts: ["S3 Standard", "S3 Standard-Infrequent Access", "S3 Glacier Deep Archive", "S3 One Zone-Infrequent Access"],
    ans: 2,
    explain: "S3 Glacier Deep Archive is the lowest-cost S3 storage class, designed for data that is rarely accessed and where retrieval times of 12 hours are acceptable."
  },

  // 4.2 Additional Billing & Cost Management
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS tool allows you to visualize, understand, and manage your AWS costs and usage over time?",
    opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Trusted Advisor"],
    ans: 1,
    explain: "AWS Cost Explorer provides an interactive interface to visualize and analyze your AWS spending patterns, forecast future costs, and identify cost optimization opportunities."
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
    task: "4.2",
    q: "Which feature of AWS Organizations can help a company save money by combining usage across multiple AWS accounts?",
    opts: ["Service Control Policies", "Consolidated billing", "AWS CloudFormation StackSets", "IAM Identity Center"],
    ans: 1,
    explain: "Consolidated billing in AWS Organizations combines usage from all member accounts to qualify for volume pricing discounts and share Reserved Instance benefits."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS tool helps estimate the cost of a proposed AWS architecture before deployment?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: 2,
    explain: "AWS Pricing Calculator lets you model your AWS solutions and estimate costs before deploying, helping with budgeting and architecture planning."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is the MOST detailed AWS cost management tool that provides comprehensive data about costs and usage, downloadable as a CSV file?",
    opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Cost and Usage Report", "AWS Billing Dashboard"],
    ans: 2,
    explain: "The AWS Cost and Usage Report (CUR) is the most comprehensive cost dataset, providing line-item detail for every charge and can be delivered to an S3 bucket as CSV files."
  },
  {
    domain: 4,
    task: "4.2",
    q: "How can cost allocation tags help an organization manage AWS costs?",
    opts: ["They automatically reduce costs by optimizing resources", "They allow organizations to categorize and track AWS costs by project, department, or environment", "They provide volume discounts on tagged resources", "They encrypt billing data for security compliance"],
    ans: 1,
    explain: "Cost allocation tags let you label AWS resources with metadata (e.g., department, project) so you can categorize, filter, and track costs at a granular level in billing reports."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS service provides recommendations to help reduce costs by identifying idle or underutilized resources?",
    opts: ["AWS Budgets", "AWS Trusted Advisor", "AWS Config", "Amazon Inspector"],
    ans: 1,
    explain: "AWS Trusted Advisor analyzes your AWS environment and provides cost optimization recommendations, including identifying idle resources, underutilized instances, and unused Elastic IPs."
  },

  // 4.3 Additional Support & Resources
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan provides the minimum current support tier for full Trusted Advisor access?",
    opts: ["Basic", "Business Support+", "AWS Unified Operations", "Only Enterprise Support"],
    ans: 2,
    explain: "Business Support+ is the minimum current plan that includes the full set of AWS Trusted Advisor checks. Enterprise Support and AWS Unified Operations also include full access."
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
    q: "A production workload is down and the team needs the response target for Business Support+. What is the published response time for a production system down case?",
    opts: ["15 minutes", "1 hour", "4 hours", "12 hours"],
    ans: 1,
    explain: "Business Support+ provides a less than 1-hour response time for production system down cases. Enterprise Support is faster for business-critical cases."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS resource provides a personalized view of the health of AWS services that power your applications?",
    opts: ["AWS Trusted Advisor", "AWS Health Dashboard — Your account health", "Amazon CloudWatch", "AWS CloudTrail"],
    ans: 1,
    explain: "AWS Health Dashboard (Your account health) provides personalized alerts and remediation guidance when AWS events may affect your specific resources and accounts."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS offering lets new customers experiment with services at no cost within defined usage limits?",
    opts: ["AWS Partner Network", "AWS Free Tier", "AWS Enterprise Support", "AWS Professional Services"],
    ans: 1,
    explain: "AWS Free Tier lets customers experiment with selected AWS services within limited usage levels at no cost."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company needs help migrating a complex legacy application to AWS. Which resource provides direct assistance from AWS experts for this type of engagement?",
    opts: ["AWS Trusted Advisor", "AWS Support Center", "AWS Professional Services", "AWS re:Post"],
    ans: 2,
    explain: "AWS Professional Services is a global team of experts that helps customers achieve their desired outcomes through paid engagements, including complex migrations and modernizations."
  },

  // ===== ADDITIONAL MULTI-ANSWER QUESTIONS =====

  // 4.1 Pricing Models — Multi-answer (5 questions)
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following are valid use cases for EC2 Spot Instances? (Select TWO)",
    opts: [
      "Stateless web front-ends behind a load balancer",
      "Primary production database hosting",
      "Genomics and scientific research workloads",
      "Real-time payment processing systems",
      "Domain name registration"
    ],
    ans: [0, 2],
    multi: true,
    explain: "Spot Instances are ideal for fault-tolerant workloads such as stateless web tiers behind load balancers and scientific research. They are unsuitable for workloads that cannot tolerate interruptions, like databases or payment processing."
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
    task: "4.1",
    q: "Which of the following statements about the AWS Free Tier are correct? (Select TWO)",
    opts: [
      "Amazon DynamoDB offers 25 GB of storage as part of the Always Free tier",
      "The Free Tier is available only to accounts created in the US East (N. Virginia) region",
      "Amazon CloudFront offers 1 TB of data transfer out per month for 12 months free",
      "AWS CloudFormation is always free to use; you pay only for the underlying resources it provisions",
      "The 12 Months Free EC2 benefit continues indefinitely if usage stays below the threshold"
    ],
    ans: [0, 3],
    multi: true,
    explain: "DynamoDB provides 25 GB of free storage that never expires (Always Free). AWS CloudFormation itself has no additional charge; you only pay for the AWS resources created by your stacks."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following pricing factors apply to Amazon RDS? (Select THREE)",
    opts: [
      "Instance type and size (e.g., db.m5.large)",
      "Number of IAM users who connect to the database",
      "Amount of provisioned storage (GB per month)",
      "Data transfer out to the internet",
      "Number of tables in the database"
    ],
    ans: [0, 2, 3],
    multi: true,
    explain: "Amazon RDS pricing is based on the DB instance type, provisioned storage (and type), data transfer out, and optional features like Multi-AZ and read replicas. IAM user counts and table counts do not affect pricing."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following are characteristics of EC2 Dedicated Hosts? (Select TWO)",
    opts: [
      "They allow you to use your existing per-socket or per-core software licenses",
      "They offer up to 90% discount compared to On-Demand pricing",
      "They provide visibility into the number of sockets and physical cores on the server",
      "They are available only in the US East (N. Virginia) region",
      "They are automatically shared with other AWS accounts in your organization"
    ],
    ans: [0, 2],
    multi: true,
    explain: "Dedicated Hosts provide a physical server dedicated to your use with visibility into sockets and cores, enabling bring-your-own-license (BYOL) compliance for server-bound software licenses."
  },

  // 4.2 Billing, Budget, Cost Management — Multi-answer (4 questions)
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following are capabilities of AWS Cost Explorer? (Select TWO)",
    opts: [
      "Forecasting future costs based on historical usage patterns",
      "Automatically terminating idle EC2 instances to save money",
      "Providing Savings Plans purchase recommendations",
      "Enforcing Service Control Policies across member accounts",
      "Deploying CloudFormation stacks to reduce costs"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Cost Explorer can forecast future costs for up to 12 months and provides Savings Plans recommendations based on your historical usage patterns to help reduce spending."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A finance team wants granular visibility into AWS spending. Which TWO approaches provide detailed cost breakdowns? (Select TWO)",
    opts: [
      "Enable the AWS Cost and Usage Report with hourly granularity delivered to S3",
      "Use AWS CloudTrail to track all API costs",
      "Apply user-defined cost allocation tags and filter by them in Cost Explorer",
      "Enable VPC Flow Logs for all subnets",
      "Configure AWS Config rules for cost tracking"
    ],
    ans: [0, 2],
    multi: true,
    explain: "The AWS Cost and Usage Report provides the most detailed billing data at hourly or daily granularity. Cost allocation tags let you slice costs by custom dimensions like team, project, or environment in Cost Explorer."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following are benefits of consolidated billing in AWS Organizations? (Select THREE)",
    opts: [
      "A single payment method for all member accounts",
      "Aggregated usage across accounts qualifies for tiered volume discounts",
      "Reserved Instance and Savings Plan discounts are shared across the organization",
      "All member accounts automatically receive Enterprise Support at no extra cost",
      "Service Control Policies are applied to billing automatically"
    ],
    ans: [0, 1, 2],
    multi: true,
    explain: "Consolidated billing provides a single invoice and payment method, aggregates usage for volume discounts on services like S3, and shares RI and Savings Plan benefits across all member accounts."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following actions can help a company reduce unexpected AWS charges? (Select TWO)",
    opts: [
      "Set up AWS Budgets with alert thresholds and automated actions",
      "Enable Amazon CloudWatch billing alarms to notify when estimated charges exceed a limit",
      "Use AWS CloudFormation to deploy all resources",
      "Store all data in S3 Glacier Deep Archive",
      "Create a separate VPC for each application"
    ],
    ans: [0, 1],
    multi: true,
    explain: "AWS Budgets can send alerts and trigger automated actions when spending exceeds thresholds. CloudWatch billing alarms provide notifications when estimated charges surpass a configured dollar amount."
  },

  // 4.3 Technical Resources and Support — Multi-answer (4 questions)
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following features are included in the AWS Enterprise Support plan but NOT in Business Support+? (Select TWO)",
    opts: [
      "A designated Technical Account Manager (TAM)",
      "Full set of Trusted Advisor checks",
      "15-minute response time for business-critical system down cases",
      "24/7 access to Cloud Support Engineers via phone and chat",
      "Access to the AWS Health API"
    ],
    ans: [0, 2],
    multi: true,
    explain: "Enterprise Support provides a designated TAM and a 15-minute response time for critical issues. Business Support+ includes full Trusted Advisor, 24/7 engineer access, and Health API, but does not include a designated TAM or the 15-minute SLA."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following AWS resources can help a team learn AWS services and prepare for certification exams? (Select TWO)",
    opts: [
      "AWS Training and Certification digital courses and labs",
      "AWS Cost and Usage Report",
      "AWS Skill Builder platform",
      "AWS Config conformance packs",
      "Amazon Inspector assessment templates"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Training and Certification offers instructor-led and digital courses, hands-on labs, and certification exams. AWS Skill Builder is a learning platform providing hundreds of self-paced courses and practice exams."
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
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following Trusted Advisor checks are available to customers on the Basic Support plan? (Select TWO)",
    opts: [
      "S3 bucket permissions checking for public access",
      "Low-utilization Amazon EC2 instances",
      "Service limits (service quotas) usage",
      "Idle load balancers",
      "Underutilized Amazon EBS volumes"
    ],
    ans: [0, 2],
    multi: true,
    explain: "Basic Support customers have access to core Trusted Advisor checks, which include security checks like S3 bucket permissions and service limits checks. Cost optimization checks like idle load balancers and underutilized resources require Business Support+ or higher."
  },

  // ===== ADDITIONAL SIMPLE QUESTIONS =====
  { domain: 4, task: "4.1", q: "Which AWS pricing model charges you only for the compute time you actually use?", opts: ["Reserved Instances", "Dedicated Hosts", "Pay-as-you-go", "Savings Plans"], ans: 2, explain: "AWS pay-as-you-go pricing means you pay only for what you use, with no upfront commitment." },
  { domain: 4, task: "4.1", q: "What is the primary benefit of purchasing an EC2 Reserved Instance?", opts: ["Higher performance", "Automatic scaling", "Significant cost savings over On-Demand", "Free data transfer"], ans: 2, explain: "Reserved Instances offer up to 72% discount compared to On-Demand pricing in exchange for a 1- or 3-year commitment." },
  { domain: 4, task: "4.1", q: "Which EC2 purchasing option is best for workloads that can tolerate interruptions and need the lowest possible cost?", opts: ["On-Demand", "Reserved Instances", "Dedicated Hosts", "Spot Instances"], ans: 3, explain: "Spot Instances use spare AWS capacity at up to 90% discount but can be interrupted with 2-minute notice." },
  { domain: 4, task: "4.1", q: "What does the AWS Free Tier offer for Amazon EC2?", opts: ["750 hours per month of t2.medium for 12 months", "750 hours per month of t2.micro or t3.micro for 12 months", "250 hours per month of any instance type for 12 months", "750 hours per month of t2.micro with no expiration"], ans: 1, explain: "The Free Tier provides 750 hours/month of t2.micro (or t3.micro) Linux/Windows instances for the first 12 months." },
  { domain: 4, task: "4.1", q: "Which AWS tool allows you to estimate the cost of AWS services before deploying them?", opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Trusted Advisor"], ans: 2, explain: "AWS Pricing Calculator lets you model and estimate costs for your planned AWS architecture." },
  { domain: 4, task: "4.1", q: "What is the term for the AWS pricing model where you commit to a consistent amount of compute usage (measured in $/hour) for 1 or 3 years?", opts: ["Reserved Instances", "Savings Plans", "Spot Instances", "Dedicated Instances"], ans: 1, explain: "Savings Plans offer flexible discounts (up to 66%) across EC2, Lambda, and Fargate based on an hourly spend commitment." },
  { domain: 4, task: "4.1", q: "Which of the following is a characteristic of On-Demand EC2 instances?", opts: ["Requires a 1-year contract", "No upfront cost or long-term commitment", "Cheapest option available", "Only available in certain regions"], ans: 1, explain: "On-Demand instances require no upfront payment or long-term commitment; you pay per second or hour used." },
  { domain: 4, task: "4.1", q: "AWS charges for data transfer in which direction at no cost?", opts: ["Data transferred out to the internet", "Data transferred between AWS regions", "Data transferred into AWS (inbound)", "Data transferred between Availability Zones"], ans: 2, explain: "Inbound data transfer to AWS is generally free; outbound transfers to the internet incur charges." },
  { domain: 4, task: "4.1", q: "What type of Reserved Instance provides the largest discount and requires full payment upfront?", opts: ["No Upfront", "Partial Upfront", "All Upfront", "Convertible"], ans: 2, explain: "All Upfront Reserved Instances provide the maximum discount because full payment is made at the start of the term." },
  { domain: 4, task: "4.1", q: "Which S3 storage class is the most cost-effective for data that is rarely accessed and can tolerate retrieval times of minutes?", opts: ["S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier Instant Retrieval", "S3 Glacier Flexible Retrieval"], ans: 3, explain: "S3 Glacier Flexible Retrieval offers very low storage costs with retrieval times of minutes to hours." },
  { domain: 4, task: "4.1", q: "Which AWS feature automatically moves S3 objects between storage classes based on changing access patterns?", opts: ["S3 Lifecycle policies", "S3 Intelligent-Tiering", "S3 Replication", "S3 Versioning"], ans: 1, explain: "S3 Intelligent-Tiering monitors access patterns and automatically moves objects to lower-cost storage tiers." },
  { domain: 4, task: "4.1", q: "What is the main cost advantage of using AWS Lambda compared to EC2?", opts: ["Lambda is always faster", "You pay only when code is running, with no idle costs", "Lambda has more memory", "Lambda supports more programming languages"], ans: 1, explain: "Lambda charges only for the compute time your code runs, eliminating costs for idle server time." },
  { domain: 4, task: "4.1", q: "Which pricing model lets you use any EC2 instance family or size within a region for a discounted rate?", opts: ["Standard Reserved Instances", "Convertible Reserved Instances", "Compute Savings Plans", "EC2 Instance Savings Plans"], ans: 2, explain: "Compute Savings Plans apply to any EC2 instance family, size, OS, and region, offering the most flexibility." },
  { domain: 4, task: "4.1", q: "What happens to an EC2 Spot Instance when AWS needs the capacity back?", opts: ["It is paused and resumed later", "It is terminated with a 2-minute warning", "It is automatically converted to On-Demand", "It is migrated to another region"], ans: 1, explain: "AWS reclaims Spot Instances with a 2-minute interruption notice when capacity is needed elsewhere." },
  { domain: 4, task: "4.1", q: "Which AWS service provides a dedicated physical server for your exclusive use, helping meet compliance requirements?", opts: ["Dedicated Instances", "Dedicated Hosts", "Reserved Instances", "Bare Metal Instances"], ans: 1, explain: "Dedicated Hosts provide a physical server dedicated to your use, enabling compliance and license management." },
  { domain: 4, task: "4.1", q: "How does AWS charge for Amazon RDS?", opts: ["Only for storage used", "Based on the number of queries executed", "Based on instance hours, storage, I/O, and data transfer", "Flat monthly fee per database"], ans: 2, explain: "RDS pricing includes DB instance hours, storage provisioned, I/O requests, and data transfer charges." },
  { domain: 4, task: "4.1", q: "Which of the following best describes the AWS Total Cost of Ownership (TCO) advantage over on-premises?", opts: ["AWS reduces costs primarily through lower per-hour instance pricing", "AWS eliminates upfront hardware capital expenses", "AWS TCO savings come mainly from reduced data transfer fees", "AWS reduces costs by requiring fewer software licenses"], ans: 1, explain: "Moving to AWS replaces capital expenditure for hardware with operational expenditure, reducing TCO." },
  { domain: 4, task: "4.2", q: "Which AWS service gives you a centralized view of billing and usage across multiple AWS accounts?", opts: ["AWS Cost Explorer", "AWS Organizations", "AWS Budgets", "AWS Billing Console"], ans: 1, explain: "AWS Organizations consolidates billing across accounts, providing a single payer account for all member accounts." },
  { domain: 4, task: "4.2", q: "What is the benefit of consolidated billing in AWS Organizations?", opts: ["Free support for all accounts", "Volume discounts when combined usage crosses pricing tiers", "Automatic cost optimization", "Shared Reserved Instance capacity only"], ans: 1, explain: "Consolidated billing aggregates usage across accounts, potentially qualifying for volume pricing tier discounts." },
  { domain: 4, task: "4.2", q: "Which AWS tool allows you to set custom alerts when your AWS costs or usage exceed a defined threshold?", opts: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Trusted Advisor"], ans: 2, explain: "AWS Budgets lets you set cost, usage, and reservation budgets with alerts when thresholds are breached." },
  { domain: 4, task: "4.2", q: "What does AWS Cost Explorer primarily help you do?", opts: ["Predict future instance types needed", "Visualize and analyze your AWS spending over time", "Set billing alerts", "Compare AWS to competitor pricing"], ans: 1, explain: "AWS Cost Explorer provides interactive charts and reports to analyze historical and forecasted AWS costs." },
  { domain: 4, task: "4.2", q: "Which AWS feature lets you allocate costs to different teams or projects using metadata attached to resources?", opts: ["Cost Allocation Tags", "AWS Organizations SCPs", "AWS Budgets", "Resource Groups"], ans: 0, explain: "Cost Allocation Tags let you tag resources (e.g., by team or project) and then filter costs by those tags." },
  { domain: 4, task: "4.2", q: "What is an AWS Free Tier 'Always Free' offer?", opts: ["Services free for 12 months after signup", "Trial offers lasting 30-60 days", "Services with a limited free amount every month with no expiration", "Services free for the first 1,000 API calls per account"], ans: 2, explain: "Always Free offers never expire and are available to all AWS customers, such as 1 million Lambda requests/month." },
  { domain: 4, task: "4.2", q: "Which report in AWS provides the most detailed breakdown of your charges, including every line-item resource?", opts: ["AWS Cost Explorer report", "AWS Budgets report", "AWS Cost and Usage Report (CUR)", "AWS Trusted Advisor report"], ans: 2, explain: "The AWS Cost and Usage Report (CUR) is the most granular billing dataset, with hourly line-item resource detail." },
  { domain: 4, task: "4.2", q: "What is the purpose of an AWS invoice?", opts: ["To estimate future costs", "To provide a summary of charges billed to your account for the month", "To show Reserved Instance recommendations", "To list security findings"], ans: 1, explain: "The monthly AWS invoice summarizes all charges incurred during the billing period for your account." },
  { domain: 4, task: "4.2", q: "Which AWS tool provides rightsizing recommendations to help reduce EC2 costs?", opts: ["AWS Budgets", "AWS Trusted Advisor", "AWS Cost Explorer", "AWS Config"], ans: 2, explain: "AWS Cost Explorer includes rightsizing recommendations that identify underutilized EC2 instances to downsize." },
  { domain: 4, task: "4.2", q: "In AWS Organizations, what is the account that pays the bills for all member accounts called?", opts: ["Root account", "Management account (payer account)", "Master billing account", "Primary account"], ans: 1, explain: "The management account (formerly called payer account) receives the consolidated bill for all member accounts." },
  { domain: 4, task: "4.2", q: "Which of the following is a key feature of AWS Budgets Actions?", opts: ["Send SNS notifications but cannot take automated actions on resources", "Apply IAM policies or stop instances when budget thresholds are met", "Only trigger alerts after costs have already exceeded the budget", "Reduce instance sizes automatically to stay within budget"], ans: 1, explain: "Budgets Actions can automatically apply IAM policies, SCPs, or target EC2/RDS instances when thresholds are hit." },
  { domain: 4, task: "4.2", q: "What is the AWS Billing Dashboard primarily used for?", opts: ["Configuring IAM permissions for billing", "Viewing current month charges and accessing billing tools", "Purchasing Reserved Instances", "Setting up VPC networking"], ans: 1, explain: "The Billing Dashboard provides an overview of current costs, forecasts, and access to billing tools." },
  { domain: 4, task: "4.2", q: "How can you receive an alert when your AWS Free Tier usage is approaching its limits?", opts: ["Set up CloudWatch alarms manually", "Enable Free Tier usage alerts in the Billing Console", "Subscribe to AWS Health notifications", "Configure AWS Config rules"], ans: 1, explain: "The Billing Console has a Free Tier usage alert setting that emails you when you approach Free Tier limits." },
  { domain: 4, task: "4.2", q: "Which AWS pricing concept means you benefit from lower per-unit prices as your usage volume increases?", opts: ["Pay-as-you-go", "Volume-based discounts (tiered pricing)", "Savings Plans", "Reserved pricing"], ans: 1, explain: "AWS uses tiered pricing for services like S3, where per-GB cost decreases as total storage volume increases." },
  { domain: 4, task: "4.2", q: "What does the AWS Migration Evaluator (formerly TSO Logic) help customers assess?", opts: ["Security posture before migrating", "The business case and TCO of migrating to AWS", "Network bandwidth requirements", "Application performance after migration"], ans: 1, explain: "Migration Evaluator analyzes on-premises costs and models the projected TCO and savings of moving to AWS." },
  { domain: 4, task: "4.2", q: "Which AWS service or feature lets you group accounts into organizational units (OUs) for policy management?", opts: ["AWS IAM Groups", "AWS Organizations", "AWS Control Tower", "AWS Service Catalog"], ans: 1, explain: "AWS Organizations lets you group accounts into OUs and apply Service Control Policies (SCPs) to each OU." },
  { domain: 4, task: "4.2", q: "Which of the following is NOT a category in AWS Cost Explorer's cost analysis?", opts: ["Service", "Linked account", "Tag", "Availability Zone latency"], ans: 3, explain: "Cost Explorer filters by service, account, region, tag, and more — but not by latency metrics." },
  { domain: 4, task: "4.2", q: "What is the minimum AWS Support plan that includes a designated Technical Account Manager (TAM)?", opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"], ans: 3, explain: "A designated TAM is an Enterprise Support feature." },
  { domain: 4, task: "4.3", q: "Which AWS Support plan is the entry-level paid option and is best suited for customers who need technical support for production workloads?", opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"], ans: 1, explain: "Business Support+ is the entry-level current paid support plan and is suitable for production workloads that need technical support." },
  { domain: 4, task: "4.3", q: "What is the response time for a production system down case under Business Support+?", opts: ["Less than 24 hours", "Less than 4 hours", "Less than 1 hour", "15 minutes"], ans: 2, explain: "Business Support+ provides a less than 1-hour response time for production system down cases." },
  { domain: 4, task: "4.3", q: "Which AWS Support plan provides 24/7 phone, email, and chat access to Cloud Support Engineers at the lowest current tier?", opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"], ans: 1, explain: "Business Support+ is the lowest current support tier that includes 24/7 access to Cloud Support Engineers via phone, email, and chat." },
  { domain: 4, task: "4.3", q: "Which AWS resource provides no-cost documentation and white papers?", opts: ["AWS Documentation", "AWS Knowledge Center", "AWS re:Post", "AWS Trusted Advisor"], ans: 0, explain: "AWS documentation and whitepapers are available to all customers at no cost." },
  { domain: 4, task: "4.3", q: "Which AWS tool provides real-time guidance across five categories: cost, performance, security, fault tolerance, and service limits?", opts: ["AWS Config", "AWS Inspector", "AWS Trusted Advisor", "AWS Well-Architected Tool"], ans: 2, explain: "Trusted Advisor checks your environment against AWS best practices across five pillars." },
  { domain: 4, task: "4.3", q: "Full access to all AWS Trusted Advisor checks requires which minimum current Support plan?", opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"], ans: 1, explain: "Business Support+ is the minimum current support plan that includes full Trusted Advisor access. Enterprise Support and AWS Unified Operations also include full access." },
  { domain: 4, task: "4.3", q: "What is AWS re:Post?", opts: ["A premium support ticketing portal", "A community Q&A platform that replaced AWS Forums", "An AWS-managed blog for announcements", "A billing analytics tool"], ans: 1, explain: "AWS re:Post is a community-driven Q&A service that replaced the original AWS Forums." },
  { domain: 4, task: "4.3", q: "Which AWS Support plan includes Concierge Support for billing and account questions?", opts: ["Basic", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 2, explain: "Enterprise Support includes AWS Concierge Support for billing and account assistance." },
  { domain: 4, task: "4.3", q: "What is the primary purpose of the AWS Partner Network (APN)?", opts: ["To provide free AWS credits to startups", "To connect AWS customers with AWS-certified consulting and technology partners", "To manage AWS Marketplace listings", "To offer enterprise support services directly"], ans: 1, explain: "The APN is a global program that connects customers with vetted AWS consulting and technology partners." },
  { domain: 4, task: "4.3", q: "Which service allows customers to find, buy, and deploy third-party software that runs on AWS?", opts: ["AWS Service Catalog", "AWS Partner Network", "AWS Marketplace", "AWS AppExchange"], ans: 2, explain: "AWS Marketplace is a curated digital catalog of third-party software solutions deployable on AWS." },
  { domain: 4, task: "4.3", q: "What is the response time for a business-critical system down case under the Enterprise Support plan?", opts: ["Less than 4 hours", "Less than 1 hour", "Less than 15 minutes", "Less than 30 minutes"], ans: 2, explain: "Enterprise Support provides less than 15-minute response for business-critical system down (Sev 1) cases." },
  { domain: 4, task: "4.3", q: "Which AWS offering helps new customers experiment with select services within limited free usage tiers?", opts: ["AWS Marketplace", "AWS Free Tier", "AWS re:Start", "AWS Professional Services"], ans: 1, explain: "AWS Free Tier lets customers experiment with selected AWS services within limited usage levels at no cost." },
  { domain: 4, task: "4.3", q: "Which AWS Support plan is the lowest-cost paid option that allows unlimited technical support cases?", opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"], ans: 1, explain: "Business Support+ is the lowest-cost current paid support plan and allows unlimited technical support cases. Basic Support does not include technical support cases." },
  { domain: 4, task: "4.3", q: "Which AWS resource provides self-paced digital courses and classroom training for AWS services?", opts: ["AWS re:Post", "AWS Skill Builder and AWS Training", "AWS Trusted Advisor", "AWS Config"], ans: 1, explain: "AWS Skill Builder and AWS Training offer self-paced courses and instructor-led classes for learning AWS." },
  { domain: 4, task: "4.3", q: "Which AWS portal is used to open and track AWS support cases?", opts: ["AWS Trusted Advisor", "AWS Support Center", "AWS Health Dashboard", "AWS re:Post"], ans: 1, explain: "AWS Support Center is the portal customers use to open, manage, and track AWS support cases." },
  { domain: 4, task: "4.3", q: "Which AWS service provides a personalized view of AWS service health events affecting your account?", opts: ["AWS Trusted Advisor", "AWS Personal Health Dashboard (AWS Health)", "Amazon CloudWatch", "AWS Config"], ans: 1, explain: "AWS Health (Personal Health Dashboard) shows service events and maintenance that impact your specific resources." },

  // --- Scenario-based questions ---

  { domain: 4, task: "4.1", q: "A startup runs unpredictable workloads — some weeks they use 10 EC2 instances, other weeks only 2. They cannot commit to steady usage. Which pricing model suits them best?", opts: ["Reserved Instances", "On-Demand pricing", "Spot Instances", "Compute Savings Plans"], ans: 1, explain: "On-Demand charges only for actual usage with no commitments, ideal for unpredictable workloads. Reserved Instances and Savings Plans require commitments for steadier use. Spot Instances can be interrupted." },
  { domain: 4, task: "4.1", q: "A company runs a production database 24/7 and expects steady EC2 usage for the next three years. Which pricing option is usually the best fit?", opts: ["On-Demand pricing", "Spot Instances", "Reserved Instances with a long-term commitment", "Dedicated Hosts"], ans: 2, explain: "Reserved Instances are a strong fit for steady-state EC2 workloads that can commit for one or three years. On-Demand is more flexible but usually more expensive, Spot is interruptible, and Dedicated Hosts are typically chosen for licensing or compliance needs." },
  { domain: 4, task: "4.1", q: "A data analytics team runs large batch processing jobs overnight and can restart if interrupted. Which pricing model is the best fit?", opts: ["On-Demand Instances", "Spot Instances", "Reserved Instances", "Dedicated Instances"], ans: 1, explain: "Spot Instances are a strong fit for fault-tolerant, interruptible batch workloads because they can provide the lowest cost when interruptions are acceptable." },
  { domain: 4, task: "4.1", q: "A company wants to save money on compute costs across EC2, Lambda, and Fargate with a single commitment. Which pricing model covers all three?", opts: ["EC2 Reserved Instances", "Compute Savings Plans", "EC2 Instance Savings Plans", "Spot Instances"], ans: 1, explain: "Compute Savings Plans provide discounts across EC2, Lambda, and Fargate with one compute spend commitment. Reserved Instances and EC2 Instance Savings Plans apply to EC2 usage patterns only. Spot is not a commitment-based model and does not cover Lambda." },
  { domain: 4, task: "4.2", q: "A company's AWS bill increased unexpectedly last month. The finance team needs to identify which service and account caused the spike. Which tool should they use?", opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Cost and Usage Report (CUR)"], ans: 1, explain: "Cost Explorer provides detailed visualizations of spending patterns filtered by service, account, tag, and date range. Budgets alert on thresholds, Pricing Calculator estimates new workloads, and CUR is the detailed raw dataset rather than the quickest interactive analysis tool." },
  { domain: 4, task: "4.2", q: "A company wants to receive an email alert when their monthly AWS spending is projected to exceed $10,000. Which service should they configure?", opts: ["AWS Cost Explorer", "AWS Budgets", "Amazon CloudWatch billing alarms", "AWS Cost Anomaly Detection"], ans: 1, explain: "AWS Budgets lets you set cost thresholds and sends alerts when actual or forecasted spending exceeds them. Cost Explorer analyzes spend, CloudWatch billing alarms are narrower, and Cost Anomaly Detection focuses on unusual spend patterns rather than a defined budget target." },
  { domain: 4, task: "4.2", q: "A company with five business units wants each unit to track and manage their own AWS costs independently. Which AWS feature supports this organizational structure?", opts: ["AWS Organizations with separate accounts per business unit and consolidated billing", "AWS Cost Explorer", "Cost allocation tags", "AWS Budgets"], ans: 0, explain: "AWS Organizations lets each business unit have its own account for independent cost tracking while benefiting from consolidated billing and volume discounts. Cost Explorer helps analyze spend, tags help with attribution, and Budgets help with thresholds, but none of them replace separate accounts for isolation." },
  { domain: 4, task: "4.2", q: "A company wants to estimate the monthly cost of a new workload consisting of 10 EC2 instances, an RDS database, and 5 TB of S3 storage before deploying. Which tool should they use?", opts: ["AWS Cost Explorer to view projected costs", "AWS Pricing Calculator to model and estimate costs for new workloads", "AWS Budgets to set a spending limit", "AWS Trusted Advisor to check for savings opportunities"], ans: 1, explain: "AWS Pricing Calculator lets you model AWS service configurations and estimate monthly costs before deployment. Cost Explorer shows historical spending, not estimates for new workloads. Budgets track existing spending. Trusted Advisor optimizes existing resources, not future estimates." },
  { domain: 4, task: "4.3", q: "Which current AWS Support plan offers less than 15-minute response for business-critical system down cases?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 2, explain: "Enterprise Support provides less than 15-minute response for business-critical (Sev 1) system down cases." },
  { domain: 4, task: "4.3", q: "Which AWS support feature is a designated expert who provides proactive architectural guidance?", opts: ["AWS Support Center", "Technical Account Manager (TAM)", "AWS re:Post", "AWS Professional Services"], ans: 1, explain: "A TAM is a designated AWS expert who provides proactive architectural guidance." },
  { domain: 4, task: "4.3", q: "A small development team needs technical support for AWS workloads but does not need 24/7 production support. Which plan is the most cost-effective paid option?", opts: ["Basic Support", "Business Support+", "Enterprise Support", "AWS re:Post"], ans: 1, explain: "Business Support+ is the lowest-cost paid plan that includes technical support, making it the best fit for workloads that need support cases." },
  { domain: 4, task: "4.2", q: "A company notices they have multiple idle Elastic IP addresses and underutilized EC2 instances. Which AWS tool provides recommendations to eliminate this waste?", opts: ["AWS Cost Explorer", "AWS Trusted Advisor", "AWS Budgets", "AWS CloudWatch"], ans: 1, explain: "Trusted Advisor includes cost optimization checks that identify idle Elastic IPs, underutilized instances, and other waste. Cost Explorer shows spending trends but doesn't recommend actions. Budgets track spending against thresholds. CloudWatch shows metrics but doesn't provide optimization recommendations." },
  { domain: 4, task: "4.1", q: "A company wants to transfer large amounts of data INTO AWS from the internet. They're concerned about data transfer costs. What should they know?", opts: ["Inbound transfer is free", "Outbound transfer costs money", "Both directions cost the same", "Only S3 uploads are free"], ans: 1, explain: "AWS does not charge for inbound data transfer (ingress) from the internet. Outbound data transfer (egress) is metered and charged. The pricing is not symmetric, and the free ingress rule is not limited to S3 uploads." },
  { domain: 4, task: "4.2", q: "A finance team wants to see a breakdown of AWS costs by department, project, and environment (dev/staging/prod). What must they implement to enable this reporting?", opts: ["Separate AWS accounts for every combination", "Cost allocation tags", "Amazon S3 bucket names", "AWS CloudTrail logs"], ans: 1, explain: "Cost allocation tags let you categorize resources by custom dimensions (department, project, environment) and filter costs in billing reports. Separate accounts for every combination is impractical. S3 bucket naming doesn't track cross-service costs. CloudTrail logs API activity, not cost attribution." },
  { domain: 4, task: "4.3", q: "A company wants to use AWS Trusted Advisor but finds that most checks are locked. Which support plan unlocks the full set of Trusted Advisor checks at the lowest current tier?", opts: ["Basic", "Business Support+", "AWS Unified Operations", "Enterprise Support"], ans: 1, explain: "Business Support+ is the minimum current plan that unlocks the full set of Trusted Advisor checks. Enterprise Support and AWS Unified Operations also include full access." },
  { domain: 4, task: "4.1", q: "A company uses Amazon S3 to store data and is surprised by their storage bill. They realize most of their data hasn't been accessed in over a year. Which S3 feature can automatically reduce their costs?", opts: ["S3 Versioning", "S3 Lifecycle policies", "S3 Transfer Acceleration", "S3 Object Lock"], ans: 1, explain: "S3 Lifecycle policies automatically move objects to cheaper tiers based on age. Versioning keeps multiple copies, increasing costs. Transfer Acceleration speeds uploads but doesn't reduce storage costs. Object Lock prevents deletion but doesn't optimize storage costs." },
  { domain: 4, task: "4.2", q: "A company with 50 AWS accounts wants to receive a single invoice and benefit from volume pricing discounts across all accounts. Which feature enables this?", opts: ["AWS Budgets", "AWS Organizations consolidated billing", "AWS Cost Explorer", "Manual invoice aggregation"], ans: 1, explain: "Consolidated billing in AWS Organizations combines usage across all accounts into one bill and aggregates for volume discounts. Budgets alert on spending but don't consolidate billing. Cost Explorer visualizes multi-account costs but doesn't provide unified invoicing. Manual aggregation misses volume discounts." },
  { domain: 4, task: "4.3", q: "Which AWS portal is used to open and manage AWS support cases?", opts: ["AWS Trusted Advisor", "AWS Support Center", "AWS Health Dashboard", "AWS re:Post"], ans: 1, explain: "AWS Support Center is the portal customers use to open, manage, and track AWS support cases." },
  { domain: 4, task: "4.1", q: "A company has Windows Server licenses with Software Assurance and wants to use them on AWS to avoid paying for new licenses. Which EC2 option supports this?", opts: ["On-Demand Instances", "Dedicated Hosts", "Spot Instances", "Reserved Instances"], ans: 1, explain: "Dedicated Hosts provide visibility into the underlying physical server, allowing customers to use existing per-socket or per-core licenses (BYOL). On-Demand includes license costs in the price. Spot doesn't waive licensing. Reserved Instances include license costs unless used on Dedicated Hosts." },
  { domain: 4, task: "4.2", q: "A company wants to identify and eliminate AWS resources that are provisioned but never used, such as unattached EBS volumes and idle load balancers. Which approach should they use?", opts: ["AWS CloudFormation stack deletion", "AWS Trusted Advisor cost optimization checks combined with AWS Cost Explorer analysis", "AWS Config rules", "Amazon CloudWatch alarms", "Amazon Inspector"], ans: 1, explain: "Trusted Advisor flags idle resources such as unattached EBS volumes and idle load balancers, while Cost Explorer shows spending on unused services. CloudFormation deletion removes everything, not just idle resources. Config tracks configuration, not utilization. CloudWatch alarms per resource are operationally heavy and don't identify waste directly." },
  { domain: 4, task: "4.3", q: "A developer needs help with an AWS service but cannot afford a paid support plan. Where can they get technical guidance from the AWS community?", opts: ["AWS Artifact", "AWS re:Post", "AWS Health Dashboard", "AWS Trusted Advisor"], ans: 1, explain: "AWS re:Post is a free community Q&A platform where developers can ask and answer AWS technical questions. Artifact provides compliance documents, AWS Health Dashboard shows events, and Trusted Advisor provides automated checks." },
  { domain: 4, task: "4.1", q: "Which AWS program helps new customers try select services within limited free usage tiers?", opts: ["AWS Savings Plans", "AWS Free Tier", "AWS Credits", "AWS Enterprise Discount Program"], ans: 1, explain: "AWS Free Tier offers limited free usage for select services. Savings Plans require commitments. Credits are not automatic for all accounts. Enterprise Discount Program is negotiated for large customers, not for experimentation." },
  { domain: 4, task: "4.2", q: "A company's cloud team wants a programmatic way to analyze their AWS cost and usage data in detail, beyond what the AWS console provides. Which feature enables this?", opts: ["AWS Cost Explorer API", "AWS Cost and Usage Report (CUR)", "AWS Budgets API", "AWS Billing Dashboard"], ans: 1, explain: "The Cost and Usage Report provides the most detailed billing data at line-item level for custom analysis. Cost Explorer API provides aggregate queries, Budgets API manages budget alerts, and the Billing Dashboard is a high-level console view." },
  { domain: 4, task: "4.3", q: "A company is evaluating their AWS architecture and wants a structured review based on the six pillars of the Well-Architected Framework. Which AWS tool facilitates this?", opts: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Config", "AWS Resilience Hub"], ans: 1, explain: "The Well-Architected Tool provides a structured questionnaire based on the six pillars to review workloads. Trusted Advisor is an automated check service, Config audits resource compliance, and Resilience Hub focuses on resilience assessments rather than full Well-Architected reviews." },
  { domain: 4, task: "4.1", q: "A company runs workloads across multiple EC2 instance types and sizes and wants flexible pricing discounts without being locked to a specific instance family. Which option provides this?", opts: ["Standard Reserved Instances", "Convertible Reserved Instances", "Compute Savings Plans", "Spot Instances"], ans: 2, explain: "Compute Savings Plans offer the most flexibility, applying discounts to any EC2 instance regardless of family, size, Region, or OS. Standard RIs are locked to one instance type. Convertible RIs allow changes but with less flexibility than Savings Plans. Spot Instances aren't commitment-based pricing." },
  ,
  { domain: 4, task: "4.1", q: "A company runs a stable baseline of container workloads every day but also experiences unpredictable traffic spikes during marketing campaigns. Finance wants strong savings without overcommitting all capacity. Which purchasing approaches should the team combine? (Select TWO)", opts: ["Savings Plans", "On-Demand or Spot", "Dedicated Hosts", "All Upfront Reserved Instances", "On-premises capacity"], ans: [0, 1], multi: true, explain: "Savings Plans are well suited to predictable baseline compute, while On-Demand or Spot can absorb burst capacity without overcommitting. The other options either reduce flexibility or do not fit the requirement." },
  { domain: 4, task: "4.2", q: "A company wants to understand which departments are driving cloud spend and also receive alerts before any department exceeds its monthly target. Which AWS features should they implement? (Select TWO)", opts: ["Cost allocation tags", "AWS Budgets", "AWS Cost Explorer", "AWS Cost Anomaly Detection", "AWS Control Tower"], ans: [0, 1], multi: true, explain: "Cost allocation tags let the team attribute spend by department, and AWS Budgets provides threshold alerts for actual or forecasted spending. Cost Explorer is for analysis, Cost Anomaly Detection finds unusual spend, and Control Tower helps with governance." },
  { domain: 4, task: "4.2", q: "A company wants detailed billing data delivered for custom analytics in Amazon Athena, while also giving executives a simpler interactive console view of cost trends and forecasts. Which AWS tools support these two needs? (Select TWO)", opts: ["AWS Cost and Usage Report (CUR)", "AWS Cost Explorer", "AWS Cost Anomaly Detection", "Cost allocation tags", "AWS Budgets"], ans: [0, 1], multi: true, explain: "CUR provides the granular line-item data needed for custom analytics, and Cost Explorer provides an easier interactive interface for trend and forecast analysis. The other options do not provide billing data analysis for these use cases." },
  { domain: 4, task: "4.3", q: "A company needs 24/7 access to Cloud Support Engineers for production issues but does not need a designated Technical Account Manager. Which support plans satisfy the 24/7 requirement? (Select TWO)", opts: ["Business Support+", "Enterprise Support", "Basic Support", "AWS re:Post", "AWS Trusted Advisor"], ans: [0, 1], multi: true, explain: "Business Support+ and Enterprise Support both provide 24/7 access to Cloud Support Engineers for production environments. Basic Support is free, and re:Post or Trusted Advisor do not replace a support plan." },
  { domain: 4, task: "4.2", q: "A company operating 40 AWS accounts wants one payer account, shared discount benefits, and controls that prevent individual teams from bypassing cost policies. Which AWS capabilities should they use? (Select TWO)", opts: ["AWS Organizations consolidated billing", "Service Control Policies (SCPs)", "AWS Budgets", "AWS Cost Explorer", "AWS Control Tower"], ans: [0, 1], multi: true, explain: "AWS Organizations consolidated billing centralizes invoicing and discount sharing, while SCPs enforce account-level guardrails. Budgets and Cost Explorer help with cost management, and Control Tower helps establish a landing zone, but none replaces this billing-plus-guardrails pair." },
  { domain: 4, task: "4.1", q: "A media company stores years of archived footage in Amazon S3 and wants storage costs to decrease automatically as data ages, while keeping retrieval options for occasional audits. Which S3 features should they use? (Select TWO)", opts: ["S3 Lifecycle policies", "S3 Glacier storage classes", "Amazon EBS snapshots", "S3 Transfer Acceleration", "AWS Shield Standard"], ans: [0, 1], multi: true, explain: "Lifecycle policies can transition older objects automatically, and Glacier storage classes reduce long-term archival cost while preserving retrieval options. The other features do not solve this storage lifecycle requirement." }
  ,
  { domain: 4, task: "4.1", q: "A company wants to optimize AWS compute costs for different workload patterns. One workload is steady and predictable all year, while another is fault tolerant and can be interrupted during off-hours processing. Which purchasing approaches are the best fit? (Select TWO)", opts: ["Savings Plans or Reserved Instances for the steady workload", "Spot Instances for the interruptible workload", "Compute Savings Plans for every workload", "On-Demand for every workload regardless of pattern", "Dedicated Hosts for the interruptible workload"], ans: [0, 1], multi: true, explain: "Commitment-based discounts fit steady workloads, and Spot Instances fit interruptible processing. The other options do not align to the workload patterns or cost goal." },
  { domain: 4, task: "4.2", q: "A finance team wants to mature cloud cost management. It needs detailed line-item billing data for custom analytics, a simpler built-in view for trends and forecasts, and proactive alerting when spend is about to exceed a threshold. Which AWS tools should it use? (Select THREE)", opts: ["AWS Cost and Usage Report (CUR)", "AWS Cost Explorer", "AWS Budgets", "Cost allocation tags", "AWS Cost Anomaly Detection"], ans: [0, 1, 2], multi: true, explain: "CUR provides granular billing data, Cost Explorer provides interactive trend analysis and forecasts, and AWS Budgets provides threshold alerts. The remaining services are not the primary tools for this billing-management workflow." },
  { domain: 4, task: "4.2", q: "A company with many AWS accounts wants centralized billing, consistent guardrails on what member accounts can do, and cost reporting by team. Which AWS capabilities support those goals? (Select THREE)", opts: ["AWS Organizations consolidated billing", "Service Control Policies (SCPs)", "Cost allocation tags", "Amazon Rekognition", "AWS Glue Studio"], ans: [0, 1, 2], multi: true, explain: "Consolidated billing centralizes charges, SCPs establish account guardrails, and cost allocation tags support team-based reporting. Rekognition and Glue Studio are unrelated." },
  { domain: 4, task: "4.3", q: "A production operations team needs support options that match a business-critical AWS environment. They want 24/7 access to Cloud Support Engineers, full Trusted Advisor checks, and a designated Technical Account Manager for proactive guidance. Which support choices or features satisfy those needs? (Select THREE)", opts: ["Business Support+ for 24/7 access to Cloud Support Engineers", "Enterprise Support for a designated Technical Account Manager", "Business Support+ or higher for the full set of Trusted Advisor checks", "Basic Support for architectural reviews with a TAM", "AWS re:Post as a replacement for a support plan"], ans: [0, 1, 2], multi: true, explain: "Business Support+ provides 24/7 engineer access, Enterprise Support adds a designated TAM, and full Trusted Advisor access starts at Business Support+. Basic Support and re:Post do not replace those capabilities." }
];
