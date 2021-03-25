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
    const { checkAllData, list, goPay } = this.props;
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
          <span>合计： ¥{total.toFixed(2)}</span>
          <Button type="primary" className={styles.btn} onClick={goPay}>
            去结算
          </Button>
        </div>
      </div>
    );
  }
}
export default PayBar;

// 函数组件的要也不要写到副作用里
// onst PayBar: React.FC<PayBarProps> = ({ data, checkedAllChange, goPay }) => {
//   let checkedAll = data.length > 0,
//     totalPrice = 0,
//     allCount = 0;

//   for (let i = 0; i < data.length; i++) {
//     let item = data[i];
//     checkedAll = checkedAll && item.checked;
//     if (item.checked) {
//       totalPrice += item.count * item.price;
//       allCount += item.count;
//     }
//   }

//   return (
//     <Card full className={styles.main}>
//       <CheckboxItem
//         onChange={() => checkedAllChange(!checkedAll)}
//         checked={checkedAll}
//       >
//         全选
//       </CheckboxItem>
//       <span>
//         合计: ￥ <span>{totalPrice.toFixed(2)}</span>
//       </span>
//       <Button
//         type="primary"
//         disabled={totalPrice <= 0}
//         className={classnames(styles.btn)}
//         onClick={goPay}
//       >
//         去结算(<span>{allCount}</span>)
//       </Button>
//     </Card>
//   );
// };
