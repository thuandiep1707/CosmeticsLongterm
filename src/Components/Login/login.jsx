import { useState } from 'react';

import { useNavigate } from 'react-router-dom'

import './login.scss';

const Login = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState();
    const setPath = () => {
        navigate(`/${role}`)
    }
    return (
        <div className="login">
            <div className="wrapper">
                    <h2>ADMIN LOGIN</h2>
                    <form className="form-box" onSubmit={setPath} type='submit'>
                        <div className="input-box">
                            <span className='icon'><i class="fa-solid fa-user"></i></span>
                            <input value={role} onChange={(e)=>{setRole(e.target.value)}} type="username" required/>
                            <label>Username</label>
                        </div>
                        <div className="input-box">
                            <span className='icon'><i class="fa-solid fa-lock"></i></span>
                            <input type="password" required/>
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label className='link_a'> <input type="checkbox"/>Remember me</label>
                            <a href="#" className='link_a'>Forgot Password?</a>
                        </div>
                        <button  class='btn'>Login
                        </button>
                        <div className="login-register">
                            <p>Don't have an account?
                                <a href="#" className='register-link'>Register</a>
                            </p>
                        </div>
                    </form>
            </div>

        </div>
    )
}

export default Login;