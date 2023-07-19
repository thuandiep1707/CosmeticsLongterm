import { useState, createContext, useEffect} from 'react';
import { useNavigate,Routes, Route } from 'react-router-dom';

import Login from './Login/login'
import Admin from './Client/Admin/index'
import Customer from './Client/Customer/index';
import './index.scss';

const Index = () => {
<<<<<<< Updated upstream
=======
    const navigate=useNavigate()
>>>>>>> Stashed changes
    const [role,changeRole] = useState('Admin');
    if (role == 'Login') 
    {
        return (
            <div className="main">
                <Login />
            </div>
        )
    } else if (role == 'Admin') 
    {   
        useEffect(navigate("/admin"))
        return (
            <div className="main">
            <Routes>
                <Route path='/admin' element={<Admin />} />
            </Routes>
            {/* <button onClick={()=>navigate("/admin")}>sahdksafksa</button> */}
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