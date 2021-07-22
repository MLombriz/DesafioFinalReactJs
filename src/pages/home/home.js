import React from 'react'
import './home.css'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'
import { Page } from '../../components/page/Page'

export const Home = () => {
    return (
        <Page >
            <div className="home" >
                <ItemListContainer greeting="Bienvenido a Tu Carrito, ya falta poco..." />
            </div>
        </Page>
    )
}