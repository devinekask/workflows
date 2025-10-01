---
title:  Npx
---

Don't worry, we won't introduce another entirely new thing here. `npx` is a command line tool that comes installed when installing Node.js. It allows us to run node scripts without installing them first (technically they are 'cached' locally, but not installed...)

But first, let us see how to install a package 'global'

## -g flag

When installing a package, by default it is installed in the current project. This makes sense if we need some kind of library for our project. But since Node.js can do almost anything, it is often used as a tool for us, developers. So it makes sense to install this "global" so it comes availabe everywhere on the command line. The least useful example of this must be [cowsay](https://www.npmjs.com/package/cowsay), but is fine to act as an example. Who doesn't want a cow to say some lines, available -everywhere- on your system? It doesn't matter where you run the following command, since it will be installed global.

```bash
npm install -g cowsay
```

Now, let the beast go! You can run this from everywhere now.

```bash
$ cowsay Devine FTW
 ____________
< Devine FTW >
 ------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

But now, this is installed. By using the command `which` you can see where a certain command is installed.

```bash
$ which cowsay
/Users/demouser/.nvm/versions/node/v18.8.0/bin/cowsay
```

This can become a hassle when you need different versions somehow.

Let us remove this global installed package:

```bash
$ npm uninstall  -g cowsay

removed 41 packages, and audited 1 package in 259ms

found 0 vulnerabilities
```

```bash
$ which cowsay
cowsay not found
```

## npx

With [npx](https://docs.npmjs.com/cli/v8/commands/npx), you can run commands without installing them. The first time you run it, `npx` will ask to install it, but in fact, it is added to a cache...

```bash
$ npx cowsay devine
Need to install the following packages:
  cowsay@1.5.0
Ok to proceed? (y)
 ________
< devine >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## A more useful example

Making a cow speak won't add any additional value to your resume. A better use case for `npx` is `gitignore` which add a .gitignore file to your project, especially tailored for your type of project.

```bash
$ npx gitignore
Need to install the following packages:
  gitignore
Ok to proceed? (y)
Usage: gitignore [PROJECT TYPE]
Example: gitignore rails
Available project types can be found by running `gitignore -types` or at https://github.com/github/gitignore
```

We need to add a type run `npx gitignore -types`, visit the url or just follow our advice and run `npx gitignore node` for a typical node/web project.

```bash
$ npx gitignore node
Created .gitignore file for flag type node.
```

And there you have it, a .gitignore file in your project.
