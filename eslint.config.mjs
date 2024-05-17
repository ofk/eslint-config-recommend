import config from './index.cjs';

export default [
  {
    ignores: ['**/test/**'],
  },
  ...config,
  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-default-export': 'off',
      'import/no-unresolved': 'off',
    },
  },
];
