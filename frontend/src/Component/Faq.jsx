import React from 'react';
import Accordion from '../UI/Accordion';

const Faq = () => {

    const FaqInfo = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can use the product on your premises for 30-days without incurring any costs."
        },
        {
            question: "Can I change my plan later?",
            answer: "Yes, there will be new features that will make you change your plan."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We hand over all the data digitally so that your operations are not affected. The deletion of patient data from our servers needs agreement by both the patient and you."
        },
        {
            question: "Is my data secure?",
            answer: "We store the data on HIPAA compliant servers while our software is ABDM compliant. Everything is encrypted."
        },
    ]

    return (
        <div className='bg-[#17191f]'>
            <section className='pb-24 pt-12 px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1920px] 2xl:mx-auto '>
                <div className=' flex w-full flex-col'>
                    <div className='flex flex-col gap-5 text-white'>
                        <h1 className='text-4xl font-semibold'>Frequently asked questions</h1>
                        <p className='text-xl'>Everything you need to know about the product and billing.</p>
                    </div>

                    <div className='pt-16 w-full'>
                        {FaqInfo.map((item, index) => (
                            <div key={index} className='mx-auto '>
                                <Accordion title={item.question} info={item.answer} />
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Faq