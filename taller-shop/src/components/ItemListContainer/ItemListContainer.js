import React from 'react'
import './ItemListContainer.css'
import {ItemCount} from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <p>
                {greeting}
            </p>
           <ItemCount stock='10' initial='5' />
        </div>
        
    )
}

export {ItemListContainer}