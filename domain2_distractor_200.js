function generateDomain2DistractorQuestions() {
  const companies = [
    "A fast-growing fintech startup",
    "A regional healthcare provider",
    "A global retail platform",
    "A SaaS analytics company",
    "A public sector agency",
    "An online gaming studio",
    "A logistics enterprise",
    "A media streaming provider",
    "A digital banking platform",
    "An insurance technology company",
    "A multinational manufacturer",
    "An education services provider",
    "A telecommunications company",
    "A travel technology platform",
    "A pharmaceutical research firm"
  ];

  const constraints = [
    "lowest operational overhead",
    "most cost-effective approach",
    "maximum availability",
    "fastest audit readiness",
    "strongest preventive control",
    "minimum manual maintenance",
    "least ongoing administration",
    "quickest implementation time",
    "lowest risk of credential exposure",
    "most scalable multi-account governance",
    "strongest audit evidence trail",
    "lowest blast radius",
    "simplest key governance model",
    "fastest incident investigation",
    "least privilege at scale"
  ];

  const templates = [
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} runs 40 AWS accounts and needs a landing zone with guardrails, centralized logging, and standardized account provisioning. The CIO insists on ${constraint}. Which service should the team adopt first?`,
      options: [
        "AWS Organizations with Service Control Policies only",
        "AWS Control Tower",
        "AWS Security Hub",
        "AWS Config conformance packs only"
      ],
      correct: "AWS Control Tower",
      nextBest: "AWS Organizations with Service Control Policies only",
      whyCorrect: "Control Tower provides a managed landing zone, account factory, and prebuilt governance guardrails.",
      whyNextBestWrong: "Organizations with SCPs is useful but does not provide the same managed account provisioning and out-of-box guardrail orchestration."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} must detect any S3 bucket that becomes publicly accessible across multiple accounts within minutes. Security leadership requires ${constraint}. Which service combination is the best fit?`,
      options: [
        "Amazon Macie automated discovery jobs",
        "AWS Config managed rules with an aggregator",
        "AWS Trusted Advisor checks only",
        "Amazon Inspector scanning templates"
      ],
      correct: "AWS Config managed rules with an aggregator",
      nextBest: "Amazon Macie automated discovery jobs",
      whyCorrect: "Config rules with an aggregator continuously evaluate bucket exposure and centralize compliance status across accounts.",
      whyNextBestWrong: "Macie is excellent for sensitive data discovery, but bucket public access posture detection is more direct with Config compliance rules."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} hosts a public web application and is seeing repeated SQL injection and cross-site scripting attempts. The architecture team wants ${constraint}. Which AWS service should be implemented in front of the app?`,
      options: [
        "AWS Shield Standard only",
        "AWS WAF with AWS Managed Rules",
        "Amazon GuardDuty",
        "AWS Network Firewall"
      ],
      correct: "AWS WAF with AWS Managed Rules",
      nextBest: "AWS Shield Standard only",
      whyCorrect: "WAF inspects HTTP/S requests and blocks common Layer 7 exploit patterns with managed rule groups.",
      whyNextBestWrong: "Shield Standard helps with volumetric DDoS protection but does not provide equivalent application-layer exploit filtering."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} must encrypt S3 and EBS data with keys they control to satisfy internal compliance policy. The security manager demands ${constraint}. Which choice is most appropriate?`,
      options: [
        "AWS managed service encryption keys only",
        "AWS KMS customer managed keys with automatic rotation",
        "Self-managed key servers on Amazon EC2",
        "AWS CloudHSM with manual key lifecycle for all workloads"
      ],
      correct: "AWS KMS customer managed keys with automatic rotation",
      nextBest: "AWS managed service encryption keys only",
      whyCorrect: "KMS customer managed keys balance control, auditability, and managed lifecycle operations.",
      whyNextBestWrong: "AWS managed keys reduce effort but do not provide the same customer-controlled key policy granularity."
    },
    {
      task: "2.3",
      buildQuestion: (company, constraint) => `${company} wants employees to use corporate directory credentials for AWS access across many accounts without creating IAM users per person. The requirement is ${constraint}. Which solution should be used?`,
      options: [
        "IAM users synchronized from Active Directory by custom scripts",
        "AWS IAM Identity Center integrated with the corporate directory",
        "Amazon Cognito user pools",
        "Local IAM users with shared administrator credentials"
      ],
      correct: "AWS IAM Identity Center integrated with the corporate directory",
      nextBest: "IAM users synchronized from Active Directory by custom scripts",
      whyCorrect: "IAM Identity Center provides centralized federation, short-lived access, and account assignment workflows.",
      whyNextBestWrong: "Scripted IAM user synchronization adds ongoing credential lifecycle and automation maintenance overhead."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} needs tamper-resistant API activity logs retained for seven years to support legal discovery. Finance asks for ${constraint}. Which architecture should be selected?`,
      options: [
        "AWS CloudTrail to Amazon S3 with Object Lock and lifecycle to S3 Glacier Deep Archive",
        "AWS CloudTrail to CloudWatch Logs with no export strategy",
        "AWS Config snapshots retained indefinitely",
        "Amazon VPC Flow Logs stored in EBS snapshots"
      ],
      correct: "AWS CloudTrail to Amazon S3 with Object Lock and lifecycle to S3 Glacier Deep Archive",
      nextBest: "AWS CloudTrail to CloudWatch Logs with no export strategy",
      whyCorrect: "S3 Object Lock provides immutability and Deep Archive offers low-cost long-term retention.",
      whyNextBestWrong: "CloudWatch Logs retention can work operationally but is typically less cost-efficient for multi-year archive requirements."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} suspects compromised credentials and needs managed threat detection based on API calls, DNS, and network telemetry without deploying host agents. The CISO wants ${constraint}. Which service should they enable?`,
      options: [
        "Amazon GuardDuty",
        "Amazon Detective only",
        "AWS CloudTrail Insights only",
        "AWS WAF"
      ],
      correct: "Amazon GuardDuty",
      nextBest: "AWS CloudTrail Insights only",
      whyCorrect: "GuardDuty provides managed threat detection using multiple data sources and AWS threat intelligence.",
      whyNextBestWrong: "CloudTrail Insights detects unusual API patterns but is narrower and not a complete managed threat detection solution."
    },
    {
      task: "2.4",
      buildQuestion: (company, constraint) => `${company} must quickly provide SOC and ISO compliance reports to external auditors. The compliance office requests ${constraint}. Which AWS service should be used?`,
      options: [
        "AWS Artifact",
        "AWS Audit Manager only",
        "AWS Security Hub",
        "AWS Config"
      ],
      correct: "AWS Artifact",
      nextBest: "AWS Audit Manager only",
      whyCorrect: "Artifact is the direct self-service source for AWS compliance reports and agreements.",
      whyNextBestWrong: "Audit Manager helps gather customer evidence but is not the primary source for AWS-issued compliance reports."
    },
    {
      task: "2.3",
      buildQuestion: (company, constraint) => `${company} wants to block privileged API actions unless MFA is present across every member account. Leadership requires ${constraint}. Which control is best?`,
      options: [
        "CloudTrail alerts for non-MFA API calls",
        "Service Control Policy using MFA condition keys",
        "IAM Access Analyzer findings",
        "Amazon GuardDuty suppression rules"
      ],
      correct: "Service Control Policy using MFA condition keys",
      nextBest: "CloudTrail alerts for non-MFA API calls",
      whyCorrect: "SCPs provide preventive organization-wide guardrails that can deny actions without MFA context.",
      whyNextBestWrong: "CloudTrail alerts are detective and occur after the action attempt, not preventive enforcement."
    },
    {
      task: "2.3",
      buildQuestion: (company, constraint) => `${company} repeatedly finds database credentials in source code. They need managed secret storage with rotation and runtime retrieval. The engineering manager demands ${constraint}. Which service should they choose?`,
      options: [
        "AWS Secrets Manager",
        "AWS Systems Manager Parameter Store standard parameters only",
        "Encrypted objects in Amazon S3",
        "Hardcoded ciphertext generated by AWS KMS Encrypt API"
      ],
      correct: "AWS Secrets Manager",
      nextBest: "AWS Systems Manager Parameter Store standard parameters only",
      whyCorrect: "Secrets Manager is purpose-built for secrets lifecycle, rotation, and application retrieval patterns.",
      whyNextBestWrong: "Parameter Store can store values, but rotation workflows are less native than Secrets Manager for this use case."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} runs a revenue-critical public platform and needs enhanced DDoS protection plus 24/7 support from AWS responders. The business goal is ${constraint}. Which option is correct?`,
      options: [
        "AWS Shield Standard",
        "AWS Shield Advanced",
        "AWS WAF rate-based rules only",
        "Amazon GuardDuty"
      ],
      correct: "AWS Shield Advanced",
      nextBest: "AWS Shield Standard",
      whyCorrect: "Shield Advanced adds enhanced protections and DDoS Response Team engagement for critical workloads.",
      whyNextBestWrong: "Shield Standard provides baseline protection but lacks Advanced response capabilities and expanded features."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} must automatically discover and classify PII across hundreds of S3 buckets. The security team is constrained by ${constraint}. Which service is the best fit?`,
      options: [
        "Amazon Macie",
        "AWS Config",
        "Amazon Comprehend",
        "Amazon Inspector"
      ],
      correct: "Amazon Macie",
      nextBest: "AWS Config",
      whyCorrect: "Macie is designed for automated sensitive data discovery and classification in S3.",
      whyNextBestWrong: "Config evaluates resource configuration posture, not object-level PII content classification."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} needs continuous vulnerability findings for Amazon EC2 and Amazon ECR with minimal scanner management. The platform team requires ${constraint}. Which service should be enabled?`,
      options: [
        "Amazon Inspector",
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS Security Hub"
      ],
      correct: "Amazon Inspector",
      nextBest: "AWS Security Hub",
      whyCorrect: "Inspector provides managed vulnerability scanning for EC2 and ECR with native AWS integration.",
      whyNextBestWrong: "Security Hub aggregates findings but does not perform the underlying vulnerability scans itself."
    },
    {
      task: "2.4",
      buildQuestion: (company, constraint) => `${company} wants one place to correlate findings from GuardDuty, Macie, and Inspector across all accounts. Security operations demands ${constraint}. Which service best matches this goal?`,
      options: [
        "AWS Security Hub",
        "Amazon CloudWatch dashboards",
        "AWS Organizations",
        "AWS Artifact"
      ],
      correct: "AWS Security Hub",
      nextBest: "Amazon CloudWatch dashboards",
      whyCorrect: "Security Hub centralizes and normalizes security findings and compliance insights across accounts.",
      whyNextBestWrong: "CloudWatch dashboards can visualize metrics but do not provide the same native security finding aggregation workflow."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} has workloads in private subnets that need access to Amazon S3 without traversing the public internet. Networking requires ${constraint}. Which option should be implemented?`,
      options: [
        "Gateway VPC endpoint for Amazon S3",
        "NAT Gateway for private subnets",
        "Interface VPC endpoint for Amazon S3",
        "Internet Gateway with strict routes"
      ],
      correct: "Gateway VPC endpoint for Amazon S3",
      nextBest: "Interface VPC endpoint for Amazon S3",
      whyCorrect: "A gateway endpoint is the standard private and cost-efficient connectivity option for S3 from VPCs.",
      whyNextBestWrong: "Interface endpoints can work for many services, but S3 gateway endpoints are generally the simpler and cheaper fit for this requirement."
    },
    {
      task: "2.3",
      buildQuestion: (company, constraint) => `${company} must allow infrastructure administrators to manage resources but prevent them from reading customer objects in production S3 buckets. The IAM strategy must deliver ${constraint}. Which approach should be used?`,
      options: [
        "Separate admin roles with explicit deny on S3 data-plane read actions",
        "Grant AdministratorAccess and rely on process policy",
        "Encrypt S3 with AWS managed keys only",
        "Detect violations later with CloudTrail"
      ],
      correct: "Separate admin roles with explicit deny on S3 data-plane read actions",
      nextBest: "Detect violations later with CloudTrail",
      whyCorrect: "Explicit denies with role separation enforce least privilege at authorization time.",
      whyNextBestWrong: "CloudTrail is detective and does not prevent unauthorized reads in the first place."
    },
    {
      task: "2.3",
      buildQuestion: (company, constraint) => `${company} has break-glass IAM roles that must never be deleted by member-account administrators. Security governance requires ${constraint}. Which control should be implemented?`,
      options: [
        "SCP denying iam:DeleteRole for protected role ARNs",
        "CloudWatch alarm when DeleteRole occurs",
        "AWS Config rule that records deleted roles",
        "Manual IAM policy updates in each account"
      ],
      correct: "SCP denying iam:DeleteRole for protected role ARNs",
      nextBest: "AWS Config rule that records deleted roles",
      whyCorrect: "An SCP provides centralized preventive enforcement across all member accounts.",
      whyNextBestWrong: "Config records noncompliance after deletion; it does not prevent role deletion."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} needs all current and future EBS volumes encrypted and wants noncompliant volumes automatically corrected. Operations has a hard requirement for ${constraint}. Which option is best?`,
      options: [
        "AWS Config encrypted-volumes rule with auto-remediation",
        "Enable EBS encryption by default only",
        "Quarterly manual audit scripts",
        "CloudTrail alerts on CreateVolume events"
      ],
      correct: "AWS Config encrypted-volumes rule with auto-remediation",
      nextBest: "Enable EBS encryption by default only",
      whyCorrect: "Config with remediation enforces continuous compliance and can correct drift on existing resources.",
      whyNextBestWrong: "Encryption by default covers new volumes but does not remediate existing unencrypted volumes."
    },
    {
      task: "2.3",
      buildQuestion: (company, constraint) => `${company} must grant a third-party assessor read-only cross-account access for two weeks without long-lived credentials. Risk management requires ${constraint}. Which method should be chosen?`,
      options: [
        "Cross-account IAM role with external ID and least-privilege policy",
        "Create IAM users and share access keys",
        "Share root credentials for temporary access",
        "Export reports publicly to an open S3 bucket"
      ],
      correct: "Cross-account IAM role with external ID and least-privilege policy",
      nextBest: "Create IAM users and share access keys",
      whyCorrect: "Assumable cross-account roles provide temporary credentials and tighter trust controls.",
      whyNextBestWrong: "IAM users with shared keys introduce long-lived credential risk and weaker governance."
    },
    {
      task: "2.2",
      buildQuestion: (company, constraint) => `${company} wants safeguards so KMS keys cannot be deleted immediately and changes remain auditable. The policy objective is ${constraint}. Which option is most suitable?`,
      options: [
        "Use key policies to restrict kms:ScheduleKeyDeletion and require the KMS waiting period",
        "Move all keys to self-managed HSM clusters immediately",
        "Disable CloudTrail for key operations to reduce noise",
        "Rotate KMS keys daily by manual process"
      ],
      correct: "Use key policies to restrict kms:ScheduleKeyDeletion and require the KMS waiting period",
      nextBest: "Move all keys to self-managed HSM clusters immediately",
      whyCorrect: "KMS policy controls plus enforced waiting periods provide strong deletion safeguards with low operational burden.",
      whyNextBestWrong: "Self-managed HSM migration may increase control but adds substantial operational complexity beyond the stated requirement."
    }
  ];

  function rotateOptions(options, offset) {
    const len = options.length;
    const normalized = offset % len;
    return options.map((_, i) => options[(i + normalized) % len]);
  }

  const generated = [];
  let id = 0;

  templates.forEach((template) => {
    for (let i = 0; i < 15; i++) {
      const company = companies[i % companies.length];
      const constraint = constraints[(i + id) % constraints.length];
      const prompt = template.buildQuestion(company, constraint);
      const rotated = rotateOptions(template.options, i);
      const ans = rotated.indexOf(template.correct);
      const explain = `Correct answer: ${template.correct}. ${template.whyCorrect} Next best distractor: ${template.nextBest}. ${template.whyNextBestWrong}`;
      generated.push({
        domain: 2,
        task: template.task,
        q: `${prompt} (Constraint: ${constraint}.)`,
        opts: rotated,
        ans: ans,
        explain: explain
      });
      id++;
    }
  });

  return generated;
}

const DOMAIN2_DISTRACTOR_QUESTIONS = generateDomain2DistractorQuestions();
