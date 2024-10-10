# Advantages of npm

In the previous chapter, we've installed a package to get an idea how npm works. Here we are about to do some routines to make it clear what the advantages of such a workflow is. You will learn a couple of things along the way, so buckle up!

## Install a specific version

It will happen sooner or later. You will need some previous version of a package to make it work with another package or a production server that only supports an older Node.js version.

Let us install an older version of `ora`, this is a fancy 'spinner' for the command line, good for now. At the time of writing, the latest version is 6.1.2, we will install version 6.0.0. Let's say we've installed this in the past.

```bash
$ npm install ora@6.0.0

added 31 packages, and audited 33 packages in 2s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

If you're wondering why it added 31 packages, keep reading, we will address this in a minute.

Back to the present, curious to see the state of our packages. Run the following:

```bash
$ npm outdated
Package  Current  Wanted  Latest  Location          Depended by
ora        6.0.0   6.3.1   8.1.0  node_modules/ora  [projectname]
```

O-ow, there is a package outdated. Don't worry, we don't have to manually edit files in the node_modules folder, we can simply update this one by running:

```bash
npm install ora

removed 6 packages, changed 2 packages, and audited 27 packages in 597ms

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Seems like some packages were removed and some changed. But, most important for now, let us check if we still have outdated packages:

```bash
npm outdated
```

Nope, all good!

:::info
If you still see that the package isn't updated to it's most recent version. It probably means that there is a new [major version](https://semver.org/). To force the installation of the most recent package you can append `@latest`, like this: `npm install ora@latest`
:::

Now let us have a look at all those extra packages, check the contents of the node_modules directory. There are a lot of packages over there. That's because 'ora' depends on a couple of packages itself. You can see this on [the npmjs page](https://www.npmjs.com/package/ora?activeTab=dependencies) or in its [package.json](https://github.com/sindresorhus/ora/blob/main/package.json)

Notice there are "dependencies" and "devDependencies". Dependencies are needed to run the script itself. DevDependencies are for development purposes and not necessary in a production build. For instance, the author of this package uses [ava](https://www.npmjs.com/package/ava) to test the code of this package.

## Install

Ready for a bold move? Delete the `node_modules` directory, go do it, don't be scared.

Well, be at least a little carefully with the `rm` (remove) command, make sure you have the command correct. The `-r` flag means "recursive" and deletes every directory and its contents of that path.

```bash
rm -r node_modules/
```

Now try to run start again:

```bash
$ npm start

> hellonpm@1.0.0 start
> node .

node:internal/errors:484
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'nanoid' imported from /Users/demouser/hellonpm/index.js
    at new NodeError (node:internal/errors:393:5)
    at packageResolve (node:internal/modules/esm/resolve:810:9)
    at moduleResolve (node:internal/modules/esm/resolve:859:20)
    at defaultResolve (node:internal/modules/esm/resolve:1074:11)
    at nextResolve (node:internal/modules/esm/loader:164:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:839:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:426:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)
    at link (node:internal/modules/esm/module_job:75:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v18.8.0
```

(If you don't get this error and everything works just fine, that probably means you have installed nanoid somewhere else up in the file tree)

Now what? How can we get our project up and running again? This isn't a problem at all, in fact this is what we want to achieve. By running `npm install` we can install all the packages listed in the `package.json` according to their version numbers listed. This way we can share a project with each other without including that large node_modules folder. Make sure you **include node_modules/ in the .gitignore** of your project. You don't want to version control this directory, it is not necessary.
To make things even more clear: never hand in a project with the node_modules included, this is not necessary!

```bash
$ npm install

added 26 packages, and audited 27 packages in 664ms

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ npm start

> hellonpm@1.0.0 start
> node .

Hello Node.js The id is: eAKBUmelPv5LDTyOuJdP3
```

Maybe you have to refresh the VS Code file explorer, but you can see the node_modules directory is back with all its content.

## Uninstall

If you want to get rid of a package, you can remove it from the `package.json` dependencies (and run `npm install` again) or you can remove one with the `uninstall` command. Let us remove ora since we don't use it after all.

```bash
$ npm uninstall ora

removed 25 packages, and audited 2 packages in 539ms

found 0 vulnerabilities
```

## Versioning

A quick sidestep about those version numbers. These are not arbitrary but following a certain standard called [semver](https://semver.org/) and are structured like "MAJOR.MINOR.PATCH"

- MAJOR version when there are incompatible changes
- MINOR version when new functionality is added in a backwards compatible manner
- PATCH version when there are backwards compatible bug fixes

This means --at least in theory-- that you can safely update minor and patch changes. When there is a major update, you should reach out to the documentation for that package to see if there is some kind of upgrade guide.

When you look at the dependencies in the `package.json`, you can see which version is desired. Often these are preceded by symbols like `~` or `^` These all have special meanings which you can [read about here](https://github.com/npm/node-semver#versions) in detail.

## Version Control

Just to make things clear:

- node_modules: do **not** include in version control
- package.json: _do_ include in version control
- package-lock.json: _do_ include in version control

The package-lock.json file is auto generated en keeps track of all the packages installed in your project. For instance: it is perfectly possible that two separate packages both need the same dependency. Npm then decides which version to install en keeps track of this in the lock file. So this can speed tings up in successive installations.
