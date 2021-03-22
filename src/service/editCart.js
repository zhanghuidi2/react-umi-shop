import request from '@/utils/request';

const editCart = (params) => {
  return request('/api/cart/edit', {
    method: 'POST',
    data: params,
  });
};
export { editCart };
