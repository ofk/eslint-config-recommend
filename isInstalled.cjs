/** @type {(path: string) => boolean} */
function installCheck(path) {
  try {
    require.resolve(path);
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      return false;
    }
    throw e;
  }
  return true;
}

const installedList = {};

/** @type {(path: string) => boolean} */
function isInstalled(path) {
  if (!(path in installedList)) {
    installedList[path] = installCheck(path);
  }
  return installedList[path];
}

module.exports = {
  isInstalled,
};
