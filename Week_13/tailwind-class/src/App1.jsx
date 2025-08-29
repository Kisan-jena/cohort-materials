import React, { useState } from 'react';

const AgeVerification = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-900 text-white'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl font-bold'>
          <span className='text-teal-400'>Webinar</span>.gg
        </h1>
      </div>

      <div className='bg-blue-800 p-8 rounded-lg shadow-lg text-center w-96'>
        <h2 className='text-xl font-semibold mb-4'>Verify Your Age</h2>
        <p className='text-sm mb-6 opacity-75'>
          Please confirm your birth year. This data will not be stored.
        </p>
        <input 
          type='text' 
          placeholder='Your Birth Year' 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          className='w-full p-3 text-black rounded-lg mb-4 focus:outline-none' 
        />
        <button className={`w-full py-3 rounded-lg font-semibold transition-all ${inputValue ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-900'}`}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default AgeVerification;
