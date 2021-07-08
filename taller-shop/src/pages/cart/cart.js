import React from 'react'
import './cart.css'
import { Page } from '../../components/page/Page'
import { CartDetail } from '../../components/CartDetail/CartDetail'


const Cart = () => {
    return (
        <Page >
            <div className="cart-container" >
                <p>Carrito de Compras</p>
            </div>
            <CartDetail />
        </Page>
    )
}

export { Cart }