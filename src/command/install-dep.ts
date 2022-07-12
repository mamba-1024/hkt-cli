import shell from 'shelljs';

export default function () {
  const installTip =
    'npm install --save-dev eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-config-prettier prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks';
  console.log('开始执行 npm install ... 🚀🚀🚀🚀🚀🚀');
  shell.echo(installTip);
  console.log('🚀🚀🚀🚀🚀🚀 install 开始，请稍后..');
  shell.exec(installTip, { silent: true }, (code, stdout, stderr) => {
    if (code === 0) {
      console.log('npm install 完成 ✅✅✅✅✅✅');
    } else {
      console.log('npm install 失败 ❌❌❌❌❌❌');
    }
  });
}
