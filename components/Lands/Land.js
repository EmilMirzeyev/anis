import React from 'react'
import Image from 'next/image'
import s from "../../styles/Lands.module.css"
import t from '../Translation'

const Land = ({ name, imageUrl, section, coordinates }) => {
    return (
        <div className={s.land}>
            <div className={s.land_image}>
                <Image src={imageUrl} layout="fill" />
            </div>
            <p className={[s.land_name, "truncate"].join(" ")}>{name}</p>
            <p className={[s.land_section, "truncate"].join(" ")}>{section}</p>
            <div className={s.land_coordinates}>
                <Image src={"/vectors/location.svg"} width={24} height={24} />
                <small>{coordinates}</small>
            </div>
            <button className={s.land_buy_btn}>{t("buy")}</button>
        </div>
    )
}

export default Land