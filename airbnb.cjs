const { FlatCompat } = require('@eslint/eslintrc');
const { isInstalled } = require('./isInstalled.cjs');

const compat = new FlatCompat();

// https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

const legacyExtends = isInstalled('react')
  ? ['eslint-config-airbnb', 'eslint-config-airbnb/hooks']
  : ['eslint-config-airbnb/base'];

module.exports = {
  compat: () => compat.extends(...legacyExtends),
  legacy: {
    extends: legacyExtends,
  },
};
