import path from 'path';
import fse from 'fs-extra';

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
