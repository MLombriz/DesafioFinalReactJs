 import React from 'react'
 import './NavBar.css'
 
 function NavBar() {
     
    return(
        <nav className = "navbar">
            <div className = "logo-container">  
              <img src="../NavBar/logo/logo-taller.png" alt="Logo Taller Urbano"/>
            </div>
            <div className = "container">
                <ul className="navbar-container">
                    <li className="nav-link"><a href="">Productos</a></li>
                    <li className="nav-link"><a href="">Categorias</a></li>
                    <li className="nav-link"><a href="">Ofertas</a></li>
                </ul>
            </div>
            
        </nav>
    )
 }

 export { NavBar }
