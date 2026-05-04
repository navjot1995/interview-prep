import { Question } from '../types';

export const gitQuestions: Question[] = [
  // GitHub Platform
  {
    id: 1,
    question: "What is GitHub and how does it differ from Git?",
    answer: "Git is a distributed version control system that tracks code changes locally, while GitHub is a cloud-based hosting service for Git repositories that adds collaboration features like pull requests, issues, project boards, and GitHub Actions. GitHub provides a web interface and additional tools for team collaboration.",
    category: "GitHub Platform",
    difficulty: "Easy",
    codeExample: `# Git commands (local)
git init
git add .
git commit -m "Initial commit"

# GitHub specific (remote)
git remote add origin https://github.com/username/repo.git
git push -u origin main
# GitHub also provides web UI, PRs, Actions, etc.`
  },
  
  // GitLab
  {
    id: 2,
    question: "What is GitLab and what are its key features compared to GitHub?",
    answer: "GitLab is a DevOps platform that provides Git repository management, CI/CD pipelines, issue tracking, and more in a single application. Key differences: GitLab offers built-in CI/CD without third-party tools, unlimited private repositories on free tier, integrated container registry, and self-hosting options with more features.",
    category: "GitLab",
    difficulty: "Medium",
    codeExample: `// GitLab CI/CD configuration (.gitlab-ci.yml)
stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - npm install
    - npm run build

test_job:
  stage: test
  script:
    - npm test

deploy_job:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main`
  },
  
  // GitHub Actions
  {
    id: 3,
    question: "What are GitHub Actions and how do they work?",
    answer: "GitHub Actions is a CI/CD platform that allows you to automate build, test, and deployment workflows directly in your GitHub repository. Workflows are defined in YAML files and triggered by events like push, pull requests, or schedules. They can run on various operating systems and integrate with third-party services.",
    category: "GitHub Actions",
    difficulty: "Medium",
    codeExample: `# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build project
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20`
  },
  
  // GitHub CLI
  {
    id: 4,
    question: "What is GitHub CLI (gh) and what can you do with it?",
    answer: "GitHub CLI (gh) is a command-line tool that brings GitHub to your terminal. It allows you to manage repositories, issues, pull requests, releases, and GitHub Actions without leaving the command line. Common operations include creating PRs, viewing issues, cloning repos, and managing workflows.",
    category: "GitHub CLI",
    difficulty: "Medium",
    codeExample: `# GitHub CLI common commands
gh repo create my-repo --public --clone
gh issue list --state open
gh pr create --title "Feature" --body "Description"
gh pr review --approve
gh pr merge --squash
gh run list
gh release create v1.0.0 --notes "First release"
gh repo clone username/repository
gh auth login`
  },
  
  // Git Rebase
  {
    id: 5,
    question: "What is git rebase and how does it differ from merge?",
    answer: "Git rebase is a command that integrates changes from one branch into another by rewriting commit history. Unlike merge which creates a merge commit, rebase moves the entire branch to begin on the tip of another branch, creating a linear history. Rebase commits, while merge preserves the actual timeline.",
    category: "Rebase",
    difficulty: "Medium",
    codeExample: `# Basic rebase usage
git checkout feature-branch
git rebase main
# Feature branch commits are reapplied on top of main

# Rebase vs Merge
# Merge: Creates merge commit, preserves history
git checkout main
git merge feature-branch

# Rebase: Linear history, cleaner but rewrites commits
git checkout feature-branch
git rebase main
git checkout main
git merge feature-branch

# Interactive rebase
git rebase -i HEAD~3
# Commands: pick, reword, edit, squash, fixup, drop`
  },
  
  // Git Configuration
  {
    id: 6,
    question: "How do you configure Git at global and local levels?",
    answer: "Git uses three configuration levels: system (/etc/gitconfig), global (~/.gitconfig), and local (.git/config). Settings include user name, email, aliases, merge tools, and behavior preferences. Local config overrides global, which overrides system. Use 'git config' command with different flags to set configurations.",
    category: "Configuration",
    difficulty: "Easy",
    codeExample: `# Global configuration (user-specific)
git config --global user.name "John Doe"
git config --global user.email "john@example.com"
git config --global core.editor "code --wait"
git config --global init.defaultBranch main

# Aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.lg "log --oneline --graph"

# Local configuration (repository-specific)
git config --local user.name "Project Name"

# List all configurations
git config --list
git config --global --list

# Configuration file locations
cat ~/.gitconfig        # Global
cat .git/config         # Local`
  },
  
  // Git Branch
  {
    id: 7,
    question: "Explain Git branching strategies and best practices?",
    answer: "Git branching strategies include Git Flow (main, develop, feature, release, hotfix branches), GitHub Flow (feature branches from main), and Trunk-Based Development (short-lived branches). Best practices: use descriptive branch names, keep branches short-lived, delete merged branches, and protect main/master branch with branch protection rules.",
    category: "Branching",
    difficulty: "Medium",
    codeExample: `# Branch operations
# Create and switch to new branch
git checkout -b feature/user-authentication

# List branches
git branch                    # Local branches
git branch -r                 # Remote branches
git branch -a                 # All branches

# Switch branches
git checkout main
git switch develop

# Delete branches
git branch -d feature/complete    # Local
git push origin --delete feature  # Remote

# Branch naming conventions
feature/add-login
bugfix/fix-header-crash
hotfix/security-patch
release/v1.2.0`
  },
  
  // Git Fetch
  {
    id: 8,
    question: "What does 'git fetch' do and how is it different from 'git pull'?",
    answer: "Git fetch downloads objects and references from remote repository to local without merging them into your working directory. It updates remote-tracking branches (origin/main, etc.) but doesn't change your current work. Pull = fetch + merge. Fetch is safer because it lets you review changes before integrating them.",
    category: "Fetch",
    difficulty: "Easy",
    codeExample: `# Fetch all branches from remote
git fetch origin
git fetch --all

# Fetch specific branch
git fetch origin main

# Compare fetched changes before merging
git fetch origin
git diff main origin/main

# See what would be updated
git fetch --dry-run

# Fetch and prune deleted remote branches
git fetch --prune

# Fetch tags
git fetch --tags

# Pull = fetch + merge
git pull origin main    # Fetches AND merges`
  },
  
  // Git Pull
  {
    id: 9,
    question: "Explain 'git pull' and its different strategies?",
    answer: "Git pull fetches changes from remote and integrates them into the current branch. Strategies include: default merge (fetch + merge), rebase (fetch + rebase), and only fetch. pull.rebase configuration can be set globally or per-repository. Use --rebase flag for linear history, or --no-rebase for merge commits.",
    category: "Pull",
    difficulty: "Medium",
    codeExample: `# Basic pull
git pull origin main

# Pull with rebase (linear history)
git pull --rebase origin main

# Pull with merge commit (preserves timeline)
git pull --no-rebase origin main

# Configure default pull behavior
git config --global pull.rebase true  # Always rebase
git config --global pull.ff only      # Only fast-forward

# Pull specific branch and set upstream
git pull origin feature-branch
git branch --set-upstream-to=origin/feature-branch

# Handle conflicts during pull
git pull --no-commit  # Fetch but don't auto-commit merge`
  },
  
  // Git Merge
  {
    id: 10,
    question: "What are the different types of Git merges?",
    answer: "Git merges include: Fast-forward merge (linear history, no merge commit), Three-way merge (creates merge commit when branches diverged), Recursive merge (default strategy), and Squash merge (combines all commits into one). Types differ based on branch structure and desired history cleanliness.",
    category: "Merges",
    difficulty: "Medium",
    codeExample: `# Fast-forward merge (no merge commit)
git checkout main
git merge --ff-only feature  # Only if ff possible

# Three-way merge (creates merge commit)
git checkout main
git merge feature

# Squash merge (combines all commits)
git checkout main
git merge --squash feature
git commit -m "Add feature X"

# Merge strategies
git merge -s recursive feature
git merge -s ours feature    # Keep our version
git merge -s subtree feature

# Abort merge on conflict
git merge --abort`
  },
  
  // Git Push
  {
    id: 11,
    question: "Explain 'git push' and different push options?",
    answer: "Git push uploads local repository content to remote repository. Options include: -u (set upstream), --force (overwrite remote history), --force-with-lease (safer force push), --tags (push tags), --delete (delete remote branch), and --all (push all branches). Pushing rewrites remote refs with local refs.",
    category: "Push",
    difficulty: "Medium",
    codeExample: `# Basic push
git push origin main

# Set upstream and push
git push -u origin feature-branch

# Force push (dangerous - rewrites history)
git push --force origin main

# Safer force push
git push --force-with-lease origin main

# Delete remote branch
git push origin --delete feature-branch

# Push all branches
git push --all origin

# Push tags
git push --tags origin

# Push specific commit
git push origin <commit-hash>:main`
  },
  
  // Git Commit
  {
    id: 12,
    question: "What are best practices for Git commits and how to manage them?",
    answer: "Best practices: write meaningful commit messages following conventional commits format, keep commits atomic and focused, commit often with working code, and use present tense. Management tools: git commit --amend to modify last commit, git rebase -i to squash/reword commits, and git cherry-pick for selective commits.",
    category: "Commit",
    difficulty: "Medium",
    codeExample: `# Conventional commit format
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login redirect bug"
git commit -m "docs: update API documentation"
git commit -m "style: format code with prettier"
git commit -m "refactor: extract validation logic"
git commit -m "test: add unit tests for auth"

# Modify last commit
git commit --amend -m "Updated message"
git commit --amend --no-edit  # Add changes to last commit

# Commit best practices
git add -p  # Partial staging
git commit -v  # Show diff in editor
git commit --signoff  # Add Signed-off-by

# Cherry-pick commits
git cherry-pick <commit-hash>`
  },
  
  // .gitignore
  {
    id: 13,
    question: "What is .gitignore and how to use it effectively?",
    answer: ".gitignore is a file that tells Git which files/folders to ignore in a project. Common patterns include: node_modules/, .env files, build artifacts, OS files, IDE configs, and logs. Use patterns with wildcards, negation (!), comments (#), and directory-specific ignore files. Global .gitignore can be configured for personal preferences.",
    category: "GitIgnore",
    difficulty: "Easy",
    codeExample: `# .gitignore examples

# Dependencies
node_modules/
vendor/
.pnp

# Build outputs
dist/
build/
out/
*.bundle.js
*.map

# Environment variables
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Testing
coverage/
.nyc_output/

# Negation example
*.log
!important.log  # Track important.log

# Global gitignore
git config --global core.excludesfile ~/.gitignore_global`
  },
  
  // Git Automation
  {
    id: 14,
    question: "How to automate Git workflows and operations?",
    answer: "Git automation can be achieved through Git hooks (pre-commit, pre-push hooks), GitHub Actions, GitLab CI/CD, shell scripts, and Git aliases. Automation includes: auto-formatting code before commit, running tests on push, auto-deploying on main branch, creating release tags, and syncing branches.",
    category: "Automation",
    difficulty: "Hard",
    codeExample: `# Git hooks (.git/hooks/pre-commit)
#!/bin/sh
# Run linter before commit
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed. Commit aborted."
  exit 1
fi

# Pre-push hook - run tests
#!/bin/sh
npm test

# Git alias for automation
git config --global alias.autodeploy
git config --global alias.sync '!git fetch --all && git pull --rebase && git push'

# Bash script for automation
#!/bin/bash
BRANCH=$(git branch --show-current)
git add .
git commit -m "Auto commit"
git push origin $BRANCH

# GitHub Action automation (reuse from earlier)`
  },
  
  // Git Worktree
  {
    id: 15,
    question: "What is Git Worktree and when should you use it?",
    answer: "Git Worktree allows you to have multiple branches checked out simultaneously in different directories from the same repository. It's useful for: reviewing old versions without stashing changes, running tests on different branches concurrently, creating hotfixes while working on features, and comparing branch behaviors side-by-side.",
    category: "Git Worktree",
    difficulty: "Hard",
    codeExample: `# Create a new worktree
git worktree add ../project-hotfix hotfix
git worktree add -b new-feature ../project-feature main

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../project-hotfix

# Move worktree
git worktree move ../project-hotfix ../project-fix

# Prune worktree references
git worktree prune

# Use case: Maintain two versions simultaneously
cd ~/project          # Main branch
git worktree add ../project-old v1.0  # Old version
# Now you have both versions accessible`
  },
  
  // Git Bisect
  {
    id: 16,
    question: "What is git bisect and how does it help find bugs?",
    answer: "Git bisect is a binary search tool that helps find the commit that introduced a bug. It works by checking out commits between good and bad markers, letting you test each one, and narrowing down the problematic commit. It's efficient for large commit histories, reducing search time from O(n) to O(log n).",
    category: "Git Tools",
    difficulty: "Hard",
    codeExample: `# Start bisect
git bisect start

# Mark current commit as bad
git bisect bad

# Mark known good commit
git bisect good v1.0

# Git checks out middle commit automatically
# Test and mark
git bisect good  # If current commit is good
git bisect bad   # If current commit is bad

# Automate with script
git bisect run npm test

# End bisect session
git bisect reset

# Visualize bisect
git bisect visualize`
  },
  
  // Git Reflog
  {
    id: 17,
    question: "What is git reflog and how to recover lost commits?",
    answer: "Git reflog (reference log) records when branch tips and other references are updated locally. It's a safety net that tracks all movements of HEAD and allows recovery of commits that appear 'lost' after rebase, reset, or amend operations. Reflog entries expire after 90 days by default.",
    category: "Git Tools",
    difficulty: "Medium",
    codeExample: `# View reflog
git reflog
git reflog show HEAD@{2}

# Recover lost commit
git reflog
# Find commit hash abc123...
git checkout abc123

# Reset to previous state
git reset --hard HEAD@{1}

# Show reflog with details
git log -g --oneline

# Clean reflog entries
git reflog expire --expire=now --all

# Save reflog to file
git reflog > reflog-backup.txt`
  },
  
  // Git Stash
  {
    id: 18,
    question: "How to use git stash to save unfinished work?",
    answer: "Git stash temporarily saves uncommitted changes (both staged and unstaged) without committing. Use cases: switching branches with dirty working directory, pulling remote changes without committing WIP, and saving experiments. Stashes are stored on a stack and can be applied to any branch.",
    category: "Git Tools",
    difficulty: "Medium",
    codeExample: `# Save current changes
git stash
git stash push -m "WIP: feature implementation"

# List stashes
git stash list

# Apply latest stash (keeps stash)
git stash apply
git stash apply stash@{1}

# Pop latest stash (removes stash)
git stash pop

# Create stash from specific files
git stash push -- src/components

# Include untracked files
git stash -u

# Create branch from stash
git stash branch new-branch

# Clear all stashes
git stash clear

# Show stash diff
git stash show -p`
  },
  
  // Git Submodules
  {
    id: 19,
    question: "What are Git submodules and how to manage them?",
    answer: "Git submodules allow you to include and track external repositories within your main repository. They're useful for managing dependencies, shared libraries, or components. Each submodule is an independent Git repository linked at a specific commit. Management includes adding, updating, synchronizing, and removing submodules.",
    category: "Git Tools",
    difficulty: "Hard",
    codeExample: `# Add submodule
git submodule add https://github.com/user/lib.git libs/lib
git submodule add -b main https://github.com/user/utils.git utils

# Clone with submodules
git clone --recurse-submodules <repo-url>
git submodule update --init --recursive

# Update submodules
git submodule update --remote

# Pull submodule changes
git submodule foreach git pull origin main

# Update all submodules
git submodule update --remote --merge

# Remove submodule
git submodule deinit -f libs/lib
git rm -f libs/lib
rm -rf .git/modules/libs/lib

# Show submodule status
git submodule status`
  },
  
  // Git Cherry-pick
  {
    id: 20,
    question: "What is git cherry-pick and when to use it?",
    answer: "Git cherry-pick applies specific commits from one branch to another without merging entire branches. Common use cases: backporting bug fixes to release branches, selectively applying features, recovering lost commits, and moving specific changes between branches. It creates new commits with different SHAs but same changes.",
    category: "Git Tools",
    difficulty: "Medium",
    codeExample: `# Cherry-pick single commit
git cherry-pick abc123

# Cherry-pick range of commits
git cherry-pick abc123..def456

# Cherry-pick multiple commits
git cherry-pick abc123 def456 ghi789

# Cherry-pick with options
git cherry-pick -n abc123      # Don't auto-commit
git cherry-pick -x abc123      # Add source reference
git cherry-pick --signoff abc123

# Continue after conflict
git cherry-pick --continue
git cherry-pick --abort
git cherry-pick --quit

# Edit commit message
git cherry-pick -e abc123`
  }
];

