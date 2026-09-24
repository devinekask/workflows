---
title: Vite
---

Up until now, we were doing fine with the VS Code Live Server. But since our applications will become more and more complex (depending on npm packages to give an example), we need a more advanced development server. This is where [Vite](https://vite.dev/) comes in. There are [a lot of advantages](https://vite.dev/guide/why.html), the following is just a summary:

## Features

### Dev server

Vite is a development server that has some special tricks up its sleeve to start it up fast, even when a lot of libraries need to be loaded first.

### HMR

Vite has Hot Module Replacement (HMR) built in. When you change a file, Vite doesn't reload the whole page (like Live Server does), but swaps only the changed module in the running page. So the page keeps its state: a filled-in form, an opened menu, a counter value... And again... it does this fast.

### Production build

Vite can also build your application for production. It will bundle all your files into one or more files and minimizes it. It strips out all the comments and unused code. This makes your application smaller and faster.

### Plugins

Vite has a lot of plugins that can be used to extend its functionality. For example, you can use a plugin that makes it possible to use brand-new CSS features, but provides an automatic fallback for older browsers.

In the end, Vite really speeds up our development process and provides us with a lot of convenient features. Be aware that this isn't the only option out there, things like [Webpack](https://webpack.js.org/) or [Parcel](https://parceljs.org/) do about the same thing.

## Installation

To create a new vite-project, you can run the following command:

```bash
npm create vite@latest
```

This is an alias for `npm init vite@latest` and will start a command line wizard to create a new project. You will be asked for the name of the project and the framework you want to use. For now, we will choose `vanilla` (plain JavaScript) and `JavaScript` (not TypeScript).

```bash
npm create vite@latest

> npx
> "create-vite"

│
◇  Project name:
│  vite-project
│
◇  Select a framework:
│  Vanilla
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/demouser/vite-project...
│
◇  Installing dependencies with npm...

added 15 packages, and audited 16 packages in 5s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> vite-project@0.0.0 dev
> vite


  VITE v8.3.0  ready in 248 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```


You _can_ write this in one line to skip the steps as follows:

```bash
$ npm create vite@latest myproject -- --template vanilla --immediate

> npx
> "create-vite" myproject --template vanilla --immediate

│
◇  Scaffolding project in /Users/demouser/myproject...
│
◇  Installing dependencies with npm...

added 15 packages, and audited 16 packages in 6s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> myproject@0.0.0 dev
> vite


  VITE v8.3.0  ready in 228 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Exploration

Have a look at the newly created project, there is a lot!

- `node_modules` - this is where all the dependencies are stored, dependencies needed by Vite
- `public` - A directory containing two SVG files: the `favicon.svg` and an `icons.svg` sprite. Files in this directory aren't parsed by Vite, they are copied as-is. This has certain [consequences](https://vite.dev/guide/assets.html#the-public-directory)
- `src` - The directory that contains all the source code of your project, everything in here will be processed by Vite
  - `assets` - A directory containing an image (`hero.png`) and two SVG files (`javascript.svg` and `vite.svg`), these will be parsed by Vite
  - `counter.js` - An example file that contains a JavaScript function to increase a counter
  - `main.js` - The main JavaScript file, it imports the `counter.js` file, the images from the `assets` folder and the `style.css` (!) file
  - `style.css` - The main CSS file.
- `.gitignore` - A file that tells git which files to ignore, notice that the project itself isn't a repository yet.
- `index.html` - The main HTML file, notice that it lives in the root of the project (not in `src` or `public`) and that it has a script tag that loads the `/src/main.js` file
- `package-lock.json` - obviously
- `package.json` - Notice that Vite is a **dev**Dependency and there are 3 scripts available

Spin up the dev server:

```bash
$ npm run dev

> myproject@0.0.0 dev
> vite


  VITE v8.3.0  ready in 228 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

When you open the URL in your browser, you will see a basic demo page.

- Some HTML is generated by the `main.js` file
- When you click on the button, the counter goes up. So JavaScript seems to be working OK
- The images from the `assets` folder are there, and so are the icons from the `icons.svg` sprite in the `public` folder
- The page is definitely styled, but where is the CSS file loaded?

If you want to stop the dev server, you can enter `Ctrl + C` in the terminal.

### HMR in action

Organize your desktop so that a browser and VS Code are side by side. Make sure that the Vite dev server is running.

1. Click the counter button a few times, until it says `Count is 5`.
2. Open `src/style.css` and give the page a red background by adding `background: red;` to the `body` rule. The background turns red immediately, and the counter **still says 5**. The CSS was swapped without a full page refresh.
3. Now open `src/main.js` and change the text `Get started` into something else. This time, the page does a full reload: your new text is there, but the counter is **back at 0**.

Why the difference? Vite knows how to hot swap a CSS file on its own. For a JavaScript file, the code itself has to tell Vite how to replace it, and our plain `main.js` doesn't do that. So Vite falls back to a full page reload. Frameworks like React or Vue do this for you, via their Vite plugins, so in those projects your JavaScript changes are hot swapped as well.

:::tip
Open your Developer Tools and inspect the `head` element while you change the background color. Vite injected the CSS as a `style` tag, and only the content of that tag changes.
:::

### Build it

When you are done with your project, you can build it for production.

```bash
$ npm run build

> myproject@0.0.0 build
> vite build

vite v8.3.0 building client environment for production...
transforming...
✓ 9 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                  0.45 kB │ gzip: 0.29 kB
dist/assets/vite-BF8QNONU.svg    8.70 kB │ gzip: 1.60 kB
dist/assets/hero-CLDdwZDr.png   13.05 kB
dist/assets/index-CsUDhMuy.css   4.10 kB │ gzip: 1.46 kB
dist/assets/index-CAoPt-vL.js    4.05 kB │ gzip: 1.77 kB

✓ built in 216ms
```

The build process is done, and you can find the files in the `dist` folder.

Notice the following:

- The `favicon.svg` and `icons.svg` from the public directory aren't "transformed" by Vite, so they don't show up in the list above. But they are present in the `dist` folder. (they are just copied over)
- The other files have a hash in their name, this is to prevent caching issues.
- The .js and .css files are minified.

Now compare the output with the `src/assets` folder: there are three images in there, but only two of them ended up in `dist/assets`. Which one is missing, and where did it go?

<details>
<summary>Show the answer</summary>

The `javascript.svg` is missing. It is smaller than 4 kB, so Vite doesn't write it to a separate file. Instead, it inlines the image in the JavaScript bundle as a [data URI](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data). This saves the browser an extra request for such a small file. Open `dist/assets/index-....js` and search for `data:image/svg+xml` to find it.

You can change this threshold with the [`build.assetsInlineLimit`](https://vite.dev/config/build-options.html#build-assetsinlinelimit) option.

</details>

### Preview

You can preview the production build by running the following command:

```bash
$ npm run preview

> myproject@0.0.0 preview
> vite preview

  ➜  Local:   http://127.0.0.1:4173/
  ➜  Network: use --host to expose
```

This opens up a new browser window with the production build. Instead of the inline CSS in the head, the minified CSS is loaded from a separate file. The same goes for the JavaScript.

## Deployment on a subdirectory

It is quite common for us to deploy something on a "nested public path" (aka subdirectory). By default, Vite assumes we are deploying on the root of a domain, so we can run into some issues when requiring assets.

To let Vite know the name of the subdirectory (structure), we can add a `base` property to the build argument in our package.json. See the [documentation](https://vite.dev/guide/build.html#public-base-path) for more details.

```json
{
 "scripts": {
  "build": "vite build --base=/my/public/path/"
 }
}
```
