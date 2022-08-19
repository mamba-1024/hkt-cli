import { installDeps } from './util';

export default function () {
  const installTip =
    'npm i -D @hkt/eslint-rules @babel/core @babel/eslint-parser eslint-plugin-import';

  installDeps(installTip);
}
