import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import { Link } from 'umi';
const MyBody = ({ img, title, price, tags, id }) => {
  return (
    <Link style={{ padding: '0 15px' }} to={'/product/' + id}>
      <div
        style={{
          lineHeight: '50px',
          color: '#888',
          fontSize: 18,
          borderBottom: '1px solid #F6F6F6',
        }}
      >
        {title}
      </div>
      <div
        style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}
      >
        <img style={{ height: '64px', marginRight: '15px' }} src={img} alt="" />
        <div style={{ lineHeight: 1 }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{title}</div>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
            ¥{price}
          </div>
        </div>
      </div>
    </Link>
  );
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }
  onEndReached = () => {
    // 下拉加载
    console.log(this.props);
    const { pagination } = this.props;
    if (pagination.pageNo < pagination.totalPage - 1) {
      this.props.query({
        pageNo: pagination.pageNo + 1,
      });
    }
  };

  render() {
    const { data, pagination } = this.props;
    const { dataSource } = this.state;
    return (
      <ListView
        dataSource={dataSource.cloneWithRows(data)}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: 'center' }}>
            {pagination.pageNo < pagination.totalPage - 1
              ? '加载中...'
              : '到底了～'}
          </div>
        )}
        renderRow={(item) => MyBody(item)}
        pageSize={pagination.pageSize}
        useBodyScroll={true}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default List;
