import {Routes, Route, Link} from "react-router-dom";

import './header.scss';

const customerHeader = () => {
    return(
        <div>
            <div className="customerHeader">
                <Link to="/" className="logo link">
                    <div className="logo_square"></div>
                    <h3 className="logo_brand">
                        Long term
                    </h3>
                </Link>
                <ul className='customerHeader_nav'>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/shops" className="link">SHOPS</Link>
                        </h3>
                        <nav className="menu shop">
                            <Link to="/shops/lipstick" className="page lipstick">Lipstick</Link>
                            <Link to="/shops/serum" className="page serum">Serum</Link>
                            <Link to="/shops/toner" className="page toner">Toner</Link>
                            <Link to="/shops/perfume" className="page perfume">Perfume</Link>
                            <Link to="/shops/makeup" className="page makeup">Make Up</Link>
                        </nav>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/blogs" className="link">BLOGS</Link>
                        </h3>
                        <nav className="menu blog">
                            <Link to="/blogs/standard" className="page standard">Standard</Link>
                            <Link to="/blogs/centered" className="page centered">Centered</Link>
                            <Link to="/blogs/nosidebar" className="page nosidebar">No Sidebar</Link>
                            <Link to="/blogs/audio" className="page audio">Audio</Link>
                            <Link to="/blogs/quote" className="page quote">Qoute</Link>
                        </nav>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/pages" className="link">PAGES</Link>
                        </h3>
                        <nav className="menu page">
                            <Link to="/pages/aboutus" className="page aboutus">About Us</Link>
                            <Link to="/pages/ourteam" className="page ourteam">Our Team</Link>
                            <Link to="/pages/FAQpage" className="page faqpage">FAQ Page</Link>
                            <Link to="/pages/comingsoon" className="page comingsoon">Coming Soon</Link>
                            <Link to="/pages/pricingplans" className="page pricingplans">Pricing Plans</Link>
                        </nav>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/portfolio" className="link">PORTFOLIO</Link>
                        </h3>
                    </li>
                    <li>
                        <h3 className="nav_title">
                            <Link to="/contact" className="link">CONTACT</Link>
                        </h3>
                    </li>
                </ul>
                    
                <div className="customerHeader_icon">
                    <div className="customerHeader_icon_search_bar">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Bạn muốn tìm sản phẩm nào?" className="customerHeader_icon_search_bar_input"/>
                    </div>
                    <div className="link">
                        <i class="fa-solid fa-cart-shopping icon cart"></i>
                    </div>
                    <Link to="/setting">
                        <i class="fa-sharp fa-solid fa-gear icon setting"></i>
                    </Link>
                    <Link to="/profile">
                        <i class="fa-solid fa-user icon profile"></i>
                    </Link>
                </div>
            </div>
                <div className="space"></div>
        </div>
    )
}

export default customerHeader;