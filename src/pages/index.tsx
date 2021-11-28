import Cookies from "js-cookie";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";

const Home: NextPage = () => {
  const AuthURL: any = process.env.AUTH_URL;
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      Router.push(`/home/${token}`);
    }
  });
  return (
    <>
      {!token && (
        <div className="background-image">
          <h1 className="mx-auto tracking-wide text-6xl items-center text-center pt-20 pb-10 font-extrabold text-white">
            Make Awesome Portfolio
          </h1>
          <Link href={AuthURL}>
            <button className="mx-auto flex rounded-full items-center text-base focus:outline-none outline-none border-none font-poppins border pl-8 pr-8 py-2 font-semibold bg-green-500 hover:bg-blue-500">
              Login with Github
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
