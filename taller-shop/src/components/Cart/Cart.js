import React, { useContext, useState } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext)
    if (cart.length === 0) {
        return (
            <div className='cartContainer'>
                <div className='noItemMessage'>
                    <p > Por el momento no dispone de items agregados al carrito</p>
                </div>
                <Link to='/'>
                    <p className='linkHome'>Ir al Home</p>
                </Link>
            </div>
        )
    }
    else {
        var sum = 0
        return (
            <div>
                <div className='cartContainer'>
                    <div className='cartItem-row header-row' >
                        <p className='orderNumber'>Nro</p>
                        <p className='descripcion'>Descripcion</p>
                        <p className='cantidad'>Cantidad</p>
                        <p className='precio'>Precio</p>
                        <p className='subtotal'>Subtotal</p>
                        <p className='accion'>Accion</p>
                    </div>
                    {cart.map((obj, index) => {
                        sum += (parseInt(obj.item.price) * parseInt(obj.quantity))
                        return (
                            <div key={obj.item.id} className='cartItem-row' >
                                <p className='orderNumber'>{index + 1}</p>
                                <p className='descripcion'>{obj.item.title}</p>
                                <p className='cantidad'>{obj.quantity}</p>
                                <p className='precio'>{obj.item.price}</p>
                                <p className='subtotal'>{parseInt(obj.item.price) * parseInt(obj.quantity)}</p>
                                <button className='accion'
                                    onClick={() => removeItem(obj.item.id, obj.quantity)}>Remove</button>
                            </div>
                        )
                    })
                    }
                </div>
                <p className='totalPrice'>Precio Total:  <span>AR$ {sum}</span></p>
                <button className='btnClean' onClick={() => clearCart()} >Limpiar Carrito</button>
            </div>
        )
    }
}

export { Cart }

// const subtotal = parseInt(obj.item.price) * parseInt(obj.quantity)
// setTotalPrice(totalPrice + subtotal)