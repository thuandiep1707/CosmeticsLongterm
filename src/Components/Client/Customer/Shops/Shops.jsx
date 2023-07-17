import {Routes, Route} from 'react-router-dom'

import ShopsProductList from './ShopsProductList/ShopsProductList'
import ShopsProduct from './ShopsProduct/ShopsProduct'

import productsData from './Data/data.js'



const Shops = () => {
    return(
        <div className="shops">
            <Routes>
                <Route path="/:styleproducts" element={<ShopsProductList productsData={productsData}/>} />
                <Route path="/:styleproducts/:id" element={<ShopsProduct productsData={productsData}/>} />
            </Routes>
        </div>
        
    )
}

export default Shops;