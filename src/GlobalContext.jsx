import {createContext, useState,} from 'react'

import productsData from './assets/productsData.js'
import {slideShow,bestSales,portfolio} from './assets/homeData.js'
import footerData from './assets/footerData.js'

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    // hàm tìm kiếm sản phẩm
    const search = (product_name) => {
        console.log(product_name)
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