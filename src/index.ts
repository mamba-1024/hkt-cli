import { Command } from 'commander';
import fse from 'fs-extra';
import { promisify } from 'util';
import { exec } from 'child_process';
import semver from 'semver';
import chalk from 'chalk';
import pathUtil from 'path';
import initJslint from './command/init-js-eslint';
import initReactTsEslint from './command/init-ts-react-eslint';
import initReactJSEslint from './command/init-js-react-eslint';
import initJsEslint from './command/install-dep';
import installEslintTsReact from './command/install-dep-ts-react';
import initPrettierrc from './command/init-prettier';
import initStylelint from './command/init-stylelint';
import installStylelint from './command/install-stylelint-dep';
import initCommitlint from './command/init-commitlint';
import installCommitlint from './command/install-commitlint-dep';
import initTsLint from './command/init-ts-eslint';
import installTsLint from './command/install-dep-ts';
import installEslintJsReact from './command/install-dep-js-react';

interface PackageInfo {
  name: string;
  'dist-tags': {
    latest: string;
  };
  versions: string[];
}

function loadPackageInfo() {
  const pkg = fse.readJsonSync(pathUtil.join(__dirname, '../package.json'));
  return pkg;
}

// 命令行工具的版本检查
async function notifyUpgrade() {
  const pkg = loadPackageInfo();
  global.console.log('正在请求版本更新信息');
  const res = await promisify(exec)(`npm view ${pkg.name} --json`)
    .catch((e) => {
      return { stderr: e.message, stdout: '' };
    });

  if (res.stderr) {
    global.console.error(res.stderr);
    return;
  }

  const info = parseJson(res.stdout) as PackageInfo;
  if (!info) {
    global.console.error('parse json error', res.stdout);
    return;
  }

  const latest = info['dist-tags']?.latest;
  if (semver.lte(latest, pkg.version)) {
    global.console.log(chalk.green(`已经是最新版本：${latest}`));
    return;
  }

  global.console.log(
    chalk.yellow(`发现新的版本!!! 运行 npm install -g ${info.name}@${latest} 升级`),
    `当前版本(${pkg.version})`,
  );
}

function parseJson(json: string) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

function main() {
  const program = new Command();

  const pkg = loadPackageInfo();

  program.name('hkt-cli').description('一个命令行工具').version(pkg.version).action(notifyUpgrade);

  program.command('init-eslint-js').description('初始化 JS 项目 eslint').action(initJslint);

  program.command('install-eslint-js').description('安装 JS 项目 eslint 相关依赖').action(initJsEslint);

  program.command('init-prettierrc').description('初始化项目 prettierrc').action(initPrettierrc);

  program.command('init-stylelint').description('初始化项目 stylelint').action(initStylelint);

  program.command('init-eslint-ts').description('初始化 TS 项目 eslint').action(initTsLint);

  program.command('install-eslint-ts').description('安装 TS 项目 eslint 相关依赖').action(installTsLint);

  program
    .command('init-eslint-react-ts')
    .description('初始化 typescript react 项目 eslint')
    .action(initReactTsEslint);

  program
    .command('install-eslint-react-ts')
    .description('安装 typescript react 项目的 eslint 相关依赖')
    .action(installEslintTsReact);

  program
    .command('init-eslint-react-js')
    .description('初始化 javascript react 项目 eslint')
    .action(initReactJSEslint);

  program
    .command('install-eslint-react-js')
    .description('安装 javascript react 项目的 eslint 相关依赖')
    .action(installEslintJsReact);

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
