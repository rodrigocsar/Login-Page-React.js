/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState} from 'react';
import { ForgotPass } from '../ForgotPass/ForgotPass';
import '../FormSingIn/singIn.css';

export const FormSingIn = () => {

                                  /*  Visible password function*/
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
                                  /*  Visible Forgot Your password function*/
    const [forgotVisible, setForgotPassVisible] = useState(false);
    const ForgotVisibility = () => {
        setForgotPassVisible(!forgotVisible);
    };

    return (
       
        <>
        {forgotVisible && <ForgotPass />} {/* Forgot page visible */}

        <div className='form-container sign-in 
                        d-flex
                        position-absolute 
                        align-items-center 
                        h-100'>  {/* Contêiner flexível */}

            <form className='form-sing-in 
                             d-flex 
                             flex-column 
                             align-items-center 
                             justify-content-center 
                             bg-white 
                             px-3 w-100 h-100'>
                <h1>Sign In</h1>
                <div className='social-icons'>  
                    <a href='https://myaccount.google.com/' target='blank' 
                       className='icon'><i className='fa-brands fa-google-plus-g'/></a>
                    <a href='https://www.facebook.com/' target='blank' 
                       className='icon'><i className='fa-brands fa-facebook-f'/></a>
                    <a href='https://github.com/login' target='blank' 
                       className='icon'><i className='fa-brands fa-github'/></a>
                    <a href='https://www.linkedin.com/' target='blank'  
                       className='icon'><i className='fa-brands fa-linkedin-in'/></a>
                </div>

                <span>or use your email password</span> 

                <div aria-label='Create Username' className='input-sing-in m-0 w-100'> {/* Div input */}
                    <div  className='label-icon '>
                        <div className='input-wapper position-relative px-3 w-100'>
                            <i className='fa-solid fa-user m-0 my-3'/>
                            <input type='email' 
                             placeholder='E-mail' aria-label='Email'  
                             className='input-email border-0 my-1 py-2 px-3 w-100 '/>
                        </div> 

                        <div className='input-wapper position-relative px-3 w-100 '>
                            <i className='fa-solid fa-lock m-0 '/>
                            <input type={passwordVisible ? 'text':  'password'}id='password-in' 
                               placeholder='Password' 
                               className='input-password border-0 my-1 py-2 px-3 w-100' 
                            />  {/*  functions password Visible  */}

                            <i className={passwordVisible ? 
                                        'fa-solid fa-eye-slash position-relative m-0 my-3 ' 
                                        : 'fa-solid fa-eye position-relative  m-0 my-3  '} 
                               onClick={togglePasswordVisibility} 
                               aria-label='Password'
                            />  {/* function Icon switching  */}
                       </div>
                    </div>


                    <div className='remember-forgot  d-flex justify-content-between m-1'>
                        <label htmlFor='checkbox' 
                               className='label-box d-flex '>
                            <input type='checkbox'
                                   id='checkbox' 
                                   className='input-checkbox' />Remember me
                         </label>

                        <a className='forgot' aria-label='Forgot Password' href='#' 
                           onClick={ForgotVisibility} 
                           tabIndex='0' >Forgot Your Password?
                        </a> {/*  function Forgot page visible  */}
                   </div>
                </div>
               <button aria-label='Sign In'>Sign In</button>
            </form>
        </div>
        </>
   
       

  );
};
