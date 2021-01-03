import React from 'react'
import { section, link } from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={section}>
			<a
				className={link}
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/vadimgaidai"
			>
				@github
			</a>
		</footer>
	)
}

export default Footer
