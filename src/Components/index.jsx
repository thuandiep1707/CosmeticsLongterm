import { useState, createContext } from 'react';

import Login from './Login/login'
import Admin from './Client/Admin/index'
import Customer from './Client/Customer/index';
import './index.scss';

const Index = () => {
    const [role,changeRole] = useState('Customer');
    if (role == 'Login') 
    {
        return (
            <div className="main">
                <Login />
            </div>
        )
    } else if (role == 'Admin') 
    {
        return (
            <div className="main">
                <Admin />
            </div>
        )
    } else if (role == 'Customer') 
    {
        return (
            <div className = "main">
                <Customer />
            </div>
        )
    }
}

export default Index;