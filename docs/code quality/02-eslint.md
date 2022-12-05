# ESLint

## Linting

__Linting__ in code means to check the code for potential errors. It is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.

[ESLint](https://eslint.org/) is a tool for identifying and reporting problems with your JavaScript code. It can highlight formatting issues like missing semicolons, but it can also be used to find problematic patterns in your code like undeclared variables. As a bonus, ESLint can also fix some of these issues automatically.

## Init

You can initialize ESLint in your project by running the following command:

```bash
npm init @eslint/config
```

This will ask you a few questions about your project and then create a `.eslintrc.json` file in the root of your project. In this file you can find the rules that ESLint uses. One of the questions is to base your ruleset on a popular one. The 'airbnb' ruleset is a good starting point.

## Run ESLint

You can run ESLint by running the following command:

```bash
npx eslint yourfile.js
```

or, if you want to run it on all JavaScript files in your project: (not the /js/ directory, since we don't want to run this on your node_modules directory)

```bash
npx eslint ./js/**/*.js
```

If you want to fix some issues immediately, you can append the `--fix` flag to the comment.

## VS Code plugin

By using the [VS Code ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), you can see the errors and warnings directly in your editor. You can configure this in a way every file you save is automatically linted.
