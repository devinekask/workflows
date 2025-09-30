---
title: Terminal
---

A basic knowledge of how to use the command line is essential in our field.

As a starter, have a look at [this article](https://www.freecodecamp.org/news/command-line-for-beginners/) You don't have to know everything by heart, it is just to give you some background info. You can skip the 'Git' and 'script' part.

## Important Terminal commands

The following commands should be easy for any developer to use:

- `ls`: Display a list of files and folders in the current folder.
- `cd foldername`: Navigates to the folder named after the command. This folder will then become the active folder in your Terminal. In this example, navigate to the folder named "folder name". Instead of a relative name (i.e. a name of a folder that is in the current active folder), you can also enter a full path (starting with a forward slash). Tip: you can drag a folder or file from your finder to the terminal window to place the full path to that folder or file in the window.
- `cd ..`: Navigate to the parent directory so that it becomes the active directory.
- `mkdir foldername`: create a folder with the name specified after the command. In this case, create a folder called "folder name" in the active folder.
- `rm -d foldername`: delete a particular folder. This only works if the folder is empty. If you want to delete a non-empty folder, you can use additional options: `rm -rdf foldername` will delete the folder including subfolders and files.
- `rm filename`: delete a specific file.
- `mv originalname newname`: move or rename a file. You can also use absolute / relative paths to move files to another folder.
- `cp originalname newname`: copy a file to a new location.
- `cat filename`: display the contents of a particular file in your terminal window.
- `echo "hello world"`: display the text between the quotes in the terminal window.
- `echo hello > newfile.txt`: create a new file called 'newfile.txt' with 'hello' as content.
- `touch newfile.md`: create a new -empty- file called 'newfile.md'

### Dollar sign

When providing examples of command line commands and output, a dollar sign is used to indicate the difference between a command and output. A `$` means that you have to run that command.

When a fragment only contains commands, no dollar signs are used.

### Terminal app

You can find your terminal in your Applications → Utilities folder. It might come in handy to put this in your dock.

VS Code has a terminal build in. (View → terminal) This is convenient when you have to interact with your project.

You can open VS Code from another therminal instance with the 'code' command. (if you [set it up correctly](https://code.visualstudio.com/docs/setup/mac#_launch-vs-code-from-the-command-line))

The following command opens VS Code with the current directory as the active workspace.

```bash
code .
```

### Options - and --

Commands have options, these are used to modify the behavior of the command. Some options can be specified with either a single dash (-) or double dash (--).

A single dash can only be followed by a single character, a double dash can be followed by a multi-character option.

If we take a look at the `code` command, you will find a lot of options:

```bash
$ code --help
Visual Studio Code 1.104.1

Usage: code [options] [paths...]

To read from stdin, append '-' (e.g. 'ps aux | grep code | code -')

Options
  -d --diff <file> <file>                    Compare two files with each other.
  -m --merge <path1> <path2> <base> <result> Perform a three-way merge by providing paths for two modified versions of a
                                             file, the common origin of both modified versions and the output file to save
                                             merge results.
  -a --add <folder>                          Add folder(s) to the last active window.
  --remove <folder>                          Remove folder(s) from the last active window.
...
```

There is no need to read all of them in detail (this is just an example) but notice that some options like '-a' also have a full variant '--add'.

#### Combining

You can combine short (one character) options into one long option. Let's have an example with `ls`

First the default command:

```bash
$ ls
Applications
Documents
Movies
```

Now with the `-l` option, to list them in the 'long format'

```bash
$ ls -l
total 3
drwx------@   11 demouser  staff    352 Aug 19 13:43 Applications
drwx------@   11 demouser  staff    640 Sep  8 09:33 Documents
drwx------@   11 demouser  staff    352 Jul 23  2021 Movies
```

There is also a `-a` option, which lists all the files and folders, including the hidden ones.

```bash
.
..
.DS_Store
.zshrc
$ ls -a
Applications
Documents
Movies
```

Let us combine both of them now

```bash
$ ls -la
drwxr-xr-x+   93 demouser  staff   2976 Sep 12 09:54 .
drwxr-xr-x     7 root      admin    224 Aug 11 08:44 ..
-rw-r--r--@    1 demouser  staff  26628 Sep  9 20:29 .DS_Store
-rw-r--r--     1 demouser  wheel   1255 Sep 12 09:27 .zshrc
-rw-r--r--@    1 demouser  staff  26628 Sep  9 20:29
drwx------@   11 demouser  staff    352 Aug 19 13:43 Applications
drwx------@   11 demouser  staff    640 Sep  8 09:33 Documents
drwx------@   11 demouser  staff    352 Jul 23  2021 Movies
```

### Hidden files

With the `-a` option of `ls` you can see hidden files. There is a reason they are hidden. Don't mess with them unless you know what you are doing.

If you want, you can show those hidden files in your Finder by running the following commands:

```bash
defaults write com.apple.Finder AppleShowAllFiles true
killall Finder
```

If you want to hide them, you can set the `AppleShowAllFiles` to `false` and run the command again.

### Profile file

A profile-file gets read when you start a new terminal session. In there, some commands can be executed to set environment variable, aliasses etc.
Depending on the shell you are using, this file might be called something like `.profile` or `.bash_profile`. When you are using `zsh`, it is called `.zshrc` or `.zprofile`.

### Autocomplete

By using the `tab` key, you can trigger autocomplete on commands or file and folder names. Type part of the command or part of the path and press tab to autocomplete. This way you can save a lot of time, and you also avoid typing errors.

By using the `up` (and then `down`) keys, you can browse through your previous commands. Very useful!

### Passing output to somewhere else

You can also write output from a command to a file, using the `>` character:

- `ls > test.txt` will write the output of the ls command to a file called test.txt.
- `echo "hello world" > hello.txt` will write the output of the echo command (the text "hello world") to a file called hello.txt.

## Be careful

:::caution
Do not just copy-paste terminal statements without understanding what they do. If you are not sure, try to grasp them by using a tool like <https://explainshell.com/>
:::

## Resources

- [Terminal, npm, git and some little tricks](https://www.joshwcomeau.com/javascript/terminal-for-js-devs/)
- [CLI for artists and designers](https://github.com/ffd8/cli-for-artists-and-designers)
- [You don't need GUI](https://github.com/you-dont-need/You-Dont-Need-GUI?tab=readme-ov-file)
- [Linux command line for you and me!](https://lym.readthedocs.io/en/latest/)
- [We hope this resource helps designers and non-technical folks appreciate and love the command line like we do!](https://dashdash.io/)
