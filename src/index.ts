import { Command } from 'commander'
import fse from 'fs-extra'
import pathUtil from 'path'
import initEslint from './command/init-js-eslint';
import installEslint from './command/install-dep';
import initPrettierrc from './command/init-prettier';

main();

function main() {
  const program = new Command();

  const pkg = loadPackageInfo();

  program
    .name('hkt-cli')
    .description('一个命令行工具')
    .version(pkg.version);

  program.command('init-eslint')
  .description('初始化项目 eslint')
  .action(initEslint);

  program.command('init-prettierrc')
  .description('初始化项目 prettierrc')
  .action(initEslint);

  program
    .command('install-eslint')
    .description('安装eslint相关依赖')
    .action(installEslint);

  program.parse();
}

function loadPackageInfo() {
  const pkg = fse.readJsonSync(pathUtil.join(__dirname, '../package.json'));
  return pkg;
}
