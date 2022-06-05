import React from 'react'
import s from "./HeadingLineBottom.module.css";

const HeadingLineBottom = ({text}) => {
  return (
    <h2 className={s.heading_with_line_bottom}>{text}</h2>
  )
}

export default HeadingLineBottom