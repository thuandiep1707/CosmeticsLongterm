import {Routes, Route} from 'react-router-dom'

import ShopsProductList from './ShopsProductList/ShopsProductList'
import ShopsProduct from './ShopsProduct/ShopsProduct'

import productsData from './Data/data.js'

import './shops.scss'



const Shops = () => {
    return(
        <div className="shops">
            <div className="shops_poster">
                <div className="shops_poster_logo">
                    <div className="shops_poster_logo_square"></div>
                    <h3 className="shops_poster_logo_brand">
                        Long term
                    </h3>
                </div>
            </div>
            <Routes>
                <Route path="/:styleproducts" element={<ShopsProductList productsData={productsData}/>} />
                <Route path="/:styleproducts/:id" element={<ShopsProduct productsData={productsData}/>} />
            </Routes>
        </div>
    )
}

export default Shops;