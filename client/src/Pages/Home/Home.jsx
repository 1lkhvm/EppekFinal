import React from 'react'
import HomeSection1 from '../../Components/Home-Section1'
import HomeSection2 from '../../Components/Home-Section2'
import HomeSection3 from '../../Components/Home-Section3'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'
import { Helmet } from "react-helmet";
function Home() {


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Eppek Home</title>

            </Helmet>
            <Navbar />
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <Footer />

        </>
    )
}

export default Home



