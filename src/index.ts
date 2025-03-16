import config from '@ofk/eslint-config';
import configPrettier from 'eslint-config-prettier';

import { isInstalled } from './isInstalled';

// eslint-disable-next-line import/no-default-export
export default function defineConfig(
  options: Parameters<typeof config>[0] = {},
): ReturnType<typeof config> {
  const settings = { ...options.settings };
  if (isInstalled('eslint-import-resolver-typescript')) {
    settings['import/resolver'] ??= {};
    (settings['import/resolver'] as Record<string, unknown>).typescript = {};
  }
  return config({
    ...options,
    extends: [isInstalled('prettier') ? configPrettier : {}, ...(options.extends ?? [])],
    react: 'react' in options ? options.react : isInstalled('react') ? {} : false,
    settings,
    ts: 'ts' in options ? options.ts : isInstalled('typescript') ? {} : false,
    vitest: 'vitest' in options ? options.vitest : isInstalled('vitest') ? {} : false,
  });
}
