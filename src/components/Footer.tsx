"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171E2B] text-white py-10 px-6 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* Logo block */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-white/10 text-white px-4 py-2 font-bold text-lg cursor-pointer h-fit">
            LOGO
          </div>
        </div>

        {/* Links columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
          
          <div>
            <h3 className="font-bold text-lg mb-3">Lorem Ipsum</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Lorem Ipsum</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Lorem Ipsum</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Lorem Ipsum</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Lorem Ipsum</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
