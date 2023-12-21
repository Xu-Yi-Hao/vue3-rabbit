import request from "@/utils/http";

// 加入购物车
export function insertCartAPI(data) {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId: data.skuId,
            count: data.count
        }
    })
}

// 获取购物车
export function findNewCartListAPI() {
    return request({
        url: '/member/cart',
    })
}

// 删除购物车
export function delCartAPI(ids) {
    return request({
        url: '/member/cart',
        method: 'delete',
        data: {
            ids
        }
    })
}

// 合并购物车
export function mergeCartAPI(data) {
    return request({
        url: '/member/cart/merge',
        method: 'post',
        data 
    })
}