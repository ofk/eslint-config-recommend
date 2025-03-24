import { defineConfig } from 'tsup';

export default defineConfig({
  banner: ({ format }) =>
    format === 'esm'
      ? {
          js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
        }
      : {},
  cjsInterop: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  skipNodeModulesBundle: true,
  splitting: true,
});
