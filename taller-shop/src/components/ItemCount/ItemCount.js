import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [numero, setNumero] = useState(parseInt(initial))
    const [myStock, setMyStock] = useState(stock)
    function ContSumar() {
        if ((numero < myStock) && (numero >= 0)) {
            setNumero(numero + 1)

        }
    }
    function ContRestar() {
        if (numero > 0) {
            setNumero(numero - 1)

        }
    }

    function Agregar() {
        var nuevoStock = myStock - numero
        if ((nuevoStock) >= 0) {
            setMyStock(nuevoStock)
            alert(`Ya se agregaron al carrito ${numero} items, quedan ${nuevoStock} en stock`);
        }

    }

    return (
        <div className="ItemCount">
            <div className='Counter-div'>
                <button onClick={ContRestar}><span>-</span></button>
                <span>{numero}</span>
                <button onClick={ContSumar}><span>+</span></button>
            </div>
            <button id='btnAdd' className='btn-carrito' onClick={Agregar}>Agregar al Carrito</button>
        </div>
    )
}

export { ItemCount }