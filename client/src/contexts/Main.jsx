import React, { createContext, useEffect, useState } from 'react'


export const MainContext = createContext()


export default function Provider({ children }) {
	const [basket, setBasket] = useState([])
	const [wishlist, setWishlist] = useState([])
	useEffect(() => {

		if (localStorage.basket && typeof JSON.parse(localStorage.basket) == "object") {
			setBasket(JSON.parse(localStorage.basket))
		}
		console.log('oo')

		if (localStorage.wishlist && typeof JSON.parse(localStorage.wishlist) == "object") {
			setWishlist(JSON.parse(localStorage.wishlist))
		} else {

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


	function remove(item) {
		let arr = basket.filter(x => x._id != item._id)
		setBasket(arr)
		localStorage.setItem('basket', JSON.stringify(arr))

	}

	function calculateCount(item) {
		let sum = 0;
		basket.forEach(x => sum += x.count)
		return sum
	}


	function addToWishlist(item) {
		let findIndex = wishlist.findIndex(x => x._id == item._id)
		let arr = [...wishlist]
		if (findIndex == -1) {
			arr.push(item)
			// console.log('w', arr)
			setWishlist(arr)
			localStorage.wishlist = JSON.stringify(arr)
		} else {
			let arr_ = wishlist.filter(x => x._id != item._id)
			localStorage.wishlist = JSON.stringify(arr_)
			setWishlist(arr_)
		}
	}

	function removeFromWishlist(item) {
		let arr = wishlist.filter(x => x._id != item._id)
		setWishlist(arr)
		localStorage.setItem('wishlist', JSON.stringify(arr))
	}

	function isInWishlist(item) {
		let index = wishlist.findIndex(x => x._id == item._id)
		// console.log('i', index)
		if (index > -1) {
			return true
		} else {
			return false
		}
	}

	function clear() {
		setBasket([])
		setWishlist([])

	}

	return (
		<MainContext.Provider value={{ wishlist, basket, setBasket, increase, decrease, remove, calculateCount, addToWishlist, removeFromWishlist, isInWishlist, clear }}  >
			{children}
		</MainContext.Provider>
	)
}
