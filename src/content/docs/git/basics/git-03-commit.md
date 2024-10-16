---
title: Track & commit files
---

## Commit

Create a new file hello.txt with the text "hello world":

```bash
echo "hello world" > hello.txt
```

Execute the `git status` command again:

```bash
$ git status
# On branch main
#
# No commits yet
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
# hello.txt
# nothing added to commit but untracked files present (use "git add" to track)
```

Git informs us that there are files in your directory that are not yet tracked by Git (untracked files present). If you want to keep track of the files, you have to add them with the `git add` command:

```bash
$ git add hello.txt
$ git status
# On branch main
#
# No commits yet
#
# Changes to be committed:
#   (use "git restore --staged <file>..." to unstage)
#
# new file:   hello.txt
```

Now git is aware of that file. This does not mean that git will automatically take a snapshot of every change to that file. You have to decide when to take a snapshot of the changes in your file(s) and add it to your git history. You do this by executing a commit:

```bash
$ git commit -m "first commit"
[main (root-commit) 5588c39] first commit
1 file changed, 1 insertion(+)
create mode 100644 hello.txt
```

`git add` and `git commit` are two commands that you will use a lot when working with git.

## Modify files

Edit the contents of the file to "hello devine", and execute the git status command:

```bash
$ echo "hello devine" > hello.txt
$ git status
# On branch main
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git restore <file>..." to discard changes in working directory)
#
# modified:   hello.txt
# no changes added to commit (use "git add" and/or "git commit -a")
```

Git has detected changes to an already tracked file. You will need to "add" this file again to queue the changes for a commit (called stage for commit):

```bash
git add hello.txt
```

Commit the changes:

```bash
$ git commit -m "changed world to devine"
[main 7f65053] changed world to devine
1 file changed, 1 insertion(+), 1 deletion(-)
```

You can add and commit multiple changes in a single command of course. Edit the text, and create a second file:

```bash
echo "hello dev" > hello.txt
echo "hello" > world.txt
```

Git status will now report 2 things: modifying an already tracked file, and detecting a new file that is not yet tracked:

```bash
$ git status
On branch main
Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)
      modified:   hello.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
      world.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

You can now stage these two files separately by executing a git add twice, but you can also do this at once, by using `git add .`

```bash
$ git add .
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
    modified:   hello.txt
    new file:   world.txt
```

Now both are staged for commit, and with a single commit you can log them into the git repository:

```bash
$ git commit -m "welcome + new world file"
  [main 9720321] welcome + new world file
    2 files changed, 2 insertions(+), 1 deletion(-)
    create mode 100644 world.txt
```

### `git add -A .`

We've seen before that with `git add .` you can stage all changes before commit. Keep in mind that deletes (deleting files) are not staged. To do that, you need to add the -A flag to the command.

## GUI

It is important to know how to work with git via the command line. Without understanding the basic commands, it is impossible to understand more complex commands that you will need sooner or later.

That said, for some very common commands, it can become cumbersome to execute them all the time. Luckily for us, some GIT functionality is baked in VS Code already. See [this paragraph about commits](https://code.visualstudio.com/docs/editor/versioncontrol#_commit) for more information.
