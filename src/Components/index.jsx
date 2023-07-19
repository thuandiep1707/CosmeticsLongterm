import { useState, useContext, useEffect} from 'react';
import { useNavigate,Routes, Route } from 'react-router-dom';

import Login from './Login/login'
import Admin from './Client/Admin/index'
import Customer from './Client/Customer/index';
import { GlobalContext } from '../GlobalContext';

import './index.scss';

const Index = () => {
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/admin/*' element={<Admin/>}/>
            <Route path='/customers/*'element={<Customer/>}/>
        </Routes>
    )
}

export default Index;