---
title: Packages in practice
---

Let us create a project where we make use of npm.

Create an empty directory en open it in VS Code.

```bash
mkdir hellonpm
code hellonpm
```

## init

To get started, we have to initialize our project. Make sure you run the following command in the hellonpm directory. The following command starts a wizard to set up some fields. When there is something written between (brackets), that means that this is the default/suggested value. You can simply press enter if you are satisfied with that value.

```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (hellonpm)
version: (1.0.0)
description: getting to know eachother
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/demouser/Documents/hellonpm/package.json:

{
  "name": "hellonpm",
  "version": "1.0.0",
  "description": "getting to know eachother",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

If you don't like these types of interrogation (and you find yourself pressing enter most of the time), you can add the `-y` flag after the init command. This is agreeing with all the defaults ;-)

## package.json

After you ran the previous command, a `package.json` file was created. Although we have no intention of publishing this project as a new package, this project is simply considered as a "package" for npm. This file keeps track of all the packages we will use, scripts we would like to run, version, name, etc. You can [take a look at the docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) if you want to look up a specific property.

### main

When we would be creating a package, the file mentioned in the "main" property, would be the place npm expects the exports to be. It is generally considered as the "start" of your script.

Let us create the index.js file.

```bash
touch index.js
```

Now we are going to log something in there. Remember we are running Node.js script here, so things like `document.createElement()` aren't an option.

```js
console.log("Hello Node.js");
```

You can run this Node.js script with the following command:

```bash
$ node index.js
Hello Node.js
```

Nothing special here, we can run pyhton and PHP similarly. We just say something like "Hey Node.js, execute the content of the file index.js"

Since the index.js file is referenced as our "main" script in the package.json, we can run the following:

```bash
$ node .
Hello Node.js
```

### scripts

Notice the `scripts` property, we can create shortcuts here to run terminal commands. There is one by default, the `test` script. This is quite readable, the output should be something like `Error: no test specified`, right? Let us give it a try. We can run a `package.json` script with the command `npm run [name of script you would like to run]`

```bash
$ npm run test

> hellonpm@1.0.0 test
> echo "Error: no test specified" && exit 1

Error: no test specified
```

back to our index.js file. Add a script named "start" with the value of `node index.js` (or: `node .`) to the list of scripts. Don't forget the trailing comma at the end of the test script line. This file is a JSON file after all.

```diff
  "scripts": {
-   "test": "echo \"Error: no test specified\" && exit 1"
+   "test": "echo \"Error: no test specified\" && exit 1",
+   "start": "node index.js"
  },
```

Now run the following:

```bash
$ npm run start

> hellonpm@1.0.0 start
> node index.js

Hello Node.js
```

Ok, I admit, the difference is not overwhelming. But in a while, we will need different settings for our projects to run local or in production and then these will be a huge time saver. Same thing for testing: we can write code that tests our code. With a test script we can set up a temporary database that gets filled with test data and erased afterwards. This would be annoying if this would happen on our local development database every time.

There is one little advantage tough, we didn't choose 'start' arbitrary as the name of our script. Since it is so common to run a 'start' script. One can just write...

```bash
npm start

> hellonpm@1.0.0 start
> node index.js

Hello Node.js
```

## npm install

Finally, let us install a package! We will use [nanoid](https://www.npmjs.com/package/nanoid) mentioned in the previous chapter. At the top of the right column, you can see the "install" command. `npm i nanoid`, this is the short notation for `npm install nanoid`, let's do this:

```bash
$ npm install nanoid

added 1 package, and audited 2 packages in 879ms

found 0 vulnerabilities
```

A couple of things happened:

- `nanoid` is added as a dependency in the `package.json`, notice the version number
- a `package-lock.json` file is generated
- a node_modules directory is generated, containing the nanoid code.

We will discuss them all later on, but first let us use this package. Edit the index.js file like this:

```js
import { nanoid } from "nanoid";
const id = nanoid();
console.log("Hello Node.js", "The id is:", id);
```

If you run this, you get something like the following:

```bash
$ npm start

> hellonpm@1.0.0 start
> node index.js

Hello Node.js The id is: ROEb6XQbXm73yTL0l3Pht
(node:66510) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///Users/.../hellonpm/index.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /Users/.../hellonpm/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
```

Yeah, we forgot about that one. We have to make clear that we would like to make use of this type of modules. Like they say in the warning, add a `"type": "module",` to the package.json and try again.

```bash
npm start

> hellonpm@1.0.0 start
> node .

Hello Node.js The id is: 7paYoH6CZva14wUhX9mgf
```

And there you have it: we've installed and used a npm package. The first of many to come :-)

If it is not entirely clear why we occupy us with all this stuff, see the next chapter where we take a look at some advantages.
