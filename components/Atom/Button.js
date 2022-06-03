import React from "react";
import s from "./Button.module.css";

const Button = ({height, width, minWidth, borderRadius, children, ...props }) => {
  return (
    <button {...props} className={s.atomic_button}  style={{ height: height, width: width, minWidth: minWidth, borderRadius: borderRadius}}>
      <div>{children}</div>
    </button>
  );
};

export default Button;
