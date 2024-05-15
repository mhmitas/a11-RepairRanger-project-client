import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import allrangers from '../../../../assets/allrangers.png'

const BestPart = () => {
    return (
        <div>

            <div className='mt-20 lg:grid grid-cols-2 shadow-xl p-4 rounded-md border-none bg-base-100'>
                <div className='*:pb-4 md:px-6 *:p-4 rounded-md bg-base-200 *:rounded-md'>
                    <div>
                        <h3 className='text-3xl my-6 font-semibold'>The best part? Everything.</h3>
                        <h3 className='flex items-center text-2xl font-semibold gap-2 py-2'><IoCheckmarkCircleOutline className=""></IoCheckmarkCircleOutline>Stick to your budget  </h3>
                        <p className='text-xl'>Find the right service for every price point. No hourly rates, just project-based pricing</p>
                    </div>
                    <div>
                        <h3 className='flex items-center text-2xl font-semibold gap-2 py-2'><IoCheckmarkCircleOutline className=""></IoCheckmarkCircleOutline> Get quality work done quickly</h3>
                        <p className='text-xl'>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                    </div>

                    <div>
                        <h3 className='flex items-center text-2xl font-semibold gap-2 py-2'><IoCheckmarkCircleOutline className=""></IoCheckmarkCircleOutline>Upfront quotes mean no surprises</h3>
                        <p className='text-xl'>Payments only get released when you approve.</p>
                    </div>

                    <div>
                        <h3 className='flex items-center text-2xl font-semibold gap-2 py-2'><IoCheckmarkCircleOutline className=""></IoCheckmarkCircleOutline> Count on 24/7 support</h3>
                        <p className='text-xl'> Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <img src={allrangers} className='w-full ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default BestPart;