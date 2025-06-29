import React from "react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
  alt?: string;
}

const brands: Brand[] = [
  { name: "Hero", logo: "/images/hero.png" },
  { name: "Honda", logo: "/images/honda.png" },
  { name: "Bajaj", logo: "/images/bajaj.png" },
  { name: "TVS", logo: "/images/tvs.png" },
  { name: "Royal Enfield", logo: "/images/royal_enfield.png" },
  { name: "Yamaha", logo: "/images/yamaha.png" },
  { name: "KTM", logo: "/images/ktm.png" },
  { name: "Ather", logo: "/images/ather.png" },
  { name: "Ola Electric", logo: "/images/ola_electric.png" },
  { name: "Revolt", logo: "/images/revolt.png" },
  { name: "Ultraviolette", logo: "/images/ultraviolette.png" },
  { name: "Tork Motors", logo: "/images/tork.png" },
];

const Section3: React.FC = () => {
  return (
    <section className="w-[90vw] max-w-6xl mx-auto my-10 bg-white py-12 px-4">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.alt || brand.name}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
