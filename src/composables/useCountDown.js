import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
// 封装倒计时逻辑函数
export const useCountDown = () => {
    const router = useRouter()
    const timer = null
    // 1.响应式数据
    const time = ref(0)
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    // 2.开启倒计时函数
    const start = (currentTime) => {
        time.value = currentTime
        if (time.value >= 0) {
            timer = setInterval(() => {
                time.value--
            }, 1000);
        } else {
            router.push('/')
        }
    }
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}