import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../../contexts/Main'

export default function Index() {

    let navigate  = useNavigate()
    let {clear} = useContext(MainContext)
    function logout(){
        localStorage.clear()
        navigate("/")
        clear()
    }
    useEffect(()=>{
      logout()
    })


  return (
    <div></div>
  )
}
