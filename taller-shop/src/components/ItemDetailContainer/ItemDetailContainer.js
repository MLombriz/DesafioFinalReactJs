import './ItemDetailContainer.css'
import React, { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const prod1 = {
        id: 1,
        title: "Mesa Rustica 1",
        price: 20000,
        summary: 'Mesa estilo Industrial',
        materials: 'Eucalipto Alistonado - Estructural 30 x 30 mm',
        description: "Mesa en Eucalipto Alistonado, con patas en caño estructural 30 x 30 mm, con terminacion en negro satinado pintado con compresor. Acabado de tapa con Laca Poliuretanica",
        size: "2,00 x 1,00 mts",
        stock: 10,
        pictureUrl: "https://placekitten.com/g/300/200"
    }
    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(setItem(prod1))
            }, 2000);
        })
    }, [])

    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}

export { ItemDetailContainer }