import React from 'react'
import { NavLink } from 'react-router-dom'

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
		<header>
			<nav>
				<ul>
					{likns.length ? (
						likns.map(({ name, id, path, exact }) => (
							<li key={id}>
								<NavLink to={path} exact={exact}>
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
