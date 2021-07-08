import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial = 0, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(parseInt(initial))
    //const [myStock, setMyStock] = useState(stock)
    const handleCount = (operator) => {
        if (operator === '+') {
            if ((quantity < stock) && (quantity >= 0)) {
                setQuantity(quantity + 1)
            }
        }
        else if (operator === '-') {
            if (quantity > 0) {
                setQuantity(quantity - 1)
            }
        }
    }

    return (
        <div className="ItemCount">
            <div className='Counter-div'>
                <button onClick={() => handleCount('-')}><span>-</span></button>
                <span>{quantity}</span>
                <button onClick={() => handleCount('+')}><span>+</span></button>
            </div>
            <button id='btnAdd' className='btn-carrito' disabled={stock === 0} onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
        </div >
    )
}

export { ItemCount }