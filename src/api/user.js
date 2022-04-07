import request from '@/utils/request'

//
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }
//
// export function logout() {
//   return request({
//     url: '/admin/info/logout',
//     method: 'delete'
//   })
// }
//
// export function getInfo(token) {
//   return request({
//     url: '/admin/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function fetchList(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
