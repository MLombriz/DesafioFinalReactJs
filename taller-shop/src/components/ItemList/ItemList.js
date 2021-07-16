import React from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'

const ItemList = ({ items }) => {
    return (
        <div className='itemListContainer'>
            {items.length === 0 ? (
                <p className='itemListLoading'>Estamos cargando el listado</p>
            ) : (
                items.map(i => {
                    return <Item item={i} key={i.id} />
                })
            )}
        </div>
    );
};

export { ItemList }