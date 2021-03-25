import request from '@/utils/request.js';

// 获取首页商品数据
const query = () => {
  return request('api/getOList');
};
export { query };
