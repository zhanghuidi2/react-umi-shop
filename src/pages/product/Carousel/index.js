import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.less';
export default function CarouselCom(props) {
  const { imgs = [] } = props;
  console.log(imgs);
  return (
    <div className={styles.main}>
      <Carousel autoplay={false} infinite>
        <div className={styles.item}>
          {imgs.map((val) => (
            <img
              className={styles.itemImg}
              src={val}
              key={val}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
