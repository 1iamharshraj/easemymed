import React from 'react';
import prescription from "../../Images/prescription.png";
import analytics from "../../Images/analytics.png";
import artificialIntelligence from "../../Images/artificial-intelligence.png";
import security from "../../Images/security.png";

const AIPillars = () => {
  const pillars = [
    {
      icon: prescription,
      title: "Smart Documentation",
      description: "Effortless capture and digitization of medical data via Ambient AI and voice, creating compliant EHRs."
    },
    {
      icon: analytics,
      title: "Seamless Claims & Revenue",
      description: "AI-powered reconciliation, error detection, and automated submissions. Drastically reduce denials, significantly boost collections."
    },
    {
      icon: artificialIntelligence,
      title: "Operational Efficiency",
      description: "Streamlined workflows, automated billing, and real-time insights to optimize hospital processes."
    },
    {
      icon: security,
      title: "Unwavering Compliance & Security",
      description: "Built on HIPAA & ABDM standards with end-to-end encryption. Patient privacy redefined."
    }
  ];

  return (
    <section className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto py-24'>
      <div>
        <h1 className='text-SubGray font-semibold px-4 py-2 text-center text-2xl mb-16'>Where AI Meets Care</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 justify-items-center items-start max-w-6xl mx-auto'>
        {pillars.map((pillar, index) => (
          <div key={index} className='flex flex-col items-start justify-center max-w-[400px]'>
            <img className='pb-5 h-20' src={pillar.icon} alt="icon" />
            <p className='text-Heading text-xl font-medium pb-2'>{pillar.title}</p>
            <p className='text-SubGray text-[17px]'>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIPillars;