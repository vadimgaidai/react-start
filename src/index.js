import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'

import Header from './components/header'
import App from './containers/App'
import Footer from './components/footer'

import api from './api/api'
import { request } from './utils/fetch'

import * as serviceWorker from './serviceWorker'
import './assets/style/index.scss'

const entry = document.getElementById('root')

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

entry.classList.add('app')

api({ request, store })

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header />
			<App />
			<Footer />
		</BrowserRouter>
	</Provider>,
	entry
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()
