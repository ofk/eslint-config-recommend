import globals from 'globals';

import airbnb from './airbnb.mjs';
import bestPractices, { typescript as tsBestPractices } from './best-practices.mjs';
import comments from './comments.mjs';
import prettier from './prettier.mjs';
import reactRefresh from './react-refresh.mjs';
import sorting from './sorting.mjs';
import typescript, { config } from './typescript.mjs';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
  },
  ...config(
    [...airbnb, ...reactRefresh, ...comments, ...bestPractices, ...sorting],
    [...typescript, ...tsBestPractices],
  ),
  ...prettier,
];
