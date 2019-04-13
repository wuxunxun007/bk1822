import React, { Component } from 'react';

class Com extends Component {
  goDetail () {
    this.props.history.push('/detailapp/detail')
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">
          首页头部
        </header>
        <div className = "centent">
          首页内容
          <button onClick = { this.goDetail.bind(this) }>去详情</button>
        </div>
      </div>
    )
  }
}

export default Com;
