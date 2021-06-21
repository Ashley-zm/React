import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {
  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  }
  render() {
    // 从父组件传来的值
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          // 再一次给子组件传父组件的值
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
  }
}
