import React from 'react'
import './category.css'
import { Page } from '../../components/page/Page'
import { useParams } from 'react-router'
import { Item } from '../../components/Item/Item'
// Importo Item.css para mostrar el item posteriormente se va a modificar el diseño
import '../../components/Item/Item.css'
import { productos } from '../../data/data'

const Category = () => {
    const { categoryId } = useParams();

    return (
        <Page>
            <div className='cat-container'>
                <h1>{categoryId}</h1>
                {productos
                    .filter((i) => i.category === categoryId)
                    .map((i) => (
                        <Item item={i} />
                    ))}
                <p>...Estamos trabajando para mejorar el sitio...</p>
            </div>
        </Page>
    )
}

export { Category }