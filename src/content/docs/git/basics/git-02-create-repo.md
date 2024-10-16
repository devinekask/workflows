---
title: Create a new git-repository
---

You can turn any existing directory into a git repository with the `git init` command. It doesn't matter if there are already files or subfolders in it. We will start with a new empty directory, but know that this is not necessary to manage a project via git.

Create a new directory and make it a git repository.

```bash
$ mkdir project
$ cd project
$ git init
Initialized empty Git repository in /Users/myname/Documents/project/.git/
```

The `git init` command will create a hidden folder called .git. This contains all information about the repository & its history.

Via the `git status` command you can get some more information about the current status of the repository. You often use this command to see which files have been changed, whether there are new files, or whether files have been deleted.

```bash
$ git status
# On branch main
#
# No commits yet
# nothing to commit (create/copy files and use "git add" to track)
```

## Heads up

Be aware where exactly you initialize the new repository. You wouldn't be the first to accidentally put its whole documents directory under source control. If you are not entirely sure where you are, run the command `pwd` to **p**rint the current **w**orking **d**irectory.
