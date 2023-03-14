import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import ShopKargoSection2 from '../../Components/ShopKargo-Section2'
import { Helmet } from 'react-helmet'

function ShopKargo() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Eppek</title>

            </Helmet>
            <Navbar />
            <ShopKargoSection1 />
            <ShopKargoSection2 />
            <Footer />
        </>
    )
}

export default ShopKargo