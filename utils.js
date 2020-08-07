const installCheck = (path) => {
  try {
    require(path);
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      return false;
    }
    throw e;
  }
  return true;
};

const installedList = {};

const isInstalled = (path) => {
  if (!(path in installedList)) {
    installedList[path] = installCheck(path);
  }
  return installedList[path];
};

module.exports = {
  isInstalled,
};
