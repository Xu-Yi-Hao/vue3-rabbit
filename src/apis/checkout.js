import request from "@/utils/http";

// 获取详情接口
export function getCheckInfoAPI() {
    return request({
        url: '/member/order/pre',
    })
}

// 创建订单
export function createOrderAPI(data) {
    return request({
        url: '/member/order',
        method: 'post',
        data
    })
}
