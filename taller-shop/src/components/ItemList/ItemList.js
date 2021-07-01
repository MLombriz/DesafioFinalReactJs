import React from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'

const ItemList = ({ items }) => {
    return (
        <div className='itemListContainer'>
            {items.length === 0 ? (
                // Genero un mensaje mientras se consigue el Listado de Items 
                <p className='itemListLoading'>Estamos cargando el listado</p>
            ) : (
                // Si items.lenght != 0 entonces me genero un Item por cada objeto del array
                items.map(i => {
                    return <Item item={i} />
                })
            )}
        </div>
    );
};

export { ItemList }