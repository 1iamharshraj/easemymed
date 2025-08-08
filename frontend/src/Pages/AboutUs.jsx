import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import visionVideo from '../assets/video/EaseMyMed vision.mp4';
import aiUsesVideo from '../assets/video/AI uses.mp4';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Page Header */}
            <div className='bg-[#4285F4] pt-20 px-mobile xl:px-xlarge lg:px-large text-[#F5F5EE]'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 pb-24'>
                    <h1 className='text-headingMobile font-normal lg:text-headingLG'>About EaseMyMed</h1>
                </div>
            </div>

            {/* Section 1: Our Vision */}
            <section className='px-mobile xl:px-xlarge lg:px-large py-32 bg-white'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#333] mb-16'>Our Vision - The Future of Healthcare</h2>
                    <div className='grid lg:grid-cols-2 gap-20 items-center'>
                        <div>
                            <p className='text-lg text-[#666] leading-relaxed'>
                                At EaseMyMed, we believe in a future where healthcare is fundamentally transformed by Artificial General Intelligence. Our audacious vision is to build the ultimate AI Transformer for Health – a singular GenAI platform capable of understanding and managing every facet of medical operations. This includes deeply analyzing medical documents, understanding nuances in conversations and body language during patient interactions, leveraging hospital context through advanced analytics (e.g., CCTV feeds for operational efficiency, not individual surveillance), and extending care directly to patients' homes. We are pioneering this path with specialized and clinically validated AI agents, moving towards an AI Operating System for Hospital Administration.
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <video 
                                className='w-full h-80 rounded-lg shadow-lg object-cover'
                                controls
                                preload="metadata"
                            >
                                <source src={visionVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Mission */}
            <section className='px-mobile xl:px-xlarge lg:px-large py-32 bg-gray-50'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#333] mb-16'>Our Mission - Accelerating Care, Eliminating Burden</h2>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl'>
                            <p className='text-xl text-[#666] leading-relaxed text-center'>
                                Our immediate mission is to operationalize this vision by tackling the most critical challenges facing healthcare providers today: administrative burden and revenue loss due to inefficient processes. We are dedicated to automating work and accelerating care by eliminating paperwork, streamlining workflows, and ensuring financial health for hospitals. We aim to make every patient experience seamless, precise and fast.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Problem We Solve Today */}
            <section className='px-mobile xl:px-xlarge lg:px-large py-32 bg-white'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#333] mb-16'>The Problem We Solve Today</h2>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl'>
                            <p className='text-xl text-[#666] leading-relaxed text-center'>
                                Healthcare globally grapples with staggering inefficiencies. Over 30% of medical claims are denied, leading to significant revenue loss. Manual processes cause average delays of 18 days, inflating administrative costs. These rejections not only result in financial setbacks but also increase administrative burden. Furthermore, compliance with evolving standards like ABDM, NABH, ICD-10, SNOMED, LOINC, and ISO adds layers of complexity. EaseMyMed directly addresses these issues, ensuring compliance and maximizing efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: How EaseMyMed Delivers Value */}
            <section className='px-mobile xl:px-xlarge lg:px-large py-32 bg-gray-50'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#333] mb-16'>How EaseMyMed Delivers Value</h2>
                    <div className='grid lg:grid-cols-2 gap-20 items-start'>
                        <div className='flex justify-center lg:order-1'>
                            <video 
                                className='w-full h-80 rounded-lg shadow-lg object-cover'
                                controls
                                preload="metadata"
                            >
                                <source src={aiUsesVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='lg:order-2'>
                            <p className='text-lg text-[#666] leading-relaxed mb-10'>
                                EaseMyMed is your AI-powered co-pilot for hospital administration. We fix denials at the root by rectifying documentation errors before submission. Our platform offers:
                            </p>
                            <ul className='space-y-6 text-[#666]'>
                                <li className='flex items-start'>
                                    <span className='text-[#4285F4] mr-4 mt-1 text-xl'>•</span>
                                    <span className='text-lg'><strong>Paperless, Tablet-based Workflows:</strong> Capturing patient data directly, converting it into compliant EHRs.</span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-[#4285F4] mr-4 mt-1 text-xl'>•</span>
                                    <span className='text-lg'><strong>Voice-based & Ambient AI:</strong> For effortless form-filling and data capture, like Dragon Copilot.</span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-[#4285F4] mr-4 mt-1 text-xl'>•</span>
                                    <span className='text-lg'><strong>AI-driven Summarization, Coding & Compliance:</strong> Automatically generating SOAP notes and billing codes, ensuring adherence to complex medical standards (ICD/CPT/HCPCs).</span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-[#4285F4] mr-4 mt-1 text-xl'>•</span>
                                    <span className='text-lg'><strong>Automated Claim Submission & Denial Management:</strong> Our AI analyzes every claim, detects errors, suggests corrections, and can even file prior authorizations and resubmit denied claims automatically, significantly reducing denial risks and accelerating reimbursements.</span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-[#4285F4] mr-4 mt-1 text-xl'>•</span>
                                    <span className='text-lg'><strong>Seamless Integration:</strong> With existing EMRs and government health schemes like PMJAY and CGHS.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Our Impact and Traction */}
            <section className='px-mobile xl:px-xlarge lg:px-large py-32 bg-white'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#333] mb-16'>Our Impact and Traction</h2>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl'>
                            <p className='text-xl text-[#666] leading-relaxed text-center'>
                                We are building in a rapidly growing market, projected to expand from $35B globally to $97B by 2030. EaseMyMed has already secured two paying customers for our product since we started sales in May, demonstrating immediate market validation for our innovative solution. We project a reduction in claim denials by up to 50%, an increase in collections by more than 90%, and an 80% cut in processing time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Our Foundations & Team */}
            <section className='px-mobile xl:px-xlarge lg:px-large py-32 bg-gray-50'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#333] mb-16'>Our Foundations & Team</h2>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl'>
                            <p className='text-xl text-[#666] leading-relaxed text-center'>
                                EaseMyMed is backed by strategic professional engagements and partners, including All India Institute of Medical Sciences (AIIMS) Jodhpur and Indian Institute of Technology (IIT) Jodhpur. Our diverse team, led by co-founders Manik Sejwal and Yashraj Singh, comprises experts in AI, full-stack development, and business development, supported by distinguished advisors from academia and industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Our Commitment to Security and Privacy */}
            <section className='px-mobile xl:px-xlarge lg:px-large py-32 bg-white'>
                <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#333] mb-16'>Our Commitment to Security and Privacy</h2>
                    <div className='flex justify-center'>
                        <div className='max-w-4xl'>
                            <p className='text-xl text-[#666] leading-relaxed text-center'>
                                We prioritize the security and privacy of sensitive patient data above all else. Our platform is built to be ABDM-compliant and secure, utilizing end-to-end encryption. We store data on HIPAA-compliant servers while our software is ABDM compliant. Everything is encrypted. This ensures that patient privacy is redefined through robust measures and adherence to the highest standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutUs;