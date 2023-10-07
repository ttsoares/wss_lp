"use client";

import Image from "next/image";

import Link from "next/link";

import React, { useState, useEffect } from "react";

export const MENU_LIST = [
  { text: "HOME", href: "#home" },
  { text: "SERVIÇOS", href: "#services" },
  { text: "FORMAÇÕES", href: "#formations" },
  { text: "PODCAST", href: "#podcast" },
  { text: "SOBRE NÓS", href: "#aboutus" },
];

//-----------------
const Nav = () => {
  const [top, setTop] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 0) {
      setTop(false);
    } else {
      setTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SmoothScroll = (e) => {
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 z-30 flex justify-between w-full h-16 md:h-24 ${
        top ? "bg-transparent" : "bg-[#715C43]/90"
      }`}
    >
      <div className="flex items-center justify-start ml-5">
        <Image src="/images/logo.png" alt="logo" width={160} height={80} />
      </div>

      {/* Burger menu */}
      <div className="relative flex items-center justify-end w-full md:hidden ">
        {showMenu ? (
          <>
            <div className="absolute w-full h-screen -left-[140px] top-0  bg-black/50"></div>
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
          <div className="pr-1" onClick={() => setShowMenu(!showMenu)}>
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
                  <a href={item.href} onClick={SmoothScroll}>
                    {item.text}
                  </a>
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
