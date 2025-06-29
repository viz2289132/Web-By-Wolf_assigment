'use client';

import React from 'react';
import Image from 'next/image';

interface CardData {
  image: string;
  title: string;
  description: string;
  link: string;
}

const cardData: CardData[] = [
  {
    image: '/images/blog_post_img1.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.',
    link: '#',
  },
  {
    image: '/images/blog_post_img2.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.',
    link: '#',
  },
  {
    image: '/images/blog_post_img3.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.',
    link: '#',
  },
  {
    image: '/images/blog_post_img4.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate.',
    link: '#',
  },
];

const Section4: React.FC = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:px-0 lg:gap-16">
        <div className="max-w-2xl space-y-2 md:space-y-4">
          <a
            href="#"
            className="inline-block font-inter text-lg font-semibold text-blue-600 transition-colors hover:text-blue-800"
          >
            Lorem ipsum dolor sit amet
          </a>
          <h2 className="font-roboto-condensed text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            LOREM IPSUM DOLOR SIT
          </h2>
          <h3 className="text-md font-inter text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
            porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis
            aliquet. Hendrerit tellus at purus lectus.
          </h3>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-14">
            {cardData.map((card, index) => (
              <a
                key={index}
                href={card.link}
                className="group overflow-hidden rounded-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4 p-4">
                    <div className="space-y-3">
                      <h3 className="font-inter text-lg font-semibold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="font-inter text-sm leading-relaxed text-gray-700">
                        {card.description}
                      </p>
                    </div>
                    <div className="mb-3 md:mb-14">
                      <span className="font-inter text-sm font-semibold text-blue-600 underline transition-colors group-hover:text-blue-800">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
