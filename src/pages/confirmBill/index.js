import React, { useEffect, useState } from 'react';
import PayBar from './payBar/';
import { connect } from 'umi';
import NodeList from './NodeList/';
import { getDefaultReceivingInfo } from '@/service/confirmBill';
import InfoCard from './InfoCard';
const confirmBill = ({ cart, location }) => {
  const [info, setInfo] = useState({});
  console.log(cart, location);
  // 页面跳转的话有两种方式
  // 方式1， 从location里面取state
  // history.pushState({
  //   pathname: '',
  //   state: {flag: 1}
  // })
  // 方式2， 页面路径拼接参数,从location.query拿
  // history.push(`/login?id=${}`)

  const { data } = cart;
  // let info = {}
  // 防止刷新redux丢失
  useEffect(() => {
    if (!data.length) {
      history.go(-1);
      return;
    }
    getDefaultReceivingInfo().then((res) => {
      console.log(res);
      // 如果这不实用useState,异步结束之后，组件不会再次更新了，所以需要用useStaet
      // info = res
      setInfo(res);
    });
  }, []);

  const total = data.reduce(
    (total, item) => total + item.count * item.price,
    0,
  );

  // 循环模版
  const getList = data.map((item) => {
    return <NodeList {...item} key={item.id} />;
  });
  return (
    <div>
      <InfoCard {...info} />
      <PayBar total={total} />
      <div>{getList}</div>
    </div>
  );
};
export default connect(({ cart }) => ({ cart }))(confirmBill);
