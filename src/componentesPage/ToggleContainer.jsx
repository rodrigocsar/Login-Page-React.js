import React, { useState } from 'react'
import { FormSingIn } from './FormSingIn'
import { FormSingUp } from './FormSingUp'

import '../componentsStyle/toggleContainer.css'

export default function ToggleContainer() {
   
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
                      <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
                  </div>
                  <div className="toggle-panel toggle-right">
                      <h1>Hello, Friend!</h1>
                      <p>Register with your personal details to use all of site features</p>
                      <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
                  </div>
              </div>
          </div>
      </div>
  )
}
