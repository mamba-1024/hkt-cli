
import { cpFile } from './util';
import initPrettier from './init-prettier';

export default async function () {
  await cpFile('.eslintrc.js');

  // await cpFile('.eslintignore')

  // await initPrettier();
}