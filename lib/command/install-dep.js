"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var shelljs_1 = __importDefault(require("shelljs"));
function default_1() {
    var installTip = 'npm install --save-dev eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks';
    console.log('开始执行 npm install ... 🚀🚀🚀🚀🚀🚀');
    shelljs_1["default"].echo(installTip);
    shelljs_1["default"].exec(installTip, { silent: true }, function (code, stdout, stderr) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    });
}
exports["default"] = default_1;
