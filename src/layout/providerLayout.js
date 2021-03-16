import React from 'react';
import {connect, Redirect} from 'umi'
const Login = ({ user, location, children  }) => {
  const { userid } = user.currentUser
  if (!userid) {
    // 如果没有登陆，跳转到登陆页面，并且state的from上协商路径的name
    const {form = '/'}= location.state || {}
    return <Redirect to={{pathname:'/login', state: {from: location.pathname}}}/>
  }
  return (
    <div>{ children}</div>
  );
}
export default connect(({user}) => ({user}))(Login)
