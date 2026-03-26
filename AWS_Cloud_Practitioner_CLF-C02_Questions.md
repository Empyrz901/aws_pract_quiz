# AWS Certified Cloud Practitioner (CLF-C02) - Practice Questions

> Based on the official [CLF-C02 Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)
> - **65 questions** (50 scored + 15 unscored), **90 minutes**, passing score **700/1000**

---

## Domain 1: Cloud Concepts (24% of exam)

### 1.1 Benefits of the AWS Cloud

**Q1.** Which of the following is a benefit of the AWS global infrastructure?
- A) Reduced need for encryption
- B) Speed of deployment and global reach
- C) Elimination of all operational costs
- D) Automatic code deployment

**Answer:** B — AWS's global infrastructure (Regions, AZs, edge locations) enables fast deployment worldwide.

---

**Q2.** A company wants to avoid large upfront hardware purchases and instead pay only for what they use. Which cloud benefit does this describe?
- A) Elasticity
- B) High availability
- C) Variable expense instead of capital expense
- D) Fault tolerance

**Answer:** C — The cloud shifts from capital expense (CapEx) to variable/operational expense (OpEx), paying only for consumed resources.

---

**Q3.** What does "elasticity" mean in the context of AWS?
- A) The ability to acquire resources when needed and release them when no longer needed
- B) The ability to withstand component failures
- C) The ability to run applications in multiple Regions
- D) The ability to use managed services

**Answer:** A — Elasticity is the capacity to scale resources up and down dynamically based on demand.

---

**Q4.** Which advantage of cloud computing allows a company to deploy applications in multiple AWS Regions around the world with just a few clicks?
- A) Economy of scale
- B) Agility
- C) High availability
- D) Go global in minutes

**Answer:** D — "Go global in minutes" is one of the six advantages of cloud computing defined by AWS.

---

### 1.2 Design Principles (Well-Architected Framework)

**Q5.** How many pillars does the AWS Well-Architected Framework have?
- A) 4
- B) 5
- C) 6
- D) 7

**Answer:** C — The six pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.

---

**Q6.** Which pillar of the AWS Well-Architected Framework focuses on minimizing environmental impacts of running cloud workloads?
- A) Cost Optimization
- B) Operational Excellence
- C) Sustainability
- D) Reliability

**Answer:** C — The Sustainability pillar focuses on reducing energy consumption and environmental impact.

---

**Q7.** Which Well-Architected pillar includes the ability to recover from infrastructure or service disruptions?
- A) Performance Efficiency
- B) Security
- C) Operational Excellence
- D) Reliability

**Answer:** D — Reliability includes the ability to recover from failures and dynamically meet demand.

---

### 1.3 Migration Strategies

**Q8.** An organization is planning to move large volumes of on-premises data to AWS but has limited network bandwidth. Which service should they use?
- A) AWS Direct Connect
- B) AWS Snowball
- C) Amazon Kinesis
- D) AWS VPN

**Answer:** B — AWS Snowball is a physical data transport solution for migrating large datasets when network transfer is impractical.

---

**Q9.** Which framework helps organizations plan and execute their migration to the AWS Cloud by identifying business and technology capabilities?
- A) AWS Well-Architected Framework
- B) AWS Cloud Adoption Framework (AWS CAF)
- C) AWS Trusted Advisor
- D) AWS Migration Hub

**Answer:** B — AWS CAF provides guidance across six perspectives (Business, People, Governance, Platform, Security, Operations) for cloud adoption.

---

**Q10.** What are the benefits of cloud adoption according to the AWS CAF? (Choose TWO)
- A) Reduced business risk
- B) Increased capital expenditure
- C) Increased operational efficiency
- D) Elimination of all security responsibilities
- E) Reduced need for compliance

**Answer:** A, C — AWS CAF highlights reduced business risk, increased revenue, and improved operational efficiency as key benefits.

---

### 1.4 Cloud Economics

