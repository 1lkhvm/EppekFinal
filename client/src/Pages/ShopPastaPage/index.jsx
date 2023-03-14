import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Pasta from '../../Components/ShopPasta'
import { Helmet } from 'react-helmet'



function ShopPastaPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Pasta</title>

            </Helmet>
            <Navbar />
            <ShopKargoSection1 />
            <Pasta />
            <Footer />
        </>
    )
}

export default ShopPastaPage