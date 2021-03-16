import request from '@/utils/request.js'

const getUserInfo = () => {
  return request('/api/currentUser')
}

export {
  getUserInfo
}
