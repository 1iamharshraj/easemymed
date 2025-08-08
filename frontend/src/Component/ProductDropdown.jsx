import React, { useState } from 'react';

const ProductDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className={`${props.textStyle} flex items-center gap-1`}
            >
                Solutions
                <span>
                    <svg height={props.svgArrowHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill={props.svgArrowColor} />
                    </svg>
                </span>
            </button>

            <div
                className={`absolute right-0 mt-6 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 z-[200] ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <div className="py-1">
                    <a
                        href="/health-copilot"
                        className={`${props.menuTextStyle} block px-4 py-2 hover:bg-blue-50 text-nowrap`}
                    >
                        Health Copilot
                    </a>
                    <a
                        href="/health-facility-product"
                        className={`${props.menuTextStyle} block px-4 py-2 hover:bg-blue-50 text-nowrap`}
                    >
                        Paperless
                    </a>
                    <a
                        href="https://mydigimitra.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${props.menuTextStyle} block px-4 py-2 hover:bg-blue-50 text-nowrap`}
                    >
                        DigiMitra
                    </a>
                    <div className={`${props.menuTextStyle} block px-4 py-2 text-gray-400 cursor-not-allowed text-nowrap`}>
                        NusVis (coming soon)
                    </div>
                    <div className={`${props.menuTextStyle} block px-4 py-2 text-gray-400 cursor-not-allowed text-nowrap`}>
                        CognilinQ (coming soon)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDropdown;