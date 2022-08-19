import { installDeps } from './util';

export default function () {
  const installTip =
    'npm install --save-dev stylelint stylelint-scss stylelint-config-standard stylelint-config-standard-scss';

  installDeps(installTip);
}
