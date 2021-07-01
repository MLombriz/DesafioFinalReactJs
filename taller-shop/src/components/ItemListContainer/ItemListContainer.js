import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { productos } from '../../data/data'

const ItemListContainer = ({ greeting }) => {
    const [arrayItems, setArrayItems] = useState([]);

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        })

        getItems.then(() => {
            setArrayItems(productos)
        })
    }, [])


    return (
        <div className='itemListContainer-div'>
            <p className="greeting">{greeting}</p>
            <ItemList items={arrayItems} />
        </div>
    );
}

export { ItemListContainer }