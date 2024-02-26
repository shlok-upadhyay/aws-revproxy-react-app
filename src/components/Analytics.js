import React from 'react';

import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop' />
        <div className='flex flex-col justify-center '>
          <p className='text-[#00DF9A] uppercase font-bold'>Data analytics dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data analytics centrally</h1>
          <p>Unlock the Power of Your Data with Us. We transform complex data into clear insights, helping businesses make data-driven decisions. Experience the future of analytics with our comprehensive B2B, B2C, and SaaS solutions.</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00DF9A] hover:font-bold'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;