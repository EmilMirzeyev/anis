import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from '../MediaQuery'
import s from '../../styles/Introduction.module.css'
import t from '../Translation'

const Introduction = () => {
    return (
        <div className={s.introduction}>
            <div className={s.introduction_left_shape}></div>
            <div className={s.introduction_right_shape}></div>
            <div className={[s.introduction_wrapper, "wrapper"].join(" ")}>
                {
                    useMediaQuery("min-width: 991px") && (
                        <div className={s.banner_image}>
                            <Image src={"/images/introduction.png"} layout="responsive" width={641} height={455} />
                        </div>
                    )
                }
                <div className={s.introduction_content}>
                    <h3>{t("introduction")}</h3>
                    <p>{t("introduction_content")}</p>
                </div>
            </div>
        </div>
    )
}

export default Introduction