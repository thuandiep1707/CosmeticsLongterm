import {Routes, Route} from 'react-router-dom'

import ShopGeneral from './General/ShopGeneral'
import Lipstick from './Lipstick/Lipstick'
import MakeUp from './MakeUp/Makeup'
import Serum from './Serum/Serum'
import Toner from './Toner/Toner'
import Perfume from './Perfume/Perfume'

import './shopsmain.scss'

const ShopsMain = () => {
    return (
        <div className="shopsmain">
            <Routes>
                <Route path="/" element={<ShopGeneral />} />
                <Route path="/lipstick" element={<Lipstick />} />
                <Route path="/serum" element={<Serum />} />
                <Route path="/toner" element={<Toner />} />
                <Route path="/perfume" element={<Perfume />} />
                <Route path="/makeup" element={<MakeUp />} />
            </Routes>
        </div>
    )
}

export default ShopsMain;