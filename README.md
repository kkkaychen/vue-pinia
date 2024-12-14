# vue-pinia

## pinia 練習
### 1. Task
- Task Store：中央管理任務數據，確保所有操作和狀態變更在一個地方進行。使用 Actions 操作任務，Getters 提供統計數據。

- TaskInput.vue：專注於新增任務的交互。通過 Pinia Store 的 addTask 方法新增任務。

- TaskList.vue：負責顯示任務列表。通過 Pinia Store 的 toggleTask 和 removeTask 方法操作任務。

- TaskFooter.vue：動態顯示統計數據，通過 Pinia Store 的 Getters 獲取。
