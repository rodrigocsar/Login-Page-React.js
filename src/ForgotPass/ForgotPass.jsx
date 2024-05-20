
import React, {useState, useRef} from 'react'
import '../ForgotPass/forgotPass.css'
import { Button } from '../Button/Button';



export const ForgotPass = () => {
    
    const [forgotVisible, setForgotVisible] = useState(true);
    const inputRefs = useRef([]);
    const toggleForgotVisibility = () => {
        setForgotVisible(!forgotVisible);
    };

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
    
      <div  className={forgotVisible ? 'forgot-container active' : 'forgot-container '} >    
          <div className='forgot'>

          <div className="forgot-pass">
              <h1>Hello, Friend!</h1>
              <p>enter the code we sent to your email</p>
          </div>
    
          <div className="forgot-input">
                {[...Array(6)].map((_, index) => (
                    <input
                        key={index}
                        className='input-box'
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        pattern="[0-9]*"
                        onKeyDown={handleKeyDown}
                        onChange={(e) => handleChange(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        aria-label={`Digit ${index + 1}`}
                    />
                ))}
            </div>
      
      <div className='div-button-forgot'>
          <Button aria-label='To Go Back'  onClick={toggleForgotVisibility} text="Checking"  />
      </div>
          </div>
    </div>
  
  )
}
