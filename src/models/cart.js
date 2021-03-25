const CartModel = {
  namespace: 'cart',
  state: {
    data: [],
  },
  effects: {
    *fetch({ paylod }, { call, put }) {
      yield put({ type: 'save' });
    },
  },
  reducers: {
    saveCart(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default CartModel;
