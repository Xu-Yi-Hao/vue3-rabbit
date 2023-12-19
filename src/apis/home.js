import request from "@/utils/http";

// 获取轮播图数据
export function getBannerList(params = {}) {
    const { distributionSite = '1' } = params
    return request({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

// 获取新鲜好物
export const findNewAPI = () => {
    return request({
        url: '/home/new'
    })
}

// 获取热门品牌
export const getHotAPI = () => {
    return request({
        url: '/home/hot'
    })
}

// 获取人气推荐
export const getGoodsAPI = () => {
    return request({
        url: '/home/goods'
    })
}