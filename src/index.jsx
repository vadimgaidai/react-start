import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer'
import Header from './components/Header/Header.jsx'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import './index.css'

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose

const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()
