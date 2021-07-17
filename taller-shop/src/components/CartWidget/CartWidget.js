import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'
// Importo la imagen del Carrito
import logoCartWidget from './logo/white-cartwidget-1.png'

const CartWidget = () => {
    const { numberItems } = useContext(CartContext)
    return (
        <div className={`cartWidget ${numberItems > 0 ? 'shadow' : ''}`}>
            <img src={logoCartWidget} className="logoCartWidget" alt="Logo del Carrito de Compras" />
            <span className={`totalItems ${numberItems > 0 ? 'visibleClass' : 'inVisibleClass'}`}>{numberItems}</span>
        </div>
    )
}

export { CartWidget }