const airbnb = require('./airbnb.cjs');
const eslintComments = require('./eslint-comments.cjs');
const perfectionist = require('./perfectionist.cjs');
const prettier = require('./prettier.cjs');
const reactRefresh = require('./react-refresh.cjs');
const typescript = require('./typescript.cjs');

function mergeConfig(...configs) {
  return configs.reduce(
    (
      acc,
      {
        env,
        extends: configExtends,
        files,
        globals,
        overrides,
        parser,
        parserOptions,
        plugins,
        rules,
      },
    ) => ({
      ...acc,
      env: env ?? acc.env,
      extends: [...acc.extends, ...(Array.isArray(configExtends) ? configExtends : [])],
      globals: { ...acc.globals, ...(globals ?? {}) },
      overrides: [
        ...acc.overrides,
        ...(Array.isArray(overrides) ? overrides : []),
        ...(rules && files ? [{ files, rules }] : []),
      ],
      parser: parser ?? acc.parser,
      parserOptions: parserOptions ?? acc.parserOptions,
      plugins: [...acc.plugins, ...(Array.isArray(plugins) ? plugins : [])],
      rules: { ...acc.rules, ...(rules && !files ? rules : {}) },
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
  ...airbnb.recommended,
  typescript.legacy,
  ...typescript.recommended,
  reactRefresh.legacy,
  ...reactRefresh.recommended,
  eslintComments.legacy,
  ...eslintComments.recommended,
  perfectionist.legacy,
  ...perfectionist.recommended,
  prettier.legacy,
);
