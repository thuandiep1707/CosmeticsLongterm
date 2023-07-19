import {createContext, useContext, useState, Provider} from 'react'

import data from './Data/data.js'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) =>{
    const [token, setToken] = useState('axbycz')
    const [cart, setCart] = useState([
        {
            "id"      : data[8].id,
            "name"    : data[8].name,
            "price"   : data[8].price,
            "img"     : data[8].img[0],
            "category": {
                "id"     : data[8].category.id,
                "name"   : data[8].category.name
            },
            "quantity":2
        }
    ])
    const [productsList, setProductsList] = useState(data)
    const value = {
        token,
        setToken,
        cart,
        setCart,
        productsList,
        setProductsList
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export {GlobalContext,GlobalProvider}