import React from 'react'
import './cartPage.css'
import { Page } from '../../components/page/Page'
import { Cart } from '../../components/Cart/Cart'


const CartPage = () => {
    return (
        <Page >
            <div className="cart-container" >
                <p className='cartWelcome'>Tus Productos Seleccionados</p>
                <Cart />
            </div>
        </Page>
    )
}

export { CartPage }