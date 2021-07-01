import './ItemDetail.css'
import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
    return (
        <div key={item.id} className='itemDetail-container'>
            <p className="itemDetail-title">{item.title}</p>
            <img className="itemDetail-img" src={item.pictureUrl} alt={`Prduct Detail Img from id: ${item.id}`} />
            <p className="itemDetail-description">{item.description}</p>
            <p className="itemDetail-materials">Elaborado con: {item.materials}</p>
            <p className="itemDetail-size">Medidas: {item.size}</p>
            <p className="itemDetail-price">AR$ {item.price}</p>
            <div>
                <ItemCount stock={item.stock} />
            </div>

        </div>
    )
}

export { ItemDetail }