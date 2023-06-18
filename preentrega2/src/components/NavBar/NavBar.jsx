import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="menuPrincipal">
      <ul>
        <Link className='li' to="/">Inicio</Link>
        <Link className='li' to="/about">Acerca de</Link>
        <Link className='li' to="/contact">Contacto</Link>
        <li><CardWidget/></li>
      </ul>
    </nav>
  )
}

export default NavBar