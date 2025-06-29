"use client";

import React from "react";
import Image from "next/image";

const Banner2: React.FC = () => {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[500px] flex items-center justify-center text-center text-white mt-20 py-20 md:py-0 overflow-hidden">

      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Banner2-Image.png"  
          alt="Banner Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0  bg-opacity-50"></div>
      </div>

      {/* Logo Box */}
      <div className="absolute top-5 left-5 md:top-10 md:left-10 bg-gray-200 text-black px-4 md:px-12 py-2 md:py-3 font-bold text-sm md:text-lg z-20">
        LOGO
      </div>

      {/* Center Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full text-center">
        <h1 className="capitalize max-w-3xl mx-auto text-lg md:text-3xl lg:text-4xl font-bold leading-tight">
          dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
        </h1>
      </div>

    </section>
  );
};

export default Banner2;
