import request from '@/utils/request.js'

const getUserInfo = () => {
  return request('/api/currentUser')
}
const getUserDetail = () => {
  return request('/api/getUserDetail')
}

export {
  getUserInfo,
  getUserDetail
}
