import shell from 'shelljs';

export default function () {
  console.log('install****')
  shell.exec('npm install --save-dev eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks');
}
