import React from 'react'
import { Card, WingBlank, WhiteSpace , Flex, Badge} from 'antd-mobile';
import styles from './index.less'
const Header = ({ name, icon, phone }) => {
  const grilds = [
    { title: '关注', num: 19 },
    { title: '收藏', num: 1 },
    { title: '足迹', num: 2 },
    { title: '红包', num: 4 },
  ]
  return (
    <div size="lg" className={ styles.main }>
      <WhiteSpace size="lg" />
      <Card>
        <Card.Header
          title={name}
          thumb={
            <div className={styles.logo}>
              <img src={ icon}/>
            </div>
          }
          extra={phone}
        />
        <Card.Body>
          <Flex>
            {grilds.map(item => (
              <Flex.Item key={item}>
                <Badge text={item.num}><span style={{padding:'10px'}}>{ item.title}</span></Badge>
              </Flex.Item>
            ))}
          </Flex>
          
        </Card.Body>
      </Card>
      <WhiteSpace size="lg" />
    </div>
  )
}
export default Header
