import React, { Component } from 'react';
import { Card, Checkbox, Button, WingBlank } from 'antd-mobile';
import styles from './index.less';
class PayBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const CheckboxItem = Checkbox.CheckboxItem;
    const { checkAllData, list } = this.props;
    // 这里不需要写到生命周期里，每次render的时候都会执行
    const total = list.reduce((total, item) => {
      return (total = total + (item.checked ? item.price * item.count : 0));
    }, 0);
    const checkedAll = list.every((item) => item.checked);
    return (
      <div className={styles.main}>
        <CheckboxItem
          onChange={() => checkAllData(!checkedAll)}
          checked={checkedAll}
        >
          全选
        </CheckboxItem>
        <div className={styles.pay}>
          <span>合计： ¥{total}</span>
          <Button type="primary" className={styles.btn}>
            去结算
          </Button>
        </div>
      </div>
    );
  }
}
export default PayBar;
