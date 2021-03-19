import React, { useEffect, useState } from 'react';
import styles from './[id].css';
import { getDetail } from '@/service/product';
import CarouselCom from './Carousel/';
import DetailInfo from './DetailInfo/';
import CartBtn from './CartBtn/';
export default function Product(props) {
  const { id } = props.match.params;
  const [detail, setDetail] = useState({});
  useEffect(() => {
    getDetail({ id }).then((res) => {
      setDetail(res.data);
      // 子组件先挂载,所以子组件里面的imgs会拿不到数据，那么就要给一个默认值
    });
  }, []);
  return (
    <div>
      <CarouselCom {...detail} />
      <DetailInfo {...detail} />
      <CartBtn {...detail} />
    </div>
  );
}
