import React, { Component } from 'react'
import qs from 'querystring'

const DetailMes = [
  { id: '01', content: '你好，今天天气多发大风，出行注意防护' },
  { id: '02', content: 'React学习了吗？' },
  { id: '03', content: '记得每日去健身房、游泳' },
]

export default class Detail extends Component {
  render() {
    //接受params参数
    // const { id, title } = this.props.match.params

    // 接受search参数
    // const { id, title } = qs.parse(this.props.location.search.slice(1))

    // 接受state参数
    const { id, title } = this.props.location.state || {}

    const findDetail =
      DetailMes.find((detailObj) => {
        return detailObj.id === id
      }) || {}

    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTEMT:{findDetail.content}</li>
        </ul>
      </div>
    )
  }
}
