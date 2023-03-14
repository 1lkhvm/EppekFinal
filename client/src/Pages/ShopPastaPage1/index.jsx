import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Cake from '../../Components/ShopCake'
import { Helmet } from 'react-helmet'



function ShopCakePage() {
    return (
        <><Helmet>
            <meta charSet="utf-8" />
            <title>Cake</title>

        </Helmet>
            <Navbar />
            <ShopKargoSection1 />
            <Cake />
            <Footer />
        </>
    )
}

export default ShopCakePage