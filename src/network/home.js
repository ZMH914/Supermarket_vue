import {request} from "./request" 


export function getHomeMultidata() {
    return request({
        url: '/mallBanner/getAllBanner'
    })
}

export function getHomeRecommend() {
    return request({
        url: '/mallGoods/getRecommend'
    })
}

export function getHomeGoods(type , page) {
    return request({
        url: '/mallGoods/getGoodData',
        params: {
            type,
            page
        }
    })
}