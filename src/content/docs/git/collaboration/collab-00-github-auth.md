---
title: GitHub authentication via SSH
sidebar:
  label: GitHub authentication
---

To be able to work together with other people on a repository, we need a hosted git environment. We will use [GitHub](https://github.com).
This part is for setting up your GitHub account and linking it to your computer. This way you can push and pull changes to and from GitHub without having to enter your password every time. We only have to do this once. The next chapter will explain how to create a repository and push your local changes to GitHub.

## Create & link GitHub account

We will create a GitHub account and link our GitHub credentials to our computer, so that we don't have to re-enter our password every time.

If you don't have a GitHub account yet, you can create one at [https://github.com](https://github.com). Make sure to use your @student.howest.be email address when creating the account. After creating the account, go to [https://education.github.com/pack](https://education.github.com/pack) and claim your free student pack.

Then open a terminal window. Check if you have git configured with your @student.howest.be email address. You can check this with the following command:

```bash
git config --global --list 
```

If not, you can set your name and email address with the following commands:

```bash
git config --global user.name "Your Name Here"
git config --global user.email "your_email@student.howest.be"
```

## SSH key

The next steps are a summary of [this guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) When things should be unclear, you can read the guide in more detail.

To authenticate yourself with GitHub, you need an SSH key: a pair of files on your computer, one secret (the private key) and one you hand out (the public key).

### Check for an existing key

If you have used git on this machine before, you may already have a key. Have a look:

```bash
ls -al ~/.ssh
```

If you see a pair like `id_ed25519` and `id_ed25519.pub`, you can reuse it — skip to Adding the key to GitHub. If the directory doesn't exist or is empty, carry on.

### Generate a key

```bash
ssh-keygen -t ed25519 -f ~/.ssh/github -C "your_email@student.howest.be" 
```

The -f flag tells ssh-keygen where to save the key, so it won't ask you for a location. We give it the name github rather than the default, so that later on you can tell your keys apart.

You will be asked for a passphrase, you may leave it empty by pressing enter twice.
We have to be clear: it is a security risk to leave the passphrase empty. Anyone who gets hold of the file — a shared machine, a stolen laptop, a backup on a USB stick — can push to your repositories as you.

```bash
Generating public/private ed25519 key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Now check that both files are there. You should see github (the private key, keep this secret) and github.pub (the public key, safe to share):

```bash
ls -al ~/.ssh
```

### SSH agent

The ssh-agent holds your key in memory so you don't have to unlock it for every single command. We configure it once in`~/.ssh/config`

Create the file if it doesn't exist yet:

```bash
touch ~/.ssh/config
```

And open it in the editor of your choice. (We are using `code` here, see [Launching VS Code from the command line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

```bash
code ~/.ssh/config
```

Now add this to the config file and save it:

```txt
Host github.com
  HostName github.com
  User git
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/github
  IdentitiesOnly yes
```

What these lines do:

- `Host github.com` — only apply this block when connecting to GitHub. Don't use Host * here: that would offer your GitHub key to every server you ever connect to, and it gets in the way once you have a second key.
- `AddKeysToAgent yes` — load the key into the agent automatically on first use.
- `UseKeychain yes` — store the passphrase in the macOS keychain. (Harmless if you left the passphrase empty.)
- `IdentityFile ~/.ssh/github` — which key to use.
- `IdentitiesOnly yes` — offer only this key. Without it, ssh tries every key it knows and GitHub may cut you off with Too many authentication failures.

Now we can add the key to the ssh-agent:

You can load the key right away and check that it worked:\

```bash
ssh-add ~/.ssh/github
ssh-add -l
```

### Adding the key to GitHub

Copy the contents of the **public** key. The command pbcopy puts content on our clipboard, it is like a 'cmd-c':

```bash
pbcopy < ~/.ssh/github.pub
```

On GitHub, go to Settings → SSH and GPG keys → New/add SSH key → Give it a descriptive name (e.g. "Macbook") → Paste the key → Add SSH key

**Never** paste the contents of github (without .pub). That one stays on your machine.

## Test the connection

You can test if everything is working by running the following command:

```bash
ssh -T git@github.com
```

The first time you connect, ssh doesn't know GitHub's server yet and asks you to confirm its identity:

```bash
The authenticity of host 'github.com (140.82.121.4)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Compare that fingerprint with the one in [GitHub's list of SSH key fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints). If it matches, type `yes` and press enter (`y` alone is not accepted). ssh stores the server's key in `~/.ssh/known_hosts` and will not ask again — and it will warn you loudly if the answer ever changes.

If everything is set up correctly, you get:

```bash
Hi yourusername! You've successfully authenticated, but GitHub does not provide shell access.
```

That is the success message, even though it sounds like a refusal — GitHub only lets you push and pull over SSH, not log in to a shell.

## Using SSH for your repositories

When cloning, choose the **SSH** option instead of HTTPS. The URL looks like `git@github.com:username/repository.git`.

If you already cloned a repository over HTTPS, you can switch it over. Check what it uses now:

```bash
git remote -v
```

If the URL starts with `https://`, point it at the SSH one:

```bash
git remote set-url origin git@github.com:username/repository.git
```

## Troubleshooting

**`Permission denied (publickey)`** — run the connection again with `-v` to see which key ssh is offering:

```bash
ssh -T -v git@github.com
```

Check in order: is the key listed by `ssh-add -l`? Is the public key actually on your GitHub account? Does the path in `~/.ssh/config` match the filename you used?

**Your commits show a grey avatar on GitHub** — the email in your commits doesn't match an address on your account. Check with `git config --global user.email` and compare it against Settings → Emails on GitHub. Fixing the config only affects *new* commits.
