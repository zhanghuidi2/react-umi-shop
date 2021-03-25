import request from '@/utils/request.js';

// 获取首页商品数据
const getDefaultReceivingInfo = () => {
  return request('api/getDefaultReceivingInfo');
};
export { getDefaultReceivingInfo };
