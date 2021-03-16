import request from '@/utils/request.js'

const login = (params) => {
  return request('api/login', {
    method: 'POST',
    data: params
    })
  }

export {
  login
}
