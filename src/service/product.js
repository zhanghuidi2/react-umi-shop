import request from '@/utils/request';

const getDetail = (params) => {
  return request('/api/product', {
    method: 'POST',
    data: params,
  });
};
export { getDetail };
