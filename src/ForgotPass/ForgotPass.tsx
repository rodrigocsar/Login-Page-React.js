import React, { useState, useRef, KeyboardEvent, ChangeEvent } from 'react';
import '../ForgotPass/forgotPass.css';
import { Button } from '../Button/Button';

// Define um tipo para os refs dos inputs
type InputRef = HTMLInputElement | null;

export const ForgotPass: React.FC = () => {
  // Estado para visibilidade da seção "Esqueceu sua senha"
  const [forgotVisible, setForgotVisible] = useState<boolean>(true);
  const toggleForgotVisibility = (): void => setForgotVisible(!forgotVisible);

  // Estado e funções para gerenciamento dos inputs
  const inputRefs = useRef<InputRef[]>([]);
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Estado para visibilidade da seção de entrada de e-mail
  const [showInputPass, setShowInputPass] = useState<boolean>(false);
  const handleShowInput = (): void => setShowInputPass(true);

  return (
    <>
      {/* Contêiner "Esqueceu sua senha" */}
      <div
        className={
          forgotVisible
            ? 'forgot-container active d-flex start-0 align-items-center justify-content-center text-center flex-column position-absolute w-100 h-100 bg-dark bg-opacity-75 px-1'
            : 'forgot-container d-none'
        }
      >
        {!showInputPass ? (
          <ForgotEmailSection handleShowInput={handleShowInput} />
        ) : (
          <VerificationSection
            inputRefs={inputRefs}
            handleKeyDown={handleKeyDown}
            handleChange={handleChange}
            toggleForgotVisibility={toggleForgotVisibility}
          />
        )}
      </div>
    </>
  );
};

// Seção de entrada de e-mail
const ForgotEmailSection: React.FC<{ handleShowInput: () => void }> = ({ handleShowInput }) => (
  <div className='forgot-email position-relative w-100'>
    <div className="forgot-pass text-white p-1">
      <h1>Hello, Please</h1>
      <p>type your e-mail</p>
    </div>
    <div className="div-input-email">
      <i className='fa-solid fa-user m-0 my-3 mx-1' />
      <input
        type='email'
        placeholder='E-mail'
        aria-label='Email'
        className='input-email border-0 position-relative my-1 py-2 px-3 w-100'
      />
    </div>
    <div className='div-button-email position-relative'>
      <Button id='verification' aria-label='To Go Back' onClick={handleShowInput} text="Send my email" />
    </div>
  </div>
);

// Seção de verificação de código
const VerificationSection: React.FC<{
  inputRefs: React.MutableRefObject<InputRef[]>;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  toggleForgotVisibility: () => void;
}> = ({ inputRefs, handleKeyDown, handleChange, toggleForgotVisibility }) => (
  <div className='forgot position-relative'>
    <div className="forgot-pass text-white p-1">
      <h1>Verification!</h1>
      <p>enter the code we sent to your email</p>
    </div>
    {/* Div Inputs e função */}
    <div className="forgot-input d-flex align-items-center justify-content-center text-center">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          className='input-box'
          type="text"
          inputMode="numeric"
          maxLength={1}
          pattern="[0-9]*"
          placeholder='0'
          onKeyDown={handleKeyDown}
          onChange={(e) => handleChange(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
    <div className='div-button-forgot position-relative'>
      <Button id='check' aria-label='To Go Back' onClick={toggleForgotVisibility} text="Checking" />
    </div>
  </div>
);