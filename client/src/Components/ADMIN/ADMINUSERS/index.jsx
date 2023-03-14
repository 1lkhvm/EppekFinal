import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./style.scss"
function ADMINUSERS() {
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
        axios.get("http://localhost:5000/api/users").then((response) => {
            setPost(response.data);
        });


    }
    function Datadelete(id) {
        axios.delete(`http://localhost:5000/api/users/${id}`).then(DataGet, DataStat)

    }


    function Dataedit(id) {
        axios.get(`http://localhost:5000/api/users/${id}`).then((response) => {
            setPost(response.data);
        });

    }
    return (
        <div class="container">
            <div class="table-responsive">
                <table class="table1">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">CreateTime</th>
                            <th scope="col">UpdateTime</th>
                            <th className='th21'>DeleteAccount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((element) =>
                            <tr>
                                <th class="noBorder">{element._id}</th>
                                <th class="noBorder">{element.username}</th>
                                <th class="noBorder">{element.email}</th>
                                <th class="noBorder">{element.createdAt}</th>
                                <th class="noBorder">{element.updatedAt}</th>
                                <th class="noBorderbtn"><button className='button-64' onClick={() => Datadelete(element._id)}>Delete</button></th>


                            </tr>
                        )}
                    </tbody>
                </table>


            </div>
            < div className='users-container' >
                <div className='users'>
                    <tr>
                        <th className='thtt'>Total Account:   {stats.map(element => element.total
                        )}</th>
                    </tr>
                </div>
            </div >
        </div>
    )
}

export default ADMINUSERS


