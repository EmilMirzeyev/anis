import React from "react";
import Image from "next/image";
import comingsoonImages from "../../public/images/coming_soon";
import t from "../Translation";
import s from "../../styles/ComingSoon.module.css";
import HeadingLineBottom from "../Atom/HeadingLineBottom";

const ComingSoon = () => {
  return (
    <div className={s.comingsoon}>
      <HeadingLineBottom text={t("comingsoon")} />
      <div className={s.comingsoon_image_wrapper}>
        {comingsoonImages.map((image, i) => (
          <Image src={image} height={50} objectFit="contain" alt="Brand logo" key={i} />
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
