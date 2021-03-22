import React, { Component } from 'react';
import styles from './index.css';
import { getCartList } from '@/service/cart';
import { editCart } from '@/service/editCart';
import List from './List/';
import PayBar from './payBar/';
import { WingBlank } from 'antd-mobile';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    getCartList().then((res) => {
      this.setState({
        list: res.list.data,
      });
    });
  }
  updateProduct = (params) => {
    console.log(params);
    const { id, index, count } = params;
    const data = [...this.state.list];
    if (count == 0) {
      data.splice(index, 1, 0);
    } else {
      // data[index] = params // 这里不能使用负值，会导致图片没有
      data[index] = { ...data[index], ...params };
      // 或者
      // Object.assign(data[index], params)
    }
    editCart(data).then((res) => {
      this.setState({ list: data });
    });
  };
  // 全选要更新所有的数据
  checkAllData = (val) => {
    const data = this.state.list;
    data.forEach((item) => (item.checked = val));
    this.setState({ list: data });
  };

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <WingBlank size="lg">
        <List list={list} updateProduct={this.updateProduct} />
        <PayBar list={list} checkAllData={this.checkAllData} />
      </WingBlank>
    );
  }
}

export default Cart;
