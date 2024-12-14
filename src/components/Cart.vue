<template>

    <!-- 顯示購物車商品清單、商品總數和總價格。
    提供按鈕來添加商品、移除商品和清空購物車。 -->
    <div>
        <ul>
            <li v-for="item in cartStore.cartList" :key="item.id">
                {{ item.name }} * {{ item.quantity }} 個，價格： {{ item.price }}
                <button type="button" @click="cartStore.removeItem(item.id)">刪除此商品</button>
            </li>
        </ul>

        <div>
            <p>購物車商品數量： {{ cartStore.totalItems }}</p>
            <p>購物車商品總金額： {{ cartStore.totalPrice }}</p>
        </div>

        <button type="button" @click="cartStore.addItem({id: 1, name: '商品AAA', price: 280, quantity: 1})">加入商品 AAA</button>
        <button type="button" @click="cartStore.addItem({id: 4, name: '商品DDD', price: 650, quantity: 1})">加入商品 DDD</button>
        <button type="button" @click="cartStore.clearCart">清空購物車</button>
    </div>
    
    

</template>

<script setup>
import {useCartStore} from '@/stores/cart'

const cartStore = useCartStore()



</script>
