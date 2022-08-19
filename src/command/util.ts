import path from 'path';
import fse from 'fs-extra';
import chalk from 'chalk';
import shell from 'shelljs';

const log = require('tracer').colorConsole({
  format: [
    '{{message}}', // default format
  ],
});

export const cpFile = async (name: string, prefix?: string) => {
  const appRoot = path.join(process.cwd());
  // 获取配置文件
  const toName = path.join(appRoot, name);
  // 获取源文件
  const filePath = prefix ? `../../template/${prefix}${name}` : `../../template/${name}`;
  const fromPath = path.join(__dirname, filePath);
  // 判断是否存在
  if (fse.existsSync(toName)) {
    log.error(`${toName}已存在`);
    return;
  }

  fse.copySync(fromPath, toName);

  log.error(`${name} 配置文件创建成功`);
};

// 安装依赖方法
export const installDeps = async (installTip: string) => {
  global.console.log(chalk.yellow('开始执行 npm install 🚀🚀🚀🚀🚀🚀'));
  shell.echo(installTip);
  global.console.log(chalk.yellow('🚀🚀🚀🚀🚀🚀 install 开始，请稍后..'));
  shell.exec(installTip, { silent: true }, (code: number) => {
    if (code === 0) {
      global.console.log(chalk.green('npm install 完成 ✅✅✅✅✅✅'));
    } else {
      global.console.log(chalk.red('npm install 失败 ❌❌❌❌❌❌。请手动安装！🐞🐞'));
    }
  });
};
