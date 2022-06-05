import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import t from "../Translation";
import s from "../../styles/TheHeader.module.css";

const MobileDropdown = ({ active }) => {
    let content = useRef();
    const [dropdownHeight, setDropdownHeight] = useState("0");

    useEffect(() => {
        setDropdownHeight(content.current.clientHeight + "px");
    }, [active]);

    return (
        <div className="wrapper">
            <div className={s.mobile_dropdown} style={{ height: active ? dropdownHeight : "0" }} >
                <div className={s.mobile_dropdown_wrapper} ref={content}>
                    <ul className={s.mobile_navbar}>
                        <Link href={"/"}>
                            <a>
                                <li>{t("home")}</li>
                            </a>
                        </Link>
                        <Link href={"/minimap"}>
                            <a>
                                <li>{t("minimap")}</li>
                            </a>
                        </Link>
                        <Link href={"/marketplace"}>
                            <a>
                                <li>{t("marketplace")}</li>
                            </a>
                        </Link>
                    </ul>
                    <ul className={s.mobile_social_networks}>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                            <li>
                                <Image src={"/vectors/instagram.svg"} layout="fill" />
                            </li>
                        </a>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                            <li>
                                <Image src={"/vectors/twitter.svg"} layout="fill" />
                            </li>
                        </a>
                        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                            <li>
                                <Image src={"/vectors/youtube.svg"} layout="fill" />
                            </li>
                        </a>
                        <a href="http://telegram.com" target="_blank" rel="noopener noreferrer">
                            <li>
                                <Image src={"/vectors/telegram.svg"} layout="fill" />
                            </li>
                        </a>


                    </ul>
                    <Link href={"/whitepaper"}>
                        <a>
                            <button>{t("whitepaper")}</button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileDropdown