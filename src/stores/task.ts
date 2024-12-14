import { computed } from "@vue/reactivity"
import { defineStore } from "pinia"
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
    // state 
    // tasks: 待辦事項列表（每個項目包含 id, title, completed）。
    const tasks = ref<Task[]>([])

    // actions
    // addTask(title): 新增一個未完成的任務。
    const addTask = (title:string) => {
        
        tasks.value.push({
            id: Date.now(), 
            title: title, 
            completed: false
        })
    }

    // toggleTask(id): 切換指定任務的完成狀態。
    const toggleTask = (id:number) => {
        const task = tasks.value.find(task => task.id === id)
        if (task) {
            task.completed = !task.completed
        }
    }

    // removeTask(id): 刪除指定任務。
    const removeTask = (id:number) => {
        tasks.value = tasks.value.filter((task) => task.id !== id)
    }

    // Getter
    // 計算總任務數量 totalTasks
    const totalTasks = computed(() => tasks.value.length)

    // 計算已完成任務數量 completedTasks
    const completedTasks = computed(() => tasks.value.filter((task) => task.completed).length)


    return {
        tasks,
        addTask,
        removeTask,
        toggleTask,
        totalTasks,
        completedTasks
    }
})

export interface Task {
    id:number,
    title:string, 
    completed:boolean
}