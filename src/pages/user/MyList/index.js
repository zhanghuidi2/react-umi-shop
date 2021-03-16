import React from 'react'
import { Grid, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames'
import styles from './index.less'
export default function MyList() {
  const grid = [
    { text: '全部', icon : 'tab-bar-order'},
    { text: '待支付', icon : 'yiqianshou'},
    { text: '待发货', icon : 'daifahuo'},
    { text: '待签收', icon : 'daishouhuo'}
  ]
  const selectIcon = (el, index) => {
    console.log(el, index)
  }
  return (
    <div size="lg" className={ styles.main }>
      <Grid data={grid}
        onClick={selectIcon}
        columnNum={4}
        activeStyle={{color: 'red'}}
        renderItem={dataItem => (
          <div key={dataItem.text}          >
            <div className={classnames('iconfont icon-' + dataItem.icon, styles.icon)}></div>
            <div>{ dataItem.text}</div>
          </div>
        )}
      />
      <WhiteSpace size="lg"></WhiteSpace>
    </div>
  )
}
