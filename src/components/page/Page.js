import React from "react"
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import './Page.css'

const Page = ({ children }) => {

    return (
        <div className='page-content'>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export { Page }