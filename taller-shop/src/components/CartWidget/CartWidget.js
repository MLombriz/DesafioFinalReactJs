import React from 'react'
import './CartWidget.css'

// Importo la imagen del Carrito
import logoCartWidget from './logo/white-cartwidget-1.png'

const CartWidget = () => {
    return(
        <div className = "cartWidget">
            <img src={logoCartWidget} className="logoCartWidget" alt="Logo del Carrito de Compras"/>
        </div>
    )
}

export {CartWidget}