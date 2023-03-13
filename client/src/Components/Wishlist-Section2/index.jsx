import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../contexts/Main'
import './wishlist.scss'
export default function Saf() {




	const { addToWishlist, wishlist, isInWishlist } = useContext(MainContext)


	return (
		<>

			<section className='AdminPanelProducts1'>
				<div className='AdminPanelProductsMain1'>


					{
						wishlist.length == 0 &&
						<div>
							<p className="text1"> Wow, you didn't like our page :(   </p>
							<Link to='/products/cake' >
								Maybe cake
							</Link>
						</div>
					}
					{
						wishlist.map((i, j) => {
							return (
								<div className='AdminProduct1'>
									<img src={i.img} alt='foto' />

									<h3 id='AdminProductH31'> {i.title} </h3>
									<h6 id='AdminProductH61'><h2>{i.price} $ </h2></h6>
									<div id='AdminProductsTexts1'>
										<h4 id='AdminProductH41'> {i.description} </h4>
									</div>
									<div class="center container1">
										<h4 className="card-btn-float btn" href="#0_n" title="Add Wishlist"
											onClick={() => addToWishlist(i)} >
											{isInWishlist(i) ?
												<i class="fa-solid fa-heart"></i> :
												<i class="fa-regular fa-heart"></i>

											}
										</h4>
									</div>

								</div>
							)
						})
					}



				</div>
			</section>
		</>
	)
}
