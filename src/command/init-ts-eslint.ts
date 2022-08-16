import { cpFile } from './util';
import initPrettier from './init-prettier';

export default async function () {
  await cpFile('.eslintrc.js', 'ts');

  await cpFile('.eslintignore');

  await initPrettier();

  console.log('✅✅✅ 请执行 hkt-cli install-eslint 命令安装 eslint 相关依赖');
}
