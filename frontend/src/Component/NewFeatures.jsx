import React from 'react'
import tickCircle from "../Images/tickCircle.svg";

const NewFeatures = () => {

    const features = [
        {
            name: 'Reports',
        },
        {
            name: 'Appointments',
        },
        {
            name: 'Payments',
        },
        {
            name: 'Registration',
        },
        {
            name: 'Purchased',
        },
        {
            name: 'Prescriptions',
        },
        {
            name: 'Claims',
        },
        {
            name: 'Queues',
        },
        {
            name: 'Discharge summaries',
        },
        {
            name: 'Legal',
        },
    ];

    return (
        <div className="hero-scroll-container overflow-x-hidden bg-[#17191f] text-white">
        
                <div className="hero-scroll flex items-center justify-between gap-28 px-mobile xl:px-xlarge lg:px-large max-w-[1920px] w-full py-16">
                    {features.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <img src={tickCircle} className='h-5' alt="Tick" />
                            <p className='text-lg font-medium text-nowrap'>{item.name}</p>
                        </div>
                    ))}

                </div>
         
        </div>
    )
}

export default NewFeatures