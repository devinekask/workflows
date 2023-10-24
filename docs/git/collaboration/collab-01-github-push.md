# Collaboration with git

So far we have worked locally with git. You can also collaborate with several people on 1 repository by working with a remote server. Everyone has a local copy of the repository, and can synchronize their changes via a remote server with other people who have the repository.

In theory, you can use any computer on which you have installed the git command tools as a server. It's just not that practical to work together from home, you have to make sure that your computer can be reached externally and everyone who works together must know your ip address or hostname.

That is why we use a hosted git environment. There are several options for this, we will use [GitHub](https://github.com/)

## Create & link GitHub account

We will create a GitHub account and link our GitHub credentials to our computer, so that we don't have to re-enter our password every time.

Visit [https://github.com](https://github.com) and create an account. (with your @student.howest.be account) Then go to [https://education.github.com/pack](https://education.github.com/pack) and request an educational pack by clicking _Get your pack_, this will be useful to create private repositories.

Then open a terminal window. We'll link our name & email address to git so git knows who is doing a commit. Make sure your email address is the one you used to create your GitHub account:

```bash
git config --global user.name "Your Name Here"
git config --global user.email "your_email@student.howest.be"
```

## SSH key

The next steps are a summary of [this guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) When things should be unclear, you can read the guide in more detail.

To authenticate yourself with GitHub, you need to create an SSH key. This is a key that is stored on your computer and is used to authenticate yourself with GitHub. You can create a key with the following command:

```bash
ssh-keygen -t ed25519 -C "your_email@student.howest.be"
```

When asked for the location of the key, you can give the key a more describing name:

```bash
> Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM):
$ /Users/YOUR NAME/.ssh/github
```

You can press enter to leave the passphrase empty (this can be a security issue).

Now go to your .ssh directory to check if everything is there. You should see (at least) 2 files: `github` and `github.pub`

```bash
cd
cd .ssh
ls -al
```

### SSH agent

Make sure you are still in de .ssh directory.

Create a `config` file if there isn't one yet:

```bash
touch config
```

And open it in the editor of your choice. (We are using `code` here, see [Launching VS Code from the command line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

```bash
code config
```

Now add this to the config file and save it:

```config
Host *
  AddKeysToAgent yes
  IdentityFile ~/.ssh/github
```

(note that we didn't add the UseKeychain option --as mentioned in the guide-- since we are not using a passphrase)

Now we can add the key to the ssh-agent:

```bash
ssh-add github
```

### Adding the key to GitHub

Copy the contents of the public key (make sure you are in the .ssh directory) the command `pbcopy` lets us put content in our clipboard, it is like a 'cmd-c'

```bash
pbcopy < github.pub
```

On GitHub, go to Settings → SSH and GPG keys → New/add SSH key → Give it a descriptive name (e.g. "Macbook") → Paste the key → Add SSH key

You can test if everything is working by running the following command:

```bash
ssh -T git@github.com
```

Remember to choose the SSH option (instead of the HTTPS option) when cloning a repository.

## Create repository & first push

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
