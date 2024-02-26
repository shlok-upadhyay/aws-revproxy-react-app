import React from 'react';

import { FaRegCopyright, FaLinkedin, FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00DF9A]'><button className='hover:scale-105 duration-500'>DataDive.</button></h1>
        <div>
          <p className='py-4'><FaRegCopyright className='inline-flex' /> 2024 DataDive. Empowering Businesses with Data-Driven Insights. All Rights Reserved.</p>
        </div>
        <div className='flex justify-between md:w-[75%] my-6'>
          <button><FaFacebookSquare size={30} /></button>
          <button><FaInstagramSquare size={30} /></button>
          <button><FaTwitterSquare size={30} /></button>
          <button><FaLinkedin size={30} /></button>
          <button><FaYoutubeSquare size={30} /></button>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-around mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul className='flex flex-col items-start'>
            <li className='py-2 text-sm'><button>Anaytics</button></li>
            <li className='py-2 text-sm'><button>Marketing</button></li>
            <li className='py-2 text-sm'><button>Commerce</button></li>
            <li className='py-2 text-sm'><button>Insights</button></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul className='flex flex-col items-start'>
            <li className='py-2 text-sm'><button>Pricing</button></li>
            <li className='py-2 text-sm'><button>Documentation</button></li>
            <li className='py-2 text-sm'><button>Guides</button></li>
            <li className='py-2 text-sm'><button>API Status</button></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul className='flex flex-col items-start'>
            <li className='py-2 text-sm'><button>About</button></li>
            <li className='py-2 text-sm'><button>Blog</button></li>
            <li className='py-2 text-sm'><button>Jobs</button></li>
            <li className='py-2 text-sm'><button>Press</button></li>
            <li className='py-2 text-sm'><button>Careers</button></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul className='flex flex-col items-start'>
            <li className='py-2 text-sm'><button>Claim</button></li>
            <li className='py-2 text-sm'><button>Policy</button></li>
            <li className='py-2 text-sm'><button>Terms</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;