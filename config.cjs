const airbnb = require('./airbnb.cjs');
const bestPractices = require('./best-practices.cjs');
const comments = require('./comments.cjs');
const prettier = require('./prettier.cjs');
const reactRefresh = require('./react-refresh.cjs');
const sorting = require('./sorting.cjs');
const typescript = require('./typescript.cjs');

module.exports = [
  ...typescript.config(
    [
      ...airbnb.compat(),
      ...reactRefresh.default,
      ...comments.default,
      ...bestPractices.default,
      ...sorting.default,
    ],
    [...typescript.compat(), ...bestPractices.typescript],
  ),
  ...prettier.default,
];
