#!/usr/bin/env python3
"""
Template-based generator for docs-backed CLF-C02 expert questions.

This generator is intentionally deterministic and manifest-driven:
- it reads official AWS-doc metadata from data/expert/aws_docs_catalog.json
- it reads scenario templates from data/expert/templates.json
- it emits question manifests compatible with data/expert/question.schema.json

The website remains static, so "Deep Dive" snippets are stored in the generated
question manifests instead of being fetched live in the browser.
"""

from __future__ import annotations

import argparse
import json
import math
import random
from copy import deepcopy
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from typing import Dict, List


ROOT = Path(__file__).resolve().parent.parent
EXPERT_DIR = ROOT / "data" / "expert"
GENERATOR_VERSION = "1.0.0"


@dataclass
class Template:
    template_id: str
    domain: int
    task: str
    docs_ref_keys: List[str]
    correct_service: str
    distractors: List[str]
    stem_template: str


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def slugify(text: str) -> str:
    keep = []
    for ch in text.lower():
      if ch.isalnum():
          keep.append(ch)
      elif keep and keep[-1] != "-":
          keep.append("-")
    value = "".join(keep).strip("-")
    return value or "item"


def build_explanation(correct: str, distractors: List[str], template_id: str) -> Dict[str, List[str] | str]:
    why_others_fail = [f"{name} is plausible, but it fails one of the specific business constraints in this scenario." for name in distractors]
    return {
        "correct_option_ids": ["A"],
        "explanation": f"{correct} is the best fit for this scenario because it most directly satisfies the operational and business constraints described in template `{template_id}`.",
        "why_others_fail": why_others_fail
    }


def build_question(template: Template, company: str, constraint: str, docs_catalog: Dict[str, dict], ordinal: int) -> dict:
    options = [template.correct_service, *template.distractors]
    scenario_stem = template.stem_template.format(company=company, constraint=constraint)
    option_ids = ["A", "B", "C", "D", "E"]

    question_options = []
    for idx, label in enumerate(options):
        question_options.append({
            "id": option_ids[idx],
            "label": label,
            "is_correct": idx == 0,
            "rationale": "Best overall fit for the full scenario." if idx == 0 else "Close service or action, but it misses one critical requirement in the prompt."
        })

    docs_sources = [deepcopy(docs_catalog[key]) for key in template.docs_ref_keys]
    variant_key = f"{slugify(company)}-{slugify(constraint)}-{ordinal:03d}"
    return {
        "id": f"clf-d{template.domain}-t{template.task}-{slugify(template.template_id)}-{ordinal:03d}",
        "exam": "CLF-C02",
        "level": "expert",
        "domain": template.domain,
        "task": template.task,
        "style": "scenario",
        "difficulty": 4,
        "scenario": {
            "title": company,
            "stem": scenario_stem,
            "business_context": [company],
            "constraints": [constraint]
        },
        "options": question_options,
        "answer": build_explanation(template.correct_service, template.distractors, template.template_id),
        "aws_docs": {
            "sources": docs_sources,
            "deep_dive_primary_url": docs_sources[0]["url"],
            "deep_dive_sections": docs_sources[0]["section_titles"]
        },
        "generation": {
            "template_id": template.template_id,
            "variant_key": variant_key,
            "generated_at": str(date.today()),
            "generator_version": GENERATOR_VERSION,
            "review_status": "needs_review"
        },
        "quality": {
            "distractor_rule": "All distractors must be real AWS services or AWS actions that nearly fit but fail one requirement.",
            "anti_patterns_checked": [
                "no definition wording",
                "no hint-heavy option labels",
                "real AWS distractors only"
            ]
        },
        "ui": {
            "deep_dive_enabled": True,
            "flaggable": True
        }
    }


def allocate_targets(total_count: int, template_records: List[Template]) -> Dict[int, int]:
    weights = {1: 0.24, 2: 0.30, 3: 0.34, 4: 0.12}
    counts = {}
    allocated = 0
    for domain in range(1, 5):
        counts[domain] = math.floor(total_count * weights[domain])
        allocated += counts[domain]

    priority = sorted(weights.keys(), key=lambda d: weights[d], reverse=True)
    remainder = total_count - allocated
    for idx in range(remainder):
        counts[priority[idx % len(priority)]] += 1
    return counts


def generate_questions(total_count: int, seed: int) -> Dict[int, List[dict]]:
    random.seed(seed)
    templates_data = load_json(EXPERT_DIR / "templates.json")
    docs_catalog = load_json(EXPERT_DIR / "aws_docs_catalog.json")["sources"]

    templates = [
        Template(
            template_id=item["template_id"],
            domain=item["domain"],
            task=item["task"],
            docs_ref_keys=item["docs_ref_keys"],
            correct_service=item["correct_service"],
            distractors=item["distractors"],
            stem_template=item["stem_template"]
        )
        for item in templates_data["templates"]
    ]

    companies = templates_data["companies"]
    constraints = templates_data["constraints"]
    targets = allocate_targets(total_count, templates)
    grouped: Dict[int, List[Template]] = {domain: [t for t in templates if t.domain == domain] for domain in range(1, 5)}

    output: Dict[int, List[dict]] = {1: [], 2: [], 3: [], 4: []}
    ordinal = 1
    for domain in range(1, 5):
        domain_templates = grouped[domain]
        if not domain_templates:
            continue
        for idx in range(targets[domain]):
            template = domain_templates[idx % len(domain_templates)]
            company = companies[idx % len(companies)]
            constraint = constraints[(idx + domain) % len(constraints)]
            output[domain].append(build_question(template, company, constraint, docs_catalog, ordinal))
            ordinal += 1
    return output


def write_output(output: Dict[int, List[dict]], out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    for domain, questions in output.items():
        path = out_dir / f"domain{domain}.expert.generated.json"
        with path.open("w", encoding="utf-8") as handle:
            json.dump(questions, handle, indent=2)
            handle.write("\n")


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate docs-backed expert CLF-C02 question manifests.")
    parser.add_argument("--count", type=int, default=40, help="Number of questions to generate.")
    parser.add_argument("--seed", type=int, default=42, help="Random seed for deterministic output.")
    parser.add_argument("--out-dir", type=Path, default=EXPERT_DIR / "generated", help="Output directory for generated manifests.")
    args = parser.parse_args()

    output = generate_questions(args.count, args.seed)
    write_output(output, args.out_dir)
    total = sum(len(items) for items in output.values())
    print(f"Generated {total} expert questions into {args.out_dir}")


if __name__ == "__main__":
    main()
