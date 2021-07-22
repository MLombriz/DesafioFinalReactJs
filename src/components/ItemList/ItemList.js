import React from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'

const ItemList = ({ items }) => {
    return (
        <div className='itemListContainer'>
            {items.map(i => {
                return <Item item={i} key={i.id} />
            })}
        </div>
    );
};

export { ItemList }