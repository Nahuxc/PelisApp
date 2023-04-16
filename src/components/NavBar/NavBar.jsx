import React from 'react'
import logo from "../../../public/img/logo.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='box-navbar'>
      <div className='navbar-navigation'>
        <li>Inicio</li>
        <li>Peliculas</li>
        <img className='navbar-logo' src={logo} alt="logo" />
        <li>Blog</li>
        <li>Contacto</li>
      </div>
    </div>
  )
}

export default NavBar