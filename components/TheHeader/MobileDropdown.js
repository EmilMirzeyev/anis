import Image from "next/image";
import Link from "next/link";
import React from "react";
import t from "../Translation";
import s from "../../styles/TheHeader.module.css";

const MobileDropdown = () => {
  return (
    <div className={s.mobile_dropdown}>
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
            
            <Link href={"/whitepaper"}>
            <a>
              <button>{t("whitepaper")}</button>
            </a>
          </Link>
        </ul>
    </div>
  )
}

export default MobileDropdown