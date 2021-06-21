import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
  // 键盘事件onKeyUp的回调函数
  onKey = (event) => {
    // event.keyCode :键盘上某一个按键的标识 回车是13
    const { target, keyCode } = event
    console.log(target.value, event.keyCode)
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = [
      {
        id: nanoid(),
        text: target.value,
        deteled: false,
      },
    ]
    console.log(this.props)
    // 调用父类传的函数，并将todoObj作为参数传入
    this.props.addTodo(todoObj)
    // 清空输入
    target.value = ''
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.onKey}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
