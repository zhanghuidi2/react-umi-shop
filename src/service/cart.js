import request from '@/utils/request.js';

// 获取首页商品数据
const getCartList = () => {
  return request('api/getCart');
};
export { getCartList };
