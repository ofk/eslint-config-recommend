const { FlatCompat } = require('@eslint/eslintrc');
const tseslint = require('typescript-eslint');

const { isInstalled } = require('./isInstalled.cjs');

const compat = new FlatCompat();

// https://typescript-eslint.io/

const legacyExtends = [
  // https://github.com/iamturns/eslint-config-airbnb-typescript#setup
  isInstalled('react') ? 'eslint-config-airbnb-typescript' : 'eslint-config-airbnb-typescript/base',
  // https://github.com/import-js/eslint-plugin-import#typescript
  'plugin:import/typescript',
];

const turnOff = {
  files: ['**/*.{js,jsx,mjs,cjs}'],
  ...tseslint.configs.disableTypeChecked,
  rules: {
    ...tseslint.configs.disableTypeChecked.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};

/** @type {(jsConfigs: import('typescript-eslint').ConfigWithExtends[], tsConfigs: import('typescript-eslint').ConfigWithExtends[]) => import('eslint').FlatConfig[]} */
function config(jsConfigs, tsConfigs) {
  return [
    ...jsConfigs,
    ...(isInstalled('typescript') ? tseslint.config(...jsConfigs, ...tsConfigs, turnOff) : []),
  ];
}

module.exports = {
  compat: () => [
    ...compat.extends(...legacyExtends),
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          project: true,
        },
      },
    },
  ],
  config,
  legacy: {
    extends: [
      ...legacyExtends,
      // https://typescript-eslint.io/users/configs
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/strict-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    overrides: [
      {
        files: turnOff.files,
        rules: turnOff.rules,
      },
    ],
    parserOptions: {
      project: true,
    },
  },
};
