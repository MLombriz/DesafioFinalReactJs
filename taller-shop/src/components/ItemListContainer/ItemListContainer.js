import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [arrayItems, setArrayItems] = useState([]);
    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setArrayItems(
                    // Genero un array de Items
                    [{
                        id: 1,
                        title: "Mesa Rustica 1",
                        price: 20000,
                        summary: 'Mesa estilo Industrial',
                        materials: 'Eucalipto Alistonado - Estructural 30 x 30 mm',
                        description: "Mesa en Eucalipto Alistonado, con patas en caño estructural 30 x 30 mm, con terminacion en negro satinado pintado con compresor. Acabado de tapa con Laca Poliuretanica",
                        size: "2,00 x 1,00 mts",
                        stock: 10,
                        pictureUrl: "https://placekitten.com/g/300/200"
                    },
                    {
                        id: 2,
                        title: "Mesa Rustica 2",
                        price: 25000,
                        description: "Mesa en Eucalipto Alistonado, con patas en caño estructural 30 x 30 mm",
                        size: "2,00 x 2,00 mts",
                        stock: 4,
                        pictureUrl: "https://placekitten.com/g/300/200"
                    },
                    {
                        id: 3,
                        title: "Mesa Rustica 3",
                        price: 8000,
                        description: "Mesa en Eucalipto Alistonado, con patas en caño estructural 30 x 30 mm",
                        size: "2,00 x 1,00 mts",
                        stock: 20,
                        pictureUrl: "https://placekitten.com/g/300/200"
                    }]
                ));
            }, 2000);
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