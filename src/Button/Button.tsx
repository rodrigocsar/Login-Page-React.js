import React from 'react';
import '../Button/button.css';

interface ButtonProps {
  id: string;
  onClick: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ id, onClick, text }) => {
  return (
    <button id={id} className="hidden" onClick={onClick} aria-label="Switch Page Button">
      {text}
    </button>
  );
};
