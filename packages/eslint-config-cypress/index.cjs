const prettierRules = require('@benny123tw/prettier-config')

/** @type {import('eslint').ESLint.ConfigData}  */
const config = {
  extends: ['@antfu/eslint-config-ts', 'plugin:prettier/recommended'],
  plugins: ['cypress'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierRules,
      },
    ],

    // See: https://typescript-eslint.io/rules/brace-style/
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'off',

    // cypress
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'warn',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'off',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
}

module.exports = config
