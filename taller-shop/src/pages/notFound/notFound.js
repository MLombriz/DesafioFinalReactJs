import React from 'react'
import './notFound.css'
import { Page } from '../../components/page/Page'

const NotFound = () => {
    return (
        <Page>
            <div className='notFound-container'>
                <h1>Error 404</h1>
                <p>
                    Page not Found!
                </p>
            </div>
        </Page>

    )
}

export { NotFound }