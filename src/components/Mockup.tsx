"use client";

import React from 'react';
import Image from 'next/image';

const Mockup: React.FC = () => (
  <section
    className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-24 py-10"
    style={{ backgroundColor: '#F3F3F3' }}
  >
    {/* Left content */}
    <div className="flex-1 mb-10 md:mb-0">
      <p className="text-blue-600 font-medium mb-2">Lorem Ipsum</p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Lorem Ipsum Dolor
        <br />
        Sit Amet
      </h1>
      <p className="text-gray-700 mb-8 max-w-xl">
        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
        suspendisse convallis. Urna a urna lectus donec felis risus duis
        pellentesque. Pellentesque ultricies ipsum.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#" className="transition-transform hover:scale-105">
          <Image
            src="/images/google_play.png"
            alt="Get it on Google Play"
            width={150}
            height={50}
          />
        </a>
        <a href="#" className="transition-transform hover:scale-105">
          <Image
            src="/images/app-store.png"
            alt="Download on the App Store"
            width={150}
            height={50}
          />
        </a>
      </div>
    </div>

    {/* Right image */}
    <div className="flex-1 flex justify-center">
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
        <Image
          src="/images/section9_img.png"
          alt="App mockup on phone"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  </section>
);

export default Mockup;
