import React from 'react'
import s from "../../styles/Roadmap.module.css"
import HeadingLineBottom from '../Atom/HeadingLineBottom'
import t from '../Translation'
import Roadmap from './Roadmap'

const Roadmaps = () => {
  const list = [
    "Coinmarketcap listing",
    "Bsc scan listing",
    "CoinGecko listing",
    "Pre sale ANIS COIN",
    "Audit",
    "Introduction ANIS COIN staking",
    "ANIS COIN staking",
    "First NFT Collection",
    "Land pre sales round 1 and 2",
    "Introduction mini map in the ANISLAND Metaverse",
    "Pancakeswap listing"
  ]
  const list1 = [
    "Coinmarketcap listing",
    "Bsc scan listing",
    "CoinGecko listing",
    "Pre sale ANIS COINxsac cdskjcds csd kicjodscds ojc",
    "Audit",
    "Introduction ANIS COIN staking",
    "ANIS COIN staking",
  ]
  return (
    <div className={[s.roadmaps, "wrapper"].join(" ")}>
      <HeadingLineBottom text={t("roadmap")} />
      <div className={s.roadmaps_wrapper}>
        <Roadmap title={"A1-2022"} lists={list} />
        <Roadmap title={"A1-2022"} lists={list1} />
        <Roadmap title={"A1-2022"} lists={list} />
        <Roadmap title={"A1-2022"} lists={list} />
        <Roadmap title={"A1-2022"} lists={list} />
      </div>
    </div>
  )
}

export default Roadmaps