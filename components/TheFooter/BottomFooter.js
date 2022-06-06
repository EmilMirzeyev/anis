import React from "react";
import t from "../Translation";
import s from "../../styles/TheFooter.module.css";

const BottomFooter = () => {
  return (
    <div className={s.bottom_footer}>
      <div className={[s.bottom_footer_wrapper, "wrapper"].join(" ")}>
        <p>{t("footer_copyright")}</p>
        <p>{t("footer_created")}</p>
      </div>
    </div>
  );
};

export default BottomFooter;
