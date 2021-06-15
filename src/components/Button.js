import React from 'react';

const Button = ({
  style="primary",
  text,
  link=null,
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

    >
      {text}
    </button>
  )
}

export default Button;