import request from '@/utils/request.js'
// 登陆
const login = (params) => {
  return request('api/login', {
    method: 'POST',
    data: params
    })
  }
// 退出
const loginOut = () => {
  return request('api/logout')
}
export {
  login,
  loginOut
}
