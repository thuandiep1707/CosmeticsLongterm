import { Link, Route, Routes } from "react-router-dom";
import { useContext } from 'react'

import {GlobalContext} from "../../GlobalContext";
import './header.scss'

const Header = () => {
    const {search} = useContext(GlobalContext)
    return(
        <>
            <div className="header_fake"></div>
            <div className="endow">MIỄN PHÍ GIAO HÀNG TOÀN QUỐC ĐƠN TỪ 500,000VND</div>
            <header className='header'>
                <Link to="/" className="header_logo link">
                    <div className="header_logo_square"></div>
                    <div className="header_logo_brand">Longterm</div>
                </Link>
                <nav className="header_nav">
                    <div className="header_nav_shop">
                        <Link to='/shop/general' className="link">CỬA HÀNG</Link>
                        <ul className="header_nav_shop_select">
                            <li className="header_nav_shop_select_option">
                                <Link to="shop/perfume" className="link">NƯỚC HOA</Link>
                            </li>
                            <li className="header_nav_shop_select_option">
                                <Link to="/shop/serum" className="link">SERUM</Link>
                            </li>
                            <li className="header_nav_shop_select_option">
                                <Link to="/shop/toner" className="link">TONER</Link>
                            </li>
                            <li className="header_nav_shop_select_option">
                                <Link to="/shop/lipstick"  className="link">SON MÔI</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header_nav_blog">
                        <Link to='/blog' className="link">BÀI VIẾT</Link>
                    </div>
                    <div className="header_nav_contact">
                        <Link to='/contact' className="link">LIÊN HỆ</Link>
                    </div>   
                    <div className="header_nav_introduce">
                        <Link to='/introduce' className="link">VỀ CHÚNG TÔI</Link>
                    </div>
                </nav>
                <div className="header_tool">
                    <div className="header_tool_search header_tool_element">
                        <i className="fa-solid fa-magnifying-glass header_tool_search_icon"></i>
                        <input placeholder="Bạn muốn tìm sản phẩm gì?" 
                            type="text" className="header_tool_search_input"
                            onChange={(e)=>{search(e.target.value)}}/>
                    </div>
                    <i className="fa-solid fa-cart-shopping header_tool_cart header_tool_element"></i>
                    <i className="fa-solid fa-user header_tool_profile header_tool_element"></i>
                </div>
            </header>
        </>
    )
}

export default Header