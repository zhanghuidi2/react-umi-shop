import React, { Component } from 'react';
import { Flex, WhiteSpace, Toast } from 'antd-mobile';
import styles from './index.less';
import { Link, connect, history } from 'umi';
import { editCart } from '@/service/cart';
// @connect(
//   ({cart}) => ({cart})
// )
class CartBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 去支付
  goPay = () => {
    // 子组件里面拿不到location
    const { imgs, title, tags, dispatch, id, price } = this.props;
    const data = [{ id, title, price, count: 1, img: imgs[0] }];
    // 数据要存起来，比如商品详情页面去结算的数据也要存取来
    dispatch({
      type: 'cart/saveCart',
      payload: { data: data },
    });
    history.push({
      pathname: '/confirmBill',
      state: { tag: 1 },
    });
  };
  // 加入购物车
  editCart = () => {
    const { title, id } = this.props;
    editCart({ id: id, increment: 1 }).then((res) => {
      Toast.success(title + '已加入购物车！');
    });
  };
  render() {
    return (
      <div className={styles.main}>
        <Link to="/" className={styles.link}>
          <span
            className="iconfont icon-tabbar01"
            style={{ fontSize: '20px' }}
          ></span>
          <div>首页</div>
        </Link>
        <Link to="/cart" className={styles.link}>
          <span
            className="iconfont icon-tabbar-icon-ShoppingCart-off-b"
            style={{ fontSize: '20px' }}
          ></span>
          <div>购物车</div>
        </Link>
        <Link to="/" className={styles.link}>
          <span
            className="iconfont icon-tab-bar-mine"
            style={{ fontSize: '20px' }}
          ></span>
          <div>客服</div>
        </Link>
        <div className={styles.btn} onClick={this.editCart}>
          加入购物车
        </div>
        <div className={styles.btn2} onClick={this.goPay}>
          立即购买
        </div>
      </div>
    );
  }
}

export default connect(({ cart }) => ({ cart }))(CartBtn);
