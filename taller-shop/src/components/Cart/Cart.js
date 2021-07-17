import React, { Fragment, useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice, endPurchase, orderId } = useContext(CartContext)

    return (
        <Fragment>
            {
                cart.length === 0 ?
                    (
                        <div className='cartContainer'>
                            <div className='noItemMessage'>
                                <p > Por el momento no dispone de items agregados al carrito</p>
                            </div>
                            <Link to='/'>
                                <p className='linkHome'>Ir al Home</p>
                            </Link>
                        </div>
                    )
                    :
                    (
                        <Fragment>
                            <p className='totalPrice'>Precio Total:  <span>AR$ {totalPrice.toLocaleString('es-AR', {
                                valute: 'USD',
                                minimumFractionDigits: 0,
                            })}</span></p>
                            <div className='cartContainerButtons'>
                                <button className='btnClean' onClick={() => clearCart()} >Limpiar Carrito</button>
                                <button className='btnEndPurchase' onClick={() => endPurchase()} >Finalizar Compra</button>
                            </div>
                            <div className='cartContainer'>
                                <div className='cartItem-row header-row' >
                                    <p className='orderNumber'>Nro</p>
                                    <p className='descripcion'>Descripcion</p>
                                    <p className='cantidad'>Cantidad</p>
                                    <p className='precio'>Precio</p>
                                    <p className='subtotal'>Subtotal</p>
                                    <p className='accion'>Accion</p>
                                </div>
                                {cart.map(
                                    ({ item, quantity }, index) => {
                                        return (
                                            <div className='cartItem-row'>
                                                <p className='orderNumber'>{index + 1}</p>
                                                <p className='descripcion'>{item.title}</p>
                                                <p className='cantidad'>{quantity}</p>
                                                <p className='precio'> $ {(item.price).toLocaleString('es-AR', {
                                                    valute: 'USD',
                                                    minimumFractionDigits: 0,
                                                })}</p>
                                                <p className='subtotal'>$ {(item.price * quantity).toLocaleString('es-AR', {
                                                    valute: 'USD',
                                                    minimumFractionDigits: 0,
                                                })}</p>
                                                <button className='accion btn-accion'
                                                    onClick={() => removeItem(item.id, quantity)}>Delete</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    )
}

export { Cart }