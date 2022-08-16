import shell from 'shelljs';

export default function () {
  const installTip =
    'npm i -D @hkt/eslint-rules @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript';
  console.log('开始执行 npm install ... 🚀🚀🚀🚀🚀🚀');
  shell.echo(installTip);
  console.log('🚀🚀🚀🚀🚀🚀 install 开始，请稍后..');
  shell.exec(installTip, { silent: true }, (code: number) => {
    if (code === 0) {
      console.log('npm install 完成 ✅✅✅✅✅✅');
    } else {
      console.log('npm install 失败 ❌❌❌❌❌❌');
    }
  });
}
