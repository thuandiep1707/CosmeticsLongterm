import {Routes, Route, useNavigate} from 'react-router-dom'

import Header from './Header/Header'
import HomeMain from './Home/HomeMain'
import Shops from './Shops/Shops'
import BlogsMain from './Blogs/BlogsMain'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Setting from './Setting/Setting'
import Profile from './Profile/Profile'
import Pay from './Pay/Pay'
import Footer from './Footer/Footer'

import './index.scss'

const customerMainPage = () => {
    return (
        <div className="customerMain">
            <Header />
            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="shops/*" element={<Shops />} />
                <Route path="blogs" element={<BlogsMain />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
                <Route path="setting" element={<Setting />} />
                <Route path="profile" element={<Profile />} />
                <Route path='pay' element={<Pay />}/>
            </Routes>   
            <Footer />
        </div>
    )
}

export default customerMainPage;