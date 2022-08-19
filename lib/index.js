"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var commander_1 = require("commander");
var fs_extra_1 = __importDefault(require("fs-extra"));
var util_1 = require("util");
var child_process_1 = require("child_process");
var semver_1 = __importDefault(require("semver"));
var chalk_1 = __importDefault(require("chalk"));
var path_1 = __importDefault(require("path"));
var init_js_eslint_1 = __importDefault(require("./command/init-js-eslint"));
var init_ts_react_eslint_1 = __importDefault(require("./command/init-ts-react-eslint"));
var init_js_react_eslint_1 = __importDefault(require("./command/init-js-react-eslint"));
var install_dep_1 = __importDefault(require("./command/install-dep"));
var install_dep_ts_react_1 = __importDefault(require("./command/install-dep-ts-react"));
var init_prettier_1 = __importDefault(require("./command/init-prettier"));
var init_stylelint_1 = __importDefault(require("./command/init-stylelint"));
var install_stylelint_dep_1 = __importDefault(require("./command/install-stylelint-dep"));
var init_commitlint_1 = __importDefault(require("./command/init-commitlint"));
var install_commitlint_dep_1 = __importDefault(require("./command/install-commitlint-dep"));
var init_ts_eslint_1 = __importDefault(require("./command/init-ts-eslint"));
var install_dep_ts_1 = __importDefault(require("./command/install-dep-ts"));
var install_dep_js_react_1 = __importDefault(require("./command/install-dep-js-react"));
function loadPackageInfo() {
    var pkg = fs_extra_1["default"].readJsonSync(path_1["default"].join(__dirname, '../package.json'));
    return pkg;
}
// 命令行工具的版本检查
function notifyUpgrade() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var pkg, res, info, latest;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    pkg = loadPackageInfo();
                    global.console.log('正在请求版本更新信息');
                    return [4 /*yield*/, (0, util_1.promisify)(child_process_1.exec)("npm view ".concat(pkg.name, " --json"))["catch"](function (e) {
                            return { stderr: e.message, stdout: '' };
                        })];
                case 1:
                    res = _b.sent();
                    if (res.stderr) {
                        global.console.error(res.stderr);
                        return [2 /*return*/];
                    }
                    info = parseJson(res.stdout);
                    if (!info) {
                        global.console.error('parse json error', res.stdout);
                        return [2 /*return*/];
                    }
                    latest = (_a = info['dist-tags']) === null || _a === void 0 ? void 0 : _a.latest;
                    if (semver_1["default"].lte(latest, pkg.version)) {
                        global.console.log(chalk_1["default"].green("\u5DF2\u7ECF\u662F\u6700\u65B0\u7248\u672C\uFF1A".concat(latest)));
                        return [2 /*return*/];
                    }
                    global.console.log(chalk_1["default"].yellow("\u53D1\u73B0\u65B0\u7684\u7248\u672C!!! \u8FD0\u884C npm install -g ".concat(info.name, "@").concat(latest, " \u5347\u7EA7")), "\u5F53\u524D\u7248\u672C(".concat(pkg.version, ")"));
                    return [2 /*return*/];
            }
        });
    });
}
function parseJson(json) {
    try {
        return JSON.parse(json);
    }
    catch (e) {
        return null;
    }
}
function main() {
    var program = new commander_1.Command();
    var pkg = loadPackageInfo();
    program.name('hkt-cli').description('一个命令行工具').version(pkg.version).action(notifyUpgrade);
    program.command('init-eslint-js').description('初始化 JS 项目 eslint').action(init_js_eslint_1["default"]);
    program.command('install-eslint-js').description('安装 JS 项目 eslint 相关依赖').action(install_dep_1["default"]);
    program.command('init-prettierrc').description('初始化项目 prettierrc').action(init_prettier_1["default"]);
    program.command('init-stylelint').description('初始化项目 stylelint').action(init_stylelint_1["default"]);
    program.command('init-eslint-ts').description('初始化 TS 项目 eslint').action(init_ts_eslint_1["default"]);
    program.command('install-eslint-ts').description('安装 TS 项目 eslint 相关依赖').action(install_dep_ts_1["default"]);
    program
        .command('init-eslint-react-ts')
        .description('初始化 typescript react 项目 eslint')
        .action(init_ts_react_eslint_1["default"]);
    program
        .command('install-eslint-react-ts')
        .description('安装 typescript react 项目的 eslint 相关依赖')
        .action(install_dep_ts_react_1["default"]);
    program
        .command('init-eslint-react-js')
        .description('初始化 javascript react 项目 eslint')
        .action(init_js_react_eslint_1["default"]);
    program
        .command('install-eslint-react-js')
        .description('安装 javascript react 项目的 eslint 相关依赖')
        .action(install_dep_js_react_1["default"]);
    program
        .command('install-stylelint')
        .description('安装stylelint相关依赖')
        .action(install_stylelint_dep_1["default"]);
    program.command('init-commitlint').description('初始化项目 commitlint').action(init_commitlint_1["default"]);
    program
        .command('install-commitlint')
        .description('安装commitlint相关依赖')
        .action(install_commitlint_dep_1["default"]);
    program.parse();
}
main();
