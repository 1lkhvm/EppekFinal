import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import ShopKargo from "../Pages/ShopKargo";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register/index"
import LogoutPage from "../Pages/Logout/index"
import Wishlistpage from "../Pages/WishlistPage";
import ADMINPANEL from "../Pages/ADMINPANEL";
import ShopBread from "../Pages/ShopBreadPage";
import ShopFarmPage from "../Pages/ShopFarmPage";
import ShopPastaPage from "../Pages/ShopPastaPage";
import ShopCakePage from "../Pages/ShopPastaPage1";
import ShopMillPage from "../Pages/ShopMillPage";
import MessagePageADMIN from "../Pages/ADMINMESSAGE";


import Admin_product_editbread from "../Pages/ADMINPRODUCTPAGE/Admin_product_editbread";
import Admin_product_editmill from "../Pages/ADMINPRODUCTPAGE/Admin_product_editmill";
import Admin_product_editcake from "../Pages/ADMINPRODUCTPAGE/Admin_product_editcake";
import Admin_product_editpasta1 from "../Pages/ADMINPRODUCTPAGE/Admin_product_editpasta";
import Admin_product_editfarm from "../Pages/ADMINPRODUCTPAGE/Admin_product_editfarm";
import Admin_product_edittea from "../Pages/ADMINPRODUCTPAGE/Admin_product_edittea";



import Admin_product_bread_page from "../Pages/ADMINPRODUCTPAGE/ADMINPRODUCT_BREAD_PAGE";
import Admin_product_farm_page from "../Pages/ADMINPRODUCTPAGE/ADMINPRODUCT_FARM_PAGE";
import Admin_product_pasta_page from "../Pages/ADMINPRODUCTPAGE/ADMINPRODUCT_PASTA_PAGE";
import Admin_product_cake_page from "../Pages/ADMINPRODUCTPAGE/ADMINPRODUCT_CAKE_PAGE";
import Admin_product_tea_page from "../Pages/ADMINPRODUCTPAGE/ADMINPRODUCT_TEA_PAGE";
import Admin_product_mill_page from "../Pages/ADMINPRODUCTPAGE/ADMINPRODUCT_MILL_PAGE";
import PRODUCTADD_BREAD from "../Components/ADMIN/ADMINPRODUCT/PRODUCTADD_BREAD";
import PRODUCTADD_MILL from "../Components/ADMIN/ADMINPRODUCT/PRODUCTADD_MILL";
import PRODUCTADD_FARM from "../Components/ADMIN/ADMINPRODUCT/PRODUCTADD_FARM";
import PRODUCTADD_TEA from "../Components/ADMIN/ADMINPRODUCT/PRODUCTADD_TEA";
import PRODUCTADD_CAKE from "../Components/ADMIN/ADMINPRODUCT/PRODUCTADD_CAKE";
import PRODUCTADD_PASTA from "../Components/ADMIN/ADMINPRODUCT/PRODUCTADD_PASTA";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Products from '../Pages/Products/index'




const router = createBrowserRouter([
    {
        path : 'products/:category',
        element : <Products />
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Shop",
        element: <ShopKargo />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },

    {
        path: "/Login",
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/logout',
        element: <LogoutPage />
    },

    {
        path: '/Wishlist',
        element: <Wishlistpage />
    },
    {
        path: '/bread',
        element: <ShopBread />
    },
    {
        path: '/Farm',
        element: <ShopFarmPage />
    },
    {
        path: '/Pasta',
        element: <ShopPastaPage />
    },
    {
        path: '/cake',
        element: <ShopCakePage />
    },
    {
        path: '/Mill',
        element: <ShopMillPage />
    },
    ////////////////////////////////////////////
    {
        path: '/adminpanel',
        element: <ADMINPANEL />
    },
    {
        path: '/adminmessage',
        element: <MessagePageADMIN />
    },


    /////////////////////////////////////////////
    {
        path: '/product_bread_admin_panel',
        element: <Admin_product_bread_page />
    },
    {
        path: '/product_mill_admin_panel',
        element: <Admin_product_mill_page />
    },

    {
        path: '/product_tea_admin_panel',
        element: <Admin_product_tea_page />
    },

    {
        path: '/product_cake_admin_panel',
        element: <Admin_product_cake_page />
    },

    {
        path: '/product_pasta_admin_panel',
        element: <Admin_product_pasta_page />
    },
    {
        path: '/product_farm_admin_panel',
        element: <Admin_product_farm_page />
    },

    //////////////////////post///////////////////////////////

    {
        path: '/addproduct_bread',
        element: <PRODUCTADD_BREAD />
    },


    {
        path: '/addproduct_mill',
        element: <PRODUCTADD_MILL />
    },

    {
        path: '/addproduct_pasta',
        element: <PRODUCTADD_PASTA />
    },

    {
        path: '/addproduct_cake',
        element: <PRODUCTADD_CAKE />
    },

    {
        path: '/addproduct_tea',
        element: <PRODUCTADD_TEA />
    },

    {
        path: '/addproduct_farm',
        element: <PRODUCTADD_FARM />
    },





    ////////////////////EDITS////////////////////////
    {
        path: '/product_bread_admin_panel/:id',
        element: <Admin_product_editbread />
    },

    {
        path: '/product_mill_admin_panel/:id',
        element: <Admin_product_editmill />
    },

    {
        path: '/product_cake_admin_panel/:id',
        element: <Admin_product_editcake />
    },

    {
        path: '/product_pasta_admin_panel/:id',
        element: <Admin_product_editpasta1 />
    },

    {
        path: '/product_farm_admin_panel/:id',
        element: <Admin_product_editfarm />
    },

    {
        path: '/product_tea_admin_panel/:id',
        element: <Admin_product_edittea />
    },

    /////////////////////////////////////////////////
    {
        path: '/orders',
        element: <OrderPage/>
    },

   





]);

export default router