import React from "react";
import "./button.scss";
export const Button = ({ color, children, onClick }) => {
  return (
    <button onClick={onClick} className={color ? `btn btn-${color}` : `btn`}>
      {children}
    </button>
  );
};
export default Button;
