import { installDeps } from './util';

export default function () {
  const installTip = 'npm i -D @hkt/eslint-rules @babel/core @babel/eslint-parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y';

  installDeps(installTip);
}
