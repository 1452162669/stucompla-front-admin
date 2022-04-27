import request from '@/utils/request'

export function fetchGoodsList(query) {
  return request({
    url: '/goods/getList',
    method: 'get',
    params: query
  })
}

export function unShelve(data) {
  return request({
    url: '/goods/unShelve/' + data,
    method: 'post'
  })
}
export function deleteGoods(data) {
  return request({
    url: '/goods/deleteGoods/' + data,
    method: 'post'
  })
}
