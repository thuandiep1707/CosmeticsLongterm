import {Routes, Route, useNavigate} from 'react-router-dom'


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Homepage from './layout/homepage/Homepage'
import Shoppage from './layout/shoppage/Shoppage'
import ProductDetail from './layout/product-detail/ProductDetail'

import './App.scss'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/shop/:productstyle/' element={<Shoppage/>}/>
        <Route path='/shop/:productstyle/:id' element={<ProductDetail/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
