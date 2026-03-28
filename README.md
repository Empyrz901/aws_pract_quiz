# AWS Cloud Practitioner (CLF-C02) Practice Quiz

A free, open-source interactive practice quiz for the **AWS Certified Cloud Practitioner (CLF-C02)** exam, hosted on GitHub Pages.

**Live site:** https://empyrz901.github.io/aws_pract_quiz/

---

## Overview

This is a static, single-page web application with **2,154 practice questions** covering all four CLF-C02 exam domains. No backend, no login, no tracking — just open it and start practicing.

## Features

- **2,154 questions** across all 4 exam domains
- **Single-answer and multi-answer** question types (Select TWO / Select THREE)
- **Scenario-based questions** with business context — not just "What is X?" trivia
- **Weighted exam mode** — selecting 65 questions draws proportionally by official domain weights
- **Shuffle toggle** — randomize question order or go sequentially
- **Domain filtering** — practice a specific domain or all at once
- **Question count options** — 10, 20, 30, 50, 65 (official length), 100, or all
- **Timer** — tracks how long you spend on each quiz session
- **Previous / Next navigation** — move freely between questions, revisit answered ones
- **Detailed explanations** — every question explains why the correct answer is right and why distractors are wrong
- **Results breakdown** — per-domain scoring and performance review
- **Official simulation scoring mode** — selecting 65 questions in All Domains uses weighted hard-question sampling and reports results on 50 scored questions (15 unscored)
- **Retry wrong only** — re-quiz just the questions you got wrong
- **Report error button** — flags a question by opening a pre-filled GitHub Issue

## Exam Domain Breakdown

The CLF-C02 exam includes 65 total questions (50 scored and 15 unscored) and uses scaled scoring from 100 to 1000, with a passing score of 700. Domain weights determine how many scored questions come from each area:

| Domain | Name | Weight | Questions in Bank |
|--------|------|--------|-------------------|
| 1 | Cloud Concepts | 24% | 529 |
| 2 | Security & Compliance | 30% | 588 |
| 3 | Cloud Technology & Services | 34% | 608 |
| 4 | Billing, Pricing & Support | 12% | 429 |
| | **Total** | **100%** | **2,154** |

When you select "65 (official length)" with "All Domains", the quiz uses a **weighted random draw** aligned to official domain weights (~16 from D1, ~20 from D2, ~22 from D3, ~8 from D4) and prioritizes scenario-based, constraint-driven questions for a tougher simulation set.

## Project Structure

```
├── index.html          # Main application (HTML + CSS + JS, single file)
├── domain1.js          # Domain 1 questions — Cloud Concepts
├── domain1_distractor_200.js  # Added advanced Domain 1 scenario bank
├── domain2.js          # Domain 2 questions — Security & Compliance
├── domain2_distractor_200.js  # Added advanced Domain 2 scenario bank
├── domain3.js          # Domain 3 questions — Cloud Technology & Services
├── domain3_distractor_200.js  # Added advanced Domain 3 scenario bank
├── domain4.js          # Domain 4 questions — Billing, Pricing & Support
├── domain4_distractor_200.js  # Added advanced Domain 4 scenario bank
├── README.md           # This file
└── AWS_Cloud_Practitioner_CLF-C02_Questions.md  # Reference question source
```

### Question Format

Each question is a JavaScript object in its domain file:

```javascript
// Single-answer question
{
  domain: 1,
  task: "1.2",
  q: "A company discovers their production database has no backups configured...",
  opts: ["Security — encrypt the database", "Performance — optimize queries",
         "Reliability — plan for failure recovery", "Cost — reduce storage costs"],
  ans: 2,
  explain: "Reliability includes planning for data recovery and backup strategies..."
}

// Multi-answer question
{
  domain: 2,
  task: "2.3",
  q: "Which TWO actions should the security team take? (Select TWO)",
  opts: ["Option A", "Option B", "Option C", "Option D", "Option E"],
  multi: true,
  ans: [1, 3],
  explain: "B and D are correct because..."
}
```

- `domain`: integer (1-4)
- `task`: string matching the CLF-C02 task number (e.g., "1.2", "3.5")
- `q`: question text
- `opts`: array of answer options (4-5 options)
- `ans`: correct answer index (0-based) for single-answer, or array of indices for multi-answer
- `multi`: `true` for multi-answer questions (omitted for single-answer)
- `explain`: explanation of why the correct answer is right and why distractors are wrong

## How It Works

1. **Start screen** — select a domain (or all), question count, and shuffle preference
2. **Quiz screen** — answer questions one at a time with immediate feedback on single-answer, click Submit for multi-answer
3. **Navigation** — use Prev/Next to move between questions; answered questions show their results when revisited
4. **Results screen** — see overall score, per-domain breakdown, timer, and a review of all wrong/skipped answers
5. **Retry wrong** — re-attempt only the questions you got wrong

### Report Error

Each question has a "Report error" button that opens a GitHub Issue pre-filled with the question text, options, current answer, and explanation. Describe what seems wrong and submit.

## Technology

- **Pure HTML/CSS/JavaScript** — no frameworks, no build step, no dependencies
- **GitHub Pages** — hosted as a static site, served directly from the `main` branch
- **No localStorage** — each quiz session is independent (no persistence between page loads)

## Question Quality Checks

Run the quality audit script from the repository root:

```bash
node scripts/question_quality_report.js
```

For threshold enforcement:

```bash
node scripts/question_quality_report.js --strict
```

## CLF-C02 Exam Topics Covered

### Domain 1: Cloud Concepts (Tasks 1.1–1.4)
Benefits of the cloud, Well-Architected Framework, migration strategies (7 Rs), cloud economics (CapEx vs OpEx, TCO, pricing models)

### Domain 2: Security & Compliance (Tasks 2.1–2.4)
Shared Responsibility Model, security services (GuardDuty, Inspector, Macie, WAF, Shield), IAM (users, roles, policies, federation, MFA), compliance (Artifact, Config, Security Hub, Control Tower)

### Domain 3: Cloud Technology & Services (Tasks 3.1–3.7)
Deployment (CloudFormation, Elastic Beanstalk, CI/CD), global infrastructure (Regions, AZs, edge locations), compute (EC2, Lambda, ECS/Fargate), databases (RDS, Aurora, DynamoDB, ElastiCache), networking (VPC, CloudFront, Route 53, ELB, Direct Connect), storage (S3, EBS, EFS, Glacier), AI/ML and analytics (SageMaker, Comprehend, Personalize, Kinesis, QuickSight, Redshift)

### Domain 4: Billing, Pricing & Support (Tasks 4.1–4.3)
Pricing models (On-Demand, Reserved, Spot, Savings Plans), billing tools (Cost Explorer, Budgets, CUR, Pricing Calculator), support plans (Basic, Developer, Business, Enterprise), AWS Organizations, Trusted Advisor, Well-Architected Tool

## Contributing

Found an error in a question? Use the **Report error** button during the quiz, or open an issue directly at [github.com/Empyrz901/aws_pract_quiz/issues](https://github.com/Empyrz901/aws_pract_quiz/issues).

## License

This project is for educational purposes. AWS service names and trademarks belong to Amazon Web Services, Inc.


