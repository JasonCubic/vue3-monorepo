module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint-config-airbnb-base',
  ],
  rules: {
    'no-console': 'off',
    'linebreak-style': 'off',
    'max-len': ['warn', { code: 175 }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: { max: 3 }, multiline: { max: 3 } }],
  },
  overrides: [{ files: ['**/*.test.js'], env: { jest: true } }],
  ignorePatterns: ['/dist/**'],
};
