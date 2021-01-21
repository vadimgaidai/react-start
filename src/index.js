import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import App from './App'
import Footer from './components/Footer'

import reportWebVitals from './reportWebVitals'

import './assets/style/index.scss'

const loader = document.querySelector('.preloader')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

loader.classList.add('preloader--hide')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
