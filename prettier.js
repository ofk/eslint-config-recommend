const { isInstalled } = require('./utils');

module.exports = {
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    ...(isInstalled('react') ? ['prettier/react'] : []),
  ],
};
