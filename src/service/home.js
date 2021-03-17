import request from '@/utils/request.js';

// 获取首页商品数据
const getRecommend = () => {
  return request('api/getRecommend');
};
export { getRecommend };
