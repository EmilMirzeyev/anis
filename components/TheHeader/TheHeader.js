import Image from "next/image";
import Link from "next/link";
import React from "react";
import t from "../Translation";
import s from "../../styles/TheHeader.module.css";
import Button from "../Atom/Button";
import MobileDropdown from "./MobileDropdown";

const TheHeader = () => {
  return (
    <div className={s.header}>
      <div className={[s.header_container, "wrapper"].join(" ")}>
        <div className={s.logo}>
          <Image src={"/images/anis_coin_logo.png"} layout="fill" />
        </div>
        <div className={s.hamburger_menu}>
          <div></div>
          <div className={s.menu_bar_middle}></div>
          <div></div>
        </div>
        <ul className={s.navbar}>
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
        <ul className={s.social_networks}>
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
      <MobileDropdown />
    </div>
  );
};

export default TheHeader;
