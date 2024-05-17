const { FlatCompat } = require('@eslint/eslintrc');
const tseslint = require('typescript-eslint');
const { isInstalled } = require('./isInstalled.cjs');

const compat = new FlatCompat();

/** @type {(jsConfigs: import('typescript-eslint').ConfigWithExtends[], tsConfigs: import('typescript-eslint').ConfigWithExtends[]) => import('eslint').FlatConfig[]} */
function config(jsConfigs, tsConfigs) {
  return [
    ...jsConfigs,
    ...(isInstalled('typescript')
      ? tseslint.config(
          ...jsConfigs,
          ...tsConfigs,
          {
            files: ['**/*.{js,jsx,mjs,cjs}'],
            ...tseslint.configs.disableTypeChecked,
          },
          {
            files: ['**/*.{js,jsx,mjs,cjs}'],
            rules: {
              '@typescript-eslint/explicit-function-return-type': 'off',
            },
          },
        )
      : []),
  ];
}

// https://github.com/iamturns/eslint-config-airbnb-typescript#setup
const tsAirbnb = compat.extends(
  isInstalled('react') ? 'eslint-config-airbnb-typescript' : 'eslint-config-airbnb-typescript/base',
);

// https://github.com/import-js/eslint-plugin-import#typescript
const tsImport = compat.extends('plugin:import/typescript');

const tsEslint = [
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
];

const tsProject = {
  languageOptions: {
    parserOptions: {
      project: true,
    },
  },
};

module.exports = {
  config,
  default: [...tsAirbnb, ...tsImport, ...tsEslint, tsProject],
};
