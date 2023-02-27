import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import ShopBread1 from '../../Components/ShopBread1'



function ShopBreadPage() {
    
    return (
        <>
            <Navbar />
            <ShopKargoSection1 />
            <ShopBread1 />
            <Footer />
        </>
    )
}

export default ShopBreadPage