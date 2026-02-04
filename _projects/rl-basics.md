---
title: "RL Basics"
layout: single
permalink: /projects/rl-basics/
author_profile: true
tags: [setup]
project_id: rl-basics
---

## Reproducibility & Research Setup

This project is designed to be **fully reproducible at the project level**, not at the system level.

### Environment
- OS: Windows + WSL2 (Ubuntu)
- Shell: zsh
- Editor: VS Code (Remote - WSL)

### Python Environment
- Python version: >= 3.12
- Environment manager: `uv`
- Project-level virtual environment (`.venv`)
- Dependency specification via `pyproject.toml`

All dependencies (including development tools) are defined in `pyproject.toml` to ensure that
the same environment can be reconstructed on another machine.

### Code Quality & Tooling
- Linting: `ruff`
- Formatting: `black`
- Pre-commit hooks: `pre-commit`

Code quality checks are automatically enforced before each commit.

### Execution
Experiments are executed as Python modules to ensure correct package resolution.

```bash
uv sync
uv run python -m lab_basics.train --config configs/reinforce.yaml --seed 0
```

### Logging
- Experiment logging: wandb
- Multi-seed experiments are supported and encouraged

### Project Status

- Phase 0: Research environment & workflow setup (completed)

- Phase 1: CS285-aligned RL baselines (in progress)

### Next Step

- Implement and analyze REINFORCE baseline

- Investigate variance behavior and baseline effects

<div>
{% include related-logs.html %}
</div>
