import { cpFile } from './util';
import chalk from 'chalk';

export default async function () {
  await cpFile('.eslintrc.js', 'ts-react');

  await cpFile('.eslintignore');

  global.console.log(chalk.green('✅✅✅ 请执行 hkt-cli install-eslint-react-ts 命令安装 eslint 相关依赖'));
}
