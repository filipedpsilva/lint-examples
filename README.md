# ESLINT Examples for JS & TS

## Objectives

Clean code isn’t just code that is readable and maintainable, it’s also code that is consistent. Having multiple ways of doing the same thing is confusing and time-consuming.

Two examples: one in JavaScript and other in TypeScript, both using ESLINT

## Setup
On each folder, except `eslint`, run

```text
npm i
```

## Structure

```text
- lint-examples
        |
        - eslint (Customized Rules)
        |    |
        |    - index.js
        |    |
        |    - package.json
        |
        |
        - js (Example in JavaScript)
        |  |
        |  - node_modules
        |  |
        |  - .eslintrc.json
        |  |
        |  - index.js
        |  |
        |  - package-lock.json
        |  |
        |  - package.json
        |
        |
        - ts (Example in TypeScript)
           |
           - node_modules
           |
           - src
           |  |
           |  - index.ts
           |  |
           |  - otherIndex.ts
           |
           |
           - .eslintignore
           |
           - .eslintrc.json
           |
           - package-lock.json
           |
           - package.json

```

## Dependencies

- [Node](https://nodejs.org/en/download/releases/);
- [ESLint](https://eslint.org/docs/user-guide/getting-started);
- [TypeScript](https://www.npmjs.com/package/typescript);
- [ESLint for VSCode](https://github.com/microsoft/vscode-eslint);

>## Note
>This repo contains the [PDF](https://github.com/filipedpsilva/lint-examples/blob/main/2020_11_19_ESLINT.pdf) from the presentation
>
>## Links and stuff
> - [Various linters](https://github.com/collections/clean-code-linters);
> - [Husky](https://github.com/typicode/husky);
> - [Commitizen](https://github.com/commitizen/cz-cli);
> - [Prettier](https://prettier.io/docs/en/integrating-with-linters.html);
