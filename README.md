构建一个自己的 cli 工具


[![OSCS Status](https://www.oscs1024.com/platform/badge/mamba-1024/first-rule.svg?size=small)](https://www.oscs1024.com/project/mamba-1024/first-rule?ref=badge_small)

## 全局安装cli工具

```
npm install -g hkt-cli

```

## 使用说明

### 检测 hkt-cli 的版本是否最新的

```
hkt-cli
```

### 查看 hkt-cli 命令行说明
```
hkt-cli -h

init-eslint-js           初始化 JS 项目 eslint
install-eslint-js        安装 JS 项目 eslint 相关依赖
init-prettierrc          初始化项目 prettierrc
init-stylelint           初始化项目 stylelint
init-eslint-ts           初始化 TS 项目 eslint
install-eslint-ts        安装 TS 项目 eslint 相关依赖
init-eslint-react-ts     初始化 typescript react 项目 eslint
install-eslint-react-ts  安装 typescript react 项目的 eslint 相关依赖
init-eslint-react-js     初始化 javascript react 项目 eslint
install-eslint-react-js  安装 javascript react 项目的 eslint 相关依赖
install-stylelint        安装stylelint相关依赖
init-commitlint          初始化项目 commitlint
install-commitlint       安装commitlint相关依赖
```


### 配置专属的 eslint 规则

> 会自动在根目录生成 `.eslintrc.js`、`.eslintignore` 和 `.prettierrc.js` 文件

- eslint for javascript
  1. 初始化 JS 项目 eslint 规则

  ```
  hkt-cli init-eslint-js
  ```
  2. 安装 JS 项目 eslint 相关依赖

  ```
  hkt-cli install-eslint-js
  ```
- eslint for typescript
  1. 初始化 TS 项目 eslint 规则

  ```
  hkt-cli init-eslint-ts
  ```
  2. 安装 TS 项目 eslint 相关依赖
  ```
  hkt-cli install-eslint-ts
  ```
- eslint for React + Typescript

  1. 初始化 React + TS 项目 eslint 规则
  ```
  hkt-cli init-eslint-react-ts
  ```
  2. 安装 React + TS 项目 eslint 相关依赖
  ```
  hkt-cli install-eslint-react-ts
  ```

- eslint for React + javascript

  1. 初始化 React + JS 项目 eslint 规则
  ```
  hkt-cli init-eslint-react-js
  ```
  2. 安装 React + JS 项目 eslint 相关依赖
  ```
  hkt-cli install-eslint-react-js
  ```

- stylelint
  1. 初始化 `stylelint`

```
hkt-cli init-stylelint
```
  2. 安装 `stylelint` 依赖

```
hkt-cli install-stylelint
```

- prettier
  1. 配置 `prettier`，配合 `esllint` 使用

```
hkt-cli init-prettier
```

- commitlint
  1. 初始化 `commitlint`

```
hkt-cli init-commitlint
```
  2. 安装 `commitlint` 依赖， 其中已经包含 `husky` 、 `lint-staged`

> 在安装 `husky` 依赖前，请在 `package.json` 的 `script` 中新增 `"prepare": "husky install"`，这样在安装 `husky` 后会自动启动 `Git hooks` 功能，相当于手动执行 `npx husky install`。

```
hkt-cli install-commitlint
```
  3. 手动在项目的 `package.json` 中配置 `commitlint` 的 `lint-staged`

```
// 具体 lint-staged 要执行什么操作，根据自己的项目而定，下面只是一个实例
"lint-staged": {
    "./src/**/*.{js,ts,tsx,jsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "./src/**/*.{css,less,scss}": [
      "stylelint --syntax less --fix",
      "git add"
    ]
  }
```
  4. 配置 `husky` 的 `commitlint` 和 `pre-commit`

```
// 自动生成 .husky/commit-msg，执行 commitlint
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

// 自动生成 .husky/pre-commit 执行 lint-staged
npx husky add .husky/pre-commit "npx lint-staged"

```

### 项目脚手架

- 可以直接 `clone` 项目 [react-admin](https://github.com/mamba-1024/react-admin-vite)

```
git clone https://github.com/mamba-1024/react-admin-vite.git

cd react-admin-vite

// 安装依赖
npm install

// 本地查看效果
npm run dev 
```
