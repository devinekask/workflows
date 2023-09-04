# Undo

Whoops, we messed up, what now?

## Undo changes after staging

Change the text again to "hello devine", stage these changes via the add command, but don't commit it yet:

```bash
$ echo "hello devine" > hello.txt
$ git add hello.txt
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)

  modified:   hello.txt
```

You get a hint on how to _unstage_ these changes: via git restore --staged:

```bash
git restore --staged hello.txt
```

The file is still changed, but the changes are not staged anymore.

```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)

  modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

You can now definitively undo this, by using --just like in the previous topic-- git restore:

```bash
git restore hello.txt
```

## Undo commits

Let's say you've committed some changes, but for some reason you want to undo them.

```bash
echo "hello devine" > hello.txt
git add hello.txt
git commit -m "changed, but not sure about it"
```

You can do 2 things: either create a new commit that undoes the changes from the previous commit (`git revert HEAD`), or completely clear the commit from history (`git reset --hard _reference-to-commit_`).

```bash
git revert HEAD
```

Your terminal will now display a vim or nano editor, into which you can type a commit message. Edit the default message if you want, and type in vim `:quit` when you're done. For nano, use Ctrl + X, followed by Yes.

```bash
[master 2bc740f] Revert "changed, but not sure about it"
  1 file changed, 1 insertion(+), 1 deletion(-)
```

The file will now contain the contents from before the last commit.

You can also set a different editor for the merge message edits. Instead of vim, nano is a more user-friendly alternative:

```bash
git config --global core.editor "nano"
```

By the way, you can view a repository's commit history with the `git log` command:

```bash
$ git log
commit 2bc740f2af93348267c6b3558e1037c5db540600 (HEAD -> master)
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:57:33 2025 +0200

    Revert "changed, but not sure about it"

    This reverts commit 8d977cb2d4855a782e261015645e017c1e128000.

commit 8d977cb2d4855a782e261015645e017c1e128000
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:56:55 2025 +0200

    changed, but not sure about it

commit 5aa411822d8546ef1cd73addc20a022a74deae91
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:54:26 2025 +0200

    changed, but not sure about it

commit 9720321677e0798b540b287398edeaadcb630b17
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:35:21 2025 +0200

    welcome + new world file

commit 7f65053ee86593fb29a3102e03f7ae3f44b112d7
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:32:22 2025 +0200

    changed world to devine

commit 5588c399cd15bc841c89158d72cc4d3938581196
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:30:22 2025 +0200

    first commit
```

You can see that the "wrong" commit is still in the git history, and the changes were undone via a new commit. Also note that each commit has a unique SHA1 hash ID. You can use these IDs to specify commits on certain commands.

A more drastic way to undo commits is with the `git reset` command. With git reset you are going to reset your working tree to a particular commit and delete all commits after that commit from the repository.

We want to go back to the state of our commit "welcome + new world file". Through git log, we find out that the SHA1 ID is `9720321677e0798b540b287398edeaadcb630b17`. Specify the SHA1 ID of the commit to where you want to reset after the command. You don't have to specify the entire ID: the first 4 characters are often sufficient (at least if they are unique):

```bash
$ git reset --hard 9720
HEAD is now at 9720321 welcome dev3 + new world file
```

Now when you run git log again, you will see that the commits after 9720 are gone:

```bash
$ git log
commit 9720321677e0798b540b287398edeaadcb630b17 (HEAD -> master)
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:35:21 2025 +0200

    welcome + new world file

commit 7f65053ee86593fb29a3102e03f7ae3f44b112d7
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:32:22 2025 +0200

    changed world to devine

commit 5588c399cd15bc841c89158d72cc4d3938581196
Author: Demo user <demo.user@howest.be>
Date:   Wed Sep 1 09:30:22 2025 +0200

    first commit
```

You will only use such a `git reset` command to undo local commits. Once you're collaborating with others, and commits have already been distributed to other users, you use the `git revert` command to create a new commit that undoes a previous commit.

## Resources

<https://ohshitgit.com/>
