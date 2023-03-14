import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../contexts/Main'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'

import './style.scss'
import { Helmet } from 'react-helmet'
function OrderPage() {



	const { increase, decrease, remove, basket } = useContext(MainContext)


	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Eppek Order</title>

			</Helmet>
			<Navbar />

			<section className='AdminPanelProducts'>
				<div className='AdminPanelProductsMain'>


					{
						basket.length == 0 &&
						<div>
							<p className="text"> Please, add item to basket before purchasing  </p>

							<Link to='/products/farm' >
								Maybe farm
							</Link>
						</div>
					}
					{
						basket.map((i, j) => {
							return (
								<div className='AdminProduct'>
									<img src={i.img} alt='foto' />
									<h3 id='AdminProductH3'> {i.title} </h3>
									<h6 id='AdminProductH6'> Price of one :   {i.price}₼ </h6>
									<div id='AdminProductsTexts'>
										<h4 id='AdminProductH4'> {i.description} </h4>
									</div>
									<div class="center container">
										<div class="button col col-1">
											<button id="minus-btn" onClick={() => decrease(i)}  >-</button>
										</div>
										<div class="number col col-2">
											<h1 id="count"> {i.count} </h1>
										</div>
										<div class="button col col-1">
											<button id="plus-btn" onClick={() => increase(i)} > + </button>
										</div>
									</div>
									<button className='button-86' onClick={() => remove(i)}  >X</button>
								</div>
							)

						})
					}
					<div className='total-contanier'>
						<div className='total'>
							{
								(() => {
									let sum = 0
									for (let x of basket) {
										sum = x.count * x.price
									}
									return <div className style={{ marginTop: "20px" }} >
										<span  >  	 {sum.toFixed(2)}₼ +
											<span>{(sum * 0.05).toFixed(2)}₼ Delivery </span>
										</span>
										<span className='span2'  >  	Total: {(1.05 * sum).toFixed(2)}   </span>
										<Link to={"/orderssucc"}><button className='button-86'>Add order</button></Link>
									</div>
								})()

							}
						</div></div>


				</div>
			</section>
			<Footer />
		</>
	)
}

export default OrderPage