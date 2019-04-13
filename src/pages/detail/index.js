import React, { Component } from 'react';
import Back from '@/components/common/Back';
class Com extends Component {
  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">
            <Back index = "-2" url = "home" { ...this.props }/>
          </header>
          <div className = "centent">
            详情内容
          </div>
        </div>
        <footer className = "footer">
          详情底部
        </footer>
      </div>
    )
  }
}

export default Com;
