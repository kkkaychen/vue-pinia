import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// 在 Setup Store 中：

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

export const useUserStore = defineStore('user', () => {
    // 使用 list 存儲用戶名單（初始值為空陣列）。
    const list = ref([])
    // 使用 actions 定義一個 fetchUsers 方法，從模擬 API (https://jsonplaceholder.typicode.com/users) 獲取用戶資料並存入 list。
    const fetchUsers = async() => {
        try{
            let res =  await axios.get('https://jsonplaceholder.typicode.com/users')
            list.value = res.data
        } catch (err) {
            console.error(err)
        }
        
    }
    // 使用 getters 定義 userCount，返回用戶的總數。
    const userCount = computed(() => list.value.length)

    return {
        list,
        fetchUsers,
        userCount
    }

})