**Q11.** What is the concept of "rightsizing" in AWS?
- A) Selecting the most expensive instance type for guaranteed performance
- B) Matching instance types and sizes to workload requirements at the lowest possible cost
- C) Buying the largest Reserved Instance available
- D) Using only Spot Instances for all workloads

**Answer:** B — Rightsizing means analyzing workloads and selecting the optimal instance type/size to avoid over- or under-provisioning.

---

**Q12.** A company is comparing the cost of running servers on-premises versus in the cloud. Which costs should be included in the on-premises estimate? (Choose TWO)
- A) Data transfer charges
- B) Physical facility maintenance
- C) Server hardware and power costs
- D) AWS Support plan costs
- E) Amazon CloudWatch charges

**Answer:** B, C — On-premises costs include hardware, power, cooling, physical space, and staff to maintain infrastructure.

---

**Q13.** Which statement best describes the economies of scale advantage of cloud computing?
- A) Customers always pay the same price regardless of usage
- B) AWS can achieve lower variable costs than individual companies because of aggregate usage
- C) Cloud resources are unlimited and free
- D) Economies of scale only apply to storage

**Answer:** B — AWS aggregates usage from hundreds of thousands of customers, achieving higher economies of scale and passing savings on.

---

---

## Domain 2: Security and Compliance (30% of exam)

### 2.1 Shared Responsibility Model

**Q14.** Under the AWS shared responsibility model, which of the following is the customer's responsibility?
- A) Patching the hypervisor
- B) Physical security of data centers
- C) Configuring security groups and NACLs
- D) Maintaining the network infrastructure

**Answer:** C — Customers are responsible for security "in" the cloud: data, identity management, firewall configuration, encryption.

---

**Q15.** Under the shared responsibility model, who is responsible for patching the operating system on Amazon EC2 instances?
- A) AWS
- B) The customer
- C) Both AWS and the customer equally
- D) Neither — it is automatic

**Answer:** B — For EC2, the customer manages the guest OS, including patching and updates.

---

**Q16.** For which AWS service does the responsibility for patching the operating system shift to AWS?
- A) Amazon EC2
- B) Amazon RDS
- C) Self-managed databases on EC2
- D) Amazon WorkSpaces (BYOL)

**Answer:** B — With managed services like Amazon RDS, AWS manages the underlying OS and database engine patching.

---

**Q17.** Which of the following is ALWAYS an AWS responsibility, regardless of the service used?
- A) Data encryption configuration
- B) IAM policy management
- C) Physical security of data centers
- D) Application-level firewall rules

**Answer:** C — AWS is always responsible for the security "of" the cloud: physical infrastructure, hardware, networking, and facilities.

---

### 2.2 Security, Governance, and Compliance

**Q18.** Which AWS service provides access to AWS compliance reports and agreements (such as SOC and PCI)?
- A) AWS Config
- B) AWS Artifact
- C) Amazon Inspector
- D) AWS CloudTrail

**Answer:** B — AWS Artifact is a self-service portal for on-demand access to AWS compliance documentation.

---

**Q19.** Which AWS service continuously monitors API calls and user activity for auditing purposes?
- A) Amazon CloudWatch
- B) AWS CloudTrail
- C) AWS Config
- D) Amazon GuardDuty

**Answer:** B — AWS CloudTrail records API calls made on your account for governance, compliance, and operational auditing.

---

**Q20.** A company must ensure that data is encrypted both in transit and at rest. Which options does AWS provide? (Choose TWO)
- A) SSL/TLS certificates for data in transit
- B) AWS KMS for encryption at rest
- C) AWS Artifact for encryption
- D) Amazon Route 53 for encryption
- E) AWS CloudFormation for encryption

**Answer:** A, B — AWS supports SSL/TLS for transit encryption and AWS KMS (Key Management Service) for managing encryption at rest.

---

**Q21.** Which service provides automated security assessments to help improve the security and compliance of applications on AWS?
- A) AWS Trusted Advisor
- B) Amazon Inspector
- C) AWS Artifact
- D) AWS Shield

**Answer:** B — Amazon Inspector automatically assesses applications for vulnerabilities and deviations from security best practices.

---

