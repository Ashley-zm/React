import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 全选或者全部取消
  handleCheckAll = (event) => {
    // 识别checked是true还是false
    console.log(event.target.checked)
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除已完成的项目
  handleClrearAll = () => {
    this.props.clearAllTodo()
  }
  render() {
    const { todos } = this.props
    // 计算已完成的个数
    // 对数组进行条件统计： reduce(回调函数, 统计的初始值0)
    // reduce((上一次的返回值，当前值)=> { }, 统计的初始值0) 第一次调用上一次的返回值pre为0
    // const deleted = todos.reduce((pre, todoObj) => {
    //   return pre + (todoObj.deleted ? 1 : 0)
    // }, 0)
    // 精简 去掉return{}
    const deleted = todos.reduce(
      (pre, todoObj) => pre + (todoObj.deteled ? 1 : 0),
      0
    )
    // 计算总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={deleted === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{deleted}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClrearAll}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
// defaultChecked  只执行第一次
// checked 可以指定多次，始终以最后一次为主，但会写死，所以必须写onChange
