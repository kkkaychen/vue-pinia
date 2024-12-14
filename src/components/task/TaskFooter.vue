<template>
    <p>總任務數量： {{ taskStore.totalTasks }}</p>
    <p>已完成任務數量： {{ taskStore.completedTasks }}</p>
</template>

<script setup name="TaskFooter">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

</script>