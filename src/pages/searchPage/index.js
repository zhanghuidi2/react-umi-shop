import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import SearchBtn from './SearchBtn/index';
import List from './List/index';
import { getSearchList } from '@/service/search';
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {
        totalPage: 0,
        pageNo: 0,
        pageSize: 10,
        searchKey: '',
      },
    };
  }
  // 类组件里面的方法一定要写成箭头函数
  // 不然子组件调的时候this会找不到的
  query = (params) => {
    let totalPage = this.state.pagination.totalPage;
    let pageNo = this.state.pagination.pageNo;
    let pageSize = this.state.pagination.pageSize;
    let searchKey = this.state.pagination.searchKey;
    if (params) {
      totalPage = params.totalPage || totalPage;
      pageNo = params.pageNo || pageNo;
      pageSize = params.pageSize || pageSize;
      searchKey = params.searchKey || searchKey;
    }
    getSearchList({ pageNo, pageSize, searchKey }).then((res) => {
      const { list } = res;
      this.saveState(list);
    });
  };
  saveState(res) {
    let data = [...this.state.data, ...(res.data || [])]; // 数组合并,一定要全部展开
    let pagination = { ...this.state.pagination, ...res.pagination };
    if (!res.pagination.pageNo) {
      // 第一页
      data = res.data || [];
    }
    // 父组件setState，对应的所有的组件都会render
    this.setState({ data, pagination });
  }
  componentDidMount() {
    this.query();
  }
  render() {
    const { data, pagination } = this.state;
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <SearchBtn query={this.query} />
        <WhiteSpace size="lg" />
        <List query={this.query} data={data} pagination={pagination} />
      </WingBlank>
    );
  }
}

export default SearchPage;
