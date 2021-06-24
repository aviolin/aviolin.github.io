import React from 'react';

const Button = ({
  classes="primary",
  text,
  link=null,
  onClick=null,
  external=false
}) => {
  if (link) return (
    <a
      className={classes}
      href={link}
      target={external ? "_blank" : ""}
      rel={external ? "noreferrer" : ""}
    >
      {text}
    </a>
  );

  return (
    <button 
      className={classes}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;