import React, { Component } from 'react';

class Com extends Component {

  componentDidMount () {
    this.props.requesthomebanner();
    this.props.requsethomedata();
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">
          首页头部 
        </header>
        <div className = "centent">
          首页内容
          {
            this.props.homedatalist.map((item, index) => {
              return (
                <h1 key = { index }>{ item.title }</h1>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Com;
