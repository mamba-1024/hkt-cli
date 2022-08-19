import { installDeps } from './util';

export default async function () {
  const installTip = 'npm install --save-dev eslint-config-prettier eslint-plugin-prettier';

  installDeps(installTip);
}
