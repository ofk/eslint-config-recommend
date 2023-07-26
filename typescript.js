const { isInstalled } = require('./utils');

module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        // https://github.com/iamturns/eslint-config-airbnb-typescript#setup
        isInstalled('react')
          ? 'eslint-config-airbnb-typescript'
          : 'eslint-config-airbnb-typescript/base',
        // https://github.com/import-js/eslint-plugin-import#typescript
        'plugin:import/typescript',
        // https://typescript-eslint.io/linting/configs
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
    },
  ],
};
