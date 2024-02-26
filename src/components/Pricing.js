import React from 'react';

import Cards from './Card';

import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Pricing = () => {
  const prices = [
    {
      image: Single,
      name: 'Single User',
      price: '$149',
      storage: '500 GB Storage',
      users: '1 User Allowed',
      send: 'Send upto 2 GB'
    },
    {
      image: Double,
      name: 'Partnership',
      price: '$199',
      storage: '1 TB Storage',
      users: '3 User Allowed',
      send: 'Send upto 10 GB'
    },
    {
      image: Triple,
      name: 'Group Account',
      price: '$299',
      storage: '5 TB Storage',
      users: '10 User Allowed',
      send: 'Send upto 20 GB'
    }
  ];

  return (
    <div className='w-full py-[5rem] px-4 bg-white'>
      <h1 className='text-center md:text-4xl sm:text-3xl text-2xl font-bold pb-3'>Transparent Pricing Plans</h1>
      <p className='text-[#00DF9A] text-center sm:text-xl font-bold pb-16'>Pick a plan to grow your business now!</p>
      <div className='max-w-[1240px] mx-auto my-6 grid md:grid-cols-3 gap-8'>
          {prices.map(item => (
            <Cards key={item.name} image={item.image} name={item.name} price={item.price} storage={item.storage} users={item.users} send={item.send} />
          ))}
      </div>
    </div>
  );
};

export default Pricing;