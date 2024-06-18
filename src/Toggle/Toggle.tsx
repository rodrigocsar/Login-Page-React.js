import React, { useState } from 'react';
import { FormSingIn } from '../FormSingIn/FormSingIn';
import { FormSingUp } from '../FormSingUp/FormSingUp';
import { Button } from '../Button/Button';
import '../Toggle/toggle.css';

export const Toggle: React.FC = () => {
  const [toggleActive, setIsActive] = useState<boolean>(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div id='container' className={`container d-flex bg-white position-relative overflow-hidden ${toggleActive ? 'active' : ''}`}>
      <FormSingUp />
      <FormSingIn />
      <div className='toggle-container h-100 w-50 position-absolute'>
        <div className='toggle position-relative h-100'>
          <div className='toggle-panel toggle-left d-flex align-items-center justify-content-center text-center flex-column position-absolute w-50 h-100'>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <Button id='login' onClick={handleLoginClick} text='Sign In' />
          </div>
          <div className='toggle-panel toggle-right d-flex align-items-center justify-content-center text-center flex-column position-absolute w-50 h-100'>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <Button id='register' onClick={handleRegisterClick} text='Sign Up' />
          </div>
        </div>
      </div>
    </div>
  );
};
