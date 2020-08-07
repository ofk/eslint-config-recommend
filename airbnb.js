const { isInstalled } = require('./utils');

module.exports = {
  extends: isInstalled('react')
    ? ['eslint-config-airbnb', 'eslint-config-airbnb/hooks']
    : ['eslint-config-airbnb/base'],
};
