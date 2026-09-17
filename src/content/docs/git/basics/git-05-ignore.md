---
title: Ignore files
---

<details>
<summary>Looking for the starting files?</summary>

The ideal way to follow this walkthrough is to go over the previous topics first. If you want to skip to this topic, you can [download the starting files here.](https://github.com/devinekask/workflows-git-steps/archive/refs/heads/step/undo.zip)

Be aware that you will have to initialize a git repository first via `git init` in the unzipped folder.

</details>

It won't be necessary to keep track of all the files in a project folder via Git. For example, it is not a good idea to track a `node_modules` (see later) or `uploads` folder in your repository. Also hidden system files, such as `.DS_Store` are of no use in a repository.

Let us work with an example. Create a dummy project like this:

```bash
mkdir dummy-project
cd dummy-project
touch file
mkdir notme
touch notme/forgetaboutme
```

If everything went well, you should have a file structure like this:

```bash
`-- dummy-project
    |-- file
    `-- notme
        `-- forgetaboutme
```

We will commit everything, including `notme`, "by accident" to set it straight afterwards

```bash
$ git init
Initialized empty Git repository in /Users/demouser/Documents/dummy-project/.git/
$ git add .
$ git commit -m "initial commit"
[main (root-commit) 2d9ab38] initial commit
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 file
 create mode 100644 notme/forgetaboutme
```

## Delete files

You have now added the entire project, including the `notme`, to your git repository.
Whoops, we will now correct this error:

```bash
$ git rm -r --cached notme
rm 'notme/forgetaboutme'
```

The --cached option causes the file to be deleted from the repository index, but remains in your file system.

A git status now gives the following result:

```bash
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
  deleted:    notme/forgetaboutme

Untracked files:
  (use "git add <file>..." to include in what will be committed)
  notme/
```

Add commit this deletes by using the flag -A in the add command:

```bash
$ git add -A .
$ git commit -m "removed notme folder"
On branch main
nothing to commit, working tree clean
```

### Delete files & folders from the commit history

We just created a commit removing the `notme` folder. But the folder is only gone from *now on*: the first commit still contains it. Git keeps every version of every file it has ever tracked, so everyone who clones this repository still downloads `notme` along with it. Most of the time that is harmless: a bit of dead weight in the history, and you move on.

If you genuinely need it gone (the repository has ballooned to 400 MB, or you committed something sensitive like a password or an API key), you have to **rewrite history**.

:::caution[Rewriting history is not a free undo]
Rewriting changes **every commit hash** from that point on. Every existing clone becomes incompatible: your teammates can no longer `git pull`, they have to throw away their clone and clone again. Don't do this on a branch you share with others without warning them first.

And if you are doing this because you leaked a secret: consider that secret burned. It has been on GitHub, in other people's clones, in CI logs and in backups. Rewriting history does not unleak it, so **change the password or revoke the key** as well.
:::

The tool for the job is `git filter-repo`. Older tutorials will point you to `git filter-branch` instead, but Git itself tells you not to when you reach for it:

```bash
WARNING: git-filter-branch has a glut of gotchas generating mangled history
     rewrites.  Hit Ctrl-C before proceeding to abort, then use an
     alternative filtering tool such as 'git filter-repo'
```

#### Installing git-filter-repo

Unlike `filter-branch`, `filter-repo` does not ship with Git: you install it yourself. On macOS you can do that with [Homebrew](../../../homebrew-01-intro/):

```bash
brew install git-filter-repo
```

#### Removing the folder from the history

To clear our `notme` folder from every commit, we ask for that path and invert the selection: keep everything *except* this path.

```bash
$ git filter-repo --path notme --invert-paths
Aborting: Refusing to destructively overwrite repo history since
this does not look like a fresh clone.
  (refs/heads/main exists, but refs/remotes/origin/main not found)
Please operate on a fresh clone instead.  If you want to proceed
anyway, use --force.
```

That is `filter-repo` protecting you: because the rewrite is irreversible, it wants you to work on a fresh clone, so the original repository remains untouched as a backup. Our dummy project was never cloned from anywhere, and we have nothing to lose here, so we can insist:

```bash
$ git filter-repo --path notme --invert-paths --force
Parsed 1 commits
New history written in 0.04 seconds; now repacking/cleaning...
Repacking your repo and cleaning out old unneeded objects
Completely finished after 0.14 seconds.
```

The folder is now gone from your file system *and* from every commit in the history. Note that the commit hash changed, exactly as announced:

```bash
$ git log --oneline
5ab470d initial commit
```

:::note[Working with a remote]
After a rewrite, `filter-repo` deletes your `origin` remote. This is deliberate: your local history no longer matches the server's, so it wants you to make a conscious decision before pushing. Once you are sure about the result, you add the remote back and force the new history onto the server:

```bash
git remote add origin <your-repo-url>
git push --force --mirror origin
```

Everyone else on the project then has to re-clone.
:::

Rewriting history is a lot of ceremony to undo a single `git add .`. It is also easy to add that directory again by accident, and it's impossible to keep track of all the files you want or don't want to track yourself. Much better to never commit the file in the first place: we will fix this by using a `.gitignore` file.

## .gitignore

We will now specify which files we don't want to track in the future. This can be done with a `.gitignore` file. This is a text file in your repository that specifies which files and directories are allowed to be ignored by git.

Create a new file called `.gitignore` in the root of your repository. Give this the following content:

```text
.DS_Store
notme/
```

This will cause the `.DS_Store` file and the `notme` folder (& all its subfolders) to be ignored in the future.

Add and commit this file to include it in your repository.

```bash
git add .
git commit -m "added .gitignore"
```

In practice, you will create such a `.gitignore` file as one of your first files. This way you avoid "contaminating" your repository with unnecessary files, and you avoid drastic actions such as deleting folders & files from the history.
A list of useful .gitignore files can be found here: <https://github.com/github/gitignore>
