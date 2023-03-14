import React from 'react'
import { Helmet } from 'react-helmet'
import ADMINNAVBAR from '../../Components/ADMIN/ADMINNAVBAR'
import ADMINUSERS from '../../Components/ADMIN/ADMINUSERS'

function ADMINPANEL() {
    return (
        <><Helmet>
            <meta charSet="utf-8" />
            <title>Admin:Users</title>

        </Helmet>
            <ADMINNAVBAR />
            <ADMINUSERS />


        </>
    )
}

export default ADMINPANEL