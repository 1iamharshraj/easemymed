import React from 'react'
import mockup from "../Images/erx-mockup.png";

const Mockup = () => {
    return (
        <div className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto sm:py-24 py-16 flex flex-col items-center mt-16'>
            <img
                src={mockup}
                alt="demo dashboard"
                className="mb-10 rounded-lg border-2 border-blue-100 shadow-2xl shadow-blue-200"
            />
        </div>
    )
}

export default Mockup