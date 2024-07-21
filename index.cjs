const airbnb = require('./airbnb.cjs');
const bestPractices = require('./best-practices.cjs');
const comments = require('./comments.cjs');
const prettier = require('./prettier.cjs');
const reactRefresh = require('./react-refresh.cjs');
const sorting = require('./sorting.cjs');
const typescript = require('./typescript.cjs');

function mergeConfig(...configs) {
  return configs.reduce(
    (acc, config) => ({
      ...acc,
      ...config,
      extends: [...acc.extends, ...(Array.isArray(config.extends) ? config.extends : [])],
      overrides: [...acc.overrides, ...(Array.isArray(config.overrides) ? config.overrides : [])],
      plugins: [...acc.plugins, ...(Array.isArray(config.plugins) ? config.plugins : [])],
      rules: { ...acc.rules, ...(config.rules ?? {}) },
    }),
    {
      extends: [],
      overrides: [],
      plugins: [],
      rules: {},
    },
  );
}

module.exports = mergeConfig(
  {
    env: {
      browser: true,
    },
  },
  airbnb.legacy,
  typescript.legacy,
  reactRefresh.legacy,
  comments.legacy,
  sorting.legacy,
  ...bestPractices.default,
  ...bestPractices.typescript,
  prettier.legacy,
);
