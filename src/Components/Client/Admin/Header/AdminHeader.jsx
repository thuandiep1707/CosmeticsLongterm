import {Routes, Route, Link} from "react-router-dom";
import './AdminHeader.scss';

const adminHeader = () => {
    return (
        <div>
            <div className="adminHeader">
                <ul>
                    <li SclassName="adminHeader_nav">
                        <nav className="adminmenu">
                            <Link to='/admin/home'>Home</Link>
                            <Link to='/admin/category'>Category</Link>
                            <Link to='/admin/product'>Product</Link>
                            <Link to='/admin/order'>Order</Link>
                            <Link to='/admin/customer'>Customer</Link>
                        </nav>
                    </li>
                    <li className="adminHeader_logout">
                            <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default adminHeader;