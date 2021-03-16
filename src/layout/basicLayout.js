import TabBar from '@/components/tabBar'
import '@/assest/icon-font/iconfont.css'
import styles from './basicLayout.less'
import React, { useEffect } from 'react';
import { connect } from 'umi';
const BasicLayout = (props) => {
  const { children, location, user, dispatch } = props
  const {pathname} = location
  useEffect(() => {
    if (dispatch) {
      // 这里一定不要/user/fetchCurrent
      dispatch({type: 'user/fetchCurrent'})
    }
  }, [pathname])
  // 坚挺路由的变化然后每个页面都要去请求接口
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <TabBar pathname={ pathname }/>
      </footer>
    </div>
  )
}
// export default BasicLayout
export default connect(
  ({user}) => ({user})
)(BasicLayout)





