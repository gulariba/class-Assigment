import React from "react";

import Image from "next/image";
const HeroSection = () => {
    return (
        <section
        className="relative w-full h-[120vh] bg-cover bg-center "
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      >
        {/* Transparent White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm"></div>
      
        {/* Content Container */}
        <div className="relative flex items-center justify-between h-100 px-8 lg:px-16 ">
          {/* Left Content */}
          <div className="max-w-lg text-left pt-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-sky-800">Governor Sindh</h1>
            <p className="text-3xl md:text-4xl  text-sky-800">Kamran Khan Tessori</p>
            <h2 className="text-3xl md:text-5xl font-bold text-sky-500 mt-2">Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
            <ul className="mt-6 space-y-3">
              <li className="text-base md:text-2xl font-bold text-sky-800">Earn up to $5,000 / month</li>
              <li className="text-base md:text-3xl font-roboto font-extrabold text-sky-800">Now admissions are open in Hyderabad</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Apply Now</button>
          </div>
      
          {/* Right Image */}
          <div className="hidden md:block flex-1">
            <Image
              src="/images/profile.png"
              alt="Profile Picture"
              className="w-[600px] h-[500px] " // Adjust size
            />
          </div>
        </div>
      </section>
      
    );
  };
  
  export default HeroSection;
  