import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cart', () => {
    // 使用 cart 狀態存儲購物車商品（陣列，每個商品包含 id、name、price 和 quantity）。
    // states
    // const cart = ref<CartItem[]>([])

    const cartList = ref<CartItem[]>([
        {
            id: 1, name: '商品AAA', price: 280, quantity: 1
        },
        {
            id: 2, name: '商品BBB', price: 990, quantity: 2
        },
        {
            id: 3, name: '商品CCC', price: 1680, quantity: 1
        }
    ])
    

    // 定義以下 actions：
    //     addItem：添加商品到購物車。如果商品已存在，增加數量。
    const addItem = (item:CartItem) => {
        const existingItem = cartList.value.find((cartItem) => cartItem.id === item.id)
        if (existingItem) {
            existingItem.quantity += item.quantity
        } else {
            cartList.value.push(item)
        }
    }
    //     removeItem：從購物車中移除商品。
    const removeItem = (id: number) => {
        // 透過 filter 踢出掉此 id 的商品
        cartList.value = cartList.value.filter((item) => item.id !== id)
    }
    //     clearCart：清空購物車。
    const clearCart = () => {
        cartList.value = []
    }


    // 使用 getters 定義以下功能：
    //     totalItems：計算購物車中的商品總數。
    //      reduce 是 JavaScript 陣列的方法，用於將陣列中的每個元素按照一定邏輯累加成一個單一值。
    //      array.reduce((累加器, 當前元素) => {...}, 初始值)
    const totalItems = computed(() => {
        return cartList.value.reduce((total, item) => total + item.quantity, 0)
    })

    //     totalPrice：計算購物車中所有商品的總價格。
    const totalPrice = computed(() => {
        return cartList.value.reduce((total, item) => total + item.price * item.quantity, 0)
    })

    return{
        cartList,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice
    }
})

interface CartItem {
    id:number,
    name:string, 
    price:number,
    quantity:number
}