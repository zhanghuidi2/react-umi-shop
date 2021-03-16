import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile'
import {createForm } from 'rc-form'
const LoginForm = ({ form, handleSubmit }) => {
  const {getFieldProps, getFieldsValue} = form
  const onSubmit = () => {
    // console.log(getFieldsValue()) // {username: "ee", password: "eeee"}
    // 触发父组件的方法
    handleSubmit(getFieldsValue())
  }
  return (
    <WingBlank size="lg" >
      <WhiteSpace size="lg" />
      <InputItem
        type="text"
        placeholder="请输入账号"
        {...getFieldProps('username')}
      >账号</InputItem>
      <WhiteSpace size="lg" />
      <InputItem
        type="password"
        placeholder="请输入密码"
        {...getFieldProps('password')}
      >密码</InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={onSubmit}>登陆</Button>
    </WingBlank>
  )
}
export default createForm()(LoginForm)