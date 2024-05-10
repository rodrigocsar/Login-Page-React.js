/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

export const FormSingIn = () => {


    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
  };

    return (
        <div className="form-container sign-in">         
            <form>
                <h1>Sign In</h1>
                <div className="social-icons">
                    <a href="https://myaccount.google.com/" target="blank" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="https://www.facebook.com/" target="blank" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://github.com/login" target="blank"  className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/" target="blank"  className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span> 
                <div className='register'>
                    <input type="email" placeholder="Email" /><i className="fa-solid fa-envelope"></i>
                    <input type={passwordVisible ? 'text':  'password'} placeholder="Password"/><i className={passwordVisible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={togglePasswordVisibility}></i>
                </div>     
                <div className='remember-forget'>
                    <label><input type="checkbox"/>Remember me</label>
                    <a className='forget' href="#">Forgot Your Password?</a>
                </div>        
                <button>Sign In</button>
            </form>
        </div>
  );
};
