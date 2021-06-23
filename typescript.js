const { isInstalled } = require('./utils');

module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        isInstalled('react')
          ? 'eslint-config-airbnb-typescript'
          : 'eslint-config-airbnb-typescript/base',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
};
