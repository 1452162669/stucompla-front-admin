import request from '@/utils/request'

export function fetchCommentTotal() {
  return request({
    url: '/comment/getCommentTotal',
    method: 'get'
  })
}
