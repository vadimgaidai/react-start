import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'

const Header: FC = () => {
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
    <header className={style.section}>
      <nav className={style.navigation}>
        <ul className={style.list}>
          {navLinks?.map(({ id, path, name, exact }) => (
            <li key={id}>
              <NavLink className={style.link} to={path} exact={exact}>
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
