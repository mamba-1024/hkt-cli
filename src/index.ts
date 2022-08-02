import { Command } from 'commander';
import fse from 'fs-extra';
import pathUtil from 'path';
import initEslint from './command/init-js-eslint';
import initReactEslint from './command/init-react-eslint';
import installEslint from './command/install-dep';
import installEslintReact from './command/install-dep-react';
import initPrettierrc from './command/init-prettier';
import initStylelint from './command/init-stylelint';
import installStylelint from './command/install-stylelint-dep';
import initCommitlint from './command/init-commitlint';
import installCommitlint from './command/install-commitlint-dep';

function loadPackageInfo() {
  const pkg = fse.readJsonSync(pathUtil.join(__dirname, '../package.json'));
  return pkg;
}

function main() {
  const program = new Command();

  const pkg = loadPackageInfo();

  program.name('hkt-cli').description('一个命令行工具').version(pkg.version);

  program.command('init-eslint').description('初始化 js 项目 eslint').action(initEslint);

  program.command('install-eslint').description('安装 eslint 相关依赖').action(installEslint);

  program.command('init-prettierrc').description('初始化项目 prettierrc').action(initPrettierrc);

  program.command('init-stylelint').description('初始化项目 stylelint').action(initStylelint);

  program
    .command('init-eslint-react')
    .description('初始化 react 项目 eslint')
    .action(initReactEslint);

  program
    .command('install-eslint-react')
    .description('安装 react 项目的 eslint 相关依赖')
    .action(installEslintReact);

  program
    .command('install-stylelint')
    .description('安装stylelint相关依赖')
    .action(installStylelint);

  program.command('init-commitlint').description('初始化项目 commitlint').action(initCommitlint);

  program
    .command('install-commitlint')
    .description('安装commitlint相关依赖')
    .action(installCommitlint);

  program.parse();
}

main();
