---
title: Git intro
---

## About Git

Git is a version control system. It allows you to collaborate on projects with several people and to keep a history of the project.

It was launched in April 2005 by Linus Torvalds - the father of Linux. Code management systems were nothing new, some important systems in the past were:

- SCSS early 1970s
- RCS early 80s
- CVS was launched in 1986
- SVN in 2001

Linux development was done in the early years with Bitkeeper VCS. However, in 2005 Bitkeeper imposed some additional restrictions on the free open source version, so that Linux could no longer be developed via this system. Linus looked for alternatives, but found none that met his requirements:

- Easy to do distributed development
- Being scalable: being able to collaborate with 1000+ developers
- Being Fast & Efficient and Reliable
- Know who did what
- Transaction support: bundle multiple actions
- Branching support: branches of the project that can be merged back into the main project.
- Distributed repositories: project with history is not kept centrally.
- For free

When he couldn't find an alternative that met these requirements, he decided to develop his own system: GIT was born.

The name GIT is not an abbreviation, but a reference to Linus himself: it is slang for "an unpleasant person". Like Linux, he wanted a name that refers to himself. Afterwards, the community put the abbreviation "Global Information Tracker" on it.

## Internal Operation

Your files are stored in a repository. This repository contains information about the contents of the files, their name, location and history.

- The contents of files are stored in blob objects
- History is kept in commit objects
- The structure is maintained in tree objects

If you have multiple files with the same content, the tree will reference the same blob object multiple times, saving storage.

## Git from the command line

We will use git from the command line. There are some applications that allow you to execute git commands via a GUI, but if you want to perform more advanced actions you will have to go back to the command line anyway.

Git is installed when you install the xcode command line tools. (or run `xcode-select --install`) So if you have already done this (for example to make Node.js work), you can get started right away. Another option (without the command line tools) is to download and install git from [http://git-scm.com/downloads](http://git-scm.com/downloads).

## Resources

<https://gitexplorer.com/>
