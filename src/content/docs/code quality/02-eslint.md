---
title: ESLint
---

## Linting

__Linting__ in code means to check the code for potential errors. It is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.

[ESLint](https://eslint.org/) is a tool for identifying and reporting problems with your JavaScript code. It can highlight formatting issues like missing semicolons, but it can also be used to find problematic patterns in your code like undeclared variables. As a bonus, ESLint can also fix some of these issues automatically.

## Init

You can initialize ESLint in your project by running the following command:

```bash
npm init @eslint/config@latest
```

This will ask you a few questions about your project. For a plain browser project the defaults are fine, except for the framework question: that one defaults to React, so pick "None of these". Afterwards it installs `eslint`, `@eslint/js` and `globals`, and creates an `eslint.config.js` file in the root of your project. In this file you can find the rules that ESLint uses:

```js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);
```

You might come across older tutorials that use a `.eslintrc.json` file. ESLint no longer reads that format: with only an `.eslintrc.json` in your project, ESLint stops with an error saying it couldn't find an `eslint.config.*` file.

Two parts of this config are worth understanding. `globals.browser` tells ESLint which variables the browser gives you for free, like `document`, `window` and `console`. Leave it out and ESLint flags every one of them as not defined.

`js/recommended` turns on ESLint's recommended rules. That set is deliberately small: it catches real mistakes, like a variable you never use (`no-unused-vars`) or one you never declared (`no-undef`), but it doesn't make style decisions for you. Rules like `eqeqeq` (always use `===`), `no-var` and `prefer-const` are not in it. Think of recommended as a floor, not a ceiling: you add the rules you want yourself, in a `rules` block:

```js
export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  {
    rules: {
      eqeqeq: "error",
      "no-var": "error",
    },
  },
]);
```

## Run ESLint

You can run ESLint by running the following command:

```bash
npx eslint yourfile.js
```

or, if you want to run it on all JavaScript files in your project: (not the /js/ directory, since we don't want to run this on your node_modules directory)

```bash
npx eslint ./js/**/*.js
```

If you want to fix some issues immediately, you can append the `--fix` flag to the command. ESLint only fixes what it can change without altering how your code behaves. It will rewrite a `var` to `let`, but it leaves `==` alone, because `==` and `===` can give different results and only you know which one you meant.

## VS Code plugin

By using the [VS Code ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), you can see the errors and warnings directly in your editor. You can configure this in a way every file you save is automatically linted.
