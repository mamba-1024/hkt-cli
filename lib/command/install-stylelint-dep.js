"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var shelljs_1 = __importDefault(require("shelljs"));
function default_1() {
    var installTip = 'npm install --save-dev stylelint stylelint-scss stylelint-config-standard stylelint-config-standard-scss';
    console.log('开始执行 npm install ... 🚀🚀🚀🚀🚀🚀');
    shelljs_1["default"].echo(installTip);
    console.log('🚀🚀🚀🚀🚀🚀 install 开始，请稍后..');
    shelljs_1["default"].exec(installTip, { silent: true }, function (code, stdout, stderr) {
        if (code === 0) {
            console.log('npm install 完成 ✅✅✅✅✅✅');
        }
        else {
            console.log('npm install 失败 ❌❌❌❌❌❌');
        }
    });
}
exports["default"] = default_1;
