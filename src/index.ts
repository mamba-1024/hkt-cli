import { Command } from 'commander';
import fse from 'fs-extra';
import pathUtil from 'path';
import initJslint from './command/init-js-eslint';
import initReactEslint from './command/init-react-eslint';
import installEslint from './command/install-dep';
import installEslintReact from './command/install-dep-react';
import initPrettierrc from './command/init-prettier';
import initStylelint from './command/init-stylelint';
import installStylelint from './command/install-stylelint-dep';
import initCommitlint from './command/init-commitlint';
import installCommitlint from './command/install-commitlint-dep';
import initTsLint from './command/init-ts-eslint';
import installTsLint from './command/install-dep-ts';

function loadPackageInfo() {
  const pkg = fse.readJsonSync(pathUtil.join(__dirname, '../package.json'));
  return pkg;
}

function main() {
  const program = new Command();

  const pkg = loadPackageInfo();

  program.name('hkt-cli').description('一个命令行工具').version(pkg.version);

  program.command('init-eslint-js').description('初始化 JS 项目 eslint').action(initJslint);

  program.command('install-eslint-js').description('安装 JS 项目 eslint 相关依赖').action(installEslint);

  program.command('init-prettierrc').description('初始化项目 prettierrc').action(initPrettierrc);

  program.command('init-stylelint').description('初始化项目 stylelint').action(initStylelint);

  program.command('init-eslint-ts').description('初始化 TS 项目 eslint').action(initTsLint);

  program.command('install-eslint-ts').description('安装 TS 项目 eslint 相关依赖').action(installTsLint);

  program
    .command('init-eslint-react')
    .description('初始化 typescript react 项目 eslint')
    .action(initReactEslint);

  program
    .command('install-eslint-react')
    .description('安装 typescript react 项目的 eslint 相关依赖')
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
