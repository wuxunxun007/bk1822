import React, { Component } from 'react';

class Com extends Component {
  goDetail () {
    this.props.history.push('/detailapp/detail')
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">
          分类头部
        </header>
        <div className = "centent">
          分类内容
          <button onClick = { this.goDetail.bind(this) }>去详情</button>
        </div>
      </div>
    )
  }
}

export default Com;
