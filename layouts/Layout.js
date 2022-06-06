import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Axios from "axios";
import TheHeader from "../components/TheHeader/TheHeader";
import Toast from "../components/Toast";
import TheFooter from "../components/TheFooter/TheFooter";

const Layout = ({ children }) => {
  const router = useRouter();
  Axios.defaults.headers.common["Language"] = router.locale;

  return (
    <>
      <div className="layout_gradient"></div>
      <div className="left_lines_first">
      <Image src={"/vectors/decor_left_lines.svg"} layout="responsive" width={443.81} height={677.18}  />
      </div>
      <div className="left_lines_second">
      <Image src={"/vectors/decor_right_lines.svg"} layout="responsive" width={443.81} height={677.18}  />
      </div>
      <div className="right_lines_first">
      <Image src={"/vectors/decor_right_lines.svg"} layout="responsive" width={443.81} height={677.18}  />
      </div>
      <div className="right_lines_second">
      <Image src={"/vectors/decor_left_lines.svg"} layout="responsive" width={443.81} height={677.18}  />
      </div>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
      <Toast />
    </>
  );
};

export default Layout;
