"use strict";
exports.__esModule = true;
var util_1 = require("./util");
function default_1() {
    var installTip = 'npm install --save-dev lint-staged @commitlint/cli @commitlint/config-conventional husky';
    (0, util_1.installDeps)(installTip);
}
exports["default"] = default_1;
