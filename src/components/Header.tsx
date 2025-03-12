
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.scss'

const Header:React.FC = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/customers">Customers</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header