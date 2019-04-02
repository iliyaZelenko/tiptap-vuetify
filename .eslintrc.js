// Warnings are errors in CI
const OFF = 'off'
const ERROR = 'error'
const WARNING = isTruthy(process.env.CI) ? ERROR : 'warn'

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint'
  ],
  parserOptions: {
    'parser': '@typescript-eslint/parser',
    'project': './tsconfig.json',
  },
  rules: {
    'indent': OFF,
    '@typescript-eslint/indent': [ERROR, 2],
    // allows 'any' type
    '@typescript-eslint/no-explicit-any': OFF,
    // tslint config integration for eslint
    '@typescript-eslint/tslint/config': [WARNING, {
      'lintFile': './tslint.json', // path to tslint.json of your project
    }],
  }
}

function isTruthy (value) {
  if (!value) return false

  return ['1', 'true'].includes(value.toLowerCase())
}
