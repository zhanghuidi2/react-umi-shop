import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import styles from './index.less';
import { Link } from 'umi';
class CartBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <div className={styles.btn}>加入购物车</div>
        <div className={styles.btn2}>立即购买</div>
      </div>
    );
  }
}

export default CartBtn;
