import React from 'react'
import Wishlist from '../../Components/Wishlist'
import Wishlistsection2 from '../../Components/Wishlist-Section2'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import { Helmet } from 'react-helmet'

function Wishlistpage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>WishList</title>

            </Helmet>
            <Navbar />
            <Wishlist />
            <Wishlistsection2 />
            <Footer />


        </>
    )
}

export default Wishlistpage