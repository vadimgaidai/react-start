import React from 'react'; 
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to="/">Index</Link>
        <Link to="/test">Test</Link>
      </header>
    )
  }
}