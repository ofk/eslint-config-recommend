const { isInstalled } = require('./utils');

module.exports = {
  // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage
  extends: isInstalled('react')
    ? ['eslint-config-airbnb', 'eslint-config-airbnb/hooks']
    : ['eslint-config-airbnb/base'],
};
