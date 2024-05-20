import React, {useState} from 'react';

import '../FormSingUp/singUp.css'

export const FormSingUp = () => {
  
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="form-container sign-up ">
            <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="https://myaccount.google.com/" target="blank" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="https://www.facebook.com/" target="blank" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://github.com/login" target="blank"  className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/" target="blank"  className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <div className='registerSingUp'>
                   <label  aria-label="Create Username">
                    <input type="text" placeholder="Name" /><i className="fa-solid fa-user" ></i>

                   </label>
  
                    <input type="email" placeholder="Email"/><i className="fa-solid fa-envelope" aria-label="Create-Email"></i>
                   
                </div>
                <div className="eye">
               
                    <input  type={passwordVisible ? 'text' : 'password'} placeholder="Password" aria-label="Password"/>
                    <i className={passwordVisible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} 
                    onClick={togglePasswordVisibility} ></i>
             
                </div>

                <button aria-label="Create registration button">Sign Up</button>
            </form>
        </div>
  );
};
