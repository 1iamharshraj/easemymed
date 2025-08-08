import React, { useState, useRef } from 'react';
import { showReactToast } from "../Component/Common/ReactToast";
import Button from '../UI/ButtonBlue';
import emailjs from '@emailjs/browser';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const ContactUs = () => {

    const form = useRef();

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });

    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({ ...userData, [name]: value });

    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        // Check if all fields are filled out
        const { firstName, lastName, phone, email, message } = userData;
        if (!firstName || !lastName || !phone || !email || !message) {
            showReactToast("Please fill all the fields properly", 'warning');
            return;
        }
    
        // Proceed with sending email if validation passes
        emailjs.sendForm('service_318y4of', 'template_221nu69', form.current, 'yr0VfjegFQRcg4fPA')
            .then((result) => {
                showReactToast("Form submitted successfully", 'success');
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            }, (error) => {
                showReactToast("There was an error sending your message", 'error');
            });
    };

    return (
        <div>
            <Navbar />
            <section className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto py-16'>

                <div className='flex items-center justify-center flex-col'>
                    <p className='font-semibold text-lg text-Blue'>Contact Us</p>
                    <h1 className='md:text-headingLarge text-headingSmall py-8 text-Heading'>Get in touch</h1>
                    <p className='text-SubGray text-subHeadMobile'>We'd love to hear from you. Please fill out this form.</p>
                </div>

                <form ref={form} className='flex flex-col gap-6 py-12 md:py-24 md:w-3/4 xl:w-2/4 mx-auto'>
                    <div className='flex flex-col gap-6 md:flex md:flex-row md:gap-4'>
                        <div
                            className={`flex flex-col gap-2 md:w-1/2 `}>
                            <label htmlFor="FirstName" className='text-sm text-SubGray font-medium'>
                                First Name
                            </label>
                            <input
                                name='firstName'
                                className={`outline-2 border border-gray-300 outline-blue-500 p-2 rounded-lg`}
                                type="text"
                                placeholder='First name'
                                value={userData.firstName}
                                onChange={postUserData}
                                required
                            />
                        </div>

                        <div
                            className='flex flex-col gap-2 md:w-1/2'>
                            <label htmlFor="lastName" className='text-sm text-SubGray font-medium'>
                                Last Name
                            </label>
                            <input
                                name='lastName'
                                className={`outline-1 border border-gray-300 outline-blue-500 p-2 rounded-lg`}
                                type="text"
                                placeholder='Last name'
                                value={userData.lastName}
                                onChange={postUserData}
                                required
                            />
                        </div>
                    </div>

                    <div
                        className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-sm text-SubGray font-medium'>
                            Email
                        </label>
                        <input
                            name='email'
                            className={`outline-1 border border-gray-300 outline-blue-500 p-2 rounded-lg`}
                            type="email"
                            placeholder='you@company.com'
                            value={userData.email}
                            onChange={postUserData}
                            required
                        />
                    </div>

                    <div
                        className='flex flex-col gap-2'>
                        <label htmlFor="phone" className='text-sm text-SubGray font-medium'>
                            Phone Number
                        </label>
                        <input
                            className={`outline-1 border border-gray-300 outline-blue-500 p-2 rounded-lg`}
                            type="number"
                            name='phone'
                            required
                            value={userData.phone}
                            onChange={postUserData}
                        />
                    </div>

                    <div
                        className='flex flex-col gap-2'>
                        <label htmlFor="message" className='text-sm text-SubGray font-medium'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            className={`p-1 outline-1 border border-gray-300 outline-blue-500 h-36 rounded-lg`}
                            value={userData.message}
                            onChange={postUserData}
                            required
                        ></textarea>
                    </div>

                    <Button text={"Send message"} event={sendEmail}/>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUs