import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "@/components/Divider";

import servs from "/data/services.js";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full space-y-5 h-fit mt-20">
      <h1 className="py-10 mx-auto text-3xl text-center text-[#A48661]">
        SERVIÇOS
      </h1>

      <div className="flex w-full justify-center">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-[80%]">
          {servs.map((elm, index) => (
            <div
              key={index}
              className="[flex: 0 0 calc(33.33% - 100px)] group h-96 w-80 [perspective:1000px] mx-2 my-2"
            >
              <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col items-center justify-start space-y-10 bg-[#1B1B1B] rounded-xl">
                  <FontAwesomeIcon
                    icon={elm.icon}
                    className="p-5 mt-5 text-4xl text-[#A48661]"
                  />
                  <h2 className="text-[#A48661] text-center px-5">
                    {elm.title}
                  </h2>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-[#292724] px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                  <div className="flex flex-col items-center justify-center min-h-full">
                    <p className="text-[#c09d72] p-2 text-center">{elm.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p id="formations"></p>
      <Divider />
    </section>
  );
};

export default Services;
