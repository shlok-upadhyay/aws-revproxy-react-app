import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-6'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 w-full rounded-md text-black' type='email' placeholder='Enter Email' name='email' id='email' autoComplete='on' />
            <button className='bg-[#00DF9A] w-[200px] rounded-md font-medium sm:ml-4 my-6 py-3 text-black hover:font-bold'>Notify Me</button>
          </div>
          <p>We care about the protection of your data. Read our <button className='text-[#00DF9A]' href='#'>Privacy Policy</button>.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;