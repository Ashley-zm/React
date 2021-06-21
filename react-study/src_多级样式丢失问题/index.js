//入口文件
// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
// 引入组件App
import App from './App'
import reportWebVitals from './reportWebVitals'

// 渲染App到页面
ReactDOM.render(
  //React.StrictMode 用来检查组件
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
