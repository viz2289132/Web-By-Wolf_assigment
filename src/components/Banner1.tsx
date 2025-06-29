"use client";

import React from "react";
import Image from "next/image";

const Banner1 = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center text-center text-white mt-20 overflow-hidden py-20 md:py-0">

      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Banner1-Image.png"  
          alt="Banner Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0  bg-opacity-50"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-5 left-5 md:top-10 md:left-10 bg-gray-200 text-black px-4 md:px-12 py-2 md:py-3 font-bold text-sm md:text-lg z-20">
        LOGO
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-screen-xl w-full text-center">
        <h1 className="text-lg md:text-3xl lg:text-4xl font-bold">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
        </h1>
        <p className="mt-6 text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet.
          Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu 
          vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
        </p>
        <p className="mt-4 text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in 
          tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam 
          lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>
        <div className="mt-6">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold text-sm md:text-base rounded-md hover:bg-gray-200 transition">
            Lorem Ipsum
          </button>
        </div>
      </div>

    </section>
  );
};

export default Banner1;
