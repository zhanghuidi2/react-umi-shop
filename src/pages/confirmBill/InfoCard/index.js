import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class InfoCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tel, address, name } = this.props;
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header title={name} extra={<span>{tel}</span>} />
          <Card.Body>
            <div>{address}</div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    );
  }
}

export default InfoCard;
