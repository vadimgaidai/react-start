module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        parser: 'flow',
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        jsxBracketSameLine: false,
        bracketSpacing: true,
        printWidth: 80,
        proseWrap: 'never',
      },
    ],
  },
}
