import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="wrapper">
                    <h2>ADMIN LOGIN</h2>
                    <form className="form-box" action="#">
                        <div className="input-box">
                            <span className='icon'><i class="fa-solid fa-user"></i></span>
                            <input type="username" required/>
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
                        <button type='submit' class='btn'>Login
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