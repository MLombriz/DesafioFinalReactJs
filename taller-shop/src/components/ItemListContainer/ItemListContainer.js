import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { dataBase } from '../../firebase/firebase'

const ItemListContainer = ({ greeting }) => {
    const [arrayItems, setArrayItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const arrayList = []
    useEffect(() => {
        setLoading(true);
        const db = dataBase;
        const productCollection = db.collection('muebles');
        productCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No Results in dataBase: muebles');
            }
            setArrayItems(querySnapshot.docs.map((doc) => {
                return ({ id: doc.id, ...doc.data() })
            }))

        }).catch((error) => {
            console.log('Error searching items', error);
        }).finally(() => {
            setLoading(false);
        })
    }, [])
    return (
        <div className='itemListContainer-div'>
            {
                loading ? (<p className="greeting">Loading...</p>) :
                    (
                        <div>
                            <p className="greeting">{greeting}</p>
                            <ItemList items={arrayItems} />
                        </div>
                    )
            }
        </div >
    );
}

export { ItemListContainer }