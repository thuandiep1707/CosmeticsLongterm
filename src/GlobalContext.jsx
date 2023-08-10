import { createContext, useState } from 'react'

import productsData from './assets/productsData.js'
import {slideShow,bestSales,portfolio} from './assets/homeData.js'
import footerData from './assets/footerData.js'

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    // chức năng tìm kiếm sản phẩm
    const search = (product_name) => {
        console.log(product_name)
    }

    // chức năng thêm sản phẩm vào giỏ hàng
    const [cart, setCart] = useState() 
    const addProdToCart = (product) => {
        if (cart) {
            let cartCopy = cart
            let position
            let quantity
            for (let i = 0; i < cartCopy.length; i++){
                if (cartCopy[i].infor.id === product.id) {
                    position = i
                    quantity = cartCopy[i].quantity +product.quantity
                    break
                }
            }
            if (!position){
                cartCopy = [...cartCopy, product]
            }
            return
        }
        return setCart(product)
    }

    const value = {
        productsData,
        slideShow,
        bestSales,
        portfolio,
        footerData,
        search
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider,GlobalContext };