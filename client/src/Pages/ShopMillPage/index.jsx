import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Mill from '../../Components/ShopMill'
import MillSection2 from '../../Components/ShopMill-Section2'
import { Helmet } from 'react-helmet'






function ShopMillPage() {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Mill</title>

            </Helmet>
            <Navbar />
            <MillSection2 />
            <Mill />
            <Footer />
        </>
    )
}

export default ShopMillPage