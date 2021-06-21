import React, { Component } from 'react'

const DetailMes = [
  { id: '01', content: '你好，今天天气多发大风，出行注意防护' },
  { id: '02', content: 'React学习了吗？' },
  { id: '03', content: '记得每日去健身房、游泳' },
]

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params
    console.log(this.props)
    const findDetail = DetailMes.find((detailObj) => {
      return detailObj.id === id
    })
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
