"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carocel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import depos from "/data/testimonis.js";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "-" + "</span>";
  },
};

//----------------------
const Testimony = () => {
  return (
    <div className="w-full md:px-20 md:ml-20 h-fit">
      <Swiper
        pagination={pagination}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        rewind={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {depos.map((depo, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center w-full ">
              <div className="w-full md:w-1/3 px-10 py-5 mt-8 text-center text-[#A48661]">
                <Image
                  className="object-fill w-40 h-40 mx-auto rounded-full"
                  src={depo.img}
                  alt="image slide 1"
                  width={200}
                  height={200}
                />
                <p className="my-2 font-bold">{depo.name}</p>
                <p className="text-sm">{depo.role}</p>
              </div>

              <div className="w-full md:w-2/3 flex flex-col items-center">
                <h2 className="text-[#A48661] text-xl mb-6">{depo.title}</h2>
                <p className="w-[80%] text-justify md:text-left text-lg text-white mb-10">
                  {depo.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimony;
