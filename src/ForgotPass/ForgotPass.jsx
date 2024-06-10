
import React, {useState, useRef} from 'react'
import '../ForgotPass/forgotPass.css'
import { Button } from '../Button/Button';

export const ForgotPass = () => {
    
                                  /*  Forgot Your password function*/
    const [forgotVisible, setForgotVisible] = useState(true);
    const toggleForgotVisibility = () => {
        setForgotVisible(!forgotVisible);
        };
        
                                   /*  Input function*/
    const inputRefs = useRef([]);
 
    const handleKeyDown = (e) => {
      if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
          e.preventDefault();
      }
  };

     const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
    }
};
  return (
      <>
                                    {/* Div Forgot Your password end function*/}
      <div className={forgotVisible ? 'forgot-container active d-flex start-0 align-items-center justify-content-center text-center flex-column position-absolute w-100 h-100 bg-dark bg-opacity-75' 
      : 'forgot-container d-none '} > 

          <div className='forgot flex-column '>
              <div className='forgot-pass text-white p-1'>
                  <h1>Hello, Friend!</h1>
                  <p>enter the code we sent to your email</p>
              </div>

                                      {/* Div Inputs and function*/}
          <div className='forgot-input d-flex align-items-center justify-content-center text-center '>
                {[...Array(6)].map((_, index) => (
                    <input
                        key={index}
                        className='input-box'
                        type='text'
                        inputMode='numeric'
                        maxLength='1'
                        pattern='[0-9]*'
                        onKeyDown={handleKeyDown}
                        onChange={(e) => handleChange(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        aria-label={`Digit ${index + 1}`}
                    />
                ))}
            </div>     
          </div>
          <div className='div-button-forgot position-relative'>
              <Button aria-label='To Go Back'  onClick={toggleForgotVisibility} text='Checking'  />
          </div>
    </div>
    </>
  )
}
