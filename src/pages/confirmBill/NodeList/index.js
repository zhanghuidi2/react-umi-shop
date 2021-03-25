import React, { Component } from 'react';
import styles from './index.less';
import classnames from 'classnames';
class NodeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { img, title, info, price, count } = this.props;
    return (
      <div className={styles.main}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.right}>
          <div className={'twoRows'}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red')}>￥{price}</p>
            <span>x{count}件</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NodeList;
