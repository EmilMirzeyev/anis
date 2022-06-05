import React from 'react'
import s from "../../styles/Roadmap.module.css"

const Roadmap = ({title, lists}) => {
  return (
    <div className={s.roadmap}>
        <h3>{title}</h3>
        <ul>
            {lists.map(list => (
                <li>- {list}</li>
            ))}
        </ul>
    </div>
  )
}

export default Roadmap