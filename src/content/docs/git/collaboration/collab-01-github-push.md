---
title: Collaboration with git
---

So far we have worked locally with git. You can also collaborate with several people on 1 repository by working with a remote server. Everyone has a local copy of the repository, and can synchronize their changes via a remote server with other people who have the repository.

In theory, you can use any computer on which you have installed the git command tools as a server. It's just not that practical to work together from home, you have to make sure that your computer can be reached externally and everyone who works together must know your ip address or hostname.

That is why we use a hosted git environment. There are several options for this, we will use [GitHub](https://github.com/)

## Create repository & first push

<details>
<summary>Looking for the starting files?</summary>

The ideal way to follow this walkthrough is to go over the previous topics first. If you want to skip to this topic, you can [download the starting files here.](https://github.com/devinekask/workflows-git-steps/archive/refs/heads/step/branches.zip)

Be aware that you will have to initialize a git repository first via `git init` in the unzipped folder.

</details>

Login to your GitHub account, and click the "New repository" button. Choose a name for your repository and click the "Create Repository" button.

Don't add a `readme.md` or a `.gitignore` file yet. Since we will sync this repo with an existing one (the one we created in a previous chapter) things will get complicated if there are files on both ends. (It is definitely possible to fix this, but we won't go in to that now) If you would start completely from scratch, this wouldn't be an issue.

Open a terminal window and navigate via `cd` commands to the directory of the git repository containing the "hello world" files. We will make sure that we can synchronize our local repository via GitHub, by adding a "remote". A remote is a location where you can synchronize a git repository:

(don't forget to change `git@github.com:demouser/hellogit.git` with your own repository url, you can find it under the green 'code' button on your GitHub repository.)

```bash
$ git remote add origin git@github.com:demouser/hellogit.git
$ git push -u origin main
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 12 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (17/17), 8.98 KiB | 4.49 MiB/s, done.
Total 17 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
To git@github.com:demouser/hellogit.git
    * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

The `git push` command will upload local, unsynchronized changes to the remote location. You use the `-u` attribute the very first time, to ensure that you don't have to specify the remote name in future synchronizations. You can then just run `git push` in the future.

### Git add - commit - push

From now on you can start pushing commits to the online repository. Usually you bundle several local commits when you push. In fact, we already did this with our first push: all the commits we ran earlier are now also in the online repository.

Delete the `world.txt` file, add commit. We use `git add -u .` to ensure that the delete action of that file is staged:

```bash
$ rm world.txt
$ git add -u .
$ git commit -m "removed world file"
[main 0b0d3b8] removed world file
    1 file changed, 1 deletion(-)
    delete mode 100644 world.txt
```

Create a README.md file, with a little info about the repository:

```bash
$ echo "Demo repository" > README.md
$ git add .
$ git commit -m "added readme file"
[main a8515e0] added readme file
    1 file changed, 1 insertion(+)
    create mode 100644 README.md
```

Execute `git status`. You can see in the status report that the repository is 2 commits ahead of the online version:

```bash
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
(use "git push" to publish your local commits)
nothing to commit (working directory clean)
```

Execute `git push` to put your commits on GitHub:

```bash
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 12 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 488 bytes | 488.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To git@github.com:demouser/hellogit.git
    f1e8b69..a8515e0  main -> main
```

When you view the repository through your browser, you will see that the contents of the `README.md` file are shown below the list of files. This is a file in the Markdown format. (the same for the file you are reading now...) Markdown is a simple markup language for formatting documents. More information about this can be found on [Wikipedia](http://en.wikipedia.org/wiki/Markdown) or this [GitHub specific flavor](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
