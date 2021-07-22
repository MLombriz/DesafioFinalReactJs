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
                    minimumFractionDigits: 0,
                })}</p>
                <p className='noStock' hidden={item.stock === 0 ? false : true}><span>Out of Stock</span></p>
            </div>
        </NavLink>
    )
}

export { Item }