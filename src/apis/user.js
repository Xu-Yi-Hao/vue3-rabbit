import request from "@/utils/http";



export const loginAPI = (data) => {
    return request({
        url: '/login',
        method: 'POST',
        data
    })
}
// 猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}