import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import './style.scss'
import { MainContext } from '../../contexts/Main';




function Pasta({category}) {
	let url ;

	if (category == 'pasta' ){
		url = 'http://localhost:5000/api/productpasta'
	}else if (category == 'cake'){
		url = 'http://localhost:5000/api/productcake'
	}else if (category == 'bread'){
		url = 'http://localhost:5000/api/productsbread'
	}else if (category == 'tea'){
		url = 'http://localhost:5000/api/productbreakfast'
	}else if (category == 'farm'){
		url = 'http://localhost:5000/api/productferma '
	}
	
	const { increase, addToWishlist , isInWishlist	 } = useContext(MainContext)




	const [post, setPost] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		axios.get(url).then((response) => {
			setPost(response.data);
		});
	}, []);
	const sortinga = () => {
		setPost([...post.sort((a, b) => (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0)])
	}
	const sortingb = () => {
		setPost([...post.sort((a, b) => (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0)])
	}

	const sortingc = () => {
		setPost([...post.sort((a, b) => (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0)])
	}

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 200)

	}, [])



	return (
		<>

			<div className='pastaaa'>
				{loading ?
					<ClipLoader color={"#1b140c"} loading={loading} size={110} />
					:
					<div className='shop-container'>
						<div className='shop'>

							<div className='sorting-searchinput'>
								<div className='searchinput'>
									<div class="search-box">
										<input type="text" class="search-input" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
									</div>
								</div>
								<div className='sortingbyprice'>
									<select onChange={sortinga} name="Select" id="cars">
										<option value="volvo"> Select Sort</option>
										<option value={sortingc}>Multiplied</option>
										<option value={sortingb}>Decreasing</option>
									</select>
								</div>





							</div>
							<div className='shops'>
								{
									post.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((element) =>

										<div className="card">
											<div className="card-actions">
												<h4 className="card-btn-float btn" href="#0_y" title="Add">✔</h4>
												<h4 className="card-btn-float btn" href="#0_n" title="Add Wishlist"
												 onClick={ () =>  addToWishlist(element) } >
													{ isInWishlist(element) ?
													<i class="fa-solid fa-heart"></i> :
													<i class="fa-regular fa-heart"></i> 
													
												}
												</h4>
												<h4 className="card-image" href="#0_rm" title="Read more">
													<img src={element.img} width="480" height="270" alt="" />
												</h4>
											</div>

											<div className="card-body">
												<h3>{element.title}</h3>
												<p>{element.description}</p>
												<h2>{element.price}₼</h2>

												<button className='button-86' onClick={() => increase(element)}  > Buy</button>
											</div>
										</div>
									)
								}

							</div>
						</div>
					</div>

				}
			</div>
		</>
	)
}

export default Pasta