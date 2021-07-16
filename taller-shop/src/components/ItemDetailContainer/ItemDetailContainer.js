import './ItemDetailContainer.css'
import React, { useState, useEffect, Fragment } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { Page } from '../page/Page'
import { NotFound } from '../../pages/notFound/notFound'
import { dataBase } from '../../firebase/firebase'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(undefined);
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true)
    const [noData, setNoData] = useState(false)
    useEffect(() => {
        const db = dataBase;
        const productCollection = db.collection('muebles');
        const product = productCollection.doc(itemId);
        console.log('item buscado', itemId)
        product.get().then((doc) => {
            if (!doc.exists) {
                console.log(`Item Id ${itemId} no existe en el documento`);
                setNoData(true)
            }
            console.log(`Item Id ${itemId} encontrado!`);
            setItem({ id: doc.id, ...doc.data() });
        }).catch((err) => {
            console.log('Error buscando el item', err);
        }).finally(() => {
            setLoading(false);
            setNoData(false)
        });
    }, [itemId])

    return (
        <Fragment>
            {
                noData ?
                    (<NotFound />) :
                    (
                        <Page>
                            {
                                loading ?
                                    (<p>Loading...</p>)
                                    :
                                    (
                                        <div className='itemDetailContainer'>
                                            <ItemDetail key={item.id} item={item} />
                                        </div>
                                    )
                            }
                        </Page>
                    )
            }
        </Fragment>
    )
}

export { ItemDetailContainer }