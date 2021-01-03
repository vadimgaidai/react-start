import React from 'react'
import Logo from '../../icons/Logo'
import { section, logo, link } from './index.module.scss'

const Index = () => (
	<main className={section}>
		<Logo className={logo} />
		<p>
			Edit <code>src/App.js</code> and save to reload.
		</p>
		<a
			className={link}
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
		</a>
	</main>
)

export default Index
