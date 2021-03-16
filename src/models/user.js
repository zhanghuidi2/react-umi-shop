import { getUserInfo } from '@/service/user.js'
import {login} from '@/service/login.js'
import { Toast } from 'antd-mobile';

// 文件名字一定要写对
const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(getUserInfo);
      yield put({ type: 'saveCurrentUser', payload: response });
    },
    *login({ payload }, { call, put }) {
      // 参数放到call的第二个参数这里
      const response = yield call(login, payload);
      if (response.status === 1) {
        yield put({ type: 'saveCurrentUser', payload: response });
      } else {
        Toast.fail(response.msg || '服务器开小差');
      }
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: { ...action.payload } || {} };
    },
  },
};
export default UserModel;