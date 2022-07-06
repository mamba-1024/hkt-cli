构建一个自己的 cli 工具

## 全局安装cli工具

```
npm install -g hkt-cli

```

## 使用说明

### 配置专属的 eslint 规则

> 会自动在根目录生成 `.eslintrc.js`、`.eslintignore` 和 `.prettierrc.js` 文件

- eslint
  1. 初始化 eslint 规则

  ```
  hkt-cli init-eslint
  ```
  2. 安装的 eslint 依赖

  ```
  hkt-cli install-eslint
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
