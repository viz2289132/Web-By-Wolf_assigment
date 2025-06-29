import Image from "next/image";

const Section10 = () => {
  return (
    <section className="relative my-16 lg:my-56 bg-[#F8F8F8]">
      <div className="container relative mx-auto h-full pt-4 lg:h-[724px] lg:pt-16">
        {/* Left content */}
        <div className="w-full lg:w-1/2 space-y-6 px-4 py-8 lg:px-0 lg:py-0">
          <h1 className="font-roboto-condensed text-3xl lg:text-5xl font-bold text-brand-secondary">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
          </p>
          <button className="inline-flex items-center gap-2 rounded-md bg-brand-primary text-white font-inter px-8 py-2 text-sm font-medium shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg">
            Leorum ipsum
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[600px] lg:absolute lg:-top-32 lg:right-0 lg:h-[570px] lg:w-[570px]">
          <Image
            src="/images/Section10-Image.png"
            alt="Business discussion"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info card - layered above image */}
        <div className="relative z-10 bottom-0 left-0 w-full lg:absolute lg:bottom-0 lg:w-[546px] lg:shadow-lg">
          <div className="relative bg-white p-4 space-y-3 lg:space-y-6 lg:p-8">
            <Image
              src="/images/icons8-push-pin.png"
              alt="pin"
              width={30}
              height={30}
              className="absolute right-4 top-4"
            />
            <h2 className="text-xl font-medium text-gray-900">Lorem ipsum dolor sit</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultricies lectus viverra pharetra commodo.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient bar */}
      <div className="w-full lg:w-[90%]">
        <div className="h-3 w-full bg-gradient-to-r from-blue-800 via-emerald-600 to-indigo-950"></div>
      </div>
    </section>
  );
};

export default Section10;
