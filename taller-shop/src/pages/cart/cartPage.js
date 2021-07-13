import React, { Fragment } from 'react'
import './cartPage.css'
import { Page } from '../../components/page/Page'
import { Cart } from '../../components/Cart/Cart'


const CartPage = () => {
    return (
        <Page >
            <Fragment>
                <div className="cart-container" >
                    <p>Carrito de Compras</p>
                </div>
                <Cart />
            </Fragment>
        </Page>
    )
}

export { CartPage }