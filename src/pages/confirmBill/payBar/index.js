import React, { useState } from 'react';
import { Card, Checkbox, Button, WingBlank } from 'antd-mobile';
import styles from './index.less';
import PayModal from '@/components/PayModal/';
export default function Paybill(props) {
  const { total } = props;
  const [showPay, setShowPay] = useState(false);
  const onChangePay = () => {
    setShowPay(!showPay);
  };
  return (
    <div className={styles.main}>
      <div className={styles.payBar}>
        <div className={styles.pay}>
          <span>合计： ¥{total.toFixed(2)}</span>
          <Button type="primary" className={styles.btn} onClick={onChangePay}>
            去结算
          </Button>
        </div>
      </div>
      <PayModal showPay={showPay} onChangePay={onChangePay} />
    </div>
  );
}
