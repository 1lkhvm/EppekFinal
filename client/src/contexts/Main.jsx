import React, { createContext, useEffect, useState } from 'react'


export const MainContext = createContext()


export default function Provider({ children }) {
	const [basket, setBasket] = useState([])
	const [wishlist,setWishlist] = useState([])
	useEffect(() => {

		if (typeof JSON.parse(localStorage.basket) == "object") {
			setBasket(JSON.parse(localStorage.basket)  )
		}
	}, [])




	function decrease(item, count = 1) {
		let arr = basket.map(i => {
			if (i._id == item._id) {
				i.count--
				if (i.count > 0) {
					return i
				} else {
					return undefined
				}
			} else {
				return i
			}
		})
		arr = arr.filter(x => x != undefined)
		console.log(arr)
		setBasket(arr)
		localStorage.setItem('basket', JSON.stringify(arr))
	}

	function increase(item) {
		let arr
		let index = basket.findIndex(x => x._id === item._id)
		if (index == -1) {
			arr = [...basket, { ...item, count: 1 }]
		}
		else {
			// console.log('i',item)
			arr = basket.map(x => {
				// console.log('i',x)
				if (x._id == item._id) {
					x.count += 1
					return x
				} else {
					return x
				}
			})
		}

		console.log(",", arr)
		setBasket(arr)
		localStorage.setItem('basket', JSON.stringify(arr))
	}


	function remove(item){
		let arr = basket.filter(x => x._id != item._id   )
		setBasket( arr)
		localStorage.setItem('basket', JSON.stringify(arr))

	}

	function calculateCount(item){
		let sum = 0 ;
		basket.forEach(x => sum += x.count )
		return sum
	}


	function addToWishlist(item){

	}

	function removeFromWishlist(item){

	}

	return (
		<MainContext.Provider value={{ basket, setBasket, increase, decrease , remove , calculateCount }}  >
			{children}
		</MainContext.Provider>
	)
}
