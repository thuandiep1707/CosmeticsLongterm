import {Routes, Route} from 'react-router-dom'

import ShopGeneral from './General/ShopGeneral'
import Lipstick from './Lipstick/Lipstick'

import './shopsmain.scss'

const ShopsMain = () => {
    return (
        <div className="shopsmain">
            <ShopGeneral/>
            <Lipstick/>
            <Routes>
                <Route path='/shop/lipstick' Component={Lipstick} />
            </Routes>
        </div>
    )
}

export default ShopsMain;