import React from "react";
import TheHeader from "../components/TheHeader/TheHeader";
import Toast from "../components/Toast";

const Layout = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
      <Toast />
    </>
  );
};

export default Layout;
