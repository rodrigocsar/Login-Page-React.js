import React, { useState } from 'react'
import { FormSingIn } from '../FormSingIn/FormSingIn'
import { FormSingUp } from '../FormSingUp/FormSingUp'

import { Button } from '../Button/Button'

import '../Toggle/toggle.css'

export const Toggle = () => {
  const [isActive, setIsActive] = useState(false);
    
  const handleRegisterClick = () => {
      setIsActive(true);
    };
      
    const handleLoginClick = () => {
      setIsActive(false);
    };
    
  return (
    <div  id="container" className={isActive ? "container active" : "container"}>
          <FormSingUp/>
          <FormSingIn/>
          <div className="toggle-container">
              <div className="toggle">
                  <div className="toggle-panel toggle-left">
                      <h1>Welcome Back!</h1>
                      <p>Enter your personal details to use all of site features</p>             
                      <Button id="login" onClick={handleLoginClick}text="Sing In" ></Button>                      
                  </div>
                  <div className="toggle-panel toggle-right">
                      <h1>Hello, Friend!</h1>
                      <p>Register with your personal details to use all of site features</p>
                      <Button id="register" onClick={handleRegisterClick} text="Sign Up"  />
                  </div>
              </div>
          </div>
      </div>
  )
}
