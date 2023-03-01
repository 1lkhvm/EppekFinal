import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ADMINNAVBAR from '../../ADMINNAVBAR';
function PRODUCTADD_TEA() {
    let { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/productbreakfast`).then((response) => {
            setPost(response.data);
        });
    }, []);
    let navigate = useNavigate()


    return (
        <>
            <ADMINNAVBAR />
            <div className='addProduct'>

                <div className='form-main'>
                    <Formik
                        initialValues={{ title: '', description: '', img: '', categories: '', weight: '', price: '' }}
                        validationSchema={Yup.object({

                            title: Yup.string().required('Title is required'),
                            description: Yup.string().required('Description is required'),
                            img: Yup.string().required('Image is required'),
                            categories: Yup.string().required('Categories is required'),
                            weight: Yup.number().required('Weight is required'),
                            price: Yup.number().required('Price is required'),
                        })}
                        onSubmit={(values) => {
                            axios.post(`http://localhost:5000/api/productbreakfast`, {
                                title: values.title,
                                description: values.description,
                                img: values.img,
                                categories: values.categories,
                                weight: values.weight,
                                price: values.price
                            })
                            navigate("/product_tea_admin_panel")
                        }}
                    >
                        <Form>

                            <div className='edits'>
                                <div className='form__group field'>

                                    <Field className="form__field" name="title" type="text" placeholder={post.title} />
                                    <label for="Title" class="form__label">Tea:Title</label>
                                </div>
                                <div className='form__group'>

                                    <Field className="form__field" name="description" type="text" placeholder={post.description} />
                                    <label for="description" class="form__label">Tea:Description</label>
                                </div>
                                <div className='form__group '>

                                    <Field className="form__field" name="img" type="text" placeholder={post.img} />

                                    <label for="img" class="form__label">Tea:Img</label>
                                </div>
                                <div className='form__group '>

                                    <Field className="form__field" name="categories" type="text" placeholder={post.categories} />

                                    <label for="name" class="form__label">Tea:Categories</label>
                                </div>
                                <div className='form__group '>

                                    <Field className="form__field" name="weight" type="text" placeholder={post.weight} />

                                    <label for="name" class="form__label">Tea:Weight</label>
                                </div>
                                <div className='form__group '>

                                    <Field className="form__field" name="price" type="text" placeholder={post.price} />

                                    <label for="name" class="form__label">Tea:Price</label>
                                </div>

                            </div>




                            <div className='button'>
                                <button className='button-64' type="submit">Submit</button>
                            </div>




                        </Form >
                    </Formik >
                </div >



            </div >

        </>
    )
}

export default PRODUCTADD_TEA