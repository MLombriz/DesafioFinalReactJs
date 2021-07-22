import React from 'react'
import './NavBar.css'
import logoTallerUrbano from '../NavBar/logo/logo-taller-blanco.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
function NavBar() {

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to='/'>
                    <img src={logoTallerUrbano} className="logoTallerUrbano" alt="Logo Taller Urbano" />
                </Link>
            </div>
            <div className="container">
                <ul className="navbar-container">
                    <li className='nav-link'>
                        <Link to='/categories' >
                            Categorias
                        </Link>
                    </li>
                    <li className="nav-link"><Link to='/ofertas' >
                        Ofertas
                    </Link></li>
                </ul>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
            </div>

        </nav>
    )
}

export { NavBar }
