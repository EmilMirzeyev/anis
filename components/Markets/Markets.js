import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from "../../styles/Markets.module.css"
import t from '../Translation'
import HeadingLineBottom from '../Atom/HeadingLineBottom'
import Market from './Market'

const Markets = () => {
  return (
    <div className={[s.markets, "wrapper"].join(" ")}>
      <HeadingLineBottom text={t("nft_markets")} />
      <div className={s.markets_wrapper}>
        <Market name={"Villa BoobGoop"} imageUrl={"/images/market.jpeg"} count={5} />
        <Market name={"Villa BoobGoop"} imageUrl={"/images/market.jpeg"} count={7} />
        <Market name={"Villa BoobGoop"} imageUrl={"/images/market.jpeg"} count={2} />
        <Market name={"Villa BoobGoop"} imageUrl={"/images/market.jpeg"} count={16} />
      </div>
      <Link href={"/marketplace"}>
        <a className={s.marketplace_btn}>
          {t("marketplace")}
        </a>
      </Link>
    </div>
  )
}

export default Markets