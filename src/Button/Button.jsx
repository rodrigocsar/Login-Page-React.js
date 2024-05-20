import React from 'react';
import '../Button/button.css'

export const Button = ({ onClick, text }) => {

  return (
    
    <button className="hidden" onClick={onClick} aria-label="Switch Page Button">
      {text}
    </button>

  );
};

