// 管理用户数据相关
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from '@/stores/cart'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    // 1.定义管理用户数据的state
    const userInfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async (data) => {
        const res = await loginAPI(data)
        userInfo.value = res.result
        await mergeCartAPI(cartStore.cartList)
        cartStore.updateCartList()
    }

    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }
    // 3.以对象格式return出去
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true
    })
