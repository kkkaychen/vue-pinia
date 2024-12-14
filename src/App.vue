<script setup lang="ts" name="App">
// 引入 store
import {useCounterStore} from '@/stores/counter'
import {useUserStore} from '@/stores/user'
import {onMounted} from 'vue'
import Cart from '@/components/Cart.vue'
import TaskInput from '@/components/task/TaskInput.vue' 
import TaskList from '@/components/task/TaskList.vue' 
import TaskFooter from '@/components/task/TaskFooter.vue' 

// 執行方法取得 store 實體物件
const counterStore = useCounterStore()
const userStore = useUserStore()
// console.log(counterStore);


onMounted(() => {
  counterStore.fetchList()
  userStore.fetchUsers()
})


</script>

<template>
  <!-- <div class="topBlock"> 
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
    <br>
    <ul>
      <li v-for="item in counterStore.list" :key="item.id">{{ item.username }}</li>
    </ul>
    <br> 
    <p>用戶總數： {{ userStore.userCount }}</p>
    <br>
    <ul>
      <li v-for="item in userStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
    <br>
  </div>
  

  <Cart/>
  <hr> -->
  <TaskInput/>
  <TaskList/>
  <TaskFooter/>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.topBlock {
  padding: 30px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
