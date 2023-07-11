import {Routes, Route} from 'react-router-dom'

import Header from './Header/header'
import HomeMain from './Home/HomeMain'
import ShopsMain from './Shops/ShopsMain'
import BlogsMain from './Blogs/BlogsMain'
import PagesMain from './Pages/PageMain'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import './index.scss'

const customerMainPage = () => {
    return (
        <div className="customerMain">
            <Header />
            <Routes>
                <Route exact path="/home" Component={HomeMain}/>
                <Route path="/shops" Component={ShopsMain}/>
                <Route path="/blogs" Component={BlogsMain}/>
                <Route path="/pages" Component={PagesMain}/>
                <Route path="/portfolio" Component={Portfolio}/>
                <Route path="/contact" Component={Contact}/>
            </Routes>
        </div>
    )
}

export default customerMainPage;