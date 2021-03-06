import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import postsStore from '../store/postsStore'
import ToastStore from '../store/ToastStore'
import t from '../components/Translation'
import Seo from '../components/Seo'
import Banner from '../components/Banner/Banner'
import BannerInfo from '../components/Banner/BannerInfo'
import Lands from '../components/Lands/Lands'
import Markets from '../components/Markets/Markets'
import Introduction from '../components/Introduction/Introduction'
import Roadmaps from '../components/Roadmap/Roadmaps'
import ComingSoon from '../components/ComingSoon/ComingSoon'
import Team from '../components/Team/Team'

const Home = () => {
  return (
    <>
      <Seo />
      <div>
        <Banner />
        <BannerInfo />
        <Lands />
        <Markets />
        <Introduction />
        <Roadmaps />
        <ComingSoon />
        <Team />
      </div>
    </>
  )
}

export default Home
