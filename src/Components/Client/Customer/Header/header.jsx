import {Routes, Route, Link} from "react-router-dom";

import './header.scss';

const customerHeader = () => {
    return(
        <div className="customerHeader">
            <ul className='customerHeader_nav'>
                <li>
                    <h3 className="nav_title">
                        <Link to="/home" className="link">HOME</Link>
                    </h3>
                </li>
                <li>
                    <h3 className="nav_title">
                        <Link to="/shops" className="link">SHOPS</Link>
                    </h3>
                    <nav className="menu shop">
                        <Link to="/shop/lipstick" className="page lipstick">Lipstick</Link>
                        <Link to="/shop/serum" className="page serum">Serum</Link>
                        <Link to="/shop/toner" className="page toner">Toner</Link>
                        <Link to="/shop/perfume" className="page perfume">Perfume</Link>
                        <Link to="/shop/makeup" className="page makeup">Make Up</Link>
                    </nav>
                </li>
                <li>
                    <h3 className="nav_title">
                        <Link to="/blogs" className="link">BLOGS</Link>
                    </h3>
                    <nav className="menu blog">
                        <Link to="/blog/standard" className="page standard">Standard</Link>
                        <Link to="/blog/centered" className="page centered">Centered</Link>
                        <Link to="/blog/nosidebar" className="page nosidebar">No Sidebar</Link>
                        <Link to="/blog/audio" className="page audio">Audio</Link>
                        <Link to="/blog/quote" className="page quote">Qoute</Link>
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
        </div>
    )
}

export default customerHeader;