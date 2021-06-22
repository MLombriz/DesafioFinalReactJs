import React, { useState, useEffect } from 'react'
import './ItemCount.css'


// - De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
// - Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.

const ItemCount = ({ initial, stock}) => {
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

    function onAdd() {
        var nuevoStock = myStock - numero
        if((nuevoStock)>=0){
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
            <button id='btnAdd' className='btn-carrito' onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

//function checkStock() {
//    console.log(document.getElementById('warninStock'))
//}
export { ItemCount }