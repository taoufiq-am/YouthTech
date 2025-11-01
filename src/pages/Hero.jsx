import React from "react";

export const Hero = () => {
  return (
    <div className=" bg-gradient-to-r  from-blue-100 to-blue-300 pt-32 pb-20 min-h-screen ">
      <div className="max-w-7xl  mx-auto  flex flex-col lg:flex-row items-center justify-between px-7 lg:px-16">
      
        {/* LEFT TEXT DIV */}
        <div className="lg:w-1/2 space-y-8">

          {/* Tagline / Emoji Heading */}
          <p className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            🚀 Build Your Online <br /> Presence with{" "}
            <span className="text-blue-600">YouthTech</span>
          </p>

          {/* Subheading */}
          <p className="text-gray-600 text-lg leading-relaxed">
            At YouthTech, we design and develop professional websites that help
            your business grow. From sleek landing pages to full corporate
            platforms — we build sites that inspire trust and deliver results.
          </p>

          {/* Button */}
          <div className="pt-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2">
              🌐 Discover Our Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src="/hero_img.svg" 
            alt="Website design illustration"
            className="w-[500px] max-w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
