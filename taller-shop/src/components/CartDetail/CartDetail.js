import React, { useContext, useEffect } from 'react'
import './CartDetail.css'
import { CartContext } from '../../context/CartContext'

const CartDetail = () => {
    const { cart } = useContext(CartContext)

    //Esto que sigue deberia hacerlo en un CartContainer, pero lo voy a seguir mas adelante en los desafios por venir
    return (
        <div className='cartDetailContainer'>
            <button onClick={() => console.log(cart)}>console CART</button>
            {cart === undefined ?
                (<p>No hay items todavia seleccionados</p>) : (
                    cart.map((obj, index) => {
                        return (
                            <div className='cartDetail-row' >
                                <p>{index}</p>
                                <p>{obj.item.title}</p>
                                <p>{obj.quantity}</p>
                                <p>{obj.item.price}</p>
                                <p>{parseInt(obj.item.price) * parseInt(obj.quantity)}</p>
                            </div>
                        )
                    })
                )}
        </div>
    )
}

export { CartDetail }