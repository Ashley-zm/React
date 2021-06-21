import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: 'message001' },
      { id: '02', title: 'message002' },
      { id: '03', title: 'message003' },
    ],
  }
  // push跳转
  pushShow = (id, title) => {
    // params参数
    // this.props.history.push(`/zm/home/message/detail/${id}/${title}`)

    // search参数
    // this.props.history.push(`/zm/home/message/detail/?id=${id}&title=${title}`)

    // state参数
    this.props.history.push(`/zm/home/message/detail`, { id, title })
  }
  // replace跳转
  replaceShow = (id, title) => {
    // params参数
    // this.props.history.replace(`/zm/home/message/detail/${id}/${title}`)

    // search参数
    // this.props.history.replace(
    //   `/zm/home/message/detail/?id=${id}&title=${title}`
    // )

    // state参数
    this.props.history.replace(`/zm/home/message/detail`, { id, title })
  }
  // 后退
  back = () => {
    this.props.history.goBack()
  }
  // 前进
  forward = () => {
    this.props.history.goForward()
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map((mesObj) => {
            return (
              <li key={mesObj.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/zm/home/message/detail/${mesObj.id}/${mesObj.title}`}> {mesObj.title}</Link> */}
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/zm/home/message/detail/?id=${mesObj.id}&title=${mesObj.title}`}> {mesObj.title}</Link> */}
                {/* 向路由组件传递state参数 */}
                <Link
                  to={{
                    pathname: '/zm/home/message/detail',
                    state: { id: mesObj.id, title: mesObj.title },
                  }}
                >
                  {mesObj.title}
                </Link>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(mesObj.id, mesObj.title)
                  }}
                >
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(mesObj.id, mesObj.title)
                  }}
                >
                  replace查看
                </button>
              </li>
            )
          })}
        </ul>
        {/* 声明接受params参数 */}
        {/* <Route
          path="/zm/home/message/detail/:id/:title"
          component={Detail}
        ></Route> */}

        {/* search参数无需声明接受 */}
        {/* <Route path="/zm/home/message/detail" component={Detail}></Route> */}

        {/* state参数无需声明接受 */}
        <Route path="/zm/home/message/detail" component={Detail}></Route>
        <button onClick={this.back}>后退</button>
        <button onClick={this.forward}>前进</button>
      </div>
    )
  }
}
