import {Routes, Route} from 'react-router-dom'

import Header from './Header/header'
import HomeMain from './Home/HomeMain'
import ShopsMain from './Shops/ShopsMain'
import BlogsMain from './Blogs/BlogsMain'
import PagesMain from './Pages/PageMain'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Setting from './Setting/Setting'
import Profile from './Profile/Profile'

import './index.scss'

const customerMainPage = () => {
    return (
        <div className="customerMain">
            <Header />
            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="/shops/:styleproducts" element={<ShopsMain />} />
                {/* <Route path="/shops//:nameproduct/:id" element={<ShopsMain />} /> */}
                <Route path="/blogs" element={<BlogsMain />} />
                <Route path="/pages" element={<PagesMain />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default customerMainPage;