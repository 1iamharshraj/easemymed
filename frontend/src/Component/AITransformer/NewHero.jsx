import React from "react";
import HeroImage from "../../Images/hero-cover.jpg";
import { Link } from "react-router-dom";
import claim from "../../Images/claim.png";
import lowPrice from "../../Images/low-price.png";

const NewHero = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-bl from-white via-slate-50 to-blue-100">
      <div className="flex justify-between items-center gap-4">
        <div className="sm:py-28 py-16 px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto">
          {/* heading */}
          <div className="flex flex-col items-start gap-6 max-w-[1024px] mx-auto">
            <div rel="preload">
              <h1 className="font-semibold text-headingSmall md:text-headingLarge text-Heading">
                We are building the <span className="bg-gradient-to-bl from-red-500 via-blue-500 to-blue-400 bg-clip-text text-transparent text-headingSmall md:text-headingLarge">AI Transformer</span> for Health
              </h1>
            </div>

            <p className="text-SubGray text-base md:text-xl max-w-[768px] leading-7 md:leading-8">
              One GenAI platform. Transforming medical documents, patient interactions, hospital context, and the future of care.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/about" className="w-fit">
              <button className="bg-white border-2 border-gray-400 font-semibold px-5 py-3 rounded-2xl text-lg mt-16 hover:-translate-y-1 transition-all duration-500 ease-in-out">
                <span>Learn More About Our Vision</span>
              </button>
            </Link>

            <Link to="/health-copilot" className="w-fit">
              <button className="bg-blue-500 text-white font-semibold px-5 py-3 rounded-2xl text-lg mt-16 hover:-translate-y-1 transition-all duration-500 ease-in-out">
                <span>See Our Solutions in Action</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[62%] 2xl:w-1/2 xl:block hidden relative">
          <img loading="lazy" className="h-full w-full lg:block hidden" src={HeroImage} alt="hero cover image" />

          <div className="absolute z-[50] bottom-28 -left-20 bg-white px-4 py-5 border border-gray-300 rounded-xl shadow-sm shadow-gray-200 font-medium text-Heading flex items-center gap-3">
            <img src={lowPrice} className="h-8" alt="logo" />
            <p className="text-lg">Meet Standards at Minimum Expense</p>
          </div>

          <div className="absolute z-[50] bottom-60 left-10 bg-white p-3 border border-gray-300 rounded-xl shadow-sm shadow-gray-200 font-medium text-Heading flex items-center gap-3">
            <img src={claim} className="h-8" alt="logo" />
            <p className="text-base">No Claim Denials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;