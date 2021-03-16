import React from 'react'
import { Button, WhiteSpace } from 'antd-mobile'
export default function LoginOut({loginOut}) {
  return (
    <div size="lg">
      <WhiteSpace />
      <Button onClick={loginOut} type="primary">退出登陆</Button>
      
    </div>
  )
}
