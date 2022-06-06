import React from "react";
import Image from "next/image";
import Link from "next/link";
import t from "../Translation";
import s from "../../styles/TheFooter.module.css";
import BottomFooter from "./BottomFooter";

const TheFooter = () => {
  return (
    <div className={s.footer}>
      <div className={[s.footer_wrapper, "wrapper"].join(" ")}>
        <div className={s.footer_slogan}>
          <Image src={"/images/anis_coin_logo.png"} width={50} height={44.44} />
          <p>{t("banner_title")}</p>
        </div>
        <div className={s.footer_company}>
          <h3>{t("company")}</h3>
          <Link href={"/staking"}>
            <a>{t("staking")}</a>
          </Link>
          <Link href={"/minimap"}>
            <a>{t("mini_map")}</a>
          </Link>
          <Link href={"/marketplace"}>
            <a>{t("marketplace")}</a>
          </Link>
        </div>
        <div className={s.footer_legal}>
          <h3>{t("legal")}</h3>
          <Link href={"/whitepaper"}>
            <a>{t("whitepaper")}</a>
          </Link>
          <Link href={"/privacy_policy"}>
            <a>{t("privacy_policy")}</a>
          </Link>
          <Link href={"/risk_disclaimer"}>
            <a>{t("risk_disclaimer")}</a>
          </Link>
        </div>
        <div className={s.footer_contacts}>
          <h3>{t("contact_info")}</h3>
          <a href="mailto:info@aniscoin.finance">
            Email: info@aniscoin.finance
          </a>
          <ul className={s.footer_social_networks}>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <Image src={"/vectors/instagram.svg"} layout="fill" />
              </li>
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <Image src={"/vectors/twitter.svg"} layout="fill" />
              </li>
            </a>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <Image src={"/vectors/youtube.svg"} layout="fill" />
              </li>
            </a>
            <a
              href="http://telegram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <Image src={"/vectors/telegram.svg"} layout="fill" />
              </li>
            </a>

          </ul>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default TheFooter;
