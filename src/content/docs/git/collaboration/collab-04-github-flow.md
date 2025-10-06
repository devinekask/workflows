---
title: GitHub Flow
---

## Introduction to GitHub Flow

GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. It is designed to be simple and effective for continuous deployment.

The core idea behind GitHub Flow is that:

1. **Anything in the main branch is deployable**
2. **Start new work by creating clearly named branches from main**
3. **Commit to that branch locally and regularly push your work to the same named branch on the remote**
4. **When you need feedback or help, or you think the branch is ready for merging, open a pull request**
5. **After someone reviews and signs off on the feature, you can merge it into main** (If you're working solo, you can review and merge your own PR)
6. **Once it is merged and pushed to main, you can and should deploy immediately**

## Setting up GitHub Flow

Before we start, make sure you have:

- A GitHub account
- SSH keys configured (as covered in the previous collaboration chapter)
- A repository on GitHub

Let's create a new repository for practicing GitHub Flow. Go to GitHub and create a new repository called `github-flow-practice`.

```bash
# Clone the repository locally
git clone git@github.com:YOUR_USERNAME/github-flow-practice.git
cd github-flow-practice

# Create a basic README
echo "# GitHub Flow Practice" > README.md
git add README.md
git commit -m "Initial commit"
git push origin main
```

## Creating Feature Branches

In GitHub Flow, all development happens on feature branches. These branches are created from the main branch and are used to develop new features, fix bugs, or make other changes.

### Create a Feature Branch

Let's create a feature branch for adding a new feature to our project.

```bash
# Make sure you're on main and up to date
git switch main
git pull origin main

# Create and switch to a new feature branch
git switch -c feature/add-user-profile

# Verify you're on the new branch
git branch
```

**Follow-along:** Create a feature branch called `feature/add-navigation-menu` in your practice repository.

## Making Changes and Committing

Once on your feature branch, you can start making changes. Remember to commit regularly with descriptive messages.

```bash
# Create a new file for the user profile feature
echo "# User Profile Feature" > user-profile.md
git add user-profile.md
git commit -m "Add basic user profile structure"

# Make another change
echo "This feature allows users to view their profile." >> user-profile.md
git add user-profile.md
git commit -m "Add user profile description"
```

**Follow-along:** Add a file called `navigation.md` to your `feature/add-navigation-menu` branch with some content about navigation.

## Pushing to GitHub

Push your feature branch to GitHub so others can see your work and collaborate.

```bash
# Push the feature branch to GitHub
git push origin feature/add-user-profile

# If this is the first push of the branch, Git will tell you to set upstream
git push -u origin feature/add-user-profile
```

**Follow-along:** Push your `feature/add-navigation-menu` branch to GitHub.

## Creating a Pull Request

Once your feature is ready for review, create a Pull Request (PR) on GitHub.

1. Go to your repository on GitHub
2. Click on "Pull requests" tab
3. Click "New pull request"
4. Select your feature branch as the "compare" branch
5. Add a descriptive title and description
6. Click "Create pull request"

```bash
# After creating PR, you can continue working
# Make sure to push any additional commits to the same branch
echo "Added user avatar functionality" >> user-profile.md
git add user-profile.md
git commit -m "Add user avatar support"
git push origin feature/add-user-profile
```

**Follow-along:** Create a Pull Request for your navigation menu feature.

## Code Review and Merging

Once a PR is created, team members can review the code, leave comments, and suggest changes.

- **Review Process:**
  - Check the code for bugs, style issues, and adherence to standards
  - Test the changes if possible
  - Leave constructive feedback

- **Merging:**
  - When approved, merge the PR using "Squash and merge" or "Merge commit"
  - Delete the feature branch after merging

**Follow-along:** If working with others, ask them to review your PR. Otherwise, review your own code and merge it.

## Rebasing Latest Changes from Main into Feature Branch

As development continues on the main branch, your feature branch can become outdated. To incorporate the latest changes from main into your feature branch, you should rebase instead of merging. This keeps the history clean and linear.

### When to Rebase

- When your feature branch is behind main
- Before creating a PR to ensure your branch is up to date
- When you want to resolve conflicts locally before pushing

### How to Rebase

```bash
# Switch to your feature branch
git switch feature/add-user-profile

# Fetch latest changes from remote
git fetch origin

# Rebase your branch onto the latest main
git rebase origin/main

# If there are conflicts, resolve them and continue
# git add <resolved-files>
# git rebase --continue

# Push the rebased branch (force push since history changed)
git push origin feature/add-user-profile --force-with-lease
```

### Example: Rebasing with Conflicts

Let's simulate a scenario where main has changes that conflict with our feature branch.

```bash
# On main branch, someone adds a footer
echo "# Footer" > footer.md
git add footer.md
git commit -m "Add footer component"
git push origin main

# Now on our feature branch, we also modify footer.md
git switch feature/add-user-profile
echo "Navigation links here" > footer.md
git add footer.md
git commit -m "Add navigation to footer"

# Try to rebase
git rebase origin/main

# Git will show conflict in footer.md
# Edit footer.md to resolve conflict
# For example, combine both changes:
# # Footer
# Navigation links here

git add footer.md
git rebase --continue

# Push the resolved rebase
git push origin feature/add-user-profile --force-with-lease
```

### Exercise 2: Practice Rebasing

1. Create a new feature branch `feature/add-about-page`
2. On main, add a file called `about.md` with some content
3. On your feature branch, also add `about.md` with different content
4. Try to rebase your feature branch onto main
5. Resolve any conflicts
6. Push the rebased branch

**Follow-along:** Complete the above exercise in your practice repository.

## Best Practices for GitHub Flow

- **Keep branches short-lived:** Create branches for specific features or fixes
- **Use descriptive names:** `feature/add-user-authentication` instead of `my-feature`
- **Commit often:** Small, focused commits are easier to review
- **Write good commit messages:** Start with verb, be descriptive
- **Delete merged branches:** Keep repository clean
- **Use rebase for feature branches:** Maintain linear history
- **Test before merging:** Ensure changes don't break existing functionality

## Common Scenarios

### Scenario 1: Multiple Features in Parallel

```bash
# Developer 1
git switch -c feature/user-login
# Work on login feature...

# Developer 2
git switch -c feature/user-registration
# Work on registration feature...

# Both can work independently and create separate PRs
```

### Scenario 2: Hotfix on Main

```bash
# Urgent bug fix needed
git switch main
git pull origin main
git switch -c hotfix/security-patch
# Fix the security issue
git commit -m "Fix security vulnerability"
git push origin hotfix/security-patch
# Create PR and merge quickly
```
