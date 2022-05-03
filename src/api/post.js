import request from '@/utils/request'

export function fetchPostList(query) {
  return request({
    url: '/post/list',
    method: 'get',
    params: query
  })
}

export function fetchPostTotal() {
  return request({
    url: '/post/getPostTotal',
    method: 'get'
  })
}

export function fetchPostCountByCategory() {
  return request({
    url: '/post/getPostData',
    method: 'get'
  })
}

export function lockedPost(query) {
  return request({
    url: '/post/lockedPost',
    method: 'post',
    params: query
  })
}

export function unLockPost(query) {
  return request({
    url: '/post/unLockPost',
    method: 'post',
    params: query
  })
}

export function deletePostByAdmin(query) {
  return request({
    url: '/post/deleteByAdmin',
    method: 'delete',
    params: query
  })
}
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

//
// export function fetchArticle(id) {
//   return request({
//     url: '/vue-element-admin/article/detail',
//     method: 'get',
//     params: { id }
//   })
// }
//
// export function fetchPv(pv) {
//   return request({
//     url: '/vue-element-admin/article/pv',
//     method: 'get',
//     params: { pv }
//   })
// }
//
// export function createArticle(data) {
//   return request({
//     url: '/vue-element-admin/article/create',
//     method: 'post',
//     data
//   })
// }
//
// export function updateArticle(data) {
//   return request({
//     url: '/vue-element-admin/article/update',
//     method: 'post',
//     data
//   })
// }
