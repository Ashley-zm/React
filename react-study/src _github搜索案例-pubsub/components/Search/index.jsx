import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  searchUser = () => {
    const {
      keyWordNode: { value: data },
    } = this
    console.log(data)
    //请求之前更新状态
    PubSub.publish('user', { isFirst: false, isLoading: true, err: '' })
    axios
      .get(`/api1/search/users?q=${data}`)
      .then((response) => {
        //请求成功后更新状态
        PubSub.publish('user', { users: response.data.items, isLoading: false })
        console.log('成功了', response.data, response.status)
      })
      .catch(function (error) {
        //请求失败后更新状态
        PubSub.publish('user', { err: error.messages })
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
