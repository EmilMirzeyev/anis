import React from 'react'
import Image from 'next/image'
import s from "../../styles/Markets.module.css"
import t from '../Translation'

const Market = ({ name, imageUrl, count }) => {
    return (
        <div className={s.market}>
            <div className={s.market_image}>
                <Image src={imageUrl} layout="fill" />
            </div>
            <p className={[s.market_name, "truncate"].join(" ")}>{name}</p>
            <div className={s.market_counts}>
                <span>{t("limited")}</span>
                <p>{count}</p>
            </div>
            <div className={s.market_buy_section}>
                <div className={s.market_details}>
                    <Image src={"/vectors/bed.svg"} width={24} height={24} />
                    <p>3</p>
                </div>
                <div className={s.market_details}>
                    <Image src={"/vectors/car.svg"} width={24} height={24} />
                    <p>2</p>
                </div>
                <button className={s.market_buy_btn}>
                    <Image src={"/vectors/shopping.svg"} width={24} height={24} />
                </button>
            </div>
        </div>
    )
}

export default Market