**Q22.** Which AWS service provides a centralized view of security alerts and compliance status across multiple AWS accounts?
- A) Amazon GuardDuty
- B) AWS Security Hub
- C) AWS CloudTrail
- D) Amazon Macie

**Answer:** B — AWS Security Hub aggregates, organizes, and prioritizes security findings from multiple AWS services.

---

### 2.3 Access Management

**Q23.** What should be done to protect the AWS root user account? (Choose TWO)
- A) Use it for daily administrative tasks
- B) Enable multi-factor authentication (MFA)
- C) Share root credentials with the team
- D) Delete all root access keys
- E) Use root for deploying applications

**Answer:** B, D — Best practices include enabling MFA on root, deleting root access keys, and not using root for everyday tasks.

---

**Q24.** Which AWS service allows centralized management of user access to multiple AWS accounts and business applications?
- A) AWS IAM
- B) AWS IAM Identity Center (AWS Single Sign-On)
- C) Amazon Cognito
- D) AWS Directory Service

**Answer:** B — IAM Identity Center provides single sign-on access to multiple AWS accounts and applications.

---

**Q25.** What is the principle of least privilege?
- A) Granting all users full administrative access
- B) Granting users only the permissions they need to perform their job
- C) Denying all access by default and never granting permissions
- D) Using the root account for all operations

**Answer:** B — Least privilege means granting the minimum permissions necessary for a user to complete their tasks.

---

**Q26.** Which authentication method adds an extra layer of protection on top of a username and password?
- A) Access keys
- B) SSH key pairs
- C) Multi-factor authentication (MFA)
- D) Security groups

**Answer:** C — MFA requires a second form of authentication (e.g., a device-generated code) in addition to a password.

---

**Q27.** Where should an application running on Amazon EC2 store database credentials securely?
- A) Hard-coded in the application source code
- B) In an environment variable on the instance
- C) In AWS Secrets Manager
- D) In a public S3 bucket

**Answer:** C — AWS Secrets Manager securely stores, rotates, and retrieves credentials and other secrets.

---

### 2.4 Security Services and Resources

**Q28.** Which AWS service provides managed DDoS protection?
- A) AWS WAF
- B) AWS Shield
- C) Amazon GuardDuty
- D) AWS Firewall Manager

**Answer:** B — AWS Shield (Standard and Advanced) provides DDoS protection. Shield Standard is automatically enabled at no cost.

---

**Q29.** Which service acts as a web application firewall to filter malicious web traffic?
- A) AWS Shield
- B) Security Groups
- C) AWS WAF
- D) Network ACLs

**Answer:** C — AWS WAF lets you create rules to filter web traffic and protect against common exploits like SQL injection and XSS.

---

**Q30.** Which AWS service uses machine learning to detect threats such as unusual API calls or potentially compromised instances?
- A) AWS Config
- B) Amazon GuardDuty
- C) AWS CloudTrail
- D) Amazon Inspector

**Answer:** B — Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and anomalous behavior.

---

**Q31.** Which AWS tool provides best-practice recommendations across categories including security?
- A) AWS CloudTrail
- B) AWS Trusted Advisor
- C) AWS Config
- D) Amazon CloudWatch

**Answer:** B — AWS Trusted Advisor inspects your environment and provides recommendations on security, cost, performance, fault tolerance, and service limits.

---

---

## Domain 3: Cloud Technology and Services (34% of exam)

### 3.1 Deploying and Operating

**Q32.** Which are valid ways to access AWS services? (Choose THREE)
- A) AWS Management Console
- B) AWS CLI
- C) AWS SDKs
- D) SSH directly to AWS data centers
- E) Physical access to servers

**Answer:** A, B, C — AWS services can be accessed via the Console (web), CLI (command line), and SDKs (programmatic).

---

**Q33.** Which AWS service enables you to define infrastructure as code using templates?
- A) AWS CodePipeline
- B) AWS CloudFormation
- C) AWS CodeBuild
- D) AWS Config

**Answer:** B — AWS CloudFormation lets you model and provision AWS resources using JSON or YAML templates (Infrastructure as Code).

