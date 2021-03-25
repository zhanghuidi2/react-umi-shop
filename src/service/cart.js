import request from '@/utils/request.js';

// 获取购物车数据
const getCartList = () => {
  return request('api/getCart');
};
// 编辑购物车
const editCart = (params) => {
  return request('/api/cart/edit', {
    method: 'POST',
    data: params,
  });
};
export { getCartList, editCart };
