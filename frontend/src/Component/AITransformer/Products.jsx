import React from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Tablet from "../../Images/tablet.svg";
import aiUsesVideo from '../../assets/video/AI uses.mp4';
import icuImage from '../../assets/images/ICU.jpg';
import nusvisImage from '../../assets/images/NusVis_Generated.png';

const Products = () => {
  return (
    <section className="my-24">
      <div className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto">
        <h1 className="text-SubGray font-semibold px-4 py-2 text-center text-2xl mb-16">
          Products
        </h1>

        {/* Health Copilot */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <div className="pb-16 lg:w-1/2 w-full lg:pr-8">
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal">
                <span className="text-blue-500 text-headingSmall md:text-headingLarge">EaseMy</span>
                <span className="text-red-500 text-headingSmall md:text-headingLarge">Med</span> <span className="text-black text-headingSmall md:text-headingLarge">Co-Pilot</span>
              </p>
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                AI-powered co-pilot for hospital administration. Paperless workflows, ambient AI, and seamless documentation that keeps doctors focused on patient care.
              </p>

              <Link to="/health-copilot">
                <button className="mt-10 font-medium text-blue-500 flex items-end gap-1 hover:underline">
                  Learn more
                  <span className="pb-[3px]">
                    <HiMiniArrowTopRightOnSquare />
                  </span>
                </button>
              </Link>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center">
              <video 
                className='w-full h-96 rounded-lg shadow-lg object-cover'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={aiUsesVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* EaseMyMed Paperless */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <img
              src={Tablet}
              className="lg:w-1/2 w-full"
              alt="EaseMyMed Paperless mockup"
            />

            <div className="pb-16 lg:w-1/2 w-full lg:pl-8">
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal">
                <span className="text-blue-500 text-headingSmall md:text-headingLarge">EaseMy</span>
                <span className="text-red-500 text-headingSmall md:text-headingLarge">Med</span> Paperless
              </p>
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                Paper persists in healthcare for its flexibility, but EaseMyMed
                bridges the gap to digital, reducing inefficiencies and keeping
                doctors focused on patient care
              </p>

              <Link to="/health-facility-product">
                <button className="mt-10 font-medium text-blue-500 flex items-end gap-1 hover:underline">
                  Learn more
                  <span className="pb-[3px]">
                    <HiMiniArrowTopRightOnSquare />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* DigiMitra */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <div className="pb-16 lg:w-1/2 w-full lg:pr-8">
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal">
                <span className="text-blue-500 text-headingSmall md:text-headingLarge">DigiMitra</span>
              </p>
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                Advanced ICU monitoring and patient care management system. Real-time analytics and AI-powered insights for critical care environments.
              </p>

              <a 
                href="https://mydigimitra.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="mt-10 font-medium text-blue-500 flex items-end gap-1 hover:underline">
                  Learn more
                  <span className="pb-[3px]">
                    <HiMiniArrowTopRightOnSquare />
                  </span>
                </button>
              </a>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center relative">
              <div className="relative w-full">
                <img
                  src={icuImage}
                  className="w-full h-80 rounded-lg shadow-lg object-cover"
                  alt="ICU monitoring system"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  Live ICU feed example
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NusVis - Coming Soon */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-col xl:flex-row py-4 px-5">
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src={nusvisImage}
                className="w-full h-[30rem] rounded-lg shadow-lg object-cover"
                alt="NusVis surgery planning visualization"
              />
            </div>

            <div className="pb-16 lg:w-1/2 w-full lg:pl-8">
              <p className="font-semibold md:text-5xl text-3xl md:text-nowrap text-wrap leading-normal text-gray-400">
                <span className="text-purple-500 text-headingSmall md:text-headingLarge">Nus</span>Vis
              </p>
              <p className="text-SubGray text-[18px] leading-relaxed pt-6">
                Next-generation surgery planning and visualization system.
              </p>

              <button 
                className="mt-10 font-medium text-gray-400 flex items-end gap-1 cursor-not-allowed"
                disabled
              >
                Coming Soon
                <span className="pb-[3px]">
                  <HiMiniArrowTopRightOnSquare />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/registration">
            <button className="text-xl text-white bg-blue-600 px-6 py-3 rounded-[72px] hover:-translate-y-1 transition-all duration-500 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;