import React from "react";
import { useRouter } from 'next/router'
import Axios from 'axios'
import TheHeader from "../components/TheHeader/TheHeader";
import Toast from "../components/Toast";

const Layout = ({ children }) => {
  const router = useRouter();
  Axios.defaults.headers.common['Language'] = router.locale;

  return (
    <>
      <div className="layout_gradient">
      <TheHeader />
      <main>{children}</main>
      </div>
      <Toast />
    </>
  );
};

export default Layout;
