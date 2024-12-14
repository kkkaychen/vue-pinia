<template>
    <h2>任務列表</h2>
    <ul>
        <li v-for="task in taskStore.tasks" :key="task.id">
            {{ task.title }}
            <button type="button" @click="taskStore.toggleTask(task.id)">狀態更改</button>
            <button type="button" @click="taskStore.removeTask(task.id)">刪除</button>
        </li>
    </ul>
</template>

<script setup name="TaskList">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

</script>