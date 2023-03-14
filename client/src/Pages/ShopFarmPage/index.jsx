import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'

import Farm from '../../Components/ShopFarm'
import { Helmet } from 'react-helmet'



function ShopFarmPage() {
    return (
        <> <Helmet>
            <meta charSet="utf-8" />
            <title>Farm</title>

        </Helmet>
            <Navbar />
            <ShopKargoSection1 />
            <Farm />
            <Footer />
        </>
    )
}

export default ShopFarmPage