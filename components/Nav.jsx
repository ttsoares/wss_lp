"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";

import React, { useEffect, useState } from "react";

export const MENU_LIST = [
  { text: "HOME", href: "/" },
  { text: "SERVIÇOS", href: "/services" },
  { text: "FORMAÇÕES", href: "/formation" },
  { text: "PODCAST", href: "/podcast" },
  { text: "SOBRE NÓS", href: "/about" },
];

//-----------------
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [bgNav, setBgNav] = useState("bg-transparent");

  const pathname = usePathname();
  useEffect(() => {
    if (pathname.length > 1) {
      setBgNav("bg-[#a48661]");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`fixed top-0 z-30 flex justify-between w-full h-16 md:h-20 ${bgNav}`}
    >
      <div className="flex items-center justify-start ml-5">
        <Image src="/images/logo.png" alt="WSS logo" width={160} height={80} />
      </div>

      {/* Burger menu */}
      <div className="relative flex items-center justify-end w-full md:hidden ">
        {showMenu ? (
          <>
            <div className="absolute w-full h-screen -left-[120px] top-0  bg-black/50"></div>
            <div
              className="absolute top-0 -right-8 flex flex-col items-end w-2/3 h-screen ml-5 bg-[#1b1b1b] text-[#a48661] border-l-2 border-[#a48661] z-20"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mt-4 mr-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <div className="w-full ">
                <div className="flex flex-col mt-5 ml-8 font-bold">
                  {MENU_LIST.map((item, index) => (
                    <div
                      key={index}
                      className="mb-5 text-[#a48661] hover:cursor-pointer hover:animate-pulse"
                    >
                      <Link href={item.href}>{item.text}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className="pr-1 bg-[#a48661]"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Image
              src="/images/icon-hamburger.svg"
              alt="menu"
              width={20}
              height={20}
              className=""
            />
          </div>
        )}
      </div>
      {/* desktop menu */}
      <div className="flex items-center ">
        <div className="flex items-center justify-start ml-5 w-fit flex-nowrap">
          <div className="hidden md:flex  w-fit flex-nowrap">
            {MENU_LIST.map((item, index) => (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <div className="h-3 mb-5 text-lg font-semibold text-black mx-4 peer hover:cursor-pointer hover:animate-bounce">
                  <a href={item.href}>{item.text}</a>
                </div>
                <div className="invisible w-16 h-0.5 mx-4 -mt-2 bg-black rounded-lg peer-hover:visible"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
