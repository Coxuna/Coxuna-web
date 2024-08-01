import React, { Fragment } from 'react';
import Dollar from '../../../assets/svg/hourlySupport.svg';
import Stack from '../../../assets/svg/stack.svg';
import Clock from '../../../assets/svg/clock.svg';

const WhyChooseUs: React.FC = () => {
  return (
    <Fragment>
      <main className='bg-white py-8 px-4 mb-20'>

      <div className='my-8 sm:my-12 md:my-16 lg:my-20 text-center'>
          <p className='text-[#F62E8E] text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-custom font-bold'>
            How does it work?
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {/* cards */}
          <div className='bg-white shadow-lg p-6 rounded-lg'>
            <div className='bg-[#F62E8E] rounded-md w-[40px] h-[40px] p-2 flex items-center justify-center'>
              <img className='' src={Dollar} alt='Dollar Icon' />
            </div>
            <p className='text-[#F62E8E] mt-4 font-bold text-lg font-custom'>Earn</p>
            <p className='mt-4 font-custom text-sm text-[#4C4D4F]'>
              With Coxuna's powerful features and advanced analytics, you can create educational content and earn from it.
            </p>
          </div>

          {/* card 2 */}
          <div className='bg-[#F62E8E] shadow-md p-6 rounded-lg'>
            <div className='bg-white rounded-md w-[40px] h-[40px] p-2 flex items-center justify-center'>
              <img className='' src={Stack} alt='Stack Icon' />
            </div>
            <p className='mt-4 font-bold text-lg text-white font-custom'>Learn</p>
            <p className='mt-4 font-custom text-sm text-white'>
              Coxuna streamlines the learning process, allowing you to focus on what matters most - learning.
            </p>
          </div>

          {/* cards 3 */}
          <div className='bg-white shadow-lg p-6 rounded-lg'>
            <div className='bg-[#F62E8E] rounded-md w-[40px] h-[40px] p-2 flex items-center justify-center'>
              <img className='' src={Clock} alt='Clock Icon' />
            </div>
            <p className='mt-4 font-bold text-lg text-[#F62E8E] font-custom'>Engage</p>
            <p className='mt-4 font-custom text-sm text-[#4C4D4F]'>
              With Coxuna, you can connect with individuals around the world with similar learning interests, spark innovation and do great stuff!
            </p>
          </div>
        </div>
        {/* button  */}
        <div className='col-span-3 mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex justify-center'>
            <button className='py-3 px-6 sm:py-4 sm:px-8 rounded-md border border-[#F62E8E]'>
              <p className='capitalize text-[#F62E8E] font-bold font-custom'>download app</p>
            </button>
          </div>
      </main>
    </Fragment>
  );
};

export default WhyChooseUs;
