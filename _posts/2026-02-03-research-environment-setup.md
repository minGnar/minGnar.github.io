---
title: "Designing a reproducible RL research environment"
date: 2026-02-03
layout: single-study-log
permalink: /log/2026-02-03/
categories: [study-log]
tags: [rl, workflow, reproducibility]
related_projects: [rl-basics]
---

## What I Tried

Before starting RL experiments, I focused on setting up a research environment
that would scale beyond a single experiment or a single machine.

I set up:
- WSL2 + Ubuntu to mirror typical Linux-based research servers
- Git + SSH authentication for version-controlled experiments
- zsh as the default shell for interactive work
- Project-level Python management using `uv`
- A strict package-based execution model (`python -m ...`)

The goal was not convenience alone, but reproducibility and long-term maintainability.

---

## What Failed

A purely terminal-based workflow slowed down iteration more than expected.
While it was functional, frequent experiment logging and code navigation
became a bottleneck.

I also encountered several issues early on:
- PATH and shell integration problems when launching editors from WSL
- `ModuleNotFoundError` caused by ad-hoc script execution
- Friction between global Python installs and project-specific dependencies

These failures made it clear that "it works" is not the same as
"it works reliably for research".

---

## What I Learned

Several principles became clear during this setup phase:

1. **Reproducibility is a project-level concern**  
   Declaring dependencies in `pyproject.toml` matters more than
   installing packages correctly once.

2. **Execution invariants are more important than tools**  
   As long as experiments run inside WSL with
   `uv run python -m package.module`,
   the choice of editor or Git UI is secondary.

3. **Automation reduces cognitive load**  
   Using `ruff`, `black`, and `pre-commit` ensures that code quality
   does not depend on manual discipline.

4. **Research velocity matters**  
   An environment that slows down iteration is effectively blocking research.

---

## Final Setup

- OS: Windows + WSL2 (Ubuntu)
- Editor: VS Code (Remote - WSL)
- Python: `uv` with project-level virtual environments
- Dependency management: `pyproject.toml`
- Code quality: `ruff`, `black`, `pre-commit`
- Execution model: `python -m lab_basics.train`

This setup ensures that experiments can be reproduced,
shared, and extended without relying on implicit system state.

---

## Next Step

With the research environment stabilized,
the next step is to begin CS285-aligned RL baselines,
starting with REINFORCE and multi-seed experiments.