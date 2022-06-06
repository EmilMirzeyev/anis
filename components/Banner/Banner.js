import React from 'react'
import Image from 'next/image'
import s from "../../styles/Banner.module.css"
import t from '../Translation'
import ToastStore from '../../store/ToastStore'
import { useMediaQuery } from '../MediaQuery'

const Banner = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("0xc7a66f9362c467e0e86459a66f93");
        ToastStore.infoToast("Contract copied to clipboard")
    }

    return (
        <div className={s.banner}>
            <div className={s.banner_upper}>
                <div className={[s.banner_wrapper, "wrapper"].join(" ")}>
                    <div className={s.banner_content}>
                        <h1>{t("banner_title")}</h1>
                        <p>{t("banner_description")}</p>
                        <button>{t("mini_map")}</button>
                    </div>
                    {
                        useMediaQuery("min-width: 991px") && (
                            <div className={s.banner_image}>
                                <Image src={"/images/banner.png"} layout="responsive" width={1} height={1} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={s.banner_bottom}>
                <p>{t("contract")}</p>
                <p className='truncate'>{"0xc7a66f9362c467e0e86459a66f93"}</p>
                <Image src={"/vectors/copy.svg"} width={24} height={24} onClick={copyToClipboard} />
            </div>
        </div>
    )
}

export default Banner