import React from 'react'
import { Button } from '../Button/Button';
import { useState } from 'react';

export const Verification = () => {
    const [setShowInputPass] = useState(false);

    const HandleShowInput = () => {
        setShowInputPass(true);
    };
  return (
    <div className='forgot d-flex align-items-center justify-content-center position-relative mb-4 px-1 w-100  ' >
    <div className="forgot-pass text-white p-1 ">
        <h1>Hello, Please</h1>
        <p>type your e-mail</p>
                                 
             <i className='fa-solid fa-user d-flex  m-0 my-3 mx-1 m '/>
             <input type='email' 
              placeholder='E-mail' 
              aria-label='Email'  
              className='input-email border-0 position-ralative  my-1 py-2 px-3  w-100 '/>
            <Button  onClick={HandleShowInput} text='Send my email'/>
         </div> 

</div>

  )
}
