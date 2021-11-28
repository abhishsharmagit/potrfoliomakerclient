import React from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import cookie from "js-cookie";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const token = cookie.get("token");
  const showLayout: boolean = !["/"].includes(router.pathname);
  const result = ["/result"].includes(router.pathname);

  return (
    <div
      className={`flex flex-col justify-between w-full ${
        result ? "background-rocket" : ""
      }`}
    >
      {showLayout && <Navbar />}
      <div className={`h-full w-full ${showLayout ? "main-content" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
