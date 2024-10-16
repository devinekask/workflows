---
title: Stylelint
---

In the same way you can lint your JavaScript files with ESLint, it is possible to do so with [Stylelint](https://stylelint.io/)

## Init

To get up and running, you need to install stylelint itself and a configuration. According to the [stylelint docs](https://stylelint.io/user-guide/get-started), you can do this by running the following command:

```bash
npm install --save-dev stylelint stylelint-config-standard
```

There is no setup wizard like ESLint has, so you need to create a `.stylelintrc.json` file in the root of your project yourself. There, you simply reference the standard ruleset (see the docs)

## Run stylelint

You can run Stylelint on all your css files by running the following command:

```bash
npx stylelint "**/*.css"
```

## VS Code plugin

By using the [VS Code Stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint), you can see the errors and warnings directly in your editor. See the documentation how to configure this in a way it doesn't collide with the build in VS Code CSS linting.
