module.exports = {
  presets: [
    [
      // https://babeljs.io/docs/en/babel-preset-env
      '@babel/preset-env',
      {
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        useBuiltIns: 'usage',
        corejs: {
          version: 3
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining'],
  env: {
    lib: {
      presets: [
        [
          '@babel/preset-env', {
            modules: false,
            // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
            useBuiltIns: 'usage',
            corejs: {
              version: 3
            }
          }
        ]
      ],
      plugins: [
        ['module-resolver', {
          root: ['.'],
          alias: {
            '~': './lib-temp'
          }
        }]
      ]
    }
  }
}
