import React from 'react'
import Logo from '../../icons/Logo'
import './index.scss'

const Index = () => (
	<main className="index">
		<Logo className="index__logo" />
		<p>
			Edit <code>src/App.js</code> and save to reload.
		</p>
		<a
			className="index__link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
		</a>
	</main>
)

export default Index
