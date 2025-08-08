import React from 'react';
import AIIMS from "../../Images/AIIMS.png";
import IITJ from "../../Images/IITJ.png";
import Swas from "../../Images/swas_logo_only.png";
import Healyantra from "../../Images/Healyantra_logo.png";

const Impact = () => {
  return (
    <section className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto py-24'>
      <div className='text-center mb-16'>
        <h1 className='text-SubGray font-semibold text-2xl mb-6'>Backed by Innovation. Driving Results.</h1>
        <p className='text-SubGray text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto'>
          We're supported by leading institutions like AIIMS Jodhpur and IIT Jodhpur. 
          Our solutions are already increasing the profits by over 10% for our customers.
        </p>
      </div>

      <div className='flex justify-center items-center lg:gap-24 flex-wrap gap-8'>
        <img className='h-[170px] w-44 object-contain' src={AIIMS} alt="AIIMS Jodhpur" />
        <img className='h-[172px] w-44 object-contain' src={IITJ} alt="IIT Jodhpur" />
        <img className='h-[170px] w-44 object-contain' src={Swas} alt="Swasthya Saathi" />
        <img className='h-[170px] w-44 object-contain' src={Healyantra} alt="HealYantra" />
      </div>
    </section>
  );
};

export default Impact;