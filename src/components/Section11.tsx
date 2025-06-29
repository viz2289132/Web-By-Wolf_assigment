"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Artist & Investor",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt.",
    image: "/images/adventure_travel.png",
  },
  {
    title: "Traveler & Explorer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac enim vel risus varius fermentum.",
    image: "/images/adventure_travel.png",
  },
  {
    title: "Entrepreneur & Innovator",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "/images/adventure_travel.png",
  },
];

const Section11 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <h2 className="font-bold text-3xl sm:text-4xl font-heading text-center mb-6">
        LOREM IPSUM DOLOR SIT AMET
      </h2>
      <p className="text-base sm:text-lg text-center max-w-2xl px-6 text-gray-600">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
        Ornare faucibus quis velit fringilla aliquam ultricies.
      </p>

      <div className="w-full max-w-screen-2xl mt-8 px-5 relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row items-center pl-4"
              >
                <div className="relative w-full md:w-3/5">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={800}
                    height={500}
                    className="rounded-r-lg shadow-md"
                  />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/5 -mt-6 md:mt-0 md:ml-6">
                  <h3 className="font-semibold text-lg">{slide.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{slide.description}</p>
                  <button className="inline-flex items-center gap-2 text-blue-500 mt-4 text-sm font-medium hover:underline">
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 opacity-40 hover:opacity-100 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="sr-only">Previous slide</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 opacity-40 hover:opacity-100 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </section>
  );
};

export default Section11;
