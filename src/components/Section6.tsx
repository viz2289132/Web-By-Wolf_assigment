import Image from "next/image";

const Section6 = () => {
  return (
    <section className="relative w-full bg-[#F1F5F9] py-20 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto h-[765px] overflow-hidden">
        
        {/* Biker 1 - Match updated Biker 2 height */}
        <Image 
          src="/images/bikers1.png"
          alt="Biker vertical"
          width={135}
          height={200}  // Reduced height
          className="absolute top-[109px] left-[735px] object-cover"
        />

        {/* Biker 2 - Reduced height to avoid overlap */}
        <Image 
          src="/images/bikers3.png"
          alt="Biker vertical 2"
          width={135}
          height={200}  // Reduced height from 241 to 200
          className="absolute top-[109px] left-[570px] object-cover"
        />

        {/* Biker 3 */}
        <Image 
          src="/images/bikers2.png"
          alt="Night riders"
          width={459}
          height={240}
          className="absolute top-[80px] left-[900px]  object-cover"
        />

        {/* Biker 4 */}
        <Image 
          src="/images/bikers6.png"
          alt="Group ride"
          width={459}
          height={239}
          className="absolute top-[537px] left-[245px] object-cover"
        />

        {/* Biker 5 - Kept position but added space from Biker 2 */}
        <Image 
          src="/images/bikers5.png"
          alt="Security group"
          width={459}
          height={312}
          className="absolute top-[693px] left-[900px] object-cover"
        />

        {/* Biker 6 */}
        <Image 
          src="/images/bikers4.png"
          alt="Mountain view"
          width={624}
          height={312}
          className="absolute top-[350px] left-[735px] object-cover"
        />

        {/* Biker 7 */}
        <Image 
          src="/images/bikers7.png"
          alt="Dealership"
          width={135}
          height={210}
          className="absolute top-[693px] left-[735px] object-cover"
        />

        {/* Biker 8 */}
        <Image 
          src="/images/bikers8.png"
          alt="Security group"
          width={135}
          height={231}
          className="absolute top-[603px] left-[81px] object-cover"
        />

        {/* Text content */}
        <div className="absolute top-[80px] left-[80px] w-[460px] z-10">
          <h4 className="text-[#475569] text-[20px] font-semibold tracking-wide mb-2">NO LIMITS</h4>
          <h2 className="text-[#0F172A] text-[42px] font-bold uppercase leading-tight mb-4">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-black text-[18px] leading-7 mb-6">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <button className="bg-[#1959AC] text-white px-6 py-2 flex items-center gap-2 shadow-md rounded hover:bg-blue-700 transition">
            Loerum Ipsum
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section6;
