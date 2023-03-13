import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, } from "react-router-dom";
import "./style.scss"
function AdminBread() {
    const [post, setPost] = useState([]);
    const [stats, setStats] = useState([])
    useEffect(() => {
        DataGet()
        DataStat()
    }, []);

    function DataStat() {
        axios.get("http://localhost:5000/api/users/stats").then((response) => {
            setStats(response.data);
        });


    }




    function DataGet() {
        axios.get("http://localhost:5000/api/productsbread").then((response) => {
            setPost(response.data);
        });


    }
    function Datadelete(id) {
        axios.delete(`http://localhost:5000/api/productsbread/${id}`).then(DataGet, DataStat)

    }


    function Dataedit(id) {
        axios.put(`http://localhost:5000/api/productsbread/${id}`).then((response) => {
            setPost(response.data);
        });

    }
    return (
        <div class="containerproductbread">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">_ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Img</th>
                            <th scope="col">categories</th>
                            <th scope="col">weight</th>
                            <th scope="col">price</th>
                            <th scope="col">EditProduct</th>

                            <th>DeleteProduct</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((element) =>
                            <tr>
                                <th class="noBorder"><p>{element._id}</p></th>
                                <th class="noBorder"><p>{element.title}</p></th>
                                <th class="noBorder"><p>{element.description}</p></th>
                                <th class="noBorder"><img src={element.img} alt="" /></th>
                                <th class="noBorderm"><p>{element.categories}</p></th>
                                <th class="noBorder">{element.weight}qr</th>
                                <th class="noBorder">{element.price}₼</th>
                                <th scope="noBorder"> <Link to={`/product_bread_admin_panel/${element._id}`} ><button className='button-64' onClick={() => Dataedit()}>Edit</button></Link></th>

                                <th class="noBorder"><button className='button-64' onClick={() => Datadelete(element._id)}>Delete</button></th>


                            </tr>
                        )}
                    </tbody>
                </table>


            </div>





        </div>
    )
}

export default AdminBread


