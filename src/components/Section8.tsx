"use client";

import React from "react";

type CardData = {
  icon: React.ReactNode;
  text: string;
  name: string;
  initial: string;
};

const cards: CardData[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <circle cx="12" cy="12" r="4"></circle>
      </svg>
    ),
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
    name: "Jane Cooper",
    initial: "J",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    name: "Ralph Edwards",
    initial: "R",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"></path>
        <path d="M18 11V4H6v7"></path>
        <path d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"></path>
        <path d="M22 11V9"></path>
        <path d="M2 11V9"></path>
        <path d="M6 4V2"></path>
        <path d="M18 4V2"></path>
        <path d="M10 4V2"></path>
        <path d="M14 4V2"></path>
      </svg>
    ),
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium.",
    name: "Courtney Henry",
    initial: "C",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    ),
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet.",
    name: "Cameron Williamson",
    initial: "C",
  },
];

const Section8: React.FC = () => (
  <section className="w-full bg-[#1565d8] py-16 flex flex-col items-center text-white px-4">
    <h2 className="text-2xl md:text-4xl font-bold text-center">
      Join other Sun Harvesters
    </h2>
    <p className="mt-4 max-w-2xl text-center text-gray-200">
      Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
    </p>

    <div className="relative w-full max-w-screen-2xl mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border bg-white text-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex flex-col">
              {card.icon}
              <p className="mt-4 text-gray-700">{card.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200">
                  <span className="flex h-full w-full items-center justify-center rounded-full text-gray-600 font-medium">
                    {card.initial}
                  </span>
                </span>
                <span className="font-medium">{card.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="hidden md:flex absolute inset-y-0 left-2 items-center">
        <button className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-input bg-white shadow-md text-gray-800 hover:bg-accent hover:text-accent-foreground transition">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-2 items-center">
        <button className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-input bg-white shadow-md text-gray-800 hover:bg-accent hover:text-accent-foreground transition">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  </section>
);

export default Section8;
