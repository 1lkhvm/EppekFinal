import React from 'react'
import axios from   'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'
function ContactSection1() {
    return (
        <>

            <div className='form-container'>
                <div className='form'>
                    <div className='form-text'>
                        <h2>Bizimle iletişime geç</h2>
                        <p>Email. bilgi [at] eppek.net
                            <p> Tel. 0537 685 15 40</p> </p>


                    </div>
                    <div className='form-main'>
                        <Formik
                            initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
                            validationSchema={Yup.object({

                                email: Yup.string().email('Invalid email address').required('Required'),
                            })}
                            onSubmit={(values) => {
                                axios.post("http://localhost:5000/api/message",values).then(values=' ')
                            }}
                        >
                            <Form>
                                <div className='firstname-name'>
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <Field className="Field" name="firstName" type="text" />

                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field className="Field" name="lastName" type="text" />
                                    </div>
                                </div>
                                <div className='email-message'>
                                    <div>
                                        <label htmlFor="email">Email Address</label>
                                        <Field className="Field-email" name="email" type="email" />
                                        <ErrorMessage className='errormessage' name="email" style={{ color: 'red' }} />
                                    </div>

                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <Field className="message" name="message" type="message" />

                                    </div>
                                </div>

                                <br />
                                <div className='btn-div'>
                                    <button className='button-86' type="submit">Submit</button>
                                </div>




                            </Form>
                        </Formik>
                    </div>




                </div>

                <div className='google-maps-text'>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Baku&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                    <div className='maps-text'>
                        <h2>Fenerbahçe, Itri Dede Sokağı No:22
                            <h2>34726 Kadıköy/İstanbul</h2>
                        </h2>
                        <p>Çarşamba  11:00 - 19:00</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ContactSection1