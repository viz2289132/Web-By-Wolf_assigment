'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => (
  <div className="bg-[#DBDBDB] rounded-sm w-fit">
    <div className="py-2 px-4 rounded-md font-bold text-black">LOGO</div>
  </div>
);

import ButtonWithArrow from './ui/ButtonWithArrow';

const Cta: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-xl my-12 mx-auto flex flex-col justify-center items-center gap-4 text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Logo />

      <h2 className="uppercase font-extrabold text-gray-900 text-xl sm:text-2xl md:text-3xl leading-tight">
        Lorem ipsum dolor, sit amet consectetur. Dui.
      </h2>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at
        exercitationem officia eum adipisci soluta repudiandae, eius deserunt
        cum pariatur, iusto architecto dolores totam aspernatur minus asperiores
        qui. Iure, amet!
      </p>

      <ButtonWithArrow label="Loerum Ipsum" />
    </motion.div>
  );
};

export default Cta;
