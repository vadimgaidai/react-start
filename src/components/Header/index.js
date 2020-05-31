import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
	const likns = [
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
		<header className="header">
			<nav className="header__navigation">
				<ul className="header__list">
					{likns.length ? (
						likns.map(({ name, id, path, exact }) => (
							<li className="header__item" key={id}>
								<NavLink className="header__link" to={path} exact={exact}>
									{name}
								</NavLink>
							</li>
						))
					) : (
						<li></li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default Header
