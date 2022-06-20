import path from 'path';
import fse from 'fs-extra';
const log = require("tracer").colorConsole({
  format: [
    '{{message}}', //default format
  ]
});

export const cpFile = async (name: string) => {
  const appRoot = path.join(process.cwd());
  // 获取配置文件
  const toName = path.join(appRoot, name);
  // 获取源文件
  const fromPath = path.join(__dirname, `../template/${name}`);
  // 判断是否存在
  if (fse.existsSync(toName)) {
    log.error(`${toName}已存在`);
    return;
  }

  fse.copySync(fromPath, toName);

  log.error(`${name} 配置文件创建成功`);

}