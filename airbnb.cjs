const { FlatCompat } = require('@eslint/eslintrc');
const { isInstalled } = require('./isInstalled.cjs');

const compat = new FlatCompat();

module.exports = {
  default: compat.extends(
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage
    ...(isInstalled('react')
      ? ['eslint-config-airbnb', 'eslint-config-airbnb/hooks']
      : ['eslint-config-airbnb/base']),
  ),
};
