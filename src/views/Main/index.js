// import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { section, logo, link } from './main.module.scss'

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
