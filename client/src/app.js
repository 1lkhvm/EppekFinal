import React, { useContext } from 'react'
import Provider, { MainContext } from './contexts/Main'

import router from './Router/router'
import { RouterProvider } from 'react-router-dom'
export default function App() {
    
    return (
        <div>
            <Provider >
                <RouterProvider router={router} />
            </Provider>
        </div>
    )
}
