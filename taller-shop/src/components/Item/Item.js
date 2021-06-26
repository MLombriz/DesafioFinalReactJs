import React from 'react'
import './Item.css'
import { ItemCount } from '../ItemCount/ItemCount'

// Como se visualiza el Item
// item = { id, title, price, pictureUrl }

const Item = ({ item }) => {

    return (
        <div key={item.id} className="item-container">
            <img className="item-img" src={item.pictureUrl} alt={`Prduct Img from id: ${item.id}`} />
            <p className="item-title">{item.title}</p>
            <p className="item-description">{item.description}</p>
            <p className="item-price">AR$ {(item.price).toLocaleString('es-AR', {
                valute: 'USD',
                minimumFractionDigits: 2,
            })}</p>
            <ItemCount stock={item.stock} initial='0' onAdd={() => { }} />
        </div>
    )
}

export { Item }