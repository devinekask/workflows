# Pull

## Pull existing repository

Once a repository has been created, and is on a server like GitHub, you can also download it from other computers/locations. Downloading the repository for the first time is done via the `git clone` command. From then on you can get updates via the `git pull` command. `git pull` is the inverse of `git push`, and you will use it to pull in updates you don't already have locally.

Open a second terminal window, navigate to the parent directory of your original git repository and create a directory where you will clone a duplicate of the repository:

```bash
mkdir project_2
cd project_2
```

Execute the git clone command to get the online repository (just change the url to your own repository)

```bash
$ git clone git@github.com:demouser/hellogit
Cloning into 'hellogit'...
remote: Enumerating objects: 22, done.
remote: Counting objects: 100% (22/22), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 22 (delta 3), reused 22 (delta 3), pack-reused 0
Unpacking objects: 100% (22/22), done.
```

You now have 2 clones from the same repository on your computer. One in the project folder and one in the project2 folder. We'll use these two to test syncs and merges.

### Push and pull

We simulate collaboration with 2 users by synchronizing in two different folders with the same remote (online repository). For the following actions, pay attention to the folder in which you execute the commands (from now on the project folder will always be in front of the dollar sign in the command to be executed).

Tip: you can open 2 terminal windows, set them side by side.

In **folder 1** we create a new file `project.txt`, we add, commit and push to the remote:

```bash
project_1 $ echo "created in project" > project.txt
project_1 $ git add .
project_1 $ git commit -m "added project.txt file"
[main 3dc1c52] add project.txt file
  1 file changed, 1 insertion(+)
  create mode 100644 project.txt

project_1 $ git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 300 bytes | 300.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To git@github.com:demouser/hellogit.git
    a8515e0..3dc1c52  main -> main
```

In **folder 2** we create a new file `project2.txt`, add & commit and try to push to the remote:

```bash
project_2 $ echo "created in project2" > project2.txt
project_2 $ git add .
project_2 $ git commit -m "added project2.txt file"
[main 3bdfe55] added project2.txt file
 1 file changed, 1 insertion(+)
 create mode 100644 project2.txt

project_2 $ git push
To git@github.com:demouser/hellogit
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'git@github.com:demouser/hellogit'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

We get an error: there are new commits on the remote that we haven't pulled into our project2 clone yet. We have to pull these first before we can do a push:

```bash
project_2 $ git pull
```

We are presented with a vim or nano editor to perform a merge. You can enter a custom message here. Enter `:quit` to close the vim editor and continue the merge.

```bash
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), done.
From git@github.com:demouser/hellogit
    a8515e0..3dc1c52  main       -> origin/main
Merge made by the 'recursive' strategy.
  project.txt | 1 +
  1 file changed, 1 insertion(+)
  create mode 100644 project.txt
```

When you execute `git status`, you will see that you are 2 commits ahead of the remote: 1 commit is the merge commit, and a second commit is the `project2.txt` commit:

```bash
project_2 $ git status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
nothing to commit (working directory clean)
```

Push the commits again to the remote. It succeeds this time.

```bash
project_2 $ git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 12 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 551 bytes | 551.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To git@github.com:demouser/hellogit
    3dc1c52..c18628a  main -> main
```

Now also get these commits in your first folder (don't forget to switch folders) via a `git pull` command:

```bash
project_1 $ git pull
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 5 (delta 2), reused 5 (delta 2), pack-reused 0
Unpacking objects: 100% (5/5), done.
From git@github.com:demouser/hellogit
    3dc1c52..c18628a  main       -> origin/main
Updating 3dc1c52..c18628a
Fast-forward
  project2.txt | 1 +
  1 file changed, 1 insertion(+)
  create mode 100644 project2.txt
```

## rebase

We will work with a centralized workflow for the time being: we work with several people on 1 main branch via 1 remote. There are other more advanced workflows that work through branches and forks. However, these are a bit more complex.

In the previous scenario, we added a merge commit to fast-forward an out-of-date repository. This is not optimal in a centralized workflow: it is better to use a rebase with the `git pull`. A rebase will execute all commits from the remote first, and execute your commits after it, instead of executing a merge commit by default.

Delete `project.txt` in the project folder:

```bash
project_1 $ rm project.txt
project_1 $ git add -u .
project_1 $ git commit -m "removed project.txt"
[main de80b79] removed project.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 project.txt

project_1 $ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 233 bytes | 233.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To git@github.com:demouser/hellogit.git
   c18628a..de80b79  main -> main
```

Then delete `project2.txt` in the `project2` folder. We will also have to do a pull here before we can push. The difference with the pull is that we pass a rebase flag, to ensure that all commits from the remote repository are executed first, and then our own commits:

```bash
project_2 $ rm project2.txt
project_2 $ git add -u .
project_2 $ git commit -m "removed project2.txt"
[main 6be65fb] removed project2.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 project2.txt

project_2 $ git pull --rebase
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 2 (delta 1), reused 2 (delta 1), pack-reused 0
Unpacking objects: 100% (2/2), done.
From git@github.com:demouser/hellogit
   c18628a..de80b79  main   ->  origin/main
First, rewinding head to replay your work on top of it...
Applying: removed project2.txt
```

This way, no merge commit is created. When you execute `git status` you see that you are now only 1 commit ahead of the remote repository, instead of 2:

```bash
project_2 $ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit (working directory clean)
```

Push to the remote repository. Also pull in the projects folder so that both repositories are up-to-date.
