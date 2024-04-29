import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';

import { isInstalled } from './isInstalled.mjs';

const compat = new FlatCompat();

/** @type {(jsConfigs: import('typescript-eslint').ConfigWithExtends[], tsConfigs: import('typescript-eslint').ConfigWithExtends[]) => import('eslint').FlatConfig[]} */
export function config(jsConfigs, tsConfigs) {
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
export const tsAirbnb = compat.extends(
  isInstalled('react') ? 'eslint-config-airbnb-typescript' : 'eslint-config-airbnb-typescript/base',
);

// https://github.com/import-js/eslint-plugin-import#typescript
export const tsImport = compat.extends('plugin:import/typescript');

export const tsEslint = [
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
];

export const tsProject = {
  languageOptions: {
    parserOptions: {
      project: true,
    },
  },
};

export default [...tsAirbnb, ...tsImport, ...tsEslint, tsProject];
