const { isInstalled } = require('./utils');

module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    ...(isInstalled('react') ? ['prettier/react'] : []),
  ],
};
