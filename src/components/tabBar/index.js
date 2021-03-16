import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import { history } from 'umi';
export default function FooterNav(props) {
  const { pathname } = props
  const tabBar = [
    {
      title: '首页',
      icon: 'tabbar01',
      link: '/'
    },
    {
      title: '订单列表',
      icon: 'tab-bar-order',
      link: '/olist'
    },
    {
      title: '购物车',
      icon: 'tabbar-icon-ShoppingCart-off-b',
      link: '/cart'
    },
    {
      title: '我的',
      icon: 'tab-bar-mine',
      link: '/user'
    },
  ]
  return (
    <div>
      <TabBar tintColor="#f00">
        {
          tabBar.map(({title, link, icon}) => (
            <TabBar.Item
              
              icon={<span className={'iconfont icon-' + icon}></span>}
              title={title}
              key={link}
              selectedIcon = {<span className={'red iconfont icon-' + icon}></span>}
              selected = {link === pathname}
              onPress={() => {
                history.push(link)
              }}
            >
            </TabBar.Item>
          ))
        }
      </TabBar>
    </div>
  )
}
