import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  // 标识鼠标移入，移出
  state = {
    mouse: false,
  }
  // 鼠标移入的回调
  enter = () => {
    this.setState({ mouse: true })
  }
  // 鼠标移出的回调
  leave = () => {
    this.setState({ mouse: false })
  }
  // 勾选或者取消勾选
  handleCheck = (id) => {
    // 标签中写的是传参形式，这里需要返回一个函数
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  // 通知App删除一个todo
  handleDelete = (id) => {
    // 子组件通知父组件删除，父组件需要向子组件传一个删除方法的props
    // 判断是否删除，这里PS：confirm 需要添加window，确定它是window身上的
    if (window.confirm('确定删除嘛')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, text, deteled } = this.props
    const { mouse } = this.state
    return (
      <li onMouseEnter={this.enter} onMouseLeave={this.leave}>
        <label>
          <input
            type="checkbox"
            checked={deteled}
            onChange={this.handleCheck(id)}
          />
          <span>{text}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
          // onClick={this.handleDelete(id)}
          onClick={() => {
            this.handleDelete(id)
          }}
        >
          删除
        </button>
      </li>
    )
  }
}
