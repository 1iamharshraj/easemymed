import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div className={`${props.div}`}>
            <Link to={props.link || '#'}>
                <button className="rounded-lg text-white bg-[#4285F4] py-3 px-5 font-semibold md:text-lg text-base w-full transition-all duration-300 ease-in-out hover:scale-[1.05]" type='submit' onClick={props.event}>
                    {props.text}
                </button>
            </Link>

        </div>
    )
}

export default Button