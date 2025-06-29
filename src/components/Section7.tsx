import React from "react";
import Image from "next/image";

const Section7: React.FC = () => (
  <section className="relative bg-white py-8 px-4 md:px-12">
    <div className="flex flex-col lg:flex-row items-stretch bg-white rounded shadow-lg overflow-hidden">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 min-h-[320px]">
        <Image
          src="/images/on_bike_together.png"
          alt="Two bikers shaking hands"
          fill
          className="object-cover shadow-lg"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-1/2 bg-gray-50 flex flex-col justify-center p-6 md:p-12">
        <h4 className="text-blue-600 text-sm md:text-base font-semibold">Lorem ipsum</h4>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase leading-tight">
          LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. ENIM DONEC.
        </h2>
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6">
          {Array(6)
            .fill("Lorem Ipsum")
            .map((text, idx) => (
              <p key={idx} className="font-semibold text-gray-900">
                {text}
              </p>
            ))}
        </div>
        <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
          Loerum Ipsum
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    {/* Gradient Bar */}
    <div className="mt-6">
      <div className="w-full h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]" />
    </div>
  </section>
);

export default Section7;
