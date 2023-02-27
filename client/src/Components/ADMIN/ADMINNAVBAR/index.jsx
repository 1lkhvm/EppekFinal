import React from 'react'
import { Link, } from "react-router-dom";
import "./style.scss"
function ADMINNAVBAR() {
    return (
        <div className='adminnavcon'>
            <div className='adminnav'>
                <div className='adminmenu'>
                    <ul>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn">Product</button>
                                <div class="dropdown-content">
                                    <Link to={"/product_tea_admin_panel"} className='navadmining'>Tea</Link>
                                    <Link to={"/product_bread_admin_panel"} className='navadmining'>Bread</Link>
                                    <Link to={"/product_pasta_admin_panel"} className='navadmining'>Pasta</Link>
                                    <Link to={"/product_farm_admin_panel"} className='navadmining'>Farm</Link>
                                    <Link to={"/product_cake_admin_panel"} className='navadmining'>Cake</Link>
                                    <Link to={"/product_mill_admin_panel"} className='navadmining'>Mill</Link>
                                </div>
                            </div>
                            <Link to={"/adminmessage"} className='navadmining'>Message</Link>

                            <div class="dropdown">
                                <button class="dropbtn">Add Product</button>
                                <div class="dropdown-content">
                                    <Link to={"/product_tea_admin_panel"} className='navadmining'>Tea</Link>
                                    <Link to={"/product_bread_admin_panel"} className='navadmining'>Bread</Link>
                                    <Link to={"/product_pasta_admin_panel"} className='navadmining'>Pasta</Link>
                                    <Link to={"/product_farm_admin_panel"} className='navadmining'>Farm</Link>
                                    <Link to={"/product_cake_admin_panel"} className='navadmining'>Cake</Link>
                                    <Link to={"/product_mill_admin_panel"} className='navadmining'>Mill</Link>
                                </div>
                            </div>
                            <Link to={"/adminpanel"} className='navadmining'>Users</Link>

                        </li>
                    </ul>
                </div>
                <div className='adminprofile'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQiP_Lh7pgjm9-F6d0BAnEJjWLXtj098_g_-7J6M&s" alt="" />
                    <Link className='logouting' to={"/"}>Log Out</Link>
                </div>
            </div>
        </div>
    )
}

export default ADMINNAVBAR
