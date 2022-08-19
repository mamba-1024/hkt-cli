import { cpFile } from './util';
import chalk from 'chalk';

export default async function () {
  await cpFile('.eslintrc.js', 'ts');

  await cpFile('.eslintignore');

  global.console.log(chalk.green('✅✅✅ 请执行 hkt-cli install-eslint-ts 命令安装 eslint 相关依赖'));
}
