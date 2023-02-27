import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import ShopKargoSection2 from '../../Components/ShopKargo-Section2'

function ShopKargo() {
    return (
        <>
            <Navbar />
            <ShopKargoSection1 />
            <ShopKargoSection2 />
            <Footer />
        </>
    )
}

export default ShopKargo