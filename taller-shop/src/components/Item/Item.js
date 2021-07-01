import React from 'react'
import './Item.css'
import { NavLink } from 'react-router-dom'


const Item = ({ item }) => {
    return (
        <NavLink to={`/item/${item.id}`}>
            <div key={item.id} className="item-container">
                <img className="item-img" src={item.pictureUrl} alt={`Prduct Img from id: ${item.id}`} />
                <p className="item-title">{item.title}</p>
                <p className="item-description">{item.description}</p>
                <p className="item-price">AR$ {(item.price).toLocaleString('es-AR', {
                    valute: 'USD',
                    minimumFractionDigits: 2,
                })}</p>
            </div>
        </NavLink>

    )
}

export { Item }