构建一个自己的 cli 工具

## 全局安装cli工具

```
npm install -g hkt-cli

```

## 使用说明

### 检测 hkt-cli 的版本是否最新的

```
hkt-cli
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
  hkt-cli init-eslint-react
  ```
  2. 安装 React + TS 项目 eslint 相关依赖
  ```
  hkt-cli install-eslint-react
  ```

- stylelint
  1. 初始化 stylelint

```
hkt-cli init-stylelint
```
  2. 安装 stylelint 依赖

```
hkt-cli install-stylelint
```

- prettier
  1. 配置 prettier，配合 esllint 使用

```
hkt-cli init-prettier
```

- commitlint
  1. 初始化 commitlint

```
hkt-cli init-commitlint
```
  2. 安装 commitlint 依赖， 其中已经包含 `husky` 、 `lint-staged` 和 `pre-commit`

```
hkt-cli install-commitlint
```
  3. 手动在项目的 `package.json` 中配置 commitlint 的 husky，lint-staged 和 pre-commit

```
"lint-staged": {
  "*.{js,ts,tsx,jsx}": "eslint",
  "*.{css,less,scss}": "stylelint"
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### 后续更新

- 生成项目脚手架
