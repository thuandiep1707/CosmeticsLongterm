import {Routes, Route, useNavigate} from 'react-router-dom'


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Homepage from './layout/home/Homepage'
import Shoppage from './layout/shop/Shoppage'
import ProductDetail from './layout/productDetail/ProductDetail'
import Blog from './layout/blog/Blog'
import Contact from './layout/contact/Contact'
import Introduce from './layout/introduce/Introduce'
import CheckOut from './layout/checkout/CheckOut'

import './App.scss'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/shop/:productstyle/' element={<Shoppage />} />
        <Route path='/shop/:productstyle/:id' element={<ProductDetail />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
