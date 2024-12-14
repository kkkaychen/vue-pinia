import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// 在 Setup Store 中：

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

export const useCounterStore = defineStore('counter', () => {
  // 定義資料
  // ref() 就是 state 属性
  const count = ref(0)

  // getter 定義
  // computed() 就是 getters
  const doubleCount = computed(() => count.value * 2)

  // 定義修改資料的方法 (action 同步+非同步)
  // function() 就是 actions
  function increment() {
    count.value++
  }


  // ref() 就是 state 属性
  const list = ref([])

  // 定義非同步 action
  // function() 就是 actions
  const fetchList = async () => {
    // try {
    //   let res = await axios.get('http://localhost:8082/user/activeUsers')
    //   list.value = res.data
    // } catch (error) {
    //   console.error('Failed to fetch list:', error);
    // }
  }


  // 以物件的方式 return 供元件使用
  return { count, doubleCount, increment, list, fetchList }
})