---

**Q34.** Which cloud deployment model uses both on-premises infrastructure and AWS Cloud resources?
- A) Cloud-native
- B) On-premises
- C) Hybrid
- D) Multi-cloud

**Answer:** C — A hybrid deployment connects on-premises infrastructure to AWS Cloud resources.

---

### 3.2 AWS Global Infrastructure

**Q35.** What is the relationship between AWS Regions and Availability Zones?
- A) Each Availability Zone contains multiple Regions
- B) Each Region contains two or more Availability Zones
- C) Regions and Availability Zones are the same thing
- D) Availability Zones are only available in the US

**Answer:** B — Each AWS Region consists of multiple isolated Availability Zones connected by low-latency networking.

---

**Q36.** Which infrastructure component is specifically designed to deliver content to end users with low latency?
- A) Availability Zones
- B) AWS Regions
- C) Edge locations (Amazon CloudFront)
- D) AWS Outposts

**Answer:** C — Edge locations are used by Amazon CloudFront to cache content closer to end users for low-latency delivery.

---

**Q37.** A company needs to ensure that the failure of one data center does not take down their application. What should they do?
- A) Use a single large EC2 instance
- B) Deploy resources across multiple Availability Zones
- C) Use only Spot Instances
- D) Deploy to a single Availability Zone with backups

**Answer:** B — Deploying across multiple AZs provides high availability since AZs are physically separate and do not share single points of failure.

---

**Q38.** When should a company use multiple AWS Regions? (Choose TWO)
- A) To reduce latency for global users
- B) To comply with data sovereignty requirements
- C) To use a different programming language per Region
- D) To increase the number of Availability Zones in a single Region
- E) To avoid using IAM

**Answer:** A, B — Multiple Regions are used for disaster recovery, low latency for global users, business continuity, and data residency compliance.

---

### 3.3 Compute Services

**Q39.** Which EC2 instance type is best suited for a machine learning training workload that requires high CPU performance?
- A) Storage optimized
- B) Memory optimized
- C) Compute optimized
- D) General purpose

**Answer:** C — Compute optimized instances (C-family) are ideal for CPU-intensive workloads like ML training, batch processing, and HPC.

---

**Q40.** Which AWS service allows you to run containers without managing servers or clusters?
- A) Amazon EC2
- B) AWS Lambda
- C) AWS Fargate
- D) Amazon Lightsail

**Answer:** C — AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS.

---

**Q41.** Which AWS service runs code in response to events without provisioning or managing servers?
- A) Amazon EC2
- B) AWS Fargate
- C) AWS Lambda
- D) Amazon ECS

**Answer:** C — AWS Lambda is a serverless compute service that runs code in response to triggers and automatically manages the underlying resources.

---

**Q42.** Which feature automatically adjusts the number of EC2 instances based on demand?
- A) Elastic Load Balancing
- B) Amazon EC2 Auto Scaling
- C) AWS CloudFormation
- D) Amazon CloudFront

**Answer:** B — EC2 Auto Scaling automatically adds or removes instances based on defined conditions, providing elasticity.

---

**Q43.** What is the primary purpose of Elastic Load Balancing (ELB)?
- A) To store data across multiple Availability Zones
- B) To distribute incoming traffic across multiple targets
- C) To manage DNS records
- D) To encrypt data in transit

**Answer:** B — ELB distributes incoming application traffic across multiple targets (EC2 instances, containers, IPs) for availability and fault tolerance.

---

### 3.4 Database Services

**Q44.** Which AWS database service is a fully managed relational database compatible with MySQL and PostgreSQL, offering up to 5x the performance of standard MySQL?
- A) Amazon RDS
- B) Amazon DynamoDB
- C) Amazon Aurora
- D) Amazon Redshift

**Answer:** C — Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database with enhanced performance and availability.

---

**Q45.** Which AWS service is a fully managed NoSQL key-value and document database?
- A) Amazon RDS
- B) Amazon Aurora
- C) Amazon DynamoDB
- D) Amazon Redshift

