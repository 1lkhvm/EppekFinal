import React from 'react'
import { Helmet } from 'react-helmet'
import ADMINMESSAGE from '../../Components/ADMIN/ADMINMESSAGE'
import ADMINNAVBAR from '../../Components/ADMIN/ADMINNAVBAR'

function MessagePageADMIN() {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>AdminPanelMessage</title>

            </Helmet>
            <ADMINNAVBAR />
            <ADMINMESSAGE />
        </>
    )
}

export default MessagePageADMIN