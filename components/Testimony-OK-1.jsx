"use client";

//https://www.npmjs.com/package/react-responsive-carousel

import React from "react";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimony = () => {
  return (
    <div className="w-full h-fit">
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div className="w-40 h-40">
          <Image
            src="/images/ben-hur.jpg"
            alt="image1"
            width={300}
            height={300}
          />
          <p className="legend">Image 1</p>
        </div>
        <div className="w-40 h-40">
          <Image
            src="/images/pedro.jpg"
            alt="image2"
            width={300}
            height={300}
          />
          <p className="legend">Image 2</p>
        </div>
        <div className="w-40 h-40">
          <Image
            src="/images/thiago.jpg"
            alt="image3"
            width={300}
            height={300}
          />
          <p className="legend">Image 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimony;
