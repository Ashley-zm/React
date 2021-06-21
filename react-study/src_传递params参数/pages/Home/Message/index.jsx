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
                <Link
                  to={`/zm/home/message/detail/${mesObj.id}/${mesObj.title}`}
                >
                  {mesObj.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            )
          })}
        </ul>
        <Route
          path="/zm/home/message/detail/:id/:title"
          component={Detail}
        ></Route>
      </div>
    )
  }
}
