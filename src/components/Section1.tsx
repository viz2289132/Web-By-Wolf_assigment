"use client";

import React from "react";
import Image from "next/image";
import ButtonWithArrow from "./ui/ButtonWithArrow";
import { Phone } from "lucide-react";

const Section1 = () => {
  return (
    <div className="relative bg-white">
      <section className="relative flex flex-col lg:flex-row justify-between pt-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12">
        
        {/* LEFT CARD */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-blue-700 font-semibold">Lorem ipsum dolor sit</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. 
              Mi porttitor ut aliquam mattis maecenas eget integer in nam.
            </p>
          </div>

          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-start gap-4">
                <Image
                  src={`/images/blog_img${i}.png`}
                  alt={`Icon ${i}`}
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
            <ButtonWithArrow label="Loerum Ipsum" />
            <div className="text-blue-700 flex items-center gap-2 font-semibold">
              <Phone />
              <span>123456789</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-end items-center relative mt-10 lg:mt-0">
          <div className="w-full 2xl:w-[70%] min-h-[700px] relative">
            <Image
              src="/images/motorcycles.png"
              alt="Motorcycles"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gradient bar aligned like Section2 */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="h-2 w-full bg-gradient-to-r from-blue-800 via-green-500 to-purple-900"></div>
      </div>

      {/* White space below gradient */}
      <div className="h-16 bg-white"></div>
    </div>
  );
};

export default Section1;
