import { NavLink } from 'react-router-dom'
import { section, navigation, list, link } from './header.module.scss'

const Header = () => {
  const navLinks = [
    {
      id: 0,
      name: 'Main',
      path: '/',
      exact: true,
    },
    {
      id: 1,
      name: 'Users',
      path: '/users',
      exact: false,
    },
  ]

  return (
    <header className={section}>
      <nav className={navigation}>
        <ul className={list}>
          {navLinks?.map(({ id, path, name, exact }) => (
            <li key={id}>
              <NavLink className={link} to={path} exact={exact}>
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