**Answer:** C — Amazon DynamoDB is a serverless NoSQL database that delivers single-digit millisecond performance at any scale.

---

**Q46.** A company needs an in-memory caching solution to improve read performance for their database. Which service should they use?
- A) Amazon RDS
- B) Amazon ElastiCache
- C) Amazon S3
- D) Amazon DynamoDB

**Answer:** B — Amazon ElastiCache provides in-memory caching (Redis or Memcached) for microsecond response times.

---

**Q47.** Which service helps migrate databases from on-premises to AWS with minimal downtime?
- A) AWS Snowball
- B) AWS Database Migration Service (AWS DMS)
- C) AWS DataSync
- D) Amazon Kinesis

**Answer:** B — AWS DMS helps migrate databases to AWS quickly and securely while keeping the source database operational during migration.

---

### 3.5 Network Services

**Q48.** What is an Amazon VPC?
- A) A virtual private server
- B) A logically isolated section of the AWS Cloud where you launch resources
- C) A type of EC2 instance
- D) A DNS management service

**Answer:** B — Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated network within AWS.

---

**Q49.** Which VPC component acts as a stateless firewall at the subnet level?
- A) Security group
- B) Internet gateway
- C) Network ACL (Access Control List)
- D) Route table

**Answer:** C — Network ACLs are stateless firewalls that control traffic at the subnet level, evaluating rules in order.

---

**Q50.** Which VPC component acts as a stateful firewall at the instance level?
- A) Network ACL
- B) Security group
- C) NAT gateway
- D) Internet gateway

**Answer:** B — Security groups are stateful firewalls that control inbound and outbound traffic at the instance (ENI) level.

---

**Q51.** Which service provides a dedicated private connection from an on-premises data center to AWS?
- A) AWS VPN
- B) AWS Direct Connect
- C) Amazon CloudFront
- D) AWS Transit Gateway

**Answer:** B — AWS Direct Connect establishes a dedicated, private network connection from your premises to AWS, bypassing the public internet.

---

**Q52.** Which AWS service provides DNS (Domain Name System) and domain registration?
- A) Amazon CloudFront
- B) Amazon Route 53
- C) Elastic Load Balancing
- D) AWS Global Accelerator

**Answer:** B — Amazon Route 53 is a scalable DNS web service for domain registration, DNS routing, and health checking.

---

### 3.6 Storage Services

**Q53.** Which Amazon S3 storage class is the most cost-effective for data that is rarely accessed and can tolerate retrieval times of 12+ hours?
- A) S3 Standard
- B) S3 Intelligent-Tiering
- C) S3 Glacier Deep Archive
- D) S3 One Zone-IA

**Answer:** C — S3 Glacier Deep Archive is the lowest-cost storage class, designed for long-term retention with retrieval times of 12+ hours.

---

**Q54.** Which storage service provides block-level storage volumes for use with EC2 instances?
- A) Amazon S3
- B) Amazon EFS
- C) Amazon EBS
- D) AWS Storage Gateway

**Answer:** C — Amazon Elastic Block Store (EBS) provides persistent block storage volumes for EC2 instances.

---

**Q55.** Which storage service provides a shared file system that can be accessed by multiple EC2 instances simultaneously?
- A) Amazon EBS
- B) Amazon S3
- C) Amazon EFS
- D) Instance store

**Answer:** C — Amazon Elastic File System (EFS) is a scalable, fully managed NFS file system for use with AWS services and on-premises resources.

---

**Q56.** What happens to data stored on an EC2 instance store when the instance is stopped or terminated?
- A) Data is preserved indefinitely
- B) Data is automatically backed up to S3
- C) Data is lost (ephemeral storage)
- D) Data is moved to EBS

**Answer:** C — Instance store is ephemeral; data is lost when the instance is stopped, terminated, or fails.

---

**Q57.** Which service provides a centralized place to manage backups across AWS services?
- A) Amazon S3 Lifecycle policies
- B) AWS Backup
- C) AWS Storage Gateway
- D) Amazon EBS Snapshots only

