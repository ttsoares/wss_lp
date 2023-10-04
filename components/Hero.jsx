"use client";

import Image from "next/image";
import React from "react";

import Divider from "./Divider";

const Hero = () => {
  return (
    <>
      <div id="home" className="relative w-full h-96 md:h-screen">
        <div className="w-full">
          <Image src="/images/firenze.webp" alt="Firenze" fill />
        </div>
        <div className="absolute inset-0 w-full h-96 md:h-screen bg-gradient-to-b from-white to-black mix-blend-multiply"></div>

        <div className="absolute py-8 pl-4 pr-48 space-y-4 text-4xl font-light tracking-widest text-white top-32 md:top-72 backdrop-brightness-50 left-0 md:left-28">
          <h1 className="">A</h1>
          <h1 className="">SEGURANÇA</h1>
          <h1 className="">DIGITAL DO</h1>
          <h1 className="font-semibold">SEU MUNDO</h1>
        </div>
      </div>
      <Divider />
      <p id="services"></p>
    </>
  );
};

export default Hero;
