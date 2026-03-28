const fs = require('fs');
const path = require('path');
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
  const code = fs.readFileSync(file, 'utf8');
  vm.runInContext(code, ctx, { filename: file });
}

const rawQuestions = [
  ...vm.runInContext('DOMAIN1_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN1_DISTRACTOR_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN2_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN2_DISTRACTOR_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN3_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN3_DISTRACTOR_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN4_QUESTIONS', ctx),
  ...vm.runInContext('DOMAIN4_DISTRACTOR_QUESTIONS', ctx)
];

function normalizeQuestionText(text) {
  return (text || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function isDefinitionLike(text) {
  const t = (text || '').toLowerCase();
  return t.includes('what is ') ||
    t.includes('which of the following is the definition') ||
    t.includes('best describes');
}

function isScenarioLike(text) {
  return /\b(a|an)\s+(startup|company|firm|enterprise|team|organization|platform|provider|agency|bank|retailer)\b/i.test(text || '');
}

function isConstraintLike(text) {
  const t = (text || '').toLowerCase();
  return t.includes('constraint:') ||
    t.includes('lowest operational overhead') ||
    t.includes('most cost-effective') ||
    t.includes('maximum availability') ||
    t.includes('lowest latency') ||
    t.includes('least maintenance');
}

function auditQuestions(questions) {
  const seen = new Set();
  const kept = [];
  const flagged = [];
  const summary = {
    total: questions.length,
    kept: 0,
    removed: 0,
    reasons: {
      invalid_shape: 0,
      invalid_answer_index: 0,
      duplicate_question_text: 0,
      definition_like: 0,
      non_scenario_non_constraint: 0,
      too_short: 0
    },
    keptByDomain: { 1: 0, 2: 0, 3: 0, 4: 0 }
  };

  for (const q of questions) {
    const reasons = [];
    if (!q || !q.q || !Array.isArray(q.opts) || q.opts.length < 4 || q.explain === undefined) {
      reasons.push('invalid_shape');
    }

    const text = q && q.q ? q.q : '';
    const norm = normalizeQuestionText(text);
    if (seen.has(norm)) reasons.push('duplicate_question_text');
    else if (norm) seen.add(norm);

    if (text.length < 60) reasons.push('too_short');
    if (isDefinitionLike(text)) reasons.push('definition_like');
    if (!isScenarioLike(text) && !isConstraintLike(text)) reasons.push('non_scenario_non_constraint');

    if (q && q.multi === true) {
      const valid = Array.isArray(q.ans) && q.ans.length >= 2 && q.ans.every((i) => Number.isInteger(i) && i >= 0 && i < q.opts.length);
      if (!valid) reasons.push('invalid_answer_index');
    } else if (!q || !Number.isInteger(q.ans) || q.ans < 0 || (q.opts && q.ans >= q.opts.length)) {
      reasons.push('invalid_answer_index');
    }

    if (reasons.length > 0) {
      reasons.forEach((r) => { summary.reasons[r] = (summary.reasons[r] || 0) + 1; });
      flagged.push({ domain: q ? q.domain : null, task: q ? q.task : null, q: text, reasons });
      continue;
    }

    kept.push(q);
    if (summary.keptByDomain[q.domain] !== undefined) summary.keptByDomain[q.domain]++;
  }

  summary.kept = kept.length;
  summary.removed = summary.total - summary.kept;
  return { kept, flagged, summary };
}

const audited = auditQuestions(rawQuestions);
const outDir = path.join(process.cwd(), 'scripts', 'reports');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'question_audit_summary.json'), JSON.stringify(audited.summary, null, 2));
fs.writeFileSync(path.join(outDir, 'question_audit_flagged.json'), JSON.stringify(audited.flagged, null, 2));

console.log('Audit complete');
console.log(JSON.stringify(audited.summary, null, 2));
console.log(`Flagged report: ${path.join('scripts', 'reports', 'question_audit_flagged.json')}`);
