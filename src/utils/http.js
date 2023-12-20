//  axios基础的封装
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const request = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
request.interceptors.request.use(config => {
    const { userInfo } = useUserStore()
    const token = userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
request.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    const { clearUserInfo } = useUserStore()
    console.log(e);
    ElMessage({ type: 'error', message: e.response.data.message })
    if (e.response.status === 401) {
        clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})


export default request
