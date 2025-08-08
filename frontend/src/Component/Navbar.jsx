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
    <nav className="px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto border-b-2 border-[#F2F4F7]" name="main-navbar" id="main-navbar">
      <div className="flex items-center justify-between py-5 transition-all duration-400 ease-in-out" name="navbar-header" id="navbar-header">
        <Link to={"/"} name="navbar-logo-link" id="navbar-logo-link">
          <div className="flex items-center gap-3" name="navbar-logo" id="navbar-logo">
            <img src={logoIcon} alt="EaseMyMed" name="navbar-logo-img" id="navbar-logo-img" />
          </div>
        </Link>

        {navCollapse ? (
          <svg
            onClick={() => setNavCollapse(!navCollapse)}
            className="md:hidden cursor-pointer"
            width="24"
            height="24"
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
            className="md:hidden cursor-pointer"
            width="24"
            height="24"
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
        <div className="md:hidden bg-white border-t border-gray-200 pb-4">
          {NavLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block px-4 py-2 text-[#667085] font-semibold hover:bg-gray-50"
              onClick={() => setNavCollapse(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-4 py-2">
            <ProductDropdown
              textStyle={"text-[#667085] font-semibold"}
              svgArrowHeight={"20px"}
              svgArrowColor={"#667085"}
              menuTextStyle={"text-[#667085]"}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;