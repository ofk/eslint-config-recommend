const { isInstalled } = require('./utils');

module.exports = {
  extends: ['plugin:prettier/recommended', ...(isInstalled('react') ? ['prettier/react'] : [])],
};
