function generateDomain3DistractorQuestions() {
  const companies = [
    "A digital media startup",
    "A global ecommerce platform",
    "A healthcare analytics company",
    "A financial services provider",
    "A game publishing company",
    "A logistics network",
    "A public sector portal",
    "An IoT platform vendor",
    "A SaaS collaboration company",
    "A travel booking platform"
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
    "highest fault tolerance"
  ];

  const templates = [
    { task: "3.1", q: (c, k) => `${c} wants repeatable infrastructure provisioning across environments with version control and review workflows. Engineering demands ${k}. Which service is best?`, opts: ["AWS CloudFormation", "Manual console deployment", "EC2 user data scripts only", "AWS Trusted Advisor"], ans: "AWS CloudFormation", next: "EC2 user data scripts only", win: "CloudFormation provides infrastructure as code with repeatability and change tracking.", lose: "User data helps bootstrap instances but is not full-stack infrastructure orchestration." },
    { task: "3.1", q: (c, k) => `${c} needs an easy way to deploy web apps without managing underlying infrastructure details like load balancing and auto scaling setup manually. The requirement is ${k}. Which service fits best?`, opts: ["AWS Elastic Beanstalk", "Amazon EC2 Auto Scaling only", "AWS CloudTrail", "Amazon Route 53"], ans: "AWS Elastic Beanstalk", next: "Amazon EC2 Auto Scaling only", win: "Elastic Beanstalk provides managed application deployment workflows and environment orchestration.", lose: "Auto Scaling alone handles capacity but not full application platform lifecycle management." },
    { task: "3.2", q: (c, k) => `${c} requires fault tolerance for a production application by isolating infrastructure failure domains within one Region. Architecture leadership prioritizes ${k}. Which AWS construct is most relevant?`, opts: ["Multiple Availability Zones", "Multiple edge locations", "Multiple Local Zones only", "One large VPC"], ans: "Multiple Availability Zones", next: "Multiple edge locations", win: "Using multiple AZs is the core high-availability pattern for regional failure isolation.", lose: "Edge locations improve content delivery but are not primary compute/database fault domains." },
    { task: "3.2", q: (c, k) => `${c} wants DNS-based traffic routing with health checks and routing policies for failover. The team needs ${k}. Which service should they use?`, opts: ["Amazon Route 53", "Amazon CloudFront only", "AWS Direct Connect", "Elastic Load Balancing only"], ans: "Amazon Route 53", next: "Elastic Load Balancing only", win: "Route 53 provides DNS, health checks, and routing policies for global and regional failover.", lose: "ELB balances within targets but does not replace authoritative DNS routing policy control." },
    { task: "3.3", q: (c, k) => `${c} runs stateless APIs with highly variable demand and wants to avoid server management. Product engineering requests ${k}. Which compute option is most suitable?`, opts: ["AWS Lambda", "Amazon EC2 On-Demand instances", "Amazon ECS on EC2", "Amazon EKS self-managed nodes"], ans: "AWS Lambda", next: "Amazon ECS on EC2", win: "Lambda eliminates server management and scales automatically for event-driven API patterns.", lose: "ECS on EC2 is valid but still requires host capacity and lifecycle management." },
    { task: "3.3", q: (c, k) => `${c} needs containerized workloads without provisioning or patching cluster worker nodes. The platform team requires ${k}. Which service is best?`, opts: ["AWS Fargate", "Amazon ECS on EC2 instances", "Amazon EKS managed node groups", "AWS Batch on EC2"], ans: "AWS Fargate", next: "Amazon EKS managed node groups", win: "Fargate provides serverless containers with no worker node management.", lose: "EKS managed nodes simplify operations but still involve node lifecycle considerations." },
    { task: "3.4", q: (c, k) => `${c} needs a relational database with automatic backups, patching, and failover while minimizing database administration. The DBA team insists on ${k}. Which service should they choose?`, opts: ["Amazon RDS", "Amazon EC2 self-managed MySQL", "Amazon DynamoDB", "Amazon Redshift"], ans: "Amazon RDS", next: "Amazon EC2 self-managed MySQL", win: "RDS is a managed relational database service with built-in operational automation.", lose: "Self-managed databases on EC2 can work but increase operational overhead significantly." },
    { task: "3.4", q: (c, k) => `${c} stores session state with millisecond latency requirements and needs an in-memory managed datastore. The workload demands ${k}. Which service is most appropriate?`, opts: ["Amazon ElastiCache", "Amazon Aurora", "Amazon S3 Standard", "Amazon OpenSearch Service"], ans: "Amazon ElastiCache", next: "Amazon Aurora", win: "ElastiCache is purpose-built for low-latency in-memory caching and session storage.", lose: "Aurora is relational and fast, but not designed as a primary in-memory cache layer." },
    { task: "3.4", q: (c, k) => `${c} needs virtually unlimited key-value scale with single-digit millisecond performance for high-traffic product catalog metadata. The requirement is ${k}. Which service should be selected?`, opts: ["Amazon DynamoDB", "Amazon RDS for PostgreSQL", "Amazon EFS", "Amazon Athena"], ans: "Amazon DynamoDB", next: "Amazon RDS for PostgreSQL", win: "DynamoDB provides managed NoSQL key-value performance and scale for this access pattern.", lose: "RDS can serve catalogs but scaling and operational patterns are less aligned for this workload profile." },
    { task: "3.5", q: (c, k) => `${c} needs private network connectivity from on-premises data centers to AWS with consistent bandwidth and reduced internet dependency. Network leadership asks for ${k}. Which option is best?`, opts: ["AWS Direct Connect", "AWS Site-to-Site VPN only", "Internet Gateway", "VPC Peering"], ans: "AWS Direct Connect", next: "AWS Site-to-Site VPN only", win: "Direct Connect offers dedicated private connectivity with predictable performance characteristics.", lose: "Site-to-Site VPN is valid and quick but uses internet paths and may have less consistent performance." },
    { task: "3.5", q: (c, k) => `${c} needs to distribute incoming traffic across multiple application instances in multiple AZs with health checks. The solution must provide ${k}. Which service should be used?`, opts: ["Elastic Load Balancing", "Amazon Route 53 only", "AWS Global Accelerator only", "AWS Transit Gateway"], ans: "Elastic Load Balancing", next: "AWS Global Accelerator only", win: "ELB distributes traffic across healthy targets and supports high availability within Region architecture.", lose: "Global Accelerator improves global ingress but does not replace internal target-level load balancing behavior." },
    { task: "3.6", q: (c, k) => `${c} needs object storage for static assets with 11 9s durability and web-scale access patterns. The architecture goal is ${k}. Which service is best?`, opts: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon FSx for Windows File Server"], ans: "Amazon S3", next: "Amazon EFS", win: "S3 is designed for durable, scalable object storage and static content use cases.", lose: "EFS is shared file storage, not object storage optimized for internet-scale static asset distribution." },
    { task: "3.6", q: (c, k) => `${c} needs block storage for a single EC2 database instance requiring low-latency persistent volumes. The team wants ${k}. Which storage option should they choose?`, opts: ["Amazon EBS", "Amazon S3 Glacier Flexible Retrieval", "Amazon EFS", "Amazon S3"], ans: "Amazon EBS", next: "Amazon EFS", win: "EBS provides persistent block storage directly attachable to EC2 instances.", lose: "EFS is file storage over NFS and is not the closest fit for single-instance block volume requirements." },
    { task: "3.6", q: (c, k) => `${c} must archive compliance logs that are rarely accessed and can tolerate retrieval delay to minimize cost. Finance asks for ${k}. Which storage class should be used?`, opts: ["S3 Glacier Deep Archive", "S3 Standard", "S3 Intelligent-Tiering frequent access", "Amazon EFS Infrequent Access"], ans: "S3 Glacier Deep Archive", next: "S3 Intelligent-Tiering frequent access", win: "Deep Archive delivers the lowest archive cost for long-term rarely accessed data.", lose: "Intelligent-Tiering helps unknown access patterns but is typically costlier than Deep Archive for known cold archives." },
    { task: "3.7", q: (c, k) => `${c} wants managed data warehousing for petabyte-scale SQL analytics over structured business data. Leadership requires ${k}. Which service should be chosen?`, opts: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon ElastiCache"], ans: "Amazon Redshift", next: "Amazon RDS", win: "Redshift is purpose-built for large-scale analytical warehousing workloads.", lose: "RDS is optimized for transactional workloads, not large-scale warehouse analytics." },
    { task: "3.7", q: (c, k) => `${c} needs to query data directly in S3 using SQL without provisioning servers. Data engineering requests ${k}. Which service is best?`, opts: ["Amazon Athena", "Amazon EMR self-managed clusters", "Amazon EC2 with PostgreSQL", "AWS Glue Data Catalog only"], ans: "Amazon Athena", next: "Amazon EMR self-managed clusters", win: "Athena is serverless SQL query over S3 with no infrastructure to manage.", lose: "EMR can query data but requires cluster lifecycle and operational management." },
    { task: "3.7", q: (c, k) => `${c} needs dashboards for business users that can connect to AWS data sources with minimal BI infrastructure setup. The requirement is ${k}. Which service should they use?`, opts: ["Amazon QuickSight", "Amazon Managed Grafana", "Amazon CloudWatch dashboards", "AWS Glue Studio"], ans: "Amazon QuickSight", next: "Amazon Managed Grafana", win: "QuickSight is managed BI focused on business analytics dashboards and sharing.", lose: "Managed Grafana is strong for observability, but not the primary business BI dashboard service." },
    { task: "3.2", q: (c, k) => `${c} needs to accelerate global TCP/UDP application traffic to the nearest AWS edge and then route over the AWS backbone. The objective is ${k}. Which service should be selected?`, opts: ["AWS Global Accelerator", "Amazon Route 53 latency-based routing only", "AWS WAF", "Amazon CloudFront signed URLs"], ans: "AWS Global Accelerator", next: "Amazon Route 53 latency-based routing only", win: "Global Accelerator provides static anycast IPs and optimized network paths over AWS backbone.", lose: "Route 53 can route by latency but does not provide TCP acceleration and anycast ingress behavior." },
    { task: "3.5", q: (c, k) => `${c} must centrally connect dozens of VPCs and on-premises links while reducing mesh complexity. Network operations requires ${k}. Which service best fits?`, opts: ["AWS Transit Gateway", "Individual VPC peering connections", "AWS PrivateLink for all VPC routing", "Single NAT Gateway"], ans: "AWS Transit Gateway", next: "Individual VPC peering connections", win: "Transit Gateway simplifies hub-and-spoke connectivity and scales better than full peering meshes.", lose: "VPC peering works for smaller topologies but becomes operationally complex at scale." },
    { task: "3.1", q: (c, k) => `${c} wants a fully managed CI/CD pipeline service integrated with common AWS build and deploy tools. The software team asks for ${k}. Which service should they pick?`, opts: ["AWS CodePipeline", "AWS CloudTrail", "Amazon EventBridge only", "AWS Config"], ans: "AWS CodePipeline", next: "Amazon EventBridge only", win: "CodePipeline provides native managed pipeline orchestration for build/test/deploy stages.", lose: "EventBridge supports event routing but does not by itself provide complete CI/CD pipeline management." }
  ];

  function rotate(opts, n) {
    const len = opts.length;
    const s = n % len;
    return opts.map((_, i) => opts[(i + s) % len]);
  }

  const out = [];
  let idx = 0;
  templates.forEach((t) => {
    for (let i = 0; i < 10; i++) {
      const c = companies[i % companies.length];
      const k = constraints[(i + idx) % constraints.length];
      const opts = rotate(t.opts, i);
      out.push({
        domain: 3,
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

const DOMAIN3_DISTRACTOR_QUESTIONS = generateDomain3DistractorQuestions();
