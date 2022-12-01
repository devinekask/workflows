# Merge conflicts

So far we have only made changes in separate files. However, it can happen that you have made changes to the same file with 2 people, and that a conflict occurs.

In the `project` folder, edit the text in `hello.txt` and push it to the remote repository:

```bash
project_1 $ echo "edit in project" > hello.txt
project_1 $ git add .
project_1 $ git commit -m "changed hello.txt"
[main f1c4e08] changed hello.txt
  1 file changed, 1 insertion(+), 1 deletion(-)

project_1 $ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 284 bytes | 284.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To git@github.com:demouser/hellogit.git
    8f2400d..f1c4e08  main -> main
```

Also edit the text of hello.txt in the project2 folder

```bash
project_2 $ echo "edit in project2" > hello.txt
project_2 $ git add .
project_2 $ git commit -m "changed hello.txt in project2"
[main 45b7ea9] chenged hello.txt in project2
  1 file changed, 1 insertion(+), 1 deletion(-)

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

We first pull before we can push

```bash
project_2 $ git pull --rebase
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), done.
From git@github.com:demouser/hellogit
    8f2400d..f1c4e08  main       -> origin/main
First, rewinding head to replay your work on top of it...
Applying: chenged hello.txt in project2
Using index info to reconstruct a base tree...
M hello.txt
Falling back to patching base and 3-way merge...
Auto-merging hello.txt
CONFLICT (content): Merge conflict in hello.txt
error: Failed to merge in the changes.
Patch failed at 0001 chenged hello.txt in project2
hint: Use 'git am --show-current-patch' to see the failed patch
Resolve all conflicts manually, mark them as resolved with
"git add/rm <conflicted_files>", then run "git rebase --continue".
You can instead skip this commit: run "git rebase --skip".
    To abort and get back to the state before "git rebase", run "git rebase --abort".
```

We get a merge conflict, because we changed the same file in both repositories. Now, we need to resolve this conflict before the rebase can continue.

Via `git status` you can request a list of the merge conflicts:

```bash
project_2 $ git status
rebase in progress; onto f1c4e08
You are currently rebasing branch 'main' on 'f1c4e08'.
  (fix conflicts and then run "git rebase --continue")
  (use "git rebase --skip" to skip this patch)
  (use "git rebase --abort" to check out the original branch)

Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add <file>..." to mark resolution)

both modified:   hello.txt
no changes added to commit (use "git add" and/or "git commit -a")
```

You will be notified that you are rebasing. At "Unmerged paths" you see the files that are in conflict. You must first resolve the conflict by editing the file before continuing with the rebase.

Open the txt-file in a text editor. You notice that the content from `project` and `project2` is present:

```diff
    <<<<<<< HEAD
    edit in project
    =======
    edit in project2
    >>>>>>> changed hello.txt in project2
```

Adjust the text to:

```txt
edit in project
and edit in project2
```

Add this to the rebase action and use the 'continue' flag

```bash
project_2 $ git add hello.txt
project_2 $ git rebase --continue
Applying: changed hello.txt in project2
```

Now when you execute git status, you will see that you are on the main branch again, and you are 1 commit ahead of the remote:

```bash
project_2 $ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
nothing to commit (working directory clean)
```

Now you can push again to the remote

```bash
project_2 $ git push
Counting objects: 5, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 326 bytes, done.
Total 3 (delta 0), reused 0 (delta 0)
To git@github.com:demouser/hellogit
    7f3b200..920c81f  main -> main
```

Execute `git pull` in the other folder so that both are synced again.

## Visually resolve conflicts

If you like a more visual way, you can [resolve merge conflicts in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_merge-conflicts)
