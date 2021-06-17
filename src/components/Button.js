import React from 'react';

const Button = ({
  style="primary",
  text,
  link=null,
  onClick=null
}) => {
  if (link) return (
    <a
      className={style}
      href={link}
    >
      {text}
    </a>
  )

  return (
    <button 
      className={style}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;