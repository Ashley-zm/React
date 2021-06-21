import React, { Component } from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
        />
      </div>
    )
  }
}
