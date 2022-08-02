import { cpFile } from './util';
import initPrettier from './init-prettier';

export default async function () {
  await cpFile('.eslintrc.js', 'react');

  await cpFile('.eslintignore');

  await initPrettier();

  console.log('✅✅✅ 请执行 hkt-cli install-eslint-react 命令安装 eslint 相关依赖');
}
