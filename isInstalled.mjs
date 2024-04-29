/** @type {(path: string) => boolean} */
function installCheck(path) {
  try {
    import.meta.resolve(path);
  } catch (e) {
    if (e.code === 'ERR_MODULE_NOT_FOUND') {
      return false;
    }
    throw e;
  }
  return true;
}

const installedList = {};

/** @type {(path: string) => boolean} */
export function isInstalled(path) {
  if (!(path in installedList)) {
    installedList[path] = installCheck(path);
  }
  return installedList[path];
}
