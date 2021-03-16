import React, { useEffect }from 'react';
import Header from './Header/'
import MyList from './MyList/'
import LoginOut from './LoginOut/'
import { WingBlank } from 'antd-mobile';
import {connect} from 'umi'
const User = ({ dispatch, user }) => {
  const {name, phone, icon} = user.userDetail
  useEffect(() => {
    dispatch({ type: 'user/getUserDetail' });
  }, [])
  const loginOut = () => {
    dispatch({type: 'user/loginOut'})
  }
  return (
    <WingBlank size="lg">
      <Header name={name} phone={phone} icon={icon} />
      <MyList />
      <LoginOut loginOut={ loginOut } />
    </WingBlank>
  );
}
export default connect(({user})=>({user}))(User)
