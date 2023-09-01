import React from "react";
import "./button.scss";
export const Button = ({ color, children }) => {
  return (
    <button className={color ? `btn btn-${color}` : `btn`}>{children}</button>
  );
};
export default Button;
