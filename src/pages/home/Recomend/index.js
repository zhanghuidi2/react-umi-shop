import React, { useEffect, useState } from 'react';
import { WhiteSpace, WingBlank, Card, Grid } from 'antd-mobile';
import styles from './index.less';
import { getRecommend } from '@/service/home';
import { Link } from 'umi';
export default function Recomend() {
  const [list, setList] = useState([]);
  const node = ({ img, title, id }) => {
    return (
      <Link to={'/product/' + id} className={styles.item}>
        <img src={img} />
        <div>{title}</div>
      </Link>
    );
  };
  useEffect(() => {
    // 什么情况下需要数据存到modal里，就是数据要很多次用到，，像用户信息，就跟vuex一样，但是首页的商品数据不需要存起来
    getRecommend().then((res) => {
      setList(res.list.data);
    });
  }, []);

  return (
    // 如果是两个组件需要一个标签包裹，那么就写一个<></>
    <>
      <WhiteSpace size="lg" />
      <WingBlank size="lg" className={styles.main}>
        <Card>
          <Card.Header title="好货推荐" />
          <Card.Body>
            <Grid
              data={list.slice(0, 6)}
              hasLine={false}
              columnNum={3}
              renderItem={(item) => node(item)}
            />
          </Card.Body>
        </Card>
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg" className={styles.main}>
        <Card>
          <Card.Header title="猜你喜欢" />
          <Card.Body>
            <Grid
              data={list.slice(6)}
              hasLine={false}
              columnNum={2}
              renderItem={(item) => node(item)}
            />
          </Card.Body>
        </Card>
      </WingBlank>
    </>
  );
}
