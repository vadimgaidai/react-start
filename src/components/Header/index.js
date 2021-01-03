import React from 'react'
import { NavLink } from 'react-router-dom'
import { section, navigation, list, link } from './header.module.scss'

const Header = () => {
	const links = [
		{
			id: 0,
			name: 'Index',
			path: '/',
			exact: true,
		},
		{
			id: 1,
			name: 'Test API',
			path: '/trial',
			exact: false,
		},
	]

	return (
		<header className={section}>
			<nav className={navigation}>
				<ul className={list}>
					{links?.map(({ id, path, name, exact }) => (
						<li key={id}>
							<NavLink
								className={link}
								to={path}
								rel="noopener noreferrer"
								exact={exact}
							>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
