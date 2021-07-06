import './ItemDetail.css'
import React, { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0)
    const [hidden, setHidden] = useState(false)

    // Al apretar un botton "Agregar Carrito" se ejeucta onAdd:
    const onAdd = (e) => {
        setHidden(true)
        // tmb puedo hacerlo con e.target.value si asigno en button value={quantity}
        const numberItems = parseInt(e.target.parentElement.children[0].children[1].innerText)
        setQuantity(numberItems)

    }
    return (
        <div key={item.id} className='itemDetail-container'>
            <img className="itemDetail-img" src={item.pictureUrl} alt={`Prduct Detail Img from id: ${item.id}`} />
            <div className='itemDetail-info'>
                <p className="itemDetail-title">{item.title}</p>
                <p className="itemDetail-description">{item.description}</p>
                <p className="itemDetail-materials">Elaborado con: {item.materials}</p>
                <p className="itemDetail-size">Medidas: {item.size}</p>
                <p className="itemDetail-price">AR$ {item.price}</p>
                <div className='ItemCount-container' hidden={hidden}>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
                <div className='btn-container' hidden={!hidden}>
                    <Link to='/cart'>
                        <button id='btnEnd'>Terminar mi compra</button>
                    </Link>
                    <Link to='/'>
                        <button id='btnContinue'>Continuar comprando</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export { ItemDetail }