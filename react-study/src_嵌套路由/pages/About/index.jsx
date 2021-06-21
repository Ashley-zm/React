import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('About组件接受的props：', this.props)
    return (
      <div>
        <h3>我是About的内容</h3>
      </div>
    )
  }
}
