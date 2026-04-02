function generateDomain3DistractorQuestions() {
  const companies = [
    "A startup",
    "A company",
    "An enterprise",
    "A team",
    "A platform",
    "A provider",
    "An agency",
    "A bank",
    "A retailer",
    "A firm",
    "A nonprofit",
    "An operator",
    "A vendor",
    "A studio",
    "A lab"
  ];

  const constraints = [
    "lowest operational overhead",
    "most cost-effective design",
    "maximum availability",
    "lowest latency for global users",
    "quickest deployment cycle",
    "strongest managed-service posture",
    "minimum infrastructure management",
    "best performance at variable scale",
    "least maintenance effort",
    "highest fault tolerance",
    "lowest recovery time objective",
    "best developer productivity",
    "strongest managed-service alignment",
    "simplest multi-environment rollout",
    "lowest network complexity"
  ];

  const templates = [
    { task: "3.1", q: (c, k) => `${c} wants repeatable infrastructure provisioning across environments with version control and review workflows. What AWS service best matches that need for ${k}?`, opts: ["AWS CloudFormation", "AWS CDK", "AWS Service Catalog", "AWS Systems Manager Automation"], ans: "AWS CloudFormation", next: "AWS CDK", win: "CloudFormation provides infrastructure as code with repeatability and change tracking.", lose: "CDK is also an IaC tool, but CloudFormation is the service that directly provisions the stacks." },
    { task: "3.1", q: (c, k) => `${c} needs an easy way to deploy web apps without managing underlying infrastructure details like load balancing and auto scaling setup manually. Which service best supports ${k}?`, opts: ["AWS Elastic Beanstalk", "AWS App Runner", "Amazon ECS on Fargate", "AWS CloudFormation"], ans: "AWS Elastic Beanstalk", next: "AWS App Runner", win: "Elastic Beanstalk provides managed application deployment workflows and environment orchestration.", lose: "App Runner and Fargate both reduce ops, but Beanstalk is the closest fit for managed web app deployment." },
    { task: "3.2", q: (c, k) => `${c} requires fault tolerance for a production application by isolating infrastructure failure domains within one Region. Which AWS construct is most relevant when the goal is ${k}?`, opts: ["Multiple Availability Zones", "Multiple AWS Regions", "Amazon CloudFront edge locations", "AWS Local Zones"], ans: "Multiple Availability Zones", next: "Multiple AWS Regions", win: "Using multiple AZs is the core high-availability pattern for regional failure isolation.", lose: "Multiple Regions can increase resilience, but AZs are the standard building block for within-Region fault tolerance." },
    { task: "3.2", q: (c, k) => `${c} wants DNS-based traffic routing with health checks and routing policies for failover. Which service is the best fit for ${k}?`, opts: ["Amazon Route 53", "Amazon CloudFront", "Elastic Load Balancing", "AWS Global Accelerator"], ans: "Amazon Route 53", next: "Amazon CloudFront", win: "Route 53 provides DNS, health checks, and routing policies for global and regional failover.", lose: "CloudFront and Global Accelerator improve delivery and ingress, but Route 53 is the DNS routing service." },
    { task: "3.3", q: (c, k) => `${c} runs stateless APIs with highly variable demand and wants to avoid server management. Product engineering requests ${k}. Which compute option is most suitable?`, opts: ["AWS Lambda", "AWS App Runner", "Amazon ECS on Fargate", "Amazon EC2 Auto Scaling"], ans: "AWS Lambda", next: "AWS App Runner", win: "Lambda eliminates server management and scales automatically for event-driven API patterns.", lose: "App Runner and Fargate reduce operational work, but Lambda is the most serverless fit for this API pattern." },
    { task: "3.3", q: (c, k) => `${c} needs containerized workloads without provisioning or patching cluster worker nodes. The platform team requires ${k}. Which service is best?`, opts: ["AWS Fargate", "Amazon ECS on EC2 instances", "Amazon EKS on managed node groups", "AWS App Runner"], ans: "AWS Fargate", next: "AWS App Runner", win: "Fargate provides serverless containers with no worker node management.", lose: "App Runner is close for web apps, but Fargate is the container service with direct task-level control." },
    { task: "3.4", q: (c, k) => `${c} needs a relational database with automatic backups, patching, and failover while minimizing database administration. The DBA team insists on ${k}. Which service should they choose?`, opts: ["Amazon RDS", "Amazon Aurora", "Amazon EC2 self-managed MySQL", "Amazon Redshift"], ans: "Amazon RDS", next: "Amazon Aurora", win: "RDS is a managed relational database service with built-in operational automation.", lose: "Aurora is another managed relational option, but the question is asking for the standard managed relational database service." },
    { task: "3.4", q: (c, k) => `${c} stores session state with millisecond latency requirements and needs an in-memory managed datastore. The workload demands ${k}. Which service is most appropriate?`, opts: ["Amazon ElastiCache", "Amazon MemoryDB for Redis", "Amazon DynamoDB Accelerator (DAX)", "Amazon Aurora"], ans: "Amazon ElastiCache", next: "Amazon MemoryDB for Redis", win: "ElastiCache is purpose-built for low-latency in-memory caching and session storage.", lose: "MemoryDB and DAX are both cache-style options, but ElastiCache is the canonical fit for session state." },
    { task: "3.4", q: (c, k) => `${c} needs virtually unlimited key-value scale with single-digit millisecond performance for high-traffic product catalog metadata. Which service is the best match for ${k}?`, opts: ["Amazon DynamoDB", "Amazon Aurora", "Amazon Keyspaces", "Amazon ElastiCache"], ans: "Amazon DynamoDB", next: "Amazon Aurora", win: "DynamoDB provides managed NoSQL key-value performance and scale for this access pattern.", lose: "Aurora and Keyspaces are both managed data services, but DynamoDB is the best fit for this key-value scale." },
    { task: "3.5", q: (c, k) => `${c} needs private network connectivity from on-premises data centers to AWS with consistent bandwidth and reduced internet dependency. Network leadership asks for ${k}. Which option is best?`, opts: ["AWS Direct Connect", "AWS Site-to-Site VPN", "AWS Transit Gateway", "AWS PrivateLink"], ans: "AWS Direct Connect", next: "AWS Site-to-Site VPN", win: "Direct Connect offers dedicated private connectivity with predictable performance characteristics.", lose: "VPN, Transit Gateway, and PrivateLink all help networking, but Direct Connect is the dedicated private link from on-premises." },
    { task: "3.5", q: (c, k) => `${c} needs to distribute incoming traffic across multiple application instances in multiple AZs with health checks. The solution must provide ${k}. Which service should be used?`, opts: ["Elastic Load Balancing", "Application Load Balancer", "Network Load Balancer", "Amazon Route 53"], ans: "Elastic Load Balancing", next: "Application Load Balancer", win: "ELB distributes traffic across healthy targets and supports high availability within Region architecture.", lose: "ALB and NLB are both load balancer types, but the family-level service is the best answer here." },
    { task: "3.6", q: (c, k) => `${c} needs object storage for static assets with 11 9s durability and web-scale access patterns. Which service best fits ${k}?`, opts: ["Amazon S3", "Amazon EBS", "Amazon EFS", "S3 Glacier Flexible Retrieval"], ans: "Amazon S3", next: "S3 Glacier Flexible Retrieval", win: "S3 is designed for durable, scalable object storage and static content use cases.", lose: "Glacier Flexible Retrieval is an archival storage class, not the primary object storage service." },
    { task: "3.6", q: (c, k) => `${c} needs block storage for a single EC2 database instance requiring low-latency persistent volumes. The team wants ${k}. Which storage option should they choose?`, opts: ["Amazon EBS", "Amazon EFS", "Amazon S3", "S3 Glacier Flexible Retrieval"], ans: "Amazon EBS", next: "Amazon EFS", win: "EBS provides persistent block storage directly attachable to EC2 instances.", lose: "EFS and S3 are storage services, but neither is the block volume best fit for a single EC2 database instance." },
    { task: "3.6", q: (c, k) => `${c} must archive compliance logs that are rarely accessed and can tolerate retrieval delay to minimize cost. Finance asks for ${k}. Which storage class should be used?`, opts: ["S3 Glacier Deep Archive", "S3 Glacier Flexible Retrieval", "S3 Standard-IA", "S3 Intelligent-Tiering"], ans: "S3 Glacier Deep Archive", next: "S3 Glacier Flexible Retrieval", win: "Deep Archive delivers the lowest archive cost for long-term rarely accessed data.", lose: "Glacier Flexible Retrieval and Intelligent-Tiering are both valid storage choices, but Deep Archive is the most cost-optimized archive class." },
    { task: "3.7", q: (c, k) => `${c} wants managed data warehousing for petabyte-scale SQL analytics over structured business data. Leadership requires ${k}. Which service should be chosen?`, opts: ["Amazon Redshift", "Amazon Athena", "Amazon Aurora", "Amazon EMR"], ans: "Amazon Redshift", next: "Amazon Athena", win: "Redshift is purpose-built for large-scale analytical warehousing workloads.", lose: "Athena, Aurora, and EMR are all analytics-adjacent, but Redshift is the warehouse service." },
    { task: "3.7", q: (c, k) => `${c} needs to query data directly in S3 using SQL without provisioning servers. Data engineering requests ${k}. Which service is best?`, opts: ["Amazon Athena", "Amazon Redshift", "Amazon EMR", "AWS Glue ETL jobs"], ans: "Amazon Athena", next: "Amazon Redshift", win: "Athena is serverless SQL query over S3 with no infrastructure to manage.", lose: "Redshift, EMR, and Glue are all data services, but Athena is the serverless SQL-on-S3 option." },
    { task: "3.7", q: (c, k) => `${c} needs dashboards for business users that can connect to AWS data sources with minimal BI infrastructure setup. Which service should they use for ${k}?`, opts: ["Amazon QuickSight", "Amazon Managed Grafana", "Amazon OpenSearch Dashboards", "Amazon CloudWatch dashboards"], ans: "Amazon QuickSight", next: "Amazon Managed Grafana", win: "QuickSight is managed BI focused on business analytics dashboards and sharing.", lose: "Grafana, OpenSearch Dashboards, and CloudWatch are all dashboard tools, but QuickSight is the BI service." },
    { task: "3.2", q: (c, k) => `${c} needs to accelerate global TCP/UDP application traffic to the nearest AWS edge and then route over the AWS backbone. The objective is ${k}. Which service should be selected?`, opts: ["AWS Global Accelerator", "Amazon Route 53 latency-based routing", "Amazon CloudFront", "AWS Network Load Balancer"], ans: "AWS Global Accelerator", next: "Amazon Route 53 latency-based routing", win: "Global Accelerator provides static anycast IPs and optimized network paths over AWS backbone.", lose: "Route 53, CloudFront, and NLB all help traffic flow, but Global Accelerator is the networking acceleration service." },
    { task: "3.5", q: (c, k) => `${c} must centrally connect dozens of VPCs and on-premises links while reducing mesh complexity. Network operations requires ${k}. Which service best fits?`, opts: ["AWS Transit Gateway", "AWS Site-to-Site VPN", "AWS PrivateLink", "VPC peering"], ans: "AWS Transit Gateway", next: "AWS Site-to-Site VPN", win: "Transit Gateway simplifies hub-and-spoke connectivity and scales better than full peering meshes.", lose: "VPN, PrivateLink, and VPC peering can connect networks, but Transit Gateway is built for this scale." },
    { task: "3.1", q: (c, k) => `${c} wants a fully managed CI/CD pipeline service integrated with common AWS build and deploy tools. The software team asks for ${k}. Which service should they pick?`, opts: ["AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy", "AWS CodeCommit"], ans: "AWS CodePipeline", next: "AWS CodeBuild", win: "CodePipeline provides native managed pipeline orchestration for build/test/deploy stages.", lose: "CodeBuild, CodeDeploy, and CodeCommit are all parts of the delivery toolchain, but CodePipeline orchestrates the workflow." }
  ];

  function rotate(opts, n) {
    const len = opts.length;
    const s = n % len;
    return opts.map((_, i) => opts[(i + s) % len]);
  }

  const auditSignals = [
    "lowest operational overhead",
    "most cost-effective design",
    "maximum availability",
    "lowest latency for global users",
    "least maintenance effort"
  ];

  const out = [];
  let idx = 0;
  templates.forEach((t) => {
    for (let i = 0; i < 15; i++) {
      const c = companies[i % companies.length];
      const k = constraints[(i + idx) % constraints.length];
      let auditSignal = auditSignals[(i + idx) % auditSignals.length];
      if (auditSignal === k) {
        auditSignal = auditSignals[(i + idx + 1) % auditSignals.length];
      }
      const opts = rotate(t.opts, i);
      const ending = i % 2 === 0 ? "Which service best fits?" : "Which AWS service should they choose?";
      out.push({
        domain: 3,
        task: t.task,
        q: `${t.q(c, k)} They also need ${auditSignal}. ${ending}`,
        opts: opts,
        ans: opts.indexOf(t.ans),
        explain: `${t.win} A close alternative is ${t.next}, but ${t.lose}`
      });
      idx++;
    }
  });

  return out;
}

const DOMAIN3_DISTRACTOR_QUESTIONS = generateDomain3DistractorQuestions();
