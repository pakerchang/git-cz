module.exports = {
  types: [
    { value: "feat", name: "feat: 增加" },
    { value: "fix", name: "fix: bug fix" },
    { value: "style", name: "style: 樣式修改(不影響邏輯)" },
    { value: "docs", name: "docs: 修改文件" },
    { value: "test", name: "test: 新增或修改現有的測試" },
    { value: "ref", name: "refactor: 重構" },
    {
      value: "chore",
      name: "chore: 修改建置流程、包管理、構建過程或輔助工具的變動。不包含修改測試檔、src 裡的檔案",
    },
    { value: "revert", name: "revert: 版本回退" },
    { value: "del", name: "del: 刪除" },
  ],
  scopes: ["component", "files", "style", "utils", "config", "other"],
  messages: {
    type: "選擇更改類型:\n",
    scope: "選擇 scope（Options）：\n",
    customScope: "請輸入自定義的 scope：",
    subject: "簡述:\n",
    body: '詳細描述. 使用"|"換行:\n',
    breaking: "Breaking Changes列表:\n",
    footer: "關閉的issues列表. E.g.: #31, #34:\n",
    confirmCommit: "確定送出?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
