import React, { useCallback } from 'react';
import {
  Drawer,
  List,
  NavBar,
  Icon,
  Card,
  InputItem,
  Button,
  WhiteSpace,
  Toast,
} from 'antd-mobile';
import styles from './index.less';
import { history } from 'umi';
export default function PayModal({ showPay, onChangePay }) {
  const pay = useCallback(() => {
    setTimeout(() => {
      Toast.success('支付成功！', 2);
      onChangePay();
      setTimeout(() => {
        history.push('/olist');
      }, 2000);
    }, 1000);
  });
  const sidebar = (
    <Card>
      <Card.Header title="付款详情" />
      <Card.Body>
        <div>
          <InputItem placeholder="请输入姓名" clear></InputItem>
          <div className={styles.flex}>
            <InputItem placeholder="请输入验证码" clear></InputItem>
            <Button type="primary" className={styles.btn}>
              获取验证码
            </Button>
          </div>
          <WhiteSpace size="lg" />
          <Button type="primary" className={styles.btn2} onClick={pay}>
            立即付款
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
  return (
    <Drawer
      className={styles.main}
      style={{ minHeight: document.documentElement.clientHeight }}
      enableDragHandle
      contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
      sidebar={sidebar}
      open={showPay}
      onOpenChange={onChangePay}
      position="bottom"
    ></Drawer>
  );
}
