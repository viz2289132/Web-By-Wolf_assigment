"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    desc: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    desc: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    desc: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.",
  },
];

const Section2 = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto bg-white px-4 md:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto py-12 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <p className="text-blue-700 font-semibold">Lorem ipsum dolor sit amet</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-1">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <Image
                  src="/images/ThirdLogo.png"
                  alt={`icon-${i}`}
                  width={32}
                  height={32}
                  className="object-contain mt-1"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">{f.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/Section2new-Image.png"
            alt="Two people talking"
            width={600}
            height={600}
            className="rounded-lg w-full object-cover max-h-[600px]"
          />
        </div>
      </div>

      <div className="h-2 w-full bg-gradient-to-r from-blue-800 via-green-500 to-purple-900" />
    </section>
  );
};

export default Section2;
