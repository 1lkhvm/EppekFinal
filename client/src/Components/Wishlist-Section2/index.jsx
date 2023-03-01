import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../contexts/Main'
import Navbar from '../../Layouts/Navbar'
import './style.scss'
export default function Saf() {

	// let minusBtn = document.getElementById("minus-btn");
	// let count = document.getElementById("count");
	// let plusBtn = document.getElementById("plus-btn");

	// let countNum = 0;
	// count.innerHTML = countNum;

	// minusBtn.addEventListener("click", () => {
	//     countNum -= 1;
	//     count.innerHTML = countNum;
	// });

	// plusBtn.addEventListener("click", () => {
	//     countNum += 1;
	//     count.innerHTML = countNum;


	// });


	const { addToWishlist, wishlist, isInWishlist } = useContext(MainContext)


	return (
		<>

			<section className='AdminPanelProducts'>
				<div className='AdminPanelProductsMain'>


					{
						wishlist.length == 0 &&
						<div>
							<p className="text"> Wow, you didn't like our page :(   </p>
							<Link to='/products/pasta' >
								Maybe pasta 
							</Link>
							<Link to='/products/farm' >
								Maybe farm
							</Link>
						</div>
					}
					{
						wishlist.map((i, j) => {
							return (
								<div className='AdminProduct'>
									<img src={i.img} alt='foto' />
									<div id='AdminProductsTexts'>
										<h3 id='AdminProductH3'> ${i.title} </h3>
										<h4 id='AdminProductH4'>$ {i.price} </h4>
										<h6 id='AdminProductH6'></h6>
									</div>
									<div class="center container">
										<h4 className="card-btn-float btn" href="#0_n" title="Add Wishlist"
											onClick={() => addToWishlist(i)} >
											{isInWishlist(i) ?
												<i class="fa-solid fa-heart"></i> :
												<i class="fa-regular fa-heart"></i>

											}
										</h4>
									</div>
									{/* <button onClick={ () => remove(i) }  >X</button> */}
								</div>
							)
						})
					}



				</div>
			</section>
		</>
	)
}
