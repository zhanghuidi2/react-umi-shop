import React, { Component } from 'react';
import styles from './index.less';
import { query } from '@/service/oList';
import { Card, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
const NodeList = (props) => {
  const { img, title, price, count } = props;
  return (
    <div className={styles.main}>
      <Card className={styles.node}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.right}>
          <div className={classnames('twoRows')}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red', 'font14')}>￥{price}</p>
            <span className="font12">x {count}</span>
          </div>
        </div>
      </Card>
      <WhiteSpace size="lg" />
    </div>
  );
};
class OList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    query().then((res) => {
      this.setState({
        list: res.list.data,
      });
    });
  }
  render() {
    console.log(this.state.list);
    const getList = this.state.list.map((item) => {
      return <NodeList {...item} key={item.id} />;
    });
    return <div>{getList}</div>;
  }
}

export default OList;
