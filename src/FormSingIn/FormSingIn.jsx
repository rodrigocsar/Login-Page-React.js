/* eslint-disable jsx-a11y/anchor-is-valid */


import React, {useState} from 'react';
import { ForgotPass } from '../ForgotPass/ForgotPass';
import '../FormSingIn/singIn.css';

export const FormSingIn = () => {



    const [passwordVisible, setPasswordVisible] = useState(false);
    const [forgotVisible, setForgotPassVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

     const ForgotVisibility = () => {
        setForgotPassVisible(!forgotVisible);
    };

    return (
       
        <>
              
        {forgotVisible && <ForgotPass />}  
        <div className="form-container sign-in" > 
            <form>
                <h1>Sign In</h1>
                <div className="social-icons">
                    <a href="https://myaccount.google.com/" target="blank" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="https://www.facebook.com/" target="blank" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://github.com/login" target="blank"  className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/" target="blank"  className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span> 
                <div className='registerSingIn'>
                <label aria-label="Email">
                    <input type="email" placeholder="Email" aria-label="Email"/><i className="fa-solid fa-envelope"></i>

                </label>


                   
                </div>
                <div className="eye">
                   <input type={passwordVisible ? 'text':  'password'} placeholder="Password"/>
                   <i className={passwordVisible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} 
                   onClick={togglePasswordVisibility} aria-label="Password"></i>
             
                </div>     
                <div className='remember-forget'>
                    <label aria-label="Remember me"><input type="checkbox"/>Remember me</label>
                    <a className='forget' aria-label="Forgot Password" href="#" onClick={ForgotVisibility} tabIndex="0" >Forgot Your Password?</a>

                </div>        
                <button aria-label="Sign In" >Sign In</button>
            </form>
          
        </div>
        
        </>
   
       

  );
};
