import React from 'react';
import NavLogo from "../Images/NavLogo.svg";
import logoIcon from "../Images/NavLogo.svg"
import { Link } from 'react-router-dom';
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";

const Footer = () => {

  return (
    <footer className=' pb-4 pt-4 lg:pt-8  bg-[#17191f]'>
      <div className='2xl:max-w-[1920px] 2xl:mx-auto px-mobile xl:px-large lg:px-large'>
        <div className='lg:flex lg:justify-between items-center'>
          {/* left side  */}
          <div className='pt-10 lg:w-2/4'>
            {/* brand logo and tagline */}
            <div>
              <Link to={"/"}>
                <div className='flex items-center gap-3 flex-col sm:flex-row'>
                  <img src={logoIcon} alt="EaseMyMed" className='h-16' />
                </div>
              </Link>
            </div>

            {/* social logos */}
            <div className='pt-4 flex items-center md:justify-start justify-center gap-4'>
              <Link to="http://x.com/easemymed" target='_blank'>
                <img className='h-11' src={twitter} alt="Twitter" title='Twitter' />
              </Link>
              <Link to="http://linkedin.com/company/ease-my-med" target='_blank'>
                <img className='h-11' src={linkedin} alt="Linkedin" title='Linkedin' />
              </Link>
            </div>
          </div>

          {/* right side  */}
          <div className='text-right pt-16 sm:pt-8 text-white'>
            <div>
              <p className='text-sm font-medium text-[#979797]'>Contact Us</p>
              <p>contact@easemymed.com</p>
              <p className='text-sm font-medium text-[#979797] mt-4'>Registered Address</p>
              <p>F-128, Lado Sarai</p>
              <p>New Delhi-110030</p>
              <p className='text-sm font-medium text-[#979797] mt-4'>Locate Us</p>
              <p>Indian Institute of Technology Jodhpur</p>
              <p>Rajasthan, India</p>
            </div>

            {/* map */}
            <div className='pt-6'>
              <iframe title='map' className='rounded-xl w-full h-full shadow-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.525761652536!2d73.10865859678952!3d26.4710115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea672337b%3A0xb6c9a5a9b08db22e!2sIndian%20Institute%20of%20Technology%20(IIT)%2C%20Jodhpur!5e0!3m2!1sen!2sin!4v1725535103866!5m2!1sen!2sin" loading='lazy'></iframe>
            </div>
          </div>
        </div>

        <div className='pt-20'>
          <div className='flex justify-center items-center gap-8 text-[10px] text-gray-400 sm:text-sm'>
            <Link to={"/privacy-policy"}>
              <p className='pb-[2px] border-solid border-[#A4A4A4] border-b-2 w-fit cursor-pointer'>Privacy Policy</p>
            </Link>

            <Link to={"/terms-of-service"}>
              <p className='pb-[2px] border-solid border-[#A4A4A4] border-b-2 w-fit cursor-pointer'>Terms of Service</p>
            </Link>
          </div>

          <div className='flex justify-center items-center pt-5 gap-10'>
            <p className='text-[10px] text-gray-400 sm:text-sm'>All Rights Reserved By AarogyalinQ Private Limited</p>
            <p className='text-[10px] text-gray-400 sm:text-sm'>Built In INDIA</p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer