const globals = require('globals');
const airbnb = require('./airbnb.cjs');
const bestPractices = require('./best-practices.cjs');
const comments = require('./comments.cjs');
const prettier = require('./prettier.cjs');
const reactRefresh = require('./react-refresh.cjs');
const sorting = require('./sorting.cjs');
const typescript = require('./typescript.cjs');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
  },
  ...typescript.config(
    [
      ...airbnb.default,
      ...reactRefresh.default,
      ...comments.default,
      ...bestPractices.default,
      ...sorting.default,
    ],
    [...typescript.default, ...bestPractices.typescript],
  ),
  ...prettier.default,
];
