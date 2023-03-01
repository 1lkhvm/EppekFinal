import React, { useContext, useState } from "react";
import { Link, } from "react-router-dom";
import { MainContext } from "../../contexts/Main";


import './style.scss'

const Navbar = () => {

   const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
   const [menu_class, setMenuClass] = useState("menu hidden")
   const [isMenuClicked, setIsMenuClicked] = useState(false)

   const { calculateCount } = useContext(MainContext)

   const updateMenu = () => {
      if (!isMenuClicked) {
         setBurgerClass("burger-bar clicked")
         setMenuClass("menu visible")
      }
      else {
         setBurgerClass("burger-bar unclicked")
         setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
   }
   //////////////////////////////////////////////////////////////////


   return (

      <div className="navbar-container">
         <div className="mobile-nav">


            <div className="burger-menu" onClick={updateMenu}>
               <div className={burger_class} ></div>
               <div className={burger_class} ></div>
               <div className={burger_class} ></div>

            </div>
         </div>
         {/* responsive bar menu */}
         <div className={menu_class}>
            <div className="navbar-mobile-menu">
               <li>
                  <Link className='nav-listing-mobile' to={`/`}>Home</Link>
               </li>
               <li>
                  <Link className='nav-listing-mobile' to={`/Shop=`}>Shop</Link>

               </li>
               <li>
                  <Link className='nav-listing-mobile' to={`/Mill`}>Mill</Link>
               </li>
               <li>
                  <Link className='nav-listing-mobile' to={`/Contact`}>Contact</Link>
               </li>
               <li>
                  <Link className='nav-listing-mobile' to={`/Wishlist`}>Wishlist</Link>
               </li>




            </div>

         </div>
         {/* responsive bar menu end */}
         <div className="navbar" >



            <div className="navbar-menu">
               <ul>
                  <li>
                     <div class="dropdown">
                        <button class="dropbtn" to={`/Shop`}>Shop</button>
                        <div class="dropdown-content">
                           <Link reloadDocument className='navadmining' to={"/products/bread"} >Bread</Link>
                           <Link reloadDocument className='navadmining' to={"/products/tea"} >Tea</Link>
                           <Link reloadDocument className='navadmining' to={"/products/pasta"} >Pasta</Link>
                           <Link reloadDocument className='navadmining' to={"/products/farm"} >Farm</Link>
                           <Link reloadDocument className='navadmining' to={"/products/cake"} >Cake</Link>
                        </div>
                     </div>

                  </li>
                  <li>
                     <Link className='nav-listing' to={`/Mill`}>Mill</Link>
                  </li>
                  <li>
                     <Link className='nav-listing' to={`/Contact`}>Contact</Link>
                  </li>
                  <li>
                     <Link className='nav-listing' to={`/Wishlist`}>Wishlist</Link>
                  </li>


               </ul>
            </div>
            <div className="eppek-logo">
               <Link to={"/"}>
                  <img src="https://static.wixstatic.com/media/d7323f_1934e318bccd45789af4e662463ffe97~mv2.png/v1/crop/x_0,y_159,w_800,h_465/fill/w_150,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eppek_logo-nT-white-transparent.png" alt="/" />
               </Link>

            </div>

            <div className="nav-login-basket">
               <div className='nav-login'>

                  {localStorage.getItem("username") ?
                     <>
                        <div class="dropdown">
                           <button class="dropbtn" >
                              <p>{localStorage.getItem("username")}</p></button>
                           <div class="dropdown-content">
                              {localStorage.getItem("username" === "1lkhvm") ?
                                 <>
                                    <Link to="/adminPanel@#YSUY@YG@!%DFS!*">Admin</Link>
                                 </>
                                 :
                                 <>
                                    <Link to="/adminpanel">Admin</Link>
                                 </>
                              }
                              <Link to="/logout"> Logout</Link>

                           </div>
                        </div>

                     </>
                     :
                     <Link className='nav-logining' to={`/Login`}>
                        <i className='fa-solid fa-circle-user'></i>
                        <span>LogIn</span>

                     </Link>
                  }
               </div>
               <div className='nav-login'>
                  {localStorage.getItem("username") ?
                     <>



                     </>
                     :
                     <Link className='nav-logining' to={`/Login`}>

                     </Link>}
               </div>

               <div className='nav-shop-basket' >
                  <Link to={"/orders"}><i className="fa-solid fa-store" >
                     <p> {calculateCount()}</p>


                  </i>
                  </Link>

               </div>

            </div>


         </div>
      </div>
   )
}

export default Navbar
