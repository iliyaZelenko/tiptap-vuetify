module.exports = {
  root: true,
  env: {
    'node': true
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
    'sourceType': 'module',
    'extraFileExtensions': ['.vue'],
    'project': './tsconfig.json',
  },
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    // allows 'any' type
    '@typescript-eslint/no-explicit-any': 'off',
    // tslint config integration for eslint
    '@typescript-eslint/tslint/config': ['warn', {
      'lintFile': './tslint.json', // path to tslint.json of your project
    }],
  }
}
