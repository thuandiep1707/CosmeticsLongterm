import {createContext, useState,} from 'react'

import data from './assets/data/data.js'

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    const search = (product_name) => {
        console.log(product_name)
    }
    const value = {
        data,
        search
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider,GlobalContext };