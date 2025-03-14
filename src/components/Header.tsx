
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
            <NavLink to="/locaitons">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header