export const categories = [
  { id: 'all', name: 'All Questions', icon: '📚', count: gitQuestions.length },
  { id: 'github-platform', name: 'GitHub Platform', icon: '🐙', count: gitQuestions.filter(q => q.category === 'GitHub Platform').length },
  { id: 'gitlab', name: 'GitLab', icon: '🦊', count: gitQuestions.filter(q => q.category === 'GitLab').length },
  { id: 'github-actions', name: 'GitHub Actions', icon: '⚡', count: gitQuestions.filter(q => q.category === 'GitHub Actions').length },
  { id: 'github-cli', name: 'GitHub CLI', icon: '💻', count: gitQuestions.filter(q => q.category === 'GitHub CLI').length },
  { id: 'rebase', name: 'Rebase', icon: '🔄', count: gitQuestions.filter(q => q.category === 'Rebase').length },
  { id: 'configuration', name: 'Configuration', icon: '⚙️', count: gitQuestions.filter(q => q.category === 'Configuration').length },
  { id: 'branching', name: 'Branching', icon: '🌿', count: gitQuestions.filter(q => q.category === 'Branching').length },
  { id: 'fetch', name: 'Fetch', icon: '⬇️', count: gitQuestions.filter(q => q.category === 'Fetch').length },
  { id: 'pull', name: 'Pull', icon: '📥', count: gitQuestions.filter(q => q.category === 'Pull').length },
  { id: 'merges', name: 'Merges', icon: '🔀', count: gitQuestions.filter(q => q.category === 'Merges').length },
  { id: 'push', name: 'Push', icon: '📤', count: gitQuestions.filter(q => q.category === 'Push').length },
  { id: 'commit', name: 'Commit', icon: '💾', count: gitQuestions.filter(q => q.category === 'Commit').length },
  { id: 'gitignore', name: 'GitIgnore', icon: '🚫', count: gitQuestions.filter(q => q.category === 'GitIgnore').length },
  { id: 'automation', name: 'Automation', icon: '🤖', count: gitQuestions.filter(q => q.category === 'Automation').length },
  { id: 'git-worktree', name: 'Git Worktree', icon: '🌲', count: gitQuestions.filter(q => q.category === 'Git Worktree').length },
  { id: 'git-tools', name: 'Git Tools', icon: '🔧', count: gitQuestions.filter(q => q.category === 'Git Tools').length },
];