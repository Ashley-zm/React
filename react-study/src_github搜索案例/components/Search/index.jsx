import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  searchUser = () => {
    // 简单的解构赋值
    // const { value } = this.keyWordNode
    // console.log(value)
    // 解构赋值连续写+改名
    const {
      keyWordNode: { value: data },
    } = this
    console.log(data)
    //请求之前更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true, err: '' })
    axios
      // .get('http://localhost:3000/') 站在自己3000这一端可以省略开头
      // 使用ES6中的模板字符串`${占位符}`
      .get(`/api1/search/users?q=${data}`)
      .then((response) => {
        //请求成功后更新状态
        this.props.updateAppState({
          users: response.data.items,
          isLoading: false,
        })
        console.log('成功了', response.data)
        console.log('成功了', response.status)
      })
      .catch(function (error) {
        //请求失败后更新状态
        this.props.updateAppState({
          err: console.error.messages,
        })
      })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => {
              this.keyWordNode = c
            }}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.searchUser}>Search</button>
        </div>
      </section>
    )
  }
}
