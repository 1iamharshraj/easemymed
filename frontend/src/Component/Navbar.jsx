import React, { useState } from "react";
import NavLogo from "../Images/NavLogo.svg";
import { Link } from "react-router-dom";
import logoIcon from "../Images/NavLogo.svg";
import ProductDropdown from "./ProductDropdown";

const Navbar = () => {
  const [navCollapse, setNavCollapse] = useState(false);

  const NavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Camps",
      link: "/camps",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];

  return (
    <>
      {/* Mobile menu backdrop */}
      {navCollapse && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setNavCollapse(false)}
        />
      )}
      
    <nav className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto border-b-2 border-[#F2F4F7] relative z-50" name="main-navbar" id="main-navbar">
      <div className="flex items-center justify-between py-5 transition-all duration-400 ease-in-out" name="navbar-header" id="navbar-header">
        <Link to={"/"} name="navbar-logo-link" id="navbar-logo-link">
          <div className="flex items-center gap-3" name="navbar-logo" id="navbar-logo">
            <span className="text-2xl font-bold">
              <span className="text-blue-500">EaseMy</span>
              <span className="text-red-500">Med</span>
            </span>
          </div>
        </Link>

        {navCollapse ? (
          <svg
            onClick={() => setNavCollapse(!navCollapse)}
            className="md:hidden cursor-pointer p-1 hover:bg-gray-100 rounded-md transition-colors z-50"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#667085"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setNavCollapse(!navCollapse)}
            className="md:hidden cursor-pointer p-1 hover:bg-gray-100 rounded-md transition-colors"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#667085"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        <div className="hidden md:flex items-center gap-8 transition-all duration-300 ease-in-out" name="navbar-links" id="navbar-links">
          {NavLinks.map((item, index) => (
            <div className="flex items-center" key={index} name={`navbar-link-item-${item.name.toLowerCase().replace(/\s/g, '-')}`} id={`navbar-link-item-${item.name.toLowerCase().replace(/\s/g, '-')}`}> 
              <ul className="flex items-center gap-2" name={`navbar-link-list-${item.name.toLowerCase().replace(/\s/g, '-')}`} id={`navbar-link-list-${item.name.toLowerCase().replace(/\s/g, '-')}`}> 
                <Link to={item.link} className="text-[#667085] font-semibold" name={`navbar-link-${item.name.toLowerCase().replace(/\s/g, '-')}`} id={`navbar-link-${item.name.toLowerCase().replace(/\s/g, '-')}`}> 
                  {item.name} 
                </Link>
                <img src={item.icon} alt="" name={`navbar-link-icon-${item.name.toLowerCase().replace(/\s/g, '-')}`} id={`navbar-link-icon-${item.name.toLowerCase().replace(/\s/g, '-')}`}/>
              </ul>
            </div>
          ))}
          <ProductDropdown
            textStyle={"text-[#667085] font-semibold"}
            svgArrowHeight={"20px"}
            svgArrowColor={"#667085"}
            name="navbar-product-dropdown"
            id="navbar-product-dropdown"
          />
        </div>
      </div>

      {/* Mobile menu */}
      {navCollapse && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="py-2">
            {NavLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block px-6 py-3 text-[#667085] font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setNavCollapse(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 py-3 border-t border-gray-200 mt-2">
              <div className="text-[#667085] font-semibold mb-2">Solutions</div>
              <div className="pl-4 space-y-2">
                <a
                  href="/health-copilot"
                  className="block py-2 text-sm text-[#667085] hover:text-blue-600 transition-colors"
                  onClick={() => setNavCollapse(false)}
                >
                  Health Copilot
                </a>
                <a
                  href="/health-facility-product"
                  className="block py-2 text-sm text-[#667085] hover:text-blue-600 transition-colors"
                  onClick={() => setNavCollapse(false)}
                >
                  Paperless
                </a>
                <a
                  href="https://mydigimitra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm text-[#667085] hover:text-blue-600 transition-colors"
                  onClick={() => setNavCollapse(false)}
                >
                  DigiMitra
                </a>
                <div className="block py-2 text-sm text-gray-400 cursor-not-allowed">
                  NusVis (coming soon)
                </div>
                <div className="block py-2 text-sm text-gray-400 cursor-not-allowed">
                  CognilinQ (coming soon)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;