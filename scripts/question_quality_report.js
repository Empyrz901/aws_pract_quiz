const fs = require('fs');
const vm = require('vm');

const files = [
  'domain1.js',
  'domain1_distractor_200.js',
  'domain2.js',
  'domain2_distractor_200.js',
  'domain3.js',
  'domain3_distractor_200.js',
  'domain4.js',
  'domain4_distractor_200.js'
];

const ctx = {};
vm.createContext(ctx);
for (const file of files) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
}

const all = [
  ...vm.runInContext('DOMAIN1_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN1_DISTRACTOR_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN2_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN2_DISTRACTOR_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN3_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN3_DISTRACTOR_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN4_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN4_DISTRACTOR_QUESTIONS', ctx)
];

function isDefinitionLike(text) {
  const t = (text || '').toLowerCase();
  return t.includes('what is ') ||
    t.includes('which of the following is the definition') ||
    t.includes('best describes');
}

function isScenario(text) {
  return /\b(a|an)\s+(startup|company|firm|enterprise|team|organization|platform|provider|agency|bank|retailer)\b/i.test(text || '');
}

function isConstraint(text) {
  const t = (text || '').toLowerCase();
  return t.includes('constraint:') ||
    t.includes('lowest operational overhead') ||
    t.includes('most cost-effective') ||
    t.includes('maximum availability') ||
    t.includes('lowest latency') ||
    t.includes('least maintenance');
}

const totals = {
  total: all.length,
  multi: all.filter((q) => q.multi).length,
  definitionLike: all.filter((q) => isDefinitionLike(q.q)).length,
  scenario: all.filter((q) => isScenario(q.q)).length,
  constraintDriven: all.filter((q) => isConstraint(q.q)).length
};

const hardPool = all.filter((q) => !isDefinitionLike(q.q) && (isScenario(q.q) || isConstraint(q.q)));

console.log('Question Quality Report');
console.log('-----------------------');
console.log(`Total questions: ${totals.total}`);
console.log(`Multi-answer questions: ${totals.multi}`);
console.log(`Definition-like questions: ${totals.definitionLike}`);
console.log(`Scenario-style questions: ${totals.scenario}`);
console.log(`Constraint-driven questions: ${totals.constraintDriven}`);
console.log(`Hard exam-style candidate pool: ${hardPool.length}`);

if (process.argv.includes('--strict')) {
  const minHardPool = 700;
  const maxDefinitionLike = 250;
  if (hardPool.length < minHardPool || totals.definitionLike > maxDefinitionLike) {
    console.error('\nStrict check failed: question bank quality thresholds not met.');
    process.exit(1);
  }
}
