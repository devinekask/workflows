---
title: Homebrew
---

Our personal computer is full of applications and terminal commands (`ls`, `git`, `nvm`, etc.) that we use every day. For Apps, we use the App store, or we install then via a download. Terminal commands can be tricky, sometimes they need a specific build step customized to your machine. Homebrew makes this process a breeze. Compare it like `npm` for your terminal commands.

Packages are made available through so called 'taps'. A tap is a repository that contains a list of packages. Homebrew has a default tap called `homebrew/core` that contains a lot of packages. But there are other taps that contain packages. For example the `homebrew/cask` tap contains a lot of applications. (yep, you can use homebrew to install -and manage- applications)

## Installation

See [brew.sh](https://brew.sh/) for the installation instructions. Copy-paste that installation command in your terminal and follow the instructions.

## General usage

### Install a package

Let us install a package called 'tree' that displays the content of a directory in a visual (tree) structure. We can install it with the following command:

```bash
brew install tree
```

You get some logs in your terminal that shows you the progress of the installation. Once it is done, you can use the `tree` command in your terminal. Depending on where you are located in the file system, it will display the content of the current directory.

```bash
$ tree
.
|-- README.md
`-- hello.txt

0 directories, 2 files
```

### Search for a package

If you are not really sure if a certain package is available through Homebrew, you can search for it. You can search [using the website](https://formulae.brew.sh/formula/) or via the command line. For instance, if you want to search for a package to convert fonts to woff2 format:

```bash
$ brew search woff2
==> Formulae
woff2 ✔
```

It seems like a package `woff2` is available. When you install it, you will have `woff2_compress` and `woff2_decompress` available in your terminal.

### Update packages

You can run `brew update` to update the **registry** of packages. This will not update the packages themselves. Therefore, you have to run `brew upgrade`.

### Uninstall a package

To uninstall a package, you can run `brew uninstall <package-name>`.

Happy brewing!
