import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  render() {
    console.log('Header组件接受的props：', this.props)
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>后退</button>
      </div>
    )
  }
}
export default withRouter(Header)