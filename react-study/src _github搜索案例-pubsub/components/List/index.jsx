import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: '',
  }
  // 组件一展示到页面就订阅(初始化)
  componentDidMount = () => {
    // (messages,stateObj) => {} 为订阅函数，其中参数必须为两个，如果不想写第一个，可以使用占位_
    // token 用来取消订阅
    this.token = PubSub.subscribe('user', (_, stateObj) => {
      this.setState(stateObj)
    })
  }
  componentWillUnmount = () => {
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          // 连续使用三元运算符,react中不能使用if语句，因为他不是js表达式
          isFirst ? (
            <h1>欢迎使用，搜索github用户</h1>
          ) : isLoading ? (
            <h1>Loading..........</h1>
          ) : err ? (
            <h1 style={{ color: 'red' }}>{err}</h1>
          ) : (
            users.map((userObj) => {
              return (
                <div key={userObj.id} className="card">
                  <a rel="noreferrer" href={userObj.html_url} target="_blank">
                    <img
                      alt="Avatar"
                      src={userObj.avatar_url}
                      style={{ width: '100px' }}
                    />
                  </a>
                  <p className="card-text">{userObj.login}</p>
                </div>
              )
            })
          )
        }
      </div>
    )
  }
}
