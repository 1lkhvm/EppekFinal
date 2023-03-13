import React from 'react'
import Wishlist from '../../Components/Wishlist'
import Wishlistsection2 from '../../Components/Wishlist-Section2'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'

function Wishlistpage() {
    return (
        <>
            <Navbar />
            <Wishlist />
            <Wishlistsection2 />
            <Footer />


        </>
    )
}

export default Wishlistpage