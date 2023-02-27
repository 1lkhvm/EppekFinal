import React from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Cake from '../../Components/ShopCake'



function ShopCakePage() {
    return (
        <>
            <Navbar />
            <ShopKargoSection1 />
            <Cake />
            <Footer />
        </>
    )
}

export default ShopCakePage