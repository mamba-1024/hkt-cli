#!/usr/bin/env node

console.log("Hello KT-CLI");
require('../lib/index.js');

// const program = require("commander");

// program
//   .command("create <type> [name] [otherParams...]")
//   .alias("c")
//   .description("Generates new code")
//   .action(function(type, name, otherParams) {
//     console.log("type", type);
//     console.log("name", name);
//     console.log("other", otherParams);
//     // 在这里执行具体的操作
//   });

// program.parse(process.argv);

// //写入文件
// function write(path, str) {
//   fs.writeFileSync(path, str);
// }
// //拷贝文件
// function copyTemplate(from, to) {
//   from = path.join(__dirname, from);
//   write(to, fs.readFileSync(from, "utf-8"));
// }

// program
//   .command("new [name]")
//   .alias("n")
//   .description("Creates a new project")
//   .action(function(name) {
//     const projectName = name || "myApp";
//     init({ app: projectName });
//   });

// const clone = require("git-clone");
// const program = require("commander");
// const shell = require("shelljs");
// const log = require("tracer").colorConsole();

// program.version("1.0.0").description("我的React—cli");

// program.command("create [project]").action(function( project) {
//   log.info("准备生成react模板；");
// //   log.info("使用例子：x-cli x-express myproject");
//   if (project) {
//     let pwd = shell.pwd();
//     log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`);
//     clone(
//       `https://github.com/huangketong/umi-react-admin.git`,
//       pwd + `/${project}`,
//       null,
//       function() {
//         shell.rm("-rf", pwd + `/${project}/.git`);
//         log.info("模板建立完成");
//       }
//     );
//   } else {
//     log.error("正确命令例子：kt-cli create myUmi");
//   }
// });
// program.parse(process.argv);
