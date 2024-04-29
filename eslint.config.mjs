import config from './index.mjs';

export default [
  {
    ignores: ['**/test/**'],
  },
  ...config,
  {
    rules: {
      'import/no-default-export': 'off',
      'import/no-unresolved': 'off',
    },
  },
];
