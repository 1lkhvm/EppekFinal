import React, { useEffect, useState } from 'react'
import "./style.scss"
import ClipLoader from "react-spinners/ClipLoader";

import { Link } from 'react-router-dom'

function Ordercomplete() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }, [])
  return (
    <>
      <div className='Cliploader'>
        {loading ?
          <ClipLoader color={"#1b140c"} loading={loading} size={110} />
          :
          <div className='ordercontainer'>
            <div className='order'>
              <img src="https://teak.wihardja.com.sg/20191129013854/successful-logo-01.png" alt="" />
              <span>
                Payment Completed!
              </span>
              <Link to={"/"}><h4>Go home page</h4></Link>
            </div>
          </div>

        }
      </div>
    </>
  )
}

export default Ordercomplete