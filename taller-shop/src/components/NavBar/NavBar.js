 import React from 'react'
 import './NavBar.css'
 import logoTallerUrbano from '../NavBar/logo/logo-taller-blanco.png'
 import {CartWidget} from '../CartWidget/CartWidget'
 function NavBar() {
     
    return(
        <nav className = "navbar">
            <div className = "logo-container">  
              <img src={logoTallerUrbano} className="logoTallerUrbano" alt="Logo Taller Urbano"/>
            </div>
            <div className = "container">
                <ul className="navbar-container">
                    <li className="nav-link"><a href="">Productos</a></li>
                    <li className="nav-link"><a href="">Categorias</a></li>
                    <li className="nav-link"><a href="">Ofertas</a></li>
                </ul>
                <CartWidget />
            </div>
            
        </nav>
    )
 }

 export { NavBar }
