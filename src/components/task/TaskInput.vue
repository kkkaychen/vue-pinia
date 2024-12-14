<template>
    <input type="text" placeholder="輸入任務" v-model="taskTitle">
    <button @click="taskStore.addTask(taskTitle)">加入任務清單</button>
</template>

<script setup name="TaskInput">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

const taskTitle = ref('')

</script>