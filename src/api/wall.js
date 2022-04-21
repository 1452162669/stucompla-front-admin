import request from '@/utils/request'

export function fetchWallList(query) {
  return request({
    url: '/wall/auditWallList',
    method: 'get',
    params: query
  })
}

export function auditWall(data) {
  return request({
    url: '/wall/audit',
    method: 'post',
    data
  })
}
