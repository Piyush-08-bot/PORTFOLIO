import React from 'react';
import './MetallicText.css';

const MetallicText = ({ text, className = '' }) => {
  return (
    <span className={`metallic-text ${className}`} data-text={text}>
      {text}
    </span>
  );
};

export default MetallicText;