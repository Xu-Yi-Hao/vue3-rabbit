// 封装购物车模块
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    // 定义store
    const cartList = ref([])
    // 定义action
    // 获取最新购物车列表
    const updateCartList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }
    // 添加购物车
    const addCart = async (goods) => {
        if (userStore.userInfo.token) {
            await insertCartAPI(goods)
            updateCartList()
        } else {
            const item = cartList.value.find(item => goods.skuId === item.skuId)
            if (item) {
                item.count = item.count + goods.count
            } else {
                cartList.value.push(goods)
            }
            console.log(item);
        }

    }
    // 删除购物车商品
    const delCart = async (skuId) => {
        if (userStore.userInfo.token) {
            await delCartAPI([skuId])
            updateCartList()
        } else {
            cartList.value = cartList.value.filter(item => item.skuId !== skuId)
        }

    }
    // 更改商品选中状态
    const singleCheck = (selected, id) => {
        const item = cartList.value.find(item => item.skuId === id)
        item.selected = selected
    }
    // 清空购物车
    const clearCart = () => {
        cartList.value = []
    }
    // 商品全选
    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }
    // 计算属性
    // 购物车商品数量总和
    const allCount = computed(() => cartList.value.reduce((count, cartList) => count + cartList.count, 0))
    // 购物车商品价格总和
    const allPrice = computed(() => cartList.value.reduce((price, cartList) => price + cartList.price * cartList.count, 0))
    // 是否全选
    const isAll = computed(() => cartList.value.every(item => item.selected))
    // 已选择商品数量总和
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((count, cartList) => count + cartList.count, 0))
    // 已选择商品价格总和
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((price, cartList) => price + cartList.price * cartList.count, 0))
    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        clearCart,
        updateCartList
    }
}, {
    persist: true
})