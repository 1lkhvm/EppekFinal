import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
function Login() {

   const [error, setError] = useState("")

   let navigate = useNavigate()
   function handleClick(values) {
      axios.post('http://localhost:5000/api/auth/login', values).then(data => {
         console.log(data)
         localStorage.setItem('username', data.data.username)
         localStorage.setItem('token', data.data.token)
         navigate("/")

      }).catch(err => { console.log(err.response); setError(err.response.data.message) })
   }

   useEffect(() => {
      if (localStorage.getItem('username')) {
         navigate("/")
      }
   }, [])

   return (
      <>
         <Navbar />
         <div>
            <section className='loginPage'>


               <div className='loginMain'>
                  <Formik
                     initialValues={{ username: "", password: "" }}
                     validationSchema={Yup.object({
                        username: Yup.string().required("*Kullanıcı adı boş olamaz"),
                        password: Yup.string().required("*Şifre boş olamaz"),
                     })}
                     onSubmit={handleClick} >
                     {({ errors, touched }) => (
                        <div className='formDiv'>
                           <h2 id='loginH2'>Log in</h2>
                           <Form>
                              <div className='login_usrname_password'>
                                 <div id='loginDiv'>
                                    <label htmlFor="username"><i className="fa-solid fa-user"></i> Username</label>
                                    <Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />
                                 </div>

                                 <div id='loginDiv'>
                                    <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                                    <Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type="password" />
                                 </div>
                              </div>
                              {error && <span style={{ color: "#dd2500" }}>  {error}  </span>}
                              <Link id='havenotaccount' to={'/register'}>Create new Account</Link>
                              <button className='button-86' type="submit">Giriş Yap</button>
                           </Form>
                        </div>
                     )}
                  </Formik>
               </div>
            </section >
         </div>
         <Footer />
      </>
   );
};



export default Login