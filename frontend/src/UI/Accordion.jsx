import React, { useState } from 'react';
import Plus from "../Images/plus.svg"
import Minus from "../Images/minus.svg"

const Accordion = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-400">
            <div className="flex justify-between items-center cursor-pointer pb-6 transition-all duration-300 ease-in-out pt-8" onClick={toggleAccordion}>
                <h2 className='text-xl font-semibold text-white'>{props.title}</h2>
                <span>{isOpen ?
                    <img src={Minus} className='w-6 h-6' alt="" />

                    :
                    <img src={Plus} className='w-6 h-6' alt="" />
                }</span>
            </div>

            <div className=''>
                {isOpen && (
                    <div className="pb-8 text-gray-200">
                        {props.info}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Accordion