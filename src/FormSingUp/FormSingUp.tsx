/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import '../FormSingUp/singUp.css';

export const FormSingUp: React.FC = () => {
  // Função para visibilidade da senha
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='form-container sign-up position-absolute d-flex h-100 align-items-center justify-content-around'>
      {/* Contêiner flexível */}
      <form className='form-sing-up d-flex flex-column align-items-center justify-content-center bg-white px-3 w-100 h-100'>
        <h1>Create Account</h1>
        <div className='social-icons'>
          <a href='https://myaccount.google.com/' target='_blank' className='icon'>
            <i className='fa-brands fa-google-plus-g' />
          </a>
          <a href='https://www.facebook.com/' target='_blank' className='icon'>
            <i className='fa-brands fa-facebook-f' />
          </a>
          <a href='https://github.com/login' target='_blank' className='icon'>
            <i className='fa-brands fa-github' />
          </a>
          <a href='https://www.linkedin.com/' target='_blank' className='icon'>
            <i className='fa-brands fa-linkedin-in' />
          </a>
        </div>

        <span>or use your email for registration</span>

        <div className='input-sing-up m-0 w-100'>
          {/* Div input */}
          <div aria-label='Create Username' className='label-icon'>
            <i className='fa-solid fa-at m-0 my-3' />
            <input type='text' placeholder='Name' className='input-email border-0 my-1 py-2 px-3 w-100' />

            <i className='fa-solid fa-user d-flex m-0 my-0 py-3' />
            <input type='email' placeholder='E-mail' aria-label='Email' className='input-email border-0 my-1 py-2 px-3 w-100' />
                                       {/* Ultilizando Função para visualizar da senha */}
            <i className='fa-solid fa-lock d-flex m-0 my-0 py-3' />
            <input 
              type={passwordVisible ? 'text' : 'password'} 
              placeholder='Password' 
              className='input-password border-0 my-1 py-2 px-3 w-100' 
            />
            <i 
              className={passwordVisible ? 'fa-solid fa-eye-slash position-relative m-0 my-3' : 'fa-solid fa-eye position-relative m-0 my-3'}
              onClick={togglePasswordVisibility}
              aria-label='Password'
            />
          </div>
        </div>
        <button aria-label='Create registration button'>Sign Up</button>
      </form>
    </div>
  );
};
