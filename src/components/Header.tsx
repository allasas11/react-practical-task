
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
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header