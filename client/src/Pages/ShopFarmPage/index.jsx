import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'

import Farm from '../../Components/ShopFarm'



function ShopFarmPage() {
    return (
        <>
            <Navbar />
            <ShopKargoSection1 />
            <Farm />
            <Footer />
        </>
    )
}

export default ShopFarmPage