---
title:  Branching
---

You can also use branches via Git.

You can use branches to:

- Develop new features
- Bug fixes
- Experiment with new ideas without influencing your production code (code that is online)

This is a walkthrough to work with 2 branches, namely `develop` and `main` branches. You can find the production ready code on the `main` branch. On the `develop` branch, on the other hand, you can commit code that is not yet completely ready to show to your end user.

Once you're happy with the (bug-free) code in the `develop` branch, you can merge it into the `main` branch. This process is explained further.

You continue working on the current project.

Create a branch `develop` by executing the following command:

```bash
git branch develop
```

Get an overview of all the branches

```bash
git branch
```

Now that we have created a new `develop` branch, we can switch to it by running `git switch develop`:

```bash
git switch develop
```

Make some commits on the `develop` branch.

We would now like to merge our code from `develop` with our `main` code, so that both branches contain the same code (now `develop` has more commits than `main`, i.e. `develop` stands before `main`). For this we first have to switch back to our `main` branch and merge `develop` into it in a next step:

```bash
git switch main
```

The merge of `develop` in `main` is done by the `git merge` command:

```bash
git merge develop main
```

Switch back to `develop` immediately, so you don't accidentally develop in the `main` branch (we want our `develop` branch to always have the most recent code):

```bash
git switch develop
```

## Master/main

Historically, often the terms 'master' and 'slave' were used to name branches. In hindsight, these were offensive to say the least, so a more inclusive alternative 'main' became the default branch on many platforms.

That is why you will come across some 'master' branches in code examples or tutorials.

A 'main' branch doesn't have any superpowers or other special features, in the end, it is just a name.

You can easily rename a branch with the following command:

```bash
git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME
```

If you like to gain some more background information on this, you can [read this article](https://www.theserverside.com/feature/Why-GitHub-renamed-its-master-branch-to-main)
