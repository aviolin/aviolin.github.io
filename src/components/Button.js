import React from 'react';

const Button = ({
  style="primary",
  text,
}) => {
  return (
    <button 
      className={style}

    >
      {text}
    </button>
  )
}

export default Button;