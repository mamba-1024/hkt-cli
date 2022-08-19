import { cpFile } from './util';
import initPrettier from './init-prettier';
import chalk from 'chalk';

export default async function () {
  await cpFile('.eslintrc.js', 'js');

  await cpFile('.eslintignore');

  await initPrettier();

  global.console.log(chalk.green('✅✅✅ 请执行 hkt-cli install-eslint 命令安装 eslint 相关依赖'));
}
