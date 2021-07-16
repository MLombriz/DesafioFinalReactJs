import React, { useState } from 'react'
import './categories.css'
import { Page } from '../../components/page/Page'
import { NavLink } from 'react-router-dom'
import { dataBase } from '../../firebase/firebase'
const Categories = () => {
    const [loading, setLoading] = useState(true)
    const [categoryList, setCategoryList] = useState([])
    const db = dataBase;
    const categoryCollection = db.collection('categoryList')
    categoryCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('No Results in dataBase: CategoryList');
            return;
        }
        setCategoryList(querySnapshot.docs.map((doc) => ({ idCategory: doc.id, ...doc.data() })))
    }).catch((err) => {
        console.log('Error buscando Categorias', err)
    }).finally(() => {
        setLoading(false)
    })

    return (
        <Page>
            {
                loading ?
                    (<p>Cargando Categorias...</p>)
                    :
                    (
                        <div className='categories-container'>
                            {categoryList.map(cat => {
                                return (
                                    <NavLink to={`/categories/${cat.category}`} key={cat.idCategory} >
                                        <div className='catImg-container' key={cat.idCategory}>
                                            <img src={cat.pictureUrl} alt="Category" className='categoryImg' />
                                            <p className='catTitle'>{cat.category}</p>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    )
            }
        </Page>
    )
}

export { Categories }