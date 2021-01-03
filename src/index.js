import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import api from './api/api'
import { request } from './utils/fetch'

import * as serviceWorker from './serviceWorker'
import './assets/style/index.scss'

import Header from './components/header'
import App from './containers/App'
import Footer from './components/footer'

const loader = document.querySelector('.preloader')

api({ request, store })

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header />
			<App />
			<Footer />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

loader.classList.add('preloader--hide')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()
