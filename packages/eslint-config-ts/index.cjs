const prettierRules = require('@benny123tw/prettier-config')

/** @type {import('eslint').ESLint.ConfigData}  */
const config = {
  extends: [
    '@antfu/eslint-config-ts',
    'plugin:prettier/recommended',
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        ...prettierRules
      }
    ],

    // See: https://typescript-eslint.io/rules/brace-style/
    "brace-style": "off",
    "@typescript-eslint/brace-style": "error"
  }
}

module.exports = config;