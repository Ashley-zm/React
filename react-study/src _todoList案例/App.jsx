import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  // 初始化状态 PS：状态在那里，操作状态的的方法就在那里，其他组件可通过props传值并调用的方式进行修改
  // 定义 todos 所需要的属性
  state = {
    todos: [
      { id: '01', text: '吃饭', deteled: false },
      { id: '02', text: '睡觉', deteled: true },
      { id: '03', text: '敲代码', deteled: false },
    ],
  }
  /*
  此方法传给Header，在Header中调用这个方法，传todos所需的对象
  获取到对象，通过解构赋值的方式，将两个对象合并到一个数组中，并通过setState添加到todos里面
  */
  addTodo = (todoObj) => {
    // 获取原来的todos，解构赋值
    const { todos } = this.state
    // 构建一个新的数组
    const newTodos = [...todoObj, ...todos]
    console.log(newTodos)
    this.setState({ todos: newTodos })
  }

  // 用于Item中的勾选来更新state
  updateTodo = (id, deleted) => {
    // 获取状态中的todos
    const { todos } = this.state
    // 匹配处理数据
    // map遍历
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        // 通过赋值对象的方式，并且修改其中值{...对象,修改名:修改值} 名值一样可以省略
        // ????????此方法用于footer中不管用
        return { ...todoObj, deteled: deleted } //一条返回语句可省略{}，这里没省略
      } else return todoObj
    })
    // 更新数据
    this.setState({ todos: newTodos })
  }

  // 用于Item中的删除todos
  deleteTodo = (id) => {
    // 获取原来的todos，解构赋值
    const { todos } = this.state
    // 删除指定id的元素
    const newTodos = todos.filter((todoObj) => {
      //满足条件的被保留，不满足过滤掉
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  // 用于底部footer全选或全取消
  checkAllTodo = (deteled) => {
    // 获取原来的todos，解构赋值
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      console.log(todoObj)
      todoObj.deteled = deteled
      console.log(todoObj)
      return todoObj
    })
    console.log(newTodos)
    // 更新状态
    this.setState({ todos: newTodos })
  }

  // 用于footer中删除已完成的todos
  // 使用filter进行过滤
  clearAllTodo = () => {
    // 获取原来的todos，解构赋值
    const { todos } = this.state
    //满足条件的被过滤掉=>删除掉
    const newTodos = todos.filter((todoObj) => {
      return todoObj.deteled === false
    })
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      // Header 给List ：兄弟传值如何传？ 兄->父->兄 通过props
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          {/* 将状态中的 todos通过props方式传给子组件List*/}
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllTodo={this.clearAllTodo}
          />
        </div>
      </div>
    )
  }
}
