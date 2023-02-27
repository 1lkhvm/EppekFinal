import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Pasta from '../../Components/ShopPasta'



function ShopPastaPage() {
    return (
        <>
            <Navbar />
            <ShopKargoSection1 />
            <Pasta />
            <Footer />
        </>
    )
}

export default ShopPastaPage