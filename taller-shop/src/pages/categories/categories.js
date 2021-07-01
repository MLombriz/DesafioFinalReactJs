import React from 'react'
import './categories.css'
import { Page } from '../../components/page/Page'
import { NavLink } from 'react-router-dom'
import { categoryList } from '../../data/data'

const Categories = () => {
    return (
        <Page>
            <div className='categories-container'>
                {categoryList.map(cat => {
                    return (
                        <NavLink to={`/categories/${cat.category}`} >
                            <div className='catImg-container' key={cat.idCategory}>
                                <img src={cat.pictureUrl} alt="Category" className='categoryImg' />
                                <p className='catTitle'>{cat.category}</p>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </Page>
    )
}

export { Categories }