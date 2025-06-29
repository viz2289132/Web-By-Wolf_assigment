"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto w-full min-h-dvh flex flex-col lg:flex-row overflow-hidden bg-white">
      
      {/* LEFT: Content */}
      <div className="relative z-10 w-full lg:w-1/2 2xl:w-1/3 space-y-12 flex flex-col justify-center p-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis...
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex w-full gap-3 md:w-2/3">
            <input
              type="text"
              placeholder="example@mail.com"
              className="w-full p-4 h-12 rounded border border-gray-300 bg-transparent text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="inline-flex items-center justify-center gap-2 text-sm shadow bg-blue-600 hover:bg-blue-700 h-12 text-white px-4 py-2 rounded-md font-semibold tracking-wider"
            >
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-check fill-blue-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <p>No credit required!</p>
          </div>
        </div>
      </div>

      {/* RIGHT: Hero image with diagonal cut */}
      <div className="relative hidden lg:block w-full lg:w-1/2 min-h-[400px] lg:min-h-dvh clip-diagonal-right">
        <Image
          src="/images/hero_img.png"
          alt="Motorcycle Riders"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

    </section>
  );
};

export default HeroSection;
