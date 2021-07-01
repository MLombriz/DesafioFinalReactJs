import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial = 0, stock, onAdd }) => {
    const [numero, setNumero] = useState(parseInt(initial))
    //const [myStock, setMyStock] = useState(stock)
    const handleCount = (operator) => {
        if (operator === '+') {
            if ((numero < stock) && (numero >= 0)) {
                setNumero(numero + 1)
            }
        }
        else if (operator === '-') {
            if (numero > 0) {
                setNumero(numero - 1)
            }
        }
    }

    return (
        <div className="ItemCount">
            <div className='Counter-div'>
                <button onClick={() => handleCount('-')}><span>-</span></button>
                <span>{numero}</span>
                <button onClick={() => handleCount('+')}><span>+</span></button>
            </div>
            <button id='btnAdd' className='btn-carrito' disabled={stock === 0} onClick={onAdd}>Agregar al Carrito</button>
        </div >
    )
}

export { ItemCount }