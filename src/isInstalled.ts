function installCheck(path: string): boolean {
  try {
    // eslint-disable-next-line unicorn/prefer-module
    require.resolve(path);
  } catch (e) {
    if (e instanceof Error && 'code' in e && e.code === 'MODULE_NOT_FOUND') {
      return false;
    }
    throw e;
  }
  return true;
}

const installedList: Record<string, boolean> = {};

export function isInstalled(path: string): boolean {
  if (!(path in installedList)) {
    installedList[path] = installCheck(path);
  }
  return installedList[path];
}
