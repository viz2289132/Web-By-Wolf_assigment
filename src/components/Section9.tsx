import Image from 'next/image';

const Section9 = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background stars pattern */}
      <div className="absolute inset-0 -z-10 bg-stars-pattern bg-cover bg-center opacity-80"></div>

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 py-32">
        
        {/* Left: Text content */}
        <div className="relative z-10 flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-text-s1">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <div className="mt-4 flex border border-gray-300 rounded-lg overflow-hidden w-full max-w-sm">
            <button className="flex-1 py-2 text-center text-sm md:text-base font-medium text-text-s1 border-r border-gray-300 hover:bg-s2 transition">
              Research
            </button>
            <button className="flex-1 py-2 text-center text-sm md:text-base font-medium text-text-s1 border-r border-gray-300 hover:bg-s2 transition">
              Plan
            </button>
            <button className="flex-1 py-2 text-center text-sm md:text-base font-medium bg-p1/20 text-text-s1">
              Design
            </button>
          </div>

          <p className="text-gray-600 mt-4 max-w-lg text-sm md:text-base">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
          </p>

          <button className="mt-4 flex items-center gap-2 text-p1 font-semibold underline-offset-4 hover:underline transition">
            Check tools
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right: Image */}
        <div className="relative z-10 flex-1 flex justify-center">
          <div className="relative w-[500px] h-[300px]">
            <Image
              src="/images/section9.png"
              alt="Handshake"
              fill
              className="shadow-md object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
