import React from 'react';

const Cards = ({ image, name, price, storage, users, send }) => {
  return (
    <div className={name === 'Partnership' ? 'bg-[#f0f2f4] w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-100' : 'w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-100' }>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={image} alt={name} />
      <h2 className='text-2xl font-bold text-center py-8'>{name}</h2>
      <p className='text-center text-4xl font-bold'>{price}</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{storage}</p>
        <p className='py-2 border-b mx-8'>{users}</p>
        <p className='py-2 border-b mx-8'>{send}</p>
      </div>
      <button className={name === 'Partnership' ? 'bg-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-[#00DF9A] hover:font-bold' : 'bg-[#00DF9A] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black hover:font-bold'}>Start Trial</button>
    </div>
  );
};

export default Cards;