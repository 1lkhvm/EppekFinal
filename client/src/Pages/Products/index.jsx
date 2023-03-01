import React, { useState , useEffect } from 'react'
import ShopKargoSection1 from '../../Components/ShopKargo-Section1'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Pasta from '../../Components/ShopPasta'
import { useParams } from 'react-router-dom'



function Products() {
    let params = useParams()
    let {category} = useParams()

    const [category_,setCategory_] = useState(category)
    const [b,bb]=  useState(90)
    useEffect( ()=>{
        console.log('ders',category);
        setCategory_ ( x =>  x=  category)
        bb('bb')

    },[params])


    return (
        <div>
        
            <Navbar />
            <ShopKargoSection1  />
            <Pasta b={b} category={category_} />
            <Footer />
        </div>
    )
}

export default Products