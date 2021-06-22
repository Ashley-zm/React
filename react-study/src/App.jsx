import React, { Component } from 'react'
import { Button } from 'antd'
// import { DownloadOutlined } from '@ant-design/icons'
import 'antd/dist/antd.less'
import './App.less'
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
