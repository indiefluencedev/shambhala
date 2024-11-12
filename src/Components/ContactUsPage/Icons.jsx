import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 py-8">
      {/* Phone Icon Box */}
      <div className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] text-center bg-opacity-0">
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md rounded-lg pointer-events-none"></div>
        <FaPhone className="text-3xl text-white mb-2 relative z-10" />
        <p className="text-white text-sm font-semibold mt-2 relative z-10">
          +91 12345 67890<br />+91 12345 67890
        </p>
      </div>

      {/* Email Icon Box */}
      <div className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] text-center bg-opacity-0">
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md rounded-lg pointer-events-none"></div>
        <FaEnvelope className="text-3xl text-white mb-2 relative z-10" />
        <p className="text-white text-sm break-all font-semibold mt-2 relative z-10">
          shambhalaspiritualfoundation@gmail.com
        </p>
      </div>

      {/* Location Icon Box */}
      <div className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] text-center bg-opacity-0">
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md rounded-lg pointer-events-none"></div>
        <FaMapMarkerAlt className="text-3xl text-white mb-2 relative z-10" />
        <p className="text-white text-sm font-semibold mt-2 relative z-10">
          Shambhala Spiritual Foundation,<br />Uttam Nagar, New Delhi, 110059
        </p>
      </div>
    </div>
  );
};

export default Icons;
