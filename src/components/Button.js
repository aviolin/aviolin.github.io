import React from 'react';

const Button = ({
  style="primary",
  text,
  link=null,
  onClick=null,
  external=false
}) => {
  if (link) return (
    <a
      className={style}
      href={link}
      target={external ? "_blank" : ""}
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