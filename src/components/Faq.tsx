"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Ut enim ad minim veniam quis nostrud exercitation?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer:
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-s2 antialiased overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="py-20 px-5">
          <h1 className="text-3xl md:text-4xl font-bold text-left">
            FREQUENTLY ASKED QUESTIONS (FAQs)
          </h1>
        </div>

        <div>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-300 cursor-pointer px-5 py-6"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 font-semibold text-lg">
                  {faq.question}
                </div>
                <div className="flex items-center justify-center rounded-full border border-gray-400 size-8 hover:border-black transition">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </div>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
