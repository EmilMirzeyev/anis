import React from "react";
import s from "./Button.module.css";

const Button = ({height, width, minWidth, borderRadius, className, borderGradient, children, ...props }) => {
  return (
    <button {...props} className={[s.atomic_button, className, borderGradient ? s.border_gradient : ''].join(" ")}  style={{ height: height, width: width, minWidth: minWidth, borderRadius: borderRadius}}>
      <div>{children}</div>
    </button>
  );
};

export default Button;
