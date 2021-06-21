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
                {/* <Link to={`/zm/home/message/detail/?id=${mesObj.id}&title=${mesObj.title}`}>{mesObj.title}</Link> */}

                {/* 向路由组件传递state参数 */}
                <Link
                  to={{
                    pathname: '/zm/home/message/detail',
                    state: { id: mesObj.id, title: mesObj.title },
                  }}
                >
                  {mesObj.title}
                </Link>
              </li>
            )
          })}
        </ul>
        {/* 声明接受params参数 */}
        {/* <Route
          path="/zm/home/message/detail/:id/:title" component={Detail}></Route> */}

        {/* search参数无需声明接受 */}
        {/* <Route path="/zm/home/message/detail" component={Detail}></Route> */}

        {/* state参数无需声明接受 */}
        <Route path="/zm/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
