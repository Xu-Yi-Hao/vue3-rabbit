import request from "@/utils/http";


export function getCategoryApi() {
    return request({
        url: 'home/category/head'
    })
}