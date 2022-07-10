module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,  // 要求提交类型
      'always',
      [ // 允许的提交类型
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档
        'style', // 格式
        'refactor', // 重构
        'perf', // 性能
        'chore', // 构建
        'test', // 测试
        'revert', // 回滚
        'merge', // 合并
        'rebase', // 合并
        'release', // 发布
        'publish', // 发布
        'build', // 构建
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-case': [0],
    'scope-empty': [0],
    'subject-min-length': [2, 'always', 4], // 提交标题最小长度
    'subject-max-length': [2, 'always', 100], // 提交标题最大长度
  }
};