import React from 'react';
import { Tag, WingBlank, WhiteSpace, Card } from 'antd-mobile';
import styles from './index.less';
export default function DetailInfo(props) {
  const { tags = [], imgs = [] } = props;
  return (
    <WingBlank className={styles.main}>
      <WhiteSpace size="lg"></WhiteSpace>
      {tags.map((item) => (
        <Tag data-seed="logId" style={{ marginRight: '10px' }} key={item}>
          {item}
        </Tag>
      ))}
      <WhiteSpace size="lg"></WhiteSpace>
      <Card>
        <Card.Header title="详情" />
        <Card.Body>
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
        </Card.Body>
      </Card>
    </WingBlank>
  );
}
