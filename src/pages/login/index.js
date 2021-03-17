import React from 'react';
import styles from './index.less';
import { connect, Redirect } from 'umi';
import LoginForm from './LoginForm';

const Login = ({ user, location, dispatch }) => {
  const { userid } = user.currentUser;
  if (userid) {
    // 登陆了，并且来到了登陆页面，那么重定向到首页或者路径上带的参数
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }
  const handleSubmit = (val) => {
    dispatch({
      type: 'user/login',
      payload: { name: val.username, password: val.password },
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};
export default connect(({ user }) => ({ user }))(Login);
