import request from "@/utils/http";

// 获取详情接口
export function getOrderAPI(id) {
    return request({
        url: `/member/order/${id}`,
    })
}