**Answer:** B — AWS Backup is a fully managed service to centralize and automate data protection across AWS services.

---

### 3.7 AI/ML and Analytics

**Q58.** Which AWS service can be used to build, train, and deploy machine learning models?
- A) Amazon Lex
- B) Amazon SageMaker AI
- C) Amazon Rekognition
- D) Amazon Comprehend

**Answer:** B — Amazon SageMaker AI provides a fully managed environment for building, training, and deploying ML models.

---

**Q59.** Which AWS service allows you to run SQL queries directly against data stored in Amazon S3?
- A) Amazon RDS
- B) Amazon Redshift
- C) Amazon Athena
- D) Amazon DynamoDB

**Answer:** C — Amazon Athena is a serverless query service that uses standard SQL to analyze data directly in Amazon S3.

---

**Q60.** Which service is used to build conversational chatbots?
- A) Amazon Polly
- B) Amazon Lex
- C) Amazon Transcribe
- D) Amazon Kendra

**Answer:** B — Amazon Lex provides the technology to build conversational interfaces (chatbots) using voice and text.

---

**Q61.** Which AWS service is a fully managed ETL (extract, transform, load) service for analytics?
- A) Amazon Athena
- B) AWS Glue
- C) Amazon Kinesis
- D) Amazon QuickSight

**Answer:** B — AWS Glue is a serverless data integration service for discovering, preparing, and combining data for analytics and ML.

---

### 3.8 Other In-Scope Services

**Q62.** Which AWS service is used to decouple application components by sending messages between them via a queue?
- A) Amazon SNS
- B) Amazon SQS
- C) Amazon EventBridge
- D) AWS Step Functions

**Answer:** B — Amazon Simple Queue Service (SQS) is a fully managed message queuing service for decoupling microservices.

---

**Q63.** Which service sends push notifications to subscribers via SMS, email, or HTTP endpoints?
- A) Amazon SQS
- B) Amazon SES
- C) Amazon SNS
- D) Amazon EventBridge

**Answer:** C — Amazon Simple Notification Service (SNS) is a pub/sub messaging service for sending notifications to subscribers.

---

**Q64.** Which AWS service provides a cloud-based contact center?
- A) Amazon WorkSpaces
- B) Amazon Connect
- C) Amazon Chime
- D) Amazon SES

**Answer:** B — Amazon Connect is an omnichannel cloud contact center service.

---

**Q65.** Which service provides virtual cloud desktops for end users?
- A) Amazon AppStream 2.0
- B) Amazon WorkSpaces
- C) AWS Cloud9
- D) Amazon Lightsail

**Answer:** B — Amazon WorkSpaces is a managed Desktop-as-a-Service (DaaS) for provisioning virtual cloud desktops.

---

---

## Domain 4: Billing, Pricing, and Support (12% of exam)

### 4.1 Pricing Models

**Q66.** Which EC2 pricing option provides the largest discount (up to 90%) but can be interrupted by AWS with a 2-minute notice?
- A) On-Demand Instances
- B) Reserved Instances
- C) Spot Instances
- D) Dedicated Hosts

**Answer:** C — Spot Instances offer steep discounts for fault-tolerant, flexible workloads but can be reclaimed by AWS when capacity is needed.

---

**Q67.** A company has a steady-state workload running 24/7 for the next 3 years. Which pricing model offers the best cost savings?
- A) On-Demand Instances
- B) Spot Instances
- C) Reserved Instances (3-year term)
- D) Dedicated Instances

**Answer:** C — Reserved Instances provide significant savings (up to 72%) over On-Demand for predictable, long-running workloads.

---

**Q68.** Which pricing model offers flexibility across EC2, Lambda, and Fargate with a commitment to a consistent amount of usage ($/hour)?
- A) Reserved Instances
- B) Spot Instances
- C) AWS Savings Plans
- D) On-Demand Instances

**Answer:** C — Savings Plans offer lower prices in exchange for committing to a consistent usage amount, with flexibility across services and instance types.

---

