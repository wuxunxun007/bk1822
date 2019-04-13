import React, { Component } from 'react';

export default class extends Component {
  back () {
    console.log(this.props);
    let { index, url } = this.props;
    index = index || -1;
    if (url) {
      this.props.history.push("/" + url);
    } else {
      this.props.history.go(index);
    }
    
  }
  render () {
    return (
      <button onClick = { this.back.bind(this) }>返回</button>
    )
  }
}

/***
 * import Back from '@/components/common/Back';
 * 
 * <Back index = "-1" { ...this.props }/>
 * 
 * url 返回那个页面 要不不写，要写必写路由，优先级别比index的高
 * index  返回几页 默认值为-1 可选
 */