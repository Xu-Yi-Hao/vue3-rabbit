// 获取轮播图
import { onMounted, ref } from 'vue'
import { getBannerList } from '@/apis/home'

export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerList({
            distributionSite: '2'
        })
        bannerList.value = res.result
    }

    onMounted(() => getBanner())
    return {
        bannerList
    }
}