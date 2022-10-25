import { installDeps } from './util';

export default function () {
  const installTip =
    'npm install --save-dev lint-staged @commitlint/cli @commitlint/config-conventional husky';

  installDeps(installTip);
}
