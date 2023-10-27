import React from "react";
import "./Button.scss";

const Button = ({ title = "", onClick = () => {} }) => {
  return (
    <>
      <button onClick={onClick} className="main-button">
        {title}
      </button>
    </>
  );
};

export default Button;
