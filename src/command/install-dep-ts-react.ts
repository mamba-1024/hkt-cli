import { installDeps } from './util';

export default function () {
  const installTip =
    'npm i -D @hkt/eslint-rules @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y';

  installDeps(installTip);
}
