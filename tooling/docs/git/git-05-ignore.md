# Ignore files

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

We just created a commit removing the `notme` folder. However, there is still a commit where these `notme` are present, this way our repo can become unnecessary large. Or if we committed sensitive data like passwords and such, this can become a problem. If you want to remove folders or files from the entire history of your project, you have to go one step further.

You can edit the git history using the git `filter-branch` command. To clear our `notme` folder, let's do the following:

```bash
git filter-branch --tree-filter 'rm -rf notme' HEAD
WARNING:  git-filter-branch has a glut of gotchas generating mangled history rewrites
          Hit Ctrl-C before proceeding to abort, then use an
          alternative filtering tool such as 'git filter-repo'
          (https://github.com/newren/git-filter-repo/) instead.  See the
          filter-branch manual page for more details; to squelch this warning,
          set FILTER_BRANCH_SQUELCH_WARNING=1.
Proceeding with filter-branch...

Rewrite 2d9ab38218ad42d0cc14d89fa42a313df6afce5d (1/1) (0 seconds passed, remaining 0 predicted)
Ref 'refs/heads/main' was rewritten
```

The folder will be deleted on your file system and in the history. But this workflow isn't ideal. We could easely add that directory again. It's impossible to keep track of all the files you want or don't want to track yourself. We will fix this by using a `.gitignore` file.

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

---

[Next: Branches](git-06-branches)
