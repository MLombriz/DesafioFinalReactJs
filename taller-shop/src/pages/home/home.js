import React from 'react'
import './home.css'
import {NavBar} from '../../components/NavBar/NavBar'
import {ItemListContainer} from '../../components/ItemListContainer/ItemListContainer'

export const Home = () => {
    return ( 
        <div className = "home" >
            <NavBar />
            <ItemListContainer greeting = "Bienvenido a Tu Carrito, ya falta poco..." />
        </div>
    )
}