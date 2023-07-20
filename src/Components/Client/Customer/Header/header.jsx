import {Routes, Route, Link} from "react-router-dom";

import Cart from './Cart/Cart'
import PeopleNavs from "./PeopleNavs/PeopleNavs";

import './header.scss';

const customerHeader = () => {
    return(
        <div>
            <div className="customerHeader">
                <Link to="/customers" className="logo link">
                    <div className="logo_square"></div>
                    <h3 className="logo_brand">
                        Long term
                    </h3>
                </Link>
                <ul className='customerHeader_nav'>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/customers/shops/general" className="link">SHOPS</Link>
                        </h3>
                        <nav className="menu shop">
                            <Link to="/customers/shops/lipstick" className="page lipstick">Lipstick</Link>
                            <Link to="/customers/shops/serum" className="page serum">Serum</Link>
                            <Link to="/customers/shops/toner" className="page toner">Toner</Link>
                            <Link to="/customers/shops/perfume" className="page perfume">Perfume</Link>
                            <Link to="/customers/shops/makeup" className="page makeup">Make Up</Link>
                        </nav>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/customers/blogs" className="link">BLOGS</Link>
                        </h3>
                        <nav className="menu blog">
                            <Link to="/customers/blogs/standard" className="page standard">Standard</Link>
                            <Link to="/customers/blogs/centered" className="page centered">Centered</Link>
                            <Link to="/customers/blogs/nosidebar" className="page nosidebar">No Sidebar</Link>
                            <Link to="/customers/blogs/audio" className="page audio">Audio</Link>
                            <Link to="/customers/blogs/quote" className="page quote">Qoute</Link>
                        </nav>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/customers/pages" className="link">PAGES</Link>
                        </h3>
                        <nav className="menu page">
                            <Link to="/customers/pages/aboutus" className="page aboutus">About Us</Link>
                            <Link to="/customers/pages/ourteam" className="page ourteam">Our Team</Link>
                            <Link to="/customers/pages/FAQpage" className="page faqpage">FAQ Page</Link>
                            <Link to="/customers/pages/comingsoon" className="page comingsoon">Coming Soon</Link>
                            <Link to="/customers/pages/pricingplans" className="page pricingplans">Pricing Plans</Link>
                        </nav>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/customers/portfolio" className="link">PORTFOLIO</Link>
                        </h3>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/customers/contact" className="link">CONTACT</Link>
                        </h3>
                    </li>
                </ul>
                    
                <div className="customerHeader_icon">
                    <div className="customerHeader_icon_search_bar">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Bạn muốn tìm sản phẩm nào?" className="customerHeader_icon_search_bar_input"/>
                    </div>
                    <div className="icon_cart">
                        <i className="fa-solid fa-cart-shopping icon "></i>
                            <Cart/>
                    </div>
                    <div className="icon_people">
                        <i className="fa-solid fa-user icon profile"></i>
                        <ul className="icon_people_navs">
                            <PeopleNavs />
                        </ul>
                    </div>
                </div>
            </div>
                <div className="space"></div>
        </div>
    )
}

export default customerHeader;