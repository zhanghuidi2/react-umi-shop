import React from 'react';
import styles from './index.less';
import { Link } from 'umi';
export default function Search() {
  return (
    <div className={styles.main}>
      <Link className={styles.fakeInput} to="/searchPage">
        <i className="iconfont sousuo"></i>
        搜索喜欢的宝贝
      </Link>
    </div>
  );
}
