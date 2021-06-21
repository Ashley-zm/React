import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        {/* 整个应用只有一个路由器BrowserRouter,一劳永逸放在APP的index.js中*/}
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/**
                原生html中，靠<a/>跳转不同的页面
                  <a className="list-group-item" href="./about.html">About</a>
                  <a className="list-group-item active" href="./home.html">Home</a>
                在React中靠路由链接实现
               */}
              <MyNavLink to="/zm/about">About</MyNavLink>
              <MyNavLink to="/zm/home/a/b">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/**注册路由 */}
                <Switch>
                  <Route path="/zm/about" component={About}></Route>
                  <Route exact path="/zm/home" component={Home}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
