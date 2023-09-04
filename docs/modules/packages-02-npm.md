# NPM

In the [previous chapter](packages-01-modules.md) we learned how to make our code more reusable by splitting it up into modules. But it doesn't stop there. Now, we want to be able to share modules with other developers.

To make something like that possible, we would need a couple of things:

- a way to gather all those packages
- a way to search them, get information about it
- a way to implement, use them in our project

You saw it coming, didn't ya? Off course there is something like that, it is called [npm](https://docs.npmjs.com/about-npm) or **N**ode **P**ackage **M**anager

We call the modules who are available on npm "packages". Often, they exist of multiple modules, and they can make use of other packages on their own.

## Registry

You can compare the registry with a large database (in fact, it is) that keeps track of all the packages, their versions etc.

Everyone (including you) can publish a package to this registry.

## Website

To have easy access to all those packages, one can use the [npmjs](https://www.npmjs.com/) site.

Let's say we need a short, random string to create the url for a new chatroom. Do a search on `unique string id` and you get a couple of results. Picking the right one can be tricky, have a look at the description, the time it was last updated is also a good parameter.

Take a look at [nanoid](https://www.npmjs.com/package/nanoid) You get some kind of overview, often you will find a readme here with instructions how to install and use the package.

Notice the Repository link in the right column. Often the repositories of these packages are open source (but they don't have to be) This comes in handy when you stumble upon an issue, and you need some help. In this case, the full readme is on the [GitHub repository](https://github.com/ai/nanoid)

## CLI

To interact (installing, updating and even publishing) with these packages, we use a command line tool `npm`

### Node.js

You might have noticed the 'Node' in Node package manager, it won't come as a surprise that we need to install Node.js. Node.js is a JavaScript runtime to execute JavaScript on a server (i.e. not in a browser) This runtime is under continues development, so version updates arrive regularly. New versions mean new possibilities, but that implies that older packages aren't updated yet to newer Node.js versions. If we would _just_ install a Node.js version system-wide, this would be problematic if we were working on two different project who require different Node.js versions.

### nvm

To handle different Node.js versions easaly, there is a tool called `nvm` (node version manager) Lets start by [installing](https://github.com/nvm-sh/nvm#installing-and-updating) this one first. [^1] See the documentation for the most recent version, the command is something like this:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.XX.X/install.sh | bash
```

To doule-check if everything went well, close every terminal instance and open a new window. Type `nvm` and you should get an overview with all the commands nvm has to offer.

Now the Node Version Manager is installed, but we still have to install a Node.js runtime. With the `install` command, we can install specific Node.js versions, but by using the alias `node` we simply install the latest stable version.

```bash
nvm install node
```

Have a look at [the documentation](https://github.com/nvm-sh/nvm#usage) to see which other options are possible.

[^1] Assuming that the xcode command line tools are installed (run `xcode-select –install` otherwise)

### npm

There is no need to install npm on its own, it comes with the installation of Node.js. Try it, just run `npm` on the command line.
