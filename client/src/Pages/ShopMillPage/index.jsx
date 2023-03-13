import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Mill from '../../Components/ShopMill'
import MillSection2 from '../../Components/ShopMill-Section2'






function ShopMillPage() {
    return (
        <>
            <Navbar />
            <MillSection2 />
            <Mill />
            <Footer />
        </>
    )
}

export default ShopMillPage