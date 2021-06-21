import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是About的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/zm/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/zm/home/message">Message</MyNavLink>
            </li>
          </ul>
        </div>
        {/**注册子路由 路由组件*/}
        <Switch>
          <Route path="/zm/home/news" component={News}></Route>
          <Route path="/zm/home/message" component={Message}></Route>
        </Switch>
      </div>
    )
  }
}
