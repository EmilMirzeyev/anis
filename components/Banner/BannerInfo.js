import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from "../../styles/Banner.module.css"
import t from '../Translation'

const BannerInfo = () => {
    return (
        <div className={s.banner_info_section}>
            <div className={s.banner_info_shape}></div>
            <div className={["wrapper", s.banner_info_wrapper].join(" ")}>
                <div className={s.banner_info_land_images}>
                    <div className={s.banner_info_land_image}>
                        <Image src={"/images/land1.png"} layout="fill" />
                    </div>
                    <div className={s.banner_info_land_image}>
                        <Image src={"/images/land2.png"} layout="fill" />
                    </div>
                    <div className={s.banner_info_land_image}>
                        <Image src={"/images/land2.png"} layout="fill" />
                    </div>
                    <div className={s.banner_info_land_image}>
                        <Image src={"/images/land3.png"} layout="fill" />
                    </div>
                </div>
                <div className={s.banner_info_content}>
                    <h3>{t("banner_info_title")}</h3>
                    <p>{t("banner_info_description")}</p>
                    <div className={s.banner_info_links}>
                        <Link href={"/marketplace"}>
                            <a className={s.banner_info_marketplace_btn}>
                                {t("marketplace")}
                            </a>
                        </Link>
                        <Link href={"/minimap"}>
                            <a className={s.banner_info_minimap_btn}>
                                {t("minimap")}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerInfo