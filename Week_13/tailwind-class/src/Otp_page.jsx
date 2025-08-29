import React, { useState, useRef } from 'react';

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    let value = event.target.value;
    if (isNaN(value)) return;
    
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    console.log(inputRefs.current[index].value)
    
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (event.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1].focus();
    } 
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-900 text-white'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl font-bold'>OTP Verification</h1>
        <p className='text-sm opacity-75'>Enter the 6-digit code sent to your device</p>
      </div>

      <div className='bg-blue-800 p-8 rounded-lg shadow-lg text-center w-96'>
        <div className='flex justify-center space-x-3 mb-6'>
          {otp.map((digit, index) => (
            <input 
              key={index}
              type='text' 
              maxLength='1' 
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className='w-12 h-12 text-black text-xl text-center rounded-lg border-amber-500 '
            />
          ))}
        </div>
        <button 
          className={`w-full py-3 rounded-lg font-semibold transition-all ${otp.join('').length === 6 ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-400 text-gray-900'}`}
          disabled={otp.join('').length !== 6}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpPage;
