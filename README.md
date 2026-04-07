# AWS Cloud Practitioner (CLF-C02) Practice Quiz

Static practice quiz for the AWS Certified Cloud Practitioner exam.

Live site: https://empyrz901.github.io/aws_pract_quiz/

## Repository Layout

This repository is intentionally simple:

```text
index.html
domain1.js
domain2.js
domain3.js
domain4.js
README.md
```

- [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html): the full app UI and quiz logic
- [domain1.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain1.js): Domain 1 question bank
- [domain2.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain2.js): Domain 2 question bank
- [domain3.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain3.js): Domain 3 question bank
- [domain4.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain4.js): Domain 4 question bank

## Features

- One question bank only
- 4 domain files only
- 65-question official-length mode
- Domain filtering
- Shuffle toggle
- Single-answer and multi-answer questions
- Explanation after answering
- Results breakdown
- Retry wrong answers
- Report error button

## Question Format

Each question is a JavaScript object:

```javascript
{
  domain: 3,
  task: "3.5",
  q: "A company needs to isolate production and development workloads in AWS. Which service provides this network isolation?",
  opts: ["AWS IAM", "Amazon VPC", "Amazon Route 53", "AWS Direct Connect"],
  ans: 1,
  explain: "Amazon VPC provides isolated virtual networks."
}
```

Multi-answer questions add `multi: true` and use an array for `ans`.

## Notes

- The app is static and has no build step.
- The active bank is filtered in the browser to keep the quiz closer to real exam style.
- The repository was simplified to keep maintenance easy and make question editing straightforward.

## Contributing

If a question looks wrong, use the in-app `Report error` button or open an issue:

https://github.com/Empyrz901/aws_pract_quiz/issues
