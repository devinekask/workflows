---
title: Stylelint
---

In the same way you can lint your JavaScript files with ESLint, it is possible to do so with [Stylelint](https://stylelint.io/)

## Init

To get up and running, you need to install stylelint itself and a configuration. According to the [stylelint docs](https://stylelint.io/user-guide/get-started), you can do this by running the following command:

```bash
npm create stylelint@latest
```

Just like the ESLint wizard, it first shows you what it is going to do and asks you to continue. It then creates a `stylelint.config.mjs` file in the root of your project and installs Stylelint together with the standard ruleset (`npm add -D stylelint stylelint-config-standard`). The config file simply references that standard ruleset:

```js
/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"]
};
```

You might come across a `.stylelintrc.json` file in older projects or tutorials. That still works: it is just another name Stylelint looks for, containing the same settings in JSON.

## Run stylelint

You can run Stylelint on all your css files by running the following command:

```bash
npx stylelint "**/*.css"
```

## VS Code plugin

By using the [VS Code Stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint), you can see the errors and warnings directly in your editor. See the documentation how to configure this in a way it doesn't collide with the built-in VS Code CSS linting.
