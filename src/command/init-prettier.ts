import { cpFile } from './util';
import installDeps from './install-prettier-dep';

export default async function () {
  await cpFile('.prettierrc.js');

  // 安装依赖
  await installDeps();
}
