import React, { Fragment, useState, useContext, useEffect } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Form } from '../Form/Form'
import { formInputs } from '../../data/formInputs'

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice, endPurchase, orderId } = useContext(CartContext)
    const [formData, setFormData] = useState(formInputs);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [buyerData, setBuyerData] = useState({ name: '', surname: '', mail: '' })
    useEffect(() => {
        const requiredInputs = formData.filter(({ required }) => required);
        const isSomeRequiredInputEmpty = requiredInputs.some(({ value }) => !value);
        if (isSomeRequiredInputEmpty) {
            setIsSubmitDisabled(true);
        } else {
            const searchMailIndex = formData.findIndex((obj => obj.name === 'mail'))
            const searchMailConfirmationIndex = formData.findIndex((obj => obj.name === 'mailConfirmation'))
            if (formData[searchMailIndex].value === formData[searchMailConfirmationIndex].value) {
                setIsSubmitDisabled(false);
            }
        }
    }, [formData]);
    const onInput = ({ target }) => {
        const nextFormData = [...formData]
        const searchObjIndex = nextFormData.findIndex((obj => obj.name === target.name))
        nextFormData[searchObjIndex].value = target.value
        setFormData(nextFormData)
    };
    const submitPurchase = () => {
        const nextBuyerData = { ...buyerData }
        const searchObjNameIndex = formData.findIndex((obj => obj.name === 'name'))
        const searchObjSurnameIndex = formData.findIndex((obj => obj.name === 'surname'))
        const searchObjMailIndex = formData.findIndex((obj => obj.name === 'mail'))
        nextBuyerData.name = formData[searchObjNameIndex].value
        nextBuyerData.surname = formData[searchObjSurnameIndex].value
        nextBuyerData.mail = formData[searchObjMailIndex].value
        setBuyerData(nextBuyerData)

        endPurchase(nextBuyerData)
    }
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
                            <Form formInputs={formData} onInput={(e) => onInput(e)} />
                            <div className='cartContainerButtons'>
                                <button className='btnClean' onClick={() => clearCart()} >Limpiar Carrito</button>
                                <button className={isSubmitDisabled ? '' : 'btnEndPurchase'} onClick={() => submitPurchase()} disabled={isSubmitDisabled}>Finalizar Compra</button>
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
                                            <div key={item.id} className='cartItem-row'>
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