**Q69.** Which of the following is generally free when transferring data in AWS?
- A) Data transfer out to the internet
- B) Data transfer between Regions
- C) Data transfer into AWS from the internet (inbound)
- D) Data transfer out from Amazon S3

**Answer:** C — Inbound data transfer from the internet to AWS is generally free. Outbound transfers incur charges.

---

**Q70.** Which EC2 option provides a physical server dedicated entirely to a single customer's use?
- A) Reserved Instances
- B) Spot Instances
- C) Dedicated Hosts
- D) On-Demand Instances

**Answer:** C — Dedicated Hosts provide physical servers for your exclusive use, useful for compliance or server-bound software licensing.

---

### 4.2 Billing, Budget, and Cost Management

**Q71.** Which AWS tool lets you visualize, understand, and manage your cloud costs and usage over time?
- A) AWS Budgets
- B) AWS Cost Explorer
- C) AWS Pricing Calculator
- D) AWS Organizations

**Answer:** B — AWS Cost Explorer provides an interface to visualize and analyze your AWS spending patterns and trends.

---

**Q72.** Which service allows you to set custom cost and usage alerts that notify you when thresholds are exceeded?
- A) AWS Cost Explorer
- B) AWS Budgets
- C) AWS Trusted Advisor
- D) Amazon CloudWatch

**Answer:** B — AWS Budgets lets you set custom budgets and receive alerts when actual or forecasted costs exceed your thresholds.

---

**Q73.** A company wants to estimate the cost of a new AWS architecture before deploying it. Which tool should they use?
- A) AWS Cost Explorer
- B) AWS Budgets
- C) AWS Pricing Calculator
- D) AWS Trusted Advisor

**Answer:** C — AWS Pricing Calculator lets you estimate the cost of AWS services for your specific use case before committing.

---

**Q74.** Which feature of AWS Organizations allows a company to receive a single bill for all member accounts?
- A) Service control policies
- B) Consolidated billing
- C) AWS Budgets
- D) Cost allocation tags

**Answer:** B — Consolidated billing in AWS Organizations combines usage across accounts for a single bill and potential volume discounts.

---

**Q75.** What are cost allocation tags used for?
- A) To restrict access to AWS resources
- B) To organize and track AWS costs by project, department, or environment
- C) To encrypt data at rest
- D) To configure auto scaling

**Answer:** B — Cost allocation tags let you categorize resources for detailed cost tracking and reporting in billing reports.

---

### 4.3 Technical Resources and Support

**Q76.** Which AWS Support plan provides access to a Technical Account Manager (TAM)?
- A) Basic
- B) Developer
- C) Business
- D) Enterprise

**Answer:** D — Only Enterprise and Enterprise On-Ramp Support plans include a designated Technical Account Manager.

---

**Q77.** Which AWS Support plan is available to all AWS customers at no additional cost?
- A) Developer
- B) Business
- C) Basic
- D) Enterprise On-Ramp

**Answer:** C — Basic Support is free for all AWS customers and includes 24/7 access to customer service, documentation, and Trusted Advisor core checks.

---

**Q78.** Which AWS service provides best-practice checks and recommendations to help optimize your AWS environment?
- A) AWS Config
- B) Amazon Inspector
- C) AWS Trusted Advisor
- D) AWS Systems Manager

**Answer:** C — AWS Trusted Advisor provides real-time guidance across cost optimization, performance, security, fault tolerance, and service limits.

---

**Q79.** Where can a customer find community-driven questions and answers about AWS?
- A) AWS Artifact
- B) AWS re:Post
- C) AWS Trusted Advisor
- D) AWS Personal Health Dashboard

**Answer:** B — AWS re:Post (formerly AWS Forums) is a community-driven Q&A service for AWS technical questions.

---

**Q80.** Which dashboard provides personalized alerts about AWS service health events that may affect your resources?
- A) AWS Trusted Advisor
- B) Amazon CloudWatch
- C) AWS Health Dashboard
- D) AWS Cost Explorer

**Answer:** C — AWS Health Dashboard provides personalized view of the health of AWS services and any scheduled or ongoing events impacting your resources.

---

**Q81.** A company discovers AWS resources being used for malicious purposes. Which team should they report this to?
- A) AWS Support
- B) AWS Trust and Safety team
- C) AWS Professional Services
- D) AWS Partner Network

**Answer:** B — The AWS Trust and Safety team handles reports of abuse of AWS resources (spam, port scanning, DDoS, etc.).

---

**Q82.** Which service in AWS Marketplace allows organizations to find, test, buy, and deploy third-party software?
- A) AWS Partner Network
- B) AWS Marketplace
- C) Amazon AppStream
- D) AWS Service Catalog

**Answer:** B — AWS Marketplace is a curated digital catalog for finding, buying, and deploying third-party software and services.

---

---

## Bonus: Mixed Domain Questions

**Q83.** Which service should be used to monitor application performance metrics such as CPU utilization and network throughput?
- A) AWS CloudTrail
- B) Amazon CloudWatch
- C) AWS Config
- D) AWS X-Ray

**Answer:** B — Amazon CloudWatch collects and tracks metrics, monitors log files, and sets alarms for AWS resources.

---

**Q84.** What is the difference between a security group and a network ACL?
- A) Security groups are stateless; NACLs are stateful
- B) Security groups operate at the instance level and are stateful; NACLs operate at the subnet level and are stateless
- C) They are identical
- D) NACLs only apply to outbound traffic

**Answer:** B — Security groups are stateful (return traffic auto-allowed) at the instance level. NACLs are stateless (must explicitly allow return traffic) at the subnet level.

---

**Q85.** Which AWS service tracks resource configuration changes and evaluates compliance against desired configurations?
- A) AWS CloudTrail
- B) AWS Config
- C) Amazon Inspector
- D) AWS Trusted Advisor

**Answer:** B — AWS Config continuously records resource configurations and evaluates them against desired rules for compliance.

---

**Q86.** A startup wants a simple way to launch a small website with a pre-configured server at a predictable monthly cost. Which service is most appropriate?
- A) Amazon EC2
- B) AWS Lambda
- C) Amazon Lightsail
- D) AWS Elastic Beanstalk

**Answer:** C — Amazon Lightsail offers simple virtual servers, storage, and networking at a low, predictable monthly price.

---

**Q87.** Which service allows developers to deploy and manage applications without worrying about the underlying infrastructure?
- A) Amazon EC2
- B) AWS Elastic Beanstalk
- C) AWS CloudFormation
- D) Amazon ECS

**Answer:** B — AWS Elastic Beanstalk is a PaaS that handles deployment, scaling, and management while you just upload your code.

---

**Q88.** Which of the following describes Amazon S3?
- A) Block storage for EC2 instances
- B) Object storage with virtually unlimited capacity
- C) In-memory database service
- D) File storage for Linux workloads

**Answer:** B — Amazon S3 is an object storage service offering industry-leading scalability, availability, and durability.

---

**Q89.** What is the purpose of Amazon CloudFront?
- A) Manage DNS records
- B) Provide DDoS protection
- C) Content delivery network (CDN) that caches content at edge locations
- D) Store objects with versioning

**Answer:** C — Amazon CloudFront is a CDN that distributes content globally through edge locations for low-latency delivery.

---

**Q90.** Which service helps trace requests as they travel through a distributed application for debugging and performance analysis?
- A) AWS CloudTrail
- B) Amazon CloudWatch
- C) AWS X-Ray
- D) AWS Config

**Answer:** C — AWS X-Ray helps developers analyze and debug distributed applications by tracing requests end-to-end.

---

> **Study Tips:**
> - Domain 3 (Cloud Technology & Services) is the largest at **34%** — know your core services well
> - Domain 2 (Security & Compliance) is **30%** — the shared responsibility model is heavily tested
> - Understand the difference between similar services (e.g., CloudTrail vs CloudWatch, Security Groups vs NACLs)
> - Know when to use each pricing model (On-Demand, Reserved, Spot, Savings Plans)
> - The exam is scenario-based — focus on *when* to use each service, not just *what* it does
