import { cpFile } from './util';

export default async function () {
  await cpFile('commitlint.config.js');
}
