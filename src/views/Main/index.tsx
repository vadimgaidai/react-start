import { FC } from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import style from './main.module.scss'

const Main: FC = () => (
  <main className={style.section}>
    <Logo className={style.logo} />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className={style.link}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </main>
)

export default Main
