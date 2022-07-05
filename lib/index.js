"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var commander_1 = require("commander");
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var init_js_eslint_1 = __importDefault(require("./command/init-js-eslint"));
var install_dep_1 = __importDefault(require("./command/install-dep"));
var init_prettier_1 = __importDefault(require("./command/init-prettier"));
var init_stylelint_1 = __importDefault(require("./command/init-stylelint"));
var install_stylelint_dep_1 = __importDefault(require("./command/install-stylelint-dep"));
main();
function main() {
    var program = new commander_1.Command();
    var pkg = loadPackageInfo();
    program
        .name('hkt-cli')
        .description('一个命令行工具')
        .version(pkg.version);
    program.command('init-eslint')
        .description('初始化项目 eslint')
        .action(init_js_eslint_1["default"]);
    program.command('init-prettierrc')
        .description('初始化项目 prettierrc')
        .action(init_prettier_1["default"]);
    program
        .command('install-eslint')
        .description('安装eslint相关依赖')
        .action(install_dep_1["default"]);
    program
        .command('init-stylelint')
        .description('初始化项目 stylelint')
        .action(init_stylelint_1["default"]);
    program
        .command('install-stylelint')
        .description('安装stylelint相关依赖')
        .action(install_stylelint_dep_1["default"]);
    program.parse();
}
function loadPackageInfo() {
    var pkg = fs_extra_1["default"].readJsonSync(path_1["default"].join(__dirname, '../package.json'));
    return pkg;
}
