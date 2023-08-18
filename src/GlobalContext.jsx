import { createContext, useState } from 'react'

import productsData from './assets/productsData.js'
import {slideShow,bestSales,portfolio, footerData} from './assets/allData.js'

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    // ẩn/hiện giỏ hàng
    const [showCart, setShowCart] = useState(false)
    // chức năng thêm sản phẩm vào giỏ hàng
    const [cart, setCart] = useState() 
    const value = {
        productsData,
        slideShow,
        bestSales,
        portfolio,
        footerData,
        cart,
        showCart,
        setCart,
        setShowCart,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider,GlobalContext };