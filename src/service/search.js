import request from '@/utils/request.js';

const getSearchList = (params) => {
  return request('api/search', {
    method: 'POST',
    data: params,
  });
};
export { getSearchList };
