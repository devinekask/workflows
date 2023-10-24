---
sidebar_position: 6
---

# Vite

Up until now, we were doing fine with the VS Code Live Server. But since our applications will become more and more complex (depending on npm packages to give an example), we need a more advanced development server. This is where [Vite](https://vitejs.dev/) comes in. There are [a lot of advantages](https://vitejs.dev/guide/why.html), the following is just a summary:

## Features

### Dev server

Vite is a development server that has some special tricks up its sleeve to start it up fast, even when a lot of libraries need to be loaded first.

### HRM

Vite has Hot Module Replacement (HRM) built in. This means that when you change a file, the browser will automatically reload the page. And again... does this fast.

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

This is an alias for `npm init vite@latest` and will create a new project configured with Vite. A folder will be created with the name of the project. When asked, you can choose for a basic 'Vanilla' project.

You _can_ write this in one line to skip the steps as follows:

```bash
$ npm create vite@latest myproject -- --template vanilla

Scaffolding project in /Users/demouser/myproject...

Done. Now run:

  cd myproject
  npm install
  npm run dev
```

Be aware that we still have to navigate to the project and do a `npm install` to install all the necessary dependencies.

```bash
cd myproject
npm install
```

## Exploration

Have a look at the newly created project, there is a lot!

- `node_modules` - this is where all the dependencies are stored, dependencies needed by Vite
- `public` - A directory containing an SVG file. Files in this directory aren't parsed by Vite, this has certain [consequences](https://vitejs.dev/guide/assets.html#the-public-directory)
- `.gitignore` - A file that tells git which files to ignore, notice that the project itself isn't a repository yet.
- `counter.js` - An example file that contains a JavaScript function to increase a counter
- `index.html` - The main HTML file, notice that it has a script tag that loads a `/main.js` file
- `javascript.svg` - An other SVG file, this one will be parsed by Vite
- `main.js` - The main JavaScript file, it imports the `counter.js` file, the `javascript.svg` file and the `style.css` (!) file
- `package-lock.json` - obviously
- `package.json` - Notice that Vite is a **dev**Dependency and there are 3 scripts available
- `style.css` - The main CSS file.

Spin up the dev server:

```bash
$ npm run dev

> myproject@0.0.0 dev
> vite


VITE v3.1.8  ready in 218 ms

➜  Local:   http://127.0.0.1:5173/
➜  Network: use --host to expose
```

When you open the URL in your browser, you will see a basic demo page.

- Some HTML is generated by the `main.js` file
- When you click on the button, the counter goes up. So JavaScript seems to be working OK
- The two SVG's are there
- The page is definitely styled, but where is the CSS file loaded?

If you want to stop the dev server, you can enter `Ctrl + C` in the terminal.

### HMR

Organize your desktop so that a browser and VS Code are side by side. Make sure that the Vite dev server is running. Now edit the style.css to give the page a red background. You will see that the background of the page turns red immediately --without doing a full page refresh.- When you open up your Developer Tools and inspect the head element, you will experience that only the style tag changes when you change the background color.

### Build it

When you are done with your project, you can build it for production.

```bash
$ npm run build

> myproject@0.0.0 build
> vite build

vite v3.1.8 building for production...
✓ 6 modules transformed.
dist/assets/javascript.8dac5379.svg   0.97 KiB
dist/index.html                       0.42 KiB
dist/assets/index.2eccdaac.js         1.40 KiB / gzip: 0.73 KiB
dist/assets/index.d0964974.css        1.19 KiB / gzip: 0.62 KiB
```

The build process is done, and you can find the files in the `dist` folder.

Notice the following:

- The `vite.svg` in the public directory isn't "transformed" by Vite, but it is present in the `dist` folder. (it is just copied over)
- The other files have a hash in their name, this is to prevent caching issues.
- The .js and .css files are minified.

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

To let Vite know the name of te subdirectory (structure), we can add a `base` property to the build argument in our package.json. See the [documentation](https://vitejs.dev/guide/build.html#public-base-path) for more details.

```json
{
 "scripts": {
  "build": "vite build --base=/my/public/path/"
 }
}
```