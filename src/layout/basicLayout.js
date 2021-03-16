import TabBar from '@/components/tabBar'
import '@/assest/icon-font/iconfont.css'
import styles from './basicLayout.less'
import React, { useEffect } from 'react';
import { connect } from 'umi';
const BasicLayout = (props) => {
  const { children, location, user, dispatch } = props
  const { pathname } = location
  const showBottomNav = pathname !== '/login';
  useEffect(() => {
    if (dispatch) {
      // 这里一定不要/user/fetchCurrent
      dispatch({type: 'user/fetchCurrent'})
    }
  }, [])
  // 坚挺路由的变化然后每个页面都要去请求接口pathname
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        {showBottomNav && <TabBar pathname={pathname} />}
      </footer>
    </div>
  )
}
// export default BasicLayout
export default connect(
  ({user}) => ({user})
)(BasicLayout)





