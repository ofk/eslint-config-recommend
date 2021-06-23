const airbnbTypeScriptConfig = require('eslint-config-airbnb-typescript');
const airbnbTypeScriptShared = require('eslint-config-airbnb-typescript/lib/shared');

const { isInstalled } = require('./utils');

module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      settings: {
        ...airbnbTypeScriptShared.settings,
        ...(isInstalled('react') ? airbnbTypeScriptConfig.settings : {}),
      },
      rules: {
        ...airbnbTypeScriptShared.rules,
        ...airbnbTypeScriptShared.overrides[0].rules,
        ...(isInstalled('react') ? airbnbTypeScriptConfig.rules : {}),
      },
    },
  ],
};
