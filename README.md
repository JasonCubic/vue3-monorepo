# Vue 3 Turborepo starter

A monorepo starter template for Vue 3.  A way to break up linting and testing dependencies into separate library packages to keep the app package.json file simple.

## Setup

clone the repo, go into the repo folder and then: `yarn install`

## What's inside?

- Vite vue 3 hello world app
- eslint with airbnb autoformatting in VSCode
- jest and vue test-utils

### Apps and Packages

- `vue3-vite`: a Vite and vue 3 app with a simple module library setup.  has eslint and stylelint config files.
- `eslint-vue-airbnb`: Holds the dependencies needed to make linting work
- `jest-vue-test-utils`: Holds the dependencies and config files needed for jest to test vue sfc files

## scripts

- `build`: transpiles the vue app
- `dev`: To develop all apps and packages.  Runs the project in develop mode.
- `lint`: lints all apps and packages that have a lint command setup in package.json
- `test`: tests all apps and packages that have a test command setup in package.json
- `preview`: runs preview:es
- `preview:es`: opens the ES6 preview for the vue3-vite app
- `preview:umd`: opens the UMD preview for the vue3-vite app
- `clean`: deletes all of the folders that hold working data in the project

## Useful Links

- [Turborepo](https://turborepo.org/)
- [Vite](https://vitejs.dev/)
- [Vue.js](https://vuejs.org/)
- [Vue Test Utils Next](https://next.vue-test-utils.vuejs.org/)
- [@vue/vue3-jest](https://github.com/vuejs/vue-jest)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
