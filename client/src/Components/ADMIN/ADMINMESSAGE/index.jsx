import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./style.scss"
function ADMINMESSAGE() {
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
        axios.get("http://localhost:5000/api/message").then((response) => {
            setPost(response.data);
        });


    }
    function Datadelete(id) {
        axios.delete(`http://localhost:5000/api/message/${id}`).then(DataGet, DataStat)

    }


    function Dataedit(id) {
        axios.get(`http://localhost:5000/api/message/${id}`).then((response) => {
            setPost(response.data);
        });

    }
    return (
        <div class="container">
            <div class="table-responsive">
                <table class="table1">
                    <thead>
                        <tr>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">message</th>
                            <th scope="col">createdAt</th>
                            <th>DeleteAccount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((element) =>
                            <tr>
                                <th class="noBorder">{element.firstName}</th>
                                <th class="noBorder">{element.lastName}</th>
                                <th class="noBorder">{element.email}</th>
                                <th class="noBorderm">{element.message}</th>
                                <th class="noBorder">{element.createdAt}</th>
                                <th class="noBorderbtn"><button className='button-64' onClick={() => Datadelete(element._id)}>Delete</button></th>
                            </tr>
                        )}
                    </tbody>
                </table>


            </div>

        </div>
    )
}

export default ADMINMESSAGE


