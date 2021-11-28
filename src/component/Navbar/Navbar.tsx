import React from "react";
import cookie from "js-cookie";
import router from "next/router";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const logout = () => {
    cookie.remove("token");
    router.push("/");
  };
  return (
    <>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-red-300
        "
      >
        <div className="w-full md:flex  md:w-auto items-center justify-items-center mx-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400 text-xl" href="/">
                Home
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-xl"
                href="/template"
              >
                Create Portfolio
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-xl text-purple-500"
                onClick={() => logout()}
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
