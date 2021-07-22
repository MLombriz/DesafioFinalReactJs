import React, { Fragment, useState } from 'react'
import './category.css'
import { Page } from '../../components/page/Page'
import { useParams } from 'react-router'
import { Item } from '../../components/Item/Item'
// Importo Item.css para mostrar el item posteriormente se va a modificar el diseño
import '../../components/Item/Item.css'
import { dataBase } from '../../firebase/firebase'
import { NotFound } from '../notFound/notFound'



const Category = () => {
    const { categoryId } = useParams();
    const [filterProducts, setFilterProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [noData, setNoData] = useState(false)
    const db = dataBase
    const productCollection = db.collection('muebles')
    const prodFilterCollection = productCollection.where('category', '==', categoryId)
    prodFilterCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            setNoData(true)
        }
        setFilterProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }).catch((err) => {
        console.log('Error filtrando por categoria', err);
    }).finally(() => {
        setLoading(false)
        setNoData(false)
    })

    return (
        <Fragment>
            {
                noData ?
                    (<NotFound />) :
                    (
                        <Page>
                            {
                                loading ?
                                    (<p className='loadingCategory'>Loading {categoryId} Products...</p>)
                                    :
                                    (
                                        <div className='cat-container'>
                                            <h1>{categoryId}</h1>
                                            {filterProducts.map((i) => (
                                                <Item item={i} key={i.id} />
                                            ))}
                                            <p>...Estamos trabajando para mejorar el sitio...</p>
                                        </div>
                                    )
                            }
                        </Page>
                    )
            }
        </Fragment>
    )
}

export { Category }