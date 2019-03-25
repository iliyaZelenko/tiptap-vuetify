module.exports = {
  presets: [
    [
      // https://babeljs.io/docs/en/babel-preset-env
      '@babel/preset-env',
      {
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining']
}
