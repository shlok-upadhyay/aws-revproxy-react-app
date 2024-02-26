import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white mx-2'>
      <div className='max-w-[800px] mt-[-96px] pt-12 w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00DF9A] uppercase text-xl font-bold p-2'>Growing with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-6'>Fast, flexible financing for </p>
          <ReactTyped 
            className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-3 pl-2 text-gray-400' 
            strings={["B2B", "B2C", "SaaS"]}
            typeSpeed={120} 
            backSpeed={130} 
            loop 
          />
        </div>
        <p className='md:text-2xl sm:text-xl text-l font-bold text-gray-500 '>Monitor your data analytics to increase revenue for B2B, B2C, & SaaS platforms.</p>
        <button className='bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:font-bold'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;