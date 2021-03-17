import { getUserInfo, getUserDetail } from '@/service/user.js';
import { login, loginOut } from '@/service/login.js';
import { Toast } from 'antd-mobile';

// 文件名字一定要写对
const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
    userDetail: {},
  },
  effects: {
    // gennerate函数的名字一定不能和reducer的名字一样
    *fetchCurrent(_, { call, put }) {
      const response = yield call(getUserInfo);
      yield put({
        type: 'saveCurrentUser',
        payload: { currentUser: { ...response } },
      });
    },
    *login({ payload }, { call, put }) {
      // 参数放到call的第二个参数这里
      const response = yield call(login, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveCurrentUser',
          payload: { currentUser: { ...response } },
        });
      } else {
        Toast.fail(response.msg || '服务器开小差');
      }
    },
    *getUserDetail(_, { call, put }) {
      const response = yield call(getUserDetail);
      yield put({
        type: 'saveCurrentUser',
        payload: { userDetail: { ...response } },
      });
    },
    // 退出
    *fetchloginOut(_, { call, put }) {
      const response = yield call(loginOut);
      yield put({
        type: 'loginOut',
        payload: { currentUser: {}, userDetail: {} },
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, ...action.payload };
    },
    loginOut(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default UserModel;
