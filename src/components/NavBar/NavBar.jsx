import React, {useState, useEffect} from 'react'
import logo from "../../../public/img/logo.png"
import "./NavBar.css"
import SideBar from '../SideBar/SideBar'

const NavBar = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 800px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  return (
    <div className='box-navbar'>
        {
          !matches ? (
            <div className='navbar-navigation'>
              <img className='navbar-logo' src={logo} alt="logo" />
              <SideBar/>
            </div>
          ):
          ( <div className='navbar-navigation'>
                  <li>Inicio</li>
                  <li>Peliculas</li>
                  <img className='navbar-logo' src={logo} alt="logo" />
                  <li>Blog</li>
                  <li>Contacto</li>
          </div>)
        }
    </div>
  )
}

export default NavBar