import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from "../../styles/Lands.module.css"
import t from '../Translation'
import HeadingLineBottom from '../Atom/HeadingLineBottom'
import Land from './Land'

const Lands = () => {
  return (
    <div className={[s.lands, "wrapper"].join(" ")}>
        <HeadingLineBottom text={t("nft_lands")} />
        <div className={s.lands_wrapper}>
            <Land name={"Name Land"} imageUrl={"/images/land2.png"} section={"Section Landdewfef cdc"} coordinates={"-458,360"} />
            <Land name={"Name Land"} imageUrl={"/images/land2.png"} section={"Section Land"} coordinates={"-458,360"} />
            <Land name={"Name Land"} imageUrl={"/images/land2.png"} section={"Section Land"} coordinates={"-458,360"} />
        </div>
    </div>
  )
}

